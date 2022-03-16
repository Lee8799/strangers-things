// import App from './App'; 
 import React from 'react';
 import ReactDOM from 'react-dom';
 import { BrowserRouter as Router} from 'react-router-dom'
 
const BASE_URL = `https://strangers-things.herokuapp.com/api/${ cohort }`;

// import {
//     Posts,
//     Register,
//     PostForm,
//     Login,
//     Message,
//     NavBar
// } from './components';

const App = (props) => {
    return (
    <BrowserRouter>
      <NavBar />
        <section id="postsection">
          <Route path="/posts">
             <Posts />
          </Route>

          <Route exact path="/">
             <Posts />
          </Route>
            
          <Route path="/register">
             <Register />
          </Route>

          <Route path="/login">
             <Login />
          </Route>

          <Route path="/profile">
            {
              localStorage.getItem("account-token") ?
                <>
              <button className="logout-button" onClick={(event) => {
                  localStorage.removeItem("account-token");
                  event.preventDefault();
                  window.location.reload(false);
            }}>Logout</button>
                    <section>
                      <Messages />
                    </section></>
                    : <>
                    <section>
                        <Register />
                    </section>
                    <br></br>
                    <div className="seperator">OR</div>
                    <br></br>
                    <section>
                        <Login />
                    </section>
                    </>
                }
            </Route>
        </section>
    </BrowserRouter>
    )
}
 
 ReactDOM.render(
   <Router>
       <App/>
   </Router>,
   document.getElementById('root')
 );