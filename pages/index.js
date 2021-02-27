import Head from "next/head";
import Home from "./home/home";

export default function Main() {
  return (
    <div>
      <Head>
        <title>TahaifGhar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}
