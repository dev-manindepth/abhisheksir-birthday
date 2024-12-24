import { type GalleryItem } from '../../types';

const GALLERY_ITEMS: GalleryItem[] = [
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    title: "Team Celebrations"
  },
  {
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    title: "Leadership Moments"
  },
  {
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    title: "Company Milestones"
  }
];

export default function GalleryGrid() {
  return (
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
  );
}