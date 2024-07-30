import { Label } from "./Label";
import { Button } from "./Button";
import { Trash2 } from 'lucide-react';
import axios from "axios";
import { useState } from "react";
import { Update } from "./Update";
import { Weather } from "./Weather";

export function Event({ props, fetchData }) {
  const [showUpdate, setShowUpdate] = useState(false);
  const [showWeather, setShowWeather] = useState(false);

  async function handleDelete() {
    const response = await axios.delete(`https://clow-backend.onrender.com/api/v1/event/delete/${props._id}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    });

    fetchData();
  }

  return (
    <div>
      {!showUpdate && !showWeather ? (
        <div className="h-100 flex justify-center bg-opacity-30 backdrop-blur-lg ">
          <div className="flex mt-10 justify-center">
            <div className="rounded-lg shadow-2xl bg-white text-center p-2 h-max px-4 w-96">
              <div className="flex justify-around">
                <div>
                  <Label label={props.name} />
                  <Label label={props.description} />
                  <Label label={props.date} />
                  <Label label={props.location} />
                </div>
                <div>
                  <button onClick={handleDelete}>
                    <Trash2 />
                  </button>
                </div>
              </div>
              <div className="pt-4 flex">
                <Button onClick={() => setShowUpdate(true)} label={"Update"} />
                <Button onClick={() => setShowWeather(true)} label={"Get Weather"} />
              </div>
            </div>
          </div>
        </div>
      ) : showUpdate ? (
        <Update event={props} onUpdate={fetchData} onClose={() => setShowUpdate(false)} />
      ) : (
        <Weather city={props.location} onClose={() => setShowWeather(false)} />
      )}
    </div>
  );
}
