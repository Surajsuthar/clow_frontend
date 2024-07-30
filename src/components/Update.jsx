import axios from "axios";
import { useState } from "react";
import { Button } from "./Button";

export function Update({event,onUpdate,onClose}){
    const [name, setName] = useState(event.name);
    const [description, setDescription] = useState(event.description);
    const [date, setDate] = useState(event.date);
    const [location, setLocation] = useState(event.location);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(
                `https://clow-backend.onrender.com/api/v1/event/update/${event._id}`,
                { name, description, date, location },
                {
                    headers: {
                        Authorization: 'Bearer ' + localStorage.getItem('token'),
                        'Content-Type': 'application/json',
                    },
                }
            );
            onUpdate(); // Refresh the event list
            onClose(); // Close the form
        } catch (error) {
            console.error('Error updating event:', error);
        }
    };
    return (
        <div className="h-screen flex justify-center bg-opacity-30 backdrop-blur-lg ">
          <div className="flex mt-10 justify-center">
            <div className="rounded-lg shadow-2xl bg-white text-center p-2 h-max px-4 w-96">
            <div>
                <div className="text-sm font-medium text-left py-2">
                    name
                </div>
                <input 
                name="name"
                type="text"
                value={name} 
                onChange={(e) => setName(e.target.value)}  
                className="w-full px-2 py-1 border rounded border-slate-200" />
            </div>
            <div>
                <div className="text-sm font-medium text-left py-2">
                    description
                </div>
                <textarea 
                name="description"
                value={description}
                maxLength={300} 
                onChange={(e) => setDescription(e.target.value)}  
                className="w-full px-2 py-1 border rounded border-slate-200" >
                </textarea>
            </div>
            <div>
                <div className="text-sm font-medium text-left py-2">
                     Date
                </div>
                <input 
                name="date"
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-2 py-1 border rounded border-slate-200"></input>
            </div>
            <div>
                <div className="text-sm font-medium text-left py-2">
                    location
                </div>
                <input
                name="location" 
                type="text"
                value={location} 
                onChange={(e) => setLocation(e.target.value)}  
                className="w-full px-2 py-1 border rounded border-slate-200" />
            </div>
              <div className="pt-4 flex">
                <Button onClick={handleSubmit} label={"Update"} />
              </div>
            </div>
          </div>
        </div>
      );
}