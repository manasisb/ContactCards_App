import React from "react";
import Card from "./Card.jsx";
import contacts from "../contacts.js";
import Avatar from "./Avatar.js";

function App() {
  return (
    <div>
     <h1 className="heading">My Contact Cards</h1>
     <Avatar src_img = "https://media-exp1.licdn.com/dms/image/C5603AQHJMbhPD_Y1fQ/profile-displayphoto-shrink_100_100/0/1606530679821?e=1612396800&v=beta&t=LBUkn__UU4sBO5M_l2L7Ivsb6ybnziPyyEdUE446Wrw"/>
     {contacts.map((contact,index) => (
                   <Card
                       key = {index}
                       name = {contact.name}
                       img = {contact.imgURL}
                       tel = {contact.phone}
                       email = {contact.email}
                       />
                   ))
     }
    </div>
  );
}

export default App;

