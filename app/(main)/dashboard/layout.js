import DashboardPage from "./page";
import { BarLoader } from "react-spinners";
import { Suspense } from "react";

export default function Layout() {
  return (
    <div className="px-4 md:px-6">
      <div className="flex items-center justify-between mb-8 animate-slide-up">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl gradient-title ">
          Dashboard
        </h1>
      </div>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-64">
            <BarLoader 
              className="mt-4" 
              width={"100%"} 
              color="hsl(var(--primary))" 
              speedMultiplier={0.8}
            />
          </div>
        }
      >
        <div className="animate-fade-in">
          <DashboardPage />
        </div>
      </Suspense>
    </div>
  );
}
