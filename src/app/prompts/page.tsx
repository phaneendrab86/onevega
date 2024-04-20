"use client";
import React, { useState, useEffect } from "react";
//import page from '../components/prompts/page';
import { useRouter } from "next/navigation";
import Link from "../../node_modules/next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

interface Data {
  // Define the structure of your data here
}

const metadata: Metadata = {
  title: "Prompts",
};
export default function Prompts() {
  const router = useRouter();
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    fetch("https://demo6396395.mockable.io/prompts")
      .then((res) => res.json())
      .then((data) => {
        debugger;
        setData(data);
        //setLoading(false)
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex w-full"> 
       
      <div className="w-full flex flex-wrap">                
            {data.map((data) => (<Card className="w-1/6 m-2 bg-grey text-light">
                    <CardHeader>
                        <CardTitle>{data.id}</CardTitle>
                        <CardDescription>{data.name}</CardDescription>
                        <CardDescription>{data.createdAt}</CardDescription>
                    </CardHeader> 
                </Card>
            ))}
                
            </div>
    </div>
  );
}
