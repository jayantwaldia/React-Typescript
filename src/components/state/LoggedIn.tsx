import { useState } from "react"

const LoggedIn = () => {

    const [isLoggedin, setisLoggedin] = useState(false)
    return (
        <>
            <button onClick={() => setisLoggedin(true)} disabled={isLoggedin}>Log In</button>
            <button onClick={() => setisLoggedin(false)} disabled={!isLoggedin}>Log Out</button>
            <div>{isLoggedin ? 'Logged In' : 'Please, Log In'}</div>
        </>

    )
}

export default LoggedIn