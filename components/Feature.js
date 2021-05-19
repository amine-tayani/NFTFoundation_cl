import Card from "./Card"

const Feature = () => {
  const auctions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-16">
      <div className="flex justify-between font-inter mb-8 border-black border-b py-4">
        <div className="flex items-center space-x-6">
          <span class="animate-ping rounded-full h-2 w-2 bg-black"></span>
          <h1 className="text-2xl font-semibold">Live auctions</h1>
        </div>

        <a className="font-semibold text-lg text-gray-500 hover:text-gray-800" href="#auctions">
          View all live auctions
        </a>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {auctions.map(() => {
          return <Card />
        })}
      </div>
    </div>
  )
}

export default Feature
