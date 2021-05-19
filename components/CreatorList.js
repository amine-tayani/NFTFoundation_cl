import Creator from "./Creator"

const CreatorList = () => {
  const creators = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <div className=" px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-4">
      <div className="flex justify-between font-inter mb-8 border-black border-b py-4">
        <h1 className="text-2xl font-semibold">Featured creators</h1>

        <a className="font-semibold text-lg text-gray-500 hover:text-gray-800" href="#artworks">
          View all creators
        </a>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {creators.map((creator) => {
          return <Creator key={creator} />
        })}
      </div>
      <div className="flex justify-center my-8">
        <button className="font-inter px-8 py-3 font-medium text-lg text-black duration-200 transform bg-white border-2 border-gray-400 rounded-full focus:outline-none hover:-translate-y-1 hover:shadow-md hover:text-white hover:bg-black">
          View all creators
        </button>
      </div>
    </div>
  )
}

export default CreatorList
