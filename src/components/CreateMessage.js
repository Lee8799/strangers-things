import { useState } from "react";
import { API } from "./app";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CreatePost = ({ fetchPosts }) => {
  const [saleItem, setSaleItem] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [deliver, setDeliver] = useState(false);
  const [itemLocation, setItemLocation] = useState("");
  const history = useHistory();

  const lsToken = localStorage.getItem("token");
  const postHandler = async (e) => {
    try {
      e.preventDefault();
      console.log(lsToken);
      if (lsToken) {
        console.log(lsToken);
        const resp = await fetch(`${API}/posts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${lsToken}`,
          },
          body: JSON.stringify({
            post: {
              saleItem: saleItem,
              itemDesc: itemDesc,
              itemPrice: itemPrice,
              itemLocation: itemLocation
            },
          }),
        })

      }
      fetchPosts();
      history.push("./Posts");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h1>Create a New Post</h1>
      <form onSubmit={(e) => postHandler(e)}>
        <input
          required
          placeholder="what are you selling?"
          value={saleItem}
          onChange={(e) => setSaleItem(e.target.value)}
        />
        <input
          required
          placeholder="describe the item you're selling."
          value={itemDesc}
          onChange={(e) => setItemDesc(e.target.value)}
        />
        <input
          required
          placeholder="enter your desired price"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
        <input
          required
          placeholder="your location"
          value={itemLocation}
          onChange={(e) => setItemLocation(e.target.value)}
        />
        <div>
          
          {/* <input
            type="checkbox"
            value={deliver}
            onChange={(e) => {
              setDeliver(e.target.checked);
            }}
          ></input> */}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default CreatePost;