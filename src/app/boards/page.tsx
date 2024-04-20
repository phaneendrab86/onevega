
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
import { useRouter } from 'next/navigation';
import { Button } from '../../components/ui/button';

interface Data {
    // Define the structure of your data here
}


export default function Boards() {
    const router = useRouter()
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
        <>
        <div className='w-full'>
        <Button className='mb-4' onClick={() => router.push('/')}>Back</Button>
        </div>
         <div className="w-full flex flex-wrap">
            {data.boards.map((a) => (
                <div className="w-1/2 p-2">
                    <Card className="bg-grey text-light">
                        <CardHeader>
                            <CardTitle>{a.id}</CardTitle>
                            <CardDescription>{a.name}</CardDescription>
                            <CardDescription>{a.createdAt}</CardDescription>

                            {a.bcfs ? (<div class="flex flex-wrap">
                                {a.bcfs.map((b) => (
                                    <card className="w-1/2 p-2">
                                        <CardHeader className="border-0 rounded p-3 bg-grey">
                                            <CardTitle>{b.id}</CardTitle>
                                            <CardDescription>{b.name}</CardDescription>
                                            <CardDescription>{b.createdAt}</CardDescription>
                                            {b.bcfBoards ?
                                                <ul style={{ listStyle: "auto", }} className="pl-5">{b.bcfBoards.map((c) => (
                                                    <li id={c.id} className="p-2">{c.name}  - {c.createdAt} </li>))}
                                                </ul> : "No data Found"}
                                        </CardHeader>
                                    </card>
                                ))}</div>) : "No data Found"}                            
                        </CardHeader>
                    </Card>
                </div>
            ))}
        </div>
        </>
       )
}