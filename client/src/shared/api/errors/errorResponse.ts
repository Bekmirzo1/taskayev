import { AxiosError, type AxiosResponse } from "axios";
import { FetchError, type IFetchError } from "ofetch";
interface MyError {
  message: string;
}
export default (error: unknown) => {
  let message = "Unknown Error";
  // if (error instanceof AxiosError) {
  if (error instanceof AxiosError) {
    //  const err = error.response;
    const err = error.response as AxiosResponse<MyError>;
    message = err.data.message;
    console.log(message);
  } else if (error instanceof FetchError) {
    const err = error.data as IFetchError<MyError>;
    message = err.message;
    console.log(message);
  } else {
    console.log(error);
  }
};
