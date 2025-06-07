'use client';

import { Calendar, Clock, User, Eye } from 'lucide-react';

interface Webinar {
  id: number;
  title: string;
  speaker: string;
  date: string;
  time: string;
  duration: string;
  description: string;
  category: string;
}

export default function Webinars() {
  // Mock data for webinars
  const webinars: Webinar[] = [
    {
      id: 1,
      title: "Newborn Care Essentials: First Month Fundamentals",
      speaker: "Dr. Sumitra Meena",
      date: "March 15, 2024",
      time: "2:00 PM IST",
      duration: "60 mins",
      description: "Learn essential newborn care practices, feeding schedules, and safety tips for your baby's first month.",
      category: "Newborn Care"
    },
    {
      id: 2,
      title: "Managing Sleep Patterns in Infants",
      speaker: "Dr. Rajesh Kumar",
      date: "March 18, 2024",
      time: "7:00 PM IST",
      duration: "45 mins",
      description: "Understand healthy sleep patterns, address common sleep issues, and create bedtime routines that work.",
      category: "Sleep & Development"
    },
    {
      id: 3,
      title: "Introduction to Solid Foods: When and How to Start",
      speaker: "Dr. Priya Sharma",
      date: "March 22, 2024",
      time: "3:30 PM IST",
      duration: "75 mins",
      description: "Comprehensive guide to introducing solid foods, recognizing readiness signs, and preventing allergies.",
      category: "Nutrition"
    },
    {
      id: 4,
      title: "Common Childhood Illnesses: Prevention and Care",
      speaker: "Dr. Amit Patel",
      date: "March 25, 2024",
      time: "6:00 PM IST",
      duration: "90 mins",
      description: "Identify symptoms, understand when to seek medical help, and learn home care strategies for common illnesses.",
      category: "Health & Wellness"
    },
    {
      id: 5,
      title: "Breastfeeding Success: Overcoming Common Challenges",
      speaker: "Dr. Kavita Singh",
      date: "March 28, 2024",
      time: "11:00 AM IST",
      duration: "60 mins",
      description: "Expert guidance on breastfeeding techniques, addressing latching issues, and maintaining milk supply.",
      category: "Nutrition"
    },
    {
      id: 6,
      title: "Baby's First Year Milestones: What to Expect",
      speaker: "Dr. Neha Gupta",
      date: "April 2, 2024",
      time: "4:00 PM IST",
      duration: "55 mins",
      description: "Track your baby's developmental milestones and understand when to seek professional guidance.",
      category: "Development"
    },
    {
      id: 7,
      title: "Vaccination Schedule and Safety Guidelines",
      speaker: "Dr. Rohit Agarwal",
      date: "April 5, 2024",
      time: "10:00 AM IST",
      duration: "50 mins",
      description: "Complete guide to childhood vaccinations, schedules, and addressing vaccine concerns.",
      category: "Health & Wellness"
    },
    {
      id: 8,
      title: "Toddler Tantrums: Understanding and Managing Behavior",
      speaker: "Dr. Meera Joshi",
      date: "April 8, 2024",
      time: "5:30 PM IST",
      duration: "65 mins",
      description: "Learn effective strategies to handle toddler tantrums and promote positive behavior.",
      category: "Behavioral Health"
    },
    {
      id: 9,
      title: "Creating Safe Sleep Environments for Infants",
      speaker: "Dr. Arjun Reddy",
      date: "April 12, 2024",
      time: "8:00 PM IST",
      duration: "40 mins",
      description: "Essential safety guidelines for infant sleep, SIDS prevention, and creating optimal sleep spaces.",
      category: "Safety"
    },
    {
      id: 10,
      title: "Postpartum Mental Health: Supporting New Mothers",
      speaker: "Dr. Shalini Verma",
      date: "April 15, 2024",
      time: "1:00 PM IST",
      duration: "70 mins",
      description: "Recognize signs of postpartum depression, anxiety, and learn coping strategies for new mothers.",
      category: "Mental Health"
    },
    {
      id: 11,
      title: "Baby-Led Weaning: A Natural Approach to Feeding",
      speaker: "Dr. Ravi Malhotra",
      date: "April 18, 2024",
      time: "3:00 PM IST",
      duration: "55 mins",
      description: "Explore baby-led weaning techniques, safety considerations, and nutritional benefits.",
      category: "Nutrition"
    },
    {
      id: 12,
      title: "Screen Time Guidelines for Young Children",
      speaker: "Dr. Pooja Nair",
      date: "April 22, 2024",
      time: "6:30 PM IST",
      duration: "45 mins",
      description: "Age-appropriate screen time recommendations and creating healthy digital habits early.",
      category: "Development"
    },
    {
      id: 13,
      title: "Emergency First Aid for Infants and Toddlers",
      speaker: "Dr. Vikram Choudhary",
      date: "April 25, 2024",
      time: "9:00 AM IST",
      duration: "80 mins",
      description: "Essential first aid skills every parent should know, including CPR and choking response.",
      category: "Safety"
    },
    {
      id: 14,
      title: "Building Strong Parent-Child Bonds from Birth",
      speaker: "Dr. Anita Desai",
      date: "April 28, 2024",
      time: "2:30 PM IST",
      duration: "60 mins",
      description: "Learn attachment theory, bonding activities, and creating secure relationships with your child.",
      category: "Bonding & Attachment"
    },
    {
      id: 15,
      title: "Preparing Siblings for a New Baby",
      speaker: "Dr. Kiran Patel",
      date: "May 2, 2024",
      time: "4:30 PM IST",
      duration: "50 mins",
      description: "Strategies to help older children adjust to a new sibling and reduce jealousy and behavioral issues.",
      category: "Family Dynamics"
    }
  ];

  const handleViewDetails = (webinarId: number) => {
    console.log(`Viewing details for webinar ID: ${webinarId}`);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Newborn Care': 'bg-pink-100 text-pink-800',
      'Sleep & Development': 'bg-purple-100 text-purple-800',
      'Nutrition': 'bg-green-100 text-green-800',
      'Health & Wellness': 'bg-blue-100 text-blue-800',
      'Development': 'bg-yellow-100 text-yellow-800',
      'Behavioral Health': 'bg-orange-100 text-orange-800',
      'Safety': 'bg-red-100 text-red-800',
      'Mental Health': 'bg-indigo-100 text-indigo-800',
      'Bonding & Attachment': 'bg-teal-100 text-teal-800',
      'Family Dynamics': 'bg-cyan-100 text-cyan-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Upcoming Live Webinars
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Join our expert pediatricians and child care specialists for interactive sessions 
          designed to support you on your parenting journey.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {webinars.map((webinar) => (
          <div
            key={webinar.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(webinar.category)}`}>
                  {webinar.category}
                </span>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{webinar.date}</p>
                  <p className="text-sm text-gray-500">{webinar.time}</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {webinar.title}
              </h3>

              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span className="font-medium">{webinar.speaker}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{webinar.duration}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {webinar.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>Live Session</span>
                </div>
                <button
                  onClick={() => handleViewDetails(webinar.id)}
                  className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <Eye className="h-4 w-4" />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Can&apos;t find what you&apos;re looking for?
          </h3>
          <p className="text-gray-600 mb-4">
            Our experts cover a wide range of topics. Contact us to suggest future webinar topics.
          </p>
          <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
            Request a Topic
          </button>
        </div>
      </div>
    </div>
  );
}