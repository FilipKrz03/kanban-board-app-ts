import React from 'react';
import {useSelector} from 'react-redux';
import { RootState } from './store';
import Header from './Components/Header/Header';
import BoardList from './Components/Boards/BoardList';
import BoardContent from './Components/BoardContent/BoardContent';


function App() {
  
  const numberOfBoards:number = useSelector((state: RootState) => state.board.boards).length;

  return (
    <>
     <Header />
    {numberOfBoards > 0 && <BoardList />}
    {numberOfBoards >0 && <BoardContent />}

    </>
  );
}

export default App;
