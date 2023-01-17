import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./sidebar.module.css";
import { FaHome } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import {AiOutlineUserAdd} from 'react-icons/ai'

function Sidebar(props) {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.navigation} onClick={()=>navigate("/")}>
        <FaHome color="white" size={40} />
      </div>

      <div className={style.navigation} onClick={()=>navigate('/contact')}>
        <MdContactPage color="white" size={40} />
      </div>
      <div className={style.navigation} onClick={()=>navigate('/add')}>
        <AiOutlineUserAdd color="white" size={40} />
      </div>
    </div>
  );
}

export default Sidebar;
