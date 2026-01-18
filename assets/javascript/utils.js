const EMAIL_REGEX = new RegExp(
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
);
const PASSWORD_REGEX = new RegExp(
	/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
);
const NAME_REGEX = new RegExp(
	/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,30}$/,
);

function showError({ html, msg, classname }) {
	html.removeClass(classname);
	html.text(msg);
}

function validateRegex({
	str,
	regex,
	html,
	error_msg,
	classname,
}) {
	if (!regex.test(str)) {
		showError({
			html,
			msg: error_msg,
			classname,
		});
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

function showNoActivity(container) {
	container.html(
		`<p class="fs-3 fw-bold text-center">No hay actividad reciente</p>`,
	);
}

function checkType(type) {
	return ["transfer_in", "deposit"].some(
		(element) => element === type,
	);
}

function getUser(html) {
	const user = JSON.parse(
		localStorage.getItem("currentUser"),
	);
	html.text(user.name);
	return user;
}

function closeSession() {
	localStorage.removeItem("currentUser");
	window.location.href = "../index.html";
}

function renderTransactions({
	data = [],
	container,
}) {
	if (!data.length) {
		showNoActivity(container);
		return;
	}

	container.empty();

	data.forEach(
		({ type, description, amount, date }) => {
			const transactionDate = new Date(date);
			const formattedDate = `${transactionDate.getDate()}/${
				transactionDate.getMonth() + 1
			}/${transactionDate.getFullYear()}`;

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

			container.append(transactionItem);
		},
	);
}
