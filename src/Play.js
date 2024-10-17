import { useState,useEffect } from "react";
import Winner from "./Winner";
import { Link, useNavigate } from "react-router-dom";

const Play = () => {

    // const navigate = useNavigate();

    const choices = ['/Rock','/Paper','/Scissor'];
    const [select,selected] = useState("");
    const [score,setScore] = useState(0);
    const [p_score,setP_score] = useState(0);
    const [time,setTime] = useState(3);
    const [Options,setOptions] = useState(""); //Player Option to remove everything
    const [pchoose,setPchoose] = useState(false); //To show player options
    const [choose,setChoose] = useState(false); //To show machine options
    const [round,setRound] = useState(0);
    const [running, setRunning] = useState(true);
    const [champ,setChamp] = useState(0);
        // const [winner,setWinner] = useState(0);
    
    
    useEffect(()=>{
        if(score >= 3){
            setChamp(0);
            setRunning(false);
            return;
        }
        if(p_score >= 3){
            setChamp(1);
            setRunning(false);
            return;
        }

        setChoose(false);
        setPchoose(false);
        setOptions("");
        

        const start = ()=>{
            selected(choices[Math.floor(Math.random()*choices.length)]);
            setTime(3);
        }

        start();

        const Timer = setInterval(() => {
            setTime ((second) => {
                if(second >1){
                    return second-1;
                }else{
                    clearInterval(Timer);
                    setChoose(true);
                    return 0;
                
                }
            });
        },1000);
        // setChoose(false);
        return ()=>clearInterval(Timer);
    },[score,p_score,round]);
    

    useEffect(() => {
        if (choose) {
            const updateTimer = setTimeout(() => {
                if (!Options) {
                    setScore(prev => prev + 1);
                } else {
                    update();
                }
            }, 2000);
            return () => clearTimeout(updateTimer);
        }
    }, [choose, Options]);



    const update = ()=>{

        if(select === Options){
            setRound(score => score + 1);
        }
        else if (
            (select === '/Rock' && Options === '/Scissor') ||
            (select === '/Paper' && Options === '/Rock') ||
            (select === '/Scissor' && Options === '/Paper')
        ) {
            setScore(prev => prev + 1);
        } else {
            setP_score(prev => prev + 1);
        }
    };


    const choosen = ((choice) => {
        if(!choose){
            setPchoose(true);
            setOptions(choice);
        }
    })

    const Rock= (()=>{
        choosen("/Rock")
    })
    const Paper= (()=>{
        choosen("/Paper")
    })
    const Scissor= (()=>{
        choosen("/Scissor")
    })

    const handleClick = () => {
        // setScore(0);
        // setP_score(0);
        // setRunning(true);
        // navigate('/play');
        console.log("Play Again Clicked")
        setScore(0);
    setP_score(0);
    setRound(0);
    setRunning(true);
    setChoose(false);
    setPchoose(false);
    setOptions("");
    setChamp(0);
    setTime(3);
    }

    return running ? (
          <div className="play">
            <div className="timer">
                {time}
            </div>

            <div className="score">
                {score}
            </div>

            {!choose ? (<div className="cOptions">
                <div><img src="/Rock.png" alt="" /></div>
                <div><img src="/Paper.png" alt="" /></div>
                <div><img src="/Scissor.png" alt="" /></div>
            </div>) : (<div className="cOptions"><div><img src={`${select}.png`} alt="" /></div></div>)}
            
            <div className="line"></div>
            
            {/* <div className="pOptions">
                <div onClick={()=>{
                     pchoose && setOptions('/Rock');
                }} className = {Options && Options !== '/Rock' ? "hide" : ""}><img src="/Rock.png" alt="" /></div>
                <div onClick={()=>{
                     pchoose && setOptions('/Paper')    
                }} className = {Options && Options !== '/Paper' ? "hide" : ""}><img src="/Paper.png" alt="" /></div>
                <div onClick={()=>{
                     pchoose && setOptions('/Scissor')
                }} className = {Options && Options !== '/Scissor' ? "hide" : ""}><img src="/Scissor.png" alt="" /></div>
            </div> */}



            {!pchoose ? (<div className="pOptions">
                            <div onClick={Rock}><img src="/Rock.png" alt="" /></div>
                            <div onClick={Paper}><img src="/Paper.png" alt="" /></div>
                            <div onClick={Scissor}><img src="/Scissor.png" alt="" /></div>
                        </div>) : (<div className="pOptions"><div><img src={`${Options}.png`} alt="" /></div></div>)}


            


            <div className="score">
                {p_score}
            </div>

            <Link to = "/" className="quit">
                Quit
            </Link>

        </div>) :
        (<Winner PlayAgain = {handleClick} winn = {champ}/>
    );
}
 
export default Play;