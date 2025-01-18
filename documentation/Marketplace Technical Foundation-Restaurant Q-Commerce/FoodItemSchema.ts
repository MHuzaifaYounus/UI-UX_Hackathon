export default {
  name: 'item',
  title: 'Food Item',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',

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

    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',

    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',

    },
    {
      name: 'availability',
      title: 'Availability',
      type: 'boolean',

    },
  ],
};
