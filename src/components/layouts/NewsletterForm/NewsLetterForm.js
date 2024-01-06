import "./NewsLetterForm.css"

const NewsLetterForm = () => {
    return (
        <div className="newsletterForm">
            <div className="formContainer">
                <h1 className="formHeading">Subscribe Our Newsletter</h1>

                <div className="formInputContainer">
                    <input className="formInput" type = "text" placeholder="Name:"/>
                    <input className="formInput" type = "email" placeholder="Enter your Email" />
                    <button className="submitButton">SEND</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetterForm;