
import DeleteButton from "./DeleteButton";
import Home from '../views/Home'
import { Link, navigate } from "@reach/router";
import { Button , Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core'
import Edit from "../views/Edit";
const PetsList = ({ pets, setPets }) => {
  
  const myData = pets.sort((a, b) => a.type.localeCompare(b.type)).map((item, i) => <p key={i} data={item} />);
  

  return (
    <div>
<Table celled>
    <TableHead>
      <TableRow >
        <TableCell>Name</TableCell>
        <TableCell>Type</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
      <TableBody>
      {pets.length > 0 &&
        pets.map((pet) => {
          return (          
                  <TableRow key={pet._id}>
                    <TableCell> {pet.name}</TableCell>
                    <TableCell> {pet.type}</TableCell>
                    <TableCell>                  
                     <Button variant="contained" color="secondery"><Link to={`/edit/${pet._id}`}>Edit</Link></Button>
                    |<Button variant="contained" color="secondery"><Link to={`/detail/${pet._id}`}>Detail</Link></Button>
                      </TableCell>
                  </TableRow>       
         );
         })}
      </TableBody>
    </Table> 
                      
    </div>
  );
};

export default PetsList;
