"use client";
import React from "react";
import ButtonSubmit from "./ButtonSubmit";
import useCustomRouter from "@/hooks/useCustomRouter";

const SearchForm = () => {
  const { pushQuery, query } = useCustomRouter();
  const handleSearch = async (formData) => {
    const search = formData.get("search").toLowerCase();
    console.log(search);
    pushQuery({ search, page: 1 });
  };
  return (
    <form action={handleSearch} className="form_search">
      <div className="coolinput">
        <label htmlFor="search" className="text">
          Buscar
        </label>
        <input
          type="search"
          name="search"
          placeholder="Buscar imagen"
          defaultValue={query.search || ""}
          className="text"
        />
      </div>
        <ButtonSubmit value="Buscar" type="submit" />
    </form>
  );
};

export default SearchForm;
