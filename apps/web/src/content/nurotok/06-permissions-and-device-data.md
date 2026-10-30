# NuroTok App Permissions and Device Data

Effective date: 30 October 2026.

## Android screen capture
Where supported, screen-capture permission lets NuroTok analyse visible frames for chosen content filters. The filtering feature processes frames locally in memory and does not save or upload them. Sensitive visible information may be processed locally while capture is active. Start protection when wanted and stop it using the app or system capture controls.

## Overlays, usage access and app visibility
Display-over-other-apps permission enables covers, blocking layers and screen tint. Usage access helps identify the foreground app so chosen restrictions apply. Installed-app visibility lists selectable apps for protection. These permissions do not authorise advertising profiling. Manage or revoke them in Android's relevant special app access settings; affected features will become limited or stop.

## Accessibility (reel counter, allowances and app switches)
If you switch on NuroTok reel counter in Android Settings > Accessibility, NuroTok receives scroll and window events from Instagram, YouTube, TikTok, Snapchat and Facebook only. It counts each new short video, and, for an allowance or app switches you turn on (such as Block Explore or Messages only), it notices which tab is open and steps back out of the blocked part with the Back action or by tapping an allowed tab. It shows a small count badge and a check-in card over those apps. It does not read captions, comments, messages, names or anything you type, and it does nothing you did not switch on. What it counts stays on your phone; it reaches our server only as part of usage sharing, if you switch that on. Switch it off in Android Settings > Accessibility at any time.

## VPN (website blocking)
Website blocking uses Android's VPN service to see the names of websites as they are looked up, so it can refuse the ones on your list and, with the adult filter on, ask Cloudflare's family resolver about the rest. Only those look-ups pass through it; other traffic is untouched. The VPN runs on your phone: none of your traffic or website look-ups are sent to NuroTok, and NuroTok keeps no record of the websites you visit. Android shows a key icon while it is on. It pauses while Android's Private DNS is set to a named provider, and Android allows one VPN at a time. Switch it off in NuroTok or in Android Settings > Network > VPN.

## Device administrator (Hard Mode)
Hard Mode makes NuroTok a device administrator with no administrator policies, which only means Android will not uninstall NuroTok until Hard Mode is switched off. It cannot lock, wipe or monitor the phone. Turn it off in NuroTok (it asks for the parent PIN when parent controls are on), or in Android Settings > Security > Device admin apps.

## Foreground service and notifications
An Android foreground service supports active filtering and its visible status notification. Notification permission enables reminders and configured remote announcements. Firebase messaging may process a push token for delivery; local reminders use your chosen schedule. Notification settings and analytics choices are separate.

## iOS Screen Time
Supported restrictions use Family Controls, Managed Settings and Device Activity after system authorisation. App or category selections and schedules determine shields and monitoring. These features differ from Android frame filtering. Review and revoke relevant Screen Time or app authorisation through device settings when no longer wanted.

## Microphone, photos and files
The microphone is used when you start dictation. On-device recognition is preferred where supported. Cloud recognition requires the relevant app choice and sends speech to the system provider, commonly Google on Android. Type instead if preferred. Change cloud recognition under You > Privacy and microphone permissions in device settings.

Photo selection supports a local filter preview of the item you pick. File selection and sharing support backup import and export. Exported JSON can contain sensitive histories and is not encrypted by the export feature. Protect files and share them only with intended destinations.

## Network features and control
Accounts, usage sharing and family linking (when you switch them on), referrals, purchase checks, remote notifications, configured updates, AI, cloud speech, analytics and crash reporting use online services as described in the Privacy Policy. Lite websites also make requests and use cookies. A system permission prompt does not authorise every optional use. Change app preferences, revoke permissions or stop using the optional feature to control future processing. Required permissions affect availability of the related feature.
