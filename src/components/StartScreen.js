function StartScreen({dispatch,numQuestion}) {
  function handleClickStar() {
    dispatch({type:'action'})
  }
  return (
    <div className="start">
      <h2>Welcome to the React Quiz</h2>
      <h4>{numQuestion} questions to test your React mastry</h4>
      <button className="btn btn-ui" onClick={handleClickStar}>let's start</button>
    </div>
  )
}

export default StartScreen
