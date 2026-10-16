import { Router } from "express";
import jwt from "jsonwebtoken";
import { userMiddleware } from "../middleware/user";
import{z} from "zod"

const router = Router();
// User Routes
const user=z.object({
    username:z.string(),
})
router.post('/signup', (req, res) => {

    // Implement user signup logic
});

router.post('/login', (req, res) => {
     // Implement user login logic
});

router.get('/todos', userMiddleware, (req, res) => {
    // Implement logic for getting todos for a user
});

router.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
});

module.exports = router