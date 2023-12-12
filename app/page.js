import Image from "next/image";
import { Operations } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24 px-4">
      <div className="mb-32 text-center flex justify-center items-center ">
        <Operations />
      </div>
    </main>
  );
}
