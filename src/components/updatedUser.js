import { editUser } from "../store"
import { showUser } from "../store"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const UpdatedUser = () => {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [status, setStatus] = useState('')

  const dispatch = useDispatch()
  const Navigate = useNavigate()


  const handleEdit = (event) => {
    event.preventDefault()
    const userEdit = {
      name, email, gender, status, id
    }
    dispatch(editUser(userEdit)).unwrap().then(res => {
      setName('')
      setEmail('')
      setGender('')
      setStatus('')
      alert("It's successfull")
      Navigate('/')


    }).catch(err => { 'Error Loading data...' })

  }

  useEffect(() => {
    dispatch(showUser(id)).then(res => {

      setName(res.payload.name)
      setEmail(res.payload.email)
      setGender(res.payload.gender)
      setStatus(res.payload.status)

    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className = "mb-3">
      <form onSubmit = {handleEdit}>


        <label className = "form-label">Name</label>
        <input value = {name} type="text" className = "form-control" onChange={(e) => setName(e.target.value)} />
        <label className = "form-label">Email address</label>
        <input type="email" className = "form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => { setEmail(e.target.value) }} ></input>

        <label className = "form-label">Gender</label>

        <select className = "form-select" aria-label="Default select example" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option defaultValue value = ''>Choose Gender</option>
          <option value = "male" onChange = {(e) => setGender(e.target.value)} >Male</option>
          <option value = "female" onChange = {(e) => setGender(e.target.value)} >Female</option>


        </select>
        <label className = "form-label">Status</label>
        <select className = "form-select" aria-label = "Default select example" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option defaultValue value = ''>Choose Status</option>
          <option value = "Active" onChange = {(e) => setGender(e.target.value)} >Active</option>
          <option value = "inactive" onChange = {(e) => setGender(e.target.value)} >Inactive</option>
        </select>
        <button type = 'submit' className = "btn btn-primary mt-2" > EDIT USER </button>
      </form>
    </div>
  )
}

export default UpdatedUser;
