import { useRecoilValue } from "recoil";
import * as Selectors from "./atoms & selectors/selectors";
import React from "react";
import { TodoItemCreator } from "./TodoItemCreator";
import { TodoItem } from "./TodoItem";
import { TodoListFilter } from "./TodoListFilter";
import { TodoListStats } from "./TodoListStats";

export const TodoList = () => {
  const todoList = useRecoilValue(Selectors.filteredTodoListState);
  return (
    <>
      <TodoListStats />
      <TodoListFilter />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};
