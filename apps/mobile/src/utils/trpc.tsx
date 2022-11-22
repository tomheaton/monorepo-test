import {createTRPCReact} from "@trpc/react-query";
import type {AppRouter} from "@monorepo-test/api";

/**
 * A set of typesafe hooks for consuming your API.
 */
export const trpc = createTRPCReact<AppRouter>();

/**
 * Extend this function when going to production by
 * setting the baseUrl to your production API URL.
 */
import Constants from "expo-constants";

const getBaseUrl = () => {
    /**
     * Gets the IP address of your host-machine. If it cannot automatically find it,
     * you'll have to manually set it. NOTE: Port 3000 should work for most but confirm
     * you don't have anything else running on it, or you'd have to change it.
     */
    const localhost = Constants.manifest?.debuggerHost?.split(":")[0];
    if (!localhost)
        throw new Error("failed to get localhost, configure it manually");
    return `http://${localhost}:3000`;
};

/**
 * A wrapper for your app that provides the TRPC context.
 * Use only in the main _layout.tsx
 */
import React, {type PropsWithChildren} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {httpBatchLink} from "@trpc/client";
// import {transformer} from "@solution/api/transformer";
import superjson from "superjson";

export const TRPCProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [queryClient] = React.useState(() => new QueryClient());

    const [trpcClient] = React.useState(() =>
        trpc.createClient({
            transformer: superjson,
            links: [
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`,
                }),
            ],
        }),
    );

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </trpc.Provider>
    );
};
