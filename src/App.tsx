import React from 'react';
import {useSelector} from 'react-redux';
import { RootState } from './store';
import Header from './Components/Header/Header';
import BoardList from './Components/Boards/BoardList';

function App() {
  
  const numberOfBoards:number = useSelector((state: RootState) => state.board.boards).length;

  return (
    <>
     <Header />
    {numberOfBoards > 0 && <BoardList />}
    </>
  );
}

export default App;
