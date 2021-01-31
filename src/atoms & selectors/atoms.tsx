import {
  atom,
  RecoilState
} from "recoil";

// One todo item
export interface Item {
  id: number;
  text: string;
  isComplete: boolean;
}

let initialList: Item[] = [];

// This atom is our todo list
export const todoListState: RecoilState<Item[]> = atom({
  key: "todoListState",
  default: initialList,
});

// This atom is the current showing state
export const todoListFilterState: RecoilState<string> = atom({
  key: "todoListFilterState",
  default: "Show All",
});

