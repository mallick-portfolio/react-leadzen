import React from "react";

const PeopleCart = ({ user }) => {
  return (
    <div className="shadow-lg rounded-md bg-white my-4 py-2 px-4 flex justify-between items-center gap-6">
      <h1 className="">{user?.name}</h1>
      <div className="">Helo world</div>
      <button className="px-8 py-2 rounded-full bg-red-400 text-white">View Details</button>
    </div>
  );
};

export default PeopleCart;
