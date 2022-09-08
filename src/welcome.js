import { Outlet, NavLink } from 'react-router-dom';

function Welcome() {
  return (
    <div>
      <h1>Welcome to React</h1>
    <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem"}}>
      <NavLink
        style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : "",
          };
        }}
        to="/calculator">Calculator
      </NavLink> |{" "}
      <NavLink
        style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : "",
          };
        }}
        to="/sofatutorteams">Sofatutor Teams
      </NavLink>
    </nav>
    <Outlet />
    </div>
  );
}

export default Welcome;
