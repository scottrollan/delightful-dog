export default {
  name: 'services',
  type: 'document',
  title: 'Services',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Service',
      validation: Rule => Rule.required()
    },
    {
        name: 'subtitle',
        title: 'Subtitle (i.e., "For puppies 6-12 months old")',
        type: 'string',
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
