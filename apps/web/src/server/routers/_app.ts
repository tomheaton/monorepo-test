import {t} from "@server/trpc";
import {healthRouter} from "@server/routers/health";
import {helloRouter} from "@server/routers/hello";

export const appRouter = t.router({
    health: healthRouter,
    hello: helloRouter,
});

export type AppRouter = typeof appRouter;
