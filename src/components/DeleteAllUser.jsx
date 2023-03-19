import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteUsers } from "../store/slices/UserSlice";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const deletingUsers = () => {
    console.log("delete all users");
    dispatch(deleteUsers());
  };
  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={deletingUsers}>
        Clear all Users
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-tranformation: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;

export default DeleteAllUser;
