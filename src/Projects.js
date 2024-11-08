import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import yt2 from "./image/yt1.png";
import yt1 from "./image/yt.png";
import cyber from "./image/homecyber.png";
import jarvis from "./image/jarvis.png";

function Project() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={yt1}
          title="Youtube Clone"
          link1="https://showtube-1.web.app/auth"
          img1={yt1}
          img2={yt2}
          desc="This is a Youtube Clone made on ReactJs and Redux. This is Fully Functional Website and is concatinating the Data the it recieves through YT-API."
        />
      ),
    },
    {
      key: uuidv4(),
      content: <Card imagen={cyber} title="Website For YT Channel" />,
    },
    {
      key: uuidv4(),
      content: <Card imagen={jarvis} title="Jarvis" />,
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      ),
    },
  ];

  
  return (
    <section id="projects">
      <h1 style={{ margin: "6pc", textDecoration: "Underline" }}>Projects</h1>
      <Carousel
        cards={cards}
        height="500px"
        width="100%"
        margin="0 auto"
        offset={200}
        showArrows={false}
      />
    </section>
  );
}

export default Project;
