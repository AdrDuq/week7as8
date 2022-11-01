import React from "react";
import {
Box,
Input,
Button,
Stack,
useToast,
} from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import { addContact } from "../api/contact";
const AddContact = () => {
const [first, setFirst] = React.useState("");
const [last, setLast] = React.useState("");
const [num, setNum] = React.useState("");
const [address, setAddress] = React.useState("");
const [isLoading, setIsLoading] = React.useState(false);
const toast = useToast();
const { isLoggedIn, user } = useAuth();
const handleContactCreate = async () => {
if (!isLoggedIn) {
toast({
title: "You must be logged in to create a contact",
status: "error",
duration: 9000,
isClosable: true,
});
return;
}
setIsLoading(true);
const contact = {
first,
last,
num,
address,
userId: user.uid,
};
await addContact(contact);
setIsLoading(false);
setFirst("");
setLast("");
setNum("");
setAddress("");
toast({ title: "Contact created successfully", status: "success" });
};
return (
<Box w="40%" margin={"0 auto"} display="block" mt={5}>
<Stack direction="column">
<Input
placeholder="First Name"
value={first}
onChange={(e) => setFirst(e.target.value)}
/>
<Input
placeholder="Last Name"
value={last}
onChange={(e) => setLast(e.target.value)}
/>
<Input
placeholder="Phone Number"
value={num}
onChange={(e) => setNum(e.target.value)}
/>
<Input
placeholder="Home Address"
value={address}
onChange={(e) => setAddress(e.target.value)}
/>
<Button
onClick={() => handleContactCreate()}
disabled={first.length < 1 || isLoading}
variantColor="teal"
variant="solid"
>
Add Contact
</Button>
</Stack>
</Box>
);
};
export default AddContact;