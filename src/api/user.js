import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu } from "../fakeData/fakeMenu"

export const getUser = async (userId) => {
    const docRef = doc(db, "users", userId)
    const docSnapshot = await getDoc(docRef)
    
    if(docSnapshot.exists()) {
        const userReceived = docSnapshot.data()
        return userReceived
    }
}

export const addUser = (userId) => {
    const docRef = doc(db, "users", userId)
    const newDoc = {
        username: userId,
        menu: fakeMenu.LARGE
    }
    setDoc(docRef, newDoc)
}

export const authenticateUser = async (userId) => {
    const existingUser = await getUser(userId)
    if(!existingUser) {
        addUser(userId)
    }
}