
"use client"
import React, { useState, useEffect } from 'react';
//import page from '../components/prompts/page';
import Link from '../../node_modules/next/link';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface Data {
    // Define the structure of your data here
}


export default function Prompts() {
    const [data, setData] = useState<Data | null>(null);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        fetch('https://demo6396395.mockable.io/prompts')
            .then((res) => res.json())
            .then((data) => {
                debugger;
                setData(data)
                //setLoading(false)
            })
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }
    return (
        <div> 
            <table className="table tabled-bordered w-100">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Date</th>
                    </tr>
                    {data.map((data) => (
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.createdAt}</td>
                    </tr>
                    ))}
                </table>
            <div className="w-full flex flex-wrap">
                
            {data.map((data) => (<Card className="w-44 m-2">
                    <CardHeader>
                        <CardTitle>{data.id}</CardTitle>
                        <CardDescription>{data.name}</CardDescription>
                        <CardDescription>{data.createdAt}</CardDescription>
                    </CardHeader> 
                </Card>
            ))}
                
            </div>
        </div>)
}