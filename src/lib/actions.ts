
"use server";

import { patternSummary } from "@/ai/flows/pattern-summary";
import { z } from "zod";

const PatternSchema = z.object({
  patternText: z.string().min(50, { message: "Pattern text must be at least 50 characters." }),
});

export type FormState = {
  message: string | null;
  data: {
    complexity: string;
    materials: string;
  } | null;
  errors: {
    patternText?: string[];
  } | null;
};

export async function analyzePatternAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = PatternSchema.safeParse({
    patternText: formData.get("patternText"),
  });

  if (!validatedFields.success) {
    return {
      message: "Invalid input. Please provide more pattern text.",
      data: null,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await patternSummary({
      patternText: validatedFields.data.patternText,
    });
    return { message: "Success", data: result, errors: null };
  } catch (error) {
    console.error(error);
    return {
      message: "An unexpected error occurred. Please try again.",
      data: null,
      errors: null,
    };
  }
}
