import { Demo } from "@/components/demo";
import { Faq } from "@/components/faq";

export const metadata = {
  title: "Demo — BetweenVisits",
};

export default function DemoPage() {
  return (
    <>
      <Demo />
      <Faq />
    </>
  );
}
