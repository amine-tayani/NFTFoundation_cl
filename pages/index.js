import Head from "next/head"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Feature from "../components/Feature"
import Artwork from "../components/Artwork"
import CreatorList from "../components/CreatorList"
import Articles from "../components/Articles"
import CreatorSection from "../components/CreatorSection"

export default function Home() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <title>foundation project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Feature />
      <Artwork />
      <CreatorList />
      <Articles />
      <CreatorSection />
    </div>
  )
}
