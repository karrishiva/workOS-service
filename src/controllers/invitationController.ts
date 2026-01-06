import { Request, Response } from "express";
import { createInvitationService, findInvitationService, getAnInvitationsService, resendInvitationService, revokeInvitationService, acceptInvitationService } from "../services/invitationService";

export const createInvitationController = async (req: Request, res: Response) => {
    try {
        const invitation = await createInvitationService(req.body);
        res.status(201).json(invitation);
    } catch (error) {
        res.status(500).json({ error: "Failed to create invitation" });
    }
};

export const findInvitationController = async (req: Request, res: Response) => {
    try {
        const invitation = await findInvitationService(req.params.token);
        res.status(200).json(invitation);
    } catch (error) {
        res.status(500).json({ error: "Failed to find invitation" });
    }
};
export const getAnInvitationsController = async (req: Request, res: Response) => {
    try {
        const invitation = await getAnInvitationsService(req.params.invitationId);
        res.status(200).json(invitation);
    } catch (error) {
        res.status(500).json({ error: "Failed to get invitation" });
    }
};
export const resendInvitationController = async (req: Request, res: Response) => {
    try {
        const invitation = await resendInvitationService(req.params.invitationId);
        res.status(200).json(invitation);
    } catch (error) {
        res.status(500).json({ error: "Failed to resend invitation" });
    }
};
export const acceptInvitationController = async (req: Request, res: Response) => {
    try {
        const invitation = await acceptInvitationService(req.params.invitationId);
        res.status(200).json(invitation);
    } catch (error) {
        res.status(500).json({ error: "Failed to accept invitation" });
    }
};
export const revokeInvitationController = async (req: Request, res: Response) => {
    try {
        const invitation = await revokeInvitationService(req.params.invitationId);
        res.status(200).json(invitation);
    } catch (error) {
        res.status(500).json({ error: "Failed to revoke invitation" });
    }
};

