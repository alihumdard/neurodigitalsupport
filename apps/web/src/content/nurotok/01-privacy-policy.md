# NuroTok Privacy Policy

Effective date: 30 October 2026.

## Who we are
NuroTok is an Android and iOS sensory regulation and digital wellbeing app provided by NeuroDigital Support Ltd ("we", "us"). Contact: info@neurodigitalsupport.com; +44 7825 354088; https://neurodigitalsupport.com. We are the controller of the personal information described in this policy. This policy covers the app, the NuroTok account service at api.neurodigitalsupport.com and related support. Features vary by platform and version.

## The short version
- Content you see in other apps is analysed on your phone and never sent to us.
- If you create an account and switch on **usage sharing**, your NuroTok usage (such as how many reels you watched, when, and in which app) is sent to our server so it appears in your parent's or your own dashboard and helps us improve NuroTok. You can switch this off at any time, and switching it off deletes what was sent.
- We do not sell personal information and do not use it for advertising.
- Our server is hosted in the United Kingdom. Some providers we use, such as Google and RevenueCat, may process information in the United States.
- Analytics and crash reports are off until you switch them on.

## Information kept on your device
Profiles, preferences, selected apps and schedules help apply your chosen protections. Local insights include times, categories, service or surface identifiers and counts of filtering, blocking and temporary unlocks. Wellbeing records can include completed sessions, favourites, programme and challenge progress, reminders, moods and journal text. Self-check history stores a summary score, number answered and time, rather than a saved list of individual answers. This information can reveal sensitive details about your wellbeing. Journal text, moods, self-checks, sensory profiles and chat are never sent to our server.

On supported Android devices, screen filtering processes visible frames and recognised content locally to decide whether to cover content. Frames are analysed in memory and are not saved or uploaded. A photo selected for a filter preview is also analysed locally. Installed-app visibility and usage access help list selectable apps and identify the foreground app. On iOS, Screen Time frameworks use app selections and activity schedules for supported restrictions.

## Reel counter, app switches and allowances (Android Accessibility)
If you switch on the reel counter, NuroTok's accessibility service receives scroll and window events from Instagram, YouTube, TikTok, Snapchat and Facebook only. It notices that the video viewer moved on to the next video, and, if you turn on an allowance or app switches such as Block Explore, which tab of those apps is open (by its screen identifier or tab name) so it can step back out of the parts you chose to block. It does not read captions, comments, messages, names or anything you type. Each counted reel is recorded on your phone as a time and an app name, kept for 60 days. You can switch the service off in Android Settings > Accessibility at any time.

## Website blocking (VPN)
If you switch on website blocking, NuroTok starts a VPN connection that stays on your phone. It only handles the names of websites as your phone looks them up; all other traffic goes out exactly as it would without NuroTok. Websites on your block list are refused on the phone. Other look-ups are sent to Cloudflare's public resolver: 1.1.1.3 (which also refuses adult and malware sites) when the adult filter is on, otherwise 1.1.1.1. Cloudflare receives the website name and your network address, as your internet provider would without a VPN, and processes them under its resolver privacy policy (https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/). NuroTok keeps no record of the websites you visit.

## Hard Mode (device administrator)
If you turn on Hard Mode, NuroTok becomes a device administrator with no administrator powers listed. While it is on, Android prevents NuroTok from being uninstalled until Hard Mode is switched off. It cannot lock, wipe or monitor your phone, and it collects no information.

## Accounts
You may sign in using email and password, Google or Apple. Firebase Authentication (Google) processes account identifiers, email, authentication credentials and provider information; a display name and photo may be supplied by the provider. When you sign in, the app exchanges a Firebase sign-in token with our server, which creates a NuroTok account record containing your Firebase user identifier, email, name, sign-in provider, plan, referral code and the dates you joined and were last active. Each phone you sign in on is recorded as a device: platform, operating-system version, model, app version, an installation identifier and a push-notification token.

While you are signed in, your phone also sends our server a copy of your NuroTok protection settings (app modes, limits, reel goal and allowance, app switches, focus sessions, sleep schedule and website block list). This happens whether or not usage sharing is on. We keep it so your settings follow your account, so a parent you link with can see and change them, and so changes a parent makes reach your phone. It never includes your journal, moods, self-checks, sensory profile or chat.

## Usage sharing (optional)
Usage sharing is off until you choose to switch it on, and the app asks you clearly first. When it is on, your phone sends our server:
- daily totals: reels watched, reels per app and per hour, estimated minutes, blocked app opens, items filtered, feeds hidden, temporary unlocks and their minutes, and focus minutes;
- each counted reel as a time and an app name.

(The copy of your protection settings described under Accounts is sent while you are signed in, separately from usage sharing.)

We use this to show your usage to you and to a parent you link with, to provide support, to keep the service secure and to understand, in aggregate, how NuroTok is used and where it can help more. We do not use it to build advertising or marketing profiles, and we do not make automated decisions about you from it. We record when you switched usage sharing on or off, so we can show that you chose it. Switching usage sharing off stops future sending and deletes the usage already stored on our server.

## Family linking (parent controls)
A parent can link their NuroTok account to a child's phone with a six-digit code entered on that phone. Once linked, the parent can see the child phone's usage (if usage sharing is on for that account), its NuroTok settings, and can change its protective settings: app modes and limits, reel goal and allowance, app switches, focus sessions, sleep schedule and website blocking. The parent cannot read the child's journal, moods, sensory profile, chat or anything shown in other apps. Either side can end the link at any time, and the child can leave the link from their own phone.

The parent creates the code in their app. It works once and stops working after 30 minutes; unused codes are deleted automatically. While a link is active, the child's phone shows that a parent is linked and what the parent can see and change, so the child is never monitored without knowing it.

## Referrals
Each account has a referral code. When a new account enters a friend's code, both accounts receive a period of NuroTok Premium (currently 7 days each). We store who referred whom and when, to apply the reward and prevent misuse.

## Purchases
Apple or Google processes store payments. RevenueCat validates purchases and manages premium access using transaction, product, entitlement, subscription and renewal information and your account identifier, and tells our server when a subscription starts, renews or ends so your plan is correct on every device. We do not receive full payment-card details.

## Analytics and crash reports
Firebase Analytics and Crashlytics can process app interactions, event parameters, crash logs, error context, installation identifiers, device and operating-system details and connection metadata. These reports do not contain screen frames, recognised screen text, journal entries or chat messages. Usage statistics and crash reports are off until you switch them on, and can be turned on or off under You > Privacy. Turning collection off stops future collection but does not erase information already sent.

## Notifications
Local reminders use your chosen schedule. When you allow notifications, Firebase Cloud Messaging processes a registration token to deliver announcements we send from our admin panel. Revoke notification permission in device settings at any time.

## AI conversation and speech
AI chat shows a consent notice for each conversation. Sending a message transmits recent conversation turns and app instructions to Groq and Google Gemini. NuroTok does not attach your mood history, journal, profiles or filter history. Messages are not saved as a NuroTok chat history. Avoid identifying, medical or confidential information. Microphone access is used only when you start dictation; recognition prefers on-device processing.

## Backups, websites and support
Export creates a readable JSON backup on your phone that NuroTok does not encrypt; protect and remove exported copies yourself. Lite mode loads third-party websites in a WebView, and those sites have their own privacy practices. Support messages give us your email, message and any information you include. The NeuroDigital Support website uses Google Analytics only if you accept analytics in Cookie settings.

## Purposes and legal grounds
Where UK or EEA data protection law applies, we rely on: contract, to provide your account, sync, family linking, referrals and purchases you ask for; consent, for usage sharing, analytics where required and notifications; legitimate interests, for security, preventing misuse and handling enquiries, balanced against your rights; and legal obligation, for records we must keep. Usage information can reveal health-related or sensitive patterns, so we ask for your explicit consent before collecting it and you can withdraw it at any time without affecting processing already carried out.

In short, for the main uses:
- **Account, devices and settings sync:** contract (we need them to provide the account you asked for).
- **Usage sharing:** your explicit consent, which you can withdraw in the app at any time.
- **Analytics and crash reports:** your consent (they are off until you switch them on).
- **Security, preventing misuse of referrals and admin audit records:** legitimate interests.

Where a child is below the age at which they can consent for themselves (13 in the UK; between 13 and 16 in EU countries, depending on the country), consent-based features must be agreed by a parent or guardian. See Children below.

## Who receives information
Depending on the features you use: our hosting provider for api.neurodigitalsupport.com; Google (Firebase Authentication, Analytics, Crashlytics, Cloud Messaging, Gemini); Apple; RevenueCat; Groq; Cloudflare (website blocking); system speech providers; a parent you link with; and support providers. Information may also be disclosed when required by law, to protect rights and safety, or in a business transfer with appropriate safeguards. We do not sell personal information.

The main providers who handle information for us:
- **Hosting:** Hostinger International Ltd runs the server for api.neurodigitalsupport.com, in a data centre in the United Kingdom (Manchester). Your account, devices, settings and any shared usage are stored in a MySQL database on that server.
- **Sign-in:** Google Firebase Authentication (Google LLC).
- **Push notifications:** Firebase Cloud Messaging (Google LLC).
- **Analytics and crash reports, if you switch them on:** Firebase Analytics and Crashlytics (Google LLC).
- **Subscriptions:** RevenueCat, Inc. (United States), and Google Play or the Apple App Store, which take the payment.
- **AI chat, if you use it:** Groq and Google Gemini.

These providers act on our instructions under contracts that require them to protect your information, except where they act as independent controllers under their own terms (for example Apple and Google as app stores).

## International transfers
Our own server and database are in the UK. Google (Firebase) and RevenueCat are based in the United States and may process information there or elsewhere outside the UK and EEA; Groq and Google Gemini may also process AI chat messages outside the UK. Where personal information leaves the UK or EEA, we rely on an adequacy decision or data bridge where one applies, or on appropriate safeguards such as the European Commission's Standard Contractual Clauses (SCCs) with the UK International Data Transfer Addendum, or the UK International Data Transfer Agreement (IDTA). You can ask us for more information about these safeguards.

## How long we keep information
- Account and device records: until you delete your account, then deleted within 30 days, except records we must keep by law.
- Daily usage totals: up to 24 months, then deleted. Individual reel events: up to 12 months.
- Family links and referral records: while the account exists.
- Admin audit records of changes made to your account: up to 24 months.
- Unused family-link codes: deleted once they expire (after 30 minutes).
- On your phone: until you delete them; counted reels are kept 60 days.

An automatic job runs every day on our server to delete information that has passed these periods.

Provider records (Firebase, RevenueCat, stores) follow their own retention terms.

## Your rights and choices
Switch usage sharing on or off under You > Privacy. Delete your account and all server data under You > Account > Delete account, or see the Account and Data Deletion page. Depending on your location, you have rights of access, correction, erasure, restriction, objection, portability and to withdraw consent, and to complain to a supervisory authority. Contact us to exercise them; we respond within the legal deadline. UK users can complain to the ICO: https://ico.org.uk/make-a-complaint/.

In plain terms, you can ask us for a copy of your information, to correct it, to delete it, to limit or object to how we use it, or to receive it in a machine-readable format. Email info@neurodigitalsupport.com. It is free, and we normally reply within one month (we will tell you if a complex request needs longer, as the law allows). We may ask for proportionate proof that the account is yours. We would like the chance to help first, but you can complain to the Information Commissioner's Office (ICO) in the UK, or to the data protection authority where you live in the EU, at any time.

## Children
A NuroTok account holder must be 18 or over, or 13 to 17 with a parent's or guardian's permission. Children under 13 may use NuroTok only on a phone set up and linked by their parent or guardian, who agrees to this policy on their behalf. We design the parts children may use with their best interests in mind: usage sharing stays off unless switched on, nothing is used for advertising, and the child's phone always shows that a parent is linked. If you believe a child has given us information without permission, contact us and we will delete it.

**Age and consent.** In the UK, children aged 13 or over can agree to online services that rely on consent, such as usage sharing. In EU countries this age is between 13 and 16, depending on the country. Below that age, a parent or guardian must agree for the child. A NuroTok parent link does not replace that agreement: a parent should only switch on usage sharing for a young child after talking it through with them.

**How we follow the UK Children's Code.** We aim to meet the ICO's Age Appropriate Design Code for the parts of NuroTok children may use:
- **Best interests first:** NuroTok is built to help children regulate and use social media more calmly, not to keep them scrolling.
- **High privacy by default:** usage sharing, analytics and crash reports are off until switched on. Journal, moods, self-checks, sensory profiles and chat stay on the phone.
- **Only what is needed:** the server stores only the account, device, settings and (if switched on) usage information listed in this policy.
- **No profiling or advertising:** we do not show ads, build marketing profiles, sell information, or use a child's information to target content at them.
- **Open about parent controls:** the child's phone shows when a parent is linked and what the parent can see and change. The child can leave the link from their own phone.
- **No nudging to share more:** we do not use design tricks to push children into switching on sharing or weakening privacy settings.

**Children's rights and deletion.** Children have the same data rights as adults. A child can switch off usage sharing (which deletes what was shared), leave a family link, or delete their account in the app under You > Account > Delete account. A parent or guardian can ask us to delete a child's account or data by emailing info@neurodigitalsupport.com with "NuroTok account/data deletion" in the subject. We may ask for proportionate proof of the account and of parental responsibility. Where a child is old enough to understand, we take their views into account.

## Security and changes
Information sent to our server is encrypted in transit and access to it is limited to authorised staff, whose administrative actions are logged. No system is completely secure; protect your device and account. We may update this policy as features change and will give notice in the app, or ask for consent again, where required. The effective date identifies the version.
