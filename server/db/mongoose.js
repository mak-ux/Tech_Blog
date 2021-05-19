const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://kanhaiya:asqPXt5aaYPZO4Jx@cluster0.xzm7l.mongodb.net/mern_blog?retryWrites=true&w=majority',
{useCreateIndex:true ,useNewUrlParser:true,useUnifiedTopology: true }).then(
    console.log('connected')
)



