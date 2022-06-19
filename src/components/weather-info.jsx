import { useState } from "react";
import { NowInfoTab } from "./now/info-tab";
import { DetailsInfoTab } from "./details/info-tab.jsx";
import { ForecastInfoTab } from "./forecast/info-tab";
import { TabSwitcher } from "./tabs";

export function WeatherInfo(props) {
  const { handleFavourite, forecastData } = props;
  const [tab, setTab] = useState('now');
  let Tab;

  switch (tab) {
    case 'now':
      Tab = <NowInfoTab handleFavourite={handleFavourite} />
      break
    case 'details':
      Tab = <DetailsInfoTab />
      break
    case 'forecast':
      Tab = <ForecastInfoTab forecastData={forecastData} />
      break
  }

  function handleTab(event) {
    setTab(event.target.dataset.about);

    Array.from(event.target.closest('nav').children)
      .forEach(tab => tab.className = 'tabs__link font-style');
    event.target.className = 'tabs__link selected font-style';
  }

  return (
    <div className='weather__tabs'>
      <div className='tabs__body'>
        {Tab}
        <TabSwitcher onSwitch={handleTab} />
      </div>
    </div>
  )
}