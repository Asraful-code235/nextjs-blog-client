// in schema.js
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  type: 'document',
  title: 'Comment',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
      readOnly: true,
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule) => Rule.required().email(),
      readOnly: true,
    }),
    defineField({
      name: 'message',
      type: 'text',
      title: 'Message',
      validation: (Rule) => Rule.required(),
      readOnly: true,
    }),
    defineField({
      name: 'adminResponse',
      type: 'text',
      title: 'Admin Response',
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
      title: 'Created At',
      validation: (Rule) => Rule.required(),
      readOnly: true,
    }),
  ],
})
