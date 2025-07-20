"use client";

import { useScrollToTop } from "@/hooks/page";

export default function ContactUsPage() {
  useScrollToTop();

  return (
    <main className="text-white flex flex-col items-center px-6 py-12 pb-24 relative z-10">
      <div className="max-w-4xl w-full text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-lg text-white/80">
          Have a question or want to work with us? We’d love to hear from you.
        </p>
      </div>

      <section className="w-full max-w-3xl bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-md border border-white/10">
        <form
          action="https://formspree.io/f/{your-id}" 
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-1">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#004AAD] hover:bg-[#4DA3FF] text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
