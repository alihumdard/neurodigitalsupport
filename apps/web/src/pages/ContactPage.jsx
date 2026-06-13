import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  Accessibility,
  ArrowRight,
  AtSign,
  Building2,
  CalendarDays,
  Clock3,
  Database,
  Handshake,
  Headphones,
  LockKeyhole,
  Mail,
  MessageSquare,
  Send,
  ShieldAlert
} from 'lucide-react';
import { toast } from 'sonner';
import Footer from '@/components/Footer.jsx';
import Header from '@/components/Header.jsx';
import { submitContactForm } from '@/api/api.js';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactCategories = [
  {
    title: 'General Enquiries',
    description: 'For questions about our ecosystem, accessibility settings, pricing, or anything else.',
    email: 'info@neurodigitalsupport.com',
    icon: Mail
  },
  {
    title: 'Support & Technical Help',
    description: 'For users of NuroTok, AltiTok, OliTok, Care Logging App, or any other NeuroDigital tool. We also offer guided onboarding for teams.',
    email: 'support@neurodigitalsupport.com',
    icon: Headphones
  },
  {
    title: 'Research & Insights Hub',
    description: 'For researchers, institutions, charities, and policymakers. Request access to anonymised datasets, collaborate on studies, or enquire about research partnerships.',
    email: 'research@neurodigitalsupport.com',
    icon: Database
  },
  {
    title: 'Media & Partnerships',
    description: 'For press enquiries, speaking engagements, strategic partnerships, or volunteering with OliTok.',
    email: 'partners@neurodigitalsupport.com',
    icon: Handshake
  }
];

const responseTimes = [
  {
    text: 'General enquiries: within 48 hours',
    icon: Clock3
  },
  {
    text: 'Technical support (users): within 24 hours',
    icon: Headphones
  },
  {
    text: 'Safeguarding or urgent welfare concerns: within 4 hours (please mark "URGENT" in subject line).',
    icon: ShieldAlert
  }
];

const subjectOptions = [
  'General enquiry',
  'Technical support',
  'Research collaboration',
  'Media / partnership',
  'Feedback or testimonial',
  'Other'
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    responseMethod: 'email',
    phoneNumber: '',
    consent: false
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field) => (event) => {
    const value = event?.target?.value ?? '';

    setFormData((current) => ({
      ...current,
      [field]: value
    }));

    setFieldErrors((current) => ({
      ...current,
      [field]: undefined
    }));
  };

  const handleConsentChange = (checked) => {
    setFormData((current) => ({
      ...current,
      consent: checked === true
    }));

    setFieldErrors((current) => ({
      ...current,
      consent: undefined
    }));
  };

  const handleResponseMethodChange = (event) => {
    const value = event.target.value;

    setFormData((current) => ({
      ...current,
      responseMethod: value
    }));

    setFieldErrors((current) => ({
      ...current,
      responseMethod: undefined,
      email: value === 'email' ? current.email : undefined,
      phoneNumber: value === 'phone' ? current.phoneNumber : undefined
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!formData.subject) {
      nextErrors.subject = 'Please select a subject.';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Please enter your message.';
    }

    if (!formData.consent) {
      nextErrors.consent = 'Please confirm consent before sending your message.';
    }

    if (formData.responseMethod === 'email' && !formData.email.trim()) {
      nextErrors.email = 'Email is required when email is your preferred response method.';
    }

    if (formData.responseMethod === 'phone' && !formData.phoneNumber.trim()) {
      nextErrors.phoneNumber = 'Phone number is required when phone is your preferred response method.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors);
      toast.error('Please fix the highlighted fields and try again.');
      return;
    }

    setIsSubmitting(true);
    setFieldErrors({});

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject,
        message: formData.message.trim(),
        response_method: formData.responseMethod
      };

      if (formData.responseMethod === 'phone' && formData.phoneNumber.trim()) {
        payload.phone_number = formData.phoneNumber.trim();
      }

      const response = await submitContactForm(payload);

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        responseMethod: 'email',
        phoneNumber: '',
        consent: false
      });
      toast.success(response?.message || 'Your message has been submitted.');
    } catch (error) {
      toast.error(error.message || 'We could not submit your message right now.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Helmet>
      <title>Contact NeuroDigital Support | Demo, partnership, support</title>
      <meta
        name="description"
        content="Contact NeuroDigital Support for demos, partnerships, accessibility advice, research enquiries, or support for autistic and neurodivergent adults."
      />
    </Helmet>

    <Header />

    <main className="theme-aware-page min-h-screen bg-[#fbfffd] text-[#102f28]">
      <section className="relative overflow-hidden border-b border-[#dbece5] bg-[linear-gradient(115deg,#ffffff_0%,#fbfffd_48%,#edf8f3_100%)]">
        <div className="absolute -right-28 -top-28 h-[34rem] w-[34rem] rounded-full border border-[#d3eee4] bg-[#e6f7f1]/45" aria-hidden="true" />
        <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-[#cdeee1]/35 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1160px] items-center gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
          <div>
            <h1 className="text-balance text-3xl font-semibold leading-[1.15] tracking-normal text-[#0a332b] sm:text-4xl lg:text-5xl">
              Contact Us
            </h1>
            <p className="mt-7 max-w-3xl text-balance text-lg font-medium leading-8 text-[#405b54] sm:text-xl">
              We&apos;re here to help. Whether you are an individual exploring our tools, a care provider seeking a demo, a researcher seeking data access, or an organisation interested in a partnership, reach out.
            </p>
            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#cae7dc] bg-white/72 px-5 py-3 text-sm font-semibold text-[#155f4c] shadow-[0_18px_45px_rgba(15,61,50,0.08)] backdrop-blur-xl">
              <Clock3 className="h-4 w-4" aria-hidden="true" />
              <span>Our team aims to respond within two working days.</span>
            </div>
          </div>

          <div className="rounded-3xl border border-[#dbece5] bg-white/76 p-7 shadow-[0_28px_80px_rgba(15,61,50,0.1)] backdrop-blur-xl sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f7f1] text-[#167158]">
              <ShieldAlert className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="mt-5 text-base font-semibold leading-7 text-[#102f28]">
              For immediate crisis support, please contact NHS 111 or your local mental health crisis team. NeuroDigital Support is not a crisis service.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#dbece5] bg-[#fbfffd] p-4 text-sm font-semibold text-[#31544c]">
              <Clock3 className="h-5 w-5 text-[#167158]" aria-hidden="true" />
              <span>Safeguarding or urgent welfare concerns: within 4 hours (please mark "URGENT" in subject line).</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e4f1ec] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {contactCategories.map(({ title, description, email, icon: Icon }) => (
              <article
                key={title}
                className="flex min-h-[17rem] flex-col rounded-3xl border border-[#dbece5] bg-white p-6 shadow-[0_16px_50px_rgba(15,61,50,0.055)] transition duration-300 hover:-translate-y-1 hover:border-[#bfe1d5] hover:shadow-[0_24px_70px_rgba(15,61,50,0.09)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f7f1] text-[#167158]">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-xl font-semibold leading-tight tracking-normal text-[#102f28]">{title}</h2>
                <p className="mt-3 flex-1 text-sm font-medium leading-6 text-[#536b64]">{description}</p>
                <a
                  href={`mailto:${email}`}
                  title={email}
                  className="mt-6 inline-flex h-11 w-full items-center justify-between gap-2 rounded-xl border border-[#bfe1d5] bg-[#f3fbf7] px-3 text-xs font-bold text-[#0f765a] shadow-[0_10px_24px_rgba(15,61,50,0.045)] transition duration-300 hover:border-[#167158] hover:bg-[#e5f5ee] hover:text-[#0b4f3f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#167158] focus-visible:ring-offset-2"
                >
                  <AtSign className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="min-w-0 flex-1 truncate text-left">{email}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbfffd] py-8 sm:py-12">
        <div className="mx-auto grid max-w-[1160px] gap-6 px-5 sm:px-8 lg:grid-cols-[1.35fr_0.75fr] lg:px-10">
          <div className="rounded-3xl border border-[#dbece5] bg-white p-6 shadow-[0_18px_60px_rgba(15,61,50,0.06)] sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8f7f1] text-[#167158]">
                <MessageSquare className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-semibold leading-tight tracking-normal text-[#102f28] sm:text-3xl">
                Send a Message Directly
              </h2>
            </div>

            <form className="mt-7 grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  aria-label="Full name (optional)"
                  placeholder="Full name (optional)"
                  value={formData.name}
                  onChange={handleInputChange('name')}
                  className="h-12 rounded-xl border-[#d2e7df] bg-white px-4 text-sm font-medium shadow-none"
                />
                <Input
                  aria-label={formData.responseMethod === 'email' ? 'Email address (required)' : 'Email address (optional)'}
                  placeholder={formData.responseMethod === 'email' ? 'Email address (required)' : 'Email address (optional)'}
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  className="h-12 rounded-xl border-[#d2e7df] bg-white px-4 text-sm font-medium shadow-none"
                />
              </div>
              {fieldErrors.name ? <p className="text-sm font-medium text-[#a42d22]">{fieldErrors.name}</p> : null}
              {fieldErrors.email ? <p className="text-sm font-medium text-[#a42d22]">{fieldErrors.email}</p> : null}
              <select
                aria-label="Subject Dropdown"
                className="h-12 rounded-xl border border-[#d2e7df] bg-white px-4 text-sm font-medium text-[#102f28] shadow-none outline-none transition focus-visible:ring-2 focus-visible:ring-[#167158] focus-visible:ring-offset-2"
                value={formData.subject}
                onChange={handleInputChange('subject')}
              >
                <option value="" disabled hidden>Select a subject</option>
                {subjectOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {fieldErrors.subject ? <p className="text-sm font-medium text-[#a42d22]">{fieldErrors.subject}</p> : null}
              <Textarea
                aria-label="Message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange('message')}
                className="min-h-36 rounded-xl border-[#d2e7df] bg-white px-4 py-3 text-sm font-medium shadow-none"
              />
              {fieldErrors.message ? <p className="text-sm font-medium text-[#a42d22]">{fieldErrors.message}</p> : null}

              <fieldset className="rounded-2xl border border-[#dbece5] bg-[#fbfffd] p-4">
                <legend className="px-2 text-sm font-semibold text-[#102f28]">Preferred response method</legend>
                <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <label className="inline-flex items-center gap-2 text-sm font-medium text-[#31544c]">
                    <input
                      type="radio"
                      name="response-method"
                      value="email"
                      className="h-4 w-4 accent-[#167158]"
                      checked={formData.responseMethod === 'email'}
                      onChange={handleResponseMethodChange}
                    />
                    Email
                  </label>
                  <label className="inline-flex items-center gap-2 text-sm font-medium text-[#31544c]">
                    <input
                      type="radio"
                      name="response-method"
                      value="phone"
                      className="h-4 w-4 accent-[#167158]"
                      checked={formData.responseMethod === 'phone'}
                      onChange={handleResponseMethodChange}
                    />
                    Phone
                  </label>
                  <span className="text-xs font-medium text-[#637a73]">we will use your selected method to reply</span>
                </div>
              </fieldset>
              {fieldErrors.responseMethod ? <p className="text-sm font-medium text-[#a42d22]">{fieldErrors.responseMethod}</p> : null}

              {formData.responseMethod === 'phone' ? (
                <>
                  <Input
                    aria-label="Phone number"
                    placeholder="Phone number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange('phoneNumber')}
                    className="h-12 rounded-xl border-[#d2e7df] bg-white px-4 text-sm font-medium shadow-none"
                  />
                  {fieldErrors.phoneNumber ? <p className="text-sm font-medium text-[#a42d22]">{fieldErrors.phoneNumber}</p> : null}
                </>
              ) : null}

              <label className="flex items-start gap-3 rounded-2xl border border-[#dbece5] bg-white p-4 text-xs font-medium leading-5 text-[#405b54]">
                <Checkbox
                  checked={formData.consent}
                  onCheckedChange={handleConsentChange}
                  className="mt-0.5 h-4 w-4 rounded border-[#9fcdbc] data-[state=checked]:bg-[#167158] data-[state=checked]:text-white"
                />
                <span>I agree to NeuroDigital Support storing my message and contacting me about this enquiry. We do not use your data for marketing unless you opt in separately.</span>
              </label>
              {fieldErrors.consent ? <p className="text-sm font-medium text-[#a42d22]">{fieldErrors.consent}</p> : null}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 h-12 rounded-xl bg-[#087653] text-sm font-semibold text-white shadow-[0_14px_34px_rgba(8,118,83,0.24)] transition duration-300 hover:bg-[#075f45]"
              >
                <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                {isSubmitting ? 'Sending...' : 'Send message'}
              </Button>
            </form>
          </div>

          <aside className="rounded-3xl border border-[#dbece5] bg-[linear-gradient(145deg,#ffffff_0%,#f1faf6_100%)] p-6 shadow-[0_18px_60px_rgba(15,61,50,0.06)] sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f7f1] text-[#167158]">
              <Building2 className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-normal text-[#102f28]">Office & Correspondence</h2>
            <p className="mt-5 text-sm font-medium leading-7 text-[#536b64]">
              NeuroDigital Support Ltd (Registered address available on request - we operate primarily remotely to reduce environmental impact and support neurodivergent working patterns.) For formal documentation or safeguarding concerns, please use the support or research email addresses above.
            </p>
            <div className="mt-7 space-y-4">
              <div className="flex gap-3 rounded-2xl border border-[#dbece5] bg-white p-4">
                <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[#167158]" aria-hidden="true" />
                <p className="text-sm font-semibold leading-6 text-[#31544c]">Our team aims to respond within two working days.</p>
              </div>
              <div className="flex gap-3 rounded-2xl border border-[#dbece5] bg-white p-4">
                <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-[#167158]" aria-hidden="true" />
                <p className="text-sm font-semibold leading-6 text-[#31544c]">For formal documentation or safeguarding concerns, please use the support or research email addresses above.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#fbfffd] pb-8">
        <div className="mx-auto grid max-w-[1160px] gap-5 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <article className="rounded-3xl border border-[#dbece5] bg-white p-6 shadow-[0_16px_48px_rgba(15,61,50,0.055)] sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e8f7f1] text-[#167158]">
                <CalendarDays className="h-7 w-7" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-xl font-semibold leading-tight tracking-normal text-[#102f28]">Book a Demo</h2>
                <p className="mt-2 text-sm font-medium leading-6 text-[#536b64]">
                  See our ecosystem in action - tailored for care teams, universities, employers, or researchers.
                </p>
                <Button className="mt-4 h-10 rounded-xl border border-[#167158] bg-white px-4 text-sm font-semibold text-[#0f765a] shadow-none hover:bg-[#e8f7f1]">
                  Book a 30min demo &raquo;
                </Button>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-[#dbece5] bg-white p-6 shadow-[0_16px_48px_rgba(15,61,50,0.055)] sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#e8f7f1] text-[#167158]">
                <Building2 className="h-7 w-7" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-xl font-semibold leading-tight tracking-normal text-[#102f28]">Office & Correspondence</h2>
                <p className="mt-2 text-sm font-medium leading-6 text-[#536b64]">
                  NeuroDigital Support Ltd (Registered address available on request - we operate primarily remotely to reduce environmental impact and support neurodivergent working patterns.) For formal documentation or safeguarding concerns, please use the support or research email addresses above.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#fbfffd] pb-20 dark:bg-background sm:pb-24">
        <div className="mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-10">
          <div className="theme-surface rounded-3xl border border-[#dbece5] bg-[linear-gradient(145deg,#ffffff_0%,#f2faf7_100%)] p-6 shadow-[0_22px_70px_rgba(15,61,50,0.075)] dark:bg-none sm:p-8">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-[#167158]" aria-hidden="true" />
              <h2 className="text-2xl font-semibold leading-tight tracking-normal text-[#102f28]">Response Times & Safeguarding</h2>
            </div>

            <ul className="mt-6 grid gap-4 lg:grid-cols-3">
              {responseTimes.map(({ text, icon: Icon }) => (
                <li key={text} className="flex gap-4 rounded-2xl border border-[#dbece5] bg-white p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8f7f1] text-[#167158]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold leading-6 text-[#31544c]">{text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex gap-4 rounded-2xl border border-[#f1c8c1] bg-[#fff7f5] p-5 text-sm font-semibold leading-6 text-[#a42d22] dark:border-red-400/25 dark:bg-red-950/20 dark:text-red-100">
              <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <p>For immediate crisis support, please contact NHS 111 or your local mental health crisis team. NeuroDigital Support is not a crisis service.</p>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              <article className="flex gap-4 rounded-2xl border border-[#dbece5] bg-white p-5">
                <Accessibility className="mt-1 h-7 w-7 shrink-0 text-[#102f28]" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-semibold text-[#102f28]">Accessibility Options</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-[#536b64]">
                    Need this page in a different format? Large print, Easy read, Screenreader optimised text. Email info@neurodigitalsupport.com with "Accessible contact format" in the subject line.
                  </p>
                </div>
              </article>

              <article className="flex gap-4 rounded-2xl border border-[#dbece5] bg-white p-5">
                <AtSign className="mt-1 h-7 w-7 shrink-0 text-[#102f28]" aria-hidden="true" />
                <p className="text-sm font-semibold leading-6 text-[#31544c]">
                  We read every message. Your input shapes our roadmap, whether it&apos;s a feature request, a bug report, or simply sharing how our tools have helped you.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
    </>
  );
};

export default ContactPage;
