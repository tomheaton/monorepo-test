import {createTRPCNext} from "@trpc/next";
import {httpBatchLink, loggerLink} from "@trpc/client";
import type {AppRouter, RouterInputs, RouterOutputs} from "@monorepo-test/api";
import superjson from "superjson";

const getBaseUrl = (): string => {
  // browser should use relative path
  if (typeof window !== 'undefined')
    return '';

  // reference for vercel.com
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL}`;

  // reference for render.com
  if (process.env.RENDER_INTERNAL_HOSTNAME)
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      transformer: superjson,
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
  ssr: false,
});

export type {RouterInputs, RouterOutputs};
