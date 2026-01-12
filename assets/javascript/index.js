const LOGIN_FORM = $("#login-form");
const EMAIL_HELP_BLOCK = $("#emailHelpBlock");
const EMAIL_INPUT = $("#email");
const PASSWORD_INPUT = $("#password");
const PASSWORD_HELP_BLOCK = $(
	"#passwordHelpBlock"
);

LOGIN_FORM.on("submit", function (e) {
	e.preventDefault();
	const email = EMAIL_INPUT.val().trim();
	const password = PASSWORD_INPUT.val().trim();
	if (
		validateRegex({
			str: email,
			regex: EMAIL_REGEX,
			html: EMAIL_HELP_BLOCK,
			error_msg: "Email inválido",
			classname: "visually-hidden",
		}) &&
		validateRegex({
			str: password,
			regex: PASSWORD_REGEX,
			html: PASSWORD_HELP_BLOCK,
			error_msg: "Contraseña inválida",
			classname: "visually-hidden",
		})
	) {
		const users = JSON.parse(
			localStorage.getItem("users")
		);
		const user = users.find(
			(user) => user.email === email
		);
		if (user) {
			if (user.password === password) {
				localStorage.setItem(
					"currentUser",
					JSON.stringify(user)
				);
				alert("Bienvenido " + user.name);
				window.location.href =
					"./pages/dashboard.html";
			} else {
				PASSWORD_HELP_BLOCK.removeClass(
					"visually-hidden"
				);
				PASSWORD_HELP_BLOCK.text(
					"Contraseña incorrecta"
				);
			}
		} else {
			EMAIL_HElP_BLOCK.removeClass(
				"visually-hidden"
			);
			EMAIL_HElP_BLOCK.text(
				"Usuario no registrado"
			);
		}
	}
});
