import { Hammer } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex items-center justify-center flex-col gap-3 font-mono font-semibold w-full h-full">
      <div className="flex gap-2 items-center justify-center text-2xl">
        <h1>Dashboard is in progress </h1>
        {<Hammer />}
      </div>
      <p className="">Thank you for your patience :)</p>
    </div>
  );
}
