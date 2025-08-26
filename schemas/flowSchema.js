import { z } from "zod";

export const nodeSchema = z.object({
  id: z.string(),
  kind: z.enum(["page", "decision", "action"]),
  title: z.string().optional(),
  data: z.any().optional(),
});

export const edgeSchema = z.object({
  from: z.string(),
  to: z.string(),
  when: z.string().optional(), // label like "success" | "error" | etc.
});

export const flowSchema = z.object({
  start: z.string(),
  nodes: z.array(nodeSchema),
  edges: z.array(edgeSchema),
});
