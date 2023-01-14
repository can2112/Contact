import React from 'react'
import { ContextProvider } from '../../context/data'
import AddContact from '../contact/Addcont'
import { List } from '../contactList/List'
import { Search } from '../search/Search'

function Home() {
  return (
    <ContextProvider>
        <AddContact />
        <Search />
        <List />
    </ContextProvider>
  )
}

export default Home