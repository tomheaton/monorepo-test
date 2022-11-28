import {createTRPCReact} from "@trpc/react-query";
import type {AppRouter, RouterInputs, RouterOutputs} from "@monorepo-test/api";
import Constants from "expo-constants";
import React, {type PropsWithChildren, useState} from "react";
import {MutationCache, QueryClient} from "@tanstack/react-query";
import {httpBatchLink} from "@trpc/client";
import superjson from "superjson";
import {PersistQueryClientProvider} from "@tanstack/react-query-persist-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {createAsyncStoragePersister} from "@tanstack/query-async-storage-persister";

/**
 * A set of typesafe hooks for consuming your API.
 */
export const trpc = createTRPCReact<AppRouter>();

/**
 * Gets the IP address of your host-machine.
 */
const getBaseUrl = (): string => {
  // development
  if (__DEV__) {
    const localhost = Constants.manifest?.debuggerHost?.split(":").shift();
    if (!localhost) {
      throw new Error("Failed to get localhost, configure it manually!");
    }
    return `http://${localhost}:3000`;
  }

  // production
  return `${Constants.manifest?.extra?.apiUrl}`;
};

/**
 * A wrapper for your app that provides the TRPC context.
 * Use only in the main _layout.tsx
 */
export const TRPCProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60 * 60 * 24, // 24 hours
        staleTime: 2000,
        retry: 0,
      },
    },
    // configure global cache callbacks to show toast notifications
    mutationCache: new MutationCache({
      onSuccess: (data) => {
        alert(data ?? "success (no message)");
      },
      onError: (error) => {
        alert(error ?? "error (no message)");
      },
    }),
  }));

  const [trpcClient] = useState(() =>
    trpc.createClient({
      transformer: superjson,
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    }),
  );

  const [asyncStoragePersister] = useState(() =>
    createAsyncStoragePersister({
      storage: AsyncStorage
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <PersistQueryClientProvider client={queryClient} persistOptions={{persister: asyncStoragePersister}}>
        {/*<QueryClientProvider client={queryClient}>*/}
        {children}
        {/*</QueryClientProvider>*/}
      </PersistQueryClientProvider>
    </trpc.Provider>
  );
};

export type {RouterInputs, RouterOutputs};
