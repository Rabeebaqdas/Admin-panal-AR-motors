import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import React,{useState,useEffect,useMemo} from 'react';
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { userRequest } from "../../components/requestMethod";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  const [userStats,setUserStats] = useState([]);
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],[]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        const list = res.data.sort((a,b)=>{
          return a._id - b._id;
        })
        list.map((item) =>
          {setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active Users": item.total },
          ])}
        );
      } catch(err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <><Sidebar /><div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active Users" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div></>
  );
}