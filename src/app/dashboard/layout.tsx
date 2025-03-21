import {Sidebar} from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 overflow-hidden w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 text-slate-700 w-full overflow-auto">{children}</div>
      </div>
    </div>
  );
}
