import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container">
        <header className="border-bottom lh-1 py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <a className="link-secondary" href="#">
                Subscribe
              </a>
            </div>
            <div className="col-4 text-center">
              <Link
                className="blog-header-logo text-body-emphasis text-decoration-none"
                to="/"
              >
                <img src="/public/images/athena1.png"></img>
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="link-secondary" href="#" aria-label="Search"></a>
              <a className="btn btn-sm btn-outline-secondary" href="#">
                Sign up
              </a>
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-3 border-bottom">
          <nav className="nav nav-underline justify-content-between">
            <Link
              className="nav-item nav-link link-body-emphasis active"
              to="/"
              title="Inicio"
            >
              Inicio
            </Link>

            <Link
              className="nav-item nav-link link-body-emphasis "
              to="hooks"
              title="Hooks"
            >
              Hooks
            </Link>
            <Link
              className="nav-item nav-link link-body-emphasis"
              to="/formularios"
              title="Formularios"
            >
              Formularios{" "}
            </Link>
            <Link className="nav-item nav-link link-body-emphasis" to="/rutas">
              Rutas
            </Link>
            <Link className="nav-item nav-link link-body-emphasis" to="/utilidades">
              Utilidades
            </Link> 
            <Link className="nav-item nav-link link-body-emphasis" to="/material">
              Material UI
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
