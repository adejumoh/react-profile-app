import React, {useState} from "react";

const ContactCard = (props) => {

    const [showAge, setShowAge] = useState(false);

    return(
        <div className="contact-card" >
    <img 
    src={props.avatarUrl} alt="profile">
    </img> 
    <div className="User-details">
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <button onClick={()=> setShowAge(!showAge)} >ShowAge</button>
      
      {showAge && <p> Age:{props.age} </p>}
    </div>
    </div>
    
    )
}

export default ContactCard