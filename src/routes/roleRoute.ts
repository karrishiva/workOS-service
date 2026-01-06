import reoute from "express";
import { fetchRoles } from "../controllers/roleController";
const rolesRoute = reoute.Router();


rolesRoute.get("/roles/:organizationId", fetchRoles);


export default rolesRoute;