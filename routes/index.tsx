import { Head } from "$fresh/runtime.ts";
import Navigator from "components/Navigator.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        {/* <meta http-equiv="Refresh" content="0; url='https://discord.com/api/oauth2/authorize?client_id=1032747383009845278&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fapi%2Fauth%2Fdiscord&response_type=code&scope=identify%20email%20connections'" /> */}
      </Head>
      <Navigator />
    </>
  );
}