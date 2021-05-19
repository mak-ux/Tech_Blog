import React,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {Link} from 'react-router-dom'
const Forgot = () => {
        const [email,setEmail]=useState('');
        
        //const [authorname,setAuthorName]=useState('');
        const [message,setMessage]=useState('');
        const changeOnClick= e => {
            e.preventDefault();
            const users={
                email
                
               
            }
            setEmail('');
            
            
            
            axios.post("https://myblgapp.herokuapp.com/user/forgot",users)
            .then(res=>setMessage(res.data))
            .catch(err=>{
                console.log(err);
            })
        }
    return (
        
        <AddArticleContainer>

        <div className="container">

        <h1>Forgot Password</h1>
        <span className="message">{message}</span>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
        <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="text" 
    value={email}
    onChange={e=>setEmail(e.target.value)}
    className="form-control"  
    placeholder="Email"/>
  </div>
  
  
  <button type="submit" className="btn btn-primary">Send Link</button>
</form>
<br/>
        <Link to="/signup">
            <h5>Dont have an account?</h5> 
         </Link>
        
</div>
</AddArticleContainer>
    )
}

export default Forgot
//main container

const AddArticleContainer=styled.div`
margin:3rem auto;
padding:4rem;
width:31.25rem;
h1{
    font-weight:900;
    color:var(--dark-green);
}
.btn-primary{
    margin-top:2rem;
    background:var(--dark-green);
    border:none;
    &:hover{
        background:var(--light-green);
    }
}
.message{
    font-weight:900;
    color:tomato;
    padding:1rem 1rem 1rem 0;
}
`;

