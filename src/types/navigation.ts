import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface NavItemProps {
  item: NavItem;
  isBottom?: boolean;
}