import React,{useState,useEffect} from "react";
import  ReactDOM from "react-dom";

function Post(){
    const [error,setError]=useState(null);//ilk durumu null
    const [isLoaded, setIsLoaded]=useState(false);
    const [postList,setPostList]=useState([])

const reqBody={
    username:"alibakir",
    password:"alibakir",
};
useEffect(()=>{
    fetch("http://10.119.0.37:8080/Posts",{
        headers:{
            "Content-type":"application/json",
        },
        body:JSON.stringify(reqBody),
    })
    .then(res=>res.json())
    .then(
        (result)=>{
               setIsLoaded(true); 
               setPostList(result)
        },
        (error)=>{
            setIsLoaded(true);
            setError(error);
            console.log(error)
        }
    )
} , [])

if(error){
    return <div>Error !!</div>
}

else if(!isLoaded){
    return <div>Loading..</div>
}

else{
    return(
        
    <ul>
        
        {
        console.log(postList)
        
        }
    </ul> );

}
}
export default Post;