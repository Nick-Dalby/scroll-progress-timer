import { useEffect, useRef, useState } from 'react'
import PostContent from './PostContent'
import Progress from './Progress'
import Stats from './Stats'

const Post = () => {
  const target = useRef()
  const [percent, setPercent] = useState(0)
  const [pixels, setPixels] = useState(0)
  const [startTime, setStartTime] = useState()
  const [endTime, setEndTime] = useState()


  const scrollListener = () => {
    setPixels(window.scrollY)
    let difference =
      target.current.clientHeight +
      target.current.offsetTop -
      window.innerHeight
    setPercent((100 * pixels) / difference)

    if (percent >= 100) {
      timerEnd()
    }
  }



  useEffect(() => {
    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  })

  const timerStart = () => {
    setStartTime(new Date())
  }

  const timerEnd = () => {
    if (endTime) return
    setEndTime(new Date())
  }

  useEffect(() => {
    timerStart()
  }, [])



  return (
    <div>
      <Progress percent={percent} />
      <section ref={target}>
        <PostContent />
      </section>
      <Stats pixels={pixels} percent={percent} startTime={startTime} endTime={endTime}/>
    </div>
  )
}
export default Post
