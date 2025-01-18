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
      name: 'price',
      title: 'Price',
      type: 'number',

    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',

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
