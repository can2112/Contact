import styles from "./addcontact.module.css";
import { MdPersonAddAlt1, MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { useState } from "react";
import useContacts from '../../hooks/UseContacts'
import { Input } from "../input/Input";

export default function AddContact() {
  const [isShowing, setIsShowing] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp,setWhatsapp]=useState("");
  const [type,settype]=useState("")

  const { addContacts } = useContacts();

  function toggleForm() {
    setIsShowing(!isShowing);
  }

  function onSubmit(event) {
    event.preventDefault();
    addContacts({
      id: crypto.randomUUID(),
      name: name,
      phone: phone,
      avatar: !avatar ? null : avatar,
      whatsapp:whatsapp,
      type:type
    });
    setAvatar("");
    setName("");
    setPhone("");
  }

  function onChangeAvatar(event) {
    setAvatar(event.target.value.trim(""));
  }

  function onChangeName(event) {
    setName(event.target.value);
  }

  function onChangePhone(event) {
    setPhone(event.target.value);
  }

  function onSelectType(event){
    settype(event.target.value)
  }
  function onSelectWhat(event){
    setWhatsapp(event.target.value)
  }

  return (
    <section className={styles.container} style={{paddingTop:"50px",paddingBottom:"20px"}}>
      <header className={styles.header}>
        <button
          onClick={toggleForm}
          className={isShowing ? styles.circle : ""}
          style={isShowing ? { background: "#fe6161" } : {}}
        >
          {isShowing ? (
            <MdRemoveCircle size={20} />
          ) : (
            <>
              <MdPersonAddAlt1 size={20} />
              Add contact
            </>
          )}
        </button>
        <p className={styles.credits}>
          chetan <span>❤</span> joshi{" "}
          <a href="https://github.com/can2112">
            Github 
          </a>
        </p>
      </header>
      {isShowing && (
        <form onSubmit={onSubmit} className={styles.form}>
          <Input
            placeholder="url of photo"
            onChange={onChangeAvatar}
            value={avatar}
          />
          <Input
            placeholder="name *"
            required
            onChange={onChangeName}
            value={name}
          />
          <Input
            placeholder="number *"
            required
            onChange={onChangePhone}
            value={phone}
          />
          <div className={styles.select}>
          <select className={styles.selecing} defaultValue="" value={type} onChange={onSelectType}>
            <option value="" disabled >Type</option>
            <option>Personal</option>
            <option>Office</option>
          </select>
          </div>
          <div>
          <select className={styles.selecing} defaultValue="" value={whatsapp} onChange={onSelectWhat}>
            <option value="" disabled >whatsapp</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          </div>
         
          <button className={styles.circle}>
            <MdAddCircle size={20} />
          </button>
        </form>
      )}
    </section>
  );
}
