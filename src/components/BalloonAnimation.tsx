
interface Balloon {
  id: number;
  x: number;
  color: string;
  delay: number;
}

const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5' , '#FFA07A', '#FF82A9', '#FFD700', '#FF6347', '#FF69B4', '#FF4500', '#FF69B4', '#FF6347'];

export const BalloonAnimation = () => {
  const balloons: Balloon[] = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: colors[Math.floor(Math.random() * colors.length)],
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute bottom-0 animate-float"
          style={{
            left: `${balloon.x}%`,
            animationDelay: `${balloon.delay}s`,
            color: balloon.color,
          }}
        >
          <div className="relative w-8 h-10">
            <div
              className="absolute w-8 h-10 rounded-full"
              style={{ backgroundColor: balloon.color }}
            />
            <div
              className="absolute bottom-0 left-1/2 w-0.5 h-12 -translate-x-1/2"
              style={{ backgroundColor: balloon.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};