
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
import { Button } from '../../components/ui/button';

interface Data {
    // Define the structure of your data here
}


export default function Boards() {
    const [data, setData] = useState<Data | null>(null);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        fetch('https://demo6396395.mockable.io/bcf-boards')
            .then((res) => res.json())
            .then((data) => {
                debugger;
                setData(data)
            })
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }
    return (
        <div className="w-full flex flex-wrap">
            {data.boards.map((a, index) => (
                <div className="w-1/2 p-2">
                    <Card className="">
                        <CardHeader>
                            <CardTitle>{a.id}</CardTitle>
                            <CardDescription>{a.name}</CardDescription>
                            <CardDescription>{a.createdAt}</CardDescription>

                            {a.bcfs ? (<div class="flex flex-wrap ">
                                {a.bcfs.map((b, innerIndex) => (
                                    <card className="w-1/2 p-2 ">
                                        <CardHeader className="border p-3">
                                            <CardTitle>{b.id}</CardTitle>
                                            <CardDescription>{b.name}</CardDescription>
                                            <CardDescription>{b.createdAt}</CardDescription>
                                            {b.bcfBoards ?
                                                <ul style={{ listStyle: "auto", }} className="pl-5">{b.bcfBoards.map((c, innerIndex) => (
                                                    <li id={c.id} className="p-2">{c.name}  - {c.createdAt} </li>))}
                                                </ul> : "No data Found"}
                                        </CardHeader>
                                    </card>
                                ))}</div>) : "No data Found"}
                            {/* 
                    {a.bcfs ? (a.bcfs.map(b, innerIndex) => (<p>{b.name} {b.innerIndex}</p>)): ""} */}
                        </CardHeader>
                    </Card>
                </div>
            ))}
        </div>)
}