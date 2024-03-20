import { ZodError, ZodIssue } from 'zod';
import {
  TErrorSource,
  TGenericResponse,
} from '../../types/error.response.type';

export const handleZodError = (error: ZodError): TGenericResponse => {
  const errorSource: TErrorSource = error?.issues?.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue?.path?.length - 1],
      message: issue?.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation error',
    errorSource,
  };
};
