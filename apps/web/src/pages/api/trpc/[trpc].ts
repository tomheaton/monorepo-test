import * as trpcNext from '@trpc/server/adapters/next';
import {appRouter} from "@monorepo-test/api/src/routers/_app";
import {createContext} from "@monorepo-test/api/src/context";
// import {appRouter} from "@server/routers/_app";
// import {createContext} from "@server/context";

export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: createContext,
});
