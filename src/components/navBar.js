import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";

const Navbar = ({ user, setToken, setUser }) => {
  return (
    <div className="navBar">
      <Grid container justify="center" spacing={4}>
      <Link to="/"> Home  </Link>
      <Link to="/Posts"> Posts  </Link>
      <Link to="/Register"> Register  </Link>
      <Link to="/Login"> Login  </Link>
      <Link to="/Profile"> Profile  </Link>
      <Link to="/" onClick={() => {
          setToken("");
          setUser(null);
          localStorage.removeItem("token");
        }}
      > Log Out</Link></Grid>
      
      {user ? <span id="welcome">Welcome {user.username}!</span> : null}
    </div>
  );
};

export default Navbar;