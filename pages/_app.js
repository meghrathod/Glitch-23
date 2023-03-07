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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="og:title" content="Glitch: Where Creativity and Innovation Collide!" />
        <meta name="og:description" content="Introducing GLITCH, the flagship hackathon and a collaboration between the Google Developer Student Clubs (GDSC) and the ACM & ACM-W chapters of Shiv Nadar Institution of Eminence. Participate to seize the opportunity to learn, collaborate and build meaningful projects alongside mentors from various disciplines." />
        <meta name="og:image" content="/Images/og-image.png" />
        <meta name="og:url" content="https://glitch23.live/" />
        <meta name="og:type" content="website" />


        <link rel="icon" href="/Images/glitchLogo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
