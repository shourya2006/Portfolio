import "./App.css";
import logo from "./image/download.png";
function Nav({onOpen}) {
  let sections = document.querySelectorAll("section");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
    });
  };
  return (
    <header id="NavBar">
      <div class="nav1">
        <div class="ele1">
          <div class="nav-element" href="#">
            <img src={logo} />
          </div>
        </div>
        <div className="hamburger">
          favicon
        </div>
        <nav class="nav1 ele2" id="nav-section">
          <a class="nav-element nav-link" href="#home">
            Home
          </a>
          <a class="nav-element nav-link" href="#about">
            About
          </a>
          <a class="nav-element nav-link" href="#projects">
            Projects
          </a>
          <a class="nav-element" id="Touch" onClick={onOpen}>
            <span>Get-in Touch</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
