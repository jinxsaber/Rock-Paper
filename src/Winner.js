import { Link } from "react-router-dom";

const Winner = ({PlayAgain, winn}) => {
    
    const winnn = winn;
    return ( 
        <div className="win">
            <div className="comp">
            <div className="winner">
                {winnn ? (<div className="won">
                    You won</div>) : (<div className="won">
                    You Lose</div>)}
            </div>
            <div id="navs">
                <Link to = "/" className="navs">
                    Home
                </Link>
                <div className="navs" onClick = {PlayAgain}>
                    Play Again
                </div>
            </div>
            </div>
        </div>
     );
}
 
export default Winner;