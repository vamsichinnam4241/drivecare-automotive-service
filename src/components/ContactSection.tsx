import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === 'name') {
      const val = e.target.value;
      if (val !== '' && !/^[a-zA-Z\s]*$/.test(val)) {
        return;
      }
      if (val.length > 25) {
        return;
      }
    }
    if (e.target.name === 'phone') {
      const val = e.target.value;
      if (val !== '' && !/^[0-9\s+]*$/.test(val)) {
        return;
      }
      const plusCount = (val.match(/\+/g) || []).length;
      if (plusCount > 1) {
        return;
      }
      const digitsOnly = val.replace(/[^0-9]/g, '');
      if (digitsOnly.length > 15) {
        return;
      }
      if (digitsOnly.length === 15) {
        const lastChar = val[val.length - 1];
        if (lastChar && lastChar !== ' ' && lastChar !== '+' && !/[0-9]/.test(lastChar)) {
          return;
        }
      }
    }
    if (e.target.name === 'email') {
      const val = e.target.value;
      if (val !== '' && !/^[a-zA-Z0-9@.]*$/.test(val)) {
        return;
      }
      if (val.length > 35) {
        return;
      }
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: string[] = [];

    // Name Validation (Max 25 characters, letters only)
    const nameVal = formData.name; // Keep original check without trim to check spaces if they typed them
    if (!nameVal) {
      errors.push('Name is required.');
    } else if (nameVal.length > 25) {
      errors.push('Name must be 25 characters or less.');
    } else if (!/^[a-zA-Z\s]+$/.test(nameVal)) {
      errors.push('Name can only contain letters and spaces (no numbers or special characters).');
    }

    // Mobile Number Validation
    const phoneVal = formData.phone;
    if (!phoneVal) {
      errors.push('Mobile number is required.');
    } else {
      const hasLetters = /[a-zA-Z]/.test(phoneVal);
      const hasInvalidChars = /[^0-9\s+]/.test(phoneVal);
      const plusCount = (phoneVal.match(/\+/g) || []).length;
      const digitsOnly = phoneVal.replace(/[^0-9]/g, '');
      const digitLength = digitsOnly.length;

      if (hasLetters) {
        errors.push('Mobile number cannot contain letters.');
      } else if (hasInvalidChars) {
        errors.push('Mobile number cannot contain special characters (except spaces and "+").');
      } else if (plusCount > 1) {
        errors.push("Mobile number can contain at most one '+' symbol.");
      } else if (phoneVal.includes('+') && !phoneVal.startsWith('+')) {
        errors.push("The '+' symbol is only allowed at the start of the mobile number.");
      } else if (digitLength < 8 || digitLength > 15) {
        errors.push('Mobile number must contain between 8 and 15 digits.');
      } else {
        let digitCount = 0;
        let lastDigitIndex = -1;
        for (let i = 0; i < phoneVal.length; i++) {
          if (/[0-9]/.test(phoneVal[i])) {
            digitCount++;
            if (digitCount === 15) {
              lastDigitIndex = i;
              break;
            }
          }
        }
        if (lastDigitIndex !== -1 && lastDigitIndex < phoneVal.length - 1) {
          errors.push('No characters or spaces are allowed after the 15th digit.');
        }
      }
    }

    // Mail/Email Validation
    const emailVal = formData.email.trim();
    const emailLower = emailVal.toLowerCase();
    if (!emailVal) {
      errors.push('Email is required.');
    } else {
      const hasOtherSpecialChars = /[^a-zA-Z0-9@.]/.test(emailVal);
      const atCount = (emailLower.match(/@/g) || []).length;
      const isValidDomain = emailLower.endsWith('@gmail.com') || emailLower.endsWith('@yahoo.com') || emailLower.endsWith('@outlook.com');

      if (emailVal.length > 35) {
        errors.push('Email must be 35 characters or less.');
      } else if (hasOtherSpecialChars) {
        errors.push("Email cannot contain special characters other than '@' and '.'");
      } else if (atCount !== 1) {
        errors.push("Email must contain exactly one '@' symbol.");
      } else if (!isValidDomain) {
        errors.push('Email must end with @gmail.com, @yahoo.com, or @outlook.com.');
      }
    }

    if (errors.length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors([]);
    setFormSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact-us-view" className="py-16 bg-slate-50 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-brand-red font-mono">
            WE ARE LOCATED HERE
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-charcoal mt-2 mb-4">
            Contact Us & Find DriveCare
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Drop by our workshop for an on-site diagnosis or reach out via our response form. We respond to all digital inquiries within 2 hours.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block: Contact Details, Operating Hours & Small Map */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-brand-red text-white rounded-2xl p-4 sm:p-5 border border-brand-red/10 shadow-sm space-y-4 text-sm">
              <h3 className="font-display font-extrabold text-lg text-white border-b border-white/10 pb-2">
                DriveCare Headquarters
              </h3>

              {/* Physical Channels */}
              <div className="space-y-3">
                
                {/* Phone */}
                <a
                  id="contact-phone-link"
                  href="tel:+91XXXXXXXXXX"
                  className="flex gap-3 items-start group hover:text-brand-amber transition-colors duration-200"
                >
                  <div className="p-2 bg-white/10 text-white rounded-lg group-hover:bg-white/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-red-200 uppercase tracking-widest block font-mono">
                      Call Support
                    </span>
                    <span className="font-display font-bold text-xs sm:text-sm text-white group-hover:text-brand-amber font-mono">
                      +91 XXXXXXXXXX
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  id="contact-email-link"
                  href="mailto:support@drivecare.com"
                  className="flex gap-3 items-start group hover:text-brand-amber transition-colors duration-200"
                >
                  <div className="p-2 bg-white/10 text-white rounded-lg group-hover:bg-white/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-red-200 uppercase tracking-widest block font-mono">
                      Email Address
                    </span>
                    <span className="font-display font-bold text-xs sm:text-sm text-white group-hover:text-brand-amber">
                      support@drivecare.com
                    </span>
                  </div>
                </a>

                {/* Physical Address (Clickable) */}
                <a
                  href="https://maps.google.com/?q=Miyapur,Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 items-start group hover:text-brand-amber transition-colors duration-200"
                >
                  <div className="p-2 bg-white/10 text-white rounded-lg group-hover:bg-white/20 transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-bold text-red-200 uppercase tracking-widest block font-mono">
                      Workshop Address
                    </span>
                    <span className="font-display font-bold text-xs sm:text-sm text-white leading-relaxed block group-hover:underline">
                      Hyderabad, Miyapur
                    </span>
                  </div>
                </a>

              </div>

              {/* Operating Hours */}
              <div className="border-t border-white/10 pt-4 space-y-2">
                <div className="flex items-center gap-2 text-white font-display font-bold text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  Operating Hours
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-red-200 block">Mon — Fri:</span>
                    <span className="font-bold text-white">8:00 AM — 7:00 PM</span>
                  </div>
                  <div>
                    <span className="text-red-200 block">Saturday:</span>
                    <span className="font-bold text-white">9:00 AM — 5:00 PM</span>
                  </div>
                  <div className="col-span-2 bg-white/10 text-white py-1.5 px-2 rounded-lg font-semibold mt-1 text-center">
                    ★ Sunday: CLOSED
                  </div>
                </div>
              </div>

            </div>

            {/* Small Embedded Map Frame (Fully Clickable Link) */}
            <a
              href="https://maps.google.com/?q=Miyapur,Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative rounded-2xl overflow-hidden shadow-md border-2 border-brand-red aspect-[21/6] w-full cursor-pointer hover:shadow-lg transition-shadow group bg-slate-900"
            >
              <div className="absolute inset-0 bg-transparent z-10"></div>
              <iframe
                title="DriveCare Google Map Headquarters"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.297401344445!2d78.34913757516629!3d17.49329718341147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a479e0bf0d%3A0x6e2df4a1efd41cd0!2sMiyapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none"
              ></iframe>
            </a>
          </div>

          {/* Right Block: Contact Form Validation */}
          <div className="lg:col-span-7">
            <div id="contact-form-container" className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/60 shadow-sm text-left">
              <h3 className="font-display font-extrabold text-xl text-brand-charcoal mb-2">
                Send Us a Digital Inquiry
              </h3>
              <p className="text-xs text-gray-400 mb-6">
                Fill out the fields below. Name, Mobile Number, and Email are required.
              </p>

              {formSubmitted ? (
                <div id="contact-submit-success" className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl text-center space-y-3">
                  <div className="p-3 bg-emerald-500 text-white rounded-full inline-block animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-brand-charcoal text-base">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-sm mx-auto">
                    Thanks for writing in! One of our service advisors will contact you back shortly within 2 hours.
                  </p>
                  <button
                    id="contact-reset-btn"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-brand-red underline cursor-pointer uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="garage-contact-form" onSubmit={handleFormSubmit} className="space-y-4">
                  
                  {/* Errors block */}
                  {formErrors.length > 0 && (
                    <div className="bg-red-50 border-l-4 border-brand-red p-3 rounded-r-lg text-xs text-brand-red font-semibold">
                      <ul className="list-disc list-inside">
                        {formErrors.map((err, idx) => (
                          <li key={idx}>{err}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Your Full Name * (Max 25 chars)
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        placeholder="John"
                        value={formData.name}
                        onChange={handleInputChange}
                        maxLength={25}
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                        Email Address * (Max 35 chars)
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        placeholder="john@gmail.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        maxLength={35}
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Mobile Number * (8-15 digits)
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                      Brief Message or Inquiry (Optional)
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      placeholder="Specify your vehicle make/model and what repair or quote details you need..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all"
                    ></textarea>
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="w-full bg-brand-charcoal hover:bg-brand-charcoal/90 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md uppercase tracking-wider text-xs sm:text-sm"
                  >
                    <Send className="w-4.5 h-4.5" />
                    Dispatch Message
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
