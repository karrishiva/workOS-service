import { Router } from "express";
import { createInvitationController, findInvitationController, resendInvitationController, revokeInvitationController, getAnInvitationsController,acceptInvitationController } from "../controllers/invitationController";

const invitationRoute = Router();

invitationRoute.post("/invitations", createInvitationController);
invitationRoute.get("/invitations/:token", findInvitationController);
invitationRoute.get("/invitations/:invitationId", getAnInvitationsController);
invitationRoute.post("/invitations/:invitationId/resend", resendInvitationController);
invitationRoute.post("/invitations/:invitationId/accept", acceptInvitationController);
invitationRoute.post("/invitations/:invitationId/revoke", revokeInvitationController);

export default invitationRoute;