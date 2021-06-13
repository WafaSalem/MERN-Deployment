import axios from "axios";
import { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { Button } from '@material-ui/core'
const DeleteButton = ({ id, successCallBack }) => {
    const [formInputs, setFormInputs] = useState({
        name: "",
        type:"",
        desc:""
      });
    // id error useState(')
      useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`).then((res) => {
          console.log("got results", res);
          setFormInputs(res.data);
        });
      }, [id]);
  const clickFunction = (id) => {
    axios
      .delete(`http://localhost:8000/api/pets/${id}`)
      .then((res) => {
        // do something after delete
        console.log(res);
        successCallBack();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <button onClick={() => clickFunction(id)}>Adopt {formInputs.name}</button>
      {/* <button onClick={() => clickFunction(id)}>Delete</button> */}
    </>
  );
};

export default DeleteButton;
