const Stats = ({pixels, percent, startTime, endTime}) => {

const calculateTime = (start, end) => {
  if (endTime) {
    let seconds = new Date(endTime - startTime).getSeconds().toLocaleString('en-US', {
      minimumIntegerDigits: 2
    }) + 's'
    let mins = new Date(endTime - startTime).getMinutes().toLocaleString('en-US', {
      minimumIntegerDigits: 2
    }) + 'm'
    let hours = new Date(endTime - startTime).getHours() - 1 + 'h'
    return `${hours} ${mins} ${seconds}`
  }
}


  return (
    <div className='stats'>
      <div className="percent">{percent >= 100 ? 100 : Math.floor(percent)}%</div>
      {/* <div className="pixels">{pixels}</div> */}
      <div className="reading-time">Started: {startTime ? startTime.toLocaleTimeString('de-DE') : '00:00:00'}</div>
      <div className="reading-time">Completed: {endTime ? endTime.toLocaleTimeString('de-DE') : '00:00:00' }</div>
      <div className="reading-time">{endTime ? calculateTime() : '0h 00m 00s'}</div>
    </div>
  )
}
export default Stats
