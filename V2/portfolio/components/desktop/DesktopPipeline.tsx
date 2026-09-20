import { ProfileProvider } from "@/hooks/useProfile";
import MainDesktop from "../MainDesktop";

export default function DesktopPipeline() {
  return (
    <ProfileProvider>
      <MainDesktop />
    </ProfileProvider>
  );
}
