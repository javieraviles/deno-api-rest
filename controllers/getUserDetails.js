import { getUser } from "../services/userService.js";

export default async ({
  params,
  response
}) => {
  const userId = params.id;

  if (!userId) {
    response.status = 400;
    response.body = { msg: "Invalid user id" };
    return;
  }

  const user = await getUser(userId);
  if (!user) {
    response.status = 404;
    response.body = { msg: `User with ID ${userId} not found` };
    return;
  }

  response.body = user;
};
