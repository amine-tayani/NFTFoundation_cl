import Card from "./Card";

const Feature = () => {
  const auctions = [
    "https://f8n-production-collection-assets.imgix.net//0x134c2a25E3566947Afc25C21C01F84562E0dd5E3/16/QmaRrVFnMPDD2fJdMGMfkDg1YhGvZgrU84ZnSmez4iB5Pd/nft.jpg",
    "https://f8n-production-collection-assets.imgix.net//0xD3E7e362ba87aeb0c7E7cb881709E8E73998501C/2/nft.png",
    "https://f8n-production-collection-assets.imgix.net//0xDa2209C990F03Aed46809e59e515B52259E0EB60/17/nft.png",
    "https://f8n-production-collection-assets.imgix.net//0xeB9F27fCBB70Fb8CE043798fc024E1E91ea9c743/1/QmSUh7MSUHJfjR7LsjKQmj2rStFc1ADaeo8NALPDcWXrwn/nft.png",
    "https://f8n-production-collection-assets.imgix.net//0x2dDcFC9C6d5FEde1E7f769c3eDdDe40d604c754b/2/nft.jpg",
    "https://f8n-production-collection-assets.imgix.net//0x06bfCbf75c40b05095E32ca2e09710ccC92feB68/2/nft.jpg",
    "https://f8n-production-collection-assets.imgix.net//0x8aEe6D40453c0188F1b90d3B0614843e585F3122/9/nft.jpg",
    "https://f8n-production-collection-assets.imgix.net//0x398034C799Fad7FDC4695C8Eb8bEc713eBed9Da4/124/nft.jpg",
    "https://f8n-production-collection-assets.imgix.net//0xc956f420671f27B80ea242ecff9B87A5f4E2032d/3/nft.jpg",
    "https://f8n-production-collection-assets.imgix.net//0x366cA5f64C332368f598b0b554ae79599f16388A/2/nft.jpg",
    "https://f8n-production-collection-assets.imgix.net//0xA7377f1668Fff6E0b6a6593854e5752c0382abFc/1/Qmf5DEtJsC953FgcqSRvxR6XVKR18WWfqVo6zuaAfwPxqE/nft.jpg",
    "https://f8n-production-collection-assets.imgix.net//0x05FaF5b58F5940DC73C6D73267CB9C5681bEBc5E/1/nft.png",
    "https://f8n-production-collection-assets.imgix.net//0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405/131128/QmWdXTaT6BK7vxHs7QhaGbpJAvXk52nwq5s5pPAQ1aT9p1/nft.jpg",
    "https://f8n-production-collection-assets.imgix.net//0xc1fB22B48403DD024F1a5255a348b72066c31201/4/nft.png",
    "https://f8n-production-collection-assets.imgix.net//0xD1A419aA47Ab5A9Ab3B5f3565396Ad7874F5df23/20/nft.jpg",
    "https://f8n-ipfs-production.imgix.net/QmbuJYsBVpuAJqHKZr5C3VNTxkZdBf77SXjtzQkjkFVeDd/nft.png",
    "https://f8n-production-collection-assets.imgix.net//0x134c2a25E3566947Afc25C21C01F84562E0dd5E3/16/QmaRrVFnMPDD2fJdMGMfkDg1YhGvZgrU84ZnSmez4iB5Pd/nft.jpg",
    "https://f8n-production-collection-assets.imgix.net//0xD3E7e362ba87aeb0c7E7cb881709E8E73998501C/2/nft.png",
    "https://f8n-production-collection-assets.imgix.net//0xDa2209C990F03Aed46809e59e515B52259E0EB60/17/nft.png",
    "https://f8n-production-collection-assets.imgix.net//0xeB9F27fCBB70Fb8CE043798fc024E1E91ea9c743/1/QmSUh7MSUHJfjR7LsjKQmj2rStFc1ADaeo8NALPDcWXrwn/nft.png",
    "https://f8n-production-collection-assets.imgix.net//0x2dDcFC9C6d5FEde1E7f769c3eDdDe40d604c754b/2/nft.jpg",
    "https://f8n-production-collection-assets.imgix.net//0x06bfCbf75c40b05095E32ca2e09710ccC92feB68/2/nft.jpg",
    "https://f8n-production-collection-assets.imgix.net//0x8aEe6D40453c0188F1b90d3B0614843e585F3122/9/nft.jpg",
    "https://f8n-production-collection-assets.imgix.net//0x398034C799Fad7FDC4695C8Eb8bEc713eBed9Da4/124/nft.jpg",
    "https://f8n-production-collection-assets.imgix.net//0xc956f420671f27B80ea242ecff9B87A5f4E2032d/3/nft.jpg",
    "https://f8n-production-collection-assets.imgix.net//0x366cA5f64C332368f598b0b554ae79599f16388A/2/nft.jpg",
    "https://f8n-production-collection-assets.imgix.net//0xA7377f1668Fff6E0b6a6593854e5752c0382abFc/1/Qmf5DEtJsC953FgcqSRvxR6XVKR18WWfqVo6zuaAfwPxqE/nft.jpg",
    "https://f8n-production-collection-assets.imgix.net//0x05FaF5b58F5940DC73C6D73267CB9C5681bEBc5E/1/nft.png",
    "https://f8n-production-collection-assets.imgix.net//0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405/131128/QmWdXTaT6BK7vxHs7QhaGbpJAvXk52nwq5s5pPAQ1aT9p1/nft.jpg",
    "https://f8n-production-collection-assets.imgix.net//0xc1fB22B48403DD024F1a5255a348b72066c31201/4/nft.png",
    "https://f8n-production-collection-assets.imgix.net//0xD1A419aA47Ab5A9Ab3B5f3565396Ad7874F5df23/20/nft.jpg",
    "https://f8n-ipfs-production.imgix.net/QmbuJYsBVpuAJqHKZr5C3VNTxkZdBf77SXjtzQkjkFVeDd/nft.png",
  ];
  return (
    <div className="px-6 sm:px-4 mx-auto max-w-lg sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-8 lg:px-6 lg:py-16">
      <div className="flex justify-between font-inter mb-8 border-black border-b py-4">
        <div className="flex items-center space-x-6">
          <span className="animate-ping rounded-full h-2 w-2 bg-black"></span>
          <h1 className="text-2xl font-semibold">Live auctions</h1>
        </div>

        <a
          className="font-semibold text-lg text-gray-500 hover:text-gray-800"
          href="#"
        >
          View all live auctions
        </a>
      </div>
      <div className=" grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {auctions.map((auction, idx) => {
          return <Card key={idx} image={auction} />;
        })}
      </div>
      <div className="flex justify-center my-8">
        <button className="font-inter px-8 py-3 font-medium text-lg text-black duration-200 transform bg-white border-2 border-gray-400 rounded-full focus:outline-none hover:-translate-y-1 hover:shadow-xl hover:border-transparent hover:text-white  hover:bg-black">
          View all live auctions
        </button>
      </div>
    </div>
  );
};

export default Feature;
