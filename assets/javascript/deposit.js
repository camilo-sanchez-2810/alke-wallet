const DEPOSIT_FORM = $("#deposit");
const DESCRIPTION = $("#description");
const AMOUNT = $("#amount");
const USERNAME_CONTAINER = $("#username");
const CLOSE_SESSION_BUTTON = $("#close-session");

(() => {
	CLOSE_SESSION_BUTTON.click(closeSession);
	const user = getUser(USERNAME_CONTAINER);

	const isValidDeposit = (
		description,
		amount,
	) => {
		return (
			description &&
			amount &&
			parseFloat(amount) > 0
		);
	};

	DEPOSIT_FORM.on("submit", (e) => {
		e.preventDefault();
		const transactions =
			JSON.parse(
				localStorage.getItem("transactions"),
			) || [];

		const description = DESCRIPTION.val().trim();
		const amount = AMOUNT.val().trim();

		if (!isValidDeposit(description, amount)) {
			alert(
				"Rellene los campos y el saldo a depositar debe ser mayor a 0",
			);
			return;
		}

		transactions.push({
			id: getNextTransactionId(transactions),
			user_id: user.id,
			type: "deposit",
			amount: parseFloat(amount),
			description: description,
			date: new Date(),
		});

		localStorage.setItem(
			"transactions",
			JSON.stringify(transactions),
		);

		alert("Deposito realizado con éxito");

		this.reset();
	});
})();
