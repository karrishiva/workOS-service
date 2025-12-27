import { Router } from "express";
import { createUser, getUserById, getUsers, updateUserbyId, deleteUserById} from "../controllers/usersController";

const userRoute = Router();

userRoute.post("/users", createUser);
userRoute.get("/users", getUsers);
userRoute.get("/users/:id", getUserById);
userRoute.put("/users/:id", updateUserbyId);
userRoute.delete("/users/:id", deleteUserById);



export default userRoute;