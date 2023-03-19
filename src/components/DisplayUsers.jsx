import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/all.js";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {
  // ------------To display data-----------
  // recieved data from the store
  // (state) represents complete store data of the store including reducer{ users: { } } thats y accessing it like state.users
  const data = useSelector((state) => {
    return state.users;
  });
  console.log("Displaying users : ", data);

  // ------------To delete user-----------
  const dispatch = useDispatch();

  const deleteUser = (id) => {
    // can easily call/access the any micro-reducer of a slice using dispatch
    dispatch(removeUser(id));
    console.log("Deleting user : ");
  };

  // populating frontend
  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button className="btn-delete" onClick={() => deleteUser(id)}>
              <MdDeleteForever className="delete-icon"></MdDeleteForever>
            </button>
          </li>
        );
      })}
    </Wrapper>
  );
};

// -------------CSS---------------
const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    $:first-child {
      border-top: 1px solid #eee;
    }
  }
  .btn-delete {
    border: none;
  }
`;

export default DisplayUsers;
