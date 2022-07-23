import React from "react";
const PeopleCart = ({ user, setShow, setUrl }) => {
  return (
    <>
      <div className="shadow-lg rounded-md bg-white my-4 py-2 px-4 flex justify-between items-center gap-6">
        <h1 className=" w-1/4">{user?.name}</h1>
        <div className=" w-1/4">
          <h2 className="text-2xl">Eye color</h2>
          <p>{user?.eye_color}</p>
        </div>
        <div className=" w-1/4">
          <h2 className="text-2xl">Gender</h2>
          <p>{user?.gender}</p>
        </div>
        <button
          onClick={() => {
            setShow(true);
            setUrl(user?.homeworld);
          }}
          className="px-8 py-2 rounded-full bg-red-400 text-white w-1/4"
        >
          View Details
        </button>
      </div>
    </>
  );
};

export default PeopleCart;
