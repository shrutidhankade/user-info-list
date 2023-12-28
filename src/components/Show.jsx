import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { deleteuser } from '../../store/reducer/UserReducer'

const Show = () => {
    const { users } = useSelector((state) => state.UserReducer);
    const dispatch = useDispatch();

    const DeleteHandler = (index) => {
        dispatch(deleteuser(index));

    }
    console.log(users);
    return (
        <>

            <ol className="flex justify-start flex-col mt-5 w-1/2 m-auto container`${backcolor}`" >

                <h1 className="text-2xl mb-4">Registered Users</h1>

                {users.map((user, index) => {
                    return <li key={index}
                        className="flex justify-between mb-4 text-1xl p-4 bg-indigo-100"  >


                            <Link to={`show/Details/${user.username}`}>

                        {user.username}
                            </Link>



                        <p>
                            <span className="mr-6">✏️</span>
                            <span
                                onClick={() => DeleteHandler(index)}
                            >
                                ❌
                            </span>
                        </p>

                    </li>



                }).reverse()}

            </ol>
            <hr className="w-[80%] m-auto my-5 " />

            <div className='w-[80%]'>
                <Outlet />
            </div>
        </>
    )
}

export default Show;