import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  DocumentData,
  FirestoreError,
} from "firebase/firestore"
import { db } from "./config"
import { IProduct } from "../interface"

class FirestoreAPIError extends Error {
  constructor(message: string, public code: string) {
    super(message)
    this.name = "FirestoreAPIError"
  }
}

// Get all Products
const getProducts = async (): Promise<DocumentData[]> => {
  try {
    const colRef = collection(db, "products")
    const querySnapshot = await getDocs(colRef)
    const products = querySnapshot.docs.map((doc) => doc.data())
    return products
  } catch (error) {
    if (error instanceof FirestoreError) {
      throw new FirestoreAPIError(`Firestore error: ${error.message}`, error.code)
    } else {
      throw error
    }
  }
}

// Get a single product by sku
const getProduct = async (sku: string): Promise<DocumentData | null> => {
  try {
    const q = query(collection(db, "products"), where("sku", "==", sku))
    const querySnapshot = await getDocs(q)
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data()
    } else {
      return null
    }
  } catch (error) {
    if (error instanceof FirestoreError) {
      throw new FirestoreAPIError(`Firestore error: ${error.message}`, error.code)
    } else {
      throw error
    }
  }
}

// Create a new Product
const createProduct = async (data: IProduct): Promise<string> => {
  try {
    const newProduct = await addDoc(collection(db, "products"), data)
    return newProduct.id
  } catch (error) {
    if (error instanceof FirestoreError) {
      throw new FirestoreAPIError(`Firestore error: ${error.message}`, error.code)
    } else {
      throw error
    }
  }
}

// Delete a Product

export {
  getProducts,
  getProduct,
  createProduct,
  FirestoreAPIError,
}
