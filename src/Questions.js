import React, {useState} from "react";
import styled from 'styled-components';

const QuestionStyle = styled.div`
    background-color: lightblue;
    color: black;
    width: 100%;
    height: 100vh;
    padding: 0px;
    margin-top: 0px;
    border: 0px;
`

function Questions({Question}){
    const max = Question.length;
    const [Question_Number, setQuestion_Number] = useState(0);
    var p = Question[Question_Number].Options.map((Option) => {
        return(<div>
            <input type="radio" value={Option} name="opt"/> <label>{Option}</label>
        </div>
        )
    })
    
    const NextQ = () => {
        setQuestion_Number(Question_Number + 1)
        if (setQuestion_Number >= max) {
            <h1>done!</h1>
        }   
    };

    const EndQ = () => {
        setQuestion_Number(Question_Number)
        if (setQuestion_Number === max) {
            <h1>done!</h1>
        }
    };

    function displayQ(i){

        return(<div>{i[Question_Number].Question}</div>);
        
    }
    return(
        <QuestionStyle>
            <h1>Question {Question_Number + 1}</h1>
            <div className="Q1">{displayQ(Question)} </div>
            <form>{p}</form>
            {
                Question_Number < max - 1 ? <button onClick={NextQ}>next</button> : <button onClick={EndQ}>Done</button>
            }
            
        </QuestionStyle>
    )
}

export default Questions