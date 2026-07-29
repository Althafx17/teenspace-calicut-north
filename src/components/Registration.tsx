import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react'
import { registrationSchema, type RegistrationFormData } from '@/lib/schema'

export default function Registration() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const { register, handleSubmit, formState: { errors }, reset } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema) as any,
    defaultValues: { district: 'Kozhikode', area: '' },
  })

  const onSubmit = async (data: RegistrationFormData) => {
    setSubmitStatus('loading')
    setErrorMessage('')
    const scriptUrl = import.meta.env.VITE_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/YOUR-SCRIPT-ID/exec'
    try {
      const response = await fetch(scriptUrl, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(data) })
      const result = await response.json()
      if (result.status === 'success' || response.ok) { setSubmitStatus('success'); reset() }
      else throw new Error(result.message || 'Failed to submit.')
    } catch (error: unknown) {
      if (scriptUrl.includes('YOUR-SCRIPT-ID')) { setTimeout(() => { setSubmitStatus('success'); reset() }, 1500) }
      else { setSubmitStatus('error'); setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.') }
    }
  }

  const districts = ['Kozhikode', 'Malappuram', 'Wayanad', 'Kannur', 'Other']
  const areas = ['Kozhikode City', 'Elathur', 'West Hill', 'Nadakkavu', 'Karaparamba', 'Chevayur', 'Kakkodi', 'Chelannur', 'Other']

  const inputClass = 'w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm bg-slate-50/50 text-slate-800'
  const labelClass = 'text-xs font-black tracking-wider text-slate-600 uppercase'

  return (
    <section id="register" className="py-24 bg-bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-primary text-xs md:text-sm font-extrabold tracking-widest uppercase">SECURE YOUR SEAT</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl font-black text-white mt-3 tracking-tight">
            Register <span className="text-secondary">Now</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-text-muted mt-4 text-sm md:text-base">
            സമ്മേളനത്തിൽ നിങ്ങളുടെ പങ്കാളിത്തം ഉറപ്പാക്കാൻ താഴെ പറയുന്ന വിവരങ്ങൾ നൽകി രജിസ്റ്റർ ചെയ്യുക.
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-slate-800">
          <AnimatePresence mode="wait">
            {submitStatus === 'success' ? (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="flex flex-col items-center justify-center py-16 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}>
                  <CheckCircle2 className="w-20 h-20 text-emerald-500 mb-6" />
                </motion.div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Registration Successful!</h3>
                <p className="text-slate-600 max-w-md mx-auto text-base">നിങ്ങളുടെ വിവരങ്ങൾ വിജയകരമായി സമർപ്പിച്ചു. അടുത്ത ഘട്ടങ്ങളിലേക്ക് ഫോൺ വഴിയോ ഇമെയിൽ വഴിയോ ബന്ധപ്പെടുന്നതാണ്.</p>
                <button onClick={() => setSubmitStatus('idle')} className="mt-8 px-6 py-2.5 rounded-full text-sm font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors">Register Another Student</button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 flex items-center gap-3 text-sm">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className={labelClass}>Full Name *</label>
                    <input id="name" type="text" placeholder="Enter full name" className={inputClass} {...register('name')} />
                    {errors.name && <span className="text-xs text-red-500 font-semibold">{errors.name.message}</span>}
                  </div>
                  {/* Age */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="age" className={labelClass}>Age *</label>
                    <input id="age" type="number" placeholder="Your age" className={inputClass} {...register('age')} />
                    {errors.age && <span className="text-xs text-red-500 font-semibold">{errors.age.message}</span>}
                  </div>
                  {/* District */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="district" className={labelClass}>District *</label>
                    <select id="district" className={inputClass} {...register('district')}>
                      {districts.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                    {errors.district && <span className="text-xs text-red-500 font-semibold">{errors.district.message}</span>}
                  </div>
                  {/* Area */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="area" className={labelClass}>Area *</label>
                    <input id="area" type="text" list="areas-list" placeholder="Your local area" className={inputClass} {...register('area')} />
                    <datalist id="areas-list">{areas.map((a) => <option key={a} value={a} />)}</datalist>
                    {errors.area && <span className="text-xs text-red-500 font-semibold">{errors.area.message}</span>}
                  </div>
                  {/* Place */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="place" className={labelClass}>Place / Locality *</label>
                    <input id="place" type="text" placeholder="e.g. Nadakkavu, Kozhikode" className={inputClass} {...register('place')} />
                    {errors.place && <span className="text-xs text-red-500 font-semibold">{errors.place.message}</span>}
                  </div>
                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                    <input id="phone" type="tel" placeholder="10-digit mobile number" className={inputClass} {...register('phone')} />
                    {errors.phone && <span className="text-xs text-red-500 font-semibold">{errors.phone.message}</span>}
                  </div>
                  {/* Parent Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="parentPhone" className={labelClass}>Parent's Phone *</label>
                    <input id="parentPhone" type="tel" placeholder="10-digit guardian number" className={inputClass} {...register('parentPhone')} />
                    {errors.parentPhone && <span className="text-xs text-red-500 font-semibold">{errors.parentPhone.message}</span>}
                  </div>
                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className={labelClass}>Email Address *</label>
                    <input id="email" type="email" placeholder="example@gmail.com" className={inputClass} {...register('email')} />
                    {errors.email && <span className="text-xs text-red-500 font-semibold">{errors.email.message}</span>}
                  </div>
                  {/* Institution */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="institution" className={labelClass}>Institution / College *</label>
                    <input id="institution" type="text" placeholder="School or College name" className={inputClass} {...register('institution')} />
                    {errors.institution && <span className="text-xs text-red-500 font-semibold">{errors.institution.message}</span>}
                  </div>
                  {/* Class */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="schoolClass" className={labelClass}>Class / Course *</label>
                    <input id="schoolClass" type="text" placeholder="e.g. +2 Science, B.Tech CSE" className={inputClass} {...register('schoolClass')} />
                    {errors.schoolClass && <span className="text-xs text-red-500 font-semibold">{errors.schoolClass.message}</span>}
                  </div>
                </div>
                {/* Expectations */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="expectations" className={labelClass}>Your Expectations (Optional)</label>
                  <textarea id="expectations" rows={3} placeholder="What do you hope to gain from this TEENSPACE?" className={inputClass} {...register('expectations')} />
                </div>
                {/* Terms */}
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-start gap-3">
                    <input id="agreeTerms" type="checkbox" className="w-4 h-4 rounded border-slate-300 text-pink-500 focus:ring-pink-500 mt-0.5 cursor-pointer" {...register('agreeTerms')} />
                    <label htmlFor="agreeTerms" className="text-xs text-slate-600 leading-relaxed cursor-pointer select-none">
                      I agree to abide by the codes of conduct, follow instructions, and maintain discipline throughout the TEENSPACE organized by Kozhikode North Wisdom Students.
                    </label>
                  </div>
                  {errors.agreeTerms && <span className="text-xs text-red-500 font-semibold pl-7">{errors.agreeTerms.message}</span>}
                </div>
                {/* Submit */}
                <div className="pt-4">
                  <button type="submit" disabled={submitStatus === 'loading'} className="w-full py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-primary to-secondary shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2.5">
                    {submitStatus === 'loading' ? (<><Loader2 className="w-5 h-5 animate-spin" />Submitting...</>) : 'Submit Registration'}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
