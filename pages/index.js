import { Container, Box, Flex } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
import AddEvent from "../components/AddEvent";
import EventList from "../components/EventList";
import AddContact from "../components/AddContact";
import ContactList from "../components/ContactList";
export default function Home() {
return (
<Container maxW="7x1">
<Box display="flex" alignItems="left" columnGap="2" width="80%">
<Auth />
<AddTodo />
<AddEvent />
<AddContact/>
</Box>
<TodoList />
<EventList />
<ContactList />
</Container>
);
}