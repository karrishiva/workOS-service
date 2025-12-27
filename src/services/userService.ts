import { workos } from "../config/workos";
interface CreateUserDTO {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

interface UpdateUserDTO {
    userId: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    passwordHash?: string;
    passwordHashType?: string;
    externalId?: string;
    metadata?: Record<string, string>;
}


export const createUserService = async (userData: CreateUserDTO) => {
    const { email, password, firstName, lastName } = userData;

    if (!email || !password || !firstName || !lastName) {
        throw new Error("email, password, firstName, and lastName are required");
    }

    const user = await workos.userManagement.createUser({
        email,
        password,
        firstName,
        lastName,
    });
    return user;
};


export const getUsersService = async () => {
    const users = await workos.userManagement.listUsers();
    return users;
}


export const getUserByIdService = async (userId: string) => {
    if (!userId) {
        throw new Error("userId is required");
    }
    const user = await workos.userManagement.getUserByExternalId(userId);
    return user;
};

export const updateUserService = async (updateData: UpdateUserDTO) => {
    const { userId, email, firstName, lastName, password, passwordHash, passwordHashType, externalId, metadata } = updateData;
    if (!userId) {
        throw new Error("userId is required");
    }
    const updatedUser = await workos.userManagement.updateUser({
        userId,
        email,
        firstName,
        lastName,
        password,
        passwordHash,
        passwordHashType,
        externalId,
        metadata,
    });
    return updatedUser;
}

export const deleteUserService = async (userId: string) => {
    if (!userId) {
        throw new Error("userId is required");
    }
    await workos.userManagement.deleteUser(userId);
}