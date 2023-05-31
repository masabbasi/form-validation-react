export const validate = (values) => {
  const err = {};
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
  const regPhone = /^0[0-9]{2,}[0-9]{7,}$/;

  if (
		!name ||
		!familyName ||
		!userName ||
		!email ||
		!phone ||
		!password ||
		!confirmPassword ||
		!checkRule
  ) {
    err.empty = "Enter All Values!";
  } else {
    if (!regName.test(name)) {
      err.name = "Enter The Correct Name.";
    }

    if (!regName.test(familyName)) {
      err.familyName = "Enter The Correct FamilyName.";
    }

    if (!regUserName.test(userName)) {
      err.userName = "Enter The Correct UserName. (Starts With A Letter And Is Followed By 7 To 29 Letters, Digits, or Underscores)";
    }

    if (!regEmail.test(email)) {
      err.email = "Enter The Correct Email.";
    }

    if (!regPhone.test(phone)) {
      err.phone = "Enter The Correct Phone.";
    }

    if (!regPassword.test(password)) {
      err.password = "Enter The Correct Password. (Least One Letter, One Digit, And 6 Characters)";
    }

    if (password != confirmPassword) {
      err.confirmPassword = "confirm The Password Is Not Correct.";
    }

    if (!checkRule) {
      err.checkRule = "Please Read The Rules And Check If You Agree.";
    }
  }
  return err;
};
