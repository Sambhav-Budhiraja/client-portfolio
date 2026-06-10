import { type SchemaTypeDefinition } from 'sanity'
import { campaignType } from './campaign'
import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'

// 🚨 1. IMPORT YOUR NEW ABOUT SCHEMA HERE
import about from './about' 

export const schema: { types: SchemaTypeDefinition[] } = {
  // 🚨 2. ADD 'about' TO THE END OF THIS ARRAY
  types: [blockContentType, categoryType, postType, authorType, campaignType, about], 
}