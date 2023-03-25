export default function EmailDashboard() {
    const URL = "http://localhost:8080/email"

    async function handleSubmit(e) {
        e.preventDefault()
        const email = e.target.email.value
        console.log(email)

        const options = {
            method: "POST",
            body: JSON.stringify(email)
        }

        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()
        console.log(FETCHED_JSON)
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
        </div>
    )
}