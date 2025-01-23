import { type SchemaTypeDefinition } from 'sanity'
import FoodItemSchema from './FoodItemSchema'
import ChefsSchema from './ChefsSchema'
import TestimonalsSchema from './TestimonalsSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [FoodItemSchema,ChefsSchema, TestimonalsSchema],
}
