
const PartnersSection = () => {
  const partners = [
    {
      name: "BitLabs",
      logo: "/lovable-uploads/17272484-f0bc-4233-b7c2-9634c4fbd7c1.png",
      description: "Premium surveys and high-paying offers"
    },
    {
      name: "CPX Research",
      logo: "/lovable-uploads/692fb33c-00d9-4fb8-a277-e521f3965fda.png",
      description: "Market research surveys worldwide"
    },
    {
      name: "TimeWall",
      logo: "/lovable-uploads/c5e1982e-6b26-428b-acc6-4f001bb9f420.png",
      description: "Instant tasks and quick rewards"
    },
    {
      name: "Wannads",
      logo: "/lovable-uploads/ad6b20ba-21ae-4f22-a40d-5c18ab6ca4e6.png",
      description: "Mobile app installs and gaming offers"
    },
    {
      name: "NotikMe",
      logo: "/lovable-uploads/705f5858-1391-4d43-8fc5-48831c4963bf.png",
      description: "Video ads and engagement tasks"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient">Trusted Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with industry-leading offerwall providers to bring you the highest-paying and most reliable tasks available.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-gray-50 to-white border border-gray-100"
            >
              <div className="mb-4 flex items-center justify-center h-16">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="max-h-12 w-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 font-medium">
            Powered by the most trusted names in the industry • Millions of tasks completed daily
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
