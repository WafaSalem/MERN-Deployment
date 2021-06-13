import { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import DeleteButton from "../compnents/DeleteButton";
import PetsForm from "../compnents/PetsForm";
import { Button } from "@material-ui/core";
import Likes from '../compnents/Likes'
const Edit = ({ id }) => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    type:"",
    desc:""
  });
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/pets/${id}`).then((res) => {
      console.log("got results", res);
      setFormInputs(res.data);
      setLoaded(true);
    });
  }, [id]);
  return (
    <>
    <div>
      <Link to="/"><a>Back to home</a></Link>
      </div>
    <div>
    <DeleteButton id={id} successCallBack={() => navigate("/")} /> 
    </div>
    
      
      <h5>Details About : {formInputs.name} </h5>
        <p>Pet type : {formInputs.type}</p>
        <p>Description : {formInputs.desc}</p>
        <p>
            Skills : 
            <p> {formInputs.skill1}</p>
            <p> {formInputs.skill2}</p>
            <p> {formInputs.skill3}</p>
        </p>
        {/* <p>{formInputs.likes}</p>
        {loaded &&  <Likes id={id} successCallBack={() => navigate("/")} />} */}
        
    </>
  );
};

export default Edit;
