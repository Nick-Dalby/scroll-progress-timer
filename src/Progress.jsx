const Progress = ({percent}) => {
  return (
    <div className="progress-wrapper">
      <div className="progress" style={{width: `${percent}%`}}></div>
    </div>
  )
}
export default Progress
