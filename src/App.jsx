import { useState } from "react";
import search from "./assets/icons/search.svg";
import { useStateContext } from "./Context";
import { BackgroundLayout, WeatherCard, MiniCard } from "./Components";

function App() {
  const [input, setInput] = useState("");
  const [tempUnit, setTempUnit] = useState("C");
  const { weather, thisLocation, values, setPlace } = useStateContext();

  const submitCity = () => {
    setPlace(input);
    setInput("");
  };

  const toggleTempUnit = () => {
    setTempUnit((unit) => (unit === "C" ? "F" : "C"));
  };

  const cToF = (celsius) => {
    const fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit.toFixed(1);
  };

  return (
    <div className="w-full h-screen text-white px-8">
      <nav className="w-full p-3 flex justify-between items-center">
        <button
          onClick={toggleTempUnit}
          className="bg-blue-500 px-4 py-2 mr-1 rounded-lg"
          style={{ whiteSpace: "nowrap" }}
        >
          {`Switch to ${tempUnit === "C" ? "Fah" : "Cel"}`}
        </button>
        <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
          <img src={search} alt="search" className="w-[1.5rem] h-[1.5rem]" />
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                // sumit the form
                submitCity();
              }
            }}
            type="text"
            placeholder="Search city"
            className="focus:outline-none w-full text-[#212121] text-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </nav>
      <BackgroundLayout></BackgroundLayout>
      <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={tempUnit === "C" ? weather.temp : cToF(weather.temp)}
          windDir={weather.wdir}
          iconString={weather.conditions}
          conditions={weather.conditions}
          maxTemp={tempUnit === "C" ? weather.maxt : cToF(weather.maxt)}
          minTemp={tempUnit === "C" ? weather.mint : cToF(weather.mint)}
          unit={tempUnit}
        />

        <div className="flex justify-center gap-8 flex-wrap w-[60%]">
          {values?.slice(1, 6).map((curr) => {
            return (
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={tempUnit === "C" ? curr.temp : cToF(curr.temp)}
                iconString={curr.conditions}
                unit={tempUnit}
                conditions={curr.conditions}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
