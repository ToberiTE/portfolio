import { useState } from "react";
import style from "./Card.module.scss";

export function Card(props) {
  const handleClick = () => {
    setFlipped(!flipped);
  };
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`${style.card} ${flipped ? style.flip : ""}`}
      onClick={handleClick}
    >
      <div className={style.front}>
        <img src={props.image} className={style.img} alt={props.alt}></img>
        <p className={style.title}>{props.title}</p>
      </div>
      <div className={style.back}>
        <p className={style.text}>{props.text}</p>
      </div>
    </div>
  );
}
