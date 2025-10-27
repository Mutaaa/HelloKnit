export type Project = {
  id: string;
  name: string;
  yarn: string;
  yarnColor: string;
  needles: string;
  patternUrl?: string;
  imageUrl: string;
  imageHint: string;
  progress: number; // 0-100
  createdAt: string;
  notes?: string;
  logs: ProgressLog[];
};

export type ProgressLog = {
  id: string;
  date: string;
  rowsCompleted: number;
  timeSpent: string; // e.g., "2 hours"
  notes: string;
};

export type Yarn = {
  id: string;
  name: string;
  brand: string;
  color: string;
  weight: string; // e.g., "Worsted", "DK"
  quantity: number; // in skeins or grams
  unit: "skeins" | "grams";
  imageUrl: string;
  imageHint: string;
  projectId?: string; // which project it's assigned to
};
