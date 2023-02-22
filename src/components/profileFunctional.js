import { useEffect, useState } from "react";

const Profile = (props) =>{
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(2);

  useEffect(()=>{
    console.log("useEffect");
    const timer = setInterval(()=>{
      console.log("interval set");
  },1000);
     return() =>{
      clearInterval(timer);
      console.log("return useEffect");
     }
  },[]);

  return (
    <div>
        <h1>Profile Component</h1>
        <h2>Using the nested route here</h2>
        <h3>Name : {props.name}</h3> 
        <h4>Count : {count}</h4> 
        <h5>Count2: {count2}</h5> 
        <button 
        onClick={()=> {
            setCount(10);
            setCount2(100);
          } }>Update Count</button>  
          
    </div>
  )
}

export default Profile;