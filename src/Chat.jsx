/* eslint-disable react/prop-types */
import { useState } from 'react';

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex mt-4 gap-2 justify-end w-full">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={handleKeyPress}
        className="flex-grow p-4 border rounded-lg bg-white w-full"
        placeholder="Type your message..."
      />
      <button onClick={handleSend} className="bg-red-600 text-white p-2 rounded-lg">
        Send
      </button>
    </div>
  );
};

const ChatMessage = ({ message, isUser }) => {
  return (
    <div className={`p-4 my-2 rounded-lg max-w-[80%] clear-both relative ${isUser ? 'bg-red-600 text-white self-end rounded-br-none shadow-xl' : 'bg-neutral-500 text-white self-start rounded-bl-none shadow-xl'}`}>
      {message}
      <div className={`absolute w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent ${isUser ? 'border-l-8 border-l-red-600 right-0 -mr-2' : 'border-r-8 border-r-neutral-500 left-0 -ml-2'}`}></div>
    </div>
  );
};

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = async (message) => {
    setMessages([...messages, { text: message, isUser: true }]);
    
    try {
      const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      const botMessage = data.text.trim();
      setMessages((prevMessages) => [...prevMessages, { text: botMessage, isUser: false }]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
    }
  };

  return (
    <div className='p-10 h-screen w-full'>
      <div className='flex flex-col'>
        <div className='bg-teal-600 shadow-lg p-4 rounded-t-lg rounded-b-none text-white text-center'>
          <h1 className='text-2xl font-bold'>Chat with the Bot</h1>
        </div>
        <div className="bg-blue-800 px-4 pb-4 rounded-b-lg shadow-lg flex flex-col">
          <div className="flex flex-col flex-grow overflow-y-auto h-[75vh] px-3">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center text-white h-full">No messages yet</div>
            ) : (
              messages.map((msg, index) => (
                <>
                  <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
                  <div ref={(el) => {
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }} />
                </>
              ))
            )}
          </div>
          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
