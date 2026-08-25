export type Test = {
  abbr: string;
  name: string;
  duration: string;
  body: string;
  measures: string[];
};

export const tests: Test[] = [
  {
    abbr: "qEEG",
    name: "Quantitative EEG Brain Mapping",
    duration: "45–60 min",
    body:
      "Surface electrodes record the brain’s electrical rhythms, then we compare your results against a normative database to see exactly which networks are firing out of sequence. It is the closest thing we have to a wiring diagram of a concussion.",
    measures: ["Slow-wave excess", "Network connectivity", "Coherence asymmetry"],
  },
  {
    abbr: "DTI",
    name: "Diffusion Tensor Imaging",
    duration: "Referred imaging",
    body:
      "A standard MRI reads normal after most concussions. DTI tracks the movement of water along white-matter tracts, which is how diffuse axonal injury finally becomes visible — the shearing a routine scan cannot resolve.",
    measures: ["White-matter integrity", "Fractional anisotropy", "Axonal shearing"],
  },
  {
    abbr: "NPE",
    name: "Neuropsychological Evaluation",
    duration: "3–5 hours",
    body:
      "A structured battery that separates what you cannot do from what you simply cannot do yet. Memory, processing speed, executive function and attention are scored against your own pre-injury baseline where records exist.",
    measures: ["Processing speed", "Working memory", "Executive function"],
  },
  {
    abbr: "VNG",
    name: "Videonystagmography & Balance",
    duration: "60 min",
    body:
      "Infrared goggles track involuntary eye movement while we challenge the vestibular system. If the room still tilts weeks after impact, this is the test that explains why — and it distinguishes inner-ear from central causes.",
    measures: ["Nystagmus response", "Ocular pursuit", "Postural sway"],
  },
  {
    abbr: "EMG",
    name: "EMG / Nerve Conduction",
    duration: "30–45 min",
    body:
      "Head injuries rarely arrive alone. When numbness, weakness or radiating pain accompanies the concussion, nerve conduction studies confirm whether the peripheral nervous system took damage too.",
    measures: ["Conduction velocity", "Muscle response", "Radiculopathy"],
  },
  {
    abbr: "NOE",
    name: "Neuro-Ophthalmic Exam",
    duration: "45 min",
    body:
      "Roughly half of the brain’s pathways serve vision, so it is often the first system to break and the last to be tested. We assess convergence, accommodation and saccadic tracking that a standard eye chart never touches.",
    measures: ["Convergence insufficiency", "Saccadic accuracy", "Light sensitivity"],
  },
];

export type Treatment = {
  name: string;
  body: string;
};

export const treatments: Treatment[] = [
  {
    name: "Neurofeedback Therapy",
    body:
      "Your qEEG map becomes the training target. Over a course of sessions the brain is given real-time feedback on its own rhythms and learns to regulate the networks the injury knocked off pattern.",
  },
  {
    name: "Neurocognitive Rehabilitation",
    body:
      "Structured retraining for attention, recall and executive load, scaled week by week to what your testing shows you can carry — and honest about what still needs accommodation.",
  },
  {
    name: "Vestibular & Balance Therapy",
    body:
      "Habituation and gaze-stabilization work that retires the dizziness, visual motion sensitivity and unsteadiness that keep people off stairs, off highways and out of grocery stores.",
  },
  {
    name: "Vision Rehabilitation",
    body:
      "Targeted therapy for convergence, tracking and photophobia so that reading a screen for an hour stops costing you the rest of the day.",
  },
  {
    name: "Post-Concussion Physical Therapy",
    body:
      "Cervical spine, neck and whiplash care alongside graded aerobic reconditioning — because the neck almost always takes the same hit the head did.",
  },
  {
    name: "Psychological Counseling",
    body:
      "Mood, irritability, anxiety and sleep disruption are injury symptoms, not character flaws. Counseling runs alongside the medical work rather than after it.",
  },
];

export const symptomGroups = [
  {
    system: "Cognitive",
    items: ["Memory gaps", "Slowed thinking", "Word-finding trouble", "Poor concentration", "Mental fatigue"],
  },
  {
    system: "Physical",
    items: ["Persistent headache", "Dizziness", "Nausea", "Light & noise sensitivity", "Neck pain"],
  },
  {
    system: "Visual",
    items: ["Blurred vision", "Double vision", "Eye strain when reading", "Motion sensitivity"],
  },
  {
    system: "Emotional & Sleep",
    items: ["Irritability", "Anxiety", "Low mood", "Insomnia", "Sleeping far too much"],
  },
];

export const audiences = [
  {
    key: "athletes",
    label: "Athletes",
    heading: "Return-to-play decisions that hold up",
    body:
      "Baseline and post-injury testing for high school, collegiate and professional athletes, with graduated return-to-play clearance documented at every stage. We answer to the athlete’s neurology, not to the schedule.",
    points: ["Pre-season baselines", "Same-week post-injury testing", "Written clearance protocols", "Coach & trainer coordination"],
  },
  {
    key: "workers",
    label: "Injured Workers",
    heading: "Documentation adjusters cannot wave away",
    body:
      "Workers’ compensation cases live or die on objective findings. Our reports pair measurable diagnostic data with functional capacity language written for carriers, employers and treating physicians.",
    points: ["Workers’ comp intake", "Objective impairment findings", "Functional capacity reporting", "Independent re-evaluation"],
  },
  {
    key: "auto",
    label: "Accident & Injury",
    heading: "When the ER said you were fine",
    body:
      "Most crash-related brain injuries are discharged with a clean CT and a headache. If symptoms outlived the paperwork, we test properly and produce records that stand up in a legal or insurance file.",
    points: ["Post-crash evaluation", "Letters of protection accepted", "Attorney-ready reporting", "Expert testimony available"],
  },
  {
    key: "families",
    label: "Parents & Families",
    heading: "Answers a parent can actually use",
    body:
      "Pediatric and adolescent evaluation with school-facing recommendations — testing accommodations, screen limits, and a realistic timeline for getting a kid back into a classroom and back onto a field.",
    points: ["Pediatric protocols", "504 / IEP documentation", "School re-entry plans", "Family education sessions"],
  },
  {
    key: "physicians",
    label: "Referring Physicians",
    heading: "A specialist team on your patient’s side",
    body:
      "Send us the patient your imaging cannot explain. You receive the complete diagnostic workup, a written interpretation and a proposed care plan — and your patient stays yours.",
    points: ["Same-week scheduling", "Full report within 5 business days", "Direct clinician line", "Co-managed care"],
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Call or request a visit",
    body:
      "A member of the clinical team — not a call centre — takes your history, confirms insurance and finds the first available diagnostic slot. Most new patients are seen within a week.",
  },
  {
    step: "02",
    title: "Comprehensive evaluation",
    body:
      "Neurological exam, symptom inventory and the diagnostic testing your presentation actually calls for. Everything is done under one roof in as few visits as we can manage.",
  },
  {
    step: "03",
    title: "You get the findings explained",
    body:
      "We sit down with your results and walk through them in plain language — what is injured, what it explains about your symptoms, and what the evidence says about recovery.",
  },
  {
    step: "04",
    title: "A care plan with a timeline",
    body:
      "Therapy is scheduled, milestones are defined, and re-testing dates are set from the start so progress is measured rather than assumed.",
  },
];

export const faqs = [
  {
    q: "My CT scan came back normal. Can I still have a brain injury?",
    a: "Yes — and this is the single most common reason people arrive here months late. CT scans are built to rule out bleeding, skull fracture and anything immediately life-threatening. They are not designed to detect the microscopic axonal shearing that produces concussion symptoms. A normal CT means you are not in danger tonight. It does not mean your brain is uninjured.",
  },
  {
    q: "How soon after an injury should I be evaluated?",
    a: "As soon as the emergency has passed. Early evaluation gives us a cleaner baseline and lets us intervene before compensatory habits set in. That said, there is no expiry date on this — we routinely evaluate patients whose injury happened years ago and who were never tested properly the first time.",
  },
  {
    q: "Do you accept insurance?",
    a: "We work with most major insurance plans, workers’ compensation carriers, auto/PIP claims and letters of protection. Our intake team verifies your benefits and gives you the expected out-of-pocket cost before your first appointment, not after it.",
  },
  {
    q: "Do I need a physician referral?",
    a: "Not for most evaluations. You can call and schedule directly. If your plan requires a referral, our team will tell you during intake and help coordinate it with your primary care physician.",
  },
  {
    q: "How long does a full diagnostic workup take?",
    a: "It depends on your presentation. A focused evaluation can be completed in a single half-day visit. A full neuropsychological battery paired with qEEG and vestibular testing is usually scheduled across two visits so that fatigue does not distort your results.",
  },
  {
    q: "What if I was told my symptoms are psychological?",
    a: "Mood changes, anxiety and irritability are extremely common after a brain injury — they are frequently a symptom of the injury rather than a substitute explanation for it. We test objectively first. If the data shows a physiological injury, we treat it, and we treat the psychological impact alongside it.",
  },
];

export const stats = [
  { value: 23, suffix: "s", label: "Someone in the U.S. sustains a brain injury every 23 seconds", display: "23" },
  { value: 90, suffix: "%", label: "Of concussions occur with no loss of consciousness at all", display: "90" },
  { value: 5, suffix: " days", label: "Typical turnaround for a complete written diagnostic report", display: "5" },
  { value: 10, suffix: "+", label: "Specialties coordinating under one roof, on one care plan", display: "10" },
];
