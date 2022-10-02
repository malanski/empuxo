import { useRef, useEffect } from 'react'

const useCanvas2 = draw2 => {
  
  const canvasRef2 = useRef(null)
  
  useEffect(() => {
    
    const canvas = canvasRef2.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    const render = () => {
      frameCount++
      draw2(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw2])
  
  return canvasRef2
}

export default useCanvas2