import { SCARECROW } from "../../assets"

const ErrorBox = () => {
    return (
        <div>
            <p className="not-found">404 NOT FOUND</p>
            <div className="container">
                <img className="error-img" src={SCARECROW} alt="scarecrow" />
                <div className="text-section">
                    <h1>I have bad news for you</h1>
                    <p>The City you entered is not available</p>
                </div> 
            </div>
        </div>
    )
}

export default ErrorBox;