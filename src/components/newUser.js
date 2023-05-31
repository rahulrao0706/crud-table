import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../store"
import { useNavigate } from "react-router-dom"

const NewUser = () => {
    const Navigate = useNavigate()


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [status, setStatus] = useState('')


    const dispatch = useDispatch()

    function handleSubmit(event) {
        event.preventDefault()
        const allUser = {
            name, email, gender, status
        }
        dispatch(addUser(allUser)).unwrap().then(res => {

            setName('')
            setEmail('')
            setGender('')
            setStatus('')
            Navigate('/')
            alert('Successful')

        })

    };

    return (<>
        <div className="mb-3">
            <form onSubmit={handleSubmit}>

                <label className = "form-label text-bold">Name</label>
                <input type = "text" className = "form-control" placeholder = "name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <label for = "exampleInputEmail1" className = "form-label">Email address</label>
                <input type = "email" className = "form-control" placeholder = "email" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)}></input>

                <label className = "form-label">Gender</label>

                <select className = "form-select" aria-label="Default select example" value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option defaultValue value=''>Choose Gender</option>
                    <option value = "male" onChange={(e) => setGender(e.target.value)} >Male</option>
                    <option value = "female" onChange={(e) => setGender(e.target.value)} >Female</option>


                </select>
                <label className = "form-label">Status</label>
                <select className = "form-select" aria-label="Default select example" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option defaultValue value = ''>Choose Status</option>
                    <option value = "Active" onChange={(e) => setGender(e.target.value)} >Active</option>
                    <option value = "Inactive" onChange={(e) => setGender(e.target.value)} >Inactive</option>
                </select>
                <button type='submit' className = "btn btn-primary mt-2" > ADD USER </button>
            </form>
        </div>

    </>)

};

export default NewUser;


