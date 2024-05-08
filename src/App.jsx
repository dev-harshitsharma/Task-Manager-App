import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";
import TodoItem from "./components/TodoItem";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className=" bg-slate-200 h-screen border-2">
        <Header />
        <Todos />
        <div className="">

        </div>
        <TodoItem />
      </div>
    </RecoilRoot>
  );
}

export default App;
