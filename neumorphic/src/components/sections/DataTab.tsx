import React from "react";
import { Card } from "../ui/Card";
import { DataTable } from "../ui/DataTable";
import { BarChart } from "../ui/BarChart";
import { DonutChart } from "../ui/DonutChart";
import { Table, BarChart3, PieChart } from "lucide-react";

const TABLE_COLUMNS = [
  { key: "name", label: "Name" },
  { key: "role", label: "Role" },
  { key: "status", label: "Status" },
];

const TABLE_DATA = [
  { name: "John Doe", role: "Developer", status: "Active" },
  { name: "Jane Smith", role: "Designer", status: "Pending" },
  { name: "Bob Wilson", role: "Manager", status: "Active" },
  { name: "Alice Brown", role: "Support", status: "Closed" },
];

export const DataTab: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2">
          <Table className="w-6 h-6 text-purple-600" />
          Dataset Overview
        </h2>
        <DataTable 
          title="User Management"
          columns={TABLE_COLUMNS}
          data={TABLE_DATA}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <div className="flex items-center gap-2 mb-6 text-gray-800 dark:text-gray-100 font-bold">
            <BarChart3 className="w-5 h-5 text-purple-600" />
            Activity Analysis
          </div>
          <BarChart 
            data={[
              { label: "Mon", value: 60 },
              { label: "Tue", value: 80 },
              { label: "Wed", value: 45 },
              { label: "Thu", value: 90 },
              { label: "Fri", value: 70 },
              { label: "Sat", value: 55 },
              { label: "Sun", value: 35 },
            ]}
          />
        </Card>

        <Card>
          <div className="flex items-center gap-2 mb-6 text-gray-800 dark:text-gray-100 font-bold">
            <PieChart className="w-5 h-5 text-purple-600" />
            Device Distribution
          </div>
          <DonutChart 
            data={[
              { label: "Desktop", value: 50, color: "#7c3aed" },
              { label: "Mobile", value: 30, color: "#10b981" },
              { label: "Tablet", value: 20, color: "#f59e0b" },
            ]}
          />
        </Card>
      </div>
    </div>
  );
};
