import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, updateDoc } from "firebase/firestore";

export async function getItems(userId) {
    const q = query(
        collection(db, "users", userId, "items")
    );

    let items = []

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        items.push(doc.data())
    });

    return items
}

export async function addItem(userId, item) {
    const docRef = await addDoc(collection(db, "users", userId, "items"), item);
    await updateDoc(docRef, {
      id: docRef.id
    });
}