import GalleryGrid from './GalleryGrid';

export default function Gallery() {
  return (
    <section className="py-20" id='gallery'>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Leadership Journey</h2>
        <GalleryGrid />
      </div>
    </section>
  );
}