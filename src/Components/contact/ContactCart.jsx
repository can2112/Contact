import styles from "./contact1.module.css";
import { MdDeleteForever } from "react-icons/md";
import placeHolderImg from "../../assets/images/placeholder_user.png";
import UseContacts from "../../hooks/UseContacts";
import { FiEdit } from "react-icons/fi";
import EditCont from "./EditCont";
import {useState} from 'react'

export default function ContactCart(props) {
  const { deletecontacts ,editContacts} = UseContacts();
  const [showModal,setShowModal]=useState(false)


  function clickHandler(){
    setShowModal(!showModal)
    editContacts(props.contactData.id)
  }

  return (
    <div className={styles.container}>
      <div>
        <img
          src={props.contactData.avatar || placeHolderImg}
          alt={props.contactData.name}
          className={styles.avtar}
        />
        <div className={styles.details}>
        {showModal&&<EditCont close={setShowModal} id={props.contactData.id} main={props.contactData}/>}
          <strong className={styles.name}>
            {props?.contactData?.name || "name"}
          </strong>
          <strong className={styles.phone}>
            {props.contactData.phone || "7017390211"}
          </strong>
        </div>
      </div>
      <div>
        <div
          className={styles.delete}
          onClick={() => deletecontacts(props.contactData.id)}
        >
          <MdDeleteForever size={25} />
        </div>
        <div className={styles.Edit} onClick={clickHandler}>
          <FiEdit size={25} />
          
        </div>
      </div>
    </div>
  );
}
