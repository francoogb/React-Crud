import { Link, useLocation } from "react-router-dom";

const HookUseLocation = () => {

const location = useLocation();
console.log(location);

  return (
    
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Hook UseLocation
          </li>
        </ol>
        <h3> UseLocation Hook</h3>
        
        {location.pathname}
      </nav>



    </>
  );
};

export default HookUseLocation;
