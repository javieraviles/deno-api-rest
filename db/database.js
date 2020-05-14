import { Client } from "https://deno.land/x/postgres@v0.3.11/mod.ts";

class Database {
	constructor() {
		this.connect();
	}

	async connect() {
		this.client = new Client({
			user: "user",
			database: "deno_api_db",
			host: "192.168.99.111",
			password: "pass",
			port: "5432"
		});

		await this.client.connect();
	}
}

export default new Database().client;
