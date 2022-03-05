// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    collection,
    getDocs,
    getDoc,
    doc,
    query,
    where,
    getFirestore,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNeez9ULsZL_NBZlf1lSgPcpQSmwF8scI",
    authDomain: "gridkoda.firebaseapp.com",
    projectId: "gridkoda",
    storageBucket: "gridkoda.appspot.com",
    messagingSenderId: "617156484840",
    appId: "1:617156484840:web:fc1ae6ea2375621c49735d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export async function getAllProducts() {
    try {
        const data = collection(db, "productos");
        let productCollection = await getDocs(data);
        const result = productCollection.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return result;
    } catch (error) {
        console.log(error);
    }
}

export async function getProduct(prodId) {
    try {
        const data = collection(db, "productos");
        const theProd = doc(data, prodId);
        let resultDoc = await getDoc(theProd);
        return { id: resultDoc.id, ...resultDoc.data() };
    } catch (error) {
        console.log(error);
    }
}

export async function getProductCategory(categoryId) {
    try {
        const data = collection(db, "productos");

        let que = query(data, where("categoryId", "==", categoryId));
        if (categoryId === "sale") {
            que = query(data, where("sale", "==", true));
        }

        const categoryProducts = await getDocs(que);

        const result = categoryProducts.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return result;
    } catch (error) {
        console.log(error);
    }
}
