//import Link from 'next/link';
"use client";
import React, { useEffect, useState } from "react";
//import { useRouter } from 'next/navigation';

interface Data {
  // Define the structure of your data here
}
export const LeftNav = () => {
  //const router = useRouter()
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [open, setOpen] = useState(false);
  const openMenu = () =>{
    debugger;
    setOpen(!open);
  }

  useEffect(() => {
    fetch("https://demo6396395.mockable.io/bcf-boards")
      .then((res) => res.json())
      .then((data) => {
        debugger;
        setData(data);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{height:"100%"}}>
      <ul className="leftNav">
        {data.boards.map((a) => (
          <li key={a.id} onClick={openMenu}>
            <p>{a.name}</p>
            {a.bcfs ? <ul className={open ? "show" : "hide"}>
                {a.bcfs.map((b) => (
                    <li key={b.id}><p>{b.name}</p>
                        {b.bcfBoards ? (<ul>
                            {b.bcfBoards.map((c) =>(
                                <li key={c.id}><p>{c.name}</p></li>
                            ))}                            
                        </ul>) : ""}
                    </li>
                ))}
            </ul> : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};
