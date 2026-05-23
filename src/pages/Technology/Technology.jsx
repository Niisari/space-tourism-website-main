import "./Technology.css";
import data from "../../data/data.json";
import { useState } from "react";
import { AnimationWrapper } from "../../components/AnimationWrapper";

export function Technology() {
  const [currTechnology, setCurrTechnology] = useState(0);

  const selectedTechnology = data.technology[currTechnology];

  return (
    <AnimationWrapper>
      <div className="Technology__wrapper">
        <section className="Technology__container">
          <div className="Technology__subtitle">
            <span className="subtitle__num">03</span>
            <span className="subtitle__text">SPACE LAUNCH 101</span>
          </div>

          <div className="Technology__content--container">
            <div className="Technology__image">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={selectedTechnology.images.portrait}
                />
                <img
                  src={selectedTechnology.images.landscape}
                  alt={selectedTechnology.name}
                />
              </picture>
            </div>

            <div className="Technology__text--container">
              <div className="Technology__btn--wrapper">
                {data.technology.map((technology, index) => (
                  <button
                    key={technology.name}
                    className={`dot__tech ${index === currTechnology ? "active" : ""}`}
                    onClick={() => setCurrTechnology(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <div className="Tech__text-wrapper">
                <h2 className="Technology__title">THE TERMINOLOGY...</h2>
                <h1 className="Technology__name">{selectedTechnology.name}</h1>
                <p className="Technology__description">
                  {selectedTechnology.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AnimationWrapper>
  );
}
