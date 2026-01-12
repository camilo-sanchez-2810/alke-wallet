const EMAIL_REGEX = new RegExp(
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const PASSWORD_REGEX = new RegExp(
	/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
);
const NAME_REGEX = new RegExp(
	/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,30}$/
);

function validateRegex({
	str,
	regex,
	html,
	error_msg,
	classname,
}) {
	if (!regex.test(str)) {
		html.removeClass(classname);
		html.text(error_msg);
		return false;
	}
	html.addClass(classname);
	return true;
}

function validateRegisterForm({
	name,
	email,
	password,
	passwordConfirm,
	nameHelpBlock,
	emailHelpBlock,
	passwordHelpBlock,
	passwordConfirmHelpBlock,
}) {
	const nameValidated = validateRegex({
		str: name,
		regex: NAME_REGEX,
		html: nameHelpBlock,
		error_msg:
			"El nombre debe tener entre 2 y 30 caracteres",
		classname: "visually-hidden",
	});
	const emailValidated = validateRegex({
		str: email,
		regex: EMAIL_REGEX,
		html: emailHelpBlock,
		error_msg: "El email no es válido",
		classname: "visually-hidden",
	});
	const passwordValidated = validateRegex({
		str: password,
		regex: PASSWORD_REGEX,
		html: passwordHelpBlock,
		error_msg:
			"La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número",
		classname: "visually-hidden",
	});
	const passwordConfirmValidated = validateRegex({
		str: passwordConfirm,
		regex: PASSWORD_REGEX,
		html: passwordConfirmHelpBlock,
		error_msg:
			"La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número",
		classname: "visually-hidden",
	});
	return (
		nameValidated &&
		emailValidated &&
		passwordValidated &&
		passwordConfirmValidated
	);
}
