interface RequestResult<T> {
  code: string;
  data: T;
  error: string | null;
  message: string;
  success: boolean;
}
