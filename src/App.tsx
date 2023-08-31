import { Header } from "./components/Header/Header";
import './App.css';
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Content } from "./components/Content/Content";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-allpagebg lg:pr-6 overflow-hidden min-h-screen lg:pb-6 '>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <div className='flex flex-row flex-nowrap'>
        <Sidebar isOpen={isOpen} />
        <Content />
      </div>
    </div>
  );
}

export default App;
