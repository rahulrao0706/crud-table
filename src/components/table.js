import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../store';
import { Link } from 'react-router-dom';
import { deleteUser } from '../store';

// import { useNavigate } from 'react-router-dom';

function UserTable() {

    const dispatch = useDispatch()

    const { data, isLoading, error } = useSelector((state) => {
        return state.users
    })
    useEffect(() => {
        if (data.length === 0) {

            dispatch(fetchUsers())
        }
    }, [dispatch, data.length])



    if (isLoading) {
        return <div>Loading....</div>
    }
    if (error) {
        return <div>Error fetching data....</div>
    }



    // const showData = () => {
    //     navigate('/showuser', { state: { data: data } })
    // }
    const handleDelete = (user) => {
        if (window.confirm(`Do You Really Wanat To Delete?${user.name}`))
            dispatch(deleteUser(user))

    }

    return <div>

        <div className="d-flex flex-row-reverse">
            <Link to='/newuser'><button type="button" className="btn btn-primary btn-lg m-3 " >+ ADD USER</button></Link>

        </div>
        <table className='table table-striped-columns'>
            <thead >
                <tr >
                    <th>ID</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Actions</th>

                </tr>
            </thead>
            {
                data.map((user) => {

                    return <tbody >
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.status}</td>
                            <td><Link to={`/showuser/${user.id}`}><button type="button" className="btn btn-outline-primary mx-2">Show</button></Link>
                                <Link to={`/updateuser/${user.id}`}>
                                    <button type="button" className="btn btn-outline-warning mx-2">Edit</button></Link>
                                <button onClick={() => handleDelete(user)} type="button" className="btn btn-outline-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>

                })
            };

            <tbody>
            </tbody>
        </table>
    </div >

};

export default UserTable;