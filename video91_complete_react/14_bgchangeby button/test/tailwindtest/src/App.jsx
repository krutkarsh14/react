import { useState, useEffect } from "react";

function App() {
  const [color, setColor] = useState("pink");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className="p-4">
      <div className="bg-lime-300 p-4 rounded-xl">
        <h1 className="text-3xl font-bold text-red-500">Tailwind Test</h1>
        <h1 className="text-xl font-semibold">Tailwind Test Working!</h1>
      </div>

      {/* Buttons section */}
      <div className="flex gap-4 mt-6">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
          onClick={() => setColor("red")}
        >
          Red
        </button>

        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
          onClick={() => setColor("green")}
        >
          Green
        </button>

        <button
          className="px-4 py-2 bg-orange-500 text-white rounded-lg"
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
      </div>
    </div>
  );
}

export default App;
