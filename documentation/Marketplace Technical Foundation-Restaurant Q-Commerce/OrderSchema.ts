export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'ID',
        type: 'number',
  
      },
      {
        name: 'customer_id',
        title: 'Customer ID',
        type: 'number',
  
      },
      {
        name: 'restaurant_id',
        title: 'Restaurant Id',
        type: 'number',
  
      },
      {
        name: 'items',
        title: 'Food Items',
        type: 'array',
  
      },
      {
        name: 'total_price',
        title: 'Total Price',
        type: 'number',
  
      },
      {
        name: 'order_status',
        title: 'Order Status',
        type: 'string', 
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Cooking', value: 'cooking' },
            { title: 'Rider is Coming', value: 'shipping' },
            { title: 'Completed', value: 'completed' },
            { title: 'Cancelled', value: 'cancelled' }
          ], 
          layout: 'radio' 
        }
      }
    ],
  };
  