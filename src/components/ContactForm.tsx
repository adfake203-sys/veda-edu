import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Phone, Mail } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    state: '',
    course: 'BTech'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', state: '', course: 'BTech' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-40 bg-pattern">
      <div className="container mx-auto px-6 md:px-10 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-elite border-primary/5"
        >
          {/* Left: Info Panel */}
          <div className="md:w-5/12 bg-primary p-8 md:p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif italic mb-4 md:mb-6 leading-tight text-white">Inquire with <br />Distinction</h2>
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] text-white/90 leading-loose">
                Speak with our senior academic consultants for personalized placement strategies.
              </p>
            </div>
            <div className="space-y-4 md:space-y-6 pt-8 md:pt-12 mt-8 md:mt-12 border-t border-white/10">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center"><Phone size={16} /></div>
                <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">+91 81066 884488</div>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center"><Mail size={16} /></div>
                <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">veda.edu.services01@gmail.com</div>
              </div>
            </div>
          </div>

          {/* Right: Actual Form */}
          <div className="md:w-7/12 bg-white/30 p-8 md:p-12">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-10 md:py-12"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 md:mb-6">
                    <Check size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-primary mb-2 md:mb-3">Submission Received</h3>
                  <p className="text-xs md:text-sm text-foreground/50 font-medium">A consultant will contact you within the next 24 business hours.</p>
                  <button onClick={() => setStatus('idle')} className="mt-6 md:mt-8 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60 hover:text-primary transition-colors">Submit Another</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-1.5 md:space-y-2">
                       <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/75 ml-1">Full Name</label>
                      <input 
                        required
                        suppressHydrationWarning
                        className="w-full bg-white/50 border border-border/50 rounded-xl px-4 md:px-5 py-3 md:py-4 text-xs md:text-sm focus:outline-none focus:border-primary/40 transition-all placeholder:text-foreground/20"
                        placeholder="Aristotle Smith"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1.5 md:space-y-2">
                       <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/75 ml-1">Phone Reference</label>
                      <input 
                        required
                        suppressHydrationWarning
                        className="w-full bg-white/50 border border-border/50 rounded-xl px-4 md:px-5 py-3 md:py-4 text-xs md:text-sm focus:outline-none focus:border-primary/40 transition-all placeholder:text-foreground/20"
                        placeholder="+91 00000 00000"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/75 ml-1">Academic Email</label>
                    <input 
                      required
                      type="email"
                      suppressHydrationWarning
                      className="w-full bg-white/50 border border-border/50 rounded-xl px-4 md:px-5 py-3 md:py-4 text-xs md:text-sm focus:outline-none focus:border-primary/40 transition-all placeholder:text-foreground/20"
                      placeholder="admissions@university.edu"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-1.5 md:space-y-2">
                      <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/75 ml-1">Residence State</label>
                      <input 
                        required
                        suppressHydrationWarning
                        className="w-full bg-white/50 border border-border/50 rounded-xl px-4 md:px-5 py-3 md:py-4 text-xs md:text-sm focus:outline-none focus:border-primary/40 transition-all placeholder:text-foreground/20"
                        placeholder="Karnataka"
                        value={formData.state}
                        onChange={e => setFormData({...formData, state: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1.5 md:space-y-2">
                      <label className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/75 ml-1">Pursuit of Interest</label>
                      <select 
                        suppressHydrationWarning
                        className="w-full bg-white/50 border border-border/50 rounded-xl px-4 md:px-5 py-3 md:py-4 text-xs md:text-sm focus:outline-none focus:border-primary/40 transition-all appearance-none"
                        value={formData.course}
                        onChange={e => setFormData({...formData, course: e.target.value})}
                      >
                        <option value="BTech">Engineering (B.Tech)</option>
                        <option value="Degree">Executive Degree</option>
                        <option value="Other">Specialized Pursuit</option>
                      </select>
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    suppressHydrationWarning
                    className="w-full bg-primary text-white py-3 md:py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs hover:bg-primary/90 transition-all shadow-elite disabled:opacity-50 mt-2 md:mt-4 h-[50px] md:h-[60px] flex items-center justify-center gap-3"
                  >
                    {status === 'loading' ? 'Transmitting...' : 'Confirm Consultation Request'}
                    {status === 'idle' && <ArrowRight size={16} />}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
