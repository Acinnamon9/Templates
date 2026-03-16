import React, { useState } from "react";
import { Header } from "./components/layout/Header";
import { TabNavigation as Navigation } from "./components/layout/TabNavigation";
import { ToastProvider } from "./context/ToastContext";
import { useToast } from "./context/ToastContext";
import { ToastContainer } from "./components/ui/Toast";

// Section Components
import { BasicsTab } from "./components/sections/BasicsTab";
import { FormsTab } from "./components/sections/FormsTab";
import { FeedbackTab } from "./components/sections/FeedbackTab";
import { DataTab } from "./components/sections/DataTab";
import { AdvancedTab } from "./components/sections/AdvancedTab";

import { TABS } from "./constants/tabs";
import { useDemoProgress } from "./hooks/useDemoProgress";

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState("basics");
  const [notifications, setNotifications] = useState(false);
  const [terms, setTerms] = useState(false);
  const [plan, setPlan] = useState("free");
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { showToast } = useToast();

  const {
    demoProgress,
    isDemoRunning,
    startDemo,
    resetDemo
  } = useDemoProgress();

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast("success", "Action Complete", "The background task finished successfully.");
    }, 2000);
  };

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 max-w-7xl">
        <Navigation 
          tabs={TABS}
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />

        {activeTab === "basics" && (
          <BasicsTab 
            notifications={notifications}
            setNotifications={setNotifications}
            terms={terms}
            setTerms={setTerms}
            plan={plan}
            setPlan={setPlan}
            loading={loading}
            handleLoadingClick={handleLoadingClick}
          />
        )}

        {activeTab === "forms" && <FormsTab />}

        {activeTab === "feedback" && (
          <FeedbackTab 
            demoProgress={demoProgress}
            isDemoRunning={isDemoRunning}
            handleStartDemo={startDemo}
            handleResetDemo={resetDemo}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}

        {activeTab === "data" && <DataTab />}

        {activeTab === "advanced" && <AdvancedTab />}
      </main>

      <ToastContainer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
};

export default App;
