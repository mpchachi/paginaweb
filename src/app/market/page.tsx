import { Market } from "@/components/market";
import { GlobeSection } from "@/components/globe-section";

export const metadata = {
  title: "Market — BetweenVisits",
};

export default function MarketPage() {
  return (
    <>
      <Market />
      <GlobeSection />
    </>
  );
}
