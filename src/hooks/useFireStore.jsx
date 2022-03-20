import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

const useFireStore = () => {
    const getProduct = async (prodId) => {
        try {
            const data = collection(db, "productos");
            const theProd = doc(data, prodId);
            let resultDoc = await getDoc(theProd);
            return { id: resultDoc.id, ...resultDoc.data() };
        } catch (error) {
            console.log(error);
        }
    };

    const getAllProducts = async () => {
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
    };
    const getProductCategory = async (categoryId) => {
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
    };

    const generarOrder = async (orderData) => {
        try {
            const colec = collection(db, "orden");
            const order = await addDoc(colec, orderData);
            return order.id;
        } catch (error) {
            console.error("Error en la escritura de datos");
        }
    };
    return { getAllProducts, getProduct, getProductCategory, generarOrder };
};

export default useFireStore;
