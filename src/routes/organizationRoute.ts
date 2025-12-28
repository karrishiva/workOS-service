import { Router } from "express";
import { createOrganization, getOrganization, getOrganizationList, updateOrganization, deleteOrganization } from "../controllers/organizationController";


const organizationRoute = Router();


organizationRoute.post("/organizations", createOrganization);
organizationRoute.get("/organizations", getOrganizationList);
organizationRoute.get("/organizations/:organizationId", getOrganization);
organizationRoute.put("/organizations/:organizationId", updateOrganization);
organizationRoute.delete("/organizations/:organizationId", deleteOrganization);


export default organizationRoute;