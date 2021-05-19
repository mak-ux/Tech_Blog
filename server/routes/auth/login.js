const express = require("express");
const router = express.Router();
const crypto=require('crypto');
const path = require("path");
const User = require("../../models/user");

const auth=require('../../authentication/auth')

const bcryptjs=require('bcryptjs')
const jwt=require('jsonwebtoken');

const bodyParser= require("body-parser")

fs = require('fs-extra')

router.use(bodyParser.urlencoded({extended: true}))







 


router.post("/signup",async(req,res)=>{ 
	try{
		const email=await User.findOne({email:req.body.email})
		const username=await User.findOne({username:req.body.username})
		console.log('yes')
		if(email)
		{
			console.log('yes')
            //req.flash('error','Email is already register!')
            res.send('Email is already register!')
			//res.redirect('/signup')
		}
		else if(username)
		{
			console.log('yes')
            //req.flash('error','Username is already register!')
            res.send('Username is already register!')
			//res.redirect('/signup')
		}
		else
		{
			console.log('yes')
			const user=new User(req.body)
			await user.save()
			//res.redirect('/user/signin')
			res.send('you are resistered sucessfully')
		}
	}catch(e){
		console.log(e)
		res.send(e)
	}
});


//   CORRECT IT!!!!!!!!
router.post('/signin',async (req,res)=>{
	try{
		const user=await User.findOne({username:req.body.username})
		if(!user){
            //req.flash('error','Username is not registered')
            res.send('Username is not registered')
			//res.redirect('/signin')
		}
		else
		{
			const isMatch=await bcryptjs.compare(req.body.password,user.password)
			if(!isMatch){
                //req.flash('error','Invalid password')
                res.send('Invalid password')
				//res.redirect('/signin')
			}
			else
			{
				const token=await user.generatingauthtoken()
				res.cookie('auth_token_2',token)
				//res.redirect('/dahsboard')
				res.send('you are logged in');
				console.log('you are logged in')
			}
		}
	}catch(e){
		res.send('server error')
	}
})






module.exports = router;


