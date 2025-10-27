'use server';
/**
 * @fileOverview Summarizes knitting pattern complexity and material requirements.
 *
 * - patternSummary - A function that summarizes the pattern.
 * - PatternSummaryInput - The input type for the patternSummary function.
 * - PatternSummaryOutput - The return type for the patternSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PatternSummaryInputSchema = z.object({
  patternText: z.string().describe('The full text of the knitting pattern.'),
});
export type PatternSummaryInput = z.infer<typeof PatternSummaryInputSchema>;

const PatternSummaryOutputSchema = z.object({
  complexity: z.string().describe('A summary of the pattern complexity (e.g., easy, intermediate, advanced).'),
  materials: z.string().describe('A summary of the materials required for the pattern, including yarn type and quantity.'),
});
export type PatternSummaryOutput = z.infer<typeof PatternSummaryOutputSchema>;

export async function patternSummary(input: PatternSummaryInput): Promise<PatternSummaryOutput> {
  return patternSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'patternSummaryPrompt',
  input: {schema: PatternSummaryInputSchema},
  output: {schema: PatternSummaryOutputSchema},
  prompt: `You are an expert knitting assistant. Please analyze the following knitting pattern and provide a summary of its complexity and the materials required.\n\nKnitting Pattern:\n{{{patternText}}}\n\nComplexity: \nMaterials: `,
});

const patternSummaryFlow = ai.defineFlow(
  {
    name: 'patternSummaryFlow',
    inputSchema: PatternSummaryInputSchema,
    outputSchema: PatternSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
