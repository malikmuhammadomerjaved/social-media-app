import { CommonButton, MainHeading } from "../../components";

import "./styles.scss";

const Home = () => {
  return (
    <main className="home-main-container">
      <figure className="landing-page-image-container">
        <img
          src="/images/landing-page/event-image.png"
          className="main-image"
          alt="Events"
        />
      </figure>

      <article className="home-content-wrapper">
        <MainHeading />

        <h3 className="main-subheading">
          Easily host and share events with your friends across any social
          media.
        </h3>
      </article>

      <CommonButton label="🎉 Create my event" />
    </main>
  );
};

export default Home;
