import Head from 'next/head';
import Layout from '../components/Layout/layout';
import styles from '../styles/Home.module.css';

export default function IndexPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Next.js | Microsoft Graph</title>
        </Head>
        <main className={styles.main}>
          <h1>Take a Break Reminder App</h1>
          <h4>
            A step by step tutorial how you can use Microsoft Graph with
            Next.js!
          </h4>
        </main>
      </div>
    </Layout>
  );
}