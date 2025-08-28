import React from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { Avatar } from "../components/ui/avatar";

const dogPhotos = [
  "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=400&q=80",
  "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=facearea&w=400&q=80",
  "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=facearea&w=400&q=80",
  "https://images.unsplash.com/photo-1518715308788-3002a098cfd5?auto=format&fit=facearea&w=400&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&q=80",
];

const testimonials = [
  {
    name: "Samantha R.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Tgiy made it so easy to keep all of Max’s puppy photos in one place. I love reliving our adventures!",
  },
  {
    name: "Carlos M.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "The Google Drive integration is a lifesaver. Now I can find every memory of Luna instantly!",
  },
  {
    name: "Priya S.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I never worry about losing my dog’s photos. Tgiy is joyful, simple, and just works!",
  },
];

const faqs = [
  {
    q: "Is Tgiy really free?",
    a: "Yes! Tgiy offers free, unlimited storage for all your dog’s memories.",
  },
  {
    q: "Can I organize photos by multiple dogs?",
    a: "Absolutely. You can create profiles for each of your pups and sort memories by dog, date, or event.",
  },
  {
    q: "Is my data secure?",
    a: "Your memories are encrypted and stored securely. Only you can access your photos.",
  },
  {
    q: "How do I import from Google Drive or Dropbox?",
    a: "Just connect your account in settings and import with one click!",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fdf6e3] via-[#f9fafb] to-[#e0f2fe] text-[#1f2937] dark:from-[#111827] dark:via-[#1f2937] dark:to-[#3b82f6] transition-colors duration-700">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-16 lg:px-32">
        <div className="flex items-center gap-2">
          <span className="inline-block bg-gradient-to-tr from-[#fbbf24] to-[#3b82f6] rounded-full p-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-label="Tgiy logo" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#fbbf24" />
              <ellipse cx="16" cy="20" rx="8" ry="6" fill="#fff" />
              <ellipse cx="12" cy="14" rx="2" ry="3" fill="#fff" />
              <ellipse cx="20" cy="14" rx="2" ry="3" fill="#fff" />
              <circle cx="13" cy="15" r="1" fill="#1f2937" />
              <circle cx="19" cy="15" r="1" fill="#1f2937" />
              <ellipse cx="16" cy="22" rx="2" ry="1" fill="#1f2937" />
            </svg>
          </span>
          <span className="font-extrabold text-xl tracking-tight text-[#3b82f6] dark:text-[#fbbf24]">tgiy</span>
        </div>
        <div className="flex gap-3">
          <Link href="/signin" className="font-medium text-[#1f2937] hover:text-[#3b82f6] dark:text-white dark:hover:text-[#fbbf24] transition-colors">Sign In</Link>
          <Link href="/signup">
            <Button className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold px-5 py-2 rounded-full shadow-lg transition-all">Sign Up</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 py-12 md:py-20 gap-10 md:gap-20">
        <div className="flex-1 flex flex-col gap-6 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1f2937] dark:text-white mb-2">
            Cherish Every Wag
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] via-[#f472b6] to-[#3b82f6]">Organize Your Dog’s Memories</span>
          </h1>
          <p className="text-lg md:text-xl text-[#374151] dark:text-[#e0e7ef] max-w-xl">
            Tgiy is the easiest way for dog owners and pet lovers to store, organize, and relive their favorite dog moments. Effortlessly upload, sort, and access all your pup’s photos in one joyful, secure place.
          </p>
          <Link href="/signup">
            <Button className="mt-2 bg-gradient-to-r from-[#fbbf24] via-[#f472b6] to-[#3b82f6] hover:from-[#fbbf24] hover:to-[#3b82f6] text-white font-bold px-8 py-3 rounded-full shadow-xl text-lg transition-all duration-300 animate-bounce-slow">
              Start Organizing Free
            </Button>
          </Link>
        </div>
        {/* Dog Photo Collage */}
        <div className="flex-1 flex items-center justify-center relative min-h-[320px]">
          <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px]">
            {/* Main photo */}
            <img
              src={dogPhotos[0]}
              alt="Happy dog photo"
              className="absolute z-20 rounded-3xl shadow-2xl border-4 border-white w-48 h-48 md:w-64 md:h-64 object-cover left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-2 transition-transform duration-500 hover:scale-105"
            />
            {/* Surrounding photos */}
            <img
              src={dogPhotos[1]}
              alt="Dog memory 1"
              className="absolute z-10 rounded-2xl shadow-xl border-4 border-white w-28 h-28 object-cover left-0 top-8 rotate-[-12deg] transition-transform duration-500 hover:scale-105"
            />
            <img
              src={dogPhotos[2]}
              alt="Dog memory 2"
              className="absolute z-10 rounded-2xl shadow-xl border-4 border-white w-24 h-24 object-cover right-0 top-0 rotate-6 transition-transform duration-500 hover:scale-105"
            />
            <img
              src={dogPhotos[3]}
              alt="Dog memory 3"
              className="absolute z-10 rounded-2xl shadow-xl border-4 border-white w-20 h-20 object-cover left-8 bottom-0 rotate-3 transition-transform duration-500 hover:scale-105"
            />
            <img
              src={dogPhotos[4]}
              alt="Dog memory 4"
              className="absolute z-10 rounded-2xl shadow-xl border-4 border-white w-16 h-16 object-cover right-8 bottom-8 rotate-[-8deg] transition-transform duration-500 hover:scale-105"
            />
            {/* Decorative paw print */}
            <svg className="absolute -top-8 -left-8 w-16 h-16 opacity-30" viewBox="0 0 64 64" fill="#fbbf24" aria-hidden="true"><circle cx="16" cy="16" r="8"/><circle cx="48" cy="16" r="8"/><circle cx="24" cy="48" r="10"/><circle cx="40" cy="48" r="10"/><ellipse cx="32" cy="32" rx="8" ry="12"/></svg>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="flex flex-col items-center gap-4 px-6 md:px-16 lg:px-32 py-6">
        <span className="uppercase text-xs tracking-widest text-[#3b82f6] font-semibold">Trusted by dog lovers everywhere</span>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="Dog owner testimonial" className="w-10 h-10 rounded-full border-2 border-[#fbbf24]" />
          <img src="https://randomuser.me/api/portraits/women/21.jpg" alt="Dog owner testimonial" className="w-10 h-10 rounded-full border-2 border-[#3b82f6]" />
          <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="Dog owner testimonial" className="w-10 h-10 rounded-full border-2 border-[#f472b6]" />
          <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="Dog owner testimonial" className="w-10 h-10 rounded-full border-2 border-[#fbbf24]" />
          <img src="https://randomuser.me/api/portraits/men/23.jpg" alt="Dog owner testimonial" className="w-10 h-10 rounded-full border-2 border-[#3b82f6]" />
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-16 lg:px-32 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white dark:bg-[#1f2937] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center gap-4 border-t-4 border-[#fbbf24] hover:scale-105 transition-transform">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#fbbf24]/20 text-[#fbbf24] text-2xl">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M8 8h16v16H8z" stroke="#fbbf24" strokeWidth="2"/><path d="M12 12h8v8h-8z" fill="#fbbf24"/></svg>
          </span>
          <h3 className="font-bold text-lg">Effortless photo uploads</h3>
          <p className="text-[#6b7280] dark:text-[#e0e7ef]">Upload from any device in seconds—no tech skills needed.</p>
        </div>
        <div className="bg-white dark:bg-[#1f2937] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center gap-4 border-t-4 border-[#3b82f6] hover:scale-105 transition-transform">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#3b82f6]/20 text-[#3b82f6] text-2xl">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" stroke="#3b82f6" strokeWidth="2"/><path d="M10 16h12" stroke="#3b82f6" strokeWidth="2"/><path d="M16 10v12" stroke="#3b82f6" strokeWidth="2"/></svg>
          </span>
          <h3 className="font-bold text-lg">Organize by dog, date, or event</h3>
          <p className="text-[#6b7280] dark:text-[#e0e7ef]">Find memories fast—sort by pup, timeline, or special moments.</p>
        </div>
        <div className="bg-white dark:bg-[#1f2937] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center gap-4 border-t-4 border-[#f472b6] hover:scale-105 transition-transform">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#f472b6]/20 text-[#f472b6] text-2xl">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="8" y="8" width="16" height="16" rx="4" stroke="#f472b6" strokeWidth="2"/><path d="M12 16h8" stroke="#f472b6" strokeWidth="2"/></svg>
          </span>
          <h3 className="font-bold text-lg">Integrates with Google Drive & Dropbox</h3>
          <p className="text-[#6b7280] dark:text-[#e0e7ef]">Connect your favorite cloud storage and import with one click.</p>
        </div>
        <div className="bg-white dark:bg-[#1f2937] rounded-2xl shadow-lg p-6 flex flex-col items-center text-center gap-4 border-t-4 border-[#fbbf24] hover:scale-105 transition-transform">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#fbbf24]/20 text-[#fbbf24] text-2xl">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M8 24v-8a8 8 0 0116 0v8" stroke="#fbbf24" strokeWidth="2"/><rect x="12" y="20" width="8" height="4" fill="#fbbf24"/></svg>
          </span>
          <h3 className="font-bold text-lg">Free, unlimited storage</h3>
          <p className="text-[#6b7280] dark:text-[#e0e7ef]">Never run out of space for your dog’s best moments.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 md:px-16 lg:px-32 py-12 flex flex-col gap-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-[#1f2937] dark:text-white mb-4">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="flex flex-col items-center gap-3 flex-1">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#fbbf24]/30 text-[#fbbf24] text-3xl">
              <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><circle cx="18" cy="18" r="16" stroke="#fbbf24" strokeWidth="2"/><path d="M12 18h12" stroke="#fbbf24" strokeWidth="2"/></svg>
            </span>
            <h4 className="font-bold text-lg">1. Sign Up</h4>
            <p className="text-[#6b7280] dark:text-[#e0e7ef] text-center">Create your free account in seconds.</p>
          </div>
          <div className="flex flex-col items-center gap-3 flex-1">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#3b82f6]/30 text-[#3b82f6] text-3xl">
              <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><rect x="8" y="8" width="20" height="20" rx="6" stroke="#3b82f6" strokeWidth="2"/></svg>
            </span>
            <h4 className="font-bold text-lg">2. Upload Memories</h4>
            <p className="text-[#6b7280] dark:text-[#e0e7ef] text-center">Add photos from your phone, computer, or cloud.</p>
          </div>
          <div className="flex flex-col items-center gap-3 flex-1">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#f472b6]/30 text-[#f472b6] text-3xl">
              <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><path d="M18 8v20M8 18h20" stroke="#f472b6" strokeWidth="2"/></svg>
            </span>
            <h4 className="font-bold text-lg">3. Relive & Share</h4>
            <p className="text-[#6b7280] dark:text-[#e0e7ef] text-center">Enjoy and share your dog’s best moments anytime.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-16 lg:px-32 py-12 bg-gradient-to-r from-[#fbbf24]/10 via-[#f472b6]/10 to-[#3b82f6]/10 rounded-3xl mx-2 md:mx-0">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-[#1f2937] dark:text-white mb-8">What Dog Lovers Say</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col items-center bg-white dark:bg-[#1f2937] rounded-2xl shadow-lg p-6 gap-4 flex-1 border-b-4 border-[#3b82f6] hover:scale-105 transition-transform">
              <Avatar src={t.avatar} alt={t.name} className="w-16 h-16 border-4 border-[#fbbf24]" />
              <p className="text-[#374151] dark:text-[#e0e7ef] text-center">“{t.text}”</p>
              <span className="font-semibold text-[#3b82f6] dark:text-[#fbbf24]">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-16 lg:px-32 py-12 flex flex-col gap-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-[#1f2937] dark:text-white">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-lg font-semibold text-[#3b82f6] dark:text-[#fbbf24]">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-[#374151] dark:text-[#e0e7ef]">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center gap-6 px-6 md:px-16 lg:px-32 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-[#1f2937] dark:text-white">Ready to organize your dog’s memories?</h2>
        <Link href="/signup">
          <Button className="bg-gradient-to-r from-[#fbbf24] via-[#f472b6] to-[#3b82f6] hover:from-[#fbbf24] hover:to-[#3b82f6] text-white font-bold px-8 py-3 rounded-full shadow-xl text-lg transition-all duration-300 animate-bounce-slow">
            Start Organizing Free
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-16 lg:px-32 py-8 border-t border-[#e5e7eb] dark:border-[#374151] text-[#6b7280] dark:text-[#e0e7ef] bg-white/60 dark:bg-[#1f2937]/60">
        <div className="flex items-center gap-2">
          <span className="inline-block bg-gradient-to-tr from-[#fbbf24] to-[#3b82f6] rounded-full p-2">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-label="Tgiy logo small" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="16" fill="#fbbf24" />
              <ellipse cx="16" cy="20" rx="8" ry="6" fill="#fff" />
              <ellipse cx="12" cy="14" rx="2" ry="3" fill="#fff" />
              <ellipse cx="20" cy="14" rx="2" ry="3" fill="#fff" />
              <circle cx="13" cy="15" r="1" fill="#1f2937" />
              <circle cx="19" cy="15" r="1" fill="#1f2937" />
              <ellipse cx="16" cy="22" rx="2" ry="1" fill="#1f2937" />
            </svg>
          </span>
          <span className="font-extrabold text-lg tracking-tight text-[#3b82f6] dark:text-[#fbbf24]">tgiy</span>
        </div>
        <span className="text-sm">© {new Date().getFullYear()} Tgiy. All rights reserved.</span>
        <div className="flex gap-3">
          <Link href="/privacy" className="hover:underline">Privacy</Link>
          <Link href="/terms" className="hover:underline">Terms</Link>
        </div>
      </footer>
    </main>
  );
}

export const metadata = {
  title: "tgiy – Cherish Every Wag: Organize Your Dog’s Memories",
  description: "Tgiy is the easiest way for dog owners and pet lovers to store, organize, and relive their favorite dog moments. Effortlessly upload, sort, and access all your pup’s photos in one joyful, secure place.",
  openGraph: {
    title: "tgiy – Cherish Every Wag: Organize Your Dog’s Memories",
    description: "Tgiy is the easiest way for dog owners and pet lovers to store, organize, and relive their favorite dog moments. Effortlessly upload, sort, and access all your pup’s photos in one joyful, secure place.",
    images: [dogPhotos[0]],
  },
};
