import React , {useState , useEffect} from 'react';
import {useSelector} from 'react-redux';
import { RootState } from './store';
import Header from './Components/Header/Header';
import BoardList from './Components/Boards/BoardList';
import BoardContent from './Components/BoardContent/BoardContent';


function App() {
  
  const numberOfBoards:number = useSelector((state: RootState) => state.board.boards).length;
  const [windowWidth, setWindowwidth] = useState(window.innerWidth);
 
  useEffect(() => {
    const handleResize = () => {
      setWindowwidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
     <Header />
    {numberOfBoards > 0 && windowWidth>600 && <BoardList />}
    {numberOfBoards >0 && <BoardContent />}

    </>
  );
}

export default App;
