import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { rooms } from '../data/rooms';

export default function RoomDetails() {
  const { id } = useParams();
  const room = rooms.find(r => r.id === id);

  if (!room) return <div className="pt-40 text-center text-2xl font-serif min-h-screen">Room not found</div>;

  return (
    <div className="pt-24 bg-warm-ivory min-h-screen pb-24">
      <div className="w-full h-[60vh] relative">
        <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
      </div>
      <div className="max-w-5xl mx-auto px-6 -mt-20 relative z-10 bg-white p-8 md:p-16 shadow-sm">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 text-deep-charcoal text-center">{room.name}</h1>
        <p className="text-center text-gray-500 uppercase tracking-widest text-sm mb-12">
          {room.size} · {room.guests} Guests · {room.bed} · {room.view}
        </p>
        <div className="prose prose-lg mx-auto font-light text-gray-600 text-center mb-16">
          <p>{room.description}</p>
        </div>
        
        <div className="border-t border-gray-100 pt-16">
          <h3 className="text-2xl font-serif text-center mb-10">Room Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-600 font-light text-sm">
            {room.amenities.map(amenity => (
              <div key={amenity} className="p-4 border border-gray-100 bg-gray-50/50">{amenity}</div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center border-t border-gray-100 pt-16">
          <p className="text-2xl font-medium mb-6">Starts from ₹{room.price.toLocaleString()} / night</p>
          <Link to="/booking" className="inline-block bg-deep-charcoal text-white px-12 py-4 uppercase tracking-widest text-sm hover:bg-champagne-gold transition-colors">Book This Room</Link>
        </div>
      </div>
    </div>
  );
}