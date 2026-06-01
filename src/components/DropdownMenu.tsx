import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface DropdownMenuProps {
  trigger: string;
  items: DropdownItem[];
  className?: string;
  megaMenu?: boolean;
}

export function DropdownMenu({
  trigger,
  items,
  className,
  megaMenu = false,
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-1 font-sans text-sm tracking-wide transition-colors duration-300 hover:text-foreground",
          className
        )}
      >
        {trigger}
        <ChevronDown
          size={16}
          className={cn(
            "transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div
          className={cn(
            "absolute top-full left-0 z-50 min-w-max transition-all duration-300",
            megaMenu
              ? "mt-0 w-96 bg-white shadow-xl rounded-none border-t border-border"
              : "mt-2 bg-white rounded-lg shadow-lg border border-border"
          )}
        >
          {megaMenu ? (
            <div className="grid grid-cols-2 gap-0 p-6">
              {items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="group/item px-3 py-3 hover:bg-muted rounded transition-colors"
                >
                  <div className="font-medium text-sm text-foreground group-hover/item:text-accent">
                    {item.label}
                  </div>
                  {item.description && (
                    <div className="text-xs text-muted-foreground mt-1">
                      {item.description}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
