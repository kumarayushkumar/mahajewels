import { useEffect } from "react"
import { NavLink, Outlet, Navigate } from "react-router-dom"

import { auth, onAuthStateChanged } from "../../firebase/auth"

export default function Admin() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        return <Navigate to="/login" />
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <section id="admin">
      <h1>hello</h1>
    </section>
  )
}