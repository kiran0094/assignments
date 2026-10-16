import{ Router } from"express";
import {userMiddleware} from "../middleware/user";
import {date, z} from "zod"
import{Todo}from  "../database/index"

const router = Router();

const todo=z.object({
    title:z.string(),
    description: z.string(),    
    date:z.date(),
});
// todo Routes
router.post('/',userMiddleware ,async(req, res) => {
    try{
        const todos=todo.safeParse(req.body);
        if(!todos.success){
            return res.status(400).json({
                message:"invaild fromate",
            });
        }
        const {title,description,date}=todos.data;
        const data= await Todo.create({
            user_id:res.user_id,
            title:title,
            description:description,
            completed:false,
            Duedate:date,
        })
        return res.status(200).json({
            message:"post is succesfully add",
            data:data
        })        
    }
    catch(e){
       return  res.status(500).json({
            message:"error in add the post"
        })}
    
});

router.put('/', userMiddleware, (req, res) => {

    try{
        const todos=todo.safeParse(req.body);
        if(!todos.success){
            return res.status(400).json({
                message:"invaild fromate",
            });
        }
        const {title,description,date}=todos.data;
        const data= Todo.updateOne({
            user_id:res.user_id,
            title:title,
            description:description,
            completed:false,
            Duedate:date,
        })
        return res.status(200).json({
            message:"post is succesfully add",
            data:data
        })        
    }
    catch(e){
       return  res.status(500).json({
            message:"error in add the post"
        })}
});

router.delete('/', userMiddleware, (req, res) => {
    const data =Todo.deleteMany({});
    return res.status(200).json({
        message:"Delete the all",
        data:data
    })
});

router.delete('/:id', userMiddleware, (req, res) => {
    // Implement delete todo by id logic
    try{

        const id =req.params.id;
        const data=Todo.deleteOne(id);
        return res.status(200).json({
        message:"Delete the todo",
        data:data
    })

    }
    catch(e){
        res.status(500).json({
            message:"could not delete the the todo"
        })
    }

});


router.get('/', userMiddleware, (req, res) => {
    // Implement fetching all todo logic
    try{
    const data=Todo.find({});
     return res.status(200).json({
        message:" the todos are feathed ",
        data:data
    })


    }
    catch(e){
 res.status(500).json({
            message:"error in featching the data"
        })
    }
});

router.get('/:id', userMiddleware, (req, res) => {
   try{
     const id =req.params.id;
        const data=Todo.findById(id);
        return res.status(200).json({
        message:"featch the todo",
        data:data
    })
   }
   catch(e){
    return res.status(500).json({
        message:"error in featching the data"

    })

   }
});

module.exports = router;