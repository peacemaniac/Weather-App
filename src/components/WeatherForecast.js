function getTime(date) {
  const timeOptions = {
    hour: "2-digit", // HH
    minute: "2-digit", // MM
    dayPeriod: "short", // AM/PM
  };

  let readable = date.toLocaleTimeString(undefined, timeOptions);
  let dateTime = date.getHours() + ":" + date.getMinutes(); // 24-hour time for dateTime

  return { readable, dateTime };
}

function getDate(date) {
  const dateOptions = {
    weekday: "short", // Mon, Tue, Wed, ...
    month: "long", // January, February, ...
    day: "numeric", // 1, 2, 3, 4, ...
  };

  let readable = date.toLocaleDateString(undefined, dateOptions);
  let dateTime = date.toISOString().split("T")[0]; // "YYYY-MM-DD" format for dateTime

  return { readable, dateTime };
}

export default function WeatherForecast({
  humidity,
  location,
  pressure,
  sunset,
  temperature,
  weatherIcon,
  weatherType,
  windSpeed,
}) {
  return (
    <article className="forecast">
      <div className="main">
        <div className="info">
          <p className="location">{location}</p>
          <time dateTime={getDate(new Date()).dateTime} className="date">
            {getDate(new Date()).readable}
          </time>
          <p className="conditions">{weatherType}</p>
        </div>
        <div className="temperature">
          <img
            src={require(`../assets/openweathericons/${weatherIcon}.svg`)}
            alt=""
          />
          <p>{Math.round(temperature)}</p>
        </div>
      </div>
      <dl>
        <div className="additional-info">
          <dt>Sunset</dt>
          <dd>
            <time dateTime={getTime(new Date(sunset)).dateTime}>
              {getTime(new Date(sunset * 1000)).readable}
            </time>
          </dd>
        </div>
        <div className="additional-info">
          <dt>Humidity</dt>
          <dd>{humidity}</dd>
        </div>
        <div className="additional-info">
          <dt>Pressure</dt>
          <dd>{pressure}</dd>
        </div>
        <div className="additional-info">
          <dt>Wind speed</dt>
          <dd>{windSpeed}</dd>
        </div>
      </dl>
    </article>
  );
}
