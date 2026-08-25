"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { Phone } from "./Icons";

/** Appears on small screens once the hero has scrolled past. */
export default function CallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a className={`callbar${visible ? " is-visible" : ""}`} href={`tel:${site.phoneHref}`} tabIndex={visible ? 0 : -1}>
      <Phone size={16} />
      Call {site.phone}
    </a>
  );
}
