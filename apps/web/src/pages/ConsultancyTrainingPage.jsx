import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
  ArrowRight,
  BookOpenCheck,
  Briefcase,
  Building2,
  ChartNoAxesCombined,
  Check,
  ClipboardCheck,
  Compass,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Landmark,
  Lightbulb,
  Mail,
  Megaphone,
  MessagesSquare,
  Microscope,
  NotebookPen,
  Palette,
  PenLine,
  Presentation,
  Route,
  ScanSearch,
  Send,
  ShieldCheck,
  Sparkles,
  UsersRound
} from 'lucide-react';
import { canonicalFor } from '@/lib/seo';
import { submitContactForm } from '@/api/api';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import AffiliationsSection from '@/components/AffiliationsSection.jsx';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Copy: NeuroDigital_Support_Consultancy_Training_Workshops.docx (supplied by the client).

const PAGE_PATH = '/consultancy-training-workshops';
const EMAIL = 'info@neurodigitalsupport.com';

const audiences = [
  { title: 'Care providers and supported living services', text: 'Help staff recognise sensory needs, support digital choice and improve everyday recording and communication.', icon: HandHeart },
  { title: 'Employers and HR teams', text: 'Develop more inclusive digital workplaces, staff communications and approaches to employee wellbeing.', icon: Briefcase },
  { title: 'Universities and education providers', text: 'Improve digital learning experiences, student communications and access to support.', icon: GraduationCap },
  { title: 'Charities and community organisations', text: 'Build accessible campaigns, strengthen advocacy and support meaningful online participation.', icon: UsersRound },
  { title: 'Public sector organisations', text: 'Identify barriers in digital services and develop clearer, more inclusive ways to engage communities.', icon: Landmark },
  { title: 'Researchers and innovation teams', text: 'Explore lived experience, interpret community insights and involve neurodivergent people in service development.', icon: Microscope },
  { title: 'Product, design and marketing teams', text: 'Create calmer interfaces, accessible content and more considerate online experiences.', icon: Palette }
];

const services = [
  { title: 'Consultancy', text: 'Focused advice to help you understand a challenge, review your current approach and develop a practical improvement plan. We work with your team to connect inclusion goals with decisions about services, communications, technology and support.', icon: Compass },
  { title: 'Training', text: "Structured learning that builds knowledge, confidence and practical skills. Choose a focused module or combine topics into a programme suited to your team's responsibilities and experience.", icon: BookOpenCheck },
  { title: 'Workshops', text: 'Facilitated sessions where participants explore real situations, share perspectives and work on a defined challenge. Activities can focus on your own content, service journey, campaign or support process, with clear next steps to take away.', icon: Presentation }
];

const consultancyAreas = [
  {
    title: 'Digital inclusion and sensory accessibility',
    icon: ScanSearch,
    text: 'Review how people experience your website, app, online forms, learning materials or internal systems. Explore barriers linked to navigation, language, information density, motion, sound, notifications and the effort needed to complete a task.',
    outputs: 'A prioritised barrier review, recommendations for calmer digital experiences and an improvement roadmap with agreed responsibilities.'
  },
  {
    title: 'Neuroinclusive workplaces and learning environments',
    icon: Building2,
    text: 'Examine how digital tools and communication practices affect participation at work or in education. Identify ways to make instructions clearer, offer communication choices, reduce unnecessary interruption and support individual preferences.',
    outputs: 'A digital communication guide, staff learning priorities and practical recommendations for improving access and participation.'
  },
  {
    title: 'Digital wellbeing and care practice',
    icon: HeartPulse,
    text: "Help teams recognise the relationship between digital environments, sensory experiences and everyday wellbeing. Explore person-centred use of NuroTok and approaches to recording observations through the Care Logging App, while keeping the individual's preferences and choices central.",
    outputs: 'A staff support workflow, guidance on objective sensory observations and a plan for introducing relevant tools into existing practice.'
  },
  {
    title: 'Digital advocacy and community engagement',
    icon: Megaphone,
    text: 'Develop accessible campaigns that communicate a clear issue, include community perspectives and invite meaningful action. Explore how the Digital Advocacy Hub can support awareness activities, resources and campaign planning.',
    outputs: 'A campaign plan, accessible messaging framework, stakeholder map and suitable measures of engagement.'
  },
  {
    title: 'Research insights and responsible innovation',
    icon: Microscope,
    text: 'Use the Research & Insights Hub and Social Listening Dashboard to explore questions affecting neurodivergent communities. We help teams think critically about themes, evidence gaps and the limits of online data, and translate relevant findings into service questions and improvement priorities.',
    outputs: 'An insight brief, research questions, a community engagement approach and recommendations for further investigation.'
  }
];

const modules = [
  {
    title: 'Digital inclusion in practice',
    intro: 'Understand why access to a device or internet connection does not always mean someone can participate comfortably or independently.',
    topics: 'Barriers to access and use; digital confidence; cognitive and sensory accessibility; clear navigation; accessible documents and forms; user choice; alternative ways to complete tasks.',
    activity: 'Review a digital journey and identify where a user may need clearer information, more control or another route.',
    outcome: 'Identify common barriers and propose realistic improvements to digital participation.'
  },
  {
    title: 'Digital advocacy and accessible campaigning',
    intro: 'Develop the skills to communicate an issue, amplify community perspectives and encourage informed action.',
    topics: 'Advocacy goals; self-advocacy; accessible storytelling; respectful representation; consent; campaign planning; stakeholder engagement; online petitions; evaluating engagement. Includes resources from the Digital Advocacy Hub.',
    activity: 'Create a campaign outline with a defined audience, accessible message and clear call to action.',
    outcome: 'Plan an inclusive digital campaign that respects the people whose experiences it represents.'
  },
  {
    title: 'Neurodiversity and sensory-aware digital environments',
    intro: 'Explore how people can experience the same digital environment differently, and why individual preferences matter.',
    topics: 'Neurodiversity awareness; sensory differences; cognitive load; information processing; communication preferences; visual clutter; sound; motion; notifications; avoiding assumptions about support needs.',
    activity: 'Review an interface and suggest options that give users more control over their experience.',
    outcome: 'Recognise potential sources of overload and explain how digital design and communication can be adapted.'
  },
  {
    title: 'Digital wellbeing and sensory self-regulation',
    intro: 'Explore practical ways to support more comfortable digital routines and personal awareness of sensory patterns.',
    topics: "Recognising personal triggers; balancing digital activity and breaks; sensory preferences; supportive check-ins; personal choice. Includes NuroTok's Personal Sensory Profile Engine, Adaptive Regulation Toolkit, Daily Check-Ins, Weekly Insights Dashboard and Predictive Overload Alerts.",
    activity: 'Develop a personal or team-supported digital wellbeing plan using a fictional scenario, without requiring participants to disclose personal health information.',
    outcome: 'Explain how sensory-aware tools and routines can support everyday wellbeing, while recognising that app insights are not a diagnosis or clinical assessment.'
  },
  {
    title: 'Safer social media and inclusive online communities',
    intro: 'Learn how communication choices, platform settings and moderation practices can support more respectful online participation.',
    topics: "Content boundaries; privacy choices; harmful interactions; reporting routes; moderation; social comparison; communication pace. Explore AltiTok's reduced-motion feeds, content filters, hidden popularity metrics, comment delay, AI tone moderation, Shield Mode, safe messaging and community spaces.",
    activity: 'Work through a community moderation scenario and draft a clear, proportionate response.',
    outcome: 'Identify practical ways to support safer participation and recognise when human review or escalation is needed.'
  },
  {
    title: 'Neuroinclusive workplaces and education',
    intro: 'Build confidence in making everyday digital communication and learning more accessible.',
    topics: 'Clear instructions; predictable communication; accessible meetings; digital onboarding; learning materials; communication preferences; responding respectfully to requests for adjustments.',
    activity: 'Redesign an onboarding message, meeting plan or learning activity to offer clearer information and flexible participation.',
    outcome: 'Apply practical changes that support colleagues, students and service users with different processing and communication needs.'
  },
  {
    title: 'Sensory-aware care and digital record keeping',
    intro: 'Support care teams to use digital records thoughtfully and maintain a person-centred approach.',
    topics: "Daily activity logs; mood observations; sensory triggers; behaviour notes; factual language; incident reporting; appropriate access; handovers. Includes the Care Logging App's voice input, real-time updates and exportable reports.",
    activity: 'Turn a fictional care scenario into an objective record that separates observation from interpretation.',
    outcome: "Record clearer information and use it to inform team discussions within the organisation's care and safeguarding procedures."
  },
  {
    title: 'Digital companionship and volunteer practice',
    intro: 'Explore how to support respectful online connection while maintaining clear roles and boundaries.',
    topics: "Active listening; communication choices; consent; emotional boundaries; confidentiality; recognising concerns; reporting and escalation; inclusive group facilitation. Uses OliTok's approach to matching, scheduled support, moderated groups and wellbeing check-ins as a practical context.",
    activity: 'Work through a friendship-support scenario and decide what to say, what to record and when to seek help.',
    outcome: "Demonstrate supportive communication and understand the limits of a volunteer role. This module does not replace OliTok's screening or mandatory onboarding requirements."
  },
  {
    title: 'Research literacy and social listening',
    intro: 'Understand how research and public online conversations can inform better questions and more thoughtful services.',
    topics: 'Reading evidence critically; lived-experience research; topic clusters; trends; sentiment; bias; representativeness; privacy; interpreting visual dashboards. Includes the Research & Insights Hub and Social Listening Dashboard.',
    activity: 'Interpret an example trend report and distinguish supported findings from assumptions.',
    outcome: 'Use research and community insights responsibly without treating online sentiment as representative of every neurodivergent person.'
  },
  {
    title: 'Ethical AI and inclusive digital innovation',
    intro: 'Explore how organisations can assess AI-supported features through the lens of accessibility, transparency and user choice.',
    topics: 'AI limitations; bias; consent; appropriate data use; explainability; human oversight; moderation errors; user feedback; involving neurodivergent people in design.',
    activity: 'Review an AI-supported feature and identify the questions to answer before introducing it into a service.',
    outcome: 'Recognise potential benefits and risks and identify where human judgement and meaningful user involvement are essential.'
  }
];

const workshops = [
  { title: 'Digital inclusion review', text: 'Examine a website, form or service journey and create a prioritised list of improvements.', icon: ScanSearch },
  { title: 'Calmer content workshop', text: 'Rework selected emails, social posts or learning materials for clarity, accessibility and sensory consideration.', icon: PenLine },
  { title: 'Digital advocacy campaign lab', text: 'Develop a campaign concept, audience message and action plan using Advocacy Hub resources.', icon: Megaphone },
  { title: 'Sensory-aware digital wellbeing workshop', text: 'Explore NuroTok and develop a practical approach to supporting individual preferences and routines.', icon: HeartPulse },
  { title: 'Safer community workshop', text: 'Use AltiTok and OliTok scenarios to practise communication boundaries, moderation and escalation decisions.', icon: ShieldCheck },
  { title: 'Care recording workshop', text: 'Use fictional scenarios to practise clear observations and structured records with the Care Logging App.', icon: NotebookPen },
  { title: 'Insight into action workshop', text: "Explore research or social listening findings and identify what they mean for your organisation's next steps.", icon: ChartNoAxesCombined },
  { title: 'Inclusive design workshop', text: 'Bring staff and intended users together to explore a service challenge and develop ideas for testing.', icon: Lightbulb }
];

// Short summaries of the delivery copy, used to balance the two delivery cards.
const deliveryFormats = ['Live online', 'In person', 'Blended'];
const deliveryLengths = ['Introductory session', 'Half-day workshop', 'Full-day programme', 'Series of sessions'];
const accessOptions = ['Advance agendas', 'Clear written instructions', 'Planned breaks', 'Reduced visual clutter', 'Captions', 'Different ways to contribute'];

const ecosystem = [
  { name: 'NuroTok', path: '/nurotok', text: 'Explore sensory profiles, regulation tools, daily check-ins and wellbeing insights.' },
  { name: 'AltiTok', path: '/altitok', text: 'Examine sensory-aware social design, content controls and community moderation.' },
  { name: 'Digital Advocacy Hub', path: '/digital-advocacy-hub', text: 'Use awareness materials, inclusion resources and campaign tools.' },
  { name: 'Research & Insights Hub', path: '/research-insights-hub', text: 'Explore studies, sensory environment reports and visual research insights.' },
  { name: 'Social Listening Dashboard', path: '/social-listening-dashboard', text: 'Understand emerging themes, topic clusters and public online conversations.' },
  { name: 'Care Logging App', path: '/care-logging', text: 'Practise structured observations, sensory trigger recording and team communication.' },
  { name: 'OliTok', path: '/olitok', text: 'Explore inclusive companionship, volunteer boundaries and supported online connection.' }
];

const steps = [
  { title: 'Understand your priorities', text: 'Tell us about your organisation, audience, challenges and what you want to improve.' },
  { title: 'Agree the scope', text: 'We propose relevant topics, delivery arrangements, outputs and fees, with accessibility requirements discussed before delivery.' },
  { title: 'Deliver practical support', text: 'Your team takes part in the agreed consultancy, training or workshop activities using relevant examples and resources.' },
  { title: 'Identify the next steps', text: 'We bring together learning and agreed actions so your team can continue the work. Follow-up support can be included in the proposal.' }
];

const faqs = [
  { q: 'Can you tailor a programme to our organisation?', a: 'Yes. We can combine modules and adapt examples, activities and outputs to your sector, team and priorities. Share your goals when enquiring so we can recommend a suitable approach.' },
  { q: 'Do participants need technical knowledge?', a: 'No technical background is needed for introductory sessions. For more specialised work, we agree the starting level and any preparation with you in advance.' },
  { q: 'Can we book a single workshop?', a: 'Yes. You can enquire about a standalone session, a combination of modules or a wider consultancy and training programme.' },
  { q: 'Can autistic and neurodivergent people take part?', a: 'Yes. Their perspectives are valuable to this work. We discuss accessible participation and make space for different ways of contributing, without expecting anyone to speak for an entire community.' },
  { q: 'How much does it cost?', a: 'Fees depend on the scope, preparation, delivery format, participant numbers and any follow-up support. Contact us for a tailored proposal that sets out what is included and any additional costs.' },
  { q: 'Does training include access to your apps and platforms?', a: 'Demonstrations and practical activities can form part of an agreed session. Ongoing access, subscriptions or licences are confirmed separately in the proposal.' },
  { q: 'Is this clinical care or an accredited qualification?', a: 'These services provide organisational advice, education and practical skills development. They do not provide diagnosis, therapy, legal advice or a substitute for specialist safeguarding training. Unless explicitly stated for a particular programme, training does not lead to an accredited qualification.' }
];

const SERVICE_OPTIONS = ['Consultancy', 'Training', 'Workshop', 'A combination', 'Not sure yet'];
const FORMAT_OPTIONS = ['Live online', 'In person', 'Blended', 'Not sure yet'];
const BUDGET_OPTIONS = ['Prefer not to say', 'Under £500', '£500 – £1,500', '£1,500 – £5,000', 'Over £5,000'];

const EMPTY_FORM = {
  name: '',
  organisation: '',
  email: '',
  service: '',
  topics: [],
  audience: '',
  format: '',
  dates: '',
  location: '',
  goals: '',
  access: '',
  budget: '',
  consent: false
};

// Shared visual pieces, matching the existing product and content pages.
const Chip = ({ children }) => (
  <span className="inline-flex rounded-full bg-[#eaf5f0] px-4 py-1.5 text-sm font-extrabold text-[#2f8066] dark:bg-emerald-950/70">{children}</span>
);

const SectionHeading = ({ chip, title, accent, children, center = true, as: Tag = 'h2' }) => (
  <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
    {chip && <Chip>{chip}</Chip>}
    <Tag className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#082f27] sm:text-4xl">
      {title}
      {accent && (
        <>
          {' '}
          <span className="text-[#2f8066]">{accent}</span>
        </>
      )}
    </Tag>
    {children && (
      <p className={`mt-4 text-base font-semibold leading-relaxed text-[#536862] ${center ? 'mx-auto max-w-2xl' : 'max-w-xl'}`}>
        {children}
      </p>
    )}
  </div>
);

// Section rhythm used across the page: one width, one vertical spacing.
const Section = ({ id, tone = 'white', className = '', children, ...rest }) => (
  <section
    id={id}
    className={`${id ? 'scroll-mt-20 ' : ''}${tone === 'mint' ? 'bg-[#f7fffb]' : 'bg-white'} py-8 lg:py-12 ${className}`}
    {...rest}
  >
    <div className="mx-auto max-w-[1220px] px-5 sm:px-8 lg:px-10">{children}</div>
  </section>
);

const buttonBase =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#167158] focus-visible:ring-offset-2';
const primaryButton = `${buttonBase} bg-[#4aa384] text-white shadow-[0_18px_42px_rgba(29,118,88,0.22)] hover:-translate-y-0.5 hover:bg-[#3f9275]`;
const outlineButton = `${buttonBase} border border-[#b7dcca] bg-white/80 text-[#17483b] hover:-translate-y-0.5 hover:border-[#8bc7ad] hover:bg-white`;

const cardClass = 'rounded-[1.25rem] border border-[#e0eee8] bg-white shadow-[0_14px_40px_rgba(15,50,40,0.045)]';
const iconTile = 'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eaf5f0] text-[#2f8066] dark:bg-emerald-950/70';

const Photo = ({ name, alt, className = '', eager = false, sizes = '(min-width: 1024px) 560px, 100vw' }) => (
  <img
    src={`/images/training/${name}-1600.webp`}
    srcSet={`/images/training/${name}-800.webp 800w, /images/training/${name}-1600.webp 1600w`}
    sizes={sizes}
    width="1600"
    height="900"
    alt={alt}
    loading={eager ? 'eager' : 'lazy'}
    decoding="async"
    className={`aspect-[16/9] w-full rounded-[1.5rem] object-cover shadow-[0_24px_64px_rgba(15,61,50,0.13)] ${className}`}
  />
);

const inputClass =
  'h-11 w-full rounded-xl border border-[#d2e7df] bg-white px-4 text-sm font-medium text-[#102f28] outline-none transition focus-visible:ring-2 focus-visible:ring-[#167158] focus-visible:ring-offset-2 aria-[invalid=true]:border-red-500';
const labelClass = 'mb-1.5 block text-sm font-bold text-[#17483b]';

const Field = ({ id, label, required, error, hint, children }) => (
  <div>
    <label htmlFor={id} className={labelClass}>
      {label}
      {required && <span className="text-red-600" aria-hidden="true"> *</span>}
    </label>
    {children}
    {hint && !error && <p id={`${id}-hint`} className="mt-1.5 text-xs font-medium text-[#6b817a]">{hint}</p>}
    {error && (
      <p id={`${id}-error`} className="mt-1.5 text-xs font-bold text-red-600">
        {error}
      </p>
    )}
  </div>
);

const ConsultancyTrainingPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (key) => (event) => {
    const value = event.target.type === 'checkbox' && key === 'consent' ? event.target.checked : event.target.value;
    setForm((current) => ({ ...current, [key]: value }));
  };

  const toggleTopic = (topic) => {
    setForm((current) => ({
      ...current,
      topics: current.topics.includes(topic) ? current.topics.filter((t) => t !== topic) : [...current.topics, topic]
    }));
  };

  // Buttons such as "Plan a Workshop" jump to the form with the matching service picked.
  const goToEnquiry = (service) => (event) => {
    event.preventDefault();
    if (service) setForm((current) => ({ ...current, service }));
    document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => document.getElementById('enquiry-name')?.focus({ preventScroll: true }), 450);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = 'Please enter a valid email address, like name@example.com.';
    if (!form.service) next.service = 'Please choose the service you are interested in.';
    if (!form.consent) next.consent = 'Please confirm you have read the privacy notice.';

    if (Object.keys(next).length) {
      setErrors(next);
      toast.error('Please check the highlighted fields.');
      const first = ['name', 'email', 'service', 'consent'].find((key) => next[key]);
      document.getElementById(`enquiry-${first}`)?.focus();
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const lines = [
      ['Organisation', form.organisation],
      ['Service of interest', form.service],
      ['Topics of interest', form.topics.join('; ')],
      ['Intended audience and approximate participants', form.audience],
      ['Preferred delivery format', form.format],
      ['Preferred dates', form.dates],
      ['Location (if in person)', form.location],
      ['Goals', form.goals],
      ['Accessibility arrangements to discuss', form.access],
      ['Budget range', form.budget]
    ]
      .filter(([, value]) => value && String(value).trim())
      .map(([label, value]) => `${label}: ${String(value).trim()}`);

    try {
      await submitContactForm({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: `Consultancy & Training enquiry: ${form.service}`,
        message: lines.join('\n') || 'No further details provided.',
        response_method: 'email'
      });
      setForm(EMPTY_FORM);
      navigate('/thank-you', {
        state: {
          message: 'Thank you for contacting NeuroDigital Support. We have received your enquiry and will get in touch to discuss your requirements.'
        }
      });
    } catch (error) {
      toast.error(error.message || 'We could not send your enquiry right now. Please try again or email us.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const describedBy = (id) => (errors[id.replace('enquiry-', '')] ? `${id}-error` : undefined);

  return (
    <>
      <Helmet>
        <title>Consultancy, Training &amp; Workshops | NeuroDigital Support</title>
        <meta
          name="description"
          content="Explore consultancy, training and workshops on digital inclusion, advocacy and sensory-aware digital experiences for organisations across the UK."
        />
        <link rel="canonical" href={canonicalFor(PAGE_PATH)} />
      </Helmet>

      <Header />

      <main className="theme-aware-page min-h-screen overflow-hidden bg-[#f8fffb] text-[#10231d]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f7fffb_38%,#dff6ed_100%)]">
          <div className="pointer-events-none absolute left-1/2 top-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#b7ead8]/30 blur-3xl dark:bg-emerald-500/10" aria-hidden="true" data-focus-distraction />
          <div className="relative mx-auto grid max-w-[1220px] content-center items-center gap-10 px-5 py-12 sm:px-8 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-12">
            <div className="text-center lg:text-left">
              <Chip>Services</Chip>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#082f27] sm:text-5xl">
                Consultancy, Training <span className="text-[#2f8066]">and Workshops</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-xl font-extrabold leading-snug text-[#17483b] lg:mx-0">
                Build digital environments where more people can participate
              </p>
              <p className="mx-auto mt-4 max-w-2xl text-base font-semibold leading-relaxed text-[#314b41] sm:text-lg lg:mx-0">
                Practical support for organisations that want to make technology, communication and services more inclusive of autistic and neurodivergent adults.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <a href="#enquiry" onClick={goToEnquiry()} className={primaryButton}>
                  Discuss Your Needs <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="#training-modules" className={outlineButton}>
                  Explore Our Training Modules
                </a>
              </div>
            </div>
            <Photo name="training-hero" eager className="lg:aspect-[4/3] lg:object-[90%_50%]" alt="Adults sharing ideas with a facilitator in a calm learning studio. AI-generated illustrative image." />
          </div>
        </section>

        {/* Intro + three ways we can help */}
        <Section>
          <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <Chip>How We Help</Chip>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#082f27] sm:text-4xl">
                Changing digital environments, <span className="text-[#2f8066]">changing outcomes.</span>
              </h2>
              <p className="mt-5 text-base font-semibold leading-relaxed text-[#314b41]">
                NeuroDigital Support helps your team understand sensory needs, remove barriers to digital participation and put inclusion into everyday practice. Through tailored consultancy, structured training and interactive workshops, we turn awareness into actions you can apply across your workplace, learning environment, care service or community.
              </p>
              <p className="mt-4 text-sm font-medium leading-relaxed text-[#536862]">
                Whether you are reviewing an online service, supporting digital wellbeing, developing an advocacy campaign or strengthening staff confidence, we work with you to identify what needs to change and how to move forward.
              </p>
            </div>
            <div className="grid gap-4">
              {services.map(({ title, text, icon: Icon }) => (
                <article key={title} className={`${cardClass} flex gap-4 p-5`}>
                  <span className={iconTile}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold tracking-tight text-[#082f27]">{title}</h3>
                    <p className="mt-1.5 text-sm font-medium leading-relaxed text-[#536862]">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Section>

        {/* Who we support */}
        <Section tone="mint">
          <SectionHeading chip="Who We Support" title="Who we support">
            Our services are designed for organisations and people shaping the digital experiences of autistic and neurodivergent adults.
          </SectionHeading>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map(({ title, text, icon: Icon }) => (
              <li key={title} className={`${cardClass} p-5`}>
                <span className={iconTile}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-extrabold leading-snug tracking-tight text-[#082f27]">{title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-[#536862]">{text}</p>
              </li>
            ))}
            <li className="flex flex-col justify-center rounded-[1.25rem] bg-[linear-gradient(135deg,#dff6ed_0%,#f4fbf8_100%)] p-5 dark:bg-none">
              <p className="text-base font-extrabold tracking-tight text-[#082f27]">Your organisation not listed?</p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[#536862]">We work with any team shaping digital experiences for neurodivergent adults.</p>
              <a href="#enquiry" onClick={goToEnquiry()} className="mt-4 inline-flex items-center gap-1.5 text-sm font-extrabold text-[#167158] hover:underline">
                Talk to us <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </Section>

        {/* Consultancy */}
        <Section id="consultancy">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
            <SectionHeading chip="Consultancy" title="Consultancy shaped" accent="around your organisation" center={false}>
              We connect inclusion goals with practical decisions about your services, communications, technology and support.
            </SectionHeading>
            <Photo name="consultancy" className="lg:aspect-[2/1]" alt="A consultant and two participants reviewing a digital service journey. AI-generated illustrative image." />
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {consultancyAreas.map(({ icon: Icon, ...area }) => (
              <article key={area.title} className={`${cardClass} flex flex-col p-5`}>
                <div className="flex items-center gap-3">
                  <span className={iconTile}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-extrabold leading-snug tracking-tight text-[#082f27]">{area.title}</h3>
                </div>
                <p className="mt-3 flex-1 text-sm font-medium leading-relaxed text-[#536862]">{area.text}</p>
                <p className="mt-3 rounded-xl bg-[#f4fbf8] p-3 text-sm font-medium leading-relaxed text-[#31544c] dark:bg-emerald-950/40">
                  <strong className="font-extrabold text-[#17483b] dark:text-emerald-300">Possible outputs: </strong>
                  {area.outputs}
                </p>
              </article>
            ))}
            <div className="flex flex-col items-start justify-center rounded-[1.25rem] bg-[linear-gradient(135deg,#dff6ed_0%,#f4fbf8_100%)] p-5 dark:bg-none">
              <p className="text-lg font-extrabold tracking-tight text-[#082f27]">Not sure where to start?</p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[#536862]">Tell us about your challenge and we will suggest the right approach.</p>
              <a href="#enquiry" onClick={goToEnquiry('Consultancy')} className={`${primaryButton} mt-5`}>
                Enquire About Consultancy <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Section>

        {/* Training modules: heading + photo, then modules in two balanced columns */}
        <Section id="training-modules" tone="mint">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
            <div>
              <SectionHeading chip="Training" title="Explore our" accent="training modules" center={false}>
                Build a programme around your priorities. Modules can introduce a subject, deepen existing knowledge or support a specific organisational project. Each module combines clear explanations, practical examples and opportunities to apply learning.
              </SectionHeading>
              <a href="#enquiry" onClick={goToEnquiry('Training')} className={`${primaryButton} mt-6`}>
                Build Your Training Programme <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <Photo name="digital-wellbeing" className="lg:aspect-[2/1]" alt="An adult exploring a smartphone with support from a digital inclusion facilitator. AI-generated illustrative image." />
          </div>

          <Accordion type="multiple" className="mt-8 grid items-start gap-3 lg:grid-cols-2 lg:gap-4">
            {[modules.slice(0, 5), modules.slice(5)].map((column, col) => (
              <div key={col} className="space-y-3 lg:space-y-4">
                {column.map((module, i) => {
                  const index = col * 5 + i;
                  return (
                    <AccordionItem
                      key={module.title}
                      value={`module-${index + 1}`}
                      className="theme-surface rounded-[1.1rem] border border-[#e0eee8] bg-white px-5 shadow-[0_10px_30px_rgba(15,50,40,0.04)]"
                    >
                      <AccordionTrigger className="gap-4 py-4 text-left hover:no-underline">
                        <span className="flex items-center gap-3.5">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eaf5f0] text-sm font-extrabold text-[#2f8066] dark:bg-emerald-950/70" aria-hidden="true">
                            {index + 1}
                          </span>
                          <span className="text-base font-extrabold tracking-tight text-[#082f27]">
                            <span className="sr-only">Module {index + 1}: </span>
                            {module.title}
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 sm:pl-[3.1rem]">
                        <p className="text-sm font-semibold leading-relaxed text-[#31544c]">{module.intro}</p>
                        <dl className="mt-3 space-y-2.5 text-sm leading-relaxed text-[#536862] dark:text-slate-200">
                          <div>
                            <dt className="font-extrabold text-[#17483b] dark:text-emerald-300">Topics</dt>
                            <dd className="mt-0.5 font-medium">{module.topics}</dd>
                          </div>
                          <div>
                            <dt className="font-extrabold text-[#17483b] dark:text-emerald-300">Practical activity</dt>
                            <dd className="mt-0.5 font-medium">{module.activity}</dd>
                          </div>
                          <div>
                            <dt className="font-extrabold text-[#17483b] dark:text-emerald-300">Learning outcome</dt>
                            <dd className="mt-0.5 font-medium">{module.outcome}</dd>
                          </div>
                        </dl>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </div>
            ))}
          </Accordion>
        </Section>

        {/* Workshops */}
        <Section id="workshops">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
            <div>
              <SectionHeading chip="Workshops" title="Workshops that turn" accent="learning into action" center={false}>
                Bring a real challenge to a facilitated session and work towards a practical response. Activities and outputs are agreed around your goals, participants and available time. Participation in personal disclosure or sensory demonstrations is never required.
              </SectionHeading>
              <a href="#enquiry" onClick={goToEnquiry('Workshop')} className={`${primaryButton} mt-7`}>
                Plan a Workshop <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <Photo name="workshops" className="lg:aspect-[2/1]" alt="Adults contributing to an inclusive small-group workshop. AI-generated illustrative image." />
          </div>

          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {workshops.map(({ title, text, icon: Icon }) => (
              <li key={title} className={`${cardClass} flex items-start gap-4 p-5 transition-colors duration-300 hover:border-[#bfe1d5]`}>
                <span className={iconTile}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-extrabold leading-snug tracking-tight text-[#082f27]">{title}</h3>
                  <p className="mt-1.5 text-sm font-medium leading-relaxed text-[#536862]">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Ecosystem */}
        <Section tone="mint">
          <SectionHeading chip="Our Ecosystem" title="Learning connected to" accent="our digital ecosystem">
            Our services connect the principles of inclusion with tools designed around sensory needs, wellbeing, research and human connection.
          </SectionHeading>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystem.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`${cardClass} group flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#bfe1d5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#167158] focus-visible:ring-offset-2`}
                >
                  <span className="text-base font-extrabold tracking-tight text-[#082f27]">{item.name}</span>
                  <span className="mt-1.5 flex-1 text-sm font-medium leading-relaxed text-[#536862]">{item.text}</span>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#167158]">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
            <li className="flex items-center rounded-[1.25rem] border border-dashed border-[#cfe5dc] p-5 text-sm font-medium leading-relaxed text-[#536862]">
              Relevant demonstrations can be included in the agreed programme. Any product access, subscriptions or licences for ongoing use are set out separately in your proposal.
            </li>
          </ul>
        </Section>

        {/* Delivery, accessibility and how we work */}
        <Section>
          <div className="grid gap-4 lg:grid-cols-2">
            <article className={`${cardClass} flex flex-col p-6 sm:p-7`}>
              <div className="flex items-center gap-3">
                <span className={iconTile}>
                  <Route className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="text-xl font-extrabold tracking-tight text-[#082f27]">Flexible delivery with accessibility in mind</h2>
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-[#536862]">
                Discuss live online sessions, in-person workshops or a blended programme with us. Delivery can range from a focused introductory session to a half-day workshop, full-day programme or a series of sessions that gives your team time to apply learning between meetings.
              </p>
              <div className="mt-auto grid gap-4 pt-5 sm:grid-cols-2">
                <div className="rounded-xl bg-[#f4fbf8] p-4 dark:bg-emerald-950/40">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#2f8066] dark:text-emerald-300">Format</p>
                  <ul className="mt-2.5 flex flex-wrap gap-2">
                    {deliveryFormats.map((item) => (
                      <li key={item} className="rounded-full border border-[#cfe5dc] bg-white px-3 py-1 text-xs font-bold text-[#17483b] dark:border-border dark:bg-card dark:text-slate-100">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl bg-[#f4fbf8] p-4 dark:bg-emerald-950/40">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#2f8066] dark:text-emerald-300">Length</p>
                  <ul className="mt-2.5 space-y-1.5">
                    {deliveryLengths.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs font-bold text-[#17483b] dark:text-slate-100">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4aa384]" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
            <article className={`${cardClass} flex flex-col p-6 sm:p-7`}>
              <div className="flex items-center gap-3">
                <span className={iconTile}>
                  <MessagesSquare className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-xl font-extrabold tracking-tight text-[#082f27]">Planned around your group</h3>
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-[#536862]">
                Tell us about access requirements when enquiring so we can agree appropriate arrangements. Online participation can include speaking, using chat or listening with the camera off.
              </p>
              <ul className="mt-4 grid gap-x-4 gap-y-2 sm:grid-cols-2">
                {accessOptions.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-semibold text-[#31544c] dark:text-slate-100">
                    <Check className="h-4 w-4 shrink-0 text-[#2f8066] dark:text-emerald-300" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-5">
                <span className="block rounded-xl bg-[#f4fbf8] p-4 text-sm font-semibold leading-relaxed text-[#17483b] dark:bg-emerald-950/40 dark:text-slate-100">
                  Participants do not need to disclose a diagnosis or share personal experiences to take part.
                </span>
              </p>
            </article>
          </div>

          <div className="mt-10 lg:mt-12">
            <SectionHeading chip="Our Process" title="How we work" accent="with you" />
            <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <li key={step.title} className="rounded-[1.25rem] border border-[#e0eee8] bg-[#fbfffd] p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4aa384] text-sm font-extrabold text-white" aria-hidden="true">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-base font-extrabold tracking-tight text-[#082f27]">
                    <span className="sr-only">Step {index + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium leading-relaxed text-[#536862]">{step.text}</p>
                </li>
              ))}
            </ol>
            <p className="mx-auto mt-6 max-w-3xl text-center text-sm font-medium leading-relaxed text-[#536862]">
              Success measures are agreed around the work. These might include participants&apos; confidence, completion of an action plan, changes to selected digital materials or feedback from people using a service.
            </p>
          </div>
        </Section>

        {/* Why us + FAQ */}
        <Section tone="mint">
          {/* Why us: heading on the left, copy on the right, same width as every other section */}
          <div className="grid items-center gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <SectionHeading chip="Why Us" title="Why NeuroDigital" accent="Support" center={false} />
            <div className="space-y-3 text-sm font-medium leading-relaxed text-[#536862]">
              <p>
                Our focus is the relationship between neurodivergence, sensory needs and digital life. We connect awareness with practical choices about interfaces, communication, online communities and support systems.
              </p>
              <p>
                Our approach brings together the principles behind our ecosystem: calm design, inclusion, evidence-informed learning, ethical technology and respect for individual choice. We encourage organisations to listen to the people affected by their decisions and to make improvements that can be reviewed and refined over time.
              </p>
            </div>
          </div>
          <div className={`${cardClass} mt-6 flex items-start gap-3 p-4 sm:items-center sm:p-5`}>
            <Sparkles className="h-5 w-5 shrink-0 text-[#2f8066]" aria-hidden="true" />
            <p className="text-sm font-semibold leading-relaxed text-[#17483b]">
              The aim is straightforward: help your team understand barriers, make considered changes and support more meaningful participation.
            </p>
          </div>

          {/* FAQ: full width, two balanced columns */}
          <div className="mt-10 lg:mt-12">
            <SectionHeading chip="FAQ" title="Frequently asked" accent="questions" />
            <Accordion type="single" collapsible className="mt-8 grid items-start gap-3 lg:grid-cols-2 lg:gap-4">
              {[faqs.slice(0, 4), faqs.slice(4)].map((column, col) => (
                <div key={col} className="space-y-3 lg:space-y-4">
                  {column.map((faq, i) => {
                    const index = col * 4 + i;
                    return (
                      <AccordionItem key={faq.q} value={`faq-${index}`} className="theme-surface rounded-[1.1rem] border border-[#e0eee8] bg-white px-5 shadow-[0_10px_30px_rgba(15,50,40,0.04)]">
                        <AccordionTrigger className="gap-4 py-4 text-left text-base font-extrabold text-[#082f27] hover:no-underline">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 text-sm font-medium leading-relaxed text-[#536862] dark:text-slate-200">{faq.a}</AccordionContent>
                      </AccordionItem>
                    );
                  })}
                  {col === 1 && (
                    <a
                      href={`mailto:${EMAIL}`}
                      className="flex items-center gap-4 rounded-[1.1rem] bg-[linear-gradient(135deg,#dff6ed_0%,#f4fbf8_100%)] px-5 py-4 transition-colors hover:brightness-[0.98] dark:bg-none dark:border dark:border-border"
                    >
                      <span className={iconTile}>
                        <Mail className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-base font-extrabold text-[#082f27]">Still have a question?</span>
                        <span className="block text-sm font-semibold text-[#167158] dark:text-emerald-300">{EMAIL}</span>
                      </span>
                    </a>
                  )}
                </div>
              ))}
            </Accordion>
          </div>
        </Section>

        {/* Call to action + enquiry form */}
        <Section id="enquiry">
          <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <Chip>Enquiry</Chip>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#082f27] sm:text-4xl">
                Let us help you take <span className="text-[#2f8066]">the next step</span>
              </h2>
              <p className="mt-4 text-base font-semibold leading-relaxed text-[#536862]">
                Tell us what your organisation wants to improve. We will help you shape a consultancy, training or workshop programme around your people, your digital environment and your goals.
              </p>
            </div>
            <div>
              <ul className="space-y-3 text-sm font-semibold text-[#31544c]">
                <li className="flex items-center gap-3"><ClipboardCheck className="h-5 w-5 text-[#2f8066]" aria-hidden="true" /> A tailored proposal for your organisation</li>
                <li className="flex items-center gap-3"><Building2 className="h-5 w-5 text-[#2f8066]" aria-hidden="true" /> Online, in person or blended across the UK</li>
                <li className="flex items-center gap-3"><Megaphone className="h-5 w-5 text-[#2f8066]" aria-hidden="true" /> No personal disclosure required</li>
              </ul>
              <a href={`mailto:${EMAIL}`} className={`${cardClass} mt-5 inline-flex items-center gap-3 px-5 py-4 text-sm font-bold text-[#167158] hover:border-[#bfe1d5]`}>
                <Mail className="h-5 w-5" aria-hidden="true" />
                <span>
                  <span className="block text-xs font-semibold text-[#6b817a]">Prefer email?</span>
                  {EMAIL}
                </span>
              </a>
            </div>
          </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              aria-labelledby="enquiry-form-title"
              className="mt-8 rounded-[1.5rem] border border-[#dbece5] bg-white p-6 shadow-[0_18px_60px_rgba(15,61,50,0.06)] sm:p-8"
            >
              <h3 id="enquiry-form-title" className="text-xl font-extrabold tracking-tight text-[#082f27]">Tell us about your needs</h3>
              <p className="mt-1.5 text-sm font-medium leading-relaxed text-[#536862]">
                Please do not include confidential service-user information or personal health records. Fields marked <span className="text-red-600">*</span> are required.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <Field id="enquiry-name" label="Name" required error={errors.name}>
                  <input id="enquiry-name" type="text" autoComplete="name" value={form.name} onChange={update('name')} className={inputClass} aria-required="true" aria-invalid={Boolean(errors.name)} aria-describedby={describedBy('enquiry-name')} />
                </Field>
                <Field id="enquiry-organisation" label="Organisation">
                  <input id="enquiry-organisation" type="text" autoComplete="organization" value={form.organisation} onChange={update('organisation')} className={inputClass} />
                </Field>
                <Field id="enquiry-email" label="Email address" required error={errors.email}>
                  <input id="enquiry-email" type="email" autoComplete="email" value={form.email} onChange={update('email')} className={inputClass} aria-required="true" aria-invalid={Boolean(errors.email)} aria-describedby={describedBy('enquiry-email')} />
                </Field>
                <Field id="enquiry-service" label="Service of interest" required error={errors.service}>
                  <select id="enquiry-service" value={form.service} onChange={update('service')} className={inputClass} aria-required="true" aria-invalid={Boolean(errors.service)} aria-describedby={describedBy('enquiry-service')}>
                    <option value="">Choose a service</option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <fieldset className="mt-5 rounded-xl border border-[#dbece5] bg-[#fbfffd] p-4">
                <legend className="px-1 text-sm font-bold text-[#17483b]">
                  Topics of interest
                </legend>
                <div className="mt-1 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                  {modules.map((module) => (
                    <label key={module.title} className="flex cursor-pointer items-start gap-2.5 text-sm font-medium leading-snug text-[#31544c]">
                      <input
                        type="checkbox"
                        checked={form.topics.includes(module.title)}
                        onChange={() => toggleTopic(module.title)}
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#9fcdbc] accent-[#167158]"
                      />
                      {module.title}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <Field id="enquiry-audience" label="Audience and participant numbers">
                  <input id="enquiry-audience" type="text" value={form.audience} onChange={update('audience')} placeholder="e.g. 20 support workers" className={inputClass} />
                </Field>
                <Field id="enquiry-format" label="Preferred delivery format">
                  <select id="enquiry-format" value={form.format} onChange={update('format')} className={inputClass}>
                    <option value="">Choose a format</option>
                    {FORMAT_OPTIONS.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </Field>
                <Field id="enquiry-dates" label="Preferred dates">
                  <input id="enquiry-dates" type="text" value={form.dates} onChange={update('dates')} placeholder="e.g. early March, weekday mornings" className={inputClass} />
                </Field>
                <Field id="enquiry-location" label="Location, if in person">
                  <input id="enquiry-location" type="text" value={form.location} onChange={update('location')} className={inputClass} />
                </Field>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <Field id="enquiry-goals" label="What would you like to achieve?">
                  <textarea id="enquiry-goals" rows={3} value={form.goals} onChange={update('goals')} className={`${inputClass} h-auto min-h-24 py-2.5`} />
                </Field>
                <Field id="enquiry-access" label="Accessibility arrangements" hint="For example captions, planned breaks or advance agendas.">
                  <textarea id="enquiry-access" rows={3} value={form.access} onChange={update('access')} aria-describedby="enquiry-access-hint" className={`${inputClass} h-auto min-h-24 py-2.5`} />
                </Field>
                <Field id="enquiry-budget" label="Budget range">
                  <select id="enquiry-budget" value={form.budget} onChange={update('budget')} className={inputClass}>
                    <option value="">Choose a range</option>
                    {BUDGET_OPTIONS.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <label htmlFor="enquiry-consent" className="flex items-start gap-3 rounded-xl border border-[#dbece5] bg-white p-3.5 text-sm font-medium leading-relaxed text-[#405b54]">
                  <input
                    id="enquiry-consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={update('consent')}
                    aria-required="true"
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={errors.consent ? 'enquiry-consent-error' : undefined}
                    className="mt-1 h-4 w-4 shrink-0 rounded border-[#9fcdbc] accent-[#167158]"
                  />
                  <span>
                    I agree that NeuroDigital Support may use these details to respond to my enquiry, as described in the{' '}
                    <Link to="/nurotok/privacy" className="font-bold text-[#167158] underline underline-offset-2">privacy policy</Link>.
                    <span className="text-red-600" aria-hidden="true"> *</span>
                  </span>
                </label>
                {errors.consent && <p id="enquiry-consent-error" className="mt-1.5 text-xs font-bold text-red-600">{errors.consent}</p>}
              </div>

              <button type="submit" disabled={isSubmitting} className={`${primaryButton} mt-6 w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-70`}>
                <Send className="h-4 w-4" aria-hidden="true" />
                {isSubmitting ? 'Sending…' : 'Send Enquiry'}
              </button>
            </form>
        </Section>
      </main>

      <AffiliationsSection />
      <Footer />
    </>
  );
};

export default ConsultancyTrainingPage;
