import { useContext } from "react";
import { ContactContext } from "../context/data";

export default function useContacts() {
    const context = useContext(ContactContext);
    return context
}