import { createContext, useState, useEffect } from "react";

export const ContactContext = createContext({});

export function ContextProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  function setSaveContacts(newContacts) {
    setContacts(newContacts);
    localStorage.setItem("Contacts:saved", JSON.stringify(newContacts));
  }

  function addContacts(newContacts) {
    setSaveContacts([...contacts, newContacts]);
  }

  function loadContacts() {
    const saved = localStorage.getItem("Contacts:saved");
    if (saved) {
      setContacts(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadContacts();
  }, []);

  function deletecontacts(contactId) {
    const confirm = window.confirm(
      "Do you want to permanently delete this contact"
    );
    if (confirm) {
      const newContacts = contacts.filter((item) => {
        return item.id !== contactId;
      });
      setSaveContacts(newContacts);
    }
  }

  function onChangeSearch(event) {
    setSearch(event.target.value);
  }
  contacts.sort((a, b) => a.name.localeCompare(b.name));
  const filteredContacts = contacts.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <ContactContext.Provider
      value={{
        filteredContacts,
        search,
        contacts,
        addContacts,
        onChangeSearch,
        deletecontacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}
