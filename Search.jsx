import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");

  const onSearchChange = (event) => {
    setSearch(event.target.value);
    props.onSearchChange(event.target.value);
  };

  return (
    <>
      <div>
        Cari Artikel : <input onChange={onSearchChange}></input>
      </div>
      <small>
        ditemukan {props.totalPosts} data dengan pencarina kata {search}
      </small>
    </>
  );
}

export default Search;
