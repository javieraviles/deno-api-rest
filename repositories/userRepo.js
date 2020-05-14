import client from "../db/database.js";

class UserRepo {
	create(user) {
		return client.query(
			"INSERT INTO users (username, email, created_at) VALUES ($1, $2, $3)",
			user.username,
			user.email,
			user.created_at
		);
	}

	selectAll() {
		return client.query("SELECT * FROM users ORDER BY id");
	}

	selectById(id) {
		return client.query(`SELECT * FROM users WHERE id = $1`, id);
	}

	update(id, user) {
		var query = `UPDATE users `;
		var hasSet = false;
		if (user.username !== undefined) {
			query +=
				` SET username = '${user.username}'` + (user.email !== undefined ? "," : "");
			hasSet = true;
		}

		if (user.email !== undefined) {
			if (!hasSet) query += " SET ";
			query += ` email = '${user.email}'`;
		}

		query += ` WHERE id = ${id}`;
		
		return client.query(query);
	}

	delete(id) {
		return client.query(`DELETE FROM users WHERE id = $1`, id);
	}
}

export default new UserRepo();
