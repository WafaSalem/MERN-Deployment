import axios from "axios";
import { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import { Button } from '@material-ui/core'
const Likes = ({ id, successCallBack }) => {
    const [formInputs, setFormInputs] = useState({
        likes:1
        
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
    .put(`http://localhost:8000/api/pets/${id}`, formInputs)
      .then((res) => {
        formInputs.likes =+1
        console.log("**********************",formInputs.likes)
        console.log(res);
        successCallBack();
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  const changeFunction = (e) => {
    console.log("e.target.title", e.target.title);
    console.log("e.target.value", e.target.value);
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
     <Button  variant="contained" color="secondery" onClick={() => changeFunction}> Like {formInputs.name}</Button>
    </>
  );
};

export default Likes;
