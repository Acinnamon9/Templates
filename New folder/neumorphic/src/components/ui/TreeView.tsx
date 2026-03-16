import React, { useState } from "react";
import { ChevronRight, Folder, FolderOpen, FileText } from "lucide-react";
import { Card } from "./Card";

interface TreeNode {
  id: string;
  name: string;
  type: "folder" | "file";
  children?: TreeNode[];
}

interface TreeItemProps {
  node: TreeNode;
  level: number;
}

const TreeItem: React.FC<TreeItemProps> = ({ node, level }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="select-none">
      <div
        className={`flex items-center gap-2 py-2 px-3 rounded-xl cursor-pointer transition-all hover:bg-black/5 dark:hover:bg-white/5 active:scale-95`}
        style={{ paddingLeft: `${level * 1.5 + 0.75}rem` }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {hasChildren ? (
          <ChevronRight
            className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
              isExpanded ? "rotate-90" : ""
            }`}
          />
        ) : (
          <div className="w-4" />
        )}
        
        {node.type === "folder" ? (
          isExpanded ? (
            <FolderOpen className="w-4 h-4 text-purple-500" />
          ) : (
            <Folder className="w-4 h-4 text-purple-500" />
          )
        ) : (
          <FileText className="w-4 h-4 text-gray-400" />
        )}
        
        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
          {node.name}
        </span>
      </div>
      
      {hasChildren && isExpanded && (
        <div className="animate-in fade-in slide-in-from-left-2 duration-300">
          {node.children!.map((child) => (
            <TreeItem key={child.id} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const TreeView: React.FC<{ data: TreeNode[] }> = ({ data }) => {
  return (
    <Card className="max-w-md mx-auto overflow-hidden">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-6">File Explorer</h2>
        <div className="space-y-1">
            {data.map((node) => (
                <TreeItem key={node.id} node={node} level={0} />
            ))}
        </div>
    </Card>
  );
};
