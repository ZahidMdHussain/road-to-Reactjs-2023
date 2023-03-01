import React from "react";
import { useSearchParams } from "react-router-dom";

const SerachContainer = () => {
  const [queryParams] = useSearchParams();
  const searchQuery = queryParams.get("q");
  return (
    <div>
      SerachContainer
      <p>{searchQuery}</p>
    </div>
  );
};

export default SerachContainer;
