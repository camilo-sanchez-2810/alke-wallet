const LOGIN_FORM = $("#login-form");
const EMAIL_HELP_BLOCK = $("#emailHelpBlock");
const EMAIL_INPUT = $("#email");
const PASSWORD_INPUT = $("#password");
const PASSWORD_HELP_BLOCK = $(
	"#passwordHelpBlock"
);

const authenticateUser = (email, password) => {
	const users =
		JSON.parse(localStorage.getItem("users")) ||
		[];
	return users.find(
		(user) =>
			user.email === email &&
			user.password === password
	);
};

const hideErrors = () => {
	EMAIL_HELP_BLOCK.addClass("visually-hidden");
	PASSWORD_HELP_BLOCK.addClass("visually-hidden");
};

const redirectToDashboard = (user) => {
	localStorage.setItem(
		"currentUser",
		JSON.stringify(user)
	);
	alert("Bienvenido " + user.name);
	window.location.href = "./pages/dashboard.html";
};

LOGIN_FORM.on("submit", function (e) {
	e.preventDefault();
	hideErrors();

	const email = EMAIL_INPUT.val().trim();
	const password = PASSWORD_INPUT.val().trim();

	const isEmailValid = validateRegex({
		str: email,
		regex: EMAIL_REGEX,
		html: EMAIL_HELP_BLOCK,
		error_msg: "Email inválido",
		classname: "visually-hidden",
	});

	const isPasswordValid = validateRegex({
		str: password,
		regex: PASSWORD_REGEX,
		html: PASSWORD_HELP_BLOCK,
		error_msg: "Contraseña inválida",
		classname: "visually-hidden",
	});

	if (!isEmailValid || !isPasswordValid) return;

	const user = authenticateUser(email, password);

	if (user) {
		redirectToDashboard(user);
	} else {
		const users =
			JSON.parse(localStorage.getItem("users")) ||
			[];
		const emailExists = users.some(
			(u) => u.email === email
		);

		if (emailExists) {
			showError({
				html: PASSWORD_HELP_BLOCK,
				msg: "Contraseña incorrecta",
				classname: "visually-hidden",
			});
		} else {
			showError({
				html: EMAIL_HELP_BLOCK,
				msg: "Usuario no registrado",
				classname: "visually-hidden",
			});
		}
	}
});
