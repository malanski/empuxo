import './App.scss';
import { Footer } from './components/footer/Footer';
import { Header } from './components/Header';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Home } from './pages/home';
import { Tracks } from './pages/tracks/tracks';

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
import { About } from './pages/about/about';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />

        {/* ROTAS */}
        <Routes>
          <Route
            path='/'
            element={<Home />} />
          <Route
            path='/tracks'
            element={<Tracks />} />
          <Route
            path='/about'
            element={<About />} />
        </Routes>

        {/* TRACKS */}
        <Routes>
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


        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
