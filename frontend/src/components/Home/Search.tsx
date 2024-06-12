import { Paper, IconButton, Divider, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { fetchCatsByName } from "../../libs/api/fetchCats";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";

function Search() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (search === "" || search.trim() === "") {
      alert("Input is empty.");
    } else {
      await dispatch(fetchCatsByName(search));
      navigate("/result");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <IconButton
          onClick={handleSubmit}
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="search cat"
          value={search}
          name="search"
          inputProps={{ "aria-label": "Search" }}
          onChange={handleChange}
        />
      </Paper>
    </form>
  );
}

export default Search;
