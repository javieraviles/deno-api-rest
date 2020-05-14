import userRepo from "../repositories/userRepo.js";

export const getUsers = async () => {
	const users = await userRepo.selectAll();

	var result = new Array();

	users.rows.map(users => {
		var obj = new Object();

		users.rowDescription.columns.map((el, i) => {
			obj[el.username] = users[i];
		});
		result.push(obj);
	});

	return result;
};

export const getUser = async userId => {
	const users = await userRepo.selectById(userId);

	var obj = new Object();
	users.rows.map(users => {
		users.rowDescription.columns.map((el, i) => {
			obj[el.username] = users[i];
		});
	});

	return obj;
};

export const createUser = async user => {
	const newUser = {
		username: String(user.username),
		email: String(user.email),
		created_at: new Date()
	};

	await userRepo.create(newUser);

	return newUser.id;
};

export const updateUser = async (userId, newUser) => {
	const user = await getUser(userId);

	if (Object.keys(user).length === 0 && user.constructor === Object) {
		throw new Error("User Not Found");
	}

	const updatedUser = {
		username: newUser.username !== undefined ? String(newUser.username) : user.username,
		email: newUser.email !== undefined ? String(newUser.email) : user.email
	};

	userRepo.update(userId, updatedUser);
};

export const deleteUser = async userId => {
	userRepo.delete(userId);
};
