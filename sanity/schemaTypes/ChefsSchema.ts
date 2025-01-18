export default {
    name: 'chef',
    title: 'Chef',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',

      },
      {
        name: 'position',
        title: 'Position',
        type: 'string',
       
      },
      {
        name: 'experience',
        title: 'Experience (Years)',
        type: 'number',
      
      },
      {
        name: 'specialty',
        title: 'Specialty',
        type: 'string',
       
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
  