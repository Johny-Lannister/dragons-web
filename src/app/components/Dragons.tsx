import { Button } from "@nextui-org/react";
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
  const [isOpen, setIsOpen] = useState(false);

    function getMenuClasses() {
        let menuClasses = [
            'md:flex',
            'md:items-center',
            'md:gap-6',
            'z-20'
        ];
        if (isOpen) {
            menuClasses.push(
                'flex',
                'absolute',
                'top-[60px]',
                'bg-emerald-50',
                'w-full',
                'left-0',
                'p-4',
                'gap-10',
                'flex-col',
            );
        } else {
            menuClasses.push('hidden');
        }
        return menuClasses.join(' ');
    }
  useEffect(() => {
    fetch("http://dragons-api.vercel.app")
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
      <nav className=" py-10 my-12 bg-slate-100 text-gray-1000 p-4 sm:p-6 md:flex md:justify-between md:items-center">
            <div className="container mx-auto flex items-center justify-between">
                <div className={getMenuClasses()}>
                <button className="mx-2 hover:text-gray-300" onClick={() => filterChange('All Dragons')}>
              All Dragons
            </button>
            <button className="mx-2 hover:text-gray-300" onClick={() => filterChange('Game of Thrones')}>
              Game of Thrones
            </button>
            <button className="mx-2 hover:text-gray-300" onClick={() => filterChange('House of The Dragon')}>
              House of The Dragon
            </button>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
      <div className="mx-12 pb-40">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {filteredDragons.map((dragon) => (
              <div key={dragon.id}>
                  <img className="h-72 w-full max-w-full rounded-lg" src={dragon.image} alt=""/>
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
