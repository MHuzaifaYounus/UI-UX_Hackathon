import { type SchemaTypeDefinition } from 'sanity'
import FoodItemSchema from './FoodItemSchema'
import ChefsSchema from './ChefsSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [FoodItemSchema,ChefsSchema],
}
