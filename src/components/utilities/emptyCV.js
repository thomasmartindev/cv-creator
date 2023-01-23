import { v4 as uuidv4 } from 'uuid'

export const emptyCV = {
  education: [
    {
      from: '',
      id: uuidv4(),
      institution: '',
      location: '',
      qualification: '',
      to: ''
    }
  ],
  experience: [
    {
      company: '',
      from: '',
      id: uuidv4(),
      location: '',
      position: '',
      summary: [
        {
          id: uuidv4(),
          text: ''
        }
      ],
      to: ''
    }
  ],
  personal: {
    email: '',
    firstName: '',
    lastName: '',
    location: '',
    occupation: '',
    phoneNumber: '',
  },
  skills: [
    {
      id: uuidv4(),
      skill: ''
    }
  ]
}