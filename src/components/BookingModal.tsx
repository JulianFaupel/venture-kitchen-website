import React, { useState, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight, Phone, Video, Calendar, Clock, ArrowRight, Check } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [callType, setCallType] = useState<'phone' | 'video' | ''>('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const timeSlots = ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'];

  // Generate calendar days for current month view
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startPad = (firstDay.getDay() + 6) % 7; // Monday = 0
    const days: (Date | null)[] = [];

    for (let i = 0; i < startPad; i++) days.push(null);
    for (let d = 1; d <= lastDay.getDate(); d++) {
      days.push(new Date(year, month, d));
    }
    return days;
  }, [currentMonth]);

  const isAvailable = (date: Date) => {
    const day = date.getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    // Tue(2) - Fri(5), not in the past
    return day >= 2 && day <= 5 && date >= today;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  };

  const monthLabel = currentMonth.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' });

  const handleSubmit = async () => {
    if (!selectedDate || !selectedTime || !callType || !formData.name || !formData.email) return;
    setIsSubmitting(true);
    setError('');

    try {
      const apiUrl = import.meta.env.PROD
        ? 'https://api.venturekitchen.io/api/contact'
        : 'http://localhost:3201/api/contact';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Erstgespräch: ${callType === 'phone' ? 'Telefonat' : 'Video-Call'}`,
          message: `Terminwunsch: ${formatDate(selectedDate)} um ${selectedTime} Uhr\nArt: ${callType === 'phone' ? 'Telefonanruf' : 'Video-Call'}\nTelefon: ${formData.phone || 'nicht angegeben'}`,
          booking: {
            date: selectedDate.toISOString().split('T')[0],
            time: selectedTime,
            type: callType
          }
        })
      });

      const result = await response.json();
      if (result.success) {
        setShowSuccess(true);
      } else {
        setError(result.error || 'Fehler beim Senden');
      }
    } catch {
      setError('Verbindungsfehler. Bitte versuchen Sie es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime('');
    setCallType('');
    setFormData({ name: '', email: '', phone: '' });
    setShowSuccess(false);
    setError('');
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <div>
            <h2 className="text-xl font-bold text-primary">Erstgespräch buchen</h2>
            {!showSuccess && (
              <p className="text-sm text-gray-500">Schritt {step} von 3</p>
            )}
          </div>
          <button onClick={handleClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Progress Bar */}
        {!showSuccess && (
          <div className="px-6 pt-4">
            <div className="flex gap-2">
              {[1, 2, 3].map(s => (
                <div key={s} className={`h-1.5 flex-1 rounded-full transition-colors ${s <= step ? 'bg-accent' : 'bg-gray-200'}`} />
              ))}
            </div>
          </div>
        )}

        <div className="px-6 py-6">
          {/* Success State */}
          {showSuccess ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Termin angefragt!</h3>
              <p className="text-gray-600 mb-2">
                {formatDate(selectedDate!)} um {selectedTime} Uhr
              </p>
              <p className="text-gray-500 text-sm mb-6">
                {callType === 'phone' ? '📞 Telefonanruf' : '🎥 Video-Call'}
              </p>
              <p className="text-gray-500 text-sm">
                Wir melden uns in Kürze mit einer Bestätigung bei Ihnen.
              </p>
              <button
                onClick={handleClose}
                className="mt-6 gradient-button text-white px-6 py-3 rounded-lg font-semibold"
              >
                Schließen
              </button>
            </div>
          ) : (
            <>
              {/* Step 1: Date & Time */}
              {step === 1 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-5 h-5 text-accent" />
                    <h3 className="font-semibold text-primary">Wählen Sie einen Termin</h3>
                  </div>

                  {/* Month Navigation */}
                  <div className="flex items-center justify-between mb-3">
                    <button
                      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                      className="p-1 hover:bg-gray-100 rounded-full"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="font-semibold text-primary capitalize">{monthLabel}</span>
                    <button
                      onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                      className="p-1 hover:bg-gray-100 rounded-full"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 mb-6">
                    {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map(d => (
                      <div key={d} className="text-center text-xs font-medium text-gray-400 py-2">{d}</div>
                    ))}
                    {calendarDays.map((date, i) => (
                      <div key={i} className="text-center">
                        {date ? (
                          <button
                            disabled={!isAvailable(date)}
                            onClick={() => setSelectedDate(date)}
                            className={`w-9 h-9 rounded-full text-sm transition-all ${
                              selectedDate?.toDateString() === date.toDateString()
                                ? 'bg-accent text-white font-semibold'
                                : isAvailable(date)
                                  ? 'hover:bg-accent/10 text-primary'
                                  : 'text-gray-300 cursor-not-allowed'
                            }`}
                          >
                            {date.getDate()}
                          </button>
                        ) : <div className="w-9 h-9" />}
                      </div>
                    ))}
                  </div>

                  {/* Time Slots */}
                  {selectedDate && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-primary">
                          Verfügbare Zeiten am {selectedDate.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })}
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {timeSlots.map(time => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                              selectedTime === time
                                ? 'bg-accent text-white'
                                : 'bg-gray-100 text-primary hover:bg-accent/10'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    disabled={!selectedDate || !selectedTime}
                    onClick={() => setStep(2)}
                    className="mt-6 w-full gradient-button text-white py-3 rounded-lg font-semibold flex items-center justify-center disabled:opacity-40"
                  >
                    Weiter <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Step 2: Call Type */}
              {step === 2 && (
                <div>
                  <h3 className="font-semibold text-primary mb-4">Wie möchten Sie sprechen?</h3>

                  <div className="space-y-3">
                    <button
                      onClick={() => setCallType('phone')}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                        callType === 'phone'
                          ? 'border-accent bg-accent/5'
                          : 'border-gray-200 hover:border-accent/50'
                      }`}
                    >
                      <div className={`p-3 rounded-full ${callType === 'phone' ? 'bg-accent/10' : 'bg-gray-100'}`}>
                        <Phone className={`w-6 h-6 ${callType === 'phone' ? 'text-accent' : 'text-gray-500'}`} />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-primary">Telefonanruf</p>
                        <p className="text-sm text-gray-500">Wir rufen Sie an</p>
                      </div>
                    </button>

                    <button
                      onClick={() => setCallType('video')}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                        callType === 'video'
                          ? 'border-accent bg-accent/5'
                          : 'border-gray-200 hover:border-accent/50'
                      }`}
                    >
                      <div className={`p-3 rounded-full ${callType === 'video' ? 'bg-accent/10' : 'bg-gray-100'}`}>
                        <Video className={`w-6 h-6 ${callType === 'video' ? 'text-accent' : 'text-gray-500'}`} />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-primary">Video-Call</p>
                        <p className="text-sm text-gray-500">Per Google Meet oder Zoom</p>
                      </div>
                    </button>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 py-3 rounded-lg font-semibold border border-gray-200 text-primary hover:bg-gray-50 transition-colors"
                    >
                      Zurück
                    </button>
                    <button
                      disabled={!callType}
                      onClick={() => setStep(3)}
                      className="flex-1 gradient-button text-white py-3 rounded-lg font-semibold flex items-center justify-center disabled:opacity-40"
                    >
                      Weiter <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Details */}
              {step === 3 && (
                <div>
                  <h3 className="font-semibold text-primary mb-1">Ihre Kontaktdaten</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {formatDate(selectedDate!)} um {selectedTime} Uhr · {callType === 'phone' ? 'Telefonanruf' : 'Video-Call'}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1">E-Mail *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="ihre@email.de"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary mb-1">
                        Telefon {callType === 'phone' ? '*' : '(optional)'}
                      </label>
                      <input
                        type="tel"
                        required={callType === 'phone'}
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                        placeholder="+49 123 456 789"
                      />
                    </div>
                  </div>

                  {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 py-3 rounded-lg font-semibold border border-gray-200 text-primary hover:bg-gray-50 transition-colors"
                    >
                      Zurück
                    </button>
                    <button
                      disabled={isSubmitting || !formData.name || !formData.email || (callType === 'phone' && !formData.phone)}
                      onClick={handleSubmit}
                      className="flex-1 gradient-button text-white py-3 rounded-lg font-semibold flex items-center justify-center disabled:opacity-40"
                    >
                      {isSubmitting ? 'Wird gesendet...' : 'Termin anfragen'}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
