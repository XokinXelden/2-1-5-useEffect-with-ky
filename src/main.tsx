import { createRoot } from "react-dom/client";
import App from "./components/app/App.tsx";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
