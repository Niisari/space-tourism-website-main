import { useState } from "react";
import { AnimationWrapper } from "../../components/AnimationWrapper";
import data from "../../data/data.json";
import "./Crew.css";

export function Crew() {
  const [currCrew, setCurrCrew] = useState(0);
  const crewMembers = data.crew;

  const selectedCrewMember = crewMembers[currCrew];

  return (
    <AnimationWrapper>
      <div className="Crew__wrapper">
        <section className="Crew__container">
          <div className="Crew__subtitle">
            <span className="subtitle__num">02</span>
            <span className="subtitle__text">MEET YOUR CREW</span>
          </div>

          <div
            className="Crew__content fade-in-content"
            key={selectedCrewMember.name}
          >
            <div className="Crew__text--content">
              <div className="Crew__text--wrapper">
                <h2 className="Crew__title">{selectedCrewMember.role}</h2>
                <h1 className="Crew__name">{selectedCrewMember.name}</h1>
                <p className="Crew__paragraph">{selectedCrewMember.bio}</p>
              </div>
              <div className="Crew__btn--wrapper">
                <div className="Crew__btn--list">
                  {crewMembers.map((crewMember, index) => (
                    <button
                      key={crewMember.name}
                      className={`dot ${index === currCrew ? "active" : ""}`}
                      onClick={() => setCurrCrew(index)}
                    ></button>
                  ))}
                </div>
              </div>
            </div>

            <div className="Crew__img--wrapper">
              <div className="Crew__img">
                <img
                  src={selectedCrewMember.images.png}
                  alt={selectedCrewMember.name}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </AnimationWrapper>
  );
}
