import { selector } from "recoil";
import * as Atoms from "./atoms";

// The filteredTodoListState internally keeps track of two atom dependencies: todoListFilterState 
// and todoListState so that it re-runs if either of those change.
export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(Atoms.todoListFilterState);
    const list = get(Atoms.todoListState);

    switch (filter) {
      case "Show All":
        return list.filter((item) => item.isComplete || !item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list.filter((item) => item.isComplete);
    }
  },
});

// The todoListStatsState internally keeps track of one atom dependency: todoListState,
// so that it re-runs if it changes.
export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(Atoms.todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
