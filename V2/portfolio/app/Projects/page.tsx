import projectFiles from "@/data/projects";
import ExplorerView from "@/components/ExploreView";

export default function ProjectWindow() {
  return <ExplorerView title="about" files={projectFiles} />;
}
