import { type AxiosError } from "axios";
import { type ToastOptions, toast } from "react-toastify";

export const getQueryKeys = (namespace: string) => ({
  create: `${namespace}/create`,
  read: `${namespace}/read`,
  readOne: `${namespace}/readOne`,
  update: `${namespace}/update`,
  patch: `${namespace}/patch`,
  put: `${namespace}/put`,
  delete: `${namespace}/delete`,
});

export function handleErrors(error: AxiosError) {
  const MSG = "Something went wrong";
  // console.log(error);

  let errorMessage = "";

  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    errorMessage = (error.response?.data as any)?.message;
    const data = error.response?.data as any;

    if (typeof data === "string") return data || MSG;

    const errorObject = (data?.errors || {}) as Record<string, string[]>;
    const errors = Object.values(errorObject);

    if (errors.length) {
      const [err] = errors;
      return err.length ? err[0] : MSG;
    }

    if (typeof errorMessage === "string") {
      return errorMessage;
    }

    return MSG;
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    errorMessage = error.request?.message;
    if (errorMessage) {
      return errorMessage;
    }
  }

  return error.message || MSG;
}

export const errorToast = (
  message = "Something went wrong",
  options?: ToastOptions | undefined
) => {
  toast.error(message, options);
};
