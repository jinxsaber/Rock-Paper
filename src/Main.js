import {Link} from "react-router-dom"

const Main = () => {
    return ( 
        <div className="mainPage">
            <div className="name">Rock Paper Scissor</div>
            <div className="logo">
                <div><img src="/Rock.png" alt="" /></div>
                <div><img src="/Paper.png" alt="" /></div>
                <div><img src="/Scissor.png" alt="" /></div>
            </div>
            <Link to = "/play" className="start">Start</Link>
        </div>
    );
}
 
export default Main;