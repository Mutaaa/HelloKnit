import Image from "next/image";
import { yarnStash } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function YarnPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight font-headline">
          My Yarn Stash
        </h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Yarn
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {yarnStash.map((yarn) => (
          <Card key={yarn.id} className="flex flex-col overflow-hidden">
            <CardHeader className="p-0">
               <Image
                  src={yarn.imageUrl}
                  alt={yarn.name}
                  width={400}
                  height={400}
                  className="w-full object-cover aspect-square"
                  data-ai-hint={yarn.imageHint}
                />
            </CardHeader>
            <CardContent className="p-4 flex-grow">
                <h3 className="font-semibold font-headline tracking-tight">{yarn.name}</h3>
                <p className="text-sm text-muted-foreground">{yarn.brand}</p>
                <p className="text-sm text-muted-foreground">{yarn.color}</p>

            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <Badge variant="outline">{yarn.weight}</Badge>
                {yarn.projectId && (
                    <Badge variant="secondary" asChild>
                        <Link href={`/projects/${yarn.projectId}`}>In Use</Link>
                    </Badge>
                )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
