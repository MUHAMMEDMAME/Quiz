function Progress({ numQuestion,index,maxQuestionPoints,points }) {

  return (
    <div className="progress">
      <progress value={index+1 } max={numQuestion} />
      <p>
      Questions  
            <strong>{index+1}</strong>/<strong>{numQuestion}</strong> 
      </p>

      <p>
        <strong>{points}</strong>/<strong>{maxQuestionPoints}</strong>

      </p>

    </div>
  )
}

export default Progress
