"use client";

import type { Project } from "@/lib/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PatternAnalyzer } from "./pattern-analyzer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { format } from "date-fns";
import { PlusCircle, Clock, BarChartHorizontalBig, Pencil } from "lucide-react";
import { Separator } from "./ui/separator";

export function ProjectDetailsClient({ project }: { project: Project }) {
  return (
    <Tabs defaultValue="progress" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="progress">Progress Log</TabsTrigger>
        <TabsTrigger value="pattern">Pattern AI</TabsTrigger>
        <TabsTrigger value="notes">Notes & Details</TabsTrigger>
      </TabsList>

      <TabsContent value="progress" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Log Your Progress</CardTitle>
            <CardDescription>Add a new entry to track your work.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <form className="space-y-4 rounded-lg border bg-card p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Rows/Rounds Completed" type="number" />
                    <Input placeholder="Time Spent (e.g., 2 hours)" />
                </div>
                <Textarea placeholder="Add notes about your progress, modifications, etc." />
                <div className="flex justify-end">
                    <Button><PlusCircle className="mr-2 h-4 w-4" /> Add Log</Button>
                </div>
            </form>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold font-headline">History</h3>
              {project.logs.length > 0 ? (
                project.logs.map((log, index) => (
                  <div key={log.id}>
                    <div className="grid gap-1.5">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold text-foreground">
                                {format(new Date(log.date), "MMMM d, yyyy")}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1.5"><BarChartHorizontalBig className="h-4 w-4"/>{log.rowsCompleted} rows</span>
                                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4"/>{log.timeSpent}</span>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{log.notes}</p>
                    </div>
                    {index < project.logs.length - 1 && <Separator className="my-4" />}
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground text-center py-4">No progress logged yet.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="pattern" className="mt-4">
        <PatternAnalyzer />
      </TabsContent>
      
      <TabsContent value="notes" className="mt-4">
        <Card>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>Notes & Details</CardTitle>
                        <CardDescription>Original notes and details for this project.</CardDescription>
                    </div>
                    <Button variant="outline" size="icon">
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit Notes</span>
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">{project.notes}</p>
            </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
