import Header from "../components/Header/Header";
import "../styles/routes/Home.scss";

export default function Home() {
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
              <span>INNOVATION</span> MEETS
            </h1>
          </div>
          <div className="HomeContainer__hero--footer">
            <a
              href="https://www.hackerearth.com/challenges/hackathon/glitch-hackathon/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              REGISTER FOR THE <span>HACK</span>
            </a>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Ut et massa mi. Aliquam in
              hendrerit urna.
            </p>
          </div>
        </div>
      </section>
      <section className="HomeContainer__sponsorBar"></section>
    </main>
  );
}
