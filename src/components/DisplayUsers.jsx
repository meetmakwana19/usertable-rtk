import { useSelector } from "react-redux";
import styled from "styled-components";

const DisplayUsers = () => {
  // recieved data from te store
  // (state) represents complete store data of the store including reducer{ users: { } } thats y accessing it like state.users
  const data = useSelector((state) => {
    return state.users;
  });

  console.log("Displaying users : ", data);

  return (
    <Wrapper>
      {data.map((user, id) => {
        return <li key={id}>{user}</li>;
      })}
    </Wrapper>
  );
};

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
`;

export default DisplayUsers;
