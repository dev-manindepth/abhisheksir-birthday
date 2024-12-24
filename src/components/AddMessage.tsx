
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast, Toaster } from 'sonner';
import { Message } from '../types';
import { useMessages } from '../context/MessageContext';

export function AddMessage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const { addMessage } = useMessages();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMessage: Message = {
      content: message,
      name: name, 
      department: 'Software Engineering', 
      avatar: 'https://i.pravatar.cc/300',
    };
    addMessage(newMessage)
    toast.success('Birthday wish sent successfully!', {
      position: 'top-center',
    });
    setName('');
    setMessage('');
    document.getElementById('messages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-50" id="add-message">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-xl mx-auto bg-white">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-center mb-6">
                Send Your Birthday Wishes
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Birthday Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="min-h-[100px]"
                  />
                </div>
                <Toaster />
                <Button type="submit" className="w-full bg-black text-white">
                  Send Wishes
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
