const express=require('express');
const morgan=require('morgan');

const app=express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const handlesRoutes=require('./routes/handles');

app.use('/handle',handlesRoutes)

app.use((req,res,next)=>{
    const error=new Error("Not found");
    error.status=404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

const port = 3001
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});