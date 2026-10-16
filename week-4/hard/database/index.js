import mongoose from "mongoose";

// Connect to MongoDB
mongoose.connect('your-mongodb-url');

// Define schemas

const UserSchema = new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:String,   
},{ 
    timestamps: true  
}
);

const TodoSchema = new mongoose.Schema({
    // Schema definition here
    user_id:{type:mongoose.Types.ObjectId,required:true,ref:UserSchema},
    title:{type:String,required:true,unique:true},
    description: {type:String,required:true,unique:true},
    completed:Boolean,
    Duedate:Date
});

export const User = mongoose.model('User', UserSchema);
export const Todo = mongoose.model('Todo', TodoSchema);

