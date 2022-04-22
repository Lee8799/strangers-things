import React, { useEffect, useState } from "react";
import {

  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Posts from "./Posts";
import CreateMessage from "./CreateMessage";
import Message from "./Message";
import Register from "./Register";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import Navbar from "./NavBar";
import CreatePost from "./CreatePost";
import PostDetails from "./PostDetails";
// import UnauthenticatedRoute from "./Unathenticatedroute";
// import AuthenticatedRoute from "./AuthenticatedRoute";

export const API =
  "https://strangers-things.herokuapp.com/api/2110-vpi-web-pt";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState("");
  const lsToken = localStorage.getItem("token");
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  async function fetchPosts() {
    const resp = await fetch(`${API}/posts`
    );
    const info = await resp.json();
    setPosts(info.data.posts);
    console.log("posts fetched")
  }
  // console.log(token, user, posts);
  const fetchUser = async () => {
    if (lsToken) {
      setToken(lsToken);
      const resp = await fetch(`${API}/users/me`, {
        headers: {
          Authorization: `Bearer ${lsToken}`,
        },
      });
      const info = await resp.json();

      if (info.error) {
        return setError(info.error.message);
      } else {
        setUser(info.data);
      }
    }
  };

  useEffect(() => {
    fetchUser();
    fetchPosts();
  }, [token]);
  return (
    <>
      <Navbar setToken={setToken} setUser={setUser} />
      
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/Posts">
            <Posts 
           
            posts={posts}
            setPosts={setPosts}
            fetchPosts={fetchPosts}
            />
          </Route>

          <Route exact path="/Register">
            <Register setToken={setToken} />
          </Route>
          <Route exact path="/posts/:id">
            <PostDetails
              posts={posts}
              lsToken={lsToken}
              fetchPosts={fetchPosts}
            />
          </Route>

          <Route exact path="/CreatePost">
            <CreatePost token={token} fetchPosts={fetchPosts} />
          </Route>

          <Route exact path="/Profile">
            {/* <Profile fetchUser={fetchUser} setToken={setToken} fetchPosts={fetchPosts} /> */}
          </Route>

          <Route exact path="/PostDetails">
            <PostDetails />
          </Route>

          <Route exact path="/login">
          <Login />
          </Route>

          
       
    </>
  );
};

export default App;