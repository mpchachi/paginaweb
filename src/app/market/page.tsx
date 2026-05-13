import { Market } from "@/components/market";
import { Competition } from "@/components/competition";
import { GlobeSection } from "@/components/globe-section";

export const metadata = {
  title: "Market — BetweenVisits",
};

export default function MarketPage() {
  return (
    <>
      <Market />
      <GlobeSection />
      <Competition />
    </>
  );
}
