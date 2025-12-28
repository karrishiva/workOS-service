import { Response, Request } from "express";
import { getRoles } from "../services/roleService";

export const fetchRoles = async (req: Request, res: Response): Promise<Response> => {
    const { organizationId } = req.params;
    try {
        const roles = await getRoles(organizationId);
        return res.status(200).json(roles);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching roles" });
    }
};
