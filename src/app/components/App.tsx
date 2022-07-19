import * as React from 'react';
import '../styles/reset.css';
import '../styles/ui.css';
import {MemoryRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Components from './Components';
import ComponentPage from './ComponentPage';
import Tokens from './Tokens';
import Brand from './Brand';

const App = ({}) => {
    const textbox = React.useRef<HTMLInputElement>(undefined);

    const countRef = React.useCallback((element: HTMLInputElement) => {
        if (element) element.value = '5';
        textbox.current = element;
    }, []);

    const onCreate = () => {
        const count = parseInt(textbox.current.value, 10);
        parent.postMessage({pluginMessage: {type: 'create-rectangles', count}}, '*');
    };

    const onCancel = () => {
        parent.postMessage({pluginMessage: {type: 'cancel'}}, '*');
    };

    React.useEffect(() => {
        // This is how we read messages sent from the plugin controller
        window.onmessage = (event) => {
            const {type, message} = event.data.pluginMessage;
            if (type === 'create-rectangles') {
                console.log(`Figma Says: ${message}`);
            }
        };
    }, []);

    return (
        <MemoryRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="components">
                        <Route index element={<Components />} />
                        <Route path=":id" element={<ComponentPage />} />
                    </Route>
                    <Route path="tokens" element={<Tokens />} />
                    <Route path="brand" element={<Brand />} />
                </Route>
            </Routes>
            {/* <p>
                Count: <input ref={countRef} />
            </p>
            <button id="create" onClick={onCreate}>
                Create
            </button>
            <button onClick={onCancel}>Cancel</button> */}
        </MemoryRouter>
    );
};

export default App;
