export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'The name of the person giving the testimonial.',
      },
      {
        name: 'profession',
        title: 'Profession',
        type: 'string',
        description: 'The profession of the person giving the testimonial.',
      },
      {
        name: 'comment',
        title: 'Comment',
        type: 'text',
        description: 'The testimonial text or comment.',
      },
      {
        name: 'profile',
        title: 'Profile Image',
        type: 'image',
        options: {
          hotspot: true, // Enables the ability to crop/adjust the image in the Sanity Studio.
        },
        description: 'The profile image of the person giving the testimonial.',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        validation: (Rule: { min: (arg0: number) => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.min(1).max(5), // Rating must be between 1 and 5
        description: 'The rating given by the person (1 to 5).',
      },
    ],
  };
  