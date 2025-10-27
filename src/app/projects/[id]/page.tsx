import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { ProjectDetailsClient } from "@/components/project-details-client";
import { YarnIcon, NeedlesIcon } from "@/components/icons";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-1 space-y-6">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <Image
              src={project.imageUrl}
              alt={project.name}
              width={800}
              height={600}
              className="w-full object-cover"
              data-ai-hint={project.imageHint}
            />
          </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">{project.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <div className="flex items-center gap-3 text-sm">
                        <YarnIcon className="h-5 w-5 text-muted-foreground"/>
                        <span className="font-medium">{project.yarn} in {project.yarnColor}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                        <NeedlesIcon className="h-5 w-5 text-muted-foreground"/>
                        <span className="font-medium">{project.needles} needles</span>
                    </div>
                    {project.patternUrl && (
                        <Link href={project.patternUrl} target="_blank" className="flex items-center gap-3 text-sm text-primary hover:underline">
                            <ExternalLink className="h-5 w-5 text-muted-foreground"/>
                            <span>View Pattern</span>
                        </Link>
                    )}
                </div>
                <Separator />
                <div className="space-y-2">
                    <div className="w-full flex justify-between items-center text-sm text-muted-foreground">
                        <span>Progress</span>
                        <span className="font-semibold text-foreground">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                </div>
            </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-2">
        <ProjectDetailsClient project={project} />
      </div>
    </div>
  );
}
