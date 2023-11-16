import { useEffect } from "react"
import { Outlet, Navigate, useNavigate } from "react-router-dom"

import { auth, onAuthStateChanged } from "../../firebase/auth"

export default function Protected() {
  const navigate = useNavigate()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login")
      }
    })
    return () => unsubscribe()
  }, [])

  return (
    <Outlet />
  )
}