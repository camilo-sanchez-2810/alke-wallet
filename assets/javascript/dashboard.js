const RECENT_ACTIVITY = $("#recent-activity");
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
		showNoActivity(RECENT_ACTIVITY);
		return;
	}

	const userTransactions = transactions.filter(
		({ user_id }) => user_id === user.id,
	);

	const recentTransactions = userTransactions
		.slice(-6)
		.reverse();

	renderTransactions({
		data: recentTransactions,
		container: RECENT_ACTIVITY,
	});
})();
