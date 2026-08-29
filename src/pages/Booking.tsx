import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { rooms } from '../data/rooms';

export default function Booking() {
  const { booking, updateBooking } = useBooking();
  const [step, setStep] = useState(1);
  const [guestDetails, setGuestDetails] = useState({ firstName: '', lastName: '', email: '', phone: '' });

  const calculateTotal = () => {
    if (!booking.selectedRoomId) return 0;
    const room = rooms.find(r => r.id === booking.selectedRoomId);
    return room ? room.price * 1 : 0; // Assuming 1 night for MVP simplicity
  };

  const handleConfirm = () => {
    alert('Booking Confirmed! Reservation: AGH-2026-48291');
    window.location.href = '/';
  };

  return (
    <div className="pt-32 pb-24 bg-warm-ivory min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-serif mb-10 text-center">COMPLETE YOUR STAY</h1>
        
        <div className="bg-white p-8 shadow-sm">
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in">
              <h2 className="text-xl font-serif mb-4 border-b pb-2">Step 1: Select Room</h2>
              <div className="space-y-4">
                {rooms.map(room => (
                  <div key={room.id} className={`border p-4 flex justify-between items-center cursor-pointer transition-colors ${booking.selectedRoomId === room.id ? 'border-champagne-gold bg-champagne-gold/5' : 'hover:border-gray-300'}`} onClick={() => updateBooking({ selectedRoomId: room.id })}>
                    <div>
                      <h3 className="font-serif text-lg">{room.name}</h3>
                      <p className="text-sm text-gray-500 font-light">₹{room.price.toLocaleString()} / night</p>
                    </div>
                    <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                      {booking.selectedRoomId === room.id && <div className="w-3 h-3 bg-champagne-gold rounded-full" />}
                    </div>
                  </div>
                ))}
              </div>
              <button disabled={!booking.selectedRoomId} onClick={() => setStep(2)} className="w-full bg-deep-charcoal text-white py-3 uppercase tracking-widest text-sm disabled:opacity-50 mt-6">Continue</button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in">
              <h2 className="text-xl font-serif mb-4 border-b pb-2">Step 2: Guest Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="border p-3 w-full font-light focus:outline-none focus:border-champagne-gold" value={guestDetails.firstName} onChange={e => setGuestDetails({...guestDetails, firstName: e.target.value})} />
                <input type="text" placeholder="Last Name" className="border p-3 w-full font-light focus:outline-none focus:border-champagne-gold" value={guestDetails.lastName} onChange={e => setGuestDetails({...guestDetails, lastName: e.target.value})} />
                <input type="email" placeholder="Email Address" className="border p-3 w-full font-light focus:outline-none focus:border-champagne-gold col-span-2" value={guestDetails.email} onChange={e => setGuestDetails({...guestDetails, email: e.target.value})} />
                <input type="tel" placeholder="Phone Number" className="border p-3 w-full font-light focus:outline-none focus:border-champagne-gold col-span-2" value={guestDetails.phone} onChange={e => setGuestDetails({...guestDetails, phone: e.target.value})} />
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="w-1/3 border border-deep-charcoal text-deep-charcoal py-3 uppercase tracking-widest text-sm">Back</button>
                <button disabled={!guestDetails.firstName || !guestDetails.email} onClick={() => setStep(3)} className="w-2/3 bg-deep-charcoal text-white py-3 uppercase tracking-widest text-sm disabled:opacity-50">Review Booking</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in">
              <h2 className="text-xl font-serif mb-4 border-b pb-2">Step 3: Review</h2>
              <div className="bg-gray-50 p-6 space-y-4 font-light text-sm">
                <div className="flex justify-between">
                  <span>Room</span>
                  <span>{rooms.find(r => r.id === booking.selectedRoomId)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Price</span>
                  <span>₹{calculateTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes (18%)</span>
                  <span>₹{(calculateTotal() * 0.18).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg font-medium pt-4 border-t border-gray-200">
                  <span>Total</span>
                  <span>₹{(calculateTotal() * 1.18).toLocaleString()}</span>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <button onClick={() => setStep(2)} className="w-1/3 border border-deep-charcoal text-deep-charcoal py-3 uppercase tracking-widest text-sm">Back</button>
                <button onClick={handleConfirm} className="w-2/3 bg-champagne-gold text-white py-3 uppercase tracking-widest text-sm">Confirm Reservation</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}