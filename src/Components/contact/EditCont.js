import React, { useState } from "react";
import useContacts from "../../hooks/UseContacts";
import styles from "./addcontact.module.css";
import { Input } from "../input/Input";
import { CgCloseR } from "react-icons/cg";

function EditCont(props) {
  const [avatar, setAvatar] = useState(props.main.avatar);
  const [name, setName] = useState(props.main.name);
  const [phone, setPhone] = useState(props.main.phone);
  const [whatsapp, setWhatsapp] = useState(props.main.whatsapp);
  const [type, settype] = useState(props.main.type);

  const { editContacts} = useContacts();

  let id = props.main.id;

  let editedData = { id, avatar, name, phone, whatsapp, type };

  function onSubmit(event) {
    event.preventDefault();

    editContacts(id, editedData);
    props.close(false)
  }

  function onChangeAvatar(event) {
    setAvatar(event.target.value.trim(""));
  }

  function onChangeName(event) {
    setName(event.target.value);
  }

  function onChangePhone(event) {
    setPhone(event.target.value);
    console.log(event.target.value);
  }

  function onSelectType(event) {
    settype(event.target.value);
  }
  function onSelectWhat(event) {
    setWhatsapp(event.target.value);
  }

  return (
    <div className={styles.popUp}>
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
        }}
        onClick={() => props.close(false)}
      ><div></div>
        <h2 style={{alignSelf:"center"}}>Edit Contact</h2>
        <CgCloseR size={25} />
      </div>
      <section
        className={styles.container}
        style={{ paddingTop: "50px", paddingBottom: "20px" }}
      >

            <form onSubmit={onSubmit}  className={styles.form}>
              <div className={styles.inContainer}>
                <label name="photo" htmlFor="photo">
                  Photo:
                </label>
                <Input
                  placeholder="url of photo"
                  onChange={onChangeAvatar}
                  value={avatar}
                  name="photo"
                />
              </div>
              <div className={styles.inContainer}>
                <label htmlFor="name">Name:</label>
                <Input
                  placeholder="name *"
                  required
                  onChange={onChangeName}
                  value={name}
                  name="name"
                />
              </div>
              <div className={styles.inContainer}>
                <label htmlFor="number">Number:</label>
                <Input
                  placeholder="number *"
                  required
                  onChange={onChangePhone}
                  value={phone}
                  name="number"
                />
              </div>

              <div className={`${(styles.select, styles.inContainer)}`}>
                <label>Type:</label>
                <select
                  className={styles.selecing}
                  value={type}
                  onChange={onSelectType}
                >
                  <option value="" disabled>
                    Type
                  </option>
                  <option>Personal</option>
                  <option>Office</option>
                </select>
              </div>
              <div className={`${(styles.select, styles.inContainer)}`}>
                <label>Whatsapp:</label>
                <select
                  className={styles.selecing}
                  value={whatsapp}
                  onChange={onSelectWhat}
                >
                  <option value="" disabled>
                    whatsapp
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <button className={styles.circle} style={{marginTop:"10px"}}>
                <h3>Save Changes</h3>
              </button>
            </form>
        
      </section>
    </div>
  );
}

export default EditCont;
