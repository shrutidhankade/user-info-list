import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { createuser } from '../../store/reducer/UserReducer'


const Create = () => {
    const navigate = useNavigate();
    // const {users, setusers} = props;
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const dispatch = useDispatch();
    const abc = (e) => {
        e.preventDefault()
        console.log(username, password);
        const user = { username, password }

        if (username.trim().length <= 4 && password.trim().length <= 4) {
            toast.warn("value must be atleast 4")
            return
        }


        // const copyuser = [...users]
        // copyuser.push(user)
        // setusers(copyuser)

        // setpassword("")
        // setusername("")

        // localStorage.setItem("users", JSON.stringify(copyuser))
        // toast.success("users successfully created")

        dispatch(createuser(user));

        navigate("/Show")

    }
    return (
        <div><form onSubmit={abc}>
            <input onChange={(e) => setusername(e.target.value)}
                value={username}
                type="text" placeholder='username' />
            <input onChange={(e) => setpassword(e.target.value)}

                value={password}
                type="password" placeholder='password' />
            <button>submit</button>
        </form></div>
    )
}

export default Create