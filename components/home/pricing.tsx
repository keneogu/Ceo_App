import React from "react";
import PricingCard from "../price-card";
import { IoBusiness } from "react-icons/io5";
import { smallBizPlan } from "@/utils/constants";
import { companyBizPlan } from "@/utils/constants";
import { MdAddBusiness } from "react-icons/md";
import Wrapper from "../wrapper";

const Pricing = () => {
  return (
    <Wrapper>
      <h3 className="text-red100 font-biryani text-center pb-8">PRICING</h3>
      <div className="flex flex-col md:flex-row gap-12">
        <PricingCard
          icon={<IoBusiness />}
          title="small biz plan"
          btnText="Get Started"
          items={smallBizPlan}
          bgColor="bg-red25"
          price="5000"
        />
        <PricingCard
          icon={<MdAddBusiness />}
          title="company biz plan"
          btnText="Get Started"
          items={companyBizPlan}
          bgColor="bg-navyBlue25"
          price="7000"
        />
      </div>
    </Wrapper>
  );
};

export default Pricing;
