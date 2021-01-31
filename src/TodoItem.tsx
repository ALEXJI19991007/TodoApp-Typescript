import { useRecoilState } from "recoil";
import * as Atoms from "./atoms & selectors/atoms";
import React from "react";

interface ItemProps {
  key: number;
  item: Atoms.Item;
}

export const TodoItem: React.FC<ItemProps> = (props) => {
  const [todoList, setTodoList] = useRecoilState(Atoms.todoListState);
  const index = todoList.findIndex((listItem) => listItem === props.item);

  const editItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...props.item,
      text: e.currentTarget.value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...props.item,
      isComplete: !props.item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={props.item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={props.item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

function replaceItemAtIndex(
  arr: Atoms.Item[],
  index: number,
  newValue: Atoms.Item
) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: Atoms.Item[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
