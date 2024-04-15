export type GenericResponse<T> = {
  data: T;
  message: string;
  request_id: string;
  status: number;
};
