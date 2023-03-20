export type User = {
	email: string,
	password: string
}

class LocalDB {
	private readonly users: User[] = [];

	constructor() {
		this.users = JSON.parse(localStorage.getItem('users') ?? '[]')
	}

	addUser(user: User) {
		this.users.push(user);
		localStorage.setItem('users', JSON.stringify(this.users))
	}

	findUserByEmail(targetEmail: string): User | undefined {
		return this.users.find(user => user.email === targetEmail)
	}
}

const DB = new LocalDB();
export default DB;
