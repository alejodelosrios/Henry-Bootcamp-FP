import React from "react";

const SortBar = () => {
  return (
    <div>
      <select name="sort" id="1" defaultValue={"score"}>
        <option value="score">score</option>
        <option value="score1">A-Z</option>
      </select>
    </div>
  );
};

export default SortBar;
