import { positioning } from "@/lib/content";

export default function Marquee() {
  return (
    <div className="marquee" aria-label="What Urgent Med First does">
      <div className="marquee__track">
        {[0, 1].map((g) => (
          <div className="marquee__group" key={g} aria-hidden={g === 1}>
            {positioning.map((item) => (
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
