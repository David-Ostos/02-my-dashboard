
import { WidgetsGrid } from "@/components";


export const metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
};

export default function MainPage() {
  return (
    <div className="text-black p-4">
      <h1 className=" text-3xl">Dashboard</h1>
      <span className="mt-2 text-xl" >Información General</span>

      <WidgetsGrid/>

    </div>
  );
}
