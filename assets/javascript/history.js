const TRANSACTIONS_CONTAINER = $(
	"#transactions-container"
);
const SEARCH_INPUT = $("#search");
const SEARCH_BUTTON = $("#search-button");

(() => {
	const transactions =
		JSON.parse(
			localStorage.getItem("transactions")
		) || [];

	const user = JSON.parse(
		localStorage.getItem("currentUser")
	);

	if (!transactions.length) {
		TRANSACTIONS_CONTAINER.html = `<p class="fs-5 fw-bold text-center">No hay transacciones</p>`;
		return;
	}

	let userTransactions = transactions.filter(
		({ user_id, recipient_id }) =>
			user_id === user.id ||
			recipient_id === user.id
	);

	if (!userTransactions.length) {
		TRANSACTIONS_CONTAINER.html = `<p class="fs-5 fw-bold text-center">No hay transacciones</p>`;
		return;
	}

	userTransactions.forEach(
		({ type, description, amount, date }) => {
			const transactionDate = new Date(date);
			const formattedDate = `${transactionDate.getDate()}/${transactionDate.getMonth()}/${transactionDate.getFullYear()}`;

			const transactionItem = `
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <p class="fs-5 fw-bold">${description}</p>
          <p class="fs-6 text-muted">${formattedDate}</p>
        </div>
        <p class="fs-5 fw-bold ${
					checkType(type)
						? "text-success"
						: "text-danger"
				}">
          ${
						checkType(type) ? "+" : "-"
					} $${amount}
        </p>
      </div>
    `;

			TRANSACTIONS_CONTAINER.append(
				transactionItem
			);
		}
	);

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
