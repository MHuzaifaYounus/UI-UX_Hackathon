export default {
    name: 'payment',
    title: 'Payment',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'Payment ID',
        type: 'string',
      },
      {
        name: 'type',
        title: 'Payment Type',
        type: 'string',
      },
      {
        name: 'details',
        title: 'Payment Details',
        type: 'text',
      },
      {
        name: 'customer_id',
        title: 'Customer ID',
        type: 'string',
      },
      {
        name: 'status',
        title: 'Payment Status',
        type: 'string',
        options: {
          list: [
            { title: 'Completed', value: 'completed' },
            { title: 'Pending', value: 'pending' },
            { title: 'Failed', value: 'failed' },
            { title: 'Refunded', value: 'refunded' }
          ],
          layout: 'dropdown',
        },
      },
    ],
  };
  