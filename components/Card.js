import React from "react"
import Profile from "./Profile"

const Card = () => {
  return (
    <div className="flex flex-col justify-between shadow-sh transform transition duration-300 cursor-pointer rounded-xl hover:shadow-lg hover:-translate-y-2 ">
      <img
        src="https://f8n-ipfs-production.imgix.net/QmYxjUD3TJcrJmLAKmnZ5hZL5yk9r19t5WrU5pHfxJ289g/nft.jpg?h=640&q=80"
        alt=""
        className="rounded-t-xl h-96"
      />
      <div className="flex flex-col space-y-4 py-4 px-6">
        <h1 className="font-semibold ml-2 text-2xl font-inter">Sand Gold</h1>
        <Profile style="flex items-center rounded-full w-40 px-2 cursor-pointer transform" />
      </div>
      <div className="flex justify-around p-4 bg-black text-white rounded-b-xl">
        <div>
          <p className="text-lg text-gray-300 font-quick font-bold">Current bid</p>
          <span className="text-lg  font-quick font-bold">0.15 ETH</span>
        </div>
        <div>
          <p className="text-lg text-gray-300 font-quick font-bold">Ending in</p>
          <span className="text-lg  font-quick font-bold">Auction ended</span>
        </div>
      </div>
    </div>
  )
}

export default Card
