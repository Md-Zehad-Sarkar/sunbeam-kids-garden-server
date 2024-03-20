import mongoose from 'mongoose';
import {
  TErrorSource,
  TGenericResponse,
} from '../../types/error.response.type';

export const handleCastError = (
  error: mongoose.Error.CastError,
): TGenericResponse => {
  const errorSource: TErrorSource = [
    {
      path: error?.path,
      message: error?.message,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid ID',
    errorSource,
  };
};
