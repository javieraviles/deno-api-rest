import { Router } from "https://deno.land/x/oak/mod.ts";

import getUsers from "./controllers/getUsers.js";
import getUserDetails from "./controllers/getUserDetails.js";
import createUser from "./controllers/createUser.js";
import updateUser from "./controllers/updateUser.js";
import deleteUser from "./controllers/deleteUser.js";

const router = new Router();

router
  .get("/users", getUsers)
  .get("/users/:id", getUserDetails)
  .post("/users", createUser)
  .put("/users/:id", updateUser)
  .delete("/users/:id", deleteUser);

export default router;
