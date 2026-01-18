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

const checkPasswordMatch = (
	password,
	passwordConfirm
) => {
	if (password !== passwordConfirm) {
		showError({
			html: PASSWORD_CONFIRM_HELP_BLOCK,
			msg: "Las contraseñas no coinciden",
			classname: "visually-hidden",
		});
		return false;
	}
	return true;
};

const checkEmailExists = (email, users) => {
	if (
		users.find((user) => user.email === email)
	) {
		showError({
			html: EMAIL_HELP_BLOCK,
			msg: "El email ya está registrado",
			classname: "visually-hidden",
		});
		return true;
	}
	return false;
};

const createUser = (name, email, password) => {
	const users =
		JSON.parse(localStorage.getItem("users")) ||
		[];
	const currentId =
		parseInt(localStorage.getItem("currentId")) ||
		1;

	users.push({
		id: currentId,
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
		currentId + 1
	);

	alert("Usuario registrado con éxito");
	window.location.href = "../index.html";
};

REGISTER_FORM.on("submit", function (e) {
	e.preventDefault();

	const name = NAME_INPUT.val().trim();
	const email = EMAIL_INPUT.val().trim();
	const password = PASSWORD_INPUT.val().trim();
	const passwordConfirm =
		PASSWORD_CONFIRM_INPUT.val().trim();

	if (
		!validateRegisterForm({
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
	)
		return;

	const users =
		JSON.parse(localStorage.getItem("users")) ||
		[];

	if (
		!checkPasswordMatch(
			password,
			passwordConfirm
		) ||
		checkEmailExists(email, users)
	)
		return;

	createUser(name, email, password);
});
