import "./App.css";
import { ContextProvider } from "./context/data";
import AddCon from "./Components/contact/Addcont";
import { List } from "./Components/contactList/List";
import { Routes, Route } from "react-router-dom"
import Home from "./Components/home/Home";
import Sidebar from "./Components/sidebar/Sidebar";

function App() {
  return (
    <div className="App" style={{ paddingLeft: "25%", paddingRight: "25%" }}>
      
      <ContextProvider>
        <Sidebar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="add" element={<AddCon/>}/>
        <Route path="contact" element={<List/>}/>
        </Routes>
        
      </ContextProvider>
    </div>
  );
}

export default App;
