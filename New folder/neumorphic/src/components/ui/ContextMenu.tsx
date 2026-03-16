import React, { useState, useEffect, useRef } from "react";
import { Copy, Edit, Trash, Share } from "lucide-react";

interface ContextMenuProps {
  children: React.ReactNode;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const menuRef = useRef<HTMLDivElement>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPosition({ x: e.pageX, y: e.pageY });
    setVisible(true);
  };

  const handleClick = () => setVisible(false);

  useEffect(() => {
    const handleScroll = () => setVisible(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div onContextMenu={handleContextMenu} onClick={handleClick} className="relative">
      {children}
      
      {visible && (
        <div
          ref={menuRef}
          className="fixed z-100 w-48 py-2 rounded-2xl bg-neu-bg-primary dark:bg-gray-800 neu-raised animate-in fade-in zoom-in-95 duration-200"
          style={{ top: position.y, left: position.x }}
        >
          <ul className="text-sm">
            <li>
              <button className="w-full px-4 py-2 flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-left font-medium">
                <Edit className="w-4 h-4 text-purple-600" /> Edit Item
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-left font-medium">
                <Copy className="w-4 h-4 text-purple-600" /> Duplicate
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-left font-medium">
                <Share className="w-4 h-4 text-purple-600" /> Share Link
              </button>
            </li>
            <li className="my-1 border-t border-gray-100 dark:border-gray-700" />
            <li>
              <button className="w-full px-4 py-2 flex items-center gap-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors text-left font-medium">
                <Trash className="w-4 h-4" /> Delete
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
