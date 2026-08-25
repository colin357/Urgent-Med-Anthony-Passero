import type { ReactElement } from "react";

type P = { className?: string; size?: number };

const base = (size = 18) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const ArrowRight = ({ size = 16, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);

export const Phone = ({ size = 16, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M6.6 3.5h3l1.5 3.8-2 1.4a11.5 11.5 0 0 0 5.2 5.2l1.4-2 3.8 1.5v3a1.6 1.6 0 0 1-1.8 1.6C10.4 17.4 6.6 13.6 5 5.3A1.6 1.6 0 0 1 6.6 3.5Z" />
  </svg>
);

export const Check = ({ size = 16, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M4 12.4 9 17.4 20 6.6" />
  </svg>
);

export const Chevron = ({ size = 16, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M6 9.5 12 15.5 18 9.5" />
  </svg>
);

export const Pin = ({ size = 16, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const Brain = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 4.4a2.7 2.7 0 0 0-4.9 1.6 2.6 2.6 0 0 0-1.7 4.3 2.8 2.8 0 0 0 .5 4.2A2.7 2.7 0 0 0 12 18.6Z" />
    <path d="M12 4.4a2.7 2.7 0 0 1 4.9 1.6 2.6 2.6 0 0 1 1.7 4.3 2.8 2.8 0 0 1-.5 4.2A2.7 2.7 0 0 1 12 18.6Z" />
    <path d="M12 4.4v14.2" />
  </svg>
);

export const Eye = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M2.5 12S6 6.2 12 6.2 21.5 12 21.5 12 18 17.8 12 17.8 2.5 12 2.5 12Z" />
    <circle cx="12" cy="12" r="2.8" />
  </svg>
);

export const Wave = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M2 12h3l2.2-6 3 12 2.6-9 2.2 6.5 1.6-3.5H22" />
  </svg>
);

export const Balance = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="8.4" />
    <path d="M3.6 12h16.8M12 3.6a13 13 0 0 1 0 16.8 13 13 0 0 1 0-16.8Z" />
  </svg>
);

export const Moon = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M20 14.2A8.4 8.4 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z" />
  </svg>
);

export const Shield = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 3.2 19 6v6c0 4.2-2.9 7.3-7 8.8-4.1-1.5-7-4.6-7-8.8V6Z" />
    <path d="M9.2 12.2 11.3 14.3 15 10.4" />
  </svg>
);

export const Clock = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="8.6" />
    <path d="M12 7.2V12l3.2 2" />
  </svg>
);

export const symptomIcon: Record<string, (p: P) => ReactElement> = {
  Cognitive: Brain,
  Physical: Balance,
  Visual: Eye,
  "Emotional & Sleep": Moon,
};

export const Logo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <circle cx="20" cy="20" r="18.6" stroke="currentColor" strokeWidth="1.3" opacity="0.28" />
    <circle cx="20" cy="20" r="13.2" stroke="currentColor" strokeWidth="1.3" opacity="0.5" />
    <path
      d="M8.4 20.6h4.3l2.1-6.4 3.4 12.6 3.1-9.5 2 5.1 1.5-2.6h6.8"
      stroke="#C9502A"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="20" cy="20" r="1.7" fill="currentColor" opacity="0" />
  </svg>
);
