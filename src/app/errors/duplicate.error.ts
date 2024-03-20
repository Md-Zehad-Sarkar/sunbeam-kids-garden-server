/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  TErrorSource,
  TGenericResponse,
} from '../../types/error.response.type';

export const handleDuplicateError = (err: any): TGenericResponse => {
  const match = err?.message.match(/"([^"]*)"/);
  const extractMessage = match && match[1];
  const errorSource: TErrorSource = [
    { path: '', message: `${extractMessage} is already exist` },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: 'Duplicate values',
    errorSource,
  };
};
