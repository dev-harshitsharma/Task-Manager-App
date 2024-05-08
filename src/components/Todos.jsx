import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoAtom } from "../store/todo.js";
// import uuid from "uuid";
const Todos = () => {
  //   const todos = useRecoilValue(todoAtom);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const setTodos = useSetRecoilState(todoAtom);

  const saveTodoInfo = (oldTodos) => {
    // Check if title or description is empty
    if (!title.trim() || !description.trim()) {
      alert("Title and description cannot be empty.");
      return;
    }

    const titleWords = title.trim().split(/\s+/);
    if (titleWords.length > 50) {
      alert("Title cannot exceed 50 words.");
      return;
    }

    const descriptionWords = description.trim().split(/\s+/);
    if (descriptionWords.length > 100) {
      alert("Description cannot exceed 100 words.");
      return;
    }
    setTodos((oldTodos) => [
      ...oldTodos,
      {
        id: Math.floor(Math.random() * 100),
        title,
        description,
      },
    ]);
    setTitle("");
    setDescription("");
  };
  return (
    <div className="grid grid-flow-col p-2 ">
      <div className="flex flex-col ml-20 mr-20  p-4 justify-center items-center">
        <label className="font-bold font-sans text-xl  ">TITLE</label>
        <input
          className="rounded-md border-2 border-black py-1 px-2 mb-2 w-80"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your title here "
          value={title}
        ></input>
        <label className="font-bold font-sans text-xl">DESCRIPTION</label>
        <input
          className="rounded-md border-2 border-black py-2 px-2 w-96 "
          onChange={(e) => setDescription(e.target.value)}
          placeholder=" Enter your Description here"
          value={description}
        ></input>

        <div className="flex justify-center">
          <button
            onClick={saveTodoInfo}
            className="bg-green-300 font-semibold px-2 py-1 shadow-green-500 shadow-sm mt-2 rounded-md border-2 border-black "
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todos;
