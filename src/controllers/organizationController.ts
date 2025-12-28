import { Request, Response } from "express";
import { createOrganizationService, getOrganizationService, getListOrganizationsService, updateOrganizationService, deleteOrganizationService } from "../services/organizationService";


export const createOrganization = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, domainData, externalId, metadata } = req.body;

        const result = await createOrganizationService({
            name,
            domainData,
            externalId,
            metadata
        });
        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({ message: "Error creating organization" });
    }

};

export const getOrganizationList = async (req: Request, res: Response): Promise<Response> => {
    try {
        const organizations = await getListOrganizationsService();
        return res.status(200).json(organizations);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching organizations" });
    }
};
export const getOrganization = async (req: Request, res: Response): Promise<Response> => {
    const { organizationId } = req.params;
    try {
        const organization = await getOrganizationService(organizationId);
        return res.status(200).json(organization);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching organization" });
    }
};
export const updateOrganization = async (req: Request, res: Response): Promise<Response> => {
    const { organizationId } = req.params;
    const updateData = req.body;
    try {
        const updatedOrganization = await updateOrganizationService(organizationId, updateData);
        return res.status(200).json(updatedOrganization);
    } catch (error) {
        return res.status(500).json({ message: "Error updating organization" });
    }
};
export const deleteOrganization = async (req: Request, res: Response): Promise<Response> => {
    const { organizationId } = req.params;
    try {
        await deleteOrganizationService(organizationId);
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ message: "Error deleting organization" });
    }
};