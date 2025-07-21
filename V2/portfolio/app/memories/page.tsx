import ExplorerView from "@/components/ExploreView";
import memoriesFiles from "@/data/memories";

export default function MemoryWindow() {
  return <ExplorerView title="memories" files={memoriesFiles} />;
}
