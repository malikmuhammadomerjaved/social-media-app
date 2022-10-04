import { Link } from "react-router-dom";

import "./styles.scss";

const CommonButton = (props) => {
  const { label } = props;

  return (
    <article className="common-button-wrapper">
      <Link to="/event">
        <button className="common-button">{label}</button>
      </Link>
    </article>
  );
};

export default CommonButton;
