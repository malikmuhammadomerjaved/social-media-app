import { EventDetail } from "../../components";
import { eventData } from "../../constants";

import "./styles.scss";

const Events = () => {
  return (
    <main className="event-page-container">
      <section className="events-layout-container">
        <section className="events-inner-wrapper">
          <EventDetail data={eventData} />

          <figure className="event-image-container">
            <img
              src="/images/event-page/birthday-bash.png"
              className="main-image"
              alt="Birthday"
            />
          </figure>
        </section>
      </section>
    </main>
  );
};

export default Events;
