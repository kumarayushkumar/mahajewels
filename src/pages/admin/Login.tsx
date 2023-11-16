import { useState, ChangeEvent, FormEvent, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"

import { auth, login, onAuthStateChanged } from "../../firebase/auth"

interface FormData {
  email: string
  password: string
}

interface Errors {
  email: string
  password: string
}

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState<Errors>({ email: "", password: "" })
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        navigate("/admin")
      }
    })
    return () => unsubscribe()
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: "Invalid email address"
      }))
      return
    }

    if (!formData.password || formData.password.length < 8) {
      setErrors(prevErrors => ({
        ...prevErrors,
        password: "Password must be at least 8 characters"
      }))
      return
    }

    login(formData.email, formData.password)
      .then(user => {
        console.log(`login page` + user)
        toast.success(`Welcome back`)
        navigate("/admin")
      })
      .catch(err => {
        toast.error(err.message)
      })

    setFormData({ email: "", password: "" })
    setErrors({ email: "", password: "" })
  }

  return (
    <>
      {/* <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" /> */}

      <section id="login">
        <div className="container">
          <div className="row">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && (
                  <p className="text-err">{errors.password}</p>
                )}
              </div>
              <button className="" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
