const express=require('express');
const router=express.Router();
const Article=require('../models/articles')

router.get('/',(req,res)=>{
    //res.send('you are in router folder')
    Article.find()
        .then(article =>res.json(article))
        .catch(err=>res.status(400).json(`Error ${err}`))
});
//add articles

router.post('/add',(req,res)=>{
    const newarticle=new Article({
        title:req.body.title,
        article:req.body.article,
        authorname:req.body.authorname

    })
    newarticle.save()
    .then(() =>res.json("New article added successfully"))
    .catch(err=>res.status(400).json(`error ${err}`))
    
})

//find by id

router.get("/:id",(req,res)=>{
    Article.findById(req.params.id)
    .then(article=>res.json(article))
    .catch(err=>res.status(400).json(`error ${err}`))
})
//find by id and update
router.put('/update/:id',(req,res)=>{
    Article.findById(req.params.id)
    .then(article=>{
        article.title=req.body.title,
        article.article=req.body.article,
        article.authorname=req.body.authorname

        article.save()
        .then(()=>res.json('Article updated succesfully'))
        .catch(err=>res.status(400).json(`error ${err}`))
    })
    .catch(err=>res.status(400).json(`error ${err}`))
})



//find by id and delete
router.delete('/:id',(req,res)=>{
    Article.findByIdAndDelete(req.params.id)
    .then(()=>res.json("The Article has been deleted"))
    .catch(err=>res.status(400).json(`error ${err}`))
})
module.exports=router