import { SessionProvider } from 'next-auth/react';
import './styles.css';

export default function App({Component,session,...pageProps}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}