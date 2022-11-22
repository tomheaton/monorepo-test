import {t} from "../trpc";
import {helloRouter} from "./hello";

export const appRouter = t.router({
    hello: helloRouter,
});

export type AppRouter = typeof appRouter;
