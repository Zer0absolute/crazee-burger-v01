import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const syncBothMenus = (userId, menuUpdated) => {
    const docRef = doc(db, "users", userId)
    const newDoc = {
        username: userId,
        menu: menuUpdated,
    }
    setDoc(docRef, newDoc)
}

export const getMenu = async (userId) => {
    const docRef = doc(db, "users", userId)
    const docSnapshot = await getDoc(docRef)
    
    if(docSnapshot.exists()) {
        const { menu } = docSnapshot.data()
        return menu
    }
}