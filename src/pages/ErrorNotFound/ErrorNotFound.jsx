import { ErrorWrapper } from "./ErrorNotFoundStyles";

const ErrorNotFound = () => {
    return(
        <ErrorWrapper>
            <h2>404</h2>
            <h2>Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
            <p>Please check the URL or return to the homepage.</p>
        </ErrorWrapper>
    )
}

export default ErrorNotFound;