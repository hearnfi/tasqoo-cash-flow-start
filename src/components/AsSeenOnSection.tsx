
const AsSeenOnSection = () => {
  const mediaLogos = [
    {
      name: "AdnKronos",
      logo: "/lovable-uploads/12201507-b6eb-46d6-8b73-eaf90b16d6a6.png",
      description: "Featured in major news outlets"
    },
    {
      name: "Benzinga",
      logo: "/lovable-uploads/e470f6d0-0bde-4189-99b5-bb17385b3de2.png",
      description: "Recognized by financial media"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl font-medium text-gray-600 mb-8">As Seen On</h2>
          
          <div className="flex items-center justify-center space-x-12 md:space-x-16">
            {mediaLogos.map((media, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <img 
                  src={media.logo} 
                  alt={`${media.name} logo`}
                  className="h-8 md:h-10 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          
          <p className="text-gray-500 text-sm mt-6 max-w-2xl mx-auto">
            Tasqoo has been featured in leading media outlets for our innovative approach to online earning
          </p>
        </div>
      </div>
    </section>
  );
};

export default AsSeenOnSection;
