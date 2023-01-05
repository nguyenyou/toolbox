import type { AppProps } from "next/app";
import "@nguyenyou/ui/css/reset.css";
import { ThemeProvider } from '@nguyenyou/ui/theme/provider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
