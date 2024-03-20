import mongoose, { CastError } from 'mongoose';
import {
  TErrorSource,
  TGenericResponse,
} from '../../types/error.response.type';

export const handleValidationError = (
  error: mongoose.Error.ValidationError,
): TGenericResponse => {
  const errorSource: TErrorSource = Object.values(error.errors).map(
    (val: mongoose.Error.ValidatorError | CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation error',
    errorSource,
  };
};
