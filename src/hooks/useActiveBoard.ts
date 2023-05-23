import { useSelector } from "react-redux"
import { RootState } from "../store"
const useActiveBoard = () => {

    const activeBoardId = useSelector((state:RootState) => state.board.activeBoard);
    const boards = useSelector((state:RootState)=> state.board.boards);
    const activeBoard = boards.find(item => item.id === activeBoardId);

    return activeBoard;
}

export default useActiveBoard;