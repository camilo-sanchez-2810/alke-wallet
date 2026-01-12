const RECENT_ACTIVITY = $("#recent-activity");

/*
  TRANSACTION OBJECT
  {
    id,
    type,
    description,
    amount,
    user_id,
    recipient_id,
    date
  }
*/

(() => {
	const transactions = JSON.parse(
		localStorage.getItem("transactions")
	);

	const user = JSON.parse(
		localStorage.getItem("currentUser")
	);

	if (!transactions.length) {
		RECENT_ACTIVITY.html(`
      <p class="fs-3 fw-bold text-center">No hay actividad reciente</p>
    `);
		return;
	}

	const userTransactions =
		transactions.filter(
			(transaction) =>
				(transaction.user_id = user.id)
		) || [];

	if (!userTransactions.length) {
		RECENT_ACTIVITY.html(`
      <p class="fs-3 fw-bold text-center">No hay actividad reciente</p>
    `);
		return;
	}

	const recentTransactions =
		userTransactions.slice(
			userTransactions.length - 6,
			userTransactions.length
		);
	recentTransactions.reverse();
	recentTransactions.forEach((transaction) => {
		const { type, description, amount, date } =
			transaction;
		const transactionDate = new Date(date);
		const formattedDate = `${transactionDate.getDate()}/${transactionDate.getMonth()}/${transactionDate.getFullYear()}`;

		const transactionItem = `
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <p class="fs-5 fw-bold">${description}</p>
          <p class="fs-6 text-muted">${formattedDate}</p>
        </div>
        <p class="fs-5 fw-bold ${
					type === "deposit"
						? "text-success"
						: "text-danger"
				}">
          ${
						type === "deposit" ? "+" : "-"
					} $${amount}
        </p>
      </div>
    `;

		RECENT_ACTIVITY.append(transactionItem);
	});
})();
