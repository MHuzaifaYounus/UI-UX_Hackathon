import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'food',
  title: 'Food',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'A unique slug for the document (used in URLs).',
      options: {
        source: 'name', // Automatically generate the slug from the title field
        maxLength: 96,   // Maximum length of the slug
        slugify: (input:string) =>
          input
            .toLowerCase()              // Convert to lowercase
            .replace(/\s+/g, '-')       // Replace spaces with dashes
            .replace(/[^a-z0-9-]/g, '') // Remove invalid characters
            .slice(0, 96),              // Enforce max length
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',

    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',

    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',

    },
    {
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',

    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },

    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',

    },
    {
      name: 'available',
      title: 'Available',
      type: 'boolean',
      initialValue: true
    }
  ],



};
