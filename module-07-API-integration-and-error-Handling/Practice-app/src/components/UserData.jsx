import { useEffect, useState } from "react";

function UserData() {
  const API_URL = `https://jsonplaceholder.typicode.com/users/1`;

  const [user, SetUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("User not found");
        }
        return res.json();
      })
      .then((res) => {
        SetUser(res);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
      });
  }, []);

  return (
    <div>
      <h1>{loading ? "Loading..." : user.name}</h1>
      {error && <p>Something went wrong</p>}
    </div>
  );
}

export default UserData;
