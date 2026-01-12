const REGISTER_FORM = $("#register-form");
const NAME_INPUT = $("#name");
const EMAIL_INPUT = $("#email");
const PASSWORD_INPUT = $("#password");
const PASSWORD_CONFIRM_INPUT = $(
	"#password-confirm"
);
const NAME_HELP_BLOCK = $("#nameHelpBlock");
const EMAIL_HELP_BLOCK = $("#emailHelpBlock");
const PASSWORD_HELP_BLOCK = $(
	"#passwordHelpBlock"
);
const PASSWORD_CONFIRM_HELP_BLOCK = $(
	"#passwordConfirmHelpBlock"
);

REGISTER_FORM.on("submit", function (e) {
	e.preventDefault();
	const name = NAME_INPUT.val();
	const email = EMAIL_INPUT.val();
	const password = PASSWORD_INPUT.val();
	const passwordConfirm =
		PASSWORD_CONFIRM_INPUT.val();

	if (
		validateRegisterForm({
			name,
			email,
			password,
			passwordConfirm,
			nameHelpBlock: NAME_HELP_BLOCK,
			emailHelpBlock: EMAIL_HELP_BLOCK,
			passwordHelpBlock: PASSWORD_HELP_BLOCK,
			passwordConfirmHelpBlock:
				PASSWORD_CONFIRM_HELP_BLOCK,
		})
	) {
		if (password !== passwordConfirm) {
			console.log(password, passwordConfirm);
			PASSWORD_CONFIRM_HELP_BLOCK.removeClass(
				"visually-hidden"
			);
			PASSWORD_CONFIRM_HELP_BLOCK.text(
				"Las contraseñas no coinciden"
			);
			return;
		}
		const users =
			JSON.parse(localStorage.getItem("users")) ||
			[];
		const user = users.find(
			(user) => user.email === email
		);
		if (user) {
			EMAIL_HELP_BLOCK.removeClass(
				"visually-hidden"
			);
			EMAIL_HELP_BLOCK.text(
				"El email ya está registrado"
			);
			return;
		}

		const currentId =
			localStorage.getItem("currentId");

		users.push({
			id: parseInt(currentId),
			name,
			email,
			password,
		});
		localStorage.setItem(
			"users",
			JSON.stringify(users)
		);
		localStorage.setItem(
			"currentId",
			parseInt(currentId) + 1
		);
		alert("Usuario registrado con éxito");
		window.location.href = "../index.html";
	}
});
