import 'bootstrap/dist/css/bootstrap.min.css';
import NewUser from "./components/newUser";
import ShowUser from "./components/showUser";
import UsersTable from "./components/table";
import UpdatedUser from "./components/updatedUser";
import ModalPage from "./components/modal";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <Routes>
        <Route path = "/" element = {<UsersTable />} />
        <Route path = "/newuser" element = {<NewUser />} />
        <Route path = "/showuser/:id" element = {<ShowUser />} />
        <Route path = "/updateuser/:id" element = {<UpdatedUser />} />
        <Route path = "/modal" element = {<ModalPage />} />
      </Routes>
    </>

  )
};

export default App;