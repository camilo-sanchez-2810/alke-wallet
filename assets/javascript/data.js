(() => {
	const USERS = [
		{
			id: 1,
			name: "Jon Snow",
			email: "snow@gmail.com",
			password: "12345678Aa",
		},
		{
			id: 2,
			name: "Arya Stark",
			email: "wolf@gmail.com",
			password: "12345678Aa",
		},
		{
			id: 3,
			name: "Tyrion Lannister",
			email: "small.lion@gmail.com",
			password: "12345678Aa",
		},
		{
			id: 4,
			name: "Daenerys Targaryen",
			email: "motherdragon123@gmail.com",
			password: "12345678Aa",
		},
	];
	/*
		Generate a const name TRANSACTIONS with an array of objects with the following structure:
		{
			id,
			type, (deposit, withdraw)
			description,
			amount,
			user_id,
			recipient_id,
			date
		}
	*/
	const TRANSACTIONS = [
		{
			id: 1,
			type: "deposit",
			description: "Depósito inicial",
			amount: 1000,
			user_id: 1,
			recipient_id: 1,
			date: "2021-10-10",
		},
		{
			id: 2,
			type: "withdraw",
			description: "Retiro de efectivo",
			amount: 500,
			user_id: 1,
			recipient_id: 1,
			date: "2021-10-10",
		},
		{
			id: 3,
			type: "deposit",
			description: "Depósito inicial",
			amount: 1000,
			user_id: 2,
			recipient_id: 2,
			date: "2021-10-10",
		},
		{
			id: 4,
			type: "withdraw",
			description: "Retiro de efectivo",
			amount: 500,
			user_id: 2,
			recipient_id: 2,
			date: "2021-10-10",
		},
		{
			id: 5,
			type: "deposit",
			description: "Depósito inicial",
			amount: 1000,
			user_id: 3,
			recipient_id: 3,
			date: "2021-10-10",
		},
		{
			id: 6,
			type: "withdraw",
			description: "Retiro de efectivo",
			amount: 500,
			user_id: 3,
			recipient_id: 3,
			date: "2021-10-10",
		},
		{
			id: 7,
			type: "deposit",
			description: "Depósito inicial",
			amount: 1000,
			user_id: 4,
			recipient_id: 4,
			date: "2021-10-10",
		},
		{
			id: 8,
			type: "withdraw",
			description: "Retiro de efectivo",
			amount: 500,
			user_id: 4,
			recipient_id: 4,
			date: "2021-10-10",
		},
	];
	const users = localStorage.getItem("users");
	const currentId =
		localStorage.getItem("currentId");
	const transactions = localStorage.getItem(
		"transactions"
	);
	if (!users || users == "{}") {
		localStorage.setItem(
			"users",
			JSON.stringify(USERS)
		);
	}
	if (!currentId) {
		localStorage.setItem("currentId", "5");
	}
	if (!transactions) {
		localStorage.setItem(
			"transactions",
			JSON.stringify(TRANSACTIONS)
		);
	}
})();
