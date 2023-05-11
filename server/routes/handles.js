const express=require('express');
const router = express.Router();

router.get('/:codeforces_id',(req,res,next)=>{
    console.log(req.params.codeforces_id);
    res.status(200).json({
        Message:"successful"
    })
})

module.exports=router;