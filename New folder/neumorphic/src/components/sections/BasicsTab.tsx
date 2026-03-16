import React from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Toggle } from "../ui/Toggle";
import { Checkbox } from "../ui/Checkbox";
import { RadioGroup } from "../ui/RadioGroup";
import { Badge } from "../ui/Badge";
import { Tooltip } from "../ui/Tooltip";
import { Accordion } from "../ui/Accordion";
import { MousePointerClick, ToggleLeft, Badge as BadgeIcon, MessageSquare, ChevronsDown } from "lucide-react";

interface BasicsTabProps {
  notifications: boolean;
  setNotifications: (val: boolean) => void;
  terms: boolean;
  setTerms: (val: boolean) => void;
  plan: string;
  setPlan: (val: string) => void;
  loading: boolean;
  handleLoadingClick: () => void;
}

export const BasicsTab: React.FC<BasicsTabProps> = ({
  notifications,
  setNotifications,
  terms,
  setTerms,
  plan,
  setPlan,
  loading,
  handleLoadingClick
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Buttons Card */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6 flex items-center gap-2">
          <MousePointerClick className="w-5 h-5 text-purple-600" />
          Buttons
        </h2>
        <div className="space-y-4">
          <Button variant="default" className="w-full">Default</Button>
          <Button variant="primary" className="w-full">Primary</Button>
          <Button variant="success" className="w-full">Success</Button>
          <Button 
            variant="raised" 
            className="w-full" 
            loading={loading}
            onClick={handleLoadingClick}
          >
            Click for Loading
          </Button>
        </div>
      </Card>

      {/* Toggles & Checks Card */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6 flex items-center gap-2">
          <ToggleLeft className="w-5 h-5 text-purple-600" />
          Toggles & Checks
        </h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">Enable notifications</span>
            <Toggle id="notifications-toggle" checked={notifications} onChange={setNotifications} />
          </div>
          <div className="flex items-center gap-3">
            <Checkbox id="terms-checkbox" checked={terms} onChange={setTerms} />
            <span className="text-sm text-gray-600 dark:text-gray-300">Accept terms</span>
          </div>
          <RadioGroup
            label="Choose plan:"
            name="plan-selection"
            options={[
              { label: "Free", value: "free" },
              { label: "Pro", value: "pro" },
            ]}
            value={plan}
            onChange={setPlan}
          />
        </div>
      </Card>

      {/* Badges Card */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6 flex items-center gap-2">
          <BadgeIcon className="w-5 h-5 text-purple-600" />
          Badges
        </h2>
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">With Indicators</h3>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-green-700 bg-green-100 dark:bg-green-900/40 dark:text-green-300">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              Active
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-yellow-700 bg-yellow-100 dark:bg-yellow-900/40 dark:text-yellow-300">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
              Pending
            </span>
          </div>
        </div>
      </Card>

      {/* Tooltips Card */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-purple-600" />
          Tooltips
        </h2>
        <div className="flex gap-4">
          <Tooltip content="Home Page">
            <Button variant="raised" className="p-3">H</Button>
          </Tooltip>
          <Tooltip content="Settings" position="bottom">
            <Button variant="raised" className="p-3">S</Button>
          </Tooltip>
          <Tooltip content="Bookmarks" position="right">
            <Button variant="raised" className="p-3">B</Button>
          </Tooltip>
          <Tooltip content="User Profile" position="left">
            <Button variant="raised" className="p-3">U</Button>
          </Tooltip>
        </div>
      </Card>

      {/* Accordion Card */}
      <Card className="md:col-span-2 lg:col-span-1">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
          <ChevronsDown className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          Accordion
        </h2>
        <Accordion 
          items={[
            { 
              id: "1", 
              title: "What is neuromorphic design?", 
              content: "Neuromorphic design uses soft shadows and gradients to create a soft, extruded plastic look. It mimics real physical objects with subtle depth." 
            },
            { 
              id: "2", 
              title: "Is it accessible?", 
              content: "Yes! This implementation includes full keyboard navigation, ARIA attributes, and screen reader support." 
            },
            { 
              id: "3", 
              title: "Can I customize it?", 
              content: "Absolutely! All components are built with customization in mind. Colors, sizes, and animations can be easily modified." 
            },
          ]} 
        />
      </Card>
    </div>
  );
};
