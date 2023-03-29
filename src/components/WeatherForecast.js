import weatherIcon from "../assets/openweathericons/04d.svg";

export default function WeatherForecast() {
  return (
    <article className="forecast">
      <div className="main">
        <div className="info">
          <p className="location">London, UK</p>
          <time dateTime="2023-02-08" className="date">
            Wed, 8 February
          </time>
          <p className="conditions">Clouds</p>
        </div>
        <div className="temperature">
          <img src={weatherIcon} alt="" />
          <p>2°</p>
        </div>
      </div>
      <dl>
        <div className="additional-info">
          <dt>Sunset</dt>
          <dd>
            <time dateTime="22:31">10:31PM</time>
          </dd>
        </div>
        <div className="additional-info">
          <dt>Humidity</dt>
          <dd>85%</dd>
        </div>
        <div className="additional-info">
          <dt>Pressure</dt>
          <dd>1031</dd>
        </div>
        <div className="additional-info">
          <dt>Wind speed</dt>
          <dd>2.57km/h</dd>
        </div>
      </dl>
    </article>
  );
}
