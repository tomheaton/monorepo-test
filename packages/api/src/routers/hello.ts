import {t} from "../trpc";
import {z} from "zod";

export const helloRouter = t.router({
    hello: t.procedure
        .input(
            z.object({
                text: z.string().nullish(),
            })
            .nullish(),
        )
        .query(({input}) => {
            return {
                greeting: `(test) hello${input?.text ?? 'world'}`,
            };
        }),
});
