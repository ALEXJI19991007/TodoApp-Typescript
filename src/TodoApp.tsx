import React from "react";
import { RecoilRoot } from "recoil";
import { TodoList } from "./TodoList";

function TodoApp() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}

export default TodoApp;
