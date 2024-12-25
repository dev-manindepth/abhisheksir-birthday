import MessageCard from './MessageCard';
import { type Message } from '../../types';
import { useMessages } from '../../context/MessageContext';
import manishProfilePic from '../../assets/manish.jpg';
import suhasProfilePic from '../../assets/suhas.jpg';
import chitrangProfilePic from '../../assets/chitrang.jpg';
import sharmaJiProfilePic from '../../assets/sharmaji.jpg';
import hemaksiDiProfilePic from '../../assets/hemaksidi.jpg';
// export const MESSAGES: Message[] = [
//   {
//     content:
//       'Thank you for inspiring us every day. Wishing you an amazing year ahead!',
//     name: 'Chitrang Sharma',
//     department: 'Lead Frontend Engineering',
//     avatar:
//       'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
//   },
//   {
//     content:
//       'Your dedication and passion drive us all. Happy Birthday to our amazing leader!',
//     name: 'Sharma JI',
//     department: 'Fullstack Engineering',
//     avatar:
//       'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
//   },
//   {
//     content:
//       'Thank you for being an amazing leader. Wishing you a fantastic year ahead',
//     name: 'Manish Kumar',
//     department: 'Frontend Enginnering',
//     avatar:
//       'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
//   },
//   {
//     content:
//       'You are an inspiration to us all. Wishing you a fantastic year ahead!',
//     name: 'Hemaksi Dave',
//     department: 'Backend Engineering',
//     avatar:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
//   },
//   {
//     content: 'Your leadership has been a blessing to us all. Happy Birthday!',
//     name: 'Payal Jain',
//     department: 'Backend Engineering',
//     avatar:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
//   },
//   {
//     content:
//       'Your visionary leadership has transformed our company. Happy Birthday!',
//     name: 'Suhas Khot',
//     department: 'Backend Enginnering',
//     avatar:
//       'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
//   },
// ];

export const MESSAGES: Message[] = [
  {
    content:
      'Thank you for inspiring us every day. Wishing you an amazing year ahead!',
    name: 'Chitrang Sharma',
    department: 'Lead Frontend Engineering',
    avatar: chitrangProfilePic,
  },
  {
    content:
      'Your dedication and passion drive us all. Happy Birthday to our amazing leader!',
    name: 'Sharma JI',
    department: 'Fullstack Engineering',
    avatar: sharmaJiProfilePic,
  },
  {
    content:
      'Thank you for being an amazing leader. Wishing you a fantastic year ahead!',
    name: 'Manish Kumar',
    department: 'Frontend Engineering',
    avatar: manishProfilePic,
  },
  {
    content:
      'You are an inspiration to us all. Wishing you a fantastic year ahead!',
    name: 'Hemaksi Dave',
    department: 'Backend Engineering',
    avatar: hemaksiDiProfilePic,
  },
  {
    content: 'Your leadership has been a blessing to us all. Happy Birthday!',
    name: 'Payal Jain',
    department: 'Backend Engineering',
    avatar:
      'https://ui-avatars.com/api/?name=Payal Jain',
  },
  {
    content:
      'Your visionary leadership has transformed our company. Happy Birthday!',
    name: 'Suhas Khot',
    department: 'Backend Engineering',
    avatar: suhasProfilePic,
  },
];
export default function Messages() {
  const { messages } = useMessages();
  return (
    <section className="py-20 bg-gray-50" id="messages">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Birthday Wishes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {messages.map((message, index) => (
            <MessageCard key={index} message={message} />
          ))}
        </div>
      </div>
    </section>
  );
}
