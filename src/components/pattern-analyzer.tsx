"use client";

import { useActionState, useEffect, useRef } from "react";
import { analyzePatternAction, type FormState } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useFormStatus } from "react-dom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Wand2, FlaskConical, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const initialState: FormState = {
  message: null,
  data: null,
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Analyzing...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Analyze Pattern
        </>
      )}
    </Button>
  );
}

export function PatternAnalyzer() {
  const [state, formAction] = useActionState(analyzePatternAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message === "Success" && state.data) {
      toast({
        title: "Analysis Complete!",
        description: "Your pattern has been successfully analyzed.",
      });
    } else if (state.message && state.message !== "Success") {
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: state.message,
      });
    }
  }, [state, toast]);


  return (
    <Card>
        <CardHeader>
            <CardTitle>Pattern Analyzer</CardTitle>
            <CardDescription>
                Paste your knitting pattern below to get an AI-powered summary of its complexity and material needs.
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <form action={formAction} ref={formRef} className="space-y-4">
                <Textarea
                name="patternText"
                placeholder="e.g., Cast on 40 sts. Row 1: *K2, P2*, repeat to end..."
                className="min-h-48 text-sm font-mono"
                required
                />
                {state.errors?.patternText && (
                    <p className="text-sm text-destructive">{state.errors.patternText[0]}</p>
                )}
                <div className="flex justify-end">
                    <SubmitButton />
                </div>
            </form>

            {state.data && (
                <Alert className="bg-primary/10 border-primary/50">
                    <Wand2 className="h-4 w-4 text-primary" />
                    <AlertTitle className="font-headline text-primary">AI Analysis Result</AlertTitle>
                    <AlertDescription className="mt-2 space-y-4 text-foreground/80">
                        <div className="space-y-1">
                            <h4 className="font-semibold flex items-center gap-2"><FlaskConical className="h-4 w-4 text-primary/80"/>Complexity</h4>
                            <p>{state.data.complexity}</p>
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-semibold flex items-center gap-2"><YarnIcon className="h-4 w-4 text-primary/80"/>Materials</h4>
                            <p>{state.data.materials}</p>
                        </div>
                    </AlertDescription>
                </Alert>
            )}

            {state.message && state.message !== "Success" && (
                 <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                       {state.message}
                    </AlertDescription>
                </Alert>
            )}
        </CardContent>
    </Card>
  );
}
