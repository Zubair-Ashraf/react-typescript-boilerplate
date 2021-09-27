import './App.css';

const App = () => {
    return (
        <div>
            <h1>Hello React</h1>
            {
                process.env.APP_NAME
            }
        </div>
    )
}

export default App
