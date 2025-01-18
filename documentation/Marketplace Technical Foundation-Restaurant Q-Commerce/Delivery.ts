export default {
    name: 'delivery',
    title: 'Delivery',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'Delivery ID',
        type: 'string',
      },
      {
        name: 'address',
        title: 'Delivery Address',
        type: 'text',
      },
      {
        name: 'delivery_date',
        title: 'Delivery Date',
        type: 'datetime',
      },
      {
        name: 'status',
        title: 'Delivery Status',
        type: 'string',
        options: {
            list: [
                { title: 'Pending', value: 'pending' },
                { title: 'Cooking', value: 'cooking' },
                { title: 'Rider is Coming', value: 'shipping' },
                { title: 'Completed', value: 'completed' },
                { title: 'Cancelled', value: 'cancelled' }
              ], 
          layout: 'dropdown',
        },
      },
      {
        name: 'order_id',
        title: 'Order ID',
        type: 'string',
      },
    ],
  };
  