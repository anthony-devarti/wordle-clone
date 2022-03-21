import Tile from "./Tile"
import './Board.css'

export default function Board(){
    return (
        <div className="board">
                {Array(30).fill().map((item, index) => <Tile />)}
        </div>
    )
}