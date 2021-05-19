import React from 'react'
import styled from 'styled-components'
const Dashboard = () => {
    return (
        <AddArticleContainer>

        <div className="container">

        <h1>Welcome To the Dashboard</h1>
        
</div>
</AddArticleContainer>
    )
}

export default Dashboard
const AddArticleContainer=styled.div`
margin:3rem auto;
padding:4rem;
width:31.25rem;
h1{
    font-weight:900;
    color:var(--dark-green);
}

`;