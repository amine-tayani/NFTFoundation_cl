import Card from "./Card";

const Artwork = () => {
  const artworks = [
    "https://f8n-production-collection-assets.imgix.net/0x9ACDC11D6fe9642aB2065a3c7E13415ff26FAff1/5/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
    "https://f8n-production-collection-assets.imgix.net/0x6AD70c2d77386a57C72e7aCd2AE4fc96f5a5a5A1/5/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
    "https://f8n-production-collection-assets.imgix.net/0xF26d2FeF7Ab9849E7F6433cb0C034C5d23768D55/3/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
    "https://f8n-ipfs-production.imgix.net/QmeLGUmrDd4zXLAtgekEzjagKW3Fu7dp3ayXzQbS8ZXa6h/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
    "https://f8n-production-collection-assets.imgix.net/0x8eCa43D2c62725f7b539342b86c76D2d8010C0B9/3/nft.png?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
    "https://f8n-production-collection-assets.imgix.net/0x83eEd04AcD74d301120d74858CC92B62e49eEC3D/2/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
    "https://f8n-ipfs-production.imgix.net/QmVN2FhHZfiWrCr8oSZSjAAdiPAuHnEgYWmQE9zCX2C1aY/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
    "https://f8n-production-collection-assets.imgix.net/0x7dd182AA0384e284Ceb793d6395AB65975C6946a/4/nft.png?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
    "https://f8n-production-collection-assets.imgix.net/0xc1fB22B48403DD024F1a5255a348b72066c31201/4/nft.png?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
    "https://f8n-production-collection-assets.imgix.net/0x119504c8907224fc8138Da0451eD3e8be144f96f/2/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
    "https://f8n-ipfs-production.imgix.net/QmevKWXPqM13uwjbFDDA64KJnKn2RDuuqm29wDJgtuoPeF/nft.png?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
    "https://f8n-production-collection-assets.imgix.net/0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405/131128/QmWdXTaT6BK7vxHs7QhaGbpJAvXk52nwq5s5pPAQ1aT9p1/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&max-w=1680&max-h=1680",
  ];
  return (
    <div className=" px-6 sm:px-4 mx-auto max-w-lg sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-8 lg:px-6 lg:py-16">
      <div className="flex justify-between font-inter mb-8 border-black border-b py-4">
        <h1 className="text-2xl font-semibold">Featured artworks</h1>

        <a
          className="font-semibold text-lg text-gray-500 hover:text-gray-800"
          href="/artworks"
        >
          View all artworks
        </a>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
        {artworks.map((artwork, id) => {
          return <Card key={id} image={artwork} />;
        })}
      </div>
      <div className="flex justify-center my-8">
        <a
          href="/artworks"
          className="font-inter px-8 py-3 font-medium text-lg text-black duration-200 transform bg-white border-2 border-gray-400 rounded-full focus:outline-none hover:-translate-y-1 hover:shadow-xl hover:border-transparent hover:text-white hover:bg-black"
        >
          View all artworks
        </a>
      </div>
    </div>
  );
};

export default Artwork;
