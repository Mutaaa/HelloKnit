import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "./ui/badge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="font-headline tracking-tight">
            {project.name}
          </CardTitle>
          <CardDescription>
            {project.yarn} in {project.yarnColor}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-md">
            <Image
              src={project.imageUrl}
              alt={project.name}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={project.imageHint}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2">
            <div className="w-full flex justify-between items-center text-sm text-muted-foreground">
                <span>Progress</span>
                <span className="font-semibold">{project.progress}%</span>
            </div>
          <Progress value={project.progress} className="h-2" />
        </CardFooter>
      </Card>
    </Link>
  );
}
