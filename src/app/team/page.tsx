import { Team } from "@/components/team";
import { Partners } from "@/components/partners";

export const metadata = {
  title: "Team — BetweenVisits",
};

export default function TeamPage() {
  return (
    <>
      <Team />
      <Partners />
    </>
  );
}
