import React, {useEffect, useState} from "react";
import {SplashScreen} from "expo-router";
import {CustomText, CustomView} from "@components/index";
import {add} from "@utils/index";
import TrpcComponent from "@components/TRPCComponent";
import {Button, TextInput} from "react-native";
import {trpc} from "@utils/trpc";

export default function Index() {
  const [isReady, setReady] = useState<boolean>(false);
  const [hello, setHello] = useState<string>("");

  const addHello = trpc.hello.createHello.useMutation();

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 1000);
  }, []);

  const handleSendHello = async () => {
    await addHello.mutate({text: hello});
  }

  if (!isReady) {
    return <SplashScreen/>
  }

  return (
    <CustomView className={"flex flex-col items-center justify-center p-4"}>
      <CustomText className={"font-bold text-5xl"}>
        monorepo-test
      </CustomText>

      <CustomText>
        Add: 5 + 7 = {add(5, 7)}
      </CustomText>

      <TrpcComponent/>

      <CustomView className={"border-2 border-red-500"}>
        <TextInput
          value={hello}
          onChangeText={setHello}
          placeholder={"enter hello"}
        />
        <Button
          title={"send hello"}
          onPress={handleSendHello}
        />
      </CustomView>
    </CustomView>
  );
};
