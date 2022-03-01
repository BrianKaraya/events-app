export default function ValidateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'Username required';
  }

  if (!values.email) {
    errors.email = 'Email address is required';
  } /* else if (
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      values.email
    )
  ) {
    errors.email = 'Email address is invalid';
  } */

  if (!values.password) {
    errors.password = 'Password is required';
  }
  /* if (!values.password < 6) {
    errors.password = 'Password needs to be 6 characters or more.';
  } */
  /*  } else if (!values.password > 12) {
    errors.password = 'Password needs to be 12 characters or less.';
  } */

  if (!values.password2) {
    errors.password2 = 'Confirm password';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords dont match.';
  }

  return errors;
}
