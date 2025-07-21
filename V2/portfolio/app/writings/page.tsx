import ExplorerView from "@/components/ExploreView";
import ideaFiles from "@/data/ideas";

export default function WritingWindow() {
  return <ExplorerView title="writings" files={ideaFiles} />;
}
