import {StyleSheet, Text, View} from 'react-native';
import TestComponent from "@components/TestComponent";
import {add} from "@utils/index";

const App = () => {
    return (
        <View style={styles.container}>
            <Text>
                monorepo-test
            </Text>

            <TestComponent/>

            <Text>
                Add: 5 + 7 = {add(5, 7)}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App;
