"use client";
import { useState, useRef } from "react";
import styles from "./Testimonial.module.css";

interface TestimonialStat {
  value: string;
  label: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
  stat: TestimonialStat;
}

interface TestimonialProps {
  items: TestimonialItem[];
}

export default function Testimonial({ items }: TestimonialProps) {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const item = items[index];

  const initials = item.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragStartX.current = e.clientX;
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (delta > 50) prev();
    else if (delta < -50) next();
    dragStartX.current = null;
    setIsDragging(false);
  };

  const onPointerCancel = () => {
    dragStartX.current = null;
    setIsDragging(false);
  };

  return (
    <section className={styles.section}>
      <div
        className={`${styles.card} ${isDragging ? styles.dragging : ""}`}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        <div key={index} className={styles.slideContent}>
          <span className={styles.quoteIcon}>&ldquo;</span>
          <p className={styles.quote}>{item.quote}</p>
          <span className={styles.quoteIconRight}>&rdquo;</span>
          <div className={styles.footer}>
            <div className={styles.author}>
              <div className={styles.avatar}>
                {item.avatar ? <img src={item.avatar} alt={item.name} /> : initials}
              </div>
              <div className={styles.meta}>
                <span className={styles.name}>{item.name}</span>
                <span className={styles.role}>{item.role}</span>
              </div>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>{item.stat.value}</span>
              <span className={styles.statLabel}>{item.stat.label}</span>
            </div>
          </div>
        </div>
        {items.length > 1 && (
          <div className={styles.controls}>
            <button onClick={prev} className={styles.arrow} aria-label="Previous">&#8249;</button>
            <div className={styles.dots}>
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={i === index ? styles.dotActive : styles.dot}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={next} className={styles.arrow} aria-label="Next">&#8250;</button>
          </div>
        )}
      </div>
    </section>
  );
}
