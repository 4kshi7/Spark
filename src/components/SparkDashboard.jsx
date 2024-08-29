import React from "react";
import sahil from "../images/sahil.png";
import noha from "../images/noha.png";
import lojain from "../images/lojain.png";
import image from "../images/shaikh.png";

export const SparkDashboard = () => {
  return (
    <div className="min-h-screen py-8 px-6 bg-gray-100">
      <header className="mb-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-black flex items-center">
            <span className="text-yellow-400 text-3xl">✨</span>
            <span className="ml-2">Spark</span>
          </div>
          <h1 className="text-2xl font-semibold text-center">
            Start Your Influencer Journey with Spark
          </h1>
          <div className="invisible">Placeholder</div> {/* Keeps the header balanced */}
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="col-span-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Ignite Your Brand's Presence with Spark
          </h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Discover Influencers That Align with Your Vision</li>
            <li>Tailored Influencer Matches for Every Campaign</li>
            <li>Search, Select, Succeed</li>
          </ul>
        </section>

        <section className="col-span-2">
          <div className="flex justify-end mb-4">
            <button className="text-sm font-semibold">Sort by</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {/* Influencer Cards */}
            <InfluencerCard
              img="https://scontent.fdel1-8.fna.fbcdn.net/v/t39.30808-6/456567716_18464386444023055_1928135601403141718_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UQZpadGFb7AQ7kNvgHgDjEs&_nc_ht=scontent.fdel1-8.fna&oh=00_AYBqLsSmETaC7giG2UrTyiuA2CYcglzZqE5dKVk685Fh4w&oe=66D5FF6B"
              name="@model_roz"
              followers="12K"
              cost="$0.19"
              campaignEngagement="10.3%"
              normalEngagement="8.7%"
              totalCost="$100"
            />
            <InfluencerCard
              img="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQOi1nsNXOQ41sNW1uK_Aft6kYZydfsCU7xEP38sA298BWc3shR"
              name="@cristiano"
              followers="637M"
              cost="$190"
              campaignEngagement="82.3%"
              normalEngagement="90%"
              totalCost="$10K"
            />
            <InfluencerCard
              img={sahil}
              name="@moalsahil"
              followers="1M"
              cost="$0.30"
              campaignEngagement="7.3%"
              normalEngagement="11.7%"
              totalCost="$130"
            />
            <InfluencerCard
              img={noha}
              name="@nohastyleicon"
              followers="13M"
              cost="$0.29"
              campaignEngagement="6.3%"
              normalEngagement="4.7%"
              totalCost="$50"
            />
            <InfluencerCard
              img={lojain}
              name="@lojain_omran"
              followers="11.7M"
              cost="$0.55"
              campaignEngagement="10.3%"
              normalEngagement="8.7%"
              totalCost="$170"
            />
            <InfluencerCard
              img={image}
              name="@ahmadalshugairi"
              followers="17M"
              cost="$0.99"
              campaignEngagement="16.3%"
              normalEngagement="10.47%"
              totalCost="$190"
            />
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 right-0 p-4">
        <button className="bg-blue-500 text-white rounded-full p-2">
          Questions? Send us a note
        </button>
      </footer>
    </div>
  );
};

function InfluencerCard({
  img,
  name,
  followers,
  cost,
  campaignEngagement,
  normalEngagement,
  totalCost,
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={img}
        alt={name}
        className="w-full h-32 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="font-semibold">Followers: {followers}</p>
      <p className="font-semibold">Cost per engagement: {cost}</p>
      <p className="font-semibold">
        Campaign Engagement:{" "}
        <span className="text-green-600">{campaignEngagement}</span>
      </p>
      <p className="font-semibold">Normal Engagement: {normalEngagement}</p>
      <p className="font-semibold">Total Cost: {totalCost}</p>
    </div>
  );
}
