import './styles/App.css';
import { Routes, Route, Link } from 'react-router-dom';
import QuemSomos from './QuemSomos';
import PaginaInicial from './PaginaInicial'; // Importa o novo componente

function App() {
  return (
    <div className="container">
      <img src="/images/impactateste.png" alt="Logo Impacta" className="logo" width="150" />
      <header className="catalog-header">
        <h1>"Nome da Empresa"</h1>
        <ul className="product-list">
          <li className="product-item">
            <Link to="/">Página Inicial</Link>
          </li>
          <li className="product-item">
            <Link to="/quem-somos">Quem somos?</Link>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<PaginaInicial />} /> {/* Usa o componente */}
        <Route path="/quem-somos" element={<QuemSomos />} />
      </Routes>
    </div>
  );
}

export default App;