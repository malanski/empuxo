// import { Button } from '@mui/material';
// import PropTypes from 'prop-types';
import './Mandala.scss'
import React from 'react'
import useCanvas from './useCanvas'
// import useCanvas2 from './useCanvas'

const Canvas = props => {  
  
  const { draw, ...rest } = props
  const canvasRef = useCanvas(draw)
  // const { draw2, ...rest2 } = props
  // const canvasRef2 = useCanvas2(draw2)
  
  return (
    (
      <div>
        <canvas id='canvas1' ref={canvasRef} {...rest} title="você esta vendo uma animação produzida com códigos javaScript"/>
        
        {/* <canvas id='canvas2' ref={canvasRef} {...rest}/> */}
        {/* <canvas id='canvas2' ref={canvasRef2} {...rest2}/> */}
      </div>
    )
  )
}

export default Canvas