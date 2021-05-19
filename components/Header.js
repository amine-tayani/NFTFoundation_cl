const Header = () => {
  return (
    <div className="relative flex flex-col px-4 py-16 mx-auto lg:block lg:flex-col md:px-8 sm:max-w-xl md:max-w-full font-quick">
      <div className=" flex justify-center h-full -mx-20 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
        <video
          className="w-2/3"
          src="https://d2ybmb80bbm9ts.cloudfront.net/D1/Vo/QmPh4z7vjX7fq7j6Bia3eJNf8KqNf1AxgP5Trt7gSmD1Vo/nft.mp4"
          poster="https://d2ybmb80bbm9ts.cloudfront.net/D1/Vo/QmPh4z7vjX7fq7j6Bia3eJNf8KqNf1AxgP5Trt7gSmD1Vo/nft.jpg"
          playsinline
          autoplay="1"
          muted
          loop
        ></video>
      </div>
      <div className="relative flex justify-end max-w-xl mx-auto xl:pr-14 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div className="popover__wrapper">
              <div className=" transform flex items-center shadow-sh rounded-full w-40 px-2 py-1 mb-4 transition duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <img
                  src="https://f8n-production.imgix.net/creators/profile/604qgsmmg-screen-shot-2021-04-04-at-11-16-22-pm-png-phpnw5.png"
                  alt=""
                  className=" w-10 h-10 border rounded-full"
                />

                <p className=" px-2 text-base font-semibold rounded-full">@elliepritts</p>
              </div>

              <div class="popover__content px-4 py-3 bg-white rounded-md shadow-md ">
                <div class="flex items-center justify-between p-4 ">
                  <img
                    class=" object-cover w-20 h-20 rounded-full"
                    src="https://f8n-production.imgix.net/creators/profile/604qgsmmg-screen-shot-2021-04-04-at-11-16-22-pm-png-phpnw5.png"
                    alt="avatar"
                  />
                  <button className=" px-8 py-3 font-bold text-lg  text-black  duration-200 transform border-2 rounded-full focus:outline-none hover:-translate-y-1 hover:shadow-md hover:bg-black hover:text-white">
                    Follow
                  </button>
                </div>
                <div className="flex flex-col p-2 space-y-6">
                  <div>
                    <h1 className="text-4xl font-semibold font-inter">elliepritts</h1>
                    <h2 className="text-2xl font-bold text-gradient rainbow-text font-sans">
                      @elliepritts
                    </h2>
                  </div>
                  <p className="text-sm font-medium font-inter">
                    ellie pritts is an interdisciplinary artist and composer interested in the
                    nature of immateriality and being. Represented b…
                  </p>
                  <div className="flex space-x-4 items-center">
                    <p className="font-bold">Followed by</p>
                    <div className="flex -space-x-2">
                      <img
                        src="https://images.generated.photos/syc9o2f_obuIoFJBYnGFwnKNNz9LrnKDZcIfhnclJXM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTMwMzBfMDA2/MzYzNl8wMTU5Nzkx/LmpwZw.jpg"
                        alt=""
                        className="w-8 h-8 border rounded-full border-coolGray-300"
                      />
                      <img
                        src="https://images.generated.photos/syc9o2f_obuIoFJBYnGFwnKNNz9LrnKDZcIfhnclJXM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTMwMzBfMDA2/MzYzNl8wMTU5Nzkx/LmpwZw.jpg"
                        alt=""
                        className="w-8 h-8 border rounded-full border-coolGray-300"
                      />
                      <img
                        src="https://images.generated.photos/syc9o2f_obuIoFJBYnGFwnKNNz9LrnKDZcIfhnclJXM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTMwMzBfMDA2/MzYzNl8wMTU5Nzkx/LmpwZw.jpg"
                        alt=""
                        className="w-8 h-8 border rounded-full border-coolGray-300"
                      />
                      <img
                        src="https://images.generated.photos/syc9o2f_obuIoFJBYnGFwnKNNz9LrnKDZcIfhnclJXM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTMwMzBfMDA2/MzYzNl8wMTU5Nzkx/LmpwZw.jpg"
                        alt=""
                        className="w-8 h-8 border rounded-full border-coolGray-300"
                      />
                      <img
                        src="https://images.generated.photos/syc9o2f_obuIoFJBYnGFwnKNNz9LrnKDZcIfhnclJXM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTMwMzBfMDA2/MzYzNl8wMTU5Nzkx/LmpwZw.jpg"
                        alt=""
                        className="w-8 h-8 border rounded-full border-coolGray-300"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-5 border-t p-4 w-full">
                    <div className="flex flex-col -space-y-1">
                      <span className="font-inter text-lg font-bold">32</span>
                      <p className="font-bold text-base text-gray-600">Following</p>
                    </div>
                    <div className="flex flex-col -space-y-1">
                      <span className="font-inter text-lg font-bold">10</span>
                      <p className="font-bold text-base text-gray-600">Followers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="mb-8 text-6xl font-semibold font-inter text-gray-900 sm:leading-none">
              home
            </h2>
            <div className="flex flex-col space-y-2 text-black">
              <h4 className="text-base font-semibold ">Reserve Price</h4>
              <p className="text-4xl font-bold font-inter">0.50 ETH</p>
              <h4 className="text-xl font-semibold text-gray-500 font-quick tracking-wide">
                $1,682.78
              </h4>
            </div>
          </div>
          <div className="flex flex-col md:flex-row ">
            <button className="inline-block text-center h-14 px-24 duration-200 transform bg-black text-white rounded-xl focus:outline-none hover:-translate-y-1 hover:shadow-md md:mr-2 focus:shadow-outline font-semibold">
              Place a bid
            </button>
            <button className="inline-block text-center h-14 px-12 py-1 duration-200 transform border-2 border-black text-black rounded-xl focus:outline-none hover:-translate-y-1 hover:shadow-md md:mr-2 focus:shadow-outline hover:bg-black hover:text-white font-semibold">
              View artwork
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
