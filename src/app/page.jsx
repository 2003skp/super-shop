import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

async function getFood() {
  cookies();
  const response = await fetch("https://www.rakibulhasanrakib.com/api/foods");
  const data = await response.json();
  return data;
}
export default async function BorderRadiusDemo() {
  const data = await getFood();
  return (
    <div className="m-20">
      <h2>Hi I am Nextjs Developer</h2>
      <Link href="./about">Go About</Link>
      <div className="grid grid-cols-3 gap-3 border-4 rounded-md border-green-600 p-5 ">
        {
          data.map((food, index) => (
            <div key={index} className="border-4 rounded-md border-pink-400 p-3 ">
              <p className="text-green-600">Name: {food.name}</p>
              <p className="text-red-600">Price: $ {food.price}</p>
              <p className="text-orange-500">Category: {food.category}</p>
              <Image className="rounded-md" src={food.image} width={500} height={500}></Image>
            </div>
          )
          )
        }

      </div>
    </div>
  );
}
