import Tile from "./Tile";

export default function Row(){
    return (
    <div className="row">
        {Array(5).fill().map((item, index) => <Tile key={index}/>)}
    </div>
    )
}