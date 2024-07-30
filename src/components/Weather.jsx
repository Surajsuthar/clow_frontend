import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";

export function Weather({ city, onClose }) {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          q: city,
          appid: "f799ab46bd90d5a62328bc62181a5ee2",
          units: 'metric'
        }
      });
      setInfo(response.data);
    };

    fetchData();
  }, [city]);

  return (
    <div className="h-screen flex justify-center bg-opacity-30 backdrop-blur-lg ">
      <div className="flex mt-10 justify-center">
        <div className="rounded-lg shadow-2xl bg-white text-center p-2 h-max px-4 w-96">
          {info ? (
            <>
              <div>
                <div className="text-sm font-medium text-left py-2">
                  Temp: {info.main.temp}°C
                </div>
                <div className="text-sm font-medium text-left py-2">
                  Weather: {info.weather[0].main}
                </div>
              </div>
              <div className="pt-4 flex">
                <Button onClick={onClose} label={"Close"} />
              </div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
}
