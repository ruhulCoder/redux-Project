import { useState } from "react";
import { updateUser } from "./UserReducer";
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";

function Update() {
    const { id } =useParams();

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const existingUser = users.filter((f) => f.id == id);

    const { name, email } = existingUser[0];
    const [updateName, setUpdateName] = useState(name);
    const [updateEmail, setUpdateEmail] = useState(email);

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id, 
            name: updateName, 
            email: updateEmail
        }))
        navigate("/")
    }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={updateName}
              className="form-control"
              placeholder="enter name"
              onChange={(e) => setUpdateName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={updateEmail}
              className="form-control"
              placeholder="enter email"
              onChange={(e) => setUpdateEmail(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update;