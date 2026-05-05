import "./HomePage.css";
import { AnimationWrapper } from "../../components/AnimationWrapper";
export function HomePage() {
  return (
    <AnimationWrapper>
      <section className="HomePage__container">
        <div className="HomePage__text--content">
          <span className="HomePage__subtitle">SO, YOU WANT TO TRAVEL TO</span>
          <h1 className="HomePage__title">SPACE</h1>
          <p className="HomePage__paragraph">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="HomePage__btn--wrapper">
          <button className="HomePage__btn">EXPLORE</button>
        </div>
      </section>
    </AnimationWrapper>
  );
}
