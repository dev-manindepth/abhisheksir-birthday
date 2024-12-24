
export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Birthdays are <span className="bg-yellow-200 px-2">special days</span> for us because they mark the day we were born, the day our mothers fought to bring us into this world.
          </h2>
          <p className="text-xl">
            We are here ready to be present on your special day, to bring{' '}
            <span className="bg-orange-200 px-2">happiness</span> to the people you cherish.
          </p>
        </div>
        
        <div className="relative rounded-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80" 
            alt="Friends celebrating" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
            <h3 className="text-white text-2xl font-semibold">More Details</h3>
            <p className="text-white/80">We surprise friendly people on their birthdays.</p>
          </div>
        </div>
      </div>
    </section>
  );
}