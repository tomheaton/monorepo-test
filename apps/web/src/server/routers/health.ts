import {t} from "@server/trpc";

export const healthRouter = t.router({
    healthz: t.procedure
        .query(() => {
            return "yay!"
        }),
});
