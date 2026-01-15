const RECENT_ACTIVITY = $("#recent-activity");
const USERNAME_CONTAINER = $("#username");
const CLOSE_SESSION_BUTTON = $("#close-session");
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
	CLOSE_SESSION_BUTTON.click(closeSession);

	const transactions = JSON.parse(
		localStorage.getItem("transactions")
	);

	const user = getUser(USERNAME_CONTAINER);

	if (!transactions.length) {
		RECENT_ACTIVITY.html(`
      <p class="fs-3 fw-bold text-center">No hay actividad reciente</p>
    `);
		return;
	}

	const userTransactions =
		transactions.filter(
			({ user_id }) => user_id === user.id
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
	renderTransactions({
		data: recentTransactions,
		container: RECENT_ACTIVITY,
	});
})();
