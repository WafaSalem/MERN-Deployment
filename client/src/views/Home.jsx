import { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import PetsForm from "../compnents/PetsForm";
import PetsList from "../compnents/PetsList";
const Home = (props) => {
  // 1. variables and useState
  const [pets, setPets] = useState([]);
  //   2. useEffect
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets")
      .then((res) => {
        console.log("getting the stuff from route api/pets:", res);
        //   do something with res.data
        
        setPets(res.data.sort((a,b)=>a.type >b.type));
        
      })
      .catch((err) => console.log(err));
  }, []);
  // 3. other Functions needed

  // 4. Return
  return (
    <>
      <Link to="/new">Add a pet to the shelter</Link> 
      <h3>These Pets looking for good home</h3>
      
      
      <PetsList pets={pets} setPets={setPets} />
    </>
  );
};

export default Home;
