import { Response, Request } from "express";

import { createAnOrganizationMemberhshipService, getOrganizationMembersService, updateOrganizationMemberService, deactivateOrganizationMemberService, reactivateOrganizationMemberService, deleteOrganizationMemberService, listOfOrganizationMembersService } from "../services/organizationMemberService";


export const addOrganizationMember = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { userId, organizationId, roleSlug, roleSlugs } = req.body;

        const result = await createAnOrganizationMemberhshipService({
            userId,
            organizationId,
            roleSlug,
            roleSlugs
        });
        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({ message: "Error adding organization member" });
    }
};
export const getOrganizationMembers = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    try {
        const members = await getOrganizationMembersService(id);
        return res.status(200).json(members);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching organization members" });
    }
};

export const listOrganizationMembers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const params = req.query;
        const members = await listOfOrganizationMembersService(params as any);
        return res.status(200).json(members);
    } catch (error) {
        return res.status(500).json({ message: "Error listing organization members" });
    }
};
export const updateOrganizationMember = async (req: Request, res: Response): Promise<Response> => {
    const { organizationMembershipId } = req.params;
    const { roleSlug, roleSlugs } = req.body;
    try {
        const result = await updateOrganizationMemberService({ organizationMembershipId, roleSlug, roleSlugs });
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: "Error updating organization member" });
    }
};

export const deactivateOrganizationMember = async (req: Request, res: Response): Promise<Response> => {
    const { organizationMembershipId } = req.params;
    try {
        const result = await deactivateOrganizationMemberService(organizationMembershipId);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: "Error deactivating organization member" });
    }
};

export const reactivateOrganizationMember = async (req: Request, res: Response): Promise<Response> => {
    const { organizationMembershipId } = req.params;
    try {
        const result = await reactivateOrganizationMemberService(organizationMembershipId);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: "Error reactivating organization member" });
    }
};

export const deleteOrganizationMember = async (req: Request, res: Response): Promise<Response> => {
    const { organizationMembershipId } = req.params;
    try {
        await deleteOrganizationMemberService(organizationMembershipId);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ message: "Error deleting organization member" });
    }
};
