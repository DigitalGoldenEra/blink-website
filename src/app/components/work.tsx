"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Fintech Platform", category: "Web App" },
  { title: "Health & Wellness", category: "Mobile App" },
  { title: "E-Commerce Suite", category: "Full Stack" },
];

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const cards = gridRef.current?.children || [];
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-32 px-6 border-t border-zinc-200 bg-zinc-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="font-heading text-4xl md:text-5xl font-bold text-black text-center mb-6"
        >
          Selected Work
        </h2>
        <p className="text-zinc-600 text-center mb-20">
          A glimpse of what we&apos;ve built
        </p>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 min-h-[280px] flex flex-col justify-between hover:border-zinc-400 transition-all duration-500 cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <span className="text-zinc-500 text-sm font-medium">
                  {project.category}
                </span>
                <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-black">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
