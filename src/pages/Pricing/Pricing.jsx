import React from "react";
import { Link } from "react-router-dom";
import PricingCard from "./PricingCard";
import ShieldNetFAQ from "../../components/ShieldNetFAQ/ShieldNetFAQ";
import Plan from "./Plan";

const Pricing = () => {
  return (
    <>
      <div className="bg-[#E11D48] py-16 lg:py-24 dark:bg-[#881337]">
        <div className="container mt-20 mx-auto text-center px-4 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Pricing
          </h1>
          <p className="mx-auto text-lg mt-4 max-w-2xl text-[#FFE4E6] ">
            Transparent, per-endpoint pricing that scales with your
            organization. No hidden fees, no surprises.
          </p>
          <nav className="mt-6 flex items-center justify-center gap-2 text-sm text-[#FECDD3]">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Pricing</span>
          </nav>
        </div>
      </div>
      <PricingCard />
      <ShieldNetFAQ />
      <Plan />
    </>
  );
};

export default Pricing;
