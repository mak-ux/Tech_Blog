import React ,{useState,useEffect}from 'react'
import styled from 'styled-components'
import axios from 'axios'
import  spinner from '../images/spinner.gif'
import {Link} from 'react-router-dom'
const Article = (props) => {
        const [title,setTitle]=useState('');
        const [article,setArticle]=useState('');
        const [authorname,setAuthorName]=useState('');

        useEffect(()=>{
            axios.get(`https://myblgapp.herokuapp.com/article/${props.match.params.id}`)
            .then(res=>[
                setTitle(res.data.title),
                setArticle(res.data.article),
                setAuthorName(res.data.authorname)
            ])
            .catch(err=>console.log(err));
        },[props])
    return (
        <MainContainer>
{!title || !article || !authorname ? (
<img src={spinner} alt="loading... " />
   ) :(
        <>
            <h2>{title}</h2>
            <p>{article}</p>
            
            <span className="badge badge-secondary p-2">{authorname}</span>
            <br/>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
        
        </>
    )}
            </MainContainer>
           
    )
}

export default Article
//main container

const MainContainer=styled.div`
margin:6rem auto;
padding:3rem 14rem;
h2{
    text-align:center;
    font-weidth:900;
    color:var(--dark-green);
}
img{
    width:5rem;
    display:block;
    margin:0 auto;
}
.btn-primary{
    margin-top:2rem;
    background:var(--dark-green);
    border:none;
    &:hover{
        background:var(--light-green);
    }
}
`;