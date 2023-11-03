import React from "react";
import Card from "./Card";

const Gallery = () => {
  return (
    <section className="w-full bg-light_grayish_blue h-max py-10">
      <div className="align-body grid">
        <h2 className="text-3xl max-sm:text-center mt-10 pb-3 text-dark-blue">
          Why choose Easybank?
        </h2>
        <p className="max-sm:text-center text-sm md:text-lg lg:w-2/3 lg:text-xl text-grayish_blue mb-7">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <section className="relative grid md:grid-cols-3 lg:grid-cols-4 gap-10 [&>*]: h-full w-full">
          <Card
            icon="/icon-online.svg"
            title="Online Banking"
            desc=" Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
          />
            <Card
              icon="/icon-budgeting.svg"
              title="Simple Budgeting"
              desc=" See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
            />
      
            <Card
              icon="/icon-onboarding.svg"
              title="Fast Onboarding"
              desc=" We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
            />
            <Card
              icon="/icon-api.svg"
              title="Open API"
              desc=" Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
            />
          </section>
      </div>
    </section>
  );
};

export default Gallery;
