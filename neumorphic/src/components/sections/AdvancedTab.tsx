import React from "react";
import { Card } from "../ui/Card";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import { Stepper } from "../ui/Stepper";
import { FeatureCard } from "../ui/FeatureCard";
import { Timeline } from "../ui/Timeline";
import { ContextMenu } from "../ui/ContextMenu";
import { TreeView } from "../ui/TreeView";
import { Badge } from "../ui/Badge";
import { LayoutGrid, Files, MousePointer2 } from "lucide-react";

const TREE_DATA = [
  {
    id: "1",
    name: "src",
    type: "folder" as const,
    isOpen: true,
    children: [
      { 
        id: "2", 
        name: "components", 
        type: "folder" as const, 
        children: [
          { id: "3", name: "Button.tsx", type: "file" as const },
          { id: "4", name: "Modal.tsx", type: "file" as const },
          { id: "5", name: "Card.tsx", type: "file" as const },
        ]
      },
      { id: "6", name: "App.tsx", type: "file" as const },
      { id: "7", name: "index.ts", type: "file" as const },
    ],
  },
  { id: "8", name: "package.json", type: "file" as const },
  { id: "9", name: "README.md", type: "file" as const },
];

export const AdvancedTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="md:col-span-2 lg:col-span-3 space-y-6">
        <Card>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Navigation</h2>
              <Breadcrumbs items={[{ label: "Home" }, { label: "Products" }, { label: "Details" }]} />
            </div>
            <div className="flex-1 max-w-xl">
              <Stepper 
                steps={[
                  { id: 1, label: "Account", status: "complete" },
                  { id: 2, label: "Details", status: "current" },
                  { id: 3, label: "Confirm", status: "pending" }
                ]} 
              />
            </div>
          </div>
        </Card>
      </div>

      <Card className="md:col-span-2 lg:col-span-2">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6 flex items-center gap-2">
          <LayoutGrid className="w-5 h-5 text-purple-600" />
          Featured Capabilities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <FeatureCard icon="Zap" title="Fast" gradientFrom="from-purple-600" gradientTo="to-purple-700" />
          <FeatureCard icon="ShieldCheck" title="Secure" gradientFrom="from-green-500" gradientTo="to-green-600" />
          <FeatureCard icon="Sparkles" title="Modern" gradientFrom="from-yellow-500" gradientTo="to-yellow-600" />
          <FeatureCard icon="Globe" title="Global" gradientFrom="from-blue-500" gradientTo="to-blue-600" />
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6">Activity Feed</h2>
        <Timeline 
          events={[
            { time: "2 hours ago", title: "Deployment Successful", description: "Vite build completed in 1.4s" },
            { time: "5 hours ago", title: "New User Joined", description: "John Doe registered an account" },
          ]}
        />
      </Card>

      <div className="space-y-6 md:col-span-2">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
          <MousePointer2 className="w-5 h-5 text-purple-600" />
          Context Menu
        </h2>
        <ContextMenu>
          <div className="h-32 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 cursor-context-menu transition-colors hover:border-purple-400">
            <p className="text-sm text-gray-400 dark:text-gray-500 text-center px-4">
              Right-click here<br /><span className="text-xs">(or long press)</span>
            </p>
          </div>
        </ContextMenu>
      </div>

      <Card>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6 flex items-center gap-2">
          <Files className="w-5 h-5 text-purple-600" />
          Tree View
        </h2>
        <TreeView data={TREE_DATA} />
      </Card>
      
      <Card>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6">System Status</h2>
        <div className="space-y-4">
           <div className="flex justify-between text-sm">
             <span className="text-gray-500">Environment</span>
             <Badge variant="success">Production</Badge>
           </div>
           <div className="flex justify-between text-sm">
             <span className="text-gray-500">Version</span>
             <span className="font-mono text-gray-600 dark:text-gray-300">v1.2.4-stable</span>
           </div>
           <div className="flex justify-between text-sm">
             <span className="text-gray-500">Uptime</span>
             <span className="text-gray-600 dark:text-gray-300">14 days, 5 hours</span>
           </div>
        </div>
      </Card>
    </div>
  );
};
