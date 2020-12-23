import React from "react";


function Avatar(props){
    return(
        <div>
        <img className = "circle-img"
            src={props.src_img}
            alt="avatar_img"
          />
        </div>
    );
}

export default Avatar;