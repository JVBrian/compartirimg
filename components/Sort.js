"use client";
import React from "react";
import useCustomRouter from "@/hooks/useCustomRouter";

const Sort = () => {
  const { pushQuery, query } = useCustomRouter();
  return (
    <div>
      Ordenar: {` `}
      <select
        value={query.sort || "createdAt"}
        onChange={(e) => pushQuery({ sort: e.target.value })}
        className="order"
      >
        <option value="createdAt">  + antiguos</option>
        <option value="-createdAt"> + recientes</option>
      </select>
    </div>
  );
};

export default Sort;
