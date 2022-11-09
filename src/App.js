import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Imports de exibição
import ClientesListagem from './Components/Pages/Cliente/Cliente';
import ClientesCadastro from './Components/Pages/Cliente/Cliente.cadastro';

import ServicosListagem from "./Components/Pages/Servicos/Servicos";
import ServicosCadastro from './Components/Pages/Servicos/servicos.cadastro';

import PagamentosListagem from "./Components/Pages/Pagamentos/Pagamentos";
import PagamentosRegistro from './Components/Pages/Pagamentos/Pagamentos.registro';

import UsuariosListagem from "./Components/Pages/admin/usuarios/Usuarios";
import UsuariosCadastro from './Components/Pages/admin/usuarios/Usuarios.cadastro';

import OsListagem from "./Components/Pages/OS/Os";
import OsCadastro from './Components/Pages/OS/Os.cadastro';

import VeiculosListagem from "./Components/Pages/Veiculos/Veiculos";
import VeiculosCadastro from './Components/Pages/Veiculos/Veiculos.cadastro';

import Home from "./Components/Pages/Home/Home";
import Navbarr from "./Components/Layout/Navbarr";
import Footer from './Components/Layout/Footer';
import Container from './Components/Layout/Container';


function App() {
  return (
      <Router>
        <Navbarr/>
        <Container customClass="min-height">
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/clientes' element={<ClientesListagem/>}/>
                <Route exact path='/clientes/novocliente' element={<ClientesCadastro/>}/>
                <Route exact path='/servicos' element={<ServicosListagem/>}/>
                <Route exact path='/servicos/novoservico' element={<ServicosCadastro/>}/>
                <Route exact path='/pagamentos' element={<PagamentosListagem/>}/>
                <Route exact path='/pagamentos/registropagamento' element={<PagamentosRegistro/>}/>
                <Route exact path='/usuarios' element={<UsuariosListagem/>}/>
                <Route exact path='/usuarios/novousuario' element={<UsuariosCadastro/>}/>
                <Route exact path='/os' element={<OsListagem/>}/>
                <Route exact path='/os/novaos' element={<OsCadastro/>}/>
                <Route exact path='/veiculos' element={<VeiculosListagem/>}/>
                <Route exact path='/veiculos/novoveiculo' element={<VeiculosCadastro/>}/>
            </Routes>
          </Container>
          <Footer/>
      </Router>
  );
}

export default App;
