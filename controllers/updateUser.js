import { updateUser } from "../services/userService.js";

export default async ({ params, request, response }) => {
	const userId = params.id;

	if (!userId) {
		response.status = 400;
		response.body = { msg: "Invalid user id" };
		return;
	}

	if (!request.hasBody) {
		response.status = 400;
		response.body = { msg: "Invalid user data" };
		return;
	}

	const {
		value: { username, email }
	} = await request.body();

	if (!username || !email) {
		response.status = 400;
		response.body = { msg: "Missing user data. Username and email are required" };
		return;
	  }

	await updateUser(userId, { username, email });

	response.body = { msg: "User updated" };
};
