import React from "react";
import {Text, View} from 'react-native';
import TestComponent from "@components/TestComponent";
import {add} from "@utils/index";
import tw from "@lib/tailwind";
import {TRPCProvider} from "@utils/trpc";
import TrpcComponent from "@components/TrpcComponent";

const App: React.FC = () => {

  return (
    <TRPCProvider>
      <View style={tw`flex-1 items-center justify-center`}>
        <Text style={tw`font-bold text-5xl`}>
          monorepo-test
        </Text>

        <TestComponent/>

        <Text>
          Add: 5 + 7 = {add(5, 7)}
        </Text>

        <Text>
          Ali
        </Text>

        <TrpcComponent/>
      </View>
    </TRPCProvider>
  );
}

export default App;
