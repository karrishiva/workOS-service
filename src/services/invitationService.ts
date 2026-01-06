import { workos } from "../config/workos";

interface InvitationParams {
    email: string;
    organizationId: string;
    expiresInDays?: number;
    inviteUserId?: string;
    roleSlug?: string;
}

interface ListInvitationParams{
    email?: string;
    organizationId?: string;
    limit?: number;
    before?: string;
    after?: string;
    order?: "asc" | "desc";
}

export const createInvitationService = async (params: InvitationParams) => {
    try {
        return await workos.userManagement.sendInvitation(params);
    } catch (error) {
        throw error;
    }
}


export const findInvitationService = async (token: string) => {
    try {
        return await workos.userManagement.findInvitationByToken(token);
    } catch (error) {
        throw error;
    }
}


export const getAnInvitationsService = async (invitationId: string) => {
    try {
        return await workos.userManagement.getInvitation(invitationId);
    } catch (error) {
        throw error;
    }
}


export const listInvitationsService = async (params: ListInvitationParams) => {
    try {
        return await workos.userManagement.listInvitations(params);
    } catch (error) {
        throw error;
    }
}

export const resendInvitationService = async (invitationId: string) => {
    try {
        return await workos.userManagement.resendInvitation(invitationId);
    } catch (error) {
        throw error;
    }
}

export const acceptInvitationService = async (invitationId: string) => {
    try {
        return await workos.userManagement.acceptInvitation(invitationId);
    } catch (error) {
        throw error;
    }
}

export const revokeInvitationService = async (invitationId: string) => {
    try {
        return await workos.userManagement.revokeInvitation(invitationId);
    } catch (error) {

        throw error;
    }
}
