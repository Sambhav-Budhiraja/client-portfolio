import { defineField, defineType } from 'sanity'

export const campaignType = defineType({
  name: 'campaign',
  title: 'Photography Campaign',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'title',
      title: 'Campaign Title',
      type: 'string',
    }),
    defineField({
      name: 'client',
      title: 'Client / Magazine',
      type: 'string',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    }),
  ],
})