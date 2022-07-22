import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination.jsx";
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
  return (
    <div className="bg-[#ccc] h-auto w-screen px-12 mx-auto py-8">
      {loading ? (
        <h1 className="text-red-500 text-center">loading...</h1>
      ) : (
        users?.results?.map((user) => (
          <PeopleCart key={user?.created} user={user} />
        ))
      )}
      <Pagination setUsers={setUsers}  />
    </div>
  );
};

export default People;
