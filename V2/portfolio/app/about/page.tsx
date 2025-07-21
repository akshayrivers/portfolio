import ExplorerView from "@/components/ExploreView";
import aboutFiles from "@/data/about";

export default function AboutPage() {
  return <ExplorerView title="about" files={aboutFiles} />;
}
