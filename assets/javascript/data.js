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
		}
	*/
	const TRANSACTIONS = [
		{
			id: 1,
			user_id: 1,
			type: "deposit",
			amount: 1000.0,
			date: "2026-01-01T10:00:00Z",
			description:
				"Depósito inicial - Guardia de la Noche",
		},
		{
			id: 2,
			user_id: 2,
			type: "deposit",
			amount: 500.0,
			date: "2026-01-01T11:30:00Z",
			description:
				"Carga de saldo - Braavos Bank",
		},
		{
			id: 3,
			user_id: 3,
			type: "deposit",
			amount: 2500.0,
			date: "2026-01-02T09:15:00Z",
			description:
				"Depósito - Herencia Lannister",
		},
		{
			id: 4,
			user_id: 4,
			type: "deposit",
			amount: 3000.0,
			date: "2026-01-02T14:00:00Z",
			description:
				"Venta de tesoros de Dragonstone",
		},
		{
			id: 5,
			user_id: 1,
			type: "transfer_out",
			amount: 100.0,
			date: "2026-01-03T10:00:00Z",
			description: "Envío a Arya Stark",
		},
		{
			id: 6,
			user_id: 2,
			type: "transfer_in",
			amount: 100.0,
			date: "2026-01-03T10:00:00Z",
			description: "Recibido de Jon Snow",
		},
		{
			id: 7,
			user_id: 3,
			type: "transfer_out",
			amount: 500.0,
			date: "2026-01-04T12:00:00Z",
			description: "Préstamo a Daenerys",
		},
		{
			id: 8,
			user_id: 4,
			type: "transfer_in",
			amount: 500.0,
			date: "2026-01-04T12:00:00Z",
			description: "Crédito de Tyrion Lannister",
		},
		{
			id: 9,
			user_id: 2,
			type: "transfer_out",
			amount: 50.0,
			date: "2026-01-05T08:30:00Z",
			description: "Pago suministros a Jon",
		},
		{
			id: 10,
			user_id: 1,
			type: "transfer_in",
			amount: 50.0,
			date: "2026-01-05T08:30:00Z",
			description: "Cobro suministros - Arya",
		},
		{
			id: 11,
			user_id: 4,
			type: "transfer_out",
			amount: 1000.0,
			date: "2026-01-06T15:20:00Z",
			description:
				"Sueldo Mano de la Reina - Tyrion",
		},
		{
			id: 12,
			user_id: 3,
			type: "transfer_in",
			amount: 1000.0,
			date: "2026-01-06T15:20:00Z",
			description: "Sueldo recibido de Daenerys",
		},
		{
			id: 13,
			user_id: 1,
			type: "deposit",
			amount: 200.0,
			date: "2026-01-07T10:00:00Z",
			description:
				"Depósito externo - Winterfell",
		},
		{
			id: 14,
			user_id: 2,
			type: "transfer_out",
			amount: 30.0,
			date: "2026-01-08T11:45:00Z",
			description: "Pago cena a Tyrion",
		},
		{
			id: 15,
			user_id: 3,
			type: "transfer_in",
			amount: 30.0,
			date: "2026-01-08T11:45:00Z",
			description: "Cena pagada por Arya",
		},
		{
			id: 16,
			user_id: 4,
			type: "deposit",
			amount: 1500.0,
			date: "2026-01-09T09:00:00Z",
			description: "Impuestos recaudados",
		},
		{
			id: 17,
			user_id: 3,
			type: "transfer_out",
			amount: 200.0,
			date: "2026-01-09T14:30:00Z",
			description: "Vino de alta calidad a Jon",
		},
		{
			id: 18,
			user_id: 1,
			type: "transfer_in",
			amount: 200.0,
			date: "2026-01-09T14:30:00Z",
			description: "Reembolso vino de Tyrion",
		},
		{
			id: 19,
			user_id: 2,
			type: "deposit",
			amount: 100.0,
			date: "2026-01-10T10:15:00Z",
			description: "Carga saldo - Recompensa",
		},
		{
			id: 20,
			user_id: 1,
			type: "transfer_out",
			amount: 75.0,
			date: "2026-01-10T20:00:00Z",
			description: "Equipamiento a Daenerys",
		},
		{
			id: 21,
			user_id: 4,
			type: "transfer_in",
			amount: 75.0,
			date: "2026-01-10T20:00:00Z",
			description: "Pago equipo de Jon Snow",
		},
		{
			id: 22,
			user_id: 3,
			type: "transfer_out",
			amount: 120.0,
			date: "2026-01-11T12:00:00Z",
			description: "Libros antiguos a Arya",
		},
		{
			id: 23,
			user_id: 2,
			type: "transfer_in",
			amount: 120.0,
			date: "2026-01-11T12:00:00Z",
			description: "Compra libros de Tyrion",
		},
		{
			id: 24,
			user_id: 4,
			type: "transfer_out",
			amount: 400.0,
			date: "2026-01-12T16:00:00Z",
			description: "Donación al Muro - Jon",
		},
		{
			id: 25,
			user_id: 1,
			type: "transfer_in",
			amount: 400.0,
			date: "2026-01-12T16:00:00Z",
			description: "Donación de Daenerys",
		},
		{
			id: 26,
			user_id: 2,
			type: "transfer_out",
			amount: 15.0,
			date: "2026-01-13T08:00:00Z",
			description: "Aporte viaje a Daenerys",
		},
		{
			id: 27,
			user_id: 4,
			type: "transfer_in",
			amount: 15.0,
			date: "2026-01-13T08:00:00Z",
			description: "Aporte viaje de Arya",
		},
		{
			id: 28,
			user_id: 3,
			type: "deposit",
			amount: 600.0,
			date: "2026-01-14T19:30:00Z",
			description: "Rentas de Casterly Rock",
		},
		{
			id: 29,
			user_id: 1,
			type: "transfer_out",
			amount: 25.0,
			date: "2026-01-15T11:00:00Z",
			description: "Mantenimiento Ghost a Tyrion",
		},
		{
			id: 30,
			user_id: 3,
			type: "transfer_in",
			amount: 25.0,
			date: "2026-01-15T11:00:00Z",
			description: "Pago cuidado Ghost - Jon",
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
