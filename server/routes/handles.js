const express=require('express');
const router = express.Router();

router.get('/codeforces',(req,res,next)=>{
    console.log(req.body.codeforces_id);
    res.status(200).json({
        essage:"successful"
    })
})

module.exports=router;

//localhost:3001/handle/codeforces