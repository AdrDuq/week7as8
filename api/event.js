import { db } from "../firebase";
import {
collection,
addDoc,
updateDoc,
doc,
deleteDoc,
} from "firebase/firestore";
const addEvent = async ({ userId, title, date, description }) => {
try {
await addDoc(collection(db, "event"), {
user: userId,
title: title,
description: description,
date: date,
createdAt: new Date().getTime(),
});
} catch (err) {}
};
const editEvent = async ({ docId, title, description, date }) => {
try {
const eventRef = doc(db, "event", docId);
await updateDoc(eventRef, {
title, description, date
});
} catch (err) {
console.log(err);
}
};
const deleteEvent = async (docId) => {
try {
const eventRef = doc(db, "event", docId);
await deleteDoc(eventRef);
} catch (err) {
console.log(err);
}
};
export { addEvent, deleteEvent, editEvent };