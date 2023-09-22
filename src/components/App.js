import { useEffect, useReducer } from "react";
import DateCounter from "./DateCounter";
import Header from './Header';
import Main from "./Main";
import Loader from './Loader'
import StartScreen from "./StartScreen";
import Error from './Error'
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress.js";
import Finish from "./Finish.js";
import Footer from "./Footer";
import Timer from "./Timer";
const SEC_PER_QUESTION = 30;

const initailstate = {
  questions:[],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  secondRemaining:10
}

function reducer(state, action) {

  // 1)loading 2)ready 3)action
  switch (action.type) {
    case 'ready':
      return { ...state, status: 'ready',questions:action.paylaod,secondRemaining:state.secondRemaining*SEC_PER_QUESTION }
    case 'error':
      return { ...state, status: 'error' }
    case 'action':
      return { ...state, status: 'action' }
    case 'newAnswer':
      const question = state.questions.at(state.index);

      
      return {
        ...state, answer: action.payload, points:
          action.payload===question.correctOption
          ?state.points+question.points:state.points
      }
    case 'nextQuestion':
      return { ...state, index: action.payload + 1, answer: null }
    case 'finish':
      return { ...state, status: 'finished' }
    case 'reset':
      return { ...initailstate, questions: state.questions, status: 'ready' }
    case 'tick':
      return {
        ...state, secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining===0?'finished':state.status
      }
    default:
      return 'unkown data';
    
  }
}

function App() {
 
  const [{ questions, status, index, answer, points,secondRemaining }, dispatch] = useReducer(reducer, initailstate);
  const numQuestion = questions.length;
  
  const maxQuestionPoints = questions.reduce((prev, curr) =>
  prev+curr.points
    , 0)

  useEffect(function () {

    async function fetchQuestions() {

     try{
     const res = await fetch(`http://localhost:4000/questions`);
     const data = await res.json();
       dispatch({ type: 'ready',paylaod:data })

     }
     catch (error) {
       dispatch({type:'error'})
     }
   }
    fetchQuestions();
  },[])
  return (
    <div className="App">

      <Main>
      <Header />
      </Main>
      {status === 'loading' && <Loader />}
      {status==='error'&&<Error/>}
      {status === 'ready' && <StartScreen dispatch={dispatch} numQuestion={numQuestion} />}
      {status === 'action' &&
        <>
      
        <Progress
          numQuestion={numQuestion}
          index={index}
          maxQuestionPoints={maxQuestionPoints}
          points={points}
        />
        <Question
        question={questions[index]}
        dispatch={dispatch}
          answer={answer}
        />
        <Footer>
          <Timer
            dispatch={dispatch}
            secondRemaining={secondRemaining}
          />

        <NextButton dispatch={dispatch}
          answer={answer}
          index={index}
          numQuestion={numQuestion}
          />
          </Footer>
       
        </>
      }
      {status === 'finished' && <Finish
        maxQuestionPoints={maxQuestionPoints}
        points={points}
        dispatch={dispatch}
      
      />}
      
    </div>
  );
}

export default App;
