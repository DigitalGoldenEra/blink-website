"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Smartphone,
  Cloud,
  Database,
  Palette,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Modern, performant web applications built with React, Next.js, and cutting-edge tech.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile solutions for iOS and Android.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    desc: "Scalable infrastructure on AWS, GCP, or Azure tailored to your needs.",
  },
  {
    icon: Database,
    title: "Backend Systems",
    desc: "Robust APIs, microservices, and data architectures that scale.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Beautiful, intuitive interfaces that users love and convert.",
  },
  {
    icon: Zap,
    title: "DevOps & CI/CD",
    desc: "Automated pipelines, monitoring, and deployment strategies.",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
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

      const cards = cardsRef.current?.children || [];
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
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
      id="services"
      ref={sectionRef}
      className="py-32 px-6 border-t border-zinc-200 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-6"
        >
          What We Build
        </h2>
        <p className="text-zinc-600 text-center text-lg max-w-2xl mx-auto mb-20">
          Full-stack expertise to bring your vision to life
        </p>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl border border-zinc-200 bg-zinc-50 hover:border-zinc-400 hover:bg-white transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-200 flex items-center justify-center mb-6 group-hover:bg-zinc-300 transition-colors">
                <service.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
