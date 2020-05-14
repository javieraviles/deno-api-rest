import { getUsers } from "../services/userService.js";

export default async ({ response }) => {
	response.body = await getUsers();
};
