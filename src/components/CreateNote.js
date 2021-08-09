import React,{useState  } from 'react'
import axios from 'axios';

function CreatNotes(){
    const [input,setInput]=useState({
        title:"",
        content:""
    })

    function handleChange(event){
        const {name,value}=event.target;
        setInput(prevInput=>{
            return{
                ...prevInput,
                [name]:value
            }
        })

    }


    function handleClick(event){
        event.preventDefault();
       // console.log(input);
       const newNote={
           title:input.title,
           content:input.content
       }
       axios.post("http://localhost:3001/create",newNote)

    }
    return(
        <div className="container">
        <h4>Create NOTES PAGE</h4>

        <form>
        <div className="form-group">
            <input className="form-control" onChange={handleChange} name="title" value={input.title} autoComplete="off" placeholder="Notes title here"></input>
        </div>
           <div className="form-group">
               <textarea className="form-control" onChange={handleChange} value={input.content} name="content" autoComplete="off" placeholder="Notes Content Here"/>
           </div>
           <div className="form-group"><br/>
           <button className="btn btn-lg btn-info" onClick={handleClick}>
                Create Note
           </button>
           </div>
        </form>
        </div>
    )
    
}
export default CreatNotes;