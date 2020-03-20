
export default {
    name: 'training',
    type: 'document',
    title: 'Training',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Service Title',
        validation: Rule => Rule.required()
      },
      {
          name: 'subtitle',
          title: 'Subtitle (i.e. "for puppies only")',
          type: 'string',
      },
      {
        name: 'displayOrder',
        type: 'number',
        title: 'Display Order on Page'
      },
      {
          name: 'image',
          type: 'image',
          title: 'Picture',
          validation: Rule => Rule.required()
        },
      {
        name: 'description',
        type: 'array',
        title: 'Service description',
          validation: Rule => Rule.required(),
        of: [
          {
            type: 'block'
          }
        ]
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
  