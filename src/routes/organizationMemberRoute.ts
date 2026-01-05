import { Router } from "express";
import { getOrganizationMembers, addOrganizationMember, listOrganizationMembers, updateOrganizationMember, deleteOrganizationMember, reactivateOrganizationMember, deactivateOrganizationMember, } from "../controllers/organizationMemberController";
const organizationMembershipRoute = Router();

organizationMembershipRoute.get("/organization-memberships/:id", getOrganizationMembers);
organizationMembershipRoute.get("/organization-memberships/list", listOrganizationMembers);
organizationMembershipRoute.post("/organization-memberships", addOrganizationMember);
organizationMembershipRoute.put("/organization-memberships/:organizationMembershipId", updateOrganizationMember);
organizationMembershipRoute.put("/organization-memberships/:organizationMembershipId/deactivate", deactivateOrganizationMember);
organizationMembershipRoute.put("/organization-memberships/:organizationMembershipId/reactivate", reactivateOrganizationMember);
organizationMembershipRoute.delete("/organization-memberships/:organizationMembershipId", deleteOrganizationMember);


export default organizationMembershipRoute;
