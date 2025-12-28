import { workos } from "../config/workos";

export const getRoles = async (organizationId: string) => {
    try {
        console.log("Fetching roles for organizationId:", organizationId);
        const roles = await workos.organizations.listOrganizationRoles({organizationId});
        return roles.data;
    } catch (error) {
        console.error("Error fetching roles:", error);
        throw error;
    }
};
