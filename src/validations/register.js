import * as yup from 'yup';
import {
  PASSWORD_REQUIRED,
  CONFIRM_PASSWORD_REQUIRED,
  PASSWORD_VALIDATION,
  EMAIL_VALID,
  EMAIL_REQUIRED,
  SET_PASSWORDS_NOT_MATCH,
  USERNAME_LENGTH,
  FIRSTNAME_REQUIRED,
  LASTNAME_REQUIRED,
} from '../constants/error';

const registerValidation = yup.object({
  firstName: yup
    .string()
    .max(256, USERNAME_LENGTH)
    .trim()
    .required(FIRSTNAME_REQUIRED),
  lastName: yup
    .string()
    .max(256, USERNAME_LENGTH)
    .trim()
    .required(LASTNAME_REQUIRED),
  email: yup.string().email(EMAIL_VALID).required(EMAIL_REQUIRED),
  password: yup
    .string()
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),._?":\-/=+'{};\[\]|<>])[A-Za-z\d!@#$%^&*(),._?":\-/=+'{};\[\]|<>]{10,}$/,
      PASSWORD_VALIDATION,
    )
    .required(PASSWORD_REQUIRED),
  confirm: yup
    .string()
    .oneOf([yup.ref('password'), null], SET_PASSWORDS_NOT_MATCH)
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),._?":\-/=+'{};\[\]|<>])[A-Za-z\d!@#$%^&*(),._?":\-/=+'{};\[\]|<>]{10,}$/,
      PASSWORD_VALIDATION,
    )
    .required(CONFIRM_PASSWORD_REQUIRED),
});

export default registerValidation;
