import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React,{useState,useEffect} from 'react';
import { userRequest } from "../requestMethod";

export const  Comma = (value) => {
  return value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function FeaturedInfo() {
  const [income,setIncome] = useState([]);
  useEffect(() => {
    const fetchIncome = async () => {
      const res = await userRequest("orders")
      setIncome(res.data);
  
    }
    fetchIncome();

  }, [])
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
         <span className="featuredMoney">${Comma(income[0]?.amount+income[1]?.amount+income[2]?.amount+income[3]?.amount+income[4]?.amount+income[5]?.amount)}</span>
          <span className="featuredMoneyRate">
            % 33 <ArrowUpward  className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${Comma((income[0]?.amount+income[1]?.amount+income[2]?.amount+income[3]?.amount+income[4]?.amount+income[5]?.amount)-800000)}</span>
          <span className="featuredMoneyRate">
            % 10.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${Comma((income[0]?.amount+income[1]?.amount+income[2]?.amount+income[3]?.amount+income[4]?.amount+income[5]?.amount)-900000)}</span>
          <span className="featuredMoneyRate">
            % 2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
