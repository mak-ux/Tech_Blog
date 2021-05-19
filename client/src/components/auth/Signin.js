import React,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {Link,useHistory} from 'react-router-dom'

const Signin = () => {
    const history = useHistory();
        const [username,setUsername]=useState('');
        const [password,setPassword]=useState('');
        //const [authorname,setAuthorName]=useState('');
        const [message,setMessage]=useState('');
        const changeOnClick= e => {
            e.preventDefault();
            const users={
                username,
                password
               
            }
            setUsername('');
            setPassword('');
            
            
            axios.post("https://myblgapp.herokuapp.com/user/signin",users)
            .then(res=>{
                history.push("/Add-article");
                setMessage(res.data)})
            .catch(err=>{
                console.log(err);
            })
        }
    return (
        
        <AddArticleContainer>

        <div className="container">

        <h1>Signin</h1>
        <span className="message">{message}</span>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
  <div className="form-group">
    <label htmlFor="username">User Name</label>
    <input type="text" 
    value={username}
    onChange={e=>setUsername(e.target.value)}
    className="form-control"  
    placeholder="User Name"/>
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" 
    value={password}
    onChange={e=>setPassword(e.target.value)}
    className="form-control"  
    placeholder="Passsword"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Login</button>
</form>
<br/>
        <Link to="/signup">
            <h5>Dont have an account?</h5> 
         </Link>
         <br/>
         <Link to="/forgot">
            <h5>Forgot Password</h5> 
         </Link>
</div>
</AddArticleContainer>
    )
}

export default Signin
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

