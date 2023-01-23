import { v4 as uuidv4 } from 'uuid'

export const exampleCV = {
  education: [
    {
      from: '2012',
      id: uuidv4(),
      institution: 'New York University',
      location: 'New York, NY',
      qualification: 'Master of Computer Science',
      to: '2014'
    },
    {
      from: '2008',
      id: uuidv4(),
      institution: 'Michigan State University',
      location: 'Detroit, MI',
      qualification: 'Bachelor of Computer Science',
      to: '2012'
    }
  ],
  experience: [
    {
      company: 'QuickBooks',
      from: 'January 2017',
      id: uuidv4(),
      location: 'New York, NY',
      position: 'Software Developer',
      summary: [
        {
          id: uuidv4(),
          text: 'Worked on the payments team to save time and improve cash flow for over 50,000 through the development of modern, responsive customer experiences'
        },
        {
          id: uuidv4(),
          text: 'Led the migration from AWS to GCP for the team to reduce cloud costs by $260,000 per year'
        },
        {
          id: uuidv4(),
          text: 'Worked closely with the product team to re-configure the processing of invoices, saving customers over 125,000 manual hours of work per month'
        },
        {
          id: uuidv4(),
          text: 'Mentored three junior front-end developers on the team on React, and documented best practices within the organization'
        }
      ],
      to: 'current'
    },
    {
      company: 'AMR',
      from: 'January 2014',
      id: uuidv4(),
      location: 'New York, NY',
      position: 'Front-End Developer',
      summary: [
        {
          id: uuidv4(),
          text: 'Contributed to the in-house UI library to create reusable components that saved 125+ hours of development per month'
        },
        {
          id: uuidv4(),
          text: 'Created a web app MVP for a store delivery management platform with 200+ business customers to create, manage, and monitor deliveries using React and Redux'
        },
        {
          id: uuidv4(),
          text: 'Added features to meditation app with 5,000+ monthly users, enabling audio and video uploads using React and Redux'
        },
        {
          id: uuidv4(),
          text: 'Improved customer conversion rate by 17% through A/B testing of different components and combinations, representing $500,000+ in incremental annual revenue'
        }
      ],
      to: 'December 2016'
    },
    {
      company: 'Kelly',
      from: 'June 2012',
      id: uuidv4(),
      location: 'New York, NY',
      position: 'Help Desk Analyst',
      summary: [
        {
          id: uuidv4(),
          text: 'Diagnosed technical issues for 30+ clients per day by phone, email, and chat, solving issues within 15 minutes on average'
        },
        {
          id: uuidv4(),
          text: 'Successfully reached solutions for 92% of computer errors, and escalated more complex tickets to higher tiers to assist clients as quickly as possible'
        },
        {
          id: uuidv4(),
          text: 'Created user accounts for 50+ clients per week, and assisted them with setting up and customizing their accounts'
        },
        {
          id: uuidv4(),
          text: 'Created and updated documentation as needed concerning network, software, and hardware problems'
        }
      ],
      to: 'January 2014'
    }
  ],
  personal: {
    email: 'johnsmith@gmail.com',
    firstName: 'John',
    lastName: 'Smith',
    location: 'Brooklyn, NY',
    occupation: 'Software Developer',
    phoneNumber: '(123) 456-7890',
  },
  skills: [
    {
      id: uuidv4(),
      skill: 'Python (Django)'
    },
    {
      id: uuidv4(),
      skill: 'SQL (PostgreSQL, MySQL)'
    },
    {
      id: uuidv4(),
      skill: 'Cloud (GCP, AWS)'
    },
    {
      id: uuidv4(),
      skill: 'Javascript (ES6, React, Redux, Node.js)'
    },
    {
      id: uuidv4(),
      skill: 'Typescript'
    },
    {
      id: uuidv4(),
      skill: 'HTML/CSS'
    },
    {
      id: uuidv4(),
      skill: 'CI/CD'
    }
  ]
}