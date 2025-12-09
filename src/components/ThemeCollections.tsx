const collections = [
  {
    id: 1,
    title: 'Butter Yellow Drop',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    bgColor: 'from-yellow-100 to-yellow-200',
  },
  {
    id: 2,
    title: 'Zip Up Classics',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
    bgColor: 'from-blue-100 to-gray-200',
  },
  {
    id: 3,
    title: 'Summer Volume 2',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    bgColor: 'from-cyan-100 to-blue-200',
  },
];

const ThemeCollections = () => {
  return (
    <section id="collections" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Featured Collections
          </h2>
          <p className="text-muted-foreground text-lg">
            Curated styles for every mood and season
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative h-[500px] overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {collection.title}
                </h3>
                <button className="text-white underline underline-offset-4 hover:text-gray-200 transition-colors font-medium">
                  Explore Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemeCollections;
