import { useEffect } from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { RootState } from './store';
import useWidth from './hooks/useWidth';
import Header from './Components/Header/Header';
import { saveBoardData } from './store/boards-actions';
import { getBoardData } from './store/boards-actions';
import BoardList from './Components/Boards/BoardList';
import BoardContent from './Components/BoardContent/BoardContent';
import { AppDispatch } from './store';

let isInitail:boolean = true;


function App() {
  
  const dispatch = useDispatch<AppDispatch>();
  const numberOfBoards:number = useSelector((state: RootState) => state.board.boards).length;
  const boards = useSelector((state:RootState) => state.board.boards);
  const activeBoard = useSelector((state:RootState) => state.board.activeBoard);
  const windowWidth = useWidth();

 
  useEffect(()=>{
      dispatch(getBoardData());
  }, [dispatch])

  useEffect(()=>{
    if(isInitail){
      isInitail = false;
      return;
    }if(!isInitail){
      dispatch(saveBoardData(boards , activeBoard));
    }
  }, [boards , dispatch , activeBoard]);

 


  return (
    <>
     <Header />
    {numberOfBoards > 0 && windowWidth>600 && <BoardList />}
    {numberOfBoards >0 && <BoardContent />}

    </>
  );
}

export default App;
