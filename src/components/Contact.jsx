import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple client validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('sending');

    // Simulate API request delay
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0B0F19] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-cyanCustom-500/5 blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-indigoCustom-500/5 blur-[120px] -z-10 animate-glow-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-cyanCustom-500 uppercase mb-3">
            Get In Touch
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Collaborate On Something Great
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyanCustom-500 to-indigoCustom-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Form and Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              Contact Information
            </h3>
            
            <p className="text-slate-400 leading-relaxed max-w-md">
              Have an exciting project you want to build, or looking for a passionate developer to join your team? Shoot me a message! I'd love to connect.
            </p>

            {/* Cards List */}
            <div className="space-y-6 pt-4">
              {/* Email Card */}
              <a 
                href="mailto:taranisatti@gmail.com"
                className="group flex items-center p-6 rounded-2xl glass-panel glass-panel-hover border border-slate-800/60 transition-all duration-300 hover:shadow-cyanCustom-500/5 transform hover:-translate-y-0.5"
              >
                <div className="p-4 rounded-xl bg-cyanCustom-500/10 border border-cyanCustom-500/20 group-hover:border-cyanCustom-500/40 text-cyanCustom-400 transition-colors duration-300 mr-5">
                  <Mail className="w-6 h-6 animate-pulse-slow" />
                </div>
                <div>
                  <span className="block text-xs font-semibold tracking-wider uppercase text-slate-500">
                    Email Me
                  </span>
                  <span className="block text-base font-bold text-white group-hover:text-cyanCustom-400 transition-colors duration-300 mt-0.5">
                    taranisatti@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone Card */}
              <a 
                href="tel:+919739264910"
                className="group flex items-center p-6 rounded-2xl glass-panel glass-panel-hover border border-slate-800/60 transition-all duration-300 hover:shadow-indigoCustom-500/5 transform hover:-translate-y-0.5"
              >
                <div className="p-4 rounded-xl bg-indigoCustom-500/10 border border-indigoCustom-500/20 group-hover:border-indigoCustom-500/40 text-indigoCustom-400 transition-colors duration-300 mr-5">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-semibold tracking-wider uppercase text-slate-500">
                    Call Me
                  </span>
                  <span className="block text-base font-bold text-white group-hover:text-indigoCustom-400 transition-colors duration-300 mt-0.5">
                    +91 9739264910
                  </span>
                </div>
              </a>
            </div>

            {/* Glowing communication wire graphic inside card */}
            <div className="hidden lg:block p-6 rounded-2xl bg-dark-800/20 border border-slate-800/40 relative overflow-hidden aspect-[1.8] mt-6">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(6,182,212,0.1),transparent_70%)]" />
              <svg viewBox="0 0 200 100" className="w-full h-full stroke-slate-800 stroke-[1.5] fill-none">
                <path d="M10 50Q50 10 100 50T190 50" />
                <path d="M10 50Q50 90 100 50T190 50" strokeDasharray="5 5" strokeOpacity="0.4" />
                <path d="M10 50Q50 10 100 50T190 50" stroke="#06B6D4" strokeWidth="2" strokeDasharray="30 150" className="animate-[spin_6s_linear_infinite]" style={{ transformOrigin: '100px 50px' }} />
                <circle cx="10" cy="50" r="4" fill="#06B6D4" />
                <circle cx="190" cy="50" r="4" fill="#6366F1" />
              </svg>
              <div className="absolute bottom-4 left-6 text-[10px] font-bold uppercase tracking-widest text-slate-600">
                Data Stream Active
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl glass-panel border border-slate-800/60 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-white text-left mb-6">
                Send A Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {/* Name & Email Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Your Name <span className="text-cyanCustom-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      disabled={status === 'sending'}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 focus:border-cyanCustom-500/80 focus:ring-1 focus:ring-cyanCustom-500/30 text-white placeholder-slate-600 outline-none transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Your Email <span className="text-cyanCustom-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      disabled={status === 'sending'}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 focus:border-cyanCustom-500/80 focus:ring-1 focus:ring-cyanCustom-500/30 text-white placeholder-slate-600 outline-none transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry / Collaboration request"
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 focus:border-cyanCustom-500/80 focus:ring-1 focus:ring-cyanCustom-500/30 text-white placeholder-slate-600 outline-none transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Message <span className="text-cyanCustom-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello! I would love to collaborate on a new project..."
                    required
                    disabled={status === 'sending'}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 focus:border-cyanCustom-500/80 focus:ring-1 focus:ring-cyanCustom-500/30 text-white placeholder-slate-600 outline-none transition-all duration-300 resize-none"
                  />
                </div>

                {/* Error status reporting */}
                {status === 'error' && (
                  <div className="flex items-center space-x-2.5 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex items-center justify-center space-x-2 w-full py-4 rounded-xl font-bold text-sm tracking-wider uppercase text-white bg-gradient-to-r from-cyanCustom-500 to-indigoCustom-500 hover:from-cyanCustom-600 hover:to-indigoCustom-600 shadow-lg shadow-cyanCustom-500/10 hover:shadow-cyanCustom-500/25 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-75 disabled:pointer-events-none"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>

      {/* Success Modal Dialogue */}
      {status === 'success' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-all duration-300">
          <div className="max-w-md w-full p-8 rounded-2xl glass-panel border border-slate-700/40 text-center space-y-6 shadow-2xl transform scale-100 transition-all duration-300 animate-float-medium">
            <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400 shadow-lg shadow-emerald-500/10">
              <CheckCircle className="w-10 h-10 animate-[pulse_2s_infinite]" />
            </div>
            
            <div className="space-y-2">
              <h4 className="text-2xl font-extrabold text-white">Message Transmitted!</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Thank you, your simulated message has been successfully compiled and sent. Tarani will review and respond to your inquiry shortly!
              </p>
            </div>

            <button
              onClick={() => setStatus('idle')}
              className="px-6 py-2.5 w-full rounded-xl text-xs font-semibold tracking-wider uppercase text-white bg-slate-800 hover:bg-slate-700 border border-slate-750 transition-all duration-300"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
