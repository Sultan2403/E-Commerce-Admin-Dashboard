import Button from "./button";

export default function MiniHeader() {
  return (
    <div className="py-3.5 px-6 flex justify-between w-full">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Dashboard Screen
        </h1>
        <p className="text-gray-500 text-lg mt-1">
          Manage your product inventory.
        </p>
      </div>

      <Button />
    </div>
  );
}
