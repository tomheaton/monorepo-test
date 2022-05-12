import React from "react";

type Props = {
    text: string
}

const Title: React.FC<Props> = ({text}) => {
    return (
        <h1>
            {text}
        </h1>
    );
}

export default Title;