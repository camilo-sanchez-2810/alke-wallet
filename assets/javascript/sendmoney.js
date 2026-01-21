const TRANSFER_FORM = $("#transfer");
const RECIPIENT = $("#email");
const DESCRIPTION = $("#description");
const AMOUNT = $("#amount");
const USERNAME_CONTAINER = $("#username");
const CLOSE_SESSION_BUTTON = $("#close-session");

(() => {
	const isValidTransfer = (
		recipient,
		description,
		amount,
	) => {
		return (
			recipient &&
			description &&
			amount &&
			amount > 0
		);
	};

	const searchRecipient = (recipientEmail) => {
		const users =
			JSON.parse(localStorage.getItem("users")) ||
			[];
		return (
			users.find(
				({ email }) => email === recipientEmail,
			) || null
		);
	};

	const createTransactions = (
		user,
		recipient,
		amount,
		description,
	) => {
		const transactions =
			JSON.parse(
				localStorage.getItem("transactions"),
			) || [];
		const baseTransaction = {
			amount,
			description,
			date: new Date(),
		};

		return [
			{
				...baseTransaction,
				id: getNextTransactionId(transactions),
				user_id: user.id,
				type: "transfer_out",
			},
			{
				...baseTransaction,
				id: getNextTransactionId(transactions),
				user_id: recipient.id,
				type: "transfer_in",
			},
		];
	};

	const saveTransactions = (newTransactions) => {
		const transactions =
			JSON.parse(
				localStorage.getItem("transactions"),
			) || [];
		localStorage.setItem(
			"transactions",
			JSON.stringify([
				...transactions,
				...newTransactions,
			]),
		);
	};

	CLOSE_SESSION_BUTTON.click(closeSession);
	const user = getUser(USERNAME_CONTAINER);
	TRANSFER_FORM.on("submit", function (e) {
		e.preventDefault();

		const recipientEmail = RECIPIENT.val().trim();
		const description = DESCRIPTION.val().trim();
		const amount =
			parseFloat(AMOUNT.val().trim()) || 0;

		if (
			!isValidTransfer(
				recipientEmail,
				description,
				amount,
			)
		) {
			return alert(
				"Por favor, rellena los campos de manera adecuada",
			);
		}

		const recipient = searchRecipient(
			recipientEmail,
		);
		if (!recipient) {
			return alert(
				"El usuario al que le quieres transferir no existe",
			);
		}

		const transactions = createTransactions(
			user,
			recipient,
			amount,
			description,
		);
		saveTransactions(transactions);

		alert("Transferencia realizada con éxito");
		this.reset();
	});
})();
