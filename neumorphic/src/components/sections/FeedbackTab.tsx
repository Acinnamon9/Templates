import React from "react";
import { Card } from "../ui/Card";
import { ProgressBar } from "../ui/ProgressBar";
import { Button } from "../ui/Button";
import { LoadingSpinner, DotsLoader, Skeleton } from "../ui/LoadingStates";
import { Modal } from "../ui/Modal";
import { Alert } from "../ui/Alert";
import { Layout as LayoutIcon, AlertTriangle } from "lucide-react";
import { useToast } from "../../context/ToastContext";

interface FeedbackTabProps {
  demoProgress: number;
  isDemoRunning: boolean;
  handleStartDemo: () => void;
  handleResetDemo: () => void;
  isModalOpen: boolean;
  setIsModalOpen: (val: boolean) => void;
}

export const FeedbackTab: React.FC<FeedbackTabProps> = ({
  demoProgress,
  isDemoRunning,
  handleStartDemo,
  handleResetDemo,
  isModalOpen,
  setIsModalOpen
}) => {
  const { showToast } = useToast();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Interactive Progress</h2>
          <span className="text-sm font-medium text-purple-600">{Math.round(demoProgress)}%</span>
        </div>
        <div className="space-y-6">
          <ProgressBar progress={demoProgress} />
          <div className="flex gap-3">
            <Button 
              variant="success" 
              className="flex-1" 
              onClick={handleStartDemo}
              disabled={isDemoRunning}
            >
              Start
            </Button>
            <Button 
              variant="raised" 
              className="flex-1" 
              onClick={handleResetDemo}
            >
              Reset
            </Button>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6 flex items-center gap-2">
          <LayoutIcon className="w-5 h-5 text-purple-600 mt-0.5" />
          Loading States
        </h2>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <LoadingSpinner />
            <span className="text-sm text-gray-600 dark:text-gray-300">Spinner</span>
          </div>
          <div className="flex items-center gap-4">
            <DotsLoader />
            <span className="text-sm text-gray-600 dark:text-gray-300">Dots</span>
          </div>
          <div className="space-y-3">
            <span className="text-sm text-gray-600 dark:text-gray-300 block mb-1">Skeleton</span>
            <Skeleton width="75%" />
            <Skeleton width="100%" />
            <Skeleton width="60%" />
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6">Interactive Toasts</h2>
        <div className="grid grid-cols-2 gap-4">
          <Button variant="info" onClick={() => showToast("info", "Information", "You have a new message.")}>Show Info</Button>
          <Button variant="success" onClick={() => showToast("success", "Success", "Changes saved successfully.")}>Show Success</Button>
          <Button variant="warning" onClick={() => showToast("warning", "Warning", "Storage is almost full.")}>Show Warning</Button>
          <Button variant="error" onClick={() => showToast("error", "Error", "Failed to delete file.")}>Show Error</Button>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6 flex items-center gap-2">
          <LayoutIcon className="w-5 h-5 text-purple-600" />
          Modals
        </h2>
        <Button variant="primary" className="w-full" onClick={() => setIsModalOpen(true)}>Open Modal Dialog</Button>
        
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          title="Neuromorphic Modal"
        >
          <p>This modal demonstrates the soft depth and translucent blur effects of the neumorphic design system when applied to overlay components.</p>
        </Modal>
      </Card>

      <Card className="md:col-span-2 lg:col-span-3">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-purple-600" />
          Alert Messages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Alert 
            variant="success" 
            title="Success" 
            message="Your changes have been saved successfully." 
          />
          <Alert 
            variant="error" 
            title="Error" 
            message="There was a problem processing your request." 
          />
          <Alert 
            variant="warning" 
            title="Warning" 
            message="Your session will expire in 5 minutes." 
          />
          <Alert 
            variant="info" 
            title="Information" 
            message="A new version of the library is available." 
          />
        </div>
      </Card>
    </div>
  );
};
