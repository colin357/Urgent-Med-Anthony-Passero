/** Conditions evaluated after a motor vehicle accident. */
export const conditions = [
  {
    name: "Traumatic brain injury (TBI)",
    body: "Including injuries that emergency imaging is not designed to detect.",
  },
  {
    name: "Concussion and post-concussion syndrome",
    body: "Headache, fog, light sensitivity and memory trouble that outlast the crash.",
  },
  {
    name: "Whiplash and cervical spine injuries",
    body: "Neck strain and ligament damage from the rapid forward-and-back motion of impact.",
  },
  {
    name: "Lumbar and thoracic spine injuries",
    body: "Mid and lower back trauma, including disc involvement and nerve compression.",
  },
  {
    name: "Soft tissue injuries",
    body: "Muscle, tendon and ligament damage that often stiffens in the days after impact.",
  },
  {
    name: "Chronic pain from accident trauma",
    body: "Pain that has persisted well past the point where recovery was expected.",
  },
  {
    name: "Neurological symptoms following impact",
    body: "Numbness, tingling, weakness, dizziness and changes in vision or balance.",
  },
];

/** Three-step patient journey. */
export const process = [
  {
    step: "01",
    title: "Initial evaluation",
    body:
      "Patients are seen for a comprehensive post-accident assessment. We evaluate for all injury types, including those with delayed symptom onset.",
  },
  {
    step: "02",
    title: "Diagnostic referrals",
    body:
      "When imaging or specialist evaluation is needed — MRI, neurology, pain management — we coordinate all referrals directly. Patients never have to navigate that process alone.",
  },
  {
    step: "03",
    title: "Ongoing care coordination",
    body:
      "Our team manages the full care continuum, from initial evaluation through treatment and specialist follow-up, ensuring nothing falls through the cracks.",
  },
];

/** What the network coordinates on a patient's behalf (elaborates step 02). */
export const coordination = [
  {
    name: "Advanced imaging",
    body:
      "MRI and CT scheduled through our referral network when the initial evaluation calls for a closer look than a physical exam can give.",
  },
  {
    name: "Neurology",
    body:
      "Specialist assessment when head impact, persistent headache or neurological symptoms need a neurologist rather than a generalist.",
  },
  {
    name: "Pain management",
    body:
      "For pain that has not resolved on its own, referral to physicians who treat post-traumatic pain specifically.",
  },
  {
    name: "Orthopedics and spine",
    body:
      "Assessment of cervical, thoracic and lumbar injury by specialists who see accident-related spine trauma regularly.",
  },
  {
    name: "Physical therapy and rehabilitation",
    body:
      "Structured rehabilitation for soft tissue and spinal injury, arranged so treatment starts while it still does the most good.",
  },
  {
    name: "Records and follow-up",
    body:
      "Results returned to the treating physician, appointments tracked, and the next step scheduled before the last one closes.",
  },
];

export const faqs = [
  {
    q: "I feel fine after my accident. Should I still be evaluated?",
    a: "Yes. Many accident-related injuries — particularly traumatic brain injury, spinal injuries and soft tissue damage — do not produce obvious symptoms straight away. Adrenaline masks a great deal in the first day or two. An evaluation while you feel fine is the one that establishes what was and was not injured.",
  },
  {
    q: "The emergency room told me nothing was wrong. Why see anyone else?",
    a: "Emergency imaging is built to rule out bleeding, fracture and anything immediately life-threatening, and it does that job well. It is not designed to detect concussion, soft tissue damage or the early stages of spinal injury. A normal ER visit means you were not in danger that night — it is not a full account of your injuries.",
  },
  {
    q: "How quickly can I be seen?",
    a: "Because Urgent Med First is a national network rather than a single clinic, we look for a physician near you rather than waiting on one office's calendar. Tell us where you are during intake and we will give you the soonest available appointment we can find.",
  },
  {
    q: "Do I need a referral from another doctor?",
    a: "Not to start. You can contact us directly after an accident. If your specific insurance plan requires a referral, our intake team will tell you during that first conversation and help you arrange it.",
  },
  {
    q: "What happens if I need an MRI or a specialist?",
    a: "We arrange it. When the evaluation calls for imaging, neurology, pain management or another specialist, the referral is coordinated for you and the results come back to the physician managing your care — so you are not left carrying discs and paperwork between offices.",
  },
  {
    q: "How is my care billed?",
    a: "Coverage after a motor vehicle accident depends on your policy, your state and the circumstances of the crash. Our intake team reviews your specific situation with you before your first appointment so you know what to expect rather than finding out afterwards.",
  },
];

/** Short positioning statements for the ticker beneath the hero. */
export const positioning = [
  "National physician network",
  "Post-accident medical evaluation",
  "Injuries with delayed symptom onset",
  "MRI and specialist referrals coordinated",
  "Traumatic brain and spinal injury",
  "Care managed end to end",
  "Seen without delay",
];
