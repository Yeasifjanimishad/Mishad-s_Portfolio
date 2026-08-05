import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, User, MessageSquare, Tag } from 'lucide-react';
import { playClickSound, playSuccessSound } from '../utils/audio';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    playClickSound();

    // Validations
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      setStatus('error');
      setErrorMessage('Please write a message with at least 10 characters.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Simulate Network Request / Form Submission
    setTimeout(() => {
      setStatus('success');
      playSuccessSound();
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Auto clear success message after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1200);
  };

  return (
    <div className="w-full bg-[var(--bg-card)] backdrop-blur-2xl rounded-3xl p-6 sm:p-8 md:p-10 border border-[var(--border-subtle)] hover:border-amber-500/50 shadow-2xl relative overflow-hidden group transition-all duration-300 hover:shadow-amber-500/15">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-orange-400 to-rose-500 opacity-90 group-hover:opacity-100 transition-opacity" />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent rounded-full blur-2xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex items-center gap-2.5 text-amber-700 dark:text-amber-400 font-mono text-xs uppercase tracking-widest mb-2 font-semibold">
          <div className="p-2.5 rounded-xl bg-amber-100/80 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-500/30 shadow-sm">
            <Mail className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          </div>
          <span>Direct Message</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)] mb-6">
          Send an Instant Inquiry
        </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name Field */}
          <div>
            <label className="block text-xs font-mono text-[var(--text-subtle)] mb-1.5">
              Your Name *
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-subtle)]" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Md. Yeasif"
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[var(--bg-inner)] border border-[var(--border-subtle)] focus:border-primary text-xs sm:text-sm text-[var(--text-main)] placeholder:text-[var(--text-subtle)]/50 focus:outline-none transition-all duration-200"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-xs font-mono text-[var(--text-subtle)] mb-1.5">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-subtle)]" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="example@domain.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[var(--bg-inner)] border border-[var(--border-subtle)] focus:border-primary text-xs sm:text-sm text-[var(--text-main)] placeholder:text-[var(--text-subtle)]/50 focus:outline-none transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label className="block text-xs font-mono text-[var(--text-subtle)] mb-1.5">
            Subject / Purpose
          </label>
          <div className="relative">
            <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-subtle)]" />
            <input
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="Software Development Opportunity / Project Collaboration"
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[var(--bg-inner)] border border-[var(--border-subtle)] focus:border-primary text-xs sm:text-sm text-[var(--text-main)] placeholder:text-[var(--text-subtle)]/50 focus:outline-none transition-all duration-200"
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-xs font-mono text-[var(--text-subtle)] mb-1.5">
            Message *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-[var(--text-subtle)]" />
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Hello Mishad, I would like to discuss a project..."
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[var(--bg-inner)] border border-[var(--border-subtle)] focus:border-primary text-xs sm:text-sm text-[var(--text-main)] placeholder:text-[var(--text-subtle)]/50 focus:outline-none transition-all duration-200 resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary text-black font-semibold text-xs sm:text-sm hover:opacity-90 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 cursor-pointer"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Message...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>

      {/* Floating Glassmorphic Toast Notification */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mt-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm flex items-center gap-3 backdrop-blur-xl shadow-xl"
          >
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <div>
              <p className="font-semibold">Message Sent Successfully!</p>
              <p className="text-[11px] opacity-90">
                Thank you for reaching out. I will respond to your email as soon as possible.
              </p>
            </div>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mt-4 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-xs sm:text-sm flex items-center gap-3 backdrop-blur-xl shadow-xl"
          >
            <AlertCircle className="w-5 h-5 shrink-0" />
            <div>
              <p className="font-semibold">Unable to Send Message</p>
              <p className="text-[11px] opacity-90">{errorMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
