import jwt from "jsonwebtoken"

export function userMiddleware(req, res, next) {

    const token=req.header;
    const isauth=jwt.verify(token,process.env.JWT_SCREAT);
    if(isauth){
        req.user=jwt.decode(token,process.env.JWT_SCREAT)
        next();

    }
    else{
        res.status(301).json({
         message:"unauthized acess",
        })
    }

    
    
    
}
