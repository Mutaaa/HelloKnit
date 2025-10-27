'use server';

/**
 * @fileOverview An AI assistant for knitting patterns, providing explanations, and adjustments.
 *
 * - patternAssistance - A function that provides assistance with knitting patterns.
 * - PatternAssistanceInput - The input type for the patternAssistance function.
 * - PatternAssistanceOutput - The return type for the patternAssistance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PatternAssistanceInputSchema = z.object({
  patternText: z
    .string()
    .describe('The text of the knitting pattern to follow.'),
  userQuery: z
    .string()
    .describe(
      'The specific question or request from the user regarding the pattern, such as clarification on a step or size adjustment.'
    ),
  currentStep: z
    .string()
    .optional()
    .describe(
      'The current step the user is on in the knitting pattern. Can be undefined if the user is just starting.'
    ),
});

export type PatternAssistanceInput = z.infer<typeof PatternAssistanceInputSchema>;

const PatternAssistanceOutputSchema = z.object({
  explanation: z
    .string()
    .describe('A detailed explanation of the requested step or adjustment.'),
  adjustedPatternSnippet: z
    .string()
    .optional()
    .describe('A snippet of the pattern adjusted to the user request if applicable.'),
});

export type PatternAssistanceOutput = z.infer<typeof PatternAssistanceOutputSchema>;

export async function patternAssistance(input: PatternAssistanceInput): Promise<PatternAssistanceOutput> {
  return patternAssistanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'patternAssistancePrompt',
  input: {schema: PatternAssistanceInputSchema},
  output: {schema: PatternAssistanceOutputSchema},
  prompt: `You are an AI assistant for knitters. Your goal is to help the user understand and follow knitting patterns.

You will receive the text of a knitting pattern, a specific question from the user, and optionally the current step they are on.

Provide clear and concise explanations, and if requested, adjust the pattern for custom sizing.

Knitting Pattern:
{{patternText}}

User Query:
{{userQuery}}

{{#if currentStep}}Current Step:
{{currentStep}}{{/if}}
`,
});

const patternAssistanceFlow = ai.defineFlow(
  {
    name: 'patternAssistanceFlow',
    inputSchema: PatternAssistanceInputSchema,
    outputSchema: PatternAssistanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
