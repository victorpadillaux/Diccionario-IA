import { LucideIcon } from 'lucide-react';

export interface TermItem {
  id: string;
  title: string;
  icon: LucideIcon;
  description?: string;
  transcription?: string;
  videoPlaceholder?: string;
  videoUrl?: string;
}