const express=require('express');
const router = express.Router();
const axios=require('axios');
router.post('/codeforces',async (req,res,next)=>{
    const userId=req.body.codeforces_id;
    console.log(req.body.codeforces_id);
    try {
        const response = await axios.get(`https://codeforces.com/api/user.info?handles=${userId}`);
        const userInfo = response.data.result[0];
        const maxRating = userInfo.maxRating;
        const currentRating = userInfo.rating;
        res.status(200).json({maxRating, currentRating})
        //console.log({currentRating,maxRating});
        //return { maxRating, currentRating };
      } catch (error) {
        console.error(error);
        return null;
      }
    
})

module.exports=router;

//localhost:3001/handle/codeforces