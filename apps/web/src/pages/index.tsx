import type {NextPage} from 'next';
import Head from 'next/head';
import {add} from "@utils/index";
import TRPCComponent from "@components/TRPCComponent";

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

      <p>
        Add: 5 + 7 = {add(5, 7)}
      </p>

      <TRPCComponent/>
    </div>
  );
}

export default Index;
