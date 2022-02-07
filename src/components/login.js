import React, {useState, useHistory} from 'react';

const accountLogin = ({ setToken, setUserData }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const history = useHistory();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const data = await callAPI({
          url: `https://strangers-things.herokuapp.com/api/2110-vpi-web-pt/users/register`,
          method: "POST",
          body: {
            user: {
              username,
              password,
            },
          },
          
        });
  
        if (token) {
          localStorage.setItem("token", token);
          setUsername("");
          setPassword("");
          setToken(token);
          history.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    };

    <form id="log-in" onSubmit={handleSubmit}>
    <h3>Log-In</h3>
                        
    <label  htmlFor="username">Username:</label>
    <input type="text" placeholder="username" minLength={4} required/>
        
    <label htmlFor="password">Password:</label>
    <input type="password" placeholder="password" minLength={8} required/>
    
    <button id ="btn-login" type="submit">Log-in</button>
    <p>Don't have an account? <Link id="sign-up" to="/register">Sign up!</Link></p>
        
</form>

  };
export default login;