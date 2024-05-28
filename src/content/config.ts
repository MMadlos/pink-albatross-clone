import { z, defineCollection } from "astro:content";

const ingredientsCollections = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

const icecreamsCollections = defineCollection({
  type: "content",
  schema: z.object({
    cardName: z.string(),
    title: z.string(),
    subtitle: z.string(),
    ingredients: z.array(z.string()),
    nutrition: z.object({
      categories: z.array(z.string()),
      values: z.array(z.string()),
    }),
    allergens: z.array(z.string()),
    formats: z.array(z.string()),
  }),
});

export const collection = {
  icecreams: icecreamsCollections,
  ingredients: ingredientsCollections,
};
