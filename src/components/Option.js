import Finish from "./Finish";

function Option({  question, dispatch, answer,  }) {
  
 const hasAnswered = answer !== null; 
  function handleClickOption(index) {
    dispatch({type:'newAnswer',payload:index})
  }


  return (
    <div className="options">
      {question.options.map((option,index) =>
        <button key={option}
          className={`btn btn-option ${index === answer ? 'answer' : ''}
           ${hasAnswered ? index ===question.correctOption?'correct':'wrong':''}  `}
          onClick={() => handleClickOption(index)}
          disabled={hasAnswered}
        >
          {option}</button>
        )}
    </div>
    )
 
  
 

 
  
}

export default Option
