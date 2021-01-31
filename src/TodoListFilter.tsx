import { useRecoilState } from "recoil";
import * as Atoms from "./atoms & selectors/atoms";
import React from "react";

export const TodoListFilter = () => {
  const [filter, setFilter] = useRecoilState(Atoms.todoListFilterState);

  const updateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.currentTarget.value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}
