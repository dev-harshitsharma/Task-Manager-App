import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoAtom } from "../store/todo";

const TodoItem = () => {
  const [todoList, setTodoList] = useRecoilState(todoAtom);
  const todos = useRecoilValue(todoAtom);
  return (
    <div className="flex justify-center align-middle items-center ml-20 mr-20">
      {todos.length > 0 ? (
        <div className="flex flex-col w-full justify-center shadow-sm mt-2 ">
          {todos.map((todo, index) => (
            <div key={index} className="flex flex-col  space-y-5">
              <div className="bg-white p-4 shadow-md rounded-md space-y-2 mt-2">
                <div className="font-bold">Title: {todo.title}</div>
                <div className="font-semibold italic ">
                  Description: {todo.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex bg-green-300 p-4 border-2 border-black rounded-md">
          <div className="font-semibold font-sans">
            Create your Todos to see here!
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
