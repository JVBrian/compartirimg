"use client";
import useCustomRouter from "@/hooks/useCustomRouter";
import React from "react";

const Pagination = ({ totalPage }) => {
  const newArray = [...Array(totalPage)].map((_, i) => i + 1);
  const { pushQuery, query } = useCustomRouter();
  return (
    <div className="pagination">
      {newArray.map((page) => (
        <button
          key={page}
          onClick={() => pushQuery({ page })}
          style={{
            background:
              (query.page || 1) === page ? "var(--color-primary)" : "",
            borderRadius: "50%",
            border: "none",
            padding: "5px 10px",
            color: (query.page || 1) === page ? "var(--color-white)" : "",
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
