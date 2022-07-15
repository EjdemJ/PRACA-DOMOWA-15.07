import LinksMenu from "./LinksMenu";

function Navbar({ logo }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">{logo}</div>
        <LinksMenu />
      </div>
    </nav>
  );
}

export default Navbar;
