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
		Transaction object
		{
			id,
			user_id,
			type (deposit, transfer_out, transfer_in),
			amount,
			date,
			description,
			recipient_id
		}
	*/
	const TRANSACTIONS = [
		{
			id: 1,
			user_id: 1,
			type: "deposit",
			amount: 2000,
			date: "2020-10-10",
			description: "Deposito inicial",
			recipient_id: null,
		},
		{
			id: 2,
			user_id: 1,
			type: "transfer_out",
			amount: 500,
			date: "2020-10-12",
			description: "Transferencia enviada",
			recipient_id: 2,
		},
		{
			id: 3,
			user_id: 2,
			type: "transfer_in",
			amount: 500,
			date: "2020-10-12",
			description: "Transferencia recibida",
			recipient_id: 1,
		},
		{
			id: 4,
			user_id: 1,
			type: "transfer_out",
			amount: 300,
			date: "2020-10-15",
			description: "Transferencia enviada",
			recipient_id: 3,
		},
		{
			id: 5,
			user_id: 3,
			type: "transfer_in",
			amount: 300,
			date: "2020-10-15",
			description: "Transferencia recibida",
			recipient_id: 1,
		},
		{
			id: 6,
			user_id: 1,
			type: "transfer_out",
			amount: 200,
			date: "2020-10-16",
			description: "Transferencia enviada",
			recipient_id: 4,
		},
		{
			id: 7,
			user_id: 4,
			type: "transfer_in",
			amount: 200,
			date: "2020-10-16",
			description: "Transferencia recibida",
			recipient_id: 1,
		},
		{
			id: 8,
			user_id: 1,
			type: "deposit",
			amount: 1000,
			date: "2020-10-20",
			description: "Deposito",
			recipient_id: null,
		},
		{
			id: 9,
			user_id: 1,
			type: "transfer_out",
			amount: 100,
			date: "2020-10-20",
			description: "Transferencia enviada",
			recipient_id: 2,
		},
		{
			id: 10,
			user_id: 2,
			type: "transfer_in",
			amount: 100,
			date: "2020-10-20",
			description: "Transferencia recibida",
			recipient_id: 1,
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
