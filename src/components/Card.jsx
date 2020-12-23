import React from "react";
import Avatar from "./Avatar.js";
import Details from "./Details.js";

function Card(props){
    return (
        <div>
      <div className="card">
        <div className="top">  
          <h2 className = "name">{props.name}</h2>
            <Avatar src_img = {props.img}/>
        </div>
        <div className="bottom">
            <Details detail = {props.tel} />
            <Details detail = {props.email} />
        </div>
      </div>
    </div>
    );
}

export default Card;