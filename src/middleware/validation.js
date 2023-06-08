export const validate = (values) => {
	const errors = {};
	const {
		name,
		familyName,
		userName,
		email,
		phone,
		password,
		confirmPassword,
		checkRule,
	} = values;
	const regName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
	const regUserName = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
	const regPassword = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
	const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const regPhone = /^0\d{10}$/;

	if (!name) {
		errors.name = "Required";
	} else if (!regName.test(name)) {
		errors.name = "Enter The Correct Name.";
	}

	if (!familyName) {
		errors.familyName = "Required";
	} else if (!regName.test(familyName)) {
		errors.familyName = "Enter The Correct FamilyName.";
	}

	if (!userName) {
		errors.userName = "Required";
	} else if (!regUserName.test(userName)) {
		errors.userName =
			"Enter The Correct UserName. (Starts With A Letter And Is Followed By 7 To 29 Letters, Digits, or Underscores)";
	}

	if (!email) {
		errors.email = "Required";
	} else if (!regEmail.test(email)) {
		errors.email = "Enter The Correct Email.";
	}

	if (!phone) {
		errors.phone = "Required";
	} else if (!regPhone.test(phone)) {
		errors.phone = "Enter The Correct Phone.";
	}

	if (!password) {
		errors.password = "Required";
	} else if (!regPassword.test(password)) {
		errors.password =
			"Enter The Correct Password. (Least One Letter, One Digit, And 6 Characters)";
	}

	if (!confirmPassword) {
		errors.confirmPassword = "Required";
	} else if (password != confirmPassword) {
		errors.confirmPassword = "confirm The Password Is Not Correct.";
	}

	if (!checkRule) {
		errors.checkRule = "Please Check the Rules checkbox.";
	}

	return errors;
};
