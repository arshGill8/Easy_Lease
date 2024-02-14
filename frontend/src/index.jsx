import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import {disableReactDevTools} from '@fvilers/disable-react-devtools'

if (process.env.NODE_ENV === 'production') disableReactDevTools();

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<App />);
