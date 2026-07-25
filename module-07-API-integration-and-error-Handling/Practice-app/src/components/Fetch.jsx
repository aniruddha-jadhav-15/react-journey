import { useEffect, useState } from "react";

function UserData() {
  const API_URL = `https://jsonplaceholder.typicode.com/users/1`;

  const [user, SetUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    try {
      const apiCall = await fetch(API_URL);

      if (!apiCall.ok) {
        throw new Error("User not found");
      }
      const data = await apiCall.json();

      SetUser(data);
      setLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>{loading ? "Loading..." : user.name}</h1>
      {error && <p>Something went wrong</p>}
    </div>
  );
}

export default UserData;
