function NextButton({ dispatch, answer, index,numQuestion}) {
  if (answer === null) return;

 
  
  function handleNextQuestion() {
    dispatch({type:'nextQuestion',payload:index})
  }

  function handleFinishQuis() {
    dispatch({type:'finish'})
  }

  if(index<numQuestion-1)
  return (
    <div>
      <button className="btn btn-ui" onClick={handleNextQuestion}>Next</button>
      
    </div>
    )
  
  if (numQuestion - 1 === index)
    return (
      <button className="btn btn-ui" onClick={handleFinishQuis}>Finish</button>
  )
}

export default NextButton
