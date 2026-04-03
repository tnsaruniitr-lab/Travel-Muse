import { renderToString } from "react-dom/server";
import Home from "./pages/home";

export async function render(_url: string): Promise<string> {
  return renderToString(<Home />);
}
