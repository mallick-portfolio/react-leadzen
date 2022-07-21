import axios from "axios";
import React, { useEffect, useState } from "react";
import PeopleCart from "./PeopleCart.jsx";

const People = () => {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      await axios
        .get("https://swapi.dev/api/people")
        .then((res) => setUsers(res.data));
    };
    loadUsers();
    setLoading(false);
  }, []);
  console.log(users.results);
  return (
    <div className="px-12 mx-auto bg-[#ccc] h-screen w-screen">
      {loading
        ? "loading..."
        : users?.results?.map((user) => (
            <PeopleCart key={user?.created} user={user} />
          ))}
    </div>
  );
};

export default People;
