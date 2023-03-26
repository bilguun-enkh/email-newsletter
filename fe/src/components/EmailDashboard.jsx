import { useState } from "react"

export default function EmailDashboard() {
    const URL = "http://localhost:8080/email"
    const [currentEmail, setCurrentEmail] = useState()
    async function handleSubmit(e) {
        e.preventDefault()
        const data = { email: e.target.email.value }
        console.log(data)

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        console.log(FETCHED_JSON)
        setCurrentEmail(FETCHED_JSON.data.email)
    }

    return (
        <div className="form-div">
            <h1>Email Dashboard</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter email:
                    <input type="email" name="email" />
                </label>
                <button type="submit" style={{ width: "100px" }} >Submit</button>
            </form>
            {currentEmail}
            {/* {currentEmail && currentEmail.map((currentEmail, index) => {
                return (
                    <div key={index}><h3>{currentEmail}</h3>
                    </div>
                )
            })} */}
        </div>
    )
}