import Styles from "./Button.module.css";

function Button({ text , link, blank}) {
  return <a href={link} target={blank}><button className={Styles.btn}>{text}</button></a>;
}

export default Button;
