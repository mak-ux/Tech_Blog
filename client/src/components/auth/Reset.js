import React,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Reset = () => {
    const [password,setPassword]=useState('');
        
        //const [authorname,setAuthorName]=useState('');
        const [message,setMessage]=useState('');
        const changeOnClick= e => {
            e.preventDefault();
            const users={
                password
                
               
            }
            setPassword('');
            
            
            
            axios.post("https://myblgapp.herokuapp.com/user/reset",users)
            .then(res=>setMessage(res.data))
            .catch(err=>{
                console.log(err);
            })
        }
    return (
        
        <AddArticleContainer>

        <div className="container">

        <h1>Reset Password</h1>
        <span className="message">{message}</span>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
        <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" 
    value={password}
    onChange={e=>setPassword(e.target.value)}
    className="form-control"  
    placeholder="Passsword"/>
  </div>
  
  
  <button type="submit" className="btn btn-primary">Reset</button>
</form>

        
        
</div>
</AddArticleContainer>
    )
}

export default Reset
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

