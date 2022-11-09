import * as trpcNext from '@trpc/server/adapters/next';
import {appRouter, createContext} from "@monorepo-test/api";

export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: createContext,
});
