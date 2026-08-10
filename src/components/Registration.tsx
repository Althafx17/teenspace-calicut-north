import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react'
import { registrationSchema, type RegistrationFormData } from '@/lib/schema'

export default function Registration() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errMsg, setErrMsg] = useState('')

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema) as any,
    defaultValues: { place: '', otherPlace: '', schoolClass: '', otherClass: '' },
  })

  const selectedPlace = watch('place')
  const selectedClass = watch('schoolClass')

  const onSubmit = async (formData: RegistrationFormData) => {
    setStatus('loading')
    const finalData = {
      ...formData,
      place: formData.place === 'Other' && formData.otherPlace ? formData.otherPlace.trim() : formData.place,
      schoolClass: formData.schoolClass === 'Other' && formData.otherClass ? formData.otherClass.trim() : formData.schoolClass,
    }
    const url = (import.meta as any).env?.VITE_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxAs8s_fy9zmWneJZWG5dXoMXo9MLcnvW_5lvZICIcUfVNxQPlivsKJNJmdudT70tv0cA/exec'
    try {
      await fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(finalData),
      })
      setStatus('success')
      reset()
    } catch (e: unknown) {
      if (url.includes('YOUR-SCRIPT-ID')) {
        setTimeout(() => { setStatus('success'); reset() }, 1200)
      } else {
        setStatus('error')
        setErrMsg(e instanceof Error ? e.message : 'Something went wrong.')
      }
    }
  }

  return (
    <section id="register" className="bg-white border-t border-[#e5e7eb] py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="section-label mb-3">Registration</p>
          <h2 className="heading-lg mb-2">Secure your seat.</h2>
          <p className="text-[#64748b] text-sm">
            <span className="font-bold text-[#dc2626]">Eligible:</span> Higher Secondary students — Kozhikode North only.
          </p>
        </div>

        {/* Form Card */}
        <div className="card-flat max-w-2xl">
          {status === 'success' ? (
            <div className="py-12 flex flex-col items-center gap-4 text-center">
              <CheckCircle2 size={40} className="text-[#dc2626]" />
              <h3 className="heading-sm">Registration submitted.</h3>
              <p className="text-[#64748b] text-sm max-w-xs">We'll contact you via phone with the next steps.</p>
              <button onClick={() => setStatus('idle')} className="btn-ghost mt-2">Register another student</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {status === 'error' && (
                <div className="sm:col-span-2 flex items-center gap-2 p-3 rounded-lg border border-red-200 bg-red-50 text-sm text-[#dc2626] font-semibold">
                  <AlertTriangle size={15} /> {errMsg}
                </div>
              )}

              {/* Name */}
              <div>
                <label htmlFor="name" className="label-field">Full Name *</label>
                <input id="name" type="text" placeholder="Enter full name" className="input-field" {...register('name')} />
                {errors.name && <p className="error-field">{errors.name.message}</p>}
              </div>

              {/* Class */}
              <div>
                <label htmlFor="schoolClass" className="label-field">Class *</label>
                <select id="schoolClass" className="input-field" {...register('schoolClass')}>
                  <option value="">Select class</option>
                  <option value="Plus One">Plus One (+1)</option>
                  <option value="Plus Two">Plus Two (+2)</option>
                  <option value="Other">Other</option>
                </select>
                {errors.schoolClass && <p className="error-field">{errors.schoolClass.message}</p>}
                {selectedClass === 'Other' && (
                  <input
                    id="otherClass"
                    type="text"
                    placeholder="Type your class / course"
                    className="input-field mt-2"
                    {...register('otherClass')}
                  />
                )}
              </div>

              {/* School */}
              <div>
                <label htmlFor="institution" className="label-field">School *</label>
                <input id="institution" type="text" placeholder="School name" className="input-field" {...register('institution')} />
                {errors.institution && <p className="error-field">{errors.institution.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="label-field">Phone *</label>
                <input id="phone" type="tel" placeholder="10-digit mobile" className="input-field" {...register('phone')} />
                {errors.phone && <p className="error-field">{errors.phone.message}</p>}
              </div>

              {/* Place */}
              <div>
                <label htmlFor="place" className="label-field">Area *</label>
                <select id="place" className="input-field" {...register('place')}>
                  <option value="">Select area</option>
                  <option value="Balussery">Balussery</option>
                  <option value="Koyilandy">Koyilandy</option>
                  <option value="Nadapuram">Nadapuram</option>
                  <option value="Payyoli">Payyoli</option>
                  <option value="Perambra">Perambra</option>
                  <option value="Poonoor">Poonoor</option>
                  <option value="Vatakara">Vatakara</option>
                  <option value="Other">Other</option>
                </select>
                {errors.place && <p className="error-field">{errors.place.message}</p>}
                {selectedPlace === 'Other' && (
                  <input
                    id="otherPlace"
                    type="text"
                    placeholder="Type your area"
                    className="input-field mt-2"
                    {...register('otherPlace')}
                  />
                )}
              </div>

              {/* Expectations */}
              <div className="sm:col-span-2">
                <label htmlFor="expectations" className="label-field">Expectations <span className="normal-case font-normal text-[#9ca3af]">(optional)</span></label>
                <textarea id="expectations" rows={3} placeholder="What do you hope to gain?" className="input-field" {...register('expectations')} />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center py-3 disabled:opacity-40"
                >
                  {status === 'loading' ? (
                    <><Loader2 size={15} className="animate-spin" /> Submitting…</>
                  ) : (
                    'Submit Registration →'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
