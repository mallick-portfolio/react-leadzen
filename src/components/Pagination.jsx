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
      />
    </div>
  );
};

export default Pagination;
