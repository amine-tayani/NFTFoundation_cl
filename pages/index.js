import Head from "next/head"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Feature from "../components/Feature"

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
    </div>
  )
}
