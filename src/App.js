import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { EditarRestaurante } from "./Components/EditarRestaurante";
import { FormularioRestaurante } from "./Components/FormularioRestaurante";
import { CrearReservas } from "./Components/CrearReservas";
import { TablaReservas } from "./Components/TablaReservas";
import { TarjetaRestaurantes } from "./Components/TarjetaRestaurantes";



function App() {
  return (
    <Router>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-brand text-primary">Sistema Reserva</span>

            <div className="text-end" id="navbarNavAltMarkup">
              <div className="navbar-nav d-flex flex-row gap-2">
                <Link to="/restaurante">
                  <button type="button" className="btn btn-outline-primary" >Lista de restaurantes</button>
                </Link>
                <Link to="/reservas">
                  <button type="button" className="btn btn-outline-primary" >Lista de reservas</button>
                </Link>
                <Link to="/restaurante/crear">
                  <button type="button" className="btn btn-outline-primary" >Resgistrar un restaurante</button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="container-fluid mt-2">
        <Switch>
          <Route path="/restaurante/reserva/:nit" exact>
            <CrearReservas/>
          </Route>
          <Route path="/restaurante/reserva" exact>
            <Redirect to="/restaurante" />
          </Route>
          <Route path="/restaurante/editar/:nit" exact>
            <EditarRestaurante/>
          </Route>
          <Route path="/restaurante/crear" exact>
            <FormularioRestaurante/>
          </Route>
          <Route path="/reservas" exact>
            <TablaReservas/>
          </Route>
          <Route path="/restaurante" exact>
            <TarjetaRestaurantes/>
          </Route>
          <Route path="/" exact>
            <Redirect to="/restaurante" />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
