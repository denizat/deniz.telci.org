import React, {useRef, useEffect} from "react";
import { Link } from "react-router-dom";

const Canvas = () => {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    context.fillStyle = '#000000'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }, [])
  
  return <canvas ref={canvasRef} />
}

export default () => (
  <div>
    <Canvas />
  </div>
);
