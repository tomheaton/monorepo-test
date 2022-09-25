import type {NextPage} from 'next';
import Head from 'next/head';
import TestComponent from "@components/TestComponent";
import {add} from "@utils/index";
import TrpcComponent from "@components/TrpcComponent";

const Index: NextPage = () => {
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

            <TestComponent/>

            <p>
                Add: 5 + 7 = {add(5, 7)}
            </p>

            <TrpcComponent/>
        </div>
    );
}

export default Index;
