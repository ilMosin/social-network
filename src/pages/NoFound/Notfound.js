import {Link} from "react-router-dom";
import Homepage from "../Home/Home";


const Notfound =()=>{
    return (
      <div>
          Not Found this page go <Link to={<Homepage />}>Home!</Link>
      </div>
    );
}
export default Notfound;