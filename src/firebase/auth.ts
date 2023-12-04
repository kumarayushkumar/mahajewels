import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
  onAuthStateChanged
} from 'firebase/auth'

const auth = getAuth()

const login = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  try {
    return await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    return Promise.reject(error)
  }
}

const logout = (): Promise<void> => {
  try {
    return signOut(auth)
  } catch (error) {
    return Promise.reject(error)
  }
}

export { logout, auth, onAuthStateChanged, login }
