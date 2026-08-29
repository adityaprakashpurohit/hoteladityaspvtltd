import React, { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-32 pb-24 bg-warm-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif mb-6 text-deep-charcoal">WE'RE HERE TO HELP.</h1>
          <p className="text-gray-600 font-light text-lg max-w-2xl mx-auto">Get in touch with us for inquiries, special requests, or assistance with your reservation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-serif mb-8">Contact Information</h2>
            <div className="space-y-6 font-light text-gray-600">
              <div>
                <h4 className="font-medium text-deep-charcoal mb-1 uppercase tracking-widest text-sm">Address</h4>
                <p>Aurelia Grand Hotel<br/>123 Luxury Avenue<br/>Bhubaneswar, Odisha<br/>India</p>
              </div>
              <div>
                <h4 className="font-medium text-deep-charcoal mb-1 uppercase tracking-widest text-sm">Phone</h4>
                <p>+91 90000 00000</p>
              </div>
              <div>
                <h4 className="font-medium text-deep-charcoal mb-1 uppercase tracking-widest text-sm">Email</h4>
                <p>stay@aureliagrand.com</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 shadow-sm">
            {sent ? (
              <div className="text-center py-20">
                <h3 className="text-2xl font-serif mb-4 text-green-700">Message Sent</h3>
                <p className="font-light text-gray-600">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-6">
                <input required type="text" placeholder="Your Name" className="w-full border p-3 font-light text-sm focus:border-champagne-gold outline-none" />
                <input required type="email" placeholder="Your Email" className="w-full border p-3 font-light text-sm focus:border-champagne-gold outline-none" />
                <input type="text" placeholder="Subject" className="w-full border p-3 font-light text-sm focus:border-champagne-gold outline-none" />
                <textarea required placeholder="Message" rows={5} className="w-full border p-3 font-light text-sm focus:border-champagne-gold outline-none resize-none"></textarea>
                <button type="submit" className="w-full bg-deep-charcoal text-white py-4 uppercase tracking-widest text-sm">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}