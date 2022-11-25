import { useState } from "react"

type AuthUser = {
    name: string
    email: string
}

const User = () => {
    const [isLoggedin, setisLoggedin] = useState(false)
    const [user, setUser] = useState<null | AuthUser>(null)
    return (
        <>
            <button onClick={() => {
                setisLoggedin(true)
                setUser({
                    name: "Jayant Waldia",
                    email: "imjayantwaldia@gmail.com"
                })
            }} disabled={isLoggedin}>Log In</button>
            <button onClick={() => setisLoggedin(false)} disabled={!isLoggedin}>Log Out</button>
            <div>{isLoggedin ? `User name is : ${user?.name} & User email is : ${user?.email}` : 'Please, Log In'}</div>
        </>

    )
}

export default User