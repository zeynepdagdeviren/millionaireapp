import { useEffect, useMemo, useState } from "react";
import "./app.css";




function App() {


const [questionNumber, setQuestionNumber] = useState(1)
const [stop, setStop] = useState(false)
const [earned, setEarned] = useState("$ 0")


const data = [
  {
    id: 1,
    question: "Rolex is a company that specializes in what type of product?",
    answers: [
      {
        text: "Phone",
        correct: false,
      },
      {
        text: "Watches",
        correct: true,
      },
      {
        text: "Food",
        correct: false,
      },
      {
        text: "Cosmetic",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "When did the website `Facebook` launch?",
    answers: [
      {
        text: "2004",
        correct: true,
      },
      {
        text: "2005",
        correct: false,
      },
      {
        text: "2006",
        correct: false,
      },
      {
        text: "2007",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Who played the character of harry potter in movie?",
    answers: [
      {
        text: "Johnny Deep",
        correct: false,
      },
      {
        text: "Leonardo Di Caprio",
        correct: false,
      },
      {
        text: "Denzel Washington",
        correct: false,
      },
      {
        text: "Daniel Red Cliff",
        correct: true,
      },
    ],
  },
];


  const moneyPyramid = useMemo(() => 
    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 100" },
      { id: 3, amount: "$ 100" },
      { id: 4, amount: "$ 100" },
      { id: 5, amount: "$ 100" },
      { id: 6, amount: "$ 100" },
      { id: 7, amount: "$ 100" },
      { id: 8, amount: "$ 100" },
      { id: 9, amount: "$ 100" },
      { id: 10, amount: "$ 100" },
      { id: 11, amount: "$ 100" },
      { id: 12, amount: "$ 100" },
      { id: 13, amount: "$ 100" },
      { id: 14, amount: "$ 100" },
      { id: 15, amount: "$ 100" },
  
    ].reverse()



  , [])
    
    
    [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 100" },
    { id: 3, amount: "$ 100" },
    { id: 4, amount: "$ 100" },
    { id: 5, amount: "$ 100" },
    { id: 6, amount: "$ 100" },
    { id: 7, amount: "$ 100" },
    { id: 8, amount: "$ 100" },
    { id: 9, amount: "$ 100" },
    { id: 10, amount: "$ 100" },
    { id: 11, amount: "$ 100" },
    { id: 12, amount: "$ 100" },
    { id: 13, amount: "$ 100" },
    { id: 14, amount: "$ 100" },
    { id: 15, amount: "$ 100" },

  ].reverse();

  useEffect(() => {
    questionNumber >1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount)
  }, [moneyPyramid, questionNumber])

  return (
    <div className="app">
      <div className="main">
        {stop ? <h1 className="endText">You earned: {earned}</h1> : (

    <>
        <div className="top">
          <div className="timer">
            <Timer   setStop={setStop} questionNumber={questionNumber}/>
          </div>
        </div>
        <div className="bottom"> 
        <Trivia data= {data} 
        setStop= {setStop} 
        questionNumber= {questionNumber}
        setQuestionNumber={setQuestionNumber}/>
         </div>
         </>
         )} 
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map( (m) => (

            <li className={questionNumber === m.id ? "moneyListItem acvtive" : "moneyListItem"}>
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount} </span>
            </li>

          ))}












        </ul>
      </div>

    </div>
  );
}

export default App;
