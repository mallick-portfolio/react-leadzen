import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ setUsers }) => {
  const [page, setPage] = useState("");
  const handlePageClick = async (data) => {
    setPage(data.selected + 1);
  };
  useEffect(() => {
    if (page <= 1) {
      const loadUsers = async () => {
        await axios
          .get("https://swapi.dev/api/people")
          .then((res) => setUsers(res.data));
      };
      loadUsers();
    }
    const loadNextPageUser = async () => {
      const res = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
      setUsers(res.data);
    };
    loadNextPageUser();
  }, [page, setUsers]);
  return (
    <div>
      <ReactPaginate
        nextLabel=">>"
        previousLabel="<<"
        pageCount={9}
        breakLabel="..."
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        className={"flex"}
        pageClassName={
          "px-2 py-1 border border-red-500 mx-1 rounded-sm text-xl text-red-500"
        }
        previousClassName={
          "px-2 py-1 border border-red-500 mx-1 rounded-sm text-xl text-white"
        }
        nextClassName={
          "px-2 py-1 border border-red-500 mx-1 rounded-sm text-xl text-white"
        }
        activeClassName={"bg-red-500 text-white"}
      />
    </div>
  );
};

export default Pagination;
