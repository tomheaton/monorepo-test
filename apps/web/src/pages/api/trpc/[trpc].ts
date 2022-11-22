import {createNextApiHandler} from '@trpc/server/adapters/next';
import {appRouter, createContext} from "@monorepo-test/api";

export default createNextApiHandler({
  router: appRouter,
  createContext: createContext,
});
