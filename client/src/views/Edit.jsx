import { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
// import DeleteButton from "../components/DeleteButton";
import PetsForm from "../compnents/PetsForm";
const Edit = ({ id }) => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    type:"",
    desc:""
  });
  const [errors, setErrors] = useState([]);
// id error useState(')
  useEffect(() => {
    axios.get(`http://localhost:8000/api/pets/${id}`).then((res) => {
      console.log("got results", res);
      setFormInputs(res.data);
    });
  }, [id]);

  const submitFunction = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/pets/${id}`, formInputs)
      .then((res) => {
        console.log("sending response:", res);
        navigate("/");
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        // Set Errors
        setErrors(errorArr);
      });
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
      <Link to="/"><a>Back to home</a></Link> 
      <h5>Edit {formInputs.name} </h5>
      {errors.map((err, index) => (
        <p key={index}>{err}</p>
      ))}
      <form onSubmit={submitFunction}>
           
           <div>
           <label>Name:</label>
             <p>
   
             <input
               type="text"
               name="name"
               value={formInputs.name}
               onChange={changeFunction}
               />
               </p>
   
               <label>Type:</label>
             <p>
   
             <input
               type="text"
               name="type"
               value={formInputs.type}
               onChange={changeFunction}
               />
               </p>
   
               <label>Description:</label>
             <p>
   
             <input
               type="text"
               name="desc"
               value={formInputs.desc}
               onChange={changeFunction}
               />
               </p>
                   <p>Skills (optional):</p>
                   <label>Skill 1:</label>
               <p>
   
               <input
                   type="text"
                   name="skill1"
                   value={formInputs.skill1}
                   onChange={changeFunction}
                   />
               </p>
               <label>Skill 2:</label>
               <p>
   
               <input
                   type="text"
                   name="skill2"
                   value={formInputs.skill2}
                   onChange={changeFunction}
                   />
               </p>

               <label>Skill 3:</label>
               <p>
   
               <input
                   type="text"
                   name="skill3"
                   value={formInputs.skill3}
                   onChange={changeFunction}
                   />
               </p>
           </div>
           
           <div>
           <button type="submit">Edit pet</button>
           </div>
         </form>

      {/* <DeleteButton id={id} successCallBack={() => navigate("/")} /> */}
    </>
  );
};

export default Edit;
