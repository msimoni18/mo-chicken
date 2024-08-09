import PodiumTable from "@/components/PodiumTable/PodiumTable";
import PlayoffAppearanceTable from "@/components/PlayoffAppearanceTable/PlayoffAppearanceTable";
import PastPerformance from "@/components/PastPerformance/PastPerformance";
import Records from "@/components/Records/Records";

const Statistics = () => {
  return (
    <div className="flex flex-col gap-10">
      <Records />
      <PodiumTable />
      <PlayoffAppearanceTable />
      <PastPerformance />
    </div>
  );
};

export default Statistics;
