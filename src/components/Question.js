import Option from "./Option";

function Question({ question,dispatch,answer,numQuestion,index }) {
  
 
  return (
    <div>
      <h4>{question.question}</h4>
      <Option
        numQuestion={numQuestion}
        question={question}
        dispatch={dispatch}
        index={index}
        answer={answer} />

    </div>
  )
}

export default Question
