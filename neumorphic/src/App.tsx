import React, { useState } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/marketing/Hero";
import { TrustedBy } from "./components/marketing/TrustedBy";
import { Pricing } from "./components/marketing/Pricing";
import { BasicsTab } from "./components/sections/BasicsTab";
import { FormsTab } from "./components/sections/FormsTab";
import { FeedbackTab } from "./components/sections/FeedbackTab";
import { DataTab } from "./components/sections/DataTab";
import { AdvancedTab } from "./components/sections/AdvancedTab";
import { ToastProvider } from "./context/ToastContext";
import { useToast } from "./context/ToastContext";
import { ToastContainer } from "./components/ui/Toast";
import { useDemoProgress } from "./hooks/useDemoProgress";

function AppContent() {
  const { showToast } = useToast();
  const { demoProgress, isDemoRunning, startDemo, resetDemo } =
    useDemoProgress();

  // Section States
  const [notifications, setNotifications] = useState(false);
  const [terms, setTerms] = useState(false);
  const [plan, setPlan] = useState("free");
  const [basicsLoading, setBasicsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBasicsLoadingClick = () => {
    setBasicsLoading(true);
    setTimeout(() => {
      setBasicsLoading(false);
      showToast(
        "success",
        "Foundation Layer Verified",
        "System core modules are operational.",
      );
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-neu-bg-primary transition-colors">
      <Header />

      <main>
        {/* Landing Sections */}
        <Hero />
        <TrustedBy />

        {/* Feature Sections (Repurposed Tabs) */}
        <div
          id="features"
          className="max-w-7xl mx-auto px-4 md:px-6 pb-20 space-y-32"
        >
          <section className="pt-20">
            <div className="text-center mb-16 px-4">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                Core Foundations
              </h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Built on a system of soft shadows and precise geometry, our core
                components provide the base for any spatial experience.
              </p>
            </div>
            <BasicsTab
              notifications={notifications}
              setNotifications={setNotifications}
              terms={terms}
              setTerms={setTerms}
              plan={plan}
              setPlan={setPlan}
              loading={basicsLoading}
              handleLoadingClick={handleBasicsLoadingClick}
            />
          </section>

          <section
            id="playground"
            className="pt-20 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="text-center mb-16 px-4">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                Intelligent Forms
              </h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Experience high-fidelity data entry with our responsive inputs
                and smart validation systems.
              </p>
            </div>
            <FormsTab />
          </section>

          <section className="pt-20 border-t border-gray-200 dark:border-gray-800">
            <div className="text-center mb-16 px-4">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                Real-time Feedback
              </h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Interactive states and fluid progress indicators that make users
                feel exactly what's happening.
              </p>
            </div>
            <FeedbackTab
              demoProgress={demoProgress}
              isDemoRunning={isDemoRunning}
              handleStartDemo={startDemo}
              handleResetDemo={resetDemo}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
            />
          </section>

          <section className="pt-20 border-t border-gray-200 dark:border-gray-800">
            <div className="text-center mb-16 px-4">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                Data Visualization
              </h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Turn complex numbers into beautiful, tactical insights with our
                Neumorphic chart engine.
              </p>
            </div>
            <DataTab />
          </section>

          <Pricing />

          <section
            id="faq"
            className="pt-20 pb-20 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="text-center mb-16 px-4">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                Advanced Architecture
              </h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Deep structure for enterprise applications, featuring file
                trees, breadcrumbs, and context menus.
              </p>
            </div>
            <AdvancedTab />
          </section>
        </div>
      </main>

      <Footer />
      <ToastContainer />
    </div>
  );
}

function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}

export default App;
