import {useLocation} from 'react-router-dom';

const welcomeStyle = {
    margin: "auto",
    padding: "5% 5% 5% 15%",
    color: "black"
}

export const Welcome =(state) => {
    const location = useLocation();
    return (
        <div style={welcomeStyle}>
            <h1>Welcome to Copilot Demo {location.state.data.username}</h1>
            </div>
    )
}