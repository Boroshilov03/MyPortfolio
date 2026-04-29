import { ReactFlowProvider } from "@xyflow/react";
import PortfolioGraph from "../components/Graph/PortfolioGraph";

export default function GraphHome() {
  return (
    <div className="h-[100dvh] w-full pt-[72px]">
      <ReactFlowProvider>
        <PortfolioGraph />
      </ReactFlowProvider>
    </div>
  );
}
