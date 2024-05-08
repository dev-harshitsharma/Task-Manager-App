import { atom } from "recoil";

export const todoAtom = atom({
  key: "todoAtom", // Provide a unique string key
  default: [],
});

export const filteredtodoAtom = atom({
  key: "filteredTodoAtom",
  default: "Show all",
});
