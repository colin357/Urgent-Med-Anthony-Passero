const ITEMS = [
  "Post-concussion syndrome",
  "Sports concussion",
  "Whiplash & cervical injury",
  "Motor vehicle head trauma",
  "Workplace head injury",
  "Persistent headache",
  "Vestibular dysfunction",
  "Memory & attention decline",
  "Post-traumatic vision syndrome",
  "Sleep disruption after injury",
];

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Conditions we evaluate and treat">
      <div className="marquee__track">
        {[0, 1].map((g) => (
          <div className="marquee__group" key={g} aria-hidden={g === 1}>
            {ITEMS.map((item) => (
              <span className="marquee__item" key={item}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
