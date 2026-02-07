import { Hammer } from "lucide-react";

function ComingSoon() {
  return (
    <div className="flex items-center justify-center flex-col gap-3 font-mono font-semibold w-full h-full">
      <div className="flex gap-2 items-center justify-center text-2xl">
        <h1> This page is under construction</h1> <Hammer />
      </div>
      <p className="text-lg">Thank you for your patience :)</p>
    </div>
  );
}

export default ComingSoon;
