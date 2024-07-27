
import React, { useState, useEffect } from "react";


interface Dragon {
  id: number;
  name: string;
  description: string;
  image: string;
  size: string;
  age: string;
  color: string;
  riders: string;
  show: string;
}


const Dragons: React.FC = () => {
  const [dragonsData, setDragonsData] = useState<Dragon[]>([]);
  const [dragonDataFilter, setDragonDataFilter] = useState<string>('All dragons');

  useEffect(() => {
    // vercel "https://dragons-api.vercel.app/api/dragons"
    // local "http://localhost:8000/api/dragons"
    fetch(`${process.env.API_URL}api/dragons`)
      .then((response) => response.json())
      .then((data) => setDragonsData(data))
      .catch((error) => console.error("Error fetching dragons data:", error));
  }, []);
  
  const filterChange = (filter: string) => {
    setDragonDataFilter(filter)
  }

  const filteredDragons = dragonsData.filter(dragon => {
    if (dragonDataFilter === 'All Dragons') return true;
    if (dragonDataFilter === 'Game of Thrones') return dragon.show === 'GOT';
    if (dragonDataFilter === 'House of The Dragon') return dragon.show === 'HOTD';
    return true;
  });

  return (
    <div>
      <div className=" py-10 my-12 bg-slate-100 text-gray-1000 p-4 sm:p-6 md:flex md:justify-between md:items-center" id="navbar">
            <div className="container mx-auto flex items-center justify-center">
              <div>
                <button className={`mx-2 hover:text-gray-300 ${dragonDataFilter === 'All Dragons' ? 'font-bold' : ''}`} onClick={() => filterChange('All Dragons')}>
                  All Dragons
                </button>
                <button className={`mx-2 hover:text-gray-300 ${dragonDataFilter === 'Game of Thrones' ? 'font-bold' : ''}`} onClick={() => filterChange('Game of Thrones')}>
                  Game of Thrones
                </button>
                <button className={`mx-2 hover:text-gray-300 ${dragonDataFilter === 'House of The Dragon' ? 'font-bold' : ''}`} onClick={() => filterChange('House of The Dragon')}>
                  House of The Dragon
                </button>
              </div>
            </div>
      </div>
      <div className="md:mx-12 pb-40 mx-4">
          <div className="grid grid-cols-2 md:grid-cols-3 md:gap-10 gap-4">
        {filteredDragons.map((dragon) => (
              <div key={dragon.id}>
                  <img className="pepito md:h-72 h-60 object-cover w-full max-w-full rounded-lg" src={dragon.image} alt=""/>
                      <div className="space-y-2">
                          <h1 className="text-2xl font-bold mt-4">{dragon.name}</h1>
                          <p> <strong>Color: </strong> {dragon.color}</p>
                          <p> <strong>Age: </strong>{dragon.age}</p>
                          <p> <strong>Size: </strong>{dragon.size}</p>
                          <p> <strong>Description: </strong> {dragon.description}</p>
                          <p> <strong>Rider/s: </strong>{dragon.riders}</p>
                          <p> <strong>Show: </strong>{dragon.show}</p>
                      </div>
              </div>
        ))}
          </div>
      </div>
    </div>
  );
};

export default Dragons;
