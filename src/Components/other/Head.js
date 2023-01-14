import React from 'react'

function Head(props) {
  return (
    <div style={{display:"flex",justifyContent:"left",alignItems:"center"}}>

        <img src={props.img} alt="head_image" style={{height:"20px",width:"20px"}}/>
        
        <h4>{props.text}</h4>
    </div>
  )
}

export default Head