import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Headline",
      type: "string",
      description: "e.g., 'Hi, I'm Bharat Sethi'",
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
      description: "Write the full about me section here.",
    }),
    defineField({
      name: "image",
      title: "Profile Photo",
      type: "image",
      options: {
        hotspot: true, // Allows him to crop the image inside Sanity
      },
    }),
  ],
});