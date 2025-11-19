"use client";
import { motion, useSpring, useMotionTemplate } from "framer-motion";
import { ReactNode, useRef } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export const TiltCard = ({ children, className = "" }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });
  const mouseX = useSpring(0);
  const mouseY = useSpring(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(((e.clientX - centerX) / (rect.width / 2)) * 15);
    y.set(((e.clientY - centerY) / (rect.height / 2)) * 15);
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const transform = useMotionTemplate`perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1.02, 1.02, 1.02)`;
  const spotlight = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.15), transparent 80%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transformStyle: "preserve-3d" }}
      className={`relative rounded-3xl overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <motion.div
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
      />
      {children}
    </motion.div>
  );
};
