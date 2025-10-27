import type { Project, Yarn, ProgressLog } from "@/lib/types";
import { placeholderImages } from "./placeholder-images.json";

const findImage = (id: string) => {
  const img = placeholderImages.find((p) => p.id === id);
  if (!img) return { imageUrl: "", imageHint: "" };
  return { imageUrl: img.imageUrl, imageHint: img.imageHint };
};

const logs: ProgressLog[] = [
  {
    id: "log1",
    date: "2024-05-20",
    rowsCompleted: 10,
    timeSpent: "1.5 hours",
    notes: "Cast on and knit the first 10 rows of the ribbing.",
  },
  {
    id: "log2",
    date: "2024-05-21",
    rowsCompleted: 10,
    timeSpent: "1 hour",
    notes: "Finished the 2x2 ribbing section.",
  },
  {
id: "log3",
    date: "2024-05-22",
    rowsCompleted: 20,
    timeSpent: "2 hours",
    notes: "Started the main stockinette body. Everything looks good.",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    name: "Cozy Winter Scarf",
    yarn: "Merino Wool",
    yarnColor: "Ocean Blue",
    needles: "5.0mm",
    patternUrl: "https://www.ravelry.com/patterns/library/garter-stitch-scarf-33",
    ...findImage("blue-scarf"),
    progress: 75,
    createdAt: "2024-05-20",
    notes: "A simple garter stitch scarf for a gift. The yarn is super soft and the color is vibrant. Should be a quick and satisfying knit.",
    logs: logs,
  },
  {
    id: "2",
    name: "Forest Green Beanie",
    yarn: "Alpaca Blend DK",
    yarnColor: "Forest Green",
    needles: "4.0mm",
    ...findImage("green-beanie"),
    progress: 40,
    createdAt: "2024-05-15",
    notes: "A classic ribbed beanie. The alpaca blend is warm and has a lovely drape. The deep green color is perfect for autumn and winter.",
    logs: logs.slice(0, 2),
  },
  {
    id: "3",
    name: "Sunset Shawl",
    yarn: "Hand-dyed Fingering",
    yarnColor: "Sunset Fade",
    needles: "3.5mm",
    ...findImage("sunset-shawl"),
    progress: 15,
    createdAt: "2024-05-25",
    notes: "An ambitious lace shawl project with a beautiful gradient yarn. The pattern is complex, but the final result should be stunning. Starting with the first lace repeat.",
    logs: [logs[0]],
  },
  {
    id: "4",
    name: "Baby's First Sweater",
    yarn: "Cotton DK",
    yarnColor: "Pastel Yellow",
    needles: "4.5mm",
    ...findImage("baby-sweater"),
    progress: 95,
    createdAt: "2024-04-10",
    notes: "A small, top-down raglan sweater for a newborn. Cotton yarn makes it perfect for sensitive skin. Just need to weave in the ends and add buttons.",
    logs: logs,
  },
];

export const yarnStash: Yarn[] = [
  {
    id: "y1",
    name: "Superwash Merino",
    brand: "KnitPicks",
    color: "Amethyst Heather",
    weight: "Worsted",
    quantity: 2,
    unit: "skeins",
    ...findImage("yarn-purple"),
  },
  {
    id: "y2",
    name: "Alpaca Cloud",
    brand: "WeAreKnitters",
    color: "Natural White",
    weight: "Lace",
    quantity: 1,
    unit: "skeins",
    projectId: "3",
    ...findImage("yarn-white"),
  },
  {
    id: "y3",
    name: "Tough Love Sock",
    brand: "SweetGeorgia Yarns",
    color: "Oyster",
    weight: "Fingering",
    quantity: 1,
    unit: "skeins",
    ...findImage("yarn-gray"),
  },
  {
    id: "y4",
    name: "Simply Cotton",
    brand: "Lion Brand",
    color: "Sunshine",
    weight: "DK",
    quantity: 3,
    unit: "skeins",
    ...findImage("yarn-yellow"),
    projectId: "4",
  },
    {
    id: "y5",
    name: "Wool-Ease Thick & Quick",
    brand: "Lion Brand",
    color: "Fisherman",
    weight: "Super Bulky",
    quantity: 4,
    unit: "skeins",
    ...findImage("yarn-cream"),
  },
];
