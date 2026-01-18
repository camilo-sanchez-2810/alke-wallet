const TRANSACTIONS_CONTAINER = $(
	"#transactions-container",
);
const SEARCH_INPUT = $("#search");
const SEARCH_BUTTON = $("#search-button");
const USERNAME_CONTAINER = $("#username");
const CLOSE_SESSION_BUTTON = $("#close-session");

(() => {
	CLOSE_SESSION_BUTTON.click(closeSession);

	const transactions =
		JSON.parse(
			localStorage.getItem("transactions"),
		) || [];

	const user = getUser(USERNAME_CONTAINER);

	if (!transactions.length) {
		showNoActivity(TRANSACTIONS_CONTAINER);
		return;
	}

	const userTransactions = transactions.filter(
		({ user_id }) => user_id === user.id,
	);

	const search = () => {
		const searchValue = SEARCH_INPUT.val()
			.trim()
			.toLowerCase();

		const filteredTransactions = searchValue
			? userTransactions.filter(
					({ description }) =>
						description
							.toLowerCase()
							.includes(searchValue),
				)
			: userTransactions;

		renderTransactions({
			data: filteredTransactions,
			container: TRANSACTIONS_CONTAINER,
		});
	};

	renderTransactions({
		data: [...userTransactions].reverse(),
		container: TRANSACTIONS_CONTAINER,
	});

	SEARCH_BUTTON.on("click", search);

	SEARCH_INPUT.on(
		"keypress",
		(e) => e.keyCode === 13 && search(),
	);
})();
