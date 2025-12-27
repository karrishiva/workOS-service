import { Request, Response } from "express";
import { createUserService, getUserByIdService, getUsersService, updateUserService, deleteUserService} from "../services/userService";
export const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password, firstName, lastName } = req.body;


    const user = await createUserService({
      email,
      password,
      firstName,
      lastName,
    });

    return res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error: any) {
    console.error("Create user error:", error);

    return res.status(500).json({
      message: "Failed to create user",
      error: error?.message ?? "Unknown error",
    });
  }
};

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    const users = await getUsersService();

    return res.status(200).json({
      message: "Users retrieved successfully",
      users,
    });
  } catch (error: any) {
    console.error("Get users error:", error);

    return res.status(500).json({
      message: "Failed to retrieve users",
      error: error?.message ?? "Unknown error",
    });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const user = await getUserByIdService(id);
    return res.status(200).json({
      message: "User retrieved successfully",
      user,
    });
  } catch (error: any) {
    console.error("Get user by ID error:", error);
    return res.status(500).json({
      message: "Failed to retrieve user",
      error: error?.message ?? "Unknown error",
    });
  }
}


export const updateUserbyId = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, password, passwordHash, passwordHashType, externalId, metadata } = req.body;
    const updatedUser = await updateUserService({
      userId: id,
      firstName,
      lastName,
      email,
      password,
      passwordHash,
      passwordHashType,
      externalId,
      metadata
    });
    return res.status(200).json({
      message: `User with ID ${id} updated successfully`,
    });
  } catch (error: any) {
    console.error("Update user by ID error:", error);
    return res.status(500).json({
      message: "Failed to update user",
      error: error?.message ?? "Unknown error",
    });
  }
};


export const deleteUserById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    await deleteUserService(id);
    return res.status(200).json({
      message: `User with ID ${id} deleted successfully`,
    });
  } catch (error: any) {
    console.error("Delete user by ID error:", error);
    return res.status(500).json({
      message: "Failed to delete user",
      error: error?.message ?? "Unknown error",
    });
  }
};