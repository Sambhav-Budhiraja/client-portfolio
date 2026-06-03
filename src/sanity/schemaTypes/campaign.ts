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
      name: 'hoverCaption',
      title: 'Hover Caption',
      type: 'string',
      description: 'Short text that appears when hovering over the album cover (e.g., "Editorial shot in Mumbai")',
    }),
    
    // THE MERGED SINGLE GALLERY FIELD (FIXES THE ERROR)
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      description: 'Upload your campaign photos here. Drag and drop them to change the order on the website.',
      type: 'array',
      options: {
        layout: 'grid', // Keeps the studio dashboard clean and organized in rows
      },
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            // This adds the custom backstory textbox inside each individual image!
            {
              name: 'backstory',
              title: 'Photo Backstory / Caption',
              type: 'text',
              description: 'Write the backstory or context for this specific photo.',
            },
            {
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
              description: 'Very short description for website search engines and accessibility.',
            }
          ]
        }
      ]
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage", 
    },
    prepare(selection) {
      return {
        title: selection.title,
        media: selection.media,
      };
    },
  },
})