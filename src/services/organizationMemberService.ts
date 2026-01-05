import { OrganizationMembershipStatus } from "@workos-inc/node";
import { workos } from "../config/workos";

interface AddMemberParams {
    userId: string;
    organizationId: string;
    roleSlug?: string;
    roleSlugs?: string[];
}

interface ListMembersParams {
    userId?: string;
    organizationId?: string;
    statuses?: OrganizationMembershipStatus[];
    limit?: number;
    before?: string;
    after?: string;
    order?: "asc" | "desc";
}

interface UpdateMemberParams {
    organizationMembershipId: string;
    roleSlug: string;
    roleSlugs?: string[];
}


export const createAnOrganizationMemberhshipService = async ({ userId, organizationId, roleSlug, roleSlugs }: AddMemberParams) => {
    return await workos.userManagement.createOrganizationMembership({
        userId,
        organizationId,
        roleSlug,
        roleSlugs
    });
}


export const getOrganizationMembersService = async (organizationId: string) => {
    return await workos.userManagement.getOrganizationMembership(organizationId);
}

export const listOfOrganizationMembersService = async (params: ListMembersParams) => {
    return await workos.userManagement.listOrganizationMemberships(params);
}

export const updateOrganizationMemberService = async (params: UpdateMemberParams) => {
    const { organizationMembershipId, roleSlugs, roleSlug } = params;

    return await workos.userManagement.updateOrganizationMembership(organizationMembershipId, {
        roleSlugs,
        roleSlug
    });
}

export const deleteOrganizationMemberService = async (organizationMembershipId: string) => {
    return await workos.userManagement.deleteOrganizationMembership(organizationMembershipId);
}

export const reactivateOrganizationMemberService = async (organizationMembershipId: string) => {
    return await workos.userManagement.reactivateOrganizationMembership(organizationMembershipId);
}
export const deactivateOrganizationMemberService = async (organizationMembershipId: string) => {
    return await workos.userManagement.deactivateOrganizationMembership(organizationMembershipId);
}