import "./styles.scss";

const CommonButton = (props) => {
  const { label } = props;

  return (
    <article className="common-button-wrapper">
      <button className="common-button">{label}</button>
    </article>
  );
};

export default CommonButton;
