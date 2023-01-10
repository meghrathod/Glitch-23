import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import "../styles/routes/Home.scss";
import Link from "next/link";
import FaqDropdown from "../components/FaqDropdown/FaqDropdown";

export default function Home() {
  // useEffect(() => {
  //   const cardsList = document.querySelectorAll(".HomeContainer__track--card");

  // }, []);

  const [questionIndex, setQuestionIndex] = useState(-1);

  return (
    <main className="HomeContainer">
      <Header />
      <section className="HomeContainer__hero">
        <img
          className="HomeContainer__hero--heroImage"
          src="/Images/HeroSectionImage.png"
        />
        <div className="HomeContainer__hero--left">
          <div className="HomeContainer__hero--header">
            <h1>WHERE</h1>
            <div className="HomeContainer__hero--dateBox">20-22 October</div>
            <h1>
              <span>CREATIVITY</span> &
            </h1>
            <h1>
              <span>INNOVATION</span>
            </h1>
            <h1>MEET</h1>
          </div>
          <div className="HomeContainer__hero--footer">
            <Link
              className="HomeContainer--blueButton"
              href="https://www.hackerearth.com/challenges/hackathon/glitch-hackathon/"
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"

            >
              REGISTER FOR THE <span>HACK</span>
            </Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Ut et massa mi. Aliquam in
              hendrerit urna.
            </p>
          </div>
        </div>
      </section>
      <section className="HomeContainer__sponsorBar"></section>
      <section className="HomeContainer__about">
        <div className="HomeContainer__about--left">
          <h1>
            <span>GLITCH</span> HACKATHON 2023
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue.
          </p>

          <div className="HomeContainer__about--buttons">
            <Link
              className="HomeContainer--blueButton"
              href="https://www.hackerearth.com/challenges/hackathon/glitch-hackathon/"
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
            >
              REGISTER FOR THE <span>HACK</span>
            </Link>
            <Link
              href="/faq"
              className="HomeContainer--gradientButton"
              data-content="Learn More"
            />
          </div>
        </div>
        <div className="HomeContainer__about--right">
          <div className="HomeContainer__about--qBox">
            <div className="HomeContainer__about--one">
              <img src="/Images/quote.svg" />
              <img src="/Images/quote.svg" />
            </div>
            <hr />
            <div className="HomeContainer__about--two">
              "We believe that it takes great people to deliver great products."
            </div>
            <div className="HomeContainer__about--three">
              <img src="/Images/GlitchTeamSign.svg" />
            </div>
          </div>
        </div>
      </section>
      <section className="HomeContainer__track">
        <img
          className="HomeContainer__track--bgImage"
          src="/Images/TracksSectionImage.png"
        />
        <div className="HomeContainer__track--right">
          <h1>
            HACKATHON
            <span>TRACKS</span>
          </h1>
          <div
            className="HomeContainer__track--cards"
            onMouseMove={(e) => {
              document
                .querySelectorAll(".HomeContainer__track--card")
                .forEach((card) => {
                  const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                  card.style.setProperty("--mouse-x", `${x}px`);
                  card.style.setProperty("--mouse-y", `${y}px`);
                });
            }}
          >
            <div className="HomeContainer__track--card">
              <div className="HomeContainer__track--cardContent">
                <h1>Productivity & Utility</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                </p>
              </div>
            </div>
            <div className="HomeContainer__track--card">
              <div className="HomeContainer__track--cardContent">
                <h1>Productivity & Utility</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                </p>
              </div>
            </div>
            <div className="HomeContainer__track--card">
              <div className="HomeContainer__track--cardContent">
                <h1>Productivity & Utility</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                </p>
              </div>
            </div>
            <div className="HomeContainer__track--card">
              <div className="HomeContainer__track--cardContent">
                <h1>Productivity & Utility</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                  massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien fringilla, mattis ligula consectetur, ultrices mauris.
                  Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="HomeContainer__horizontalScroller">
        <span>
          Great Prizes - Great Prizes - Great Prizes - Great Prizes - Great
          Prizes - Great Prizes - Great Prizes - Great Prizes - Great Prizes -
          Great Prizes - Great Prizes - Great Prizes - Great Prizes - Great
          Prizes - Great Prizes - Great Prizes - Great Prizes - Great Prizes -
          Great Prizes - Great Prizes
        </span>
      </section>
      <section className="HomeContainer__prizes">
        <div className="HomeContainer__prizesBox">
          <div className="HomeContainer__prizesBox--top"></div>
          <div className="HomeContainer__prizesBox--bottom">
            <h2>1st Place</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
            </p>
          </div>
        </div>
        <div className="HomeContainer__prizesBox">
          <div className="HomeContainer__prizesBox--top"></div>
          <div className="HomeContainer__prizesBox--bottom">
            <h2>2nd Place</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
            </p>
          </div>
        </div>
        <div className="HomeContainer__prizesBox">
          <div className="HomeContainer__prizesBox--top"></div>
          <div className="HomeContainer__prizesBox--bottom">
            <h2>3rd Place</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna.
            </p>
          </div>
        </div>
      </section>

      <section className="HomeContainer__FAQ">
        <div className="HomeContainer__FAQContainer">
          <div className="HomeContainer__FAQ--left">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="HomeContainer__FAQ--right">
            <FaqDropdown
              question="What is a hackathon?"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue."
              isExpanded={questionIndex === 0}
              onClick={() => {
                if (questionIndex === 0) setQuestionIndex(-1);
                else setQuestionIndex(0);
              }}
            />
            <FaqDropdown
              question="What is a hackathon?"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue."
              isExpanded={questionIndex === 1}
              onClick={() => {
                if (questionIndex === 1) setQuestionIndex(-1);
                else setQuestionIndex(1);
              }}
            />
            <FaqDropdown
              question="What is a hackathon?"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue."
              isExpanded={questionIndex === 2}
              onClick={() => {
                if (questionIndex === 2) setQuestionIndex(-1);
                else setQuestionIndex(2);
              }}
            />
            <FaqDropdown
              question="What is a hackathon?"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue."
              isExpanded={questionIndex === 3}
              onClick={() => {
                if (questionIndex === 3) setQuestionIndex(-1);
                else setQuestionIndex(3);
              }}
            />
            <FaqDropdown
              question="What is a hackathon?"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue."
              isExpanded={questionIndex === 4}
              onClick={() => {
                if (questionIndex === 4) setQuestionIndex(-1);
                else setQuestionIndex(4);
              }}
            />
            <FaqDropdown
              question="What is a hackathon?"
              answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue."
              isExpanded={questionIndex === 5}
              onClick={() => {
                if (questionIndex === 5) setQuestionIndex(-1);
                else setQuestionIndex(5);
              }}
            />
          </div>
        </div>
      </section>

      <footer className="Footer">
        <div className="Footer__container">
          <div className="Footer__left">© 2023 Developed by Glitch</div>
          <Link className="Footer__right" href="#" title="Back to top">
            <img src="/Images/FooterUp.svg" />
          </Link>
        </div>
      </footer>
    </main>
  );
}
