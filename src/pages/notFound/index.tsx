import { useRouteError } from "react-router-dom";
import { RouteErrorType } from "./types";

export const NotFound = () => {
  const error = useRouteError() as RouteErrorType;
  return (
    <>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
};
