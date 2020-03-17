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
      description: 'Name',
      validation: Rule => Rule.required()
    },
    {
        name: 'category',
        title: 'Permanent or Guest Trainer?',
        type: 'string',
        options: {
            list: [
                {title: 'Permanent', value: 'permanent trainer'},
                {title: 'Guest', value: 'guest trainer'}
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
      name: 'bio',
      type: 'array',
      title: 'Bio',
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
