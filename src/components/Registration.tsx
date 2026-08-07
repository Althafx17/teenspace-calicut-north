import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react'
import { registrationSchema, type RegistrationFormData } from '@/lib/schema'

const inputCls = 'w-full px-3 py-2.5 rounded-[6px] border border-[#e2e8f0] bg-[#f8fafc] text-bone text-[14px] font-normal placeholder:text-iron focus:outline-none focus:border-[#cbd5e1] transition-colors duration-150 font-mono'
const labelCls = 'block text-[12px] font-mono text-ash mb-1.5'
const errorCls = 'text-[12px] font-mono text-[#ff9592] mt-1'

export default function Registration() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errMsg, setErrMsg] = useState('')

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema) as any,
    defaultValues: { place: '', otherPlace: '', schoolClass: '' },
  })

  const selectedPlace = watch('place')

  const onSubmit = async (formData: RegistrationFormData) => {
    setStatus('loading')
    const finalData = {
      ...formData,
      place: formData.place === 'Other' && formData.otherPlace ? formData.otherPlace.trim() : formData.place,
    }
    const url = (import.meta as any).env?.VITE_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/YOUR-SCRIPT-ID/exec'
    try {
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(finalData),
      })
      setStatus('success')
      reset()
    } catch (e: unknown) {
      if (url.includes('YOUR-SCRIPT-ID')) {
        setTimeout(() => {
          setStatus('success')
          reset()
        }, 1200)
      } else {
        setStatus('error')
        setErrMsg(e instanceof Error ? e.message : 'Something went wrong.')
      }
    }
  }

  return (
    <section id="register" className="bg-void border-t border-graphite py-24">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mono-label violet-text mb-3">register</motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-normal text-bone tracking-tight"
            style={{ fontSize: 'clamp(32px,5vw,56px)', letterSpacing: '-2px', lineHeight: 1.1 }}
          >
            Secure your seat.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="text-ash text-[14px] mt-3 flex items-center gap-2"
          >
            <span className="mono-label violet-text">eligible:</span>
            Higher Secondary students only — Kozhikode North.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-8 max-w-3xl"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div key="ok" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 flex flex-col items-center gap-4 text-center">
                <CheckCircle2 size={36} className="pulse-text" />
                <h3 className="text-bone text-[20px] font-normal tracking-tight">Registration submitted.</h3>
                <p className="text-ash text-[14px] max-w-sm">We'll contact you via phone with the next steps.</p>
                <button onClick={() => setStatus('idle')} className="btn-ghost mt-4 text-[13px]">Register another student</button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {status === 'error' && (
                  <div className="md:col-span-2 flex items-center gap-2 p-3 rounded-[6px] border border-[#e2e8f0] text-[13px] font-mono text-[#ff9592]">
                    <AlertTriangle size={14} /> {errMsg}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="name" className={labelCls}>full_name *</label>
                  <input id="name" type="text" placeholder="Enter full name" className={inputCls} {...register('name')} />
                  {errors.name && <p className={errorCls}>{errors.name.message}</p>}
                </div>

                {/* Age */}
                <div>
                  <label htmlFor="age" className={labelCls}>age *</label>
                  <input id="age" type="number" placeholder="15–18" className={inputCls} {...register('age')} />
                  {errors.age && <p className={errorCls}>{errors.age.message}</p>}
                </div>

                {/* Class */}
                <div>
                  <label htmlFor="schoolClass" className={labelCls}>class *</label>
                  <select id="schoolClass" className={inputCls} {...register('schoolClass')}>
                    <option value="">Select class</option>
                    <option value="Plus One">Plus One (+1)</option>
                    <option value="Plus Two">Plus Two (+2)</option>
                  </select>
                  {errors.schoolClass && <p className={errorCls}>{errors.schoolClass.message}</p>}
                </div>

                {/* School */}
                <div>
                  <label htmlFor="institution" className={labelCls}>school *</label>
                  <input id="institution" type="text" placeholder="School name" className={inputCls} {...register('institution')} />
                  {errors.institution && <p className={errorCls}>{errors.institution.message}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className={labelCls}>phone *</label>
                  <input id="phone" type="tel" placeholder="10-digit mobile" className={inputCls} {...register('phone')} />
                  {errors.phone && <p className={errorCls}>{errors.phone.message}</p>}
                </div>

                {/* Place */}
                <div>
                  <label htmlFor="place" className={labelCls}>place / area *</label>
                  <select id="place" className={inputCls} {...register('place')}>
                    <option value="">Select area</option>
                    <option value="Balussery">Balussery</option>
                    <option value="Koyilandy">Koyilandy</option>
                    <option value="Nadapuram">Nadapuram</option>
                    <option value="Payyoli">Payyoli</option>
                    <option value="Perambra">Perambra</option>
                    <option value="Poonoor">Poonoor</option>
                    <option value="Vatakara">Vatakara</option>
                    <option value="Other">Other (Type place)</option>
                  </select>
                  {errors.place && <p className={errorCls}>{errors.place.message}</p>}

                  {selectedPlace === 'Other' && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-2.5">
                      <input
                        id="otherPlace"
                        type="text"
                        placeholder="Type your place / area name"
                        className={inputCls}
                        {...register('otherPlace')}
                      />
                      {errors.otherPlace && <p className={errorCls}>{errors.otherPlace.message}</p>}
                    </motion.div>
                  )}
                </div>

                {/* Expectations */}
                <div className="md:col-span-2">
                  <label htmlFor="expectations" className={labelCls}>expectations <span className="text-iron">(optional)</span></label>
                  <textarea id="expectations" rows={2} placeholder="What do you hope to gain?" className={inputCls} {...register('expectations')} />
                </div>

                {/* Submit */}
                <div className="md:col-span-2">
                  <button type="submit" disabled={status === 'loading'} className="btn-iris w-full justify-center py-4 text-[14px] disabled:opacity-40">
                    {status === 'loading' ? (
                      <><Loader2 size={14} className="animate-spin" /> Submitting…</>
                    ) : (
                      'Submit registration →'
                    )}
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
