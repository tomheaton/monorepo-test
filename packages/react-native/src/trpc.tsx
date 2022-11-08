import {createTRPCReact} from '@trpc/react-query';
import type {AppRouter} from '@monorepo-test/api/src/routers/_app';

/**
 * A set of strongly-typed React hooks from your `AppRouter` type signature with `createReactQueryHooks`.
 * @link https://trpc.io/docs/react#3-create-trpc-hooks
 */
export const trpc = createTRPCReact<AppRouter>();

export type {AppRouter};
