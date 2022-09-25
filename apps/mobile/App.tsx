import React, {useState} from "react";
import {Text, View} from 'react-native';
import TestComponent from "@components/TestComponent";
import {add} from "@utils/index";
import tw from "@lib/tailwind";
import Constants from "expo-constants";
import {trpc} from "@utils/trpc";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {httpBatchLink} from '@trpc/client';
// import superjson from 'superjson';

const {manifest} = Constants;
const localhost = `http://${manifest.debuggerHost?.split(":").shift()}:3000`;

const App: React.FC = () => {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpc.createClient({
            // transformer: superjson,
            links: [
                httpBatchLink({
                    url: `${localhost}/api/trpc`,
                    headers() {
                        return {};
                    },
                }),
            ],
        })
    );

    const hello = trpc.hello.hello.useQuery({text: 'monorepo-test'});

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <View style={tw`flex-1 items-center justify-center`}>
                    <Text style={tw`font-bold text-5xl`}>
                        monorepo-test
                    </Text>

                    <TestComponent/>

                    <Text>
                        Add: 5 + 7 = {add(5, 7)}
                    </Text>

                    <Text>
                        tRPC: {!hello.data ? "Loading..." : hello.data.greeting}
                    </Text>
                </View>
            </QueryClientProvider>
        </trpc.Provider>
    );
}

export default App;
