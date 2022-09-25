import React from "react";
import {Text, View} from 'react-native';
import TestComponent from "@components/TestComponent";
import {add} from "@utils/index";
import tw from "@lib/tailwind";

const App: React.FC = () => {
    return (
        <View style={tw`flex-1 items-center justify-center`}>
            <Text style={tw`font-bold text-5xl`}>
                monorepo-test
            </Text>

            <TestComponent/>

            <Text>
                Add: 5 + 7 = {add(5, 7)}
            </Text>

            <Text>
                tRPC: {true ? "Loading..." : "test"}
            </Text>
        </View>
    );
}

export default App;
