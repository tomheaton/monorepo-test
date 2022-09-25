import type {NextPage} from 'next';
import Head from 'next/head';
import TestComponent from "@components/TestComponent";
import {add} from "@utils/index";
import {trpc} from "@utils/trpc";

const Index: NextPage = () => {
    const hello = trpc.hello.hello.useQuery({text: 'monorepo-test'});

    return (
        <div className={"w-full h-screen flex flex-col items-center justify-center"}>
            <Head>
                <title>monorepo-test</title>
                <meta name="description" content="monorepo-test"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <h1 className={"font-bold text-5xl"}>
                monorepo-test
            </h1>

            <br/>

            <TestComponent/>

            <br/>

            <p>
                Add: 5 + 7 = {add(5, 7)}
            </p>

            <br/>

            <p>
                tRPC: {!hello.data ? "Loading..." : hello.data.greeting}
            </p>
        </div>
    );
}

export default Index;
