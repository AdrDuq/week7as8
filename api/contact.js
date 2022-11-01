import { db } from "../firebase";
import {
collection,
addDoc,
updateDoc,
doc,
deleteDoc,
} from "firebase/firestore";
const addContact = async ({ userId, first, last, num, address }) => {
try {
await addDoc(collection(db, "contact"), {
user: userId,
first: first,
last: last,
num: num,
address: address,
createdAt: new Date().getTime(),
});
} catch (err) {}
};
const editContact = async ({ docId, first, last, num, address }) => {
try {
const contactRef = doc(db, "contact", docId);
await updateDoc(contactRef, {
first, last, num, address
});
} catch (err) {
console.log(err);
}
};
const deleteContact = async (docId) => {
try {
const contactRef = doc(db, "contact", docId);
await deleteDoc(contactRef);
} catch (err) {
console.log(err);
}
};
export { addContact, deleteContact, editContact };