import { type Message } from '../../types';

export default function MessageCard({ message }: { message: Message }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <p className="text-gray-700 mb-4">{message.content}</p>
      <div className="flex items-center gap-3">
        <img 
          src={message.avatar} 
          alt={message.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">{message.name}</h4>
          <p className="text-sm text-gray-500">{message.department}</p>
        </div>
      </div>
    </div>
  );
}