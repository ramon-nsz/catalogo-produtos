import './styles/App.css';
import { Routes, Route, Link } from 'react-router-dom'; // vai importar as rotas pra obter redirecionamento para as paginas
import QuemSomos from './QuemSomos'; //vai importar o quem somos
import PaginaInicial from './PaginaInicial'; // vai importar a pagina inicial

function App() {
  return (
    <div className="container">
      <img src="/images/logo.png" alt="Logo Impacta" className="logo" width="150" />
      <header className="catalog-header">
        <h1>Reymond</h1>
        <h1>Comunicação Visual</h1>
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
        <Route path="/" element={<PaginaInicial />} /> {}
        <Route path="/quem-somos" element={<QuemSomos />} />
      </Routes>
    </div>
  );
}

export default App;