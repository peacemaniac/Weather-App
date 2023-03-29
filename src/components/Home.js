import { useState } from "react";
import WeatherForecast from "./WeatherForecast";
export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <form role="search">
        <input
          type="search"
          aria-label="Search for a city"
          placeholder="London"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="button">Search</button>
      </form>
      <WeatherForecast />
    </>
  );
}
