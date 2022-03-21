import Row from './Row'
import './Board.css'

export default function Board(){
    return (
        <div className="board">
                {Array(6).fill().map((item, index) => <Row key={index}/>)}
        </div>
    )
}