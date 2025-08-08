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
    Slug: z.object({
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
    Stack: z.object({
      id: z.string(),
      type: z.string(),
      multi_select: z.array(z.object({ id: z.string(), name: z.string(), color: z.string() })),
    }),
    Class: z.object({
      id: z.string(),
      type: z.string(),
      select: z.object({ id: z.string(), name: z.string(), color: z.string() }),
    }),
    Link2: z.object({ id: z.string(), type: z.string(), url: z.string().nullable() }),
    Link1: z.object({ id: z.string(), type: z.string(), url: z.string().nullable() }),
    EndDate: z.object({
      id: z.string(),
      type: z.string(),
      date: z.object({ start: z.string(), end: z.null(), time_zone: z.null() }),
    }),
    StartDate: z.object({
      id: z.string(),
      type: z.string(),
      date: z.object({ start: z.string(), end: z.null(), time_zone: z.null() }),
    }),
    Period: z.object({
      id: z.string(),
      type: z.string(),
      formula: z.object({ type: z.string(), string: z.string() }),
    }),
    Release: z.object({
      id: z.string(),
      type: z.string(),
      checkbox: z.boolean(),
    }),
    Description: z.object({
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
    Name: z.object({
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
    NameEng: z.object({
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
    Color: z.object({
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
    Thumbnail: z.object({
      id: z.string(),
      type: z.string(),
      files: z.array(
        z.object({ name: z.string(), type: z.string(), file: z.object({ url: z.string() }) }),
      ),
    }),
  }),
  url: z.string(),
  public_url: z.null(),
});

export const NotionPagesSchema = z.array(NotionPageSchema);

export type NotionPage = z.infer<typeof NotionPageSchema>;
