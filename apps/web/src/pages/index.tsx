import {NextPage} from 'next';
import Head from 'next/head';
import styles from '@styles/Home.module.css';
import TestComponent from "@components/TestComponent";
import {add} from "@utils/index";

const Index: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>monorepo-test</title>
                <meta name="description" content="monorepo-test"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    monorepo-test
                </h1>

                <TestComponent/>

                <p className={styles.description}>
                    Add: 5 + 7 = {add(5, 7)}
                </p>
            </main>
        </div>
    );
}

export default Index;
