import "./Destination.css";
import data from "../../data/data.json";
import { AnimationWrapper } from "../../components/AnimationWrapper";
import { useState } from "react";

export function Destination() {
  const [currDestination, setCurrDestination] = useState("Moon");
  const destinations = data.destinations;
  const selectedDestination = destinations.find(
    (destination) => destination.name === currDestination,
  );

  return (
    <AnimationWrapper>
      <div className="Destination__wrapper">
        <section className="Destination__container">
          <div className="Destination__subtitle">
            <span className="subtitle__num">01</span>
            <span className="subtitle__text">PICK YOUR DESTINATION</span>
          </div>

          <div
            className="Destination__content--wrapper fade-in-content"
            key={selectedDestination.name}
          >
            <div className="Destination__img">
              <img
                src={selectedDestination.images.png}
                alt={selectedDestination.name}
              />
            </div>

            <div className="Destination__btn--wrapper">
              <ul className="Destination__btn--list">
                {destinations.map((destination) => (
                  <li
                    key={destination.name}
                    className={
                      destination.name === currDestination
                        ? "Destination__btn--active"
                        : ""
                    }
                    onClick={() => setCurrDestination(destination.name)}
                  >
                    {destination.name}
                  </li>
                ))}
              </ul>

              <div className="Destination__text--content">
                <h2 className="Destination__title">
                  {selectedDestination.name}
                </h2>
                <p className="Destination__description">
                  {selectedDestination.description}
                </p>

                <div className="Destination__avg--content">
                  <div className="Destination__avg--distance">
                    <h3 className="avg__title">Avg. distance</h3>
                    <p className="avg__text">{selectedDestination.distance}</p>
                  </div>
                  <div className="Destination__est--travel">
                    <h3 className="avg__title">Est. travel time</h3>
                    <p className="avg__text">{selectedDestination.travel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AnimationWrapper>
  );
}
