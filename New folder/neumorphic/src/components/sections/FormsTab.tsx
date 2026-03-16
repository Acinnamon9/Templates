import React from "react";
import { Card } from "../ui/Card";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { SearchDropdown } from "../ui/SearchDropdown";
import { DatePicker } from "../ui/DatePicker";
import { TimePicker } from "../ui/TimePicker";
import { FileUpload } from "../ui/FileUpload";
import { Search } from "lucide-react";

export const FormsTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6 flex items-center gap-2">
          <Search className="w-5 h-5 text-purple-600" />
          Text Inputs
        </h2>
        <div className="space-y-5">
          <Input label="Full Name" placeholder="John Doe" />
          <Input label="Email Address" type="email" placeholder="john@example.com" />
          <Button variant="primary" className="w-full">Submit Form</Button>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6">Selection</h2>
        <div className="space-y-5">
          <SearchDropdown 
            label="Favorite Framework"
            options={[
              { value: "react", label: "React" },
              { value: "vue", label: "Vue" },
              { value: "angular", label: "Angular" },
              { value: "svelte", label: "Svelte" },
            ]}
            onChange={(val) => console.log(val)}
          />
          <div className="grid grid-cols-2 gap-4">
            <DatePicker label="Date" />
            <TimePicker label="Time" />
          </div>
        </div>
      </Card>

      <Card className="md:col-span-2 lg:col-span-1">
        <FileUpload label="File Upload" />
      </Card>
    </div>
  );
};
