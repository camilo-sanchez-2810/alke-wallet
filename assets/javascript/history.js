const TRANSACTIONS_CONTAINER = $(
	"#transactions-container"
);
const SEARCH_INPUT = $("#search");
const SEARCH_BUTTON = $("#search-button");
const USERNAME_CONTAINER = $("#username");
const CLOSE_SESSION_BUTTON = $("#close-session");

(() => {
	CLOSE_SESSION_BUTTON.click(closeSession);
	const transactions =
		JSON.parse(
			localStorage.getItem("transactions")
		) || [];

	const user = getUser(USERNAME_CONTAINER);

	if (!transactions.length) {
		TRANSACTIONS_CONTAINER.html = `<p class="fs-3 fw-bold text-center">No hay transacciones</p>`;
		return;
	}

	let userTransactions = transactions.filter(
		({ user_id }) => user_id === user.id
	);

	console.log(userTransactions);

	renderTransactions({
		data: userTransactions.reverse(),
		container: TRANSACTIONS_CONTAINER,
	});

	// SEARCH_BUTTON.click(function () {
	// 	const searchValue = SEARCH_INPUT.val()
	// 		.trim()
	// 		.toLowerCase();

	// 	userTransactions = transactions.filter(
	// 		({ description, user_id, recipient_id }) =>
	// 			description
	// 				.toLowerCase()
	// 				.includes(searchValue) ||
	// 			user_id === user.id ||
	// 			recipient_id === user.id
	// 	);
	// });
})();
