import s from "./style.module.css";

// clean code: 4 arguments like maxium on other case with props

const Logo = ({ image, title }) => (
  <div>
    <div className={s.container}>
      <img className={s.img} src={image} alt="logo" />
      <span className={s.title}>{title}</span>
    </div>
  </div>
);

export default Logo;
