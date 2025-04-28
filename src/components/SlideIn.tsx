"use client";

import { useRef, useEffect, useState } from "react";

export function SlideInFromBottom({
  children,
  className = "",
  threshold = 0.2,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<number>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // stagger in
          timerRef.current = window.setTimeout(() => {
            setVisible(true);
          }, delay);
        } else {
          window.clearTimeout(timerRef.current);
          setVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      window.clearTimeout(timerRef.current);
    };
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={`
        ${className}
        transform transition-all duration-1000 ease-out
        ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
      `}
    >
      {children}
    </div>
  );
}
