import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Dish Name',
      //validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Dish Description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Category Image',
    }),
    defineField({
      name: 'Price',
      type: 'image',
      title: 'Price of the image in USD',
    }),
  ],
});
