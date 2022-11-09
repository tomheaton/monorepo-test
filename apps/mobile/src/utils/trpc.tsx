import Constants from "expo-constants";

const {manifest} = Constants;

export * from "@monorepo-test/react-native";

export const getBaseUrl = (): string => {
    // assume localhost
    if (__DEV__)
        return `http://${manifest.debuggerHost?.split(":").shift()}:3000`;

    // assume production
    return `${manifest.extra?.apiUrl}`;
}
