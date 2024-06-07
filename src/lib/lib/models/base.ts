export interface BaseModel {
  _id: string;
}

export interface ResponseModel<T> {
  message: string;
  data: T;
  status: number;
}
