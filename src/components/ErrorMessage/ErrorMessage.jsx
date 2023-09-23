import { Link } from "react-router-dom";


const ErrorMessage = () => {
    return (
        <div className="text-center">
            <h2>404!</h2>
            <h3>This is not Found</h3>
            <Link to='/' className="btn">Go To Home</Link>
        </div>
    );
};

export default ErrorMessage;