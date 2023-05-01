export default function validation(email, password, confiPasswrod = null) {
  const errors = {};
  const eamilPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (email === "") {
    errors.email = "Email is required";
  } else if (!eamilPattern.test(email)) {
    errors.email = "Invalid email";
  }
  if (password === "") {
    errors.password = "Password is required";
  } else if (password.length < 6) {
    errors.password = "weak-password";
  }
  if (confiPasswrod !== null) {
    if (confiPasswrod === "") {
      errors.confiPassword = "Confirm password is required";
    } else if (confiPasswrod !== password) {
      errors.confiPassword = "password's did not match";
    }
  }
  return errors;
}
