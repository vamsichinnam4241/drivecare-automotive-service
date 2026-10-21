import React, { useState } from 'react';
import { Calendar, Clock, Car, User, ToggleLeft, CheckCircle, ChevronRight, ChevronLeft, MapPin, Sparkles, Receipt } from 'lucide-react';
import { Service, Appointment } from '../types';

interface BookingFormProps {
  services: Service[];
  initialServiceId?: string;
  onBookingSuccess: (appointment: Appointment) => void;
}

export default function BookingForm({ services, initialServiceId, onBookingSuccess }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string>(initialServiceId || '');
  const [date, setDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [make, setMake] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [pickup, setPickup] = useState<'none' | 'pickup' | 'drop' | 'both'>('none');
  const [address, setAddress] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [confirmedTicket, setConfirmedTicket] = useState<Appointment | null>(null);

  const stepsList = [
    { num: 1, title: 'Service & Valet', icon: <Car className="w-4 h-4" /> },
    { num: 2, title: 'Schedule Slot', icon: <Calendar className="w-4 h-4" /> },
    { num: 3, title: 'Vehicle Specs', icon: <WrenchIcon className="w-4 h-4" /> },
    { num: 4, title: 'Customer info', icon: <User className="w-4 h-4" /> },
  ];

  // List of pre-configured daytime slots
  const timeSlots = [
    '09:00 AM - 10:30 AM',
    '10:30 AM - 12:00 PM',
    '12:00 PM - 01:30 PM',
    '01:30 PM - 03:00 PM',
    '03:00 PM - 04:30 PM',
    '04:30 PM - 06:00 PM',
  ];

  const handleNameChange = (val: string) => {
    if (val !== '' && !/^[a-zA-Z\s]*$/.test(val)) {
      return;
    }
    if (val.length > 25) {
      return;
    }
    setName(val);
  };

  const handlePhoneChange = (val: string) => {
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
    setPhone(val);
  };

  const handleEmailChange = (val: string) => {
    if (val !== '' && !/^[a-zA-Z0-9@.]*$/.test(val)) {
      return;
    }
    if (val.length > 35) {
      return;
    }
    setEmail(val);
  };

  const handleNextStep = () => {
    const errors: string[] = [];
    if (step === 1) {
      if (!selectedService) errors.push('Please select a service before proceeding.');
      if (pickup !== 'none' && !address.trim()) errors.push('Please provide your complete pickup/drop address.');
    } else if (step === 2) {
      if (!date) errors.push('Please choose a service date.');
      if (!timeSlot) errors.push('Please pick a convenient time slot.');
    } else if (step === 3) {
      if (!make.trim()) errors.push('Vehicle make is required (e.g. Toyota).');
      if (!model.trim()) errors.push('Vehicle model is required (e.g. Camry).');
      if (!year || isNaN(Number(year))) errors.push('Please provide a valid 4-digit vehicle year.');
    }

    if (errors.length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setFormErrors([]);
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setFormErrors([]);
    if (step > 1) {
      setStep(step - 1);
    } else {
      window.location.hash = '';
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: string[] = [];
    
    // Name validation
    if (!name.trim()) {
      errors.push('Name is required.');
    } else if (name.length > 25) {
      errors.push('Name must be 25 characters or less.');
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      errors.push('Name can only contain letters and spaces.');
    }

    // Phone validation
    const digitsOnly = phone.replace(/[^0-9]/g, '');
    const digitLength = digitsOnly.length;
    if (!phone) {
      errors.push('Mobile number is required.');
    } else {
      const hasLetters = /[a-zA-Z]/.test(phone);
      const hasInvalidChars = /[^0-9\s+]/.test(phone);
      const plusCount = (phone.match(/\+/g) || []).length;

      if (hasLetters) {
        errors.push('Mobile number cannot contain letters.');
      } else if (hasInvalidChars) {
        errors.push('Mobile number cannot contain special characters (except spaces and "+").');
      } else if (plusCount > 1) {
        errors.push("Mobile number can contain at most one '+' symbol.");
      } else if (phone.includes('+') && !phone.startsWith('+')) {
        errors.push("The '+' symbol is only allowed at the start of the mobile number.");
      } else if (digitLength < 8 || digitLength > 15) {
        errors.push('Mobile number must contain between 8 and 15 digits.');
      } else {
        let digitCount = 0;
        let lastDigitIndex = -1;
        for (let i = 0; i < phone.length; i++) {
          if (/[0-9]/.test(phone[i])) {
            digitCount++;
            if (digitCount === 15) {
              lastDigitIndex = i;
              break;
            }
          }
        }
        if (lastDigitIndex !== -1 && lastDigitIndex < phone.length - 1) {
          errors.push('No characters or spaces are allowed after the 15th digit.');
        }
      }
    }

    // Email validation
    const emailVal = email.trim();
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

    const newAppointment: Appointment = {
      id: `APX-${Math.floor(100000 + Math.random() * 900000)}`,
      serviceId: selectedService,
      date,
      timeSlot,
      vehicleMake: make,
      vehicleModel: model,
      vehicleYear: year,
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      pickupOption: pickup,
      address: pickup !== 'none' ? address : undefined,
      notes: notes.trim() || undefined,
      status: 'confirmed',
    };

    setConfirmedTicket(newAppointment);
    onBookingSuccess(newAppointment);
  };

  const currentServiceObj = services.find((s) => s.id === selectedService);

  if (confirmedTicket) {
    return (
      <div id="booking-confirmation-ticket" className="max-w-2xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden p-6 sm:p-10 text-center animate-fade-in text-left">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-emerald-50 text-emerald-500 p-4 rounded-full animate-bounce">
            <CheckCircle className="w-12 h-12" />
          </div>
          <h2 className="font-display font-extrabold text-2xl text-brand-charcoal mt-4 mb-2">
            Appointment Confirmed!
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-md text-center leading-relaxed">
            Your reservation has been locked in. A copy of this confirmation voucher and entry ticket has been dispatched to your email.
          </p>
        </div>

        {/* Ticket Box */}
        <div className="bg-slate-50 border border-dashed border-gray-300 rounded-2xl p-6 relative">
          {/* Ticket Header Brand */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="DriveCare Logo" className="w-7 h-7 object-contain" />
              <span className="font-display font-extrabold text-sm text-brand-charcoal">
                Drive<span className="text-brand-red">Care</span> Official Voucher
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Verified
            </span>
          </div>

          {/* Punch Holes for Ticket Aesthetic */}
          <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 bg-white border-r border-dashed border-gray-300 rounded-full"></div>
          <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 bg-white border-l border-dashed border-gray-300 rounded-full"></div>

          <div className="flex justify-between items-center border-b border-gray-200/60 pb-4 mb-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block">
                Appointment Reference
              </span>
              <span className="font-mono font-bold text-brand-red text-sm sm:text-base">
                {confirmedTicket.id}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block">
                Total Price Estimate
              </span>
              <span className="font-display font-black text-lg text-brand-charcoal">
                {currentServiceObj?.basePrice || '$89'}
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 text-xs">
            <div>
              <span className="text-gray-400 block uppercase font-semibold">Service Type:</span>
              <span className="font-bold text-brand-charcoal">{currentServiceObj?.title || 'Custom Repair'}</span>
            </div>
            <div>
              <span className="text-gray-400 block uppercase font-semibold">Vehicle Profile:</span>
              <span className="font-bold text-brand-charcoal">
                {confirmedTicket.vehicleYear} {confirmedTicket.vehicleMake} {confirmedTicket.vehicleModel}
              </span>
            </div>
            <div>
              <span className="text-gray-400 block uppercase font-semibold">Scheduled Date:</span>
              <span className="font-bold text-brand-charcoal">{confirmedTicket.date}</span>
            </div>
            <div>
              <span className="text-gray-400 block uppercase font-semibold">Reserved Slot:</span>
              <span className="font-bold text-brand-charcoal">{confirmedTicket.timeSlot}</span>
            </div>
            {confirmedTicket.pickupOption !== 'none' && (
              <div className="sm:col-span-2">
                <span className="text-gray-400 block uppercase font-semibold">Valet Pickup Address:</span>
                <span className="font-bold text-brand-charcoal flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0" />
                  {confirmedTicket.address}
                </span>
              </div>
            )}
            <div>
              <span className="text-gray-400 block uppercase font-semibold">Customer Representative:</span>
              <span className="font-bold text-brand-charcoal">{confirmedTicket.customerName}</span>
            </div>
            <div>
              <span className="text-gray-400 block uppercase font-semibold">Contact Phone:</span>
              <span className="font-bold text-brand-charcoal font-mono">{confirmedTicket.customerPhone}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            id="book-another-btn"
            onClick={() => {
              setConfirmedTicket(null);
              setStep(1);
              setSelectedService('');
              setDate('');
              setTimeSlot('');
              setMake('');
              setModel('');
              setYear('');
              setName('');
              setEmail('');
              setPhone('');
              setPickup('none');
              setAddress('');
              setNotes('');
            }}
            className="bg-brand-charcoal hover:bg-brand-charcoal/90 text-white font-bold py-2.5 px-6 rounded-xl transition-colors cursor-pointer text-sm"
          >
            Book Another Car
          </button>
          <a
            id="call-confirmation-cta"
            href="tel:+18005550199"
            className="border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold py-2.5 px-6 rounded-xl transition-colors inline-flex items-center gap-2 text-sm"
          >
            Need Help? Call Us
          </a>
        </div>
      </div>
    );
  }

  return (
    <div id="booking-wizard-box" className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-xl overflow-visible text-left relative">
      
      {/* Absolute floating left/right navigation arrows for easy page swapping */}
      <button
        type="button"
        onClick={handlePrevStep}
        className="absolute -left-4 sm:-left-16 top-1/2 -translate-y-1/2 bg-white hover:bg-slate-50 border border-gray-250 p-3 rounded-full shadow-lg hover:scale-105 transition-all text-brand-charcoal cursor-pointer z-30 flex items-center justify-center opacity-100"
        title="Previous Step"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={handleNextStep}
        disabled={step === 4}
        className={`absolute -right-4 sm:-right-16 top-1/2 -translate-y-1/2 bg-white hover:bg-slate-50 border border-gray-250 p-3 rounded-full shadow-lg hover:scale-105 transition-all text-brand-charcoal cursor-pointer z-30 flex items-center justify-center ${
          step === 4 ? 'opacity-30 cursor-not-allowed pointer-events-none' : 'opacity-100'
        }`}
        title="Next Step"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Header Banner */}
      <div className="bg-brand-charcoal p-6 sm:p-8 text-white flex justify-between items-center relative">
        <div className="absolute inset-0 bg-brand-red/5 mix-blend-overlay"></div>
        <div>
          <h2 className="font-display font-black text-xl sm:text-2xl tracking-tight">
            Schedule Your Service
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Fill out the 4-step blueprint to secure premium, dealership-level repairs.
          </p>
        </div>
        <div className="bg-brand-red/10 border border-brand-red/20 rounded-xl p-2.5 text-brand-red hidden sm:block">
          <Sparkles className="w-6 h-6" />
        </div>
      </div>

      {/* Steps Indicator Tracker */}
      <div className="px-6 py-4 bg-gray-50/60 border-b border-gray-100 flex justify-between items-center gap-2 overflow-x-auto">
        {stepsList.map((st) => (
          <div key={st.num} className="flex items-center gap-2 shrink-0">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center font-display font-bold text-xs ${
                step === st.num
                  ? 'bg-brand-red text-white'
                  : step > st.num
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}
            >
              {step > st.num ? '✓' : st.num}
            </div>
            <span
              className={`text-xs font-semibold ${
                step === st.num ? 'text-brand-charcoal' : 'text-gray-400'
              }`}
            >
              {st.title}
            </span>
            {st.num < 4 && <div className="h-0.5 w-4 sm:w-8 bg-gray-200"></div>}
          </div>
        ))}
      </div>

      {/* Form Area */}
      <form onSubmit={handleFormSubmit} className="p-6 sm:p-8 space-y-6">
        
        {/* Error Messaging Alerts */}
        {formErrors.length > 0 && (
          <div className="bg-red-50 border-l-4 border-brand-red p-4 rounded-r-xl">
            <ul className="list-disc list-inside space-y-1 text-xs text-brand-red font-semibold">
              {formErrors.map((err, idx) => (
                <li key={idx}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        {/* STEP 1: SERVICE & VALET */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Select Service Dropdown */}
              <div>
                <label htmlFor="service-select" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Select Certified Service
                </label>
                <select
                  id="service-select"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all font-semibold cursor-pointer"
                >
                  <option value="">-- Choose repair service --</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} (Starting {s.basePrice})
                    </option>
                  ))}
                </select>
                {currentServiceObj && (
                  <p className="text-xs text-brand-red mt-2 font-semibold">
                    ★ Estimated repair time: {currentServiceObj.estimatedTime}
                  </p>
                )}
              </div>

              {/* Pickup Option Selector */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Pickup & Drop Valet Option
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(['none', 'pickup', 'drop', 'both'] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setPickup(opt)}
                      className={`py-3 px-3 rounded-xl border text-center text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        pickup === opt
                          ? 'border-brand-red bg-brand-red/5 text-brand-red'
                          : 'border-gray-200 bg-white text-gray-600 hover:bg-slate-50'
                      }`}
                    >
                      {opt === 'none' && 'Self Drive-In'}
                      {opt === 'pickup' && 'Valet Pickup'}
                      {opt === 'drop' && 'Valet Dropoff'}
                      {opt === 'both' && 'Pickup & Drop'}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Conditionally display address input if Pickup/Drop is active */}
            {pickup !== 'none' && (
              <div className="space-y-2 animate-slide-down">
                <label htmlFor="valet-address" className="block text-xs font-bold text-gray-500 uppercase tracking-wider">
                  Pickup/Drop Address <span className="text-brand-red">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="valet-address"
                    placeholder="Enter complete house/office number, building, street, and zipcode"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl py-3 pl-10 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all"
                  />
                  <MapPin className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                </div>
                <span className="text-[10px] text-gray-400 block leading-normal">
                  Our professional, background-verified valets are fully insured. We will collect your car keys on arrival and return your vehicle pristine.
                </span>
              </div>
            )}
          </div>
        )}

        {/* STEP 2: SCHEDULE SLOT */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Date selection */}
              <div>
                <label htmlFor="booking-date" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Choose Appointment Date
                </label>
                <input
                  type="date"
                  id="booking-date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]} // blocks historical days
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all font-semibold"
                />
              </div>

              {/* Time slot picker */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Select Convenient Time Slot
                </label>
                <div className="grid grid-cols-1 gap-2.5">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`p-3 rounded-xl border text-left text-xs font-bold font-mono transition-all flex items-center justify-between cursor-pointer ${
                        timeSlot === slot
                          ? 'border-brand-red bg-brand-red/5 text-brand-red font-black'
                          : 'border-gray-200 bg-white text-gray-600 hover:bg-slate-50'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        {slot}
                      </span>
                      {timeSlot === slot && <span className="text-[10px] uppercase font-bold text-brand-red">Active</span>}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* STEP 3: VEHICLE DETAILS */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid sm:grid-cols-3 gap-6">
              
              {/* Make */}
              <div>
                <label htmlFor="vehicle-make" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Make *
                </label>
                <input
                  type="text"
                  id="vehicle-make"
                  placeholder="e.g. Toyota"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all font-medium"
                />
              </div>

              {/* Model */}
              <div>
                <label htmlFor="vehicle-model" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Model *
                </label>
                <input
                  type="text"
                  id="vehicle-model"
                  placeholder="e.g. Corolla"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all font-medium"
                />
              </div>

              {/* Year */}
              <div>
                <label htmlFor="vehicle-year" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Year *
                </label>
                <input
                  type="text"
                  id="vehicle-year"
                  placeholder="e.g. 2021"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all font-medium"
                />
              </div>

            </div>

            {/* Special Instructions Notes */}
            <div>
              <label htmlFor="special-notes" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Special Instructions or Signs (Optional)
              </label>
              <textarea
                id="special-notes"
                rows={3}
                placeholder="Mention any symptoms, dashboard indicators, or specific mechanic instructions..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all"
              ></textarea>
            </div>
          </div>
        )}

        {/* STEP 4: CUSTOMER DETAILS */}
        {step === 4 && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6">
              
              {/* Full Name */}
              <div>
                <label htmlFor="customer-name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Full Name * (Max 25 chars)
                </label>
                <input
                  type="text"
                  id="customer-name"
                  placeholder="e.g. John Doe"
                  value={name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  maxLength={25}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all font-medium"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="customer-email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Email Address * (Max 35 chars)
                </label>
                <input
                  type="email"
                  id="customer-email"
                  placeholder="e.g. john@gmail.com"
                  value={email}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  maxLength={35}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all font-medium"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="customer-phone" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Phone Number * (8-15 digits)
                </label>
                <input
                  type="tel"
                  id="customer-phone"
                  placeholder="e.g. +91 98765 43210"
                  value={phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl p-3.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-red/10 focus:border-brand-red transition-all font-mono font-medium"
                />
              </div>

            </div>

            {/* Appointment review summarized box */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-gray-200/60">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-3 flex items-center gap-1">
                <Receipt className="w-3.5 h-3.5 text-brand-red" />
                Voucher Summary & Verification
              </span>
              <div className="grid sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-400 uppercase">Service Selected:</span>
                  <p className="font-bold text-brand-charcoal">{currentServiceObj?.title || 'Not specified'}</p>
                </div>
                <div>
                  <span className="text-gray-400 uppercase">Schedule Detail:</span>
                  <p className="font-bold text-brand-charcoal">{date || 'N/A'} at {timeSlot || 'N/A'}</p>
                </div>
                <div>
                  <span className="text-gray-400 uppercase">Vehicle Specs:</span>
                  <p className="font-bold text-brand-charcoal">{year} {make} {model}</p>
                </div>
                <div>
                  <span className="text-gray-400 uppercase">Valet Choice:</span>
                  <p className="font-bold text-brand-charcoal uppercase">{pickup === 'none' ? 'Self Drive-In' : pickup}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer controls */}
        <div className="border-t border-gray-100 pt-6 flex items-center justify-between">
          <div>
            {step > 1 && (
              <button
                id="booking-prev-step-btn"
                type="button"
                onClick={handlePrevStep}
                className="inline-flex items-center gap-1.5 text-gray-500 hover:text-brand-charcoal text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            )}
          </div>

          <div>
            {step < 4 ? (
              <button
                id="booking-next-step-btn"
                type="button"
                onClick={handleNextStep}
                className="bg-brand-charcoal hover:bg-brand-charcoal/90 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-xl inline-flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                Continue
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                id="booking-submit-form"
                type="submit"
                className="bg-brand-red hover:bg-brand-red/90 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl inline-flex items-center gap-1.5 cursor-pointer shadow-md hover:shadow-brand-red/20 transition-all duration-300"
              >
                Confirm Appointment
                <CheckCircle className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </form>
    </div>
  );
}

function WrenchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
