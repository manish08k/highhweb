"use client";

import { PostHogProvider } from "posthog-js/react";
import posthog from "posthog-js";

import { useEffect } from "react";

export default function PHProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      return;
    }

    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",

      defaults: "2026-05-30",

      capture_pageview: true,
      capture_pageleave: true,
      autocapture: true,

      person_profiles: "identified_only",
    });
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}