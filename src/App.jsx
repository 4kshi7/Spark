
import { SparkDashboard } from "./components/SparkDashboard";
import { PageLayout } from "./components/PageLayout";

//images
import analytics from "../src/images/analytics.png";
import dash from "../src/images/dashboard.png";
import stats from "../src//images/stats.png";
import morestats from "../src//images/morestats.png";

function App() {
  return (
    <div className="flex flex-col">
      <SparkDashboard />
      <PageLayout
        image={dash}
        title="Advanced Search: Just for your needs"
        caption=""
      />

      <PageLayout
        image={analytics}
        title="Influencer Cart: Your Personalized Talent Pool"
        caption="Track and measure the performance of your campaigns"
      />

      <PageLayout
        image={stats}
        title="Budget Tracking: Maximize Your Investment"
        caption="Keep your campaigns on budget with our intuitive tracking tools. Monitor every dollar spent in real-time, allocate funds efficiently, and adjust your budget as needed."
      />

      <PageLayout
        image={morestats}
        title="KPI Dashboard: Measure What Matters"
        caption="Track the performance of your campaigns with our comprehensive KPI dashboard. Get real-time data on key metrics like engagement, reach, conversions, and ROI."
      />
    </div>
  );
}

export default App;
