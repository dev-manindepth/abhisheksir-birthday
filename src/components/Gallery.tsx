
const GALLERY_ITEMS = [
  {
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
    title: "Birthday Party"
  },
  {
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80",
    title: "Surprise Gift"
  },
  {
    image: "https://images.unsplash.com/photo-1539758462369-43adaa19bc1f?auto=format&fit=crop&w=800&q=80",
    title: "Family Time"
  }
];

export default function Gallery() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Happy Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-80 object-cover transition group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-white text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}