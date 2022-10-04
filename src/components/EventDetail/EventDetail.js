import { chevronRightIcon } from "../../svg";
import "./styles.scss";

const EventDetail = (props) => {
  const { data } = props;

  return (
    <section className="event-detail-container">
      <article className="event-content-wrapper">
        <h2 className="main-heading">Birthday Bash</h2>
        <p className="caption">
          Hosted by <strong>Elysia</strong>
        </p>
      </article>

      <section className="events-list-wrapper">
        {data &&
          data.map((cardData, index) => {
            const { icon, startTime, endTime, utc, location, address } =
              cardData;
            return (
              <article key={`event-${index}`} className="events-list-container">
                <figure className="icon-tile">
                  <img src={icon} className="icon" alt="event icon" />
                </figure>

                <article className="event-details">
                  <h6 className="detail-heading">{startTime || location}</h6>
                  <p className="detail-subtext">
                    {endTime ? (
                      <span>
                        to <strong>{endTime}</strong> {utc}
                      </span>
                    ) : (
                      address
                    )}
                  </p>
                </article>

                <figure className="proceed-next">{chevronRightIcon}</figure>
              </article>
            );
          })}
      </section>
    </section>
  );
};

export default EventDetail;
