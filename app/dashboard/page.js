import BarChartComponent from "@/components/BarChart";
import Header from "@/components/Header";
import Main from "@/components/Main";
import RecentOrders from "@/components/RecentOrders";
import TopCards from "@/components/TopCards";

export default function DashboardPage() {
  return (
    <Main>
      <Header sectionName="Dashboard" para="Welcome Back, user" />
      <TopCards />
      <div className="p-4 grid lg:grid-cols-3 grid-cols-1 gap-3">
        <BarChartComponent />
        <RecentOrders />
      </div>
    </Main>
  );
}
