import Head from "next/head";
import "../styles/root/globals.scss";

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Glitch </title>
        <meta
          name="description"
          content="Introducing GLITCH, the flagship hackathon and a collaboration between the Google Developer Student Clubs (GDSC) and the ACM & ACM-W chapters of Shiv Nadar Institution of Eminence. Participate to seize the opportunity to learn, collaborate and build meaningful projects alongside mentors from various disciplines."
        />
        <link rel="icon" href="/Images/glitchLogo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
