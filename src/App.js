import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Imports de exibição
import ClientesListagem from './Components/Pages/Cliente/Cliente';
import NewCliente from './Components/Pages/Cliente/NewCliente';
import ClienteEdit from './Components/Pages/Cliente/ClienteEdit';

import ServicosListagem from "./Components/Pages/Servicos/Servicos";
import NewServicos from './Components/Pages/Servicos/NewServicos';
import ServicoEdit from './Components/Pages/Servicos/ServicoEdit';

import PagamentosListagem from "./Components/Pages/Pagamentos/Pagamentos";
import NewPagamentos from './Components/Pages/Pagamentos/NewPagamentos';
import PagamentoEdit from './Components/Pages/Pagamentos/PagamentoEdit';

import UsuariosListagem from "./Components/Pages/admin/usuarios/Usuarios";
import UsuariosCadastro from './Components/Pages/admin/usuarios/Usuarios.cadastro';

import OsListagem from "./Components/Pages/OS/Os";
import NewOs from './Components/Pages/OS/NewOs';
//import OsEdit from './Components/Pages/OS/OsEdit';

import VeiculosListagem from "./Components/Pages/Veiculos/Veiculos";
import NewVeiculos from './Components/Pages/Veiculos/NewVeiculos';
import VeiculoEdit from './Components/Pages/Veiculos/VeiculoEdit';

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
                <Route exact path='/clientes/novocliente' element={<NewCliente/>}/>
                <Route exact path='/clientes/:id' element={<ClienteEdit/>}/>
                <Route exact path='/servicos' element={<ServicosListagem/>}/>
                <Route exact path='/servicos/novoservico' element={<NewServicos/>}/>
                <Route exact path='/servicos/:id' element={<ServicoEdit/>}/>
                <Route exact path='/pagamentos' element={<PagamentosListagem/>}/>
                <Route exact path='/pagamentos/registropagamento' element={<NewPagamentos/>}/>
                <Route exact path='/pagamentos/:id' element={<PagamentoEdit/>}/>
                <Route exact path='/usuarios' element={<UsuariosListagem/>}/>
                <Route exact path='/usuarios/novousuario' element={<UsuariosCadastro/>}/>
                <Route exact path='/os' element={<OsListagem/>}/>
                <Route exact path='/os/novaos' element={<NewOs/>}/>
                <Route exact path='/veiculos' element={<VeiculosListagem/>}/>
                <Route exact path='/veiculos/novoveiculo' element={<NewVeiculos/>}/>
                <Route exact path='/veiculos/:id' element={<VeiculoEdit/>}/>
            </Routes>
          </Container>
          <Footer/>
      </Router>
  );
}

export default App;
