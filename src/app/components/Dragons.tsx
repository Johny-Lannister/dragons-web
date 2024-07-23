import React, { useState, useEffect } from "react";

interface Dragon {
  id: number;
  name: string;
  description: string;
  image: string;
  age: string;
  color: string;
  riders: string;
}

const Dragons: React.FC = () => {
  const [dragonsData, setDragonsData] = useState<Dragon[]>([]);
  console.log("josep");
  useEffect(() => {
    fetch("https://dragons-api.vercel.app/api/dragons")
      .then((response) => response.json())
      .then((data) => setDragonsData(data))
      .catch((error) => console.error("Error fetching dragons data:", error));
  }, []);

  return (
    <div className="mx-12 pb-40">
      {/* Aquí pueddadawdawsdgsdvxcvadsadadatos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
      {dragonsData.map((dragon) => (
            <div key={dragon.id}>
                <img className="h-72 w-full max-w-full rounded-lg" src={dragon.image} alt=""/>
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold mt-4">{dragon.name}</h1>
                        <p> <strong>Color: </strong> {dragon.color}</p>
                        <p> <strong>Age: </strong>{dragon.age}</p>
                        <p> <strong>Description: </strong> {dragon.description}</p>
                        <p> <strong>Rider/s: </strong>{dragon.riders}</p>
                    </div>
            </div>
      ))}
        </div>
    </div>
  );
};

export default Dragons;
