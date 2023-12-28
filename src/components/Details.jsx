import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Details = () => {
    const navigate = useNavigate();
    const { title } = useParams();

    const backHandle = () => {
        navigate(-1);
    }

    return (
        <>
            <h1>hello{title}</h1>
            <button onClick={backHandle}>back</button>
        </>
    )
}

export default Details