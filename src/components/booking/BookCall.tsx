"use client";

import { FormEvent, useState } from "react";

export default function BookCall() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-5xl px-6 py-24"
    >
      <div className="rounded-[32px] bg-white p-8 text-neutral-950 shadow-[0_20px_80px_rgba(0,0,0,0.08)] ring-1 ring-neutral-200 md:p-12">
        <div className="mx-auto max-w-3xl">

          {/* HEADER */}
          <div className="mb-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
              Start a project
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-6xl">
              Tell us what you&apos;re building.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-500">
              Share your project details, timeline, budget, and anything else
              that will help us understand what you need.
            </p>
          </div>

          {/* SUCCESS */}
          {success ? (
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 md:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950 text-white">
                ✓
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">
                Request received.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-neutral-500">
                Thanks for reaching out. We&apos;ve received your project
                details and will get back to you shortly.
              </p>

              <button
                type="button"
                onClick={() => setSuccess(false)}
                className="mt-7 rounded-xl bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME + EMAIL */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-neutral-700">
                    Name <span className="text-neutral-400">*</span>
                  </label>

                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    autoComplete="name"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white focus:ring-2 focus:ring-neutral-950/5"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-neutral-700">
                    Email <span className="text-neutral-400">*</span>
                  </label>

                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    autoComplete="email"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white focus:ring-2 focus:ring-neutral-950/5"
                  />
                </div>
              </div>

              {/* PHONE + COMPANY */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-neutral-700">
                    Phone number
                  </label>

                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                    inputMode="tel"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white focus:ring-2 focus:ring-neutral-950/5"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-neutral-700">
                    Company
                  </label>

                  <input
                    name="company"
                    type="text"
                    placeholder="Company name"
                    autoComplete="organization"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white focus:ring-2 focus:ring-neutral-950/5"
                  />
                </div>
              </div>

              {/* PROJECT */}
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  What are you building?{" "}
                  <span className="text-neutral-400">*</span>
                </label>

                <textarea
                  name="project"
                  required
                  rows={6}
                  placeholder="Tell us what you want to build, the problem you're solving, your goals, and anything important we should know."
                  className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white focus:ring-2 focus:ring-neutral-950/5"
                />
              </div>

              {/* BUDGET + DEADLINE */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-neutral-700">
                    Budget
                  </label>

                  <select
                    name="budget"
                    defaultValue=""
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 text-neutral-950 outline-none transition focus:border-neutral-950 focus:bg-white focus:ring-2 focus:ring-neutral-950/5"
                  >
                    <option value="">Select budget</option>
                    <option value="Under $5k">Under $5k</option>
                    <option value="$5k - $10k">$5k - $10k</option>
                    <option value="$10k - $25k">$10k - $25k</option>
                    <option value="$25k - $50k">$25k - $50k</option>
                    <option value="$50k+">$50k+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-neutral-700">
                    Desired completion
                  </label>

                  <input
                    name="deadline"
                    type="text"
                    placeholder="e.g. 2 months"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white focus:ring-2 focus:ring-neutral-950/5"
                  />
                </div>
              </div>

              {/* FILE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Project file{" "}
                  <span className="ml-1 text-neutral-400">(optional)</span>
                </label>

                <input
                  name="file"
                  type="file"
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.zip"
                  className="block w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-500 file:mr-4 file:rounded-lg file:border-0 file:bg-neutral-950 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white"
                />

                <p className="mt-2 text-xs text-neutral-400">
                  PDF, DOC, DOCX, PNG, JPG or ZIP.
                </p>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-neutral-700">
                  Anything else?
                </label>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Anything else you want us to know?"
                  className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white focus:ring-2 focus:ring-neutral-950/5"
                />
              </div>

              {/* ERROR */}
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* SUBMIT */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex min-w-[210px] items-center justify-center rounded-xl bg-neutral-950 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending request" : "Send project details →"}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </section>
  );
}