import { z } from 'zod';

export const NotionPageSchema = z.object({
  object: z.string(),
  id: z.string(),
  created_time: z.string(),
  last_edited_time: z.string(),
  created_by: z.object({ object: z.string(), id: z.string() }),
  last_edited_by: z.object({ object: z.string(), id: z.string() }),
  cover: z.object({
    type: z.string(),
    file: z.object({ url: z.string(), expiry_time: z.string() }),
  }),
  icon: z
    .object({
      type: z.enum(['external', 'file']),
      external: z.object({ url: z.string() }).optional(),
      file: z.object({ url: z.string() }).optional(),
    })
    .nullable(),
  parent: z.object({ type: z.string(), database_id: z.string() }),
  archived: z.boolean(),
  in_trash: z.boolean(),
  properties: z.object({
    start_date: z.object({
      id: z.string(),
      type: z.string(),
      date: z.object({ start: z.string(), end: z.null(), time_zone: z.null() }),
    }),
    slug: z.object({
      id: z.string(),
      type: z.string(),
      rich_text: z.array(
        z.object({
          type: z.string(),
          text: z.object({ content: z.string(), link: z.null() }),
          annotations: z.object({
            bold: z.boolean(),
            italic: z.boolean(),
            strikethrough: z.boolean(),
            underline: z.boolean(),
            code: z.boolean(),
            color: z.string(),
          }),
          plain_text: z.string(),
          href: z.null(),
        }),
      ),
    }),
    stack: z.object({
      id: z.string(),
      type: z.string(),
      multi_select: z.array(z.object({ id: z.string(), name: z.string(), color: z.string() })),
    }),
    class: z.object({
      id: z.string(),
      type: z.string(),
      select: z.object({ id: z.string(), name: z.string(), color: z.string() }),
    }),
    link2: z.object({ id: z.string(), type: z.string(), url: z.string().nullable() }),
    link1: z.object({ id: z.string(), type: z.string(), url: z.string().nullable() }),
    end_date: z.object({
      id: z.string(),
      type: z.string(),
      date: z.object({ start: z.string(), end: z.null(), time_zone: z.null() }),
    }),
    period: z.object({
      id: z.string(),
      type: z.string(),
      formula: z.object({ type: z.string(), string: z.string() }),
    }),
    release: z.object({
      id: z.string(),
      type: z.string(),
      checkbox: z.boolean(),
    }),
    description: z.object({
      id: z.string(),
      type: z.string(),
      rich_text: z.array(
        z.object({
          type: z.string(),
          text: z.object({ content: z.string(), link: z.null() }),
          annotations: z.object({
            bold: z.boolean(),
            italic: z.boolean(),
            strikethrough: z.boolean(),
            underline: z.boolean(),
            code: z.boolean(),
            color: z.string(),
          }),
          plain_text: z.string(),
          href: z.null(),
        }),
      ),
    }),
    title: z.object({
      id: z.string(),
      type: z.string(),
      title: z.array(
        z.object({
          type: z.string(),
          text: z.object({ content: z.string(), link: z.null() }),
          annotations: z.object({
            bold: z.boolean(),
            italic: z.boolean(),
            strikethrough: z.boolean(),
            underline: z.boolean(),
            code: z.boolean(),
            color: z.string(),
          }),
          plain_text: z.string(),
          href: z.null(),
        }),
      ),
    }),
  }),
  url: z.string(),
  public_url: z.null(),
});

export const NotionPagesResponseSchema = z.array(NotionPageSchema);

export type NotionPage = z.infer<typeof NotionPageSchema>;
