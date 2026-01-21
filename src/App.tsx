import { useEffect } from "react";
import { Map } from "./Map";

function App() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) {
        return;
      }

      if (target.closest("button")) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return <Map />;
}

export default App;
