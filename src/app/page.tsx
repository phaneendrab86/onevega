//import Image from "next/image";
'use client'
import { Button } from "../components/ui/button";
//import { useRouter } from "../../node_modules/next/router";


import { useRouter } from 'next/navigation';
import { CardHeader, Card, CardDescription } from "../components/ui/card";
import Prompts from "./prompts/page";

export default function Home(props) {
  console.log(props);
  const router = useRouter()
  return (
    <div className="flex flex-wrap w-100">
    <Prompts />
      {/* <div className="w-1/4 p-2">
      <Card className=" w-full border rounded bg-dark">
        <CardHeader className="border-b p-2 bg-primary-500">
          <h3>Prompts</h3>
        </CardHeader>
        <CardDescription className="p-4">
        <Button onClick={() => router.push('/prompts')}>View more</Button>
        </CardDescription>
      </Card>
      </div> <div class="w-1/4 p-2">
      <Card className=" w-full border rounded bg-dark">
        <CardHeader className="border-b p-2 bg-primary-500">
          <h3>BCF Boards</h3>
        </CardHeader>
        <CardDescription className="p-4">
        <Button onClick={() => router.push('/boards')}>View more</Button>
        </CardDescription>
      </Card>
      </div>  */}
       </div>

  );
}
