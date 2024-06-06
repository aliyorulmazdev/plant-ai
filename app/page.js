import PlantCard from "./_components/PlantCard";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-3 gap-12">
        <div>
          <div className="mb-4 text-lg font-bold">Lettuce Row</div>
          <PlantCard />
        </div>
        <div>
          <div className="mb-4 text-lg font-bold">Strawberry Row</div>
          <PlantCard />
        </div>
        <div>
          <div className="mb-4 text-lg font-bold">Tomato Row</div>
          <PlantCard />
        </div>
      </div>
    </div>
  );
}
