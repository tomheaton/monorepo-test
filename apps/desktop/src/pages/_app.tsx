import type {AppType} from "next/app";
import "../style.css";
import "../App.css";

const App: AppType = ({Component, pageProps}) => {
    return (
        <Component {...pageProps}/>
    );
}

export default App;
