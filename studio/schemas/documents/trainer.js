import {format} from 'date-fns'

export default {
  name: 'trainer',
  type: 'document',
  title: 'Trainer',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'First and Last Name',
      validation: Rule => Rule.required()
    },
    {
        name: 'category',
        title: 'Permanent or Guest Trainer?',
        type: 'string',
        options: {
            list: [
                {title: 'Permanent', value: 'permanent'},
                {title: 'Guest', value: 'guest'}
            ]
        }
    },
    {
        name: 'image',
        type: 'image',
        title: 'Picture',
        validation: Rule => Rule.required()
      },
    {
      name: 'bioA',
      type: 'string',
      title: 'Bio Part 1',
      description: 'Paragraphs(s) before a list of certifications',
      validation: Rule => Rule.required()
    },    
    {
        name: 'certifications',
        title: 'Certifications, Memberships & Licenses',
        type: 'array',
        of: [
            {
            type: 'string'
            }
        ]
    },
    {
      name: 'bioB',
      type: 'string',
      title: 'Bio Part 2',
      description: 'Paragraph(s) after a list of certifications'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    },
    prepare ({title = 'No title', media}) {
      return {
        title,
        media
      }
    }
  }
}
