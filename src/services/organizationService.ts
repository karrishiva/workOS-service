import { workos } from "../config/workos";
import { DomainData } from "@workos-inc/node";

interface CreateOrganizationDTO {
    name: string;
    domainData?: DomainData[];
    externalId?: string;
    metadata?: Record<string, string>;
}


export const createOrganizationService = async (data: CreateOrganizationDTO) => {
    const { name, domainData, externalId, metadata } = data;
    const organization = await workos.organizations.createOrganization({
        name,
        domainData,
        externalId,
        metadata,
    });
    return organization;
};

export const getListOrganizationsService = async () => {
    const organizations = await workos.organizations.listOrganizations();
    return organizations;
};

export const getOrganizationService = async (organizationId: string) => {
    const organization = await workos.organizations.getOrganization(organizationId);
    return organization;
};
export const updateOrganizationService = async (organizationId: string, updateData: Partial<CreateOrganizationDTO>) => {
    const updatedOrganization = await workos.organizations.updateOrganization({
        organization: organizationId,
        ...updateData,
    });
    return updatedOrganization;
};
export const deleteOrganizationService = async (organizationId: string) => {
    await workos.organizations.deleteOrganization(organizationId);
    return;
};