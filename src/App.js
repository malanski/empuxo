import './App.scss';
import './components/Canvas/Mandala.scss'

import { Header } from './components/Header';
import { Footer } from './components/footer';
import Canvas from './components/Canvas/Canvas';

import { Routes, Route, HashRouter } from 'react-router-dom';
import { Home } from './pages/home';
import { Tracks } from './pages/tracks/tracks';
import { About } from './pages/about/about';

import { Marmota } from './pages/tracks/1marmota';
import { Cabreiragem } from './pages/tracks/2cabreiragem';
import { OndePossoTeVer } from './pages/tracks/3ondepossoTeVer/ondepossoTeVer';
import { Camaleao } from './pages/tracks/4camaleao';
import { Viajante } from './pages/tracks/5viajante/viajante';
import { Hidra } from './pages/tracks/6hidra';
import { DitadoPopular } from './pages/tracks/7ditadoPopular';
import { SoAmetade } from './pages/tracks/8soAmetade/soAmetade';
import { Camarao } from './pages/tracks/9camarao/camarao';
import { Casulo } from './pages/tracks/10casulo';
import { Qualeh } from './pages/tracks/11qualeh';
import { Aphantasia } from './pages/tracks/12aphantasia/aphantasia';
import { AnoPassado } from './pages/tracks/13anoPassado';




function App() {

  let hue = parseInt(Math.random() * 3)
  // let number = 0;
  let number = parseInt(Math.random() * 0.02);
  let scale = 5;

  const draw = (ctx, frameCount) => {
   
    function drawingCircle() {
      // number = 1
      // hue = 1;
      // Draw each frame
      // ctx.fillStyle = 'hsl(' + hue + 5 + ', 100%, 50%';
      // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

      ctx.fillStyle = 'hsl(linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(34,34,134,1) 25%, rgba(0,212,255,1) 100%)';
      //ctx.fillStyle = 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(34,34,134,1) 25%, rgba(0,212,255,1) 100%)';
      ctx.strokeStyle = 'hsl(' + number/2 + ', 100%, 50%';
      ctx.lineWidth = 5;
      ctx.beginPath();
      // ctx.arc(positionX, positionY, number, 0, Math.PI * 2); // X ,  Y,  raio, cut, ??cut?? 
      ctx.arc(149, 75, 200 * Math.sin(frameCount * 0.005) ** 2, 0, 2 * Math.PI)
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      number++

      // ctx.setTimeout(() => {
      //   number++
      // }, 1000);
      hue++
      // hue += 0.5
    }

    function animate() {

      drawingCircle();
      if (number > 200) return
      requestAnimationFrame(animate);
    }
    animate();
  }

  const mandala = (ctx, frameCount) => {
    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    // ctx.fillStyle = 'red'
    // ctx.beginPath()
    // ctx.arc(150, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    // ctx.fill()

    let hue = 1
    function drawingMandala() {
      // Draw each frame
      let angle = number/2;  // intervalos para flores diferentes
      let radius = scale * Math.sqrt(number );
      let positionX = radius * Math.sin(angle) + ctx.canvas.width /2;
      let positionY = radius * Math.cos(angle) + ctx.canvas.height /2.2;

      ctx.fillStyle = 'hsl(linear-gradient(90deg, hsl(' + hue + ', 50%, 0%, 10%, rgba(34,34,134,1) 25%, rgba(0,212,255,1) 100%)';

      // ctx.fillStyle = 'hsl(' + hue + 5 + ', 100%, 50%';
      ctx.strokeStyle = 'hsl(' + hue + ', 70%, 70%';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(positionX, positionY, 100, 0, Math.PI * 2); // X ,  Y,  raio, cut, ??cut?? 
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      number++
      hue++
    }

    function animate2() {

      drawingMandala();
      if (number > 120) return
      requestAnimationFrame(animate2);
      
    }
    animate2();
  }



  return (
    <div className="App">
      <HashRouter>
        <div className='canvas-container'>
          <Canvas draw={mandala} />

          <Canvas id='canvas2' draw={draw} />

        </div>
        <Header component={Header} exact />

        {/* ROTAS */}
        <Routes>
          <Route
            component={Home} exact
            path='/home'
            element={<Home />} />
          <Route
            component={Tracks} exact
            path='/tracks'
            element={<Tracks />} />
          <Route
            component={About} exact
            path='/about'
            element={<About />} />

          {/* TRACKS */}
          <Route
            path='/tracks/marmota'
            element={<Marmota />} />
          <Route
            path='/tracks/cabreiragem'
            element={<Cabreiragem />} />
          <Route
            path='/tracks/ondePossoTever'
            element={<OndePossoTeVer />} />
          <Route
            path='/tracks/camaleao'
            element={<Camaleao />} />
          <Route
            path='/tracks/viajante'
            element={<Viajante />} />
          <Route
            path='/tracks/hidra'
            element={<Hidra />} />
          <Route
            path='/tracks/ditadoPopular'
            element={<DitadoPopular />} />
          <Route
            path='/tracks/soAmetade'
            element={<SoAmetade />} />
          <Route
            path='/tracks/camarao'
            element={<Camarao />} />
          <Route
            path='/tracks/casulo'
            element={<Casulo />} />
          <Route
            path='/tracks/qualeh'
            element={<Qualeh />} />
          <Route
            path='/tracks/aphantasia'
            element={<Aphantasia />} />
          <Route
            path='/tracks/anoPassado'
            element={<AnoPassado />} />
        </Routes>

        <Footer component={Footer} exact />

      </HashRouter>
    </div>
  );
}

export default App;
