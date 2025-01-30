import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchBar } from "./SearchBar";
import { HiSearch } from "react-icons/hi";

interface WithSearchProps {
  children?: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const WithSearchBar: React.FC<WithSearchProps> = ({
  children,
  value,
  onChange,
  placeholder,
}) => {
  const [isSearching, setIsSearching] = useState(false);

  const handleClose = () => {
    if (!value) {
      setIsSearching(false);
    }
  };

  const handleForceClose = () => {
    setIsSearching(false);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {isSearching ? (
          <motion.div
            key="search"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full sm:w-auto"
          >
            <SearchBar
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              onClose={handleClose}
              onForceClose={handleForceClose}
              autoFocus
            />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-between w-full"
          >
            {children}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSearching(true)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <HiSearch className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
