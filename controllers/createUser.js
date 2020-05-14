import { createUser } from "../services/userService.js";

export default async ({ request, response }) => {
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

  const userId = await createUser({ username, email });

  response.body = { msg: "User created", userId };
};
