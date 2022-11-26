import * as yup from 'yup';
import {GOALDESCRIPTION_REQUIRED, GOALNAME_REQUIRED} from '../constants/error';

const loginValidation = yup.object({
  name: yup.string().required(GOALNAME_REQUIRED),
  description: yup.string().required(GOALDESCRIPTION_REQUIRED),
});

export default loginValidation;
