import { useEffect, useState } from "react";
import axios from "axios";

function UserData() {
  const API_URL = `https://jsonplaceholder.typicode.com/users/1`;

  const [user, SetUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    try {
      const apiCall = await axios(API_URL);

      console.log(apiCall);

      SetUser(apiCall.data);
      setLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const createPost = async () => {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: "My First Post",
      body: "This is a test",
      userId: 1,
    });

    console.log(res.data);
  };

  const deletePost = async () => {
    const res = await axios.delete(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    console.log(res.data);
  };

  const updatePost = async () => {
    const res = await axios.patch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        title: "Updated Title",
      },
    );
    console.log(res.data);
  };

  return (
    <div>
      <h1>{loading ? "Loading..." : user.name}</h1>
      {error && <p>Something went wrong</p>}
      <button onClick={() => createPost()}>Click</button>
      <button onClick={() => deletePost()}>Delete</button>
      <button onClick={() => updatePost()}>Updated</button>
    </div>
  );
}

export default UserData;
