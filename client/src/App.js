import React,{useState,useEffect} from 'react'
import {Route} from 'react-router-dom'
import axios from 'axios'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/layouts/Header'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Articles from './components/Articles'
import Dashboard from './components/Dashboard'
import AddArticle from './components/AddArticles'
import Article from './components/Article'
import EditArticle from './components/EditArticle'
import Signup from './components/auth/Signup'
import Signin from './components/auth/Signin'
import Reset from './components/auth/Reset'

import Forgot from './components/auth/Forgot'
import Message from './components/Message'

function App() {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    axios.get('https://myblgapp.herokuapp.com/article')
    .then(res=>setPosts(res.data))
    .catch(error=>console.log(error));
  });
  
  return (
    <div className="App">
     <Header/>
     <Navbar/>
     <Route exact path="/" render={()=> <Articles posts={posts}/> } />
     
     <Route path="/Add-article" component={AddArticle} />
     <Route path="/Signup" component={Signup} />
     <Route path="/Signin" component={Signin} />
     <Route path="/reset" component={Reset} />
     <Route path="/dahsboard" component={Dashboard} />
     <Route path="/message" component={Message} />
     <Route path="/forgot" component={Forgot} />
     <Route path="/update/:id" render={(props)=> <EditArticle {...props} posts={posts}/> } />
     <Route path="/article/:id" render={(props)=> <Article {...props} posts={posts}/> } />
     <Footer/>
    
    </div>
  );
}

export default App;
//footer container


