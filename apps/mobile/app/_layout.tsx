import {Stack} from "expo-router";
import {TRPCProvider} from "@utils/trpc";

export default function Layout() {
  return (
    <TRPCProvider>
      <Stack/>
    </TRPCProvider>
  );
}
