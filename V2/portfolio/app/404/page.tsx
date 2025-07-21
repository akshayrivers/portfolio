import ExplorerView from "@/components/ExploreView";
import ideaFiles from "@/data/ideas";

export default function BinWindow() {
  return <ExplorerView title="scarpped ideas" files={ideaFiles} />;
}
