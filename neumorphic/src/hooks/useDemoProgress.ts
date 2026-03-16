import { useState, useEffect, useCallback } from "react";
import { useToast } from "../context/ToastContext";

export const useDemoProgress = () => {
  const [demoProgress, setDemoProgress] = useState(0);
  const [isDemoRunning, setIsDemoRunning] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    let interval: any;
    if (isDemoRunning && demoProgress < 100) {
      interval = setInterval(() => {
        setDemoProgress((prev) => {
          const next = prev + Math.random() * 15;
          if (next >= 100) {
            setIsDemoRunning(false);
            showToast("success", "Complete!", "Upload finished successfully");
            return 100;
          }
          return next;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isDemoRunning, demoProgress, showToast]);

  const startDemo = useCallback(() => {
    setDemoProgress(0);
    setIsDemoRunning(true);
  }, []);

  const resetDemo = useCallback(() => {
    setDemoProgress(0);
    setIsDemoRunning(false);
  }, []);

  return {
    demoProgress,
    isDemoRunning,
    startDemo,
    resetDemo,
  };
};
