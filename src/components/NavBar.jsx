import logo from "../images/logo.svg";
import "../App.css";

const NavBar = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" width={100} />
      <p>AyushAI - Image Generator</p>
      {/* <a
        className="App-link"
        href="https://www.segmind.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        SegMind
      </a> */}
      <p></p>
    </header>
  );
};

export default NavBar;
