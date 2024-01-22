import React, {useState, useEffect} from "react";
import "./App.css";
import ContactCard from "./ContactCard";


const App = ( ) => {
  const [results, setResults] = useState([]);

  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(data =>{
      console.log(data.results)
      setResults(data.results)
    });
  }, [])


  // const contacts = [
  //   {
  //     avatarUrl:"https://via.placeholder.com/150", 
  //     name:"Jenny Han",
  //     email:"jenny.han@gmail.com",
  //     age:"25"
  //   },
  //   {
  //     avatarUrl:"https://via.placeholder.com/150", 
  //     name:"Peter Piper",
  //     email:"pet.erpipe@gmail.com",
  //     age:"35"
  //   },
  //   {
  //     avatarUrl:"https://via.placeholder.com/150", 
  //     name:"Alexander Alex",
  //     email:"Alexanderalex@unitedarab.com",
  //     age:"19"
  //   },
  //   {
  //     avatarUrl:"https://via.placeholder.com/150",
  //     name:"Michael Faraday" ,
  //     email:"Michael.Faraday@hotmail.com" ,
  //     age: 25
  //   },

  
  // ];


return(
    <div>
      {results.map((result, index)=> {
        return(
          <ContactCard key={index}
          avatarUrl = {result.picture.large}
          name= {result.name.first} 
          email= {result.email} 
          age= {result.dob.age} />
        )
      })}
    {/* <ContactCard 
    avatarUrl="https://via.placeholder.com/150" 
    name="Jenny Han" 
    email="jenny.han@gmail.com" 
    age="25" />
    <ContactCard 
    avatarUrl="https://via.placeholder.com/150"
    name="Michael Faraday" 
    email="Michael.Faraday@hotmail.com" 
    age={25}/>
    <ContactCard 
    avatarUrl="https://via.placeholder.com/150"
    name="Joshua Kimmich" 
    email="joshua.france@ymail.com" 
    age={29} />
    <ContactCard
    avatarUrl="https://via.placeholder.com/150"
    name="Alexander Graham" 
    email="A.grahambell@yahoo.com" 
    age={21} /> */}
    
  </div>

)
}

export default App;