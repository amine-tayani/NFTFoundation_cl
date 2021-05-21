import Head from "next/head"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Search from "../components/Search"
import Creator from "../components/Creator"

export default function Creators() {
  var c

  const creators = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17]

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <title>Foundation | creators page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Search />
      <div className=" px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 mb-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {creators.map((creator) => {
            return <Creator key={creator} />
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}
