function Finish({dispatch ,maxQuestionPoints, points }) {
  const percentage = (points / maxQuestionPoints) * 100;
  let imoji;
  if (percentage === 100)
    imoji = '🥇';
  else if (percentage < 100 && percentage >= 80)
    imoji = '🎉'
  else if (percentage < 80 && percentage >= 60)
    imoji = '🙂'
  else if (percentage < 60 && percentage >= 50)
    imoji = '😎'
  else 
    imoji='You failed 😥😥'
    
  return (
    <>
    <p className="result">
      You scored <strong>{Math.ceil(percentage)}</strong> of
          <strong>{maxQuestionPoints}</strong>
      <p>
        {imoji}
      </p>
      
      </p>
      <button className="btn btn-ui" onClick={()=>dispatch({type:'reset'})}>Reset Quiz</button>
    </>
  )
}

export default Finish
