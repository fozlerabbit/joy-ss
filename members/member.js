/* ========================================
   FILE: member.js
   ScriptySphere Member Directory JavaScript
   ======================================== */

// ========== BANGLADESH DIVISIONS & DISTRICTS ==========
const divisionsData = {
  "Dhaka": {
    icon: "🏛️",
    districts: ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Jamalpur", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Mymensingh", "Narayanganj", "Narsingdi", "Netrokona", "Rajbari", "Shariatpur", "Sherpur", "Tangail"]
  },
  "Chattogram": {
    icon: "🌊",
    districts: ["Bandarban", "Brahmanbaria", "Chandpur", "Chattogram", "Cumilla", "Cox's Bazar", "Feni", "Khagrachari", "Lakshmipur", "Noakhali", "Rangamati"]
  },
  "Rajshahi": {
    icon: "🌾",
    districts: ["Bogura", "Joypurhat", "Naogaon", "Natore", "Nawabganj", "Pabna", "Rajshahi", "Sirajganj"]
  },
  "Khulna": {
    icon: "🐅",
    districts: ["Bagerhat", "Chuadanga", "Jessore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"]
  },
  "Barishal": {
    icon: "⛵",
    districts: ["Barguna", "Barishal", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur"]
  },
  "Sylhet": {
    icon: "☕",
    districts: ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"]
  },
  "Rangpur": {
    icon: "🌾",
    districts: ["Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon"]
  },
  "Mymensingh": {
    icon: "🎓",
    districts: ["Jamalpur", "Mymensingh", "Netrokona", "Sherpur"]
  }
};

// ========== SAMPLE MEMBERS DATA ==========
const membersData = [
 
  {
    "id": 201907,
    "name": "Tangem Talukder Joy",
    "role": "Asst. Community Engagement and Awareness Officer",
    "division": "Mymensingh",
    "district": "Mymensingh",
    "photo": "joy.jpeg",
    "skills": [
      "Leadership",
      "Technology",
      "Innovation"
    ],
    "email": "tangem.joy@scriptysphere.com",
    "phone": "+880 1595-306172",
    "joinedDate": "2020-01-15",
    "bio": "I always try to do my best."
  },
  {
    "id": 2,
    "name": "Raiyan",
    "role": "Member",
    "division": "Dhaka",
    "district": "Gazipur",
    "photo": "https://ui-avatars.com/api/?name=Afsana+Rahman&background=06B6D4&color=fff&size=200",
    "skills": [
      "Video Editing",
      "Event Management",
      "Coordination"
    ],
    "email": "raiyan@scriptysphere.com",
    "phone": "+880 1741-585329",
    "joinedDate": "2025-11-19",
    "bio": "Leading volunteer programmes and community engagement initiatives."
  },
  {
    "id": 3,
    "name": "Tanvir Ahmed",
    "role": "Programme Coordinator",
    "division": "Chattogram",
    "district": "Chattogram",
    "photo": "https://ui-avatars.com/api/?name=Tanvir+Ahmed&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Project Management",
      "Coding",
      "Training"
    ],
    "email": "tanvir@scriptysphere.org",
    "phone": "+880 1800-234567",
    "joinedDate": "2020-06-10",
    "bio": "Coordinating educational programmes and skill development workshops."
  },
  {
    "id": 4,
    "name": "Nusrat Jahan",
    "role": "Community Manager",
    "division": "Dhaka",
    "district": "Gazipur",
    "photo": "https://ui-avatars.com/api/?name=Nusrat+Jahan&background=10B981&color=fff&size=200",
    "skills": [
      "Social Media",
      "Content Creation",
      "Communication"
    ],
    "email": "nusrat@scriptysphere.org",
    "phone": "+880 1900-345678",
    "joinedDate": "2020-08-05",
    "bio": "Managing online community and creating engaging content."
  },
  {
    "id": 5,
    "name": "Rakib Hasan",
    "role": "Tech Lead",
    "division": "Sylhet",
    "district": "Sylhet",
    "photo": "https://ui-avatars.com/api/?name=Rakib+Hasan&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Web Development",
      "Python",
      "AI/ML"
    ],
    "email": "rakib@scriptysphere.org",
    "phone": "+880 1600-456789",
    "joinedDate": "2021-01-12",
    "bio": "Leading technical projects and mentoring aspiring developers."
  },
  {
    "id": 6,
    "name": "Sadia Sultana",
    "role": "Content Writer",
    "division": "Rajshahi",
    "district": "Rajshahi",
    "photo": "https://ui-avatars.com/api/?name=Sadia+Sultana&background=06B6D4&color=fff&size=200",
    "skills": [
      "Writing",
      "Blogging",
      "Research"
    ],
    "email": "sadia@scriptysphere.org",
    "phone": "+880 1700-567890",
    "joinedDate": "2021-03-18",
    "bio": "Creating impactful content and documenting our journey."
  },
  {
    "id": 7,
    "name": "Fahim Rahman",
    "role": "Mentor",
    "division": "Khulna",
    "district": "Khulna",
    "photo": "https://ui-avatars.com/api/?name=Fahim+Rahman&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Mentorship",
      "Career Guidance",
      "Public Speaking"
    ],
    "email": "fahim@scriptysphere.org",
    "phone": "+880 1800-678901",
    "joinedDate": "2021-05-22",
    "bio": "Mentoring youth and guiding them towards successful careers."
  },
  {
    "id": 8,
    "name": "Tukush Rahman Gattu",
    "role": "Special Member",
    "division": "Dhaka",
    "district": "Dhaka",
    "photo": "meow.jpeg",
    "skills": [
      "Eating",
      "Sleeping",
      "Meowing"
    ],
    "email": "meow@scriptysphere.org",
    "phone": "+880 1XXX-XXXXXX",
    "joinedDate": "2025-10-14",
    "bio": "Facilitating hands-on workshops and skill-building sessions."
  },
  {
    "id": 1000,
    "name": "Champa Basu",
    "role": "Admin",
    "division": "Mymensingh",
    "district": "Kishoreganj",
    "photo": "https://ui-avatars.com/api/?name=Champa+Basu&background=06B6D4&color=fff&size=200",
    "skills": [
      "Web Development",
      "Logistics",
      "Project Management"
    ],
    "email": "champa.basu299@scriptysphere.org",
    "phone": "+880 1636402814",
    "joinedDate": "2023-03-11",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1001,
    "name": "Abir Hossain",
    "role": "Research Assistant",
    "division": "Rangpur",
    "district": "Rangpur",
    "photo": "https://ui-avatars.com/api/?name=Abir+Hossain&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Coordination",
      "Community Building",
      "Research"
    ],
    "email": "abir.hossain173@scriptysphere.org",
    "phone": "+880 1660674612",
    "joinedDate": "2019-08-29",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1002,
    "name": "Tania Rashid",
    "role": "Admin",
    "division": "Chattogram",
    "district": "Comilla",
    "photo": "https://ui-avatars.com/api/?name=Tania+Rashid&background=06B6D4&color=fff&size=200",
    "skills": [
      "Leadership",
      "Content Creation",
      "Social Media"
    ],
    "email": "tania.rashid352@scriptysphere.org",
    "phone": "+880 1625564792",
    "joinedDate": "2019-11-04",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1003,
    "name": "Mithun Biswas",
    "role": "Volunteer",
    "division": "Chattogram",
    "district": "Comilla",
    "photo": "https://ui-avatars.com/api/?name=Mithun+Biswas&background=06B6D4&color=fff&size=200",
    "skills": [
      "Design",
      "Content Creation",
      "Communication"
    ],
    "email": "mithun.biswas410@scriptysphere.org",
    "phone": "+880 1853301673",
    "joinedDate": "2024-08-03",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1004,
    "name": "Arif Mia",
    "role": "Finance Officer",
    "division": "Rangpur",
    "district": "Lalmonirhat",
    "photo": "https://ui-avatars.com/api/?name=Arif+Mia&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Photography",
      "AI/ML",
      "Leadership"
    ],
    "email": "arif.mia293@scriptysphere.org",
    "phone": "+880 1963773351",
    "joinedDate": "2021-07-17",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1005,
    "name": "Esha Rashid",
    "role": "Volunteer",
    "division": "Sylhet",
    "district": "Sunamganj",
    "photo": "https://ui-avatars.com/api/?name=Esha+Rashid&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Data Analysis",
      "Event Management",
      "Research"
    ],
    "email": "esha.rashid649@scriptysphere.org",
    "phone": "+880 1993328944",
    "joinedDate": "2021-05-31",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1006,
    "name": "Sabbir Biswas",
    "role": "Volunteer",
    "division": "Mymensingh",
    "district": "Netrokona",
    "photo": "https://ui-avatars.com/api/?name=Sabbir+Biswas&background=10B981&color=fff&size=200",
    "skills": [
      "Coordination",
      "Monitoring",
      "Photography"
    ],
    "email": "sabbir.biswas686@scriptysphere.org",
    "phone": "+880 1993314113",
    "joinedDate": "2022-03-24",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1007,
    "name": "Wahid Sarker",
    "role": "Data Officer",
    "division": "Rajshahi",
    "district": "Naogaon",
    "photo": "https://ui-avatars.com/api/?name=Wahid+Sarker&background=F59E0B&color=fff&size=200",
    "skills": [
      "Design",
      "Mentorship",
      "Python"
    ],
    "email": "wahid.sarker20@scriptysphere.org",
    "phone": "+880 1624402453",
    "joinedDate": "2019-05-19",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1008,
    "name": "Firoz Biswas",
    "role": "Monitoring Officer",
    "division": "Dhaka",
    "district": "Dhaka",
    "photo": "https://ui-avatars.com/api/?name=Firoz+Biswas&background=06B6D4&color=fff&size=200",
    "skills": [
      "AI/ML",
      "Photography",
      "Coordination"
    ],
    "email": "firoz.biswas433@scriptysphere.org",
    "phone": "+880 1409504294",
    "joinedDate": "2019-12-11",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1009,
    "name": "Champa Shah",
    "role": "Admin",
    "division": "Rajshahi",
    "district": "Pabna",
    "photo": "https://ui-avatars.com/api/?name=Champa+Shah&background=10B981&color=fff&size=200",
    "skills": [
      "Fundraising",
      "Training",
      "Leadership"
    ],
    "email": "champa.shah351@scriptysphere.org",
    "phone": "+880 1337101840",
    "joinedDate": "2018-10-28",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1010,
    "name": "Nabila Akter",
    "role": "Designer",
    "division": "Khulna",
    "district": "Jessore",
    "photo": "https://ui-avatars.com/api/?name=Nabila+Akter&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Community Building",
      "AI/ML",
      "Leadership"
    ],
    "email": "nabila.akter511@scriptysphere.org",
    "phone": "+880 1542282469",
    "joinedDate": "2022-08-02",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1011,
    "name": "Abir Roy",
    "role": "Logistics Officer",
    "division": "Dhaka",
    "district": "Narayanganj",
    "photo": "https://ui-avatars.com/api/?name=Abir+Roy&background=10B981&color=fff&size=200",
    "skills": [
      "Photography",
      "Social Media",
      "Mentorship"
    ],
    "email": "abir.roy369@scriptysphere.org",
    "phone": "+880 1538902941",
    "joinedDate": "2018-01-05",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1012,
    "name": "Hasina Ahmed",
    "role": "Finance Officer",
    "division": "Mymensingh",
    "district": "Sherpur",
    "photo": "https://ui-avatars.com/api/?name=Hasina+Ahmed&background=F59E0B&color=fff&size=200",
    "skills": [
      "Community Building",
      "Photography",
      "Training"
    ],
    "email": "hasina.ahmed557@scriptysphere.org",
    "phone": "+880 1357658778",
    "joinedDate": "2021-10-16",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1013,
    "name": "Parvez Hossain",
    "role": "Designer",
    "division": "Sylhet",
    "district": "Sylhet",
    "photo": "https://ui-avatars.com/api/?name=Parvez+Hossain&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Design",
      "Project Management",
      "Logistics"
    ],
    "email": "parvez.hossain401@scriptysphere.org",
    "phone": "+880 1629057481",
    "joinedDate": "2023-07-11",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1014,
    "name": "Yasir Akter",
    "role": "Admin",
    "division": "Rangpur",
    "district": "Dinajpur",
    "photo": "https://ui-avatars.com/api/?name=Yasir+Akter&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Event Management",
      "Public Speaking",
      "Writing"
    ],
    "email": "yasir.akter104@scriptysphere.org",
    "phone": "+880 1454206122",
    "joinedDate": "2021-02-10",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1015,
    "name": "Celina Khanam",
    "role": "Field Officer",
    "division": "Rajshahi",
    "district": "Pabna",
    "photo": "https://ui-avatars.com/api/?name=Celina+Khanam&background=06B6D4&color=fff&size=200",
    "skills": [
      "Writing",
      "Advocacy",
      "Mentorship"
    ],
    "email": "celina.khanam696@scriptysphere.org",
    "phone": "+880 1625691879",
    "joinedDate": "2024-07-15",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1016,
    "name": "Kamal Chowdhury",
    "role": "Monitoring Officer",
    "division": "Rajshahi",
    "district": "Bogra",
    "photo": "https://ui-avatars.com/api/?name=Kamal+Chowdhury&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Fundraising",
      "Writing",
      "Event Management"
    ],
    "email": "kamal.chowdhury822@scriptysphere.org",
    "phone": "+880 1759998701",
    "joinedDate": "2022-07-05",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1017,
    "name": "Nabila Hossain",
    "role": "Monitoring Officer",
    "division": "Dhaka",
    "district": "Narayanganj",
    "photo": "https://ui-avatars.com/api/?name=Nabila+Hossain&background=F59E0B&color=fff&size=200",
    "skills": [
      "Photography",
      "Logistics",
      "Mentorship"
    ],
    "email": "nabila.hossain279@scriptysphere.org",
    "phone": "+880 1610430498",
    "joinedDate": "2025-07-26",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1018,
    "name": "Tania Hossain",
    "role": "Admin",
    "division": "Sylhet",
    "district": "Moulvibazar",
    "photo": "https://ui-avatars.com/api/?name=Tania+Hossain&background=F59E0B&color=fff&size=200",
    "skills": [
      "Fundraising",
      "Public Speaking",
      "Photography"
    ],
    "email": "tania.hossain621@scriptysphere.org",
    "phone": "+880 1747927765",
    "joinedDate": "2023-10-28",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1019,
    "name": "Usman Khanam",
    "role": "Volunteer",
    "division": "Mymensingh",
    "district": "Kishoreganj",
    "photo": "https://ui-avatars.com/api/?name=Usman+Khanam&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Public Speaking",
      "Data Analysis",
      "Writing"
    ],
    "email": "usman.khanam358@scriptysphere.org",
    "phone": "+880 1517130055",
    "joinedDate": "2020-04-08",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1020,
    "name": "Vishal Bhuiyan",
    "role": "Volunteer",
    "division": "Chattogram",
    "district": "Comilla",
    "photo": "https://ui-avatars.com/api/?name=Vishal+Bhuiyan&background=10B981&color=fff&size=200",
    "skills": [
      "Advocacy",
      "Web Development",
      "Design"
    ],
    "email": "vishal.bhuiyan398@scriptysphere.org",
    "phone": "+880 1683951594",
    "joinedDate": "2019-07-29",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1021,
    "name": "Farhana Ahmed",
    "role": "Volunteer",
    "division": "Sylhet",
    "district": "Habiganj",
    "photo": "https://ui-avatars.com/api/?name=Farhana+Ahmed&background=06B6D4&color=fff&size=200",
    "skills": [
      "Advocacy",
      "Social Media",
      "Web Development"
    ],
    "email": "farhana.ahmed107@scriptysphere.org",
    "phone": "+880 1600612650",
    "joinedDate": "2019-10-11",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1022,
    "name": "Esha Khan",
    "role": "Field Officer",
    "division": "Khulna",
    "district": "Satkhira",
    "photo": "https://ui-avatars.com/api/?name=Esha+Khan&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Leadership",
      "Photography",
      "Mentorship"
    ],
    "email": "esha.khan101@scriptysphere.org",
    "phone": "+880 1370047679",
    "joinedDate": "2021-09-28",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1023,
    "name": "Tania Biswas",
    "role": "Finance Officer",
    "division": "Khulna",
    "district": "Khulna",
    "photo": "https://ui-avatars.com/api/?name=Tania+Biswas&background=F59E0B&color=fff&size=200",
    "skills": [
      "Mentorship",
      "Leadership",
      "Social Media"
    ],
    "email": "tania.biswas221@scriptysphere.org",
    "phone": "+880 1382661873",
    "joinedDate": "2019-08-30",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1024,
    "name": "Dipu Akter",
    "role": "Outreach Officer",
    "division": "Barishal",
    "district": "Barguna",
    "photo": "https://ui-avatars.com/api/?name=Dipu+Akter&background=10B981&color=fff&size=200",
    "skills": [
      "Project Management",
      "Social Media",
      "Training"
    ],
    "email": "dipu.akter749@scriptysphere.org",
    "phone": "+880 1481900163",
    "joinedDate": "2019-03-26",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1025,
    "name": "Rima Khan",
    "role": "Coordinator",
    "division": "Rajshahi",
    "district": "Bogra",
    "photo": "https://ui-avatars.com/api/?name=Rima+Khan&background=06B6D4&color=fff&size=200",
    "skills": [
      "Training",
      "Advocacy",
      "Data Analysis"
    ],
    "email": "rima.khan613@scriptysphere.org",
    "phone": "+880 1768621290",
    "joinedDate": "2024-11-01",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1026,
    "name": "Abir Mia",
    "role": "Volunteer",
    "division": "Mymensingh",
    "district": "Kishoreganj",
    "photo": "https://ui-avatars.com/api/?name=Abir+Mia&background=F59E0B&color=fff&size=200",
    "skills": [
      "Research",
      "Photography",
      "Coordination"
    ],
    "email": "abir.mia628@scriptysphere.org",
    "phone": "+880 1499968210",
    "joinedDate": "2018-09-05",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1027,
    "name": "Gulshan Sultana",
    "role": "Research Assistant",
    "division": "Chattogram",
    "district": "Feni",
    "photo": "https://ui-avatars.com/api/?name=Gulshan+Sultana&background=F59E0B&color=fff&size=200",
    "skills": [
      "Advocacy",
      "Public Speaking",
      "AI/ML"
    ],
    "email": "gulshan.sultana56@scriptysphere.org",
    "phone": "+880 1743214481",
    "joinedDate": "2019-06-01",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1028,
    "name": "Celina Mia",
    "role": "Media Lead",
    "division": "Rajshahi",
    "district": "Naogaon",
    "photo": "https://ui-avatars.com/api/?name=Celina+Mia&background=F59E0B&color=fff&size=200",
    "skills": [
      "Writing",
      "Leadership",
      "Design"
    ],
    "email": "celina.mia954@scriptysphere.org",
    "phone": "+880 1451517636",
    "joinedDate": "2020-06-07",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1029,
    "name": "Esha Rahman",
    "role": "Designer",
    "division": "Mymensingh",
    "district": "Kishoreganj",
    "photo": "https://ui-avatars.com/api/?name=Esha+Rahman&background=F59E0B&color=fff&size=200",
    "skills": [
      "Monitoring",
      "Communication",
      "AI/ML"
    ],
    "email": "esha.rahman538@scriptysphere.org",
    "phone": "+880 1546479315",
    "joinedDate": "2022-11-08",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1030,
    "name": "Champa Ahmed",
    "role": "Coordinator",
    "division": "Rajshahi",
    "district": "Pabna",
    "photo": "https://ui-avatars.com/api/?name=Champa+Ahmed&background=F59E0B&color=fff&size=200",
    "skills": [
      "Communication",
      "Monitoring",
      "Logistics"
    ],
    "email": "champa.ahmed262@scriptysphere.org",
    "phone": "+880 1910948761",
    "joinedDate": "2020-08-22",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1031,
    "name": "Rima Hasan",
    "role": "Trainer",
    "division": "Khulna",
    "district": "Khulna",
    "photo": "https://ui-avatars.com/api/?name=Rima+Hasan&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Photography",
      "Advocacy",
      "Writing"
    ],
    "email": "rima.hasan8@scriptysphere.org",
    "phone": "+880 1872601339",
    "joinedDate": "2020-09-16",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1032,
    "name": "Zarin Khanam",
    "role": "Logistics Officer",
    "division": "Rajshahi",
    "district": "Naogaon",
    "photo": "https://ui-avatars.com/api/?name=Zarin+Khanam&background=10B981&color=fff&size=200",
    "skills": [
      "Social Media",
      "Content Creation",
      "Project Management"
    ],
    "email": "zarin.khanam965@scriptysphere.org",
    "phone": "+880 1326298154",
    "joinedDate": "2021-07-03",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1033,
    "name": "Bappy Ahmed",
    "role": "Media Lead",
    "division": "Rangpur",
    "district": "Lalmonirhat",
    "photo": "https://ui-avatars.com/api/?name=Bappy+Ahmed&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Project Management",
      "Communication",
      "Research"
    ],
    "email": "bappy.ahmed23@scriptysphere.org",
    "phone": "+880 1578234022",
    "joinedDate": "2022-02-16",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1034,
    "name": "Ehsan Rashid",
    "role": "Data Officer",
    "division": "Mymensingh",
    "district": "Sherpur",
    "photo": "https://ui-avatars.com/api/?name=Ehsan+Rashid&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Writing",
      "Social Media",
      "Design"
    ],
    "email": "ehsan.rashid15@scriptysphere.org",
    "phone": "+880 1877863321",
    "joinedDate": "2023-04-20",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1035,
    "name": "Ehsan Ahmed",
    "role": "Research Assistant",
    "division": "Mymensingh",
    "district": "Sherpur",
    "photo": "https://ui-avatars.com/api/?name=Ehsan+Ahmed&background=F59E0B&color=fff&size=200",
    "skills": [
      "Communication",
      "Design",
      "Leadership"
    ],
    "email": "ehsan.ahmed479@scriptysphere.org",
    "phone": "+880 1833198584",
    "joinedDate": "2022-04-23",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1036,
    "name": "Ehsan Sultana",
    "role": "Admin",
    "division": "Rangpur",
    "district": "Lalmonirhat",
    "photo": "https://ui-avatars.com/api/?name=Ehsan+Sultana&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Writing",
      "Content Creation",
      "Communication"
    ],
    "email": "ehsan.sultana985@scriptysphere.org",
    "phone": "+880 1643649221",
    "joinedDate": "2021-07-23",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1037,
    "name": "Abir Hossain",
    "role": "Research Assistant",
    "division": "Khulna",
    "district": "Bagerhat",
    "photo": "https://ui-avatars.com/api/?name=Abir+Hossain&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Coding",
      "Advocacy",
      "Social Media"
    ],
    "email": "abir.hossain513@scriptysphere.org",
    "phone": "+880 1958533889",
    "joinedDate": "2021-07-13",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1038,
    "name": "Dihan Mia",
    "role": "Field Officer",
    "division": "Rajshahi",
    "district": "Pabna",
    "photo": "https://ui-avatars.com/api/?name=Dihan+Mia&background=06B6D4&color=fff&size=200",
    "skills": [
      "Content Creation",
      "Communication",
      "Community Building"
    ],
    "email": "dihan.mia142@scriptysphere.org",
    "phone": "+880 1986232958",
    "joinedDate": "2025-08-31",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1039,
    "name": "Jannat Hossain",
    "role": "Research Assistant",
    "division": "Sylhet",
    "district": "Moulvibazar",
    "photo": "https://ui-avatars.com/api/?name=Jannat+Hossain&background=06B6D4&color=fff&size=200",
    "skills": [
      "Logistics",
      "Coding",
      "Community Building"
    ],
    "email": "jannat.hossain643@scriptysphere.org",
    "phone": "+880 1841525870",
    "joinedDate": "2018-03-30",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1040,
    "name": "Nabila Biswas",
    "role": "Logistics Officer",
    "division": "Mymensingh",
    "district": "Kishoreganj",
    "photo": "https://ui-avatars.com/api/?name=Nabila+Biswas&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Mentorship",
      "Advocacy",
      "Python"
    ],
    "email": "nabila.biswas281@scriptysphere.org",
    "phone": "+880 1530382945",
    "joinedDate": "2020-08-22",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1041,
    "name": "Rima Hossain",
    "role": "Volunteer",
    "division": "Rajshahi",
    "district": "Naogaon",
    "photo": "https://ui-avatars.com/api/?name=Rima+Hossain&background=06B6D4&color=fff&size=200",
    "skills": [
      "Web Development",
      "Content Creation",
      "Leadership"
    ],
    "email": "rima.hossain975@scriptysphere.org",
    "phone": "+880 1772746986",
    "joinedDate": "2019-09-13",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1042,
    "name": "Abir Shah",
    "role": "Coordinator",
    "division": "Barishal",
    "district": "Barishal",
    "photo": "https://ui-avatars.com/api/?name=Abir+Shah&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Public Speaking",
      "Mentorship",
      "Coding"
    ],
    "email": "abir.shah314@scriptysphere.org",
    "phone": "+880 1338276571",
    "joinedDate": "2024-02-15",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1043,
    "name": "Esha Biswas",
    "role": "Finance Officer",
    "division": "Dhaka",
    "district": "Narayanganj",
    "photo": "https://ui-avatars.com/api/?name=Esha+Biswas&background=10B981&color=fff&size=200",
    "skills": [
      "Writing",
      "Content Creation",
      "Coordination"
    ],
    "email": "esha.biswas645@scriptysphere.org",
    "phone": "+880 1901187936",
    "joinedDate": "2018-07-24",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1044,
    "name": "Dihan Rahman",
    "role": "Logistics Officer",
    "division": "Chattogram",
    "district": "Chattogram",
    "photo": "https://ui-avatars.com/api/?name=Dihan+Rahman&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Mentorship",
      "Design",
      "Coding"
    ],
    "email": "dihan.rahman735@scriptysphere.org",
    "phone": "+880 1731291220",
    "joinedDate": "2022-10-27",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1045,
    "name": "Rima Khan",
    "role": "Volunteer",
    "division": "Rangpur",
    "district": "Rangpur",
    "photo": "https://ui-avatars.com/api/?name=Rima+Khan&background=06B6D4&color=fff&size=200",
    "skills": [
      "AI/ML",
      "Monitoring",
      "Web Development"
    ],
    "email": "rima.khan289@scriptysphere.org",
    "phone": "+880 1771838608",
    "joinedDate": "2022-08-29",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1046,
    "name": "Tania Sarker",
    "role": "Logistics Officer",
    "division": "Barishal",
    "district": "Barishal",
    "photo": "https://ui-avatars.com/api/?name=Tania+Sarker&background=F59E0B&color=fff&size=200",
    "skills": [
      "Public Speaking",
      "Web Development",
      "Community Building"
    ],
    "email": "tania.sarker575@scriptysphere.org",
    "phone": "+880 1584977364",
    "joinedDate": "2023-04-25",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1047,
    "name": "Dihan Hossain",
    "role": "Outreach Officer",
    "division": "Chattogram",
    "district": "Feni",
    "photo": "https://ui-avatars.com/api/?name=Dihan+Hossain&background=06B6D4&color=fff&size=200",
    "skills": [
      "Communication",
      "Coding",
      "Training"
    ],
    "email": "dihan.hossain98@scriptysphere.org",
    "phone": "+880 1852911121",
    "joinedDate": "2023-07-28",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1048,
    "name": "Esha Islam",
    "role": "Field Officer",
    "division": "Rajshahi",
    "district": "Rajshahi",
    "photo": "https://ui-avatars.com/api/?name=Esha+Islam&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Coordination",
      "Web Development",
      "Writing"
    ],
    "email": "esha.islam3@scriptysphere.org",
    "phone": "+880 1334429648",
    "joinedDate": "2019-05-06",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1049,
    "name": "Lima Basu",
    "role": "Research Assistant",
    "division": "Mymensingh",
    "district": "Netrokona",
    "photo": "https://ui-avatars.com/api/?name=Lima+Basu&background=06B6D4&color=fff&size=200",
    "skills": [
      "Training",
      "Python",
      "Photography"
    ],
    "email": "lima.basu29@scriptysphere.org",
    "phone": "+880 1482052491",
    "joinedDate": "2021-11-11",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1050,
    "name": "Vishal Islam",
    "role": "Outreach Officer",
    "division": "Dhaka",
    "district": "Dhaka",
    "photo": "https://ui-avatars.com/api/?name=Vishal+Islam&background=10B981&color=fff&size=200",
    "skills": [
      "Logistics",
      "Communication",
      "Monitoring"
    ],
    "email": "vishal.islam497@scriptysphere.org",
    "phone": "+880 1556962292",
    "joinedDate": "2023-01-20",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1051,
    "name": "Yasir Rashid",
    "role": "Coordinator",
    "division": "Chattogram",
    "district": "Feni",
    "photo": "https://ui-avatars.com/api/?name=Yasir+Rashid&background=10B981&color=fff&size=200",
    "skills": [
      "Writing",
      "Web Development",
      "Training"
    ],
    "email": "yasir.rashid449@scriptysphere.org",
    "phone": "+880 1425488744",
    "joinedDate": "2021-10-25",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1052,
    "name": "Sabbir Sultana",
    "role": "Volunteer",
    "division": "Dhaka",
    "district": "Narayanganj",
    "photo": "https://ui-avatars.com/api/?name=Sabbir+Sultana&background=10B981&color=fff&size=200",
    "skills": [
      "Project Management",
      "Content Creation",
      "Fundraising"
    ],
    "email": "sabbir.sultana852@scriptysphere.org",
    "phone": "+880 1994163612",
    "joinedDate": "2023-01-25",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1053,
    "name": "Dihan Roy",
    "role": "Volunteer",
    "division": "Khulna",
    "district": "Satkhira",
    "photo": "https://ui-avatars.com/api/?name=Dihan+Roy&background=8B5CF6&color=fff&size=200",
    "skills": [
      "AI/ML",
      "Photography",
      "Communication"
    ],
    "email": "dihan.roy8@scriptysphere.org",
    "phone": "+880 1791378829",
    "joinedDate": "2022-05-07",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1054,
    "name": "Abir Bhuiyan",
    "role": "Finance Officer",
    "division": "Mymensingh",
    "district": "Mymensingh",
    "photo": "https://ui-avatars.com/api/?name=Abir+Bhuiyan&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Coding",
      "Writing",
      "Coordination"
    ],
    "email": "abir.bhuiyan542@scriptysphere.org",
    "phone": "+880 1727582446",
    "joinedDate": "2023-09-05",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1055,
    "name": "Bappy Khanam",
    "role": "Designer",
    "division": "Rangpur",
    "district": "Dinajpur",
    "photo": "https://ui-avatars.com/api/?name=Bappy+Khanam&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Social Media",
      "Web Development",
      "AI/ML"
    ],
    "email": "bappy.khanam631@scriptysphere.org",
    "phone": "+880 1510902871",
    "joinedDate": "2025-06-13",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1056,
    "name": "Imran Hasan",
    "role": "Field Officer",
    "division": "Rajshahi",
    "district": "Pabna",
    "photo": "https://ui-avatars.com/api/?name=Imran+Hasan&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Coding",
      "Photography",
      "Writing"
    ],
    "email": "imran.hasan363@scriptysphere.org",
    "phone": "+880 1908991040",
    "joinedDate": "2025-06-25",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1057,
    "name": "Tania Ahmed",
    "role": "Data Officer",
    "division": "Dhaka",
    "district": "Gazipur",
    "photo": "https://ui-avatars.com/api/?name=Tania+Ahmed&background=06B6D4&color=fff&size=200",
    "skills": [
      "Community Building",
      "Event Management",
      "Fundraising"
    ],
    "email": "tania.ahmed464@scriptysphere.org",
    "phone": "+880 1402850963",
    "joinedDate": "2019-06-23",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1058,
    "name": "Gulshan Chowdhury",
    "role": "Admin",
    "division": "Rangpur",
    "district": "Rangpur",
    "photo": "https://ui-avatars.com/api/?name=Gulshan+Chowdhury&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Coordination",
      "Training",
      "Photography"
    ],
    "email": "gulshan.chowdhury933@scriptysphere.org",
    "phone": "+880 1332765198",
    "joinedDate": "2024-12-23",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1059,
    "name": "Parvez Basu",
    "role": "Monitoring Officer",
    "division": "Rangpur",
    "district": "Lalmonirhat",
    "photo": "https://ui-avatars.com/api/?name=Parvez+Basu&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Project Management",
      "Python",
      "Community Building"
    ],
    "email": "parvez.basu400@scriptysphere.org",
    "phone": "+880 1876709881",
    "joinedDate": "2022-12-08",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1060,
    "name": "Lima Roy",
    "role": "Finance Officer",
    "division": "Dhaka",
    "district": "Gazipur",
    "photo": "https://ui-avatars.com/api/?name=Lima+Roy&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Photography",
      "Monitoring",
      "Project Management"
    ],
    "email": "lima.roy327@scriptysphere.org",
    "phone": "+880 1310170931",
    "joinedDate": "2018-03-06",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1061,
    "name": "Jannat Khanam",
    "role": "Finance Officer",
    "division": "Rajshahi",
    "district": "Bogra",
    "photo": "https://ui-avatars.com/api/?name=Jannat+Khanam&background=06B6D4&color=fff&size=200",
    "skills": [
      "Photography",
      "Leadership",
      "Public Speaking"
    ],
    "email": "jannat.khanam852@scriptysphere.org",
    "phone": "+880 1356846051",
    "joinedDate": "2022-11-28",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1062,
    "name": "Lima Khanam",
    "role": "Monitoring Officer",
    "division": "Rajshahi",
    "district": "Pabna",
    "photo": "https://ui-avatars.com/api/?name=Lima+Khanam&background=06B6D4&color=fff&size=200",
    "skills": [
      "Community Building",
      "Public Speaking",
      "AI/ML"
    ],
    "email": "lima.khanam584@scriptysphere.org",
    "phone": "+880 1916238762",
    "joinedDate": "2021-01-10",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1063,
    "name": "Wahid Hasan",
    "role": "Finance Officer",
    "division": "Chattogram",
    "district": "Cox's Bazar",
    "photo": "https://ui-avatars.com/api/?name=Wahid+Hasan&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Leadership",
      "Writing",
      "Logistics"
    ],
    "email": "wahid.hasan265@scriptysphere.org",
    "phone": "+880 1830349061",
    "joinedDate": "2022-03-18",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1064,
    "name": "Lima Rashid",
    "role": "Media Lead",
    "division": "Sylhet",
    "district": "Sylhet",
    "photo": "https://ui-avatars.com/api/?name=Lima+Rashid&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Training",
      "Monitoring",
      "Writing"
    ],
    "email": "lima.rashid249@scriptysphere.org",
    "phone": "+880 1769052299",
    "joinedDate": "2019-10-13",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1065,
    "name": "Farhana Khanam",
    "role": "Coordinator",
    "division": "Sylhet",
    "district": "Habiganj",
    "photo": "https://ui-avatars.com/api/?name=Farhana+Khanam&background=F59E0B&color=fff&size=200",
    "skills": [
      "Data Analysis",
      "Social Media",
      "Design"
    ],
    "email": "farhana.khanam294@scriptysphere.org",
    "phone": "+880 1647433127",
    "joinedDate": "2020-03-08",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1066,
    "name": "Wahid Sultana",
    "role": "Trainer",
    "division": "Rajshahi",
    "district": "Bogra",
    "photo": "https://ui-avatars.com/api/?name=Wahid+Sultana&background=10B981&color=fff&size=200",
    "skills": [
      "Community Building",
      "Data Analysis",
      "Mentorship"
    ],
    "email": "wahid.sultana201@scriptysphere.org",
    "phone": "+880 1920467246",
    "joinedDate": "2025-06-29",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1067,
    "name": "Parvez Chowdhury",
    "role": "Designer",
    "division": "Rangpur",
    "district": "Thakurgaon",
    "photo": "https://ui-avatars.com/api/?name=Parvez+Chowdhury&background=F59E0B&color=fff&size=200",
    "skills": [
      "Writing",
      "AI/ML",
      "Mentorship"
    ],
    "email": "parvez.chowdhury427@scriptysphere.org",
    "phone": "+880 1735561407",
    "joinedDate": "2018-01-15",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1068,
    "name": "Tania Sultana",
    "role": "Finance Officer",
    "division": "Sylhet",
    "district": "Moulvibazar",
    "photo": "https://ui-avatars.com/api/?name=Tania+Sultana&background=10B981&color=fff&size=200",
    "skills": [
      "Advocacy",
      "Project Management",
      "Leadership"
    ],
    "email": "tania.sultana607@scriptysphere.org",
    "phone": "+880 1622877403",
    "joinedDate": "2024-04-07",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1069,
    "name": "Vishal Mia",
    "role": "Admin",
    "division": "Mymensingh",
    "district": "Netrokona",
    "photo": "https://ui-avatars.com/api/?name=Vishal+Mia&background=0EA5E9&color=fff&size=200",
    "skills": [
      "AI/ML",
      "Data Analysis",
      "Community Building"
    ],
    "email": "vishal.mia842@scriptysphere.org",
    "phone": "+880 1933958652",
    "joinedDate": "2023-12-20",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1070,
    "name": "Lima Hasan",
    "role": "Outreach Officer",
    "division": "Dhaka",
    "district": "Narayanganj",
    "photo": "https://ui-avatars.com/api/?name=Lima+Hasan&background=06B6D4&color=fff&size=200",
    "skills": [
      "Leadership",
      "Photography",
      "Advocacy"
    ],
    "email": "lima.hasan388@scriptysphere.org",
    "phone": "+880 1905486291",
    "joinedDate": "2021-03-28",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1071,
    "name": "Orin Bhuiyan",
    "role": "Coordinator",
    "division": "Mymensingh",
    "district": "Kishoreganj",
    "photo": "https://ui-avatars.com/api/?name=Orin+Bhuiyan&background=06B6D4&color=fff&size=200",
    "skills": [
      "Data Analysis",
      "Web Development",
      "Leadership"
    ],
    "email": "orin.bhuiyan680@scriptysphere.org",
    "phone": "+880 1889063599",
    "joinedDate": "2020-05-09",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1072,
    "name": "Imran Rahman",
    "role": "Finance Officer",
    "division": "Dhaka",
    "district": "Dhaka",
    "photo": "https://ui-avatars.com/api/?name=Imran+Rahman&background=8B5CF6&color=fff&size=200",
    "skills": [
      "AI/ML",
      "Public Speaking",
      "Social Media"
    ],
    "email": "imran.rahman309@scriptysphere.org",
    "phone": "+880 1996046753",
    "joinedDate": "2024-06-20",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1073,
    "name": "Celina Sultana",
    "role": "Media Lead",
    "division": "Sylhet",
    "district": "Sunamganj",
    "photo": "https://ui-avatars.com/api/?name=Celina+Sultana&background=F59E0B&color=fff&size=200",
    "skills": [
      "Photography",
      "Coordination",
      "Social Media"
    ],
    "email": "celina.sultana65@scriptysphere.org",
    "phone": "+880 1921916223",
    "joinedDate": "2024-12-16",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1074,
    "name": "Zarin Roy",
    "role": "Designer",
    "division": "Sylhet",
    "district": "Sunamganj",
    "photo": "https://ui-avatars.com/api/?name=Zarin+Roy&background=06B6D4&color=fff&size=200",
    "skills": [
      "Data Analysis",
      "Writing",
      "Design"
    ],
    "email": "zarin.roy957@scriptysphere.org",
    "phone": "+880 1496292692",
    "joinedDate": "2018-10-21",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1075,
    "name": "Usman Rahman",
    "role": "Finance Officer",
    "division": "Barishal",
    "district": "Patuakhali",
    "photo": "https://ui-avatars.com/api/?name=Usman+Rahman&background=10B981&color=fff&size=200",
    "skills": [
      "Web Development",
      "Coding",
      "Advocacy"
    ],
    "email": "usman.rahman376@scriptysphere.org",
    "phone": "+880 1740670316",
    "joinedDate": "2021-11-19",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1076,
    "name": "Bappy Chowdhury",
    "role": "Finance Officer",
    "division": "Mymensingh",
    "district": "Mymensingh",
    "photo": "https://ui-avatars.com/api/?name=Bappy+Chowdhury&background=10B981&color=fff&size=200",
    "skills": [
      "Event Management",
      "Social Media",
      "Photography"
    ],
    "email": "bappy.chowdhury957@scriptysphere.org",
    "phone": "+880 1760043346",
    "joinedDate": "2024-10-01",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1077,
    "name": "Nabila Khan",
    "role": "Outreach Officer",
    "division": "Rajshahi",
    "district": "Pabna",
    "photo": "https://ui-avatars.com/api/?name=Nabila+Khan&background=10B981&color=fff&size=200",
    "skills": [
      "Monitoring",
      "Research",
      "AI/ML"
    ],
    "email": "nabila.khan808@scriptysphere.org",
    "phone": "+880 1610550956",
    "joinedDate": "2025-10-13",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1078,
    "name": "Bela Hasan",
    "role": "Coordinator",
    "division": "Barishal",
    "district": "Barguna",
    "photo": "https://ui-avatars.com/api/?name=Bela+Hasan&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Communication",
      "Social Media",
      "Mentorship"
    ],
    "email": "bela.hasan825@scriptysphere.org",
    "phone": "+880 1404027376",
    "joinedDate": "2021-03-05",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1079,
    "name": "Imran Bhuiyan",
    "role": "Finance Officer",
    "division": "Rajshahi",
    "district": "Pabna",
    "photo": "https://ui-avatars.com/api/?name=Imran+Bhuiyan&background=06B6D4&color=fff&size=200",
    "skills": [
      "Community Building",
      "Advocacy",
      "Mentorship"
    ],
    "email": "imran.bhuiyan7@scriptysphere.org",
    "phone": "+880 1928196504",
    "joinedDate": "2023-01-17",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1080,
    "name": "Mithun Mia",
    "role": "Data Officer",
    "division": "Chattogram",
    "district": "Cox's Bazar",
    "photo": "https://ui-avatars.com/api/?name=Mithun+Mia&background=10B981&color=fff&size=200",
    "skills": [
      "Design",
      "Monitoring",
      "Communication"
    ],
    "email": "mithun.mia450@scriptysphere.org",
    "phone": "+880 1887639707",
    "joinedDate": "2024-02-13",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1081,
    "name": "Esha Khanam",
    "role": "Finance Officer",
    "division": "Sylhet",
    "district": "Habiganj",
    "photo": "https://ui-avatars.com/api/?name=Esha+Khanam&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Project Management",
      "Public Speaking",
      "Coding"
    ],
    "email": "esha.khanam450@scriptysphere.org",
    "phone": "+880 1763753077",
    "joinedDate": "2020-12-06",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1082,
    "name": "Ehsan Sultana",
    "role": "Volunteer",
    "division": "Sylhet",
    "district": "Habiganj",
    "photo": "https://ui-avatars.com/api/?name=Ehsan+Sultana&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Mentorship",
      "Writing",
      "Coordination"
    ],
    "email": "ehsan.sultana723@scriptysphere.org",
    "phone": "+880 1943997949",
    "joinedDate": "2019-07-29",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1083,
    "name": "Jannat Mia",
    "role": "Monitoring Officer",
    "division": "Barishal",
    "district": "Patuakhali",
    "photo": "https://ui-avatars.com/api/?name=Jannat+Mia&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Python",
      "Coordination",
      "Communication"
    ],
    "email": "jannat.mia883@scriptysphere.org",
    "phone": "+880 1736400358",
    "joinedDate": "2024-09-03",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1084,
    "name": "Zarin Mia",
    "role": "Admin",
    "division": "Rajshahi",
    "district": "Naogaon",
    "photo": "https://ui-avatars.com/api/?name=Zarin+Mia&background=F59E0B&color=fff&size=200",
    "skills": [
      "Content Creation",
      "Fundraising",
      "Photography"
    ],
    "email": "zarin.mia952@scriptysphere.org",
    "phone": "+880 1507117536",
    "joinedDate": "2023-03-11",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1085,
    "name": "Wahid Rahman",
    "role": "Coordinator",
    "division": "Rangpur",
    "district": "Rangpur",
    "photo": "https://ui-avatars.com/api/?name=Wahid+Rahman&background=06B6D4&color=fff&size=200",
    "skills": [
      "Design",
      "Coding",
      "Advocacy"
    ],
    "email": "wahid.rahman745@scriptysphere.org",
    "phone": "+880 1974957530",
    "joinedDate": "2024-07-19",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1086,
    "name": "Bappy Basu",
    "role": "Data Officer",
    "division": "Rangpur",
    "district": "Thakurgaon",
    "photo": "https://ui-avatars.com/api/?name=Bappy+Basu&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Coordination",
      "Fundraising",
      "Training"
    ],
    "email": "bappy.basu314@scriptysphere.org",
    "phone": "+880 1372725957",
    "joinedDate": "2021-01-24",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1087,
    "name": "Nabila Hasan",
    "role": "Finance Officer",
    "division": "Rajshahi",
    "district": "Rajshahi",
    "photo": "https://ui-avatars.com/api/?name=Nabila+Hasan&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Communication",
      "Mentorship",
      "Writing"
    ],
    "email": "nabila.hasan764@scriptysphere.org",
    "phone": "+880 1993408813",
    "joinedDate": "2021-08-29",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1088,
    "name": "Mithun Sultana",
    "role": "Logistics Officer",
    "division": "Rangpur",
    "district": "Thakurgaon",
    "photo": "https://ui-avatars.com/api/?name=Mithun+Sultana&background=10B981&color=fff&size=200",
    "skills": [
      "Fundraising",
      "Web Development",
      "Leadership"
    ],
    "email": "mithun.sultana762@scriptysphere.org",
    "phone": "+880 1888962536",
    "joinedDate": "2021-06-27",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1089,
    "name": "Arif Rashid",
    "role": "Outreach Officer",
    "division": "Khulna",
    "district": "Satkhira",
    "photo": "https://ui-avatars.com/api/?name=Arif+Rashid&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Community Building",
      "Project Management",
      "Python"
    ],
    "email": "arif.rashid41@scriptysphere.org",
    "phone": "+880 1933110871",
    "joinedDate": "2024-02-14",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1090,
    "name": "Hasina Biswas",
    "role": "Designer",
    "division": "Rangpur",
    "district": "Dinajpur",
    "photo": "https://ui-avatars.com/api/?name=Hasina+Biswas&background=F59E0B&color=fff&size=200",
    "skills": [
      "Photography",
      "Advocacy",
      "Python"
    ],
    "email": "hasina.biswas893@scriptysphere.org",
    "phone": "+880 1869873135",
    "joinedDate": "2025-08-10",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1091,
    "name": "Champa Khan",
    "role": "Data Officer",
    "division": "Rangpur",
    "district": "Thakurgaon",
    "photo": "https://ui-avatars.com/api/?name=Champa+Khan&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Web Development",
      "Coding",
      "Writing"
    ],
    "email": "champa.khan504@scriptysphere.org",
    "phone": "+880 1997619503",
    "joinedDate": "2019-09-13",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1092,
    "name": "Arif Khanam",
    "role": "Outreach Officer",
    "division": "Barishal",
    "district": "Patuakhali",
    "photo": "https://ui-avatars.com/api/?name=Arif+Khanam&background=10B981&color=fff&size=200",
    "skills": [
      "Writing",
      "Content Creation",
      "Community Building"
    ],
    "email": "arif.khanam346@scriptysphere.org",
    "phone": "+880 1325857931",
    "joinedDate": "2022-07-09",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1093,
    "name": "Bappy Roy",
    "role": "Media Lead",
    "division": "Sylhet",
    "district": "Sunamganj",
    "photo": "https://ui-avatars.com/api/?name=Bappy+Roy&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Content Creation",
      "Writing",
      "Photography"
    ],
    "email": "bappy.roy635@scriptysphere.org",
    "phone": "+880 1663760460",
    "joinedDate": "2025-04-27",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1094,
    "name": "Hasina Sarker",
    "role": "Logistics Officer",
    "division": "Chattogram",
    "district": "Chattogram",
    "photo": "https://ui-avatars.com/api/?name=Hasina+Sarker&background=F59E0B&color=fff&size=200",
    "skills": [
      "Monitoring",
      "Event Management",
      "Communication"
    ],
    "email": "hasina.sarker608@scriptysphere.org",
    "phone": "+880 1346678470",
    "joinedDate": "2022-10-18",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1095,
    "name": "Dipu Ahmed",
    "role": "Data Officer",
    "division": "Chattogram",
    "district": "Comilla",
    "photo": "https://ui-avatars.com/api/?name=Dipu+Ahmed&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Public Speaking",
      "Design",
      "Project Management"
    ],
    "email": "dipu.ahmed989@scriptysphere.org",
    "phone": "+880 1347838571",
    "joinedDate": "2023-07-23",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1096,
    "name": "Ehsan Ahmed",
    "role": "Research Assistant",
    "division": "Chattogram",
    "district": "Feni",
    "photo": "https://ui-avatars.com/api/?name=Ehsan+Ahmed&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Monitoring",
      "Research",
      "Training"
    ],
    "email": "ehsan.ahmed665@scriptysphere.org",
    "phone": "+880 1800185293",
    "joinedDate": "2018-08-02",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1097,
    "name": "Nabila Shah",
    "role": "Outreach Officer",
    "division": "Khulna",
    "district": "Satkhira",
    "photo": "https://ui-avatars.com/api/?name=Nabila+Shah&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Training",
      "AI/ML",
      "Python"
    ],
    "email": "nabila.shah669@scriptysphere.org",
    "phone": "+880 1855585082",
    "joinedDate": "2024-05-20",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1098,
    "name": "Gias Akter",
    "role": "Finance Officer",
    "division": "Khulna",
    "district": "Satkhira",
    "photo": "https://ui-avatars.com/api/?name=Gias+Akter&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Data Analysis",
      "Social Media",
      "Mentorship"
    ],
    "email": "gias.akter510@scriptysphere.org",
    "phone": "+880 1898331725",
    "joinedDate": "2021-08-24",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1099,
    "name": "Sabbir Hasan",
    "role": "Designer",
    "division": "Sylhet",
    "district": "Moulvibazar",
    "photo": "https://ui-avatars.com/api/?name=Sabbir+Hasan&background=F59E0B&color=fff&size=200",
    "skills": [
      "Community Building",
      "Data Analysis",
      "Training"
    ],
    "email": "sabbir.hasan439@scriptysphere.org",
    "phone": "+880 1967378358",
    "joinedDate": "2023-08-06",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1100,
    "name": "Firoz Rashid",
    "role": "Trainer",
    "division": "Dhaka",
    "district": "Faridpur",
    "photo": "https://ui-avatars.com/api/?name=Firoz+Rashid&background=8B5CF6&color=fff&size=200",
    "skills": [
      "AI/ML",
      "Fundraising",
      "Research"
    ],
    "email": "firoz.rashid982@scriptysphere.org",
    "phone": "+880 1905789432",
    "joinedDate": "2024-03-19",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1101,
    "name": "Gias Sarker",
    "role": "Volunteer",
    "division": "Sylhet",
    "district": "Habiganj",
    "photo": "https://ui-avatars.com/api/?name=Gias+Sarker&background=F59E0B&color=fff&size=200",
    "skills": [
      "Coding",
      "Mentorship",
      "Advocacy"
    ],
    "email": "gias.sarker636@scriptysphere.org",
    "phone": "+880 1950667653",
    "joinedDate": "2021-11-21",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1102,
    "name": "Parvez Sarker",
    "role": "Designer",
    "division": "Sylhet",
    "district": "Moulvibazar",
    "photo": "https://ui-avatars.com/api/?name=Parvez+Sarker&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Communication",
      "Training",
      "Writing"
    ],
    "email": "parvez.sarker759@scriptysphere.org",
    "phone": "+880 1655810914",
    "joinedDate": "2022-03-07",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1103,
    "name": "Sabbir Jahan",
    "role": "Designer",
    "division": "Rajshahi",
    "district": "Bogra",
    "photo": "https://ui-avatars.com/api/?name=Sabbir+Jahan&background=06B6D4&color=fff&size=200",
    "skills": [
      "Data Analysis",
      "Research",
      "Public Speaking"
    ],
    "email": "sabbir.jahan575@scriptysphere.org",
    "phone": "+880 1995085867",
    "joinedDate": "2020-04-21",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1104,
    "name": "Dipu Amin",
    "role": "Coordinator",
    "division": "Chattogram",
    "district": "Cox's Bazar",
    "photo": "https://ui-avatars.com/api/?name=Dipu+Amin&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Project Management",
      "Mentorship",
      "Coordination"
    ],
    "email": "dipu.amin676@scriptysphere.org",
    "phone": "+880 1643533100",
    "joinedDate": "2022-10-27",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1105,
    "name": "Firoz Akter",
    "role": "Finance Officer",
    "division": "Sylhet",
    "district": "Moulvibazar",
    "photo": "https://ui-avatars.com/api/?name=Firoz+Akter&background=F59E0B&color=fff&size=200",
    "skills": [
      "Coding",
      "Project Management",
      "Web Development"
    ],
    "email": "firoz.akter116@scriptysphere.org",
    "phone": "+880 1399910279",
    "joinedDate": "2021-06-17",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1106,
    "name": "Lima Biswas",
    "role": "Media Lead",
    "division": "Barishal",
    "district": "Barishal",
    "photo": "https://ui-avatars.com/api/?name=Lima+Biswas&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Content Creation",
      "Monitoring",
      "Mentorship"
    ],
    "email": "lima.biswas794@scriptysphere.org",
    "phone": "+880 1421115833",
    "joinedDate": "2023-03-21",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1107,
    "name": "Ehsan Hasan",
    "role": "Admin",
    "division": "Barishal",
    "district": "Bhola",
    "photo": "https://ui-avatars.com/api/?name=Ehsan+Hasan&background=06B6D4&color=fff&size=200",
    "skills": [
      "Event Management",
      "Leadership",
      "Python"
    ],
    "email": "ehsan.hasan621@scriptysphere.org",
    "phone": "+880 1387688858",
    "joinedDate": "2023-09-24",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1108,
    "name": "Hasina Bhuiyan",
    "role": "Research Assistant",
    "division": "Khulna",
    "district": "Khulna",
    "photo": "https://ui-avatars.com/api/?name=Hasina+Bhuiyan&background=10B981&color=fff&size=200",
    "skills": [
      "Design",
      "Python",
      "Social Media"
    ],
    "email": "hasina.bhuiyan18@scriptysphere.org",
    "phone": "+880 1590878375",
    "joinedDate": "2020-10-16",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1109,
    "name": "Esha Rahman",
    "role": "Data Officer",
    "division": "Chattogram",
    "district": "Feni",
    "photo": "https://ui-avatars.com/api/?name=Esha+Rahman&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Writing",
      "Advocacy",
      "Communication"
    ],
    "email": "esha.rahman101@scriptysphere.org",
    "phone": "+880 1718008755",
    "joinedDate": "2019-06-18",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1110,
    "name": "Nabila Jahan",
    "role": "Media Lead",
    "division": "Rajshahi",
    "district": "Naogaon",
    "photo": "https://ui-avatars.com/api/?name=Nabila+Jahan&background=10B981&color=fff&size=200",
    "skills": [
      "Photography",
      "Event Management",
      "Research"
    ],
    "email": "nabila.jahan414@scriptysphere.org",
    "phone": "+880 1963921767",
    "joinedDate": "2024-09-20",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1111,
    "name": "Nabila Jahan",
    "role": "Monitoring Officer",
    "division": "Dhaka",
    "district": "Narayanganj",
    "photo": "https://ui-avatars.com/api/?name=Nabila+Jahan&background=F59E0B&color=fff&size=200",
    "skills": [
      "Leadership",
      "Training",
      "Fundraising"
    ],
    "email": "nabila.jahan581@scriptysphere.org",
    "phone": "+880 1566560168",
    "joinedDate": "2021-04-13",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1112,
    "name": "Dihan Sarker",
    "role": "Trainer",
    "division": "Rajshahi",
    "district": "Pabna",
    "photo": "https://ui-avatars.com/api/?name=Dihan+Sarker&background=10B981&color=fff&size=200",
    "skills": [
      "Research",
      "Training",
      "Python"
    ],
    "email": "dihan.sarker276@scriptysphere.org",
    "phone": "+880 1797833133",
    "joinedDate": "2023-03-13",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1113,
    "name": "Rima Basu",
    "role": "Coordinator",
    "division": "Barishal",
    "district": "Barishal",
    "photo": "https://ui-avatars.com/api/?name=Rima+Basu&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Training",
      "Advocacy",
      "Design"
    ],
    "email": "rima.basu991@scriptysphere.org",
    "phone": "+880 1653147442",
    "joinedDate": "2024-08-13",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1114,
    "name": "Sabbir Sultana",
    "role": "Finance Officer",
    "division": "Sylhet",
    "district": "Habiganj",
    "photo": "https://ui-avatars.com/api/?name=Sabbir+Sultana&background=10B981&color=fff&size=200",
    "skills": [
      "Photography",
      "Logistics",
      "Event Management"
    ],
    "email": "sabbir.sultana585@scriptysphere.org",
    "phone": "+880 1589278934",
    "joinedDate": "2021-07-20",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1115,
    "name": "Lima Hossain",
    "role": "Data Officer",
    "division": "Mymensingh",
    "district": "Mymensingh",
    "photo": "https://ui-avatars.com/api/?name=Lima+Hossain&background=10B981&color=fff&size=200",
    "skills": [
      "Coordination",
      "Monitoring",
      "Research"
    ],
    "email": "lima.hossain223@scriptysphere.org",
    "phone": "+880 1564470216",
    "joinedDate": "2024-10-22",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1116,
    "name": "Celina Chowdhury",
    "role": "Data Officer",
    "division": "Mymensingh",
    "district": "Mymensingh",
    "photo": "https://ui-avatars.com/api/?name=Celina+Chowdhury&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Social Media",
      "Data Analysis",
      "Content Creation"
    ],
    "email": "celina.chowdhury911@scriptysphere.org",
    "phone": "+880 1386721347",
    "joinedDate": "2025-08-05",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1117,
    "name": "Rima Ahmed",
    "role": "Logistics Officer",
    "division": "Khulna",
    "district": "Bagerhat",
    "photo": "https://ui-avatars.com/api/?name=Rima+Ahmed&background=06B6D4&color=fff&size=200",
    "skills": [
      "Advocacy",
      "Python",
      "Community Building"
    ],
    "email": "rima.ahmed107@scriptysphere.org",
    "phone": "+880 1652749255",
    "joinedDate": "2020-04-11",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1118,
    "name": "Orin Basu",
    "role": "Logistics Officer",
    "division": "Dhaka",
    "district": "Gazipur",
    "photo": "https://ui-avatars.com/api/?name=Orin+Basu&background=0EA5E9&color=fff&size=200",
    "skills": [
      "AI/ML",
      "Writing",
      "Event Management"
    ],
    "email": "orin.basu126@scriptysphere.org",
    "phone": "+880 1882083500",
    "joinedDate": "2021-11-17",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1119,
    "name": "Mithun Sarker",
    "role": "Designer",
    "division": "Khulna",
    "district": "Bagerhat",
    "photo": "https://ui-avatars.com/api/?name=Mithun+Sarker&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Research",
      "Advocacy",
      "Training"
    ],
    "email": "mithun.sarker993@scriptysphere.org",
    "phone": "+880 1999428795",
    "joinedDate": "2022-04-28",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1120,
    "name": "Nabila Biswas",
    "role": "Admin",
    "division": "Khulna",
    "district": "Khulna",
    "photo": "https://ui-avatars.com/api/?name=Nabila+Biswas&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Logistics",
      "AI/ML",
      "Training"
    ],
    "email": "nabila.biswas515@scriptysphere.org",
    "phone": "+880 1349783424",
    "joinedDate": "2025-04-14",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1121,
    "name": "Usman Islam",
    "role": "Designer",
    "division": "Dhaka",
    "district": "Narayanganj",
    "photo": "https://ui-avatars.com/api/?name=Usman+Islam&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Logistics",
      "AI/ML",
      "Research"
    ],
    "email": "usman.islam629@scriptysphere.org",
    "phone": "+880 1722251300",
    "joinedDate": "2022-07-16",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1122,
    "name": "Dipu Sarker",
    "role": "Monitoring Officer",
    "division": "Khulna",
    "district": "Khulna",
    "photo": "https://ui-avatars.com/api/?name=Dipu+Sarker&background=F59E0B&color=fff&size=200",
    "skills": [
      "Writing",
      "Public Speaking",
      "Logistics"
    ],
    "email": "dipu.sarker385@scriptysphere.org",
    "phone": "+880 1917679592",
    "joinedDate": "2018-01-30",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1123,
    "name": "Champa Biswas",
    "role": "Finance Officer",
    "division": "Khulna",
    "district": "Jessore",
    "photo": "https://ui-avatars.com/api/?name=Champa+Biswas&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Photography",
      "Python",
      "Web Development"
    ],
    "email": "champa.biswas306@scriptysphere.org",
    "phone": "+880 1477239004",
    "joinedDate": "2022-07-15",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1124,
    "name": "Kamal Akter",
    "role": "Data Officer",
    "division": "Rangpur",
    "district": "Lalmonirhat",
    "photo": "https://ui-avatars.com/api/?name=Kamal+Akter&background=10B981&color=fff&size=200",
    "skills": [
      "Public Speaking",
      "Event Management",
      "Mentorship"
    ],
    "email": "kamal.akter562@scriptysphere.org",
    "phone": "+880 1754135111",
    "joinedDate": "2019-08-01",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1125,
    "name": "Jannat Akter",
    "role": "Volunteer",
    "division": "Barishal",
    "district": "Bhola",
    "photo": "https://ui-avatars.com/api/?name=Jannat+Akter&background=F59E0B&color=fff&size=200",
    "skills": [
      "Communication",
      "Event Management",
      "Public Speaking"
    ],
    "email": "jannat.akter295@scriptysphere.org",
    "phone": "+880 1757766447",
    "joinedDate": "2021-05-21",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1126,
    "name": "Esha Biswas",
    "role": "Logistics Officer",
    "division": "Chattogram",
    "district": "Comilla",
    "photo": "https://ui-avatars.com/api/?name=Esha+Biswas&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Research",
      "AI/ML",
      "Web Development"
    ],
    "email": "esha.biswas181@scriptysphere.org",
    "phone": "+880 1921477545",
    "joinedDate": "2021-07-08",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1127,
    "name": "Hasina Roy",
    "role": "Data Officer",
    "division": "Khulna",
    "district": "Khulna",
    "photo": "https://ui-avatars.com/api/?name=Hasina+Roy&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Fundraising",
      "Mentorship",
      "Coding"
    ],
    "email": "hasina.roy179@scriptysphere.org",
    "phone": "+880 1890283304",
    "joinedDate": "2019-11-01",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1128,
    "name": "Dihan Jahan",
    "role": "Monitoring Officer",
    "division": "Chattogram",
    "district": "Feni",
    "photo": "https://ui-avatars.com/api/?name=Dihan+Jahan&background=10B981&color=fff&size=200",
    "skills": [
      "Data Analysis",
      "Advocacy",
      "Event Management"
    ],
    "email": "dihan.jahan694@scriptysphere.org",
    "phone": "+880 1715081001",
    "joinedDate": "2024-11-30",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1129,
    "name": "Dipu Ahmed",
    "role": "Finance Officer",
    "division": "Sylhet",
    "district": "Habiganj",
    "photo": "https://ui-avatars.com/api/?name=Dipu+Ahmed&background=F59E0B&color=fff&size=200",
    "skills": [
      "AI/ML",
      "Content Creation",
      "Writing"
    ],
    "email": "dipu.ahmed329@scriptysphere.org",
    "phone": "+880 1799774402",
    "joinedDate": "2018-02-28",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1130,
    "name": "Hasina Jahan",
    "role": "Outreach Officer",
    "division": "Barishal",
    "district": "Patuakhali",
    "photo": "https://ui-avatars.com/api/?name=Hasina+Jahan&background=10B981&color=fff&size=200",
    "skills": [
      "Coordination",
      "Web Development",
      "Monitoring"
    ],
    "email": "hasina.jahan224@scriptysphere.org",
    "phone": "+880 1838016111",
    "joinedDate": "2022-06-01",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1131,
    "name": "Parvez Sarker",
    "role": "Media Lead",
    "division": "Rangpur",
    "district": "Thakurgaon",
    "photo": "https://ui-avatars.com/api/?name=Parvez+Sarker&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Mentorship",
      "Coordination",
      "Project Management"
    ],
    "email": "parvez.sarker769@scriptysphere.org",
    "phone": "+880 1764474380",
    "joinedDate": "2021-08-28",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1132,
    "name": "Champa Ahmed",
    "role": "Monitoring Officer",
    "division": "Dhaka",
    "district": "Narayanganj",
    "photo": "https://ui-avatars.com/api/?name=Champa+Ahmed&background=06B6D4&color=fff&size=200",
    "skills": [
      "Photography",
      "Advocacy",
      "Logistics"
    ],
    "email": "champa.ahmed795@scriptysphere.org",
    "phone": "+880 1600028350",
    "joinedDate": "2025-03-13",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1133,
    "name": "Vishal Hasan",
    "role": "Field Officer",
    "division": "Chattogram",
    "district": "Comilla",
    "photo": "https://ui-avatars.com/api/?name=Vishal+Hasan&background=F59E0B&color=fff&size=200",
    "skills": [
      "Research",
      "Content Creation",
      "Mentorship"
    ],
    "email": "vishal.hasan102@scriptysphere.org",
    "phone": "+880 1948916357",
    "joinedDate": "2018-11-27",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1134,
    "name": "Arif Roy",
    "role": "Admin",
    "division": "Khulna",
    "district": "Satkhira",
    "photo": "https://ui-avatars.com/api/?name=Arif+Roy&background=F59E0B&color=fff&size=200",
    "skills": [
      "Event Management",
      "Training",
      "Python"
    ],
    "email": "arif.roy418@scriptysphere.org",
    "phone": "+880 1913816477",
    "joinedDate": "2023-10-25",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1135,
    "name": "Jannat Shah",
    "role": "Media Lead",
    "division": "Barishal",
    "district": "Barguna",
    "photo": "https://ui-avatars.com/api/?name=Jannat+Shah&background=06B6D4&color=fff&size=200",
    "skills": [
      "Social Media",
      "Advocacy",
      "Research"
    ],
    "email": "jannat.shah867@scriptysphere.org",
    "phone": "+880 1710240537",
    "joinedDate": "2019-08-04",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1136,
    "name": "Sabbir Biswas",
    "role": "Research Assistant",
    "division": "Dhaka",
    "district": "Faridpur",
    "photo": "https://ui-avatars.com/api/?name=Sabbir+Biswas&background=06B6D4&color=fff&size=200",
    "skills": [
      "AI/ML",
      "Design",
      "Social Media"
    ],
    "email": "sabbir.biswas664@scriptysphere.org",
    "phone": "+880 1903148796",
    "joinedDate": "2021-12-17",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1137,
    "name": "Gias Rahman",
    "role": "Data Officer",
    "division": "Rangpur",
    "district": "Lalmonirhat",
    "photo": "https://ui-avatars.com/api/?name=Gias+Rahman&background=0EA5E9&color=fff&size=200",
    "skills": [
      "AI/ML",
      "Coding",
      "Fundraising"
    ],
    "email": "gias.rahman251@scriptysphere.org",
    "phone": "+880 1652371635",
    "joinedDate": "2020-04-30",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1138,
    "name": "Abir Akter",
    "role": "Admin",
    "division": "Mymensingh",
    "district": "Mymensingh",
    "photo": "https://ui-avatars.com/api/?name=Abir+Akter&background=06B6D4&color=fff&size=200",
    "skills": [
      "Advocacy",
      "Content Creation",
      "Training"
    ],
    "email": "abir.akter76@scriptysphere.org",
    "phone": "+880 1568722687",
    "joinedDate": "2021-11-14",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1139,
    "name": "Jannat Basu",
    "role": "Coordinator",
    "division": "Rajshahi",
    "district": "Naogaon",
    "photo": "https://ui-avatars.com/api/?name=Jannat+Basu&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Coordination",
      "Community Building",
      "Event Management"
    ],
    "email": "jannat.basu299@scriptysphere.org",
    "phone": "+880 1692413703",
    "joinedDate": "2018-05-19",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1140,
    "name": "Rima Jahan",
    "role": "Research Assistant",
    "division": "Chattogram",
    "district": "Feni",
    "photo": "https://ui-avatars.com/api/?name=Rima+Jahan&background=06B6D4&color=fff&size=200",
    "skills": [
      "Design",
      "Social Media",
      "Writing"
    ],
    "email": "rima.jahan617@scriptysphere.org",
    "phone": "+880 1454626257",
    "joinedDate": "2020-04-13",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1141,
    "name": "Lima Khan",
    "role": "Admin",
    "division": "Chattogram",
    "district": "Chattogram",
    "photo": "https://ui-avatars.com/api/?name=Lima+Khan&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Coordination",
      "Social Media",
      "Project Management"
    ],
    "email": "lima.khan361@scriptysphere.org",
    "phone": "+880 1314774476",
    "joinedDate": "2020-06-21",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1142,
    "name": "Esha Ahmed",
    "role": "Trainer",
    "division": "Mymensingh",
    "district": "Netrokona",
    "photo": "https://ui-avatars.com/api/?name=Esha+Ahmed&background=F59E0B&color=fff&size=200",
    "skills": [
      "Data Analysis",
      "Training",
      "Communication"
    ],
    "email": "esha.ahmed666@scriptysphere.org",
    "phone": "+880 1929366561",
    "joinedDate": "2020-11-02",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1143,
    "name": "Bela Mia",
    "role": "Trainer",
    "division": "Dhaka",
    "district": "Faridpur",
    "photo": "https://ui-avatars.com/api/?name=Bela+Mia&background=F59E0B&color=fff&size=200",
    "skills": [
      "Python",
      "Project Management",
      "Mentorship"
    ],
    "email": "bela.mia910@scriptysphere.org",
    "phone": "+880 1708157550",
    "joinedDate": "2019-10-07",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1144,
    "name": "Nabila Mia",
    "role": "Outreach Officer",
    "division": "Khulna",
    "district": "Bagerhat",
    "photo": "https://ui-avatars.com/api/?name=Nabila+Mia&background=10B981&color=fff&size=200",
    "skills": [
      "Research",
      "Coordination",
      "Web Development"
    ],
    "email": "nabila.mia54@scriptysphere.org",
    "phone": "+880 1510444342",
    "joinedDate": "2021-06-04",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1145,
    "name": "Dihan Bhuiyan",
    "role": "Field Officer",
    "division": "Rajshahi",
    "district": "Bogra",
    "photo": "https://ui-avatars.com/api/?name=Dihan+Bhuiyan&background=F59E0B&color=fff&size=200",
    "skills": [
      "Monitoring",
      "AI/ML",
      "Content Creation"
    ],
    "email": "dihan.bhuiyan264@scriptysphere.org",
    "phone": "+880 1313169648",
    "joinedDate": "2020-02-14",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1146,
    "name": "Ehsan Roy",
    "role": "Coordinator",
    "division": "Mymensingh",
    "district": "Mymensingh",
    "photo": "https://ui-avatars.com/api/?name=Ehsan+Roy&background=F59E0B&color=fff&size=200",
    "skills": [
      "Coding",
      "Training",
      "Mentorship"
    ],
    "email": "ehsan.roy360@scriptysphere.org",
    "phone": "+880 1901694412",
    "joinedDate": "2022-01-16",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1147,
    "name": "Firoz Roy",
    "role": "Logistics Officer",
    "division": "Barishal",
    "district": "Barishal",
    "photo": "https://ui-avatars.com/api/?name=Firoz+Roy&background=F59E0B&color=fff&size=200",
    "skills": [
      "Design",
      "Community Building",
      "Event Management"
    ],
    "email": "firoz.roy767@scriptysphere.org",
    "phone": "+880 1783210207",
    "joinedDate": "2025-09-11",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1148,
    "name": "Nabila Hossain",
    "role": "Outreach Officer",
    "division": "Rangpur",
    "district": "Dinajpur",
    "photo": "https://ui-avatars.com/api/?name=Nabila+Hossain&background=F59E0B&color=fff&size=200",
    "skills": [
      "Logistics",
      "Python",
      "Content Creation"
    ],
    "email": "nabila.hossain602@scriptysphere.org",
    "phone": "+880 1342739698",
    "joinedDate": "2025-11-02",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1149,
    "name": "Rima Khan",
    "role": "Coordinator",
    "division": "Dhaka",
    "district": "Gazipur",
    "photo": "https://ui-avatars.com/api/?name=Rima+Khan&background=10B981&color=fff&size=200",
    "skills": [
      "Project Management",
      "Design",
      "Fundraising"
    ],
    "email": "rima.khan470@scriptysphere.org",
    "phone": "+880 1952194683",
    "joinedDate": "2020-02-01",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1150,
    "name": "Yasir Hossain",
    "role": "Admin",
    "division": "Chattogram",
    "district": "Cox's Bazar",
    "photo": "https://ui-avatars.com/api/?name=Yasir+Hossain&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Communication",
      "Research",
      "Public Speaking"
    ],
    "email": "yasir.hossain568@scriptysphere.org",
    "phone": "+880 1750050365",
    "joinedDate": "2019-01-12",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1151,
    "name": "Mithun Sultana",
    "role": "Trainer",
    "division": "Mymensingh",
    "district": "Netrokona",
    "photo": "https://ui-avatars.com/api/?name=Mithun+Sultana&background=10B981&color=fff&size=200",
    "skills": [
      "Communication",
      "Design",
      "Web Development"
    ],
    "email": "mithun.sultana123@scriptysphere.org",
    "phone": "+880 1965900354",
    "joinedDate": "2023-05-29",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1152,
    "name": "Nabila Bhuiyan",
    "role": "Designer",
    "division": "Rangpur",
    "district": "Rangpur",
    "photo": "https://ui-avatars.com/api/?name=Nabila+Bhuiyan&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Data Analysis",
      "Writing",
      "Advocacy"
    ],
    "email": "nabila.bhuiyan436@scriptysphere.org",
    "phone": "+880 1372811776",
    "joinedDate": "2022-12-03",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1153,
    "name": "Usman Bhuiyan",
    "role": "Data Officer",
    "division": "Dhaka",
    "district": "Narayanganj",
    "photo": "https://ui-avatars.com/api/?name=Usman+Bhuiyan&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Leadership",
      "Mentorship",
      "Content Creation"
    ],
    "email": "usman.bhuiyan137@scriptysphere.org",
    "phone": "+880 1535556980",
    "joinedDate": "2018-07-21",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1154,
    "name": "Nabila Rashid",
    "role": "Media Lead",
    "division": "Chattogram",
    "district": "Comilla",
    "photo": "https://ui-avatars.com/api/?name=Nabila+Rashid&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Monitoring",
      "Content Creation",
      "Web Development"
    ],
    "email": "nabila.rashid918@scriptysphere.org",
    "phone": "+880 1663054312",
    "joinedDate": "2020-04-09",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1155,
    "name": "Zarin Bhuiyan",
    "role": "Finance Officer",
    "division": "Barishal",
    "district": "Patuakhali",
    "photo": "https://ui-avatars.com/api/?name=Zarin+Bhuiyan&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Public Speaking",
      "Design",
      "Community Building"
    ],
    "email": "zarin.bhuiyan775@scriptysphere.org",
    "phone": "+880 1617517811",
    "joinedDate": "2019-11-09",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1156,
    "name": "Mithun Basu",
    "role": "Logistics Officer",
    "division": "Sylhet",
    "district": "Sylhet",
    "photo": "https://ui-avatars.com/api/?name=Mithun+Basu&background=06B6D4&color=fff&size=200",
    "skills": [
      "Research",
      "Monitoring",
      "Social Media"
    ],
    "email": "mithun.basu546@scriptysphere.org",
    "phone": "+880 1611613244",
    "joinedDate": "2019-08-09",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1157,
    "name": "Vishal Rashid",
    "role": "Logistics Officer",
    "division": "Chattogram",
    "district": "Comilla",
    "photo": "https://ui-avatars.com/api/?name=Vishal+Rashid&background=06B6D4&color=fff&size=200",
    "skills": [
      "Photography",
      "Content Creation",
      "Communication"
    ],
    "email": "vishal.rashid909@scriptysphere.org",
    "phone": "+880 1334507972",
    "joinedDate": "2018-06-26",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1158,
    "name": "Abir Akter",
    "role": "Finance Officer",
    "division": "Barishal",
    "district": "Barguna",
    "photo": "https://ui-avatars.com/api/?name=Abir+Akter&background=10B981&color=fff&size=200",
    "skills": [
      "Logistics",
      "Monitoring",
      "Public Speaking"
    ],
    "email": "abir.akter692@scriptysphere.org",
    "phone": "+880 1973556401",
    "joinedDate": "2019-01-26",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1159,
    "name": "Yasir Akter",
    "role": "Finance Officer",
    "division": "Barishal",
    "district": "Barguna",
    "photo": "https://ui-avatars.com/api/?name=Yasir+Akter&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Design",
      "Communication",
      "Training"
    ],
    "email": "yasir.akter405@scriptysphere.org",
    "phone": "+880 1460976416",
    "joinedDate": "2020-03-17",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1160,
    "name": "Celina Roy",
    "role": "Designer",
    "division": "Barishal",
    "district": "Patuakhali",
    "photo": "https://ui-avatars.com/api/?name=Celina+Roy&background=F59E0B&color=fff&size=200",
    "skills": [
      "Community Building",
      "Research",
      "Project Management"
    ],
    "email": "celina.roy788@scriptysphere.org",
    "phone": "+880 1354953217",
    "joinedDate": "2024-12-15",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1161,
    "name": "Gias Hasan",
    "role": "Finance Officer",
    "division": "Dhaka",
    "district": "Narayanganj",
    "photo": "https://ui-avatars.com/api/?name=Gias+Hasan&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Event Management",
      "AI/ML",
      "Mentorship"
    ],
    "email": "gias.hasan606@scriptysphere.org",
    "phone": "+880 1307960004",
    "joinedDate": "2023-12-13",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1162,
    "name": "Zarin Amin",
    "role": "Logistics Officer",
    "division": "Mymensingh",
    "district": "Sherpur",
    "photo": "https://ui-avatars.com/api/?name=Zarin+Amin&background=10B981&color=fff&size=200",
    "skills": [
      "Fundraising",
      "Public Speaking",
      "Monitoring"
    ],
    "email": "zarin.amin240@scriptysphere.org",
    "phone": "+880 1989650746",
    "joinedDate": "2023-09-10",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1163,
    "name": "Wahid Sultana",
    "role": "Admin",
    "division": "Rangpur",
    "district": "Thakurgaon",
    "photo": "https://ui-avatars.com/api/?name=Wahid+Sultana&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Design",
      "AI/ML",
      "Coding"
    ],
    "email": "wahid.sultana250@scriptysphere.org",
    "phone": "+880 1483593972",
    "joinedDate": "2022-03-21",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1164,
    "name": "Champa Hossain",
    "role": "Field Officer",
    "division": "Dhaka",
    "district": "Dhaka",
    "photo": "https://ui-avatars.com/api/?name=Champa+Hossain&background=10B981&color=fff&size=200",
    "skills": [
      "Public Speaking",
      "Mentorship",
      "Python"
    ],
    "email": "champa.hossain101@scriptysphere.org",
    "phone": "+880 1864851643",
    "joinedDate": "2019-01-19",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1165,
    "name": "Farhana Khanam",
    "role": "Monitoring Officer",
    "division": "Khulna",
    "district": "Satkhira",
    "photo": "https://ui-avatars.com/api/?name=Farhana+Khanam&background=10B981&color=fff&size=200",
    "skills": [
      "Communication",
      "AI/ML",
      "Design"
    ],
    "email": "farhana.khanam770@scriptysphere.org",
    "phone": "+880 1819946838",
    "joinedDate": "2019-08-02",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1166,
    "name": "Jannat Hasan",
    "role": "Logistics Officer",
    "division": "Khulna",
    "district": "Satkhira",
    "photo": "https://ui-avatars.com/api/?name=Jannat+Hasan&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Logistics",
      "Mentorship",
      "Research"
    ],
    "email": "jannat.hasan475@scriptysphere.org",
    "phone": "+880 1648226726",
    "joinedDate": "2024-03-21",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1167,
    "name": "Wahid Sarker",
    "role": "Outreach Officer",
    "division": "Khulna",
    "district": "Satkhira",
    "photo": "https://ui-avatars.com/api/?name=Wahid+Sarker&background=F59E0B&color=fff&size=200",
    "skills": [
      "Data Analysis",
      "Fundraising",
      "Event Management"
    ],
    "email": "wahid.sarker978@scriptysphere.org",
    "phone": "+880 1749538397",
    "joinedDate": "2023-05-28",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1168,
    "name": "Usman Biswas",
    "role": "Media Lead",
    "division": "Rangpur",
    "district": "Rangpur",
    "photo": "https://ui-avatars.com/api/?name=Usman+Biswas&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Leadership",
      "Project Management",
      "Writing"
    ],
    "email": "usman.biswas401@scriptysphere.org",
    "phone": "+880 1591290827",
    "joinedDate": "2019-01-28",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1169,
    "name": "Hasina Akter",
    "role": "Volunteer",
    "division": "Dhaka",
    "district": "Narayanganj",
    "photo": "https://ui-avatars.com/api/?name=Hasina+Akter&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Public Speaking",
      "AI/ML",
      "Coding"
    ],
    "email": "hasina.akter388@scriptysphere.org",
    "phone": "+880 1898358311",
    "joinedDate": "2020-09-09",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1170,
    "name": "Champa Rahman",
    "role": "Volunteer",
    "division": "Chattogram",
    "district": "Feni",
    "photo": "https://ui-avatars.com/api/?name=Champa+Rahman&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Content Creation",
      "Web Development",
      "Data Analysis"
    ],
    "email": "champa.rahman339@scriptysphere.org",
    "phone": "+880 1382158586",
    "joinedDate": "2020-08-16",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1171,
    "name": "Tania Sultana",
    "role": "Outreach Officer",
    "division": "Chattogram",
    "district": "Chattogram",
    "photo": "https://ui-avatars.com/api/?name=Tania+Sultana&background=F59E0B&color=fff&size=200",
    "skills": [
      "Coding",
      "Coordination",
      "Event Management"
    ],
    "email": "tania.sultana259@scriptysphere.org",
    "phone": "+880 1883752542",
    "joinedDate": "2024-02-22",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1172,
    "name": "Nabila Sultana",
    "role": "Outreach Officer",
    "division": "Rangpur",
    "district": "Thakurgaon",
    "photo": "https://ui-avatars.com/api/?name=Nabila+Sultana&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Photography",
      "Web Development",
      "Content Creation"
    ],
    "email": "nabila.sultana19@scriptysphere.org",
    "phone": "+880 1708312297",
    "joinedDate": "2022-09-06",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1173,
    "name": "Yasir Jahan",
    "role": "Outreach Officer",
    "division": "Barishal",
    "district": "Bhola",
    "photo": "https://ui-avatars.com/api/?name=Yasir+Jahan&background=F59E0B&color=fff&size=200",
    "skills": [
      "Leadership",
      "Advocacy",
      "Social Media"
    ],
    "email": "yasir.jahan856@scriptysphere.org",
    "phone": "+880 1867292520",
    "joinedDate": "2018-04-10",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1174,
    "name": "Abir Mia",
    "role": "Finance Officer",
    "division": "Chattogram",
    "district": "Chattogram",
    "photo": "https://ui-avatars.com/api/?name=Abir+Mia&background=06B6D4&color=fff&size=200",
    "skills": [
      "Communication",
      "Web Development",
      "Coding"
    ],
    "email": "abir.mia87@scriptysphere.org",
    "phone": "+880 1941649248",
    "joinedDate": "2021-11-17",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1175,
    "name": "Dihan Hasan",
    "role": "Media Lead",
    "division": "Rangpur",
    "district": "Thakurgaon",
    "photo": "https://ui-avatars.com/api/?name=Dihan+Hasan&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Design",
      "Event Management",
      "Content Creation"
    ],
    "email": "dihan.hasan901@scriptysphere.org",
    "phone": "+880 1615778027",
    "joinedDate": "2022-05-04",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1176,
    "name": "Gulshan Jahan",
    "role": "Data Officer",
    "division": "Dhaka",
    "district": "Narayanganj",
    "photo": "https://ui-avatars.com/api/?name=Gulshan+Jahan&background=F59E0B&color=fff&size=200",
    "skills": [
      "Project Management",
      "Design",
      "Training"
    ],
    "email": "gulshan.jahan458@scriptysphere.org",
    "phone": "+880 1696704859",
    "joinedDate": "2020-12-17",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1177,
    "name": "Dipu Biswas",
    "role": "Finance Officer",
    "division": "Rangpur",
    "district": "Dinajpur",
    "photo": "https://ui-avatars.com/api/?name=Dipu+Biswas&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Monitoring",
      "Leadership",
      "AI/ML"
    ],
    "email": "dipu.biswas724@scriptysphere.org",
    "phone": "+880 1360194143",
    "joinedDate": "2025-10-30",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1178,
    "name": "Firoz Jahan",
    "role": "Coordinator",
    "division": "Rajshahi",
    "district": "Pabna",
    "photo": "https://ui-avatars.com/api/?name=Firoz+Jahan&background=F59E0B&color=fff&size=200",
    "skills": [
      "Public Speaking",
      "Training",
      "Python"
    ],
    "email": "firoz.jahan306@scriptysphere.org",
    "phone": "+880 1929948460",
    "joinedDate": "2024-06-21",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1179,
    "name": "Dihan Sultana",
    "role": "Outreach Officer",
    "division": "Chattogram",
    "district": "Cox's Bazar",
    "photo": "https://ui-avatars.com/api/?name=Dihan+Sultana&background=06B6D4&color=fff&size=200",
    "skills": [
      "Public Speaking",
      "Event Management",
      "Social Media"
    ],
    "email": "dihan.sultana916@scriptysphere.org",
    "phone": "+880 1995696573",
    "joinedDate": "2020-11-29",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1180,
    "name": "Usman Sultana",
    "role": "Coordinator",
    "division": "Dhaka",
    "district": "Narayanganj",
    "photo": "https://ui-avatars.com/api/?name=Usman+Sultana&background=06B6D4&color=fff&size=200",
    "skills": [
      "Communication",
      "Data Analysis",
      "Fundraising"
    ],
    "email": "usman.sultana831@scriptysphere.org",
    "phone": "+880 1494172467",
    "joinedDate": "2018-02-09",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1181,
    "name": "Kamal Bhuiyan",
    "role": "Research Assistant",
    "division": "Chattogram",
    "district": "Feni",
    "photo": "https://ui-avatars.com/api/?name=Kamal+Bhuiyan&background=F59E0B&color=fff&size=200",
    "skills": [
      "Monitoring",
      "Data Analysis",
      "Writing"
    ],
    "email": "kamal.bhuiyan528@scriptysphere.org",
    "phone": "+880 1910184123",
    "joinedDate": "2020-04-13",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1182,
    "name": "Imran Islam",
    "role": "Media Lead",
    "division": "Khulna",
    "district": "Bagerhat",
    "photo": "https://ui-avatars.com/api/?name=Imran+Islam&background=F59E0B&color=fff&size=200",
    "skills": [
      "Social Media",
      "Advocacy",
      "Photography"
    ],
    "email": "imran.islam701@scriptysphere.org",
    "phone": "+880 1873755731",
    "joinedDate": "2024-09-05",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1183,
    "name": "Dihan Khanam",
    "role": "Volunteer",
    "division": "Rangpur",
    "district": "Thakurgaon",
    "photo": "https://ui-avatars.com/api/?name=Dihan+Khanam&background=06B6D4&color=fff&size=200",
    "skills": [
      "Training",
      "Leadership",
      "Advocacy"
    ],
    "email": "dihan.khanam426@scriptysphere.org",
    "phone": "+880 1334976807",
    "joinedDate": "2021-10-19",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1184,
    "name": "Nabila Shah",
    "role": "Coordinator",
    "division": "Barishal",
    "district": "Patuakhali",
    "photo": "https://ui-avatars.com/api/?name=Nabila+Shah&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Mentorship",
      "Training",
      "Research"
    ],
    "email": "nabila.shah400@scriptysphere.org",
    "phone": "+880 1885157109",
    "joinedDate": "2025-10-27",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1185,
    "name": "Farhana Khanam",
    "role": "Trainer",
    "division": "Rajshahi",
    "district": "Bogra",
    "photo": "https://ui-avatars.com/api/?name=Farhana+Khanam&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Logistics",
      "Social Media",
      "Content Creation"
    ],
    "email": "farhana.khanam761@scriptysphere.org",
    "phone": "+880 1798053289",
    "joinedDate": "2024-01-10",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1186,
    "name": "Champa Mia",
    "role": "Data Officer",
    "division": "Barishal",
    "district": "Barguna",
    "photo": "https://ui-avatars.com/api/?name=Champa+Mia&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Design",
      "Coding",
      "Community Building"
    ],
    "email": "champa.mia633@scriptysphere.org",
    "phone": "+880 1669238067",
    "joinedDate": "2019-04-04",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1187,
    "name": "Gulshan Sarker",
    "role": "Admin",
    "division": "Mymensingh",
    "district": "Kishoreganj",
    "photo": "https://ui-avatars.com/api/?name=Gulshan+Sarker&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Design",
      "Coordination",
      "Research"
    ],
    "email": "gulshan.sarker569@scriptysphere.org",
    "phone": "+880 1582155820",
    "joinedDate": "2019-02-20",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1188,
    "name": "Orin Hasan",
    "role": "Logistics Officer",
    "division": "Rajshahi",
    "district": "Naogaon",
    "photo": "https://ui-avatars.com/api/?name=Orin+Hasan&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Logistics",
      "Mentorship",
      "Social Media"
    ],
    "email": "orin.hasan751@scriptysphere.org",
    "phone": "+880 1751184079",
    "joinedDate": "2019-03-08",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1189,
    "name": "Celina Amin",
    "role": "Field Officer",
    "division": "Barishal",
    "district": "Barishal",
    "photo": "https://ui-avatars.com/api/?name=Celina+Amin&background=F59E0B&color=fff&size=200",
    "skills": [
      "Writing",
      "Public Speaking",
      "Advocacy"
    ],
    "email": "celina.amin883@scriptysphere.org",
    "phone": "+880 1470230055",
    "joinedDate": "2020-10-29",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1190,
    "name": "Parvez Ahmed",
    "role": "Designer",
    "division": "Dhaka",
    "district": "Faridpur",
    "photo": "https://ui-avatars.com/api/?name=Parvez+Ahmed&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Web Development",
      "Content Creation",
      "Logistics"
    ],
    "email": "parvez.ahmed569@scriptysphere.org",
    "phone": "+880 1344151990",
    "joinedDate": "2018-08-06",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1191,
    "name": "Gias Rahman",
    "role": "Logistics Officer",
    "division": "Sylhet",
    "district": "Sylhet",
    "photo": "https://ui-avatars.com/api/?name=Gias+Rahman&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Web Development",
      "Advocacy",
      "Coding"
    ],
    "email": "gias.rahman239@scriptysphere.org",
    "phone": "+880 1486003712",
    "joinedDate": "2021-06-12",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1192,
    "name": "Farhana Akter",
    "role": "Media Lead",
    "division": "Sylhet",
    "district": "Habiganj",
    "photo": "https://ui-avatars.com/api/?name=Farhana+Akter&background=10B981&color=fff&size=200",
    "skills": [
      "Writing",
      "AI/ML",
      "Monitoring"
    ],
    "email": "farhana.akter817@scriptysphere.org",
    "phone": "+880 1379687484",
    "joinedDate": "2023-02-28",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1193,
    "name": "Mithun Biswas",
    "role": "Volunteer",
    "division": "Sylhet",
    "district": "Sunamganj",
    "photo": "https://ui-avatars.com/api/?name=Mithun+Biswas&background=F59E0B&color=fff&size=200",
    "skills": [
      "Data Analysis",
      "Content Creation",
      "Logistics"
    ],
    "email": "mithun.biswas542@scriptysphere.org",
    "phone": "+880 1407048311",
    "joinedDate": "2023-11-04",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1194,
    "name": "Gias Sultana",
    "role": "Admin",
    "division": "Rajshahi",
    "district": "Bogra",
    "photo": "https://ui-avatars.com/api/?name=Gias+Sultana&background=F59E0B&color=fff&size=200",
    "skills": [
      "Communication",
      "Mentorship",
      "Coding"
    ],
    "email": "gias.sultana371@scriptysphere.org",
    "phone": "+880 1350712894",
    "joinedDate": "2019-01-06",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1195,
    "name": "Firoz Jahan",
    "role": "Trainer",
    "division": "Chattogram",
    "district": "Cox's Bazar",
    "photo": "https://ui-avatars.com/api/?name=Firoz+Jahan&background=F59E0B&color=fff&size=200",
    "skills": [
      "Research",
      "Public Speaking",
      "Monitoring"
    ],
    "email": "firoz.jahan34@scriptysphere.org",
    "phone": "+880 1874274944",
    "joinedDate": "2024-07-01",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1196,
    "name": "Farhana Amin",
    "role": "Finance Officer",
    "division": "Chattogram",
    "district": "Comilla",
    "photo": "https://ui-avatars.com/api/?name=Farhana+Amin&background=06B6D4&color=fff&size=200",
    "skills": [
      "Photography",
      "Content Creation",
      "Training"
    ],
    "email": "farhana.amin411@scriptysphere.org",
    "phone": "+880 1664553792",
    "joinedDate": "2025-05-27",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1197,
    "name": "Ehsan Roy",
    "role": "Designer",
    "division": "Dhaka",
    "district": "Narayanganj",
    "photo": "https://ui-avatars.com/api/?name=Ehsan+Roy&background=10B981&color=fff&size=200",
    "skills": [
      "Logistics",
      "Research",
      "Community Building"
    ],
    "email": "ehsan.roy614@scriptysphere.org",
    "phone": "+880 1456525041",
    "joinedDate": "2023-04-05",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1198,
    "name": "Dipu Khanam",
    "role": "Trainer",
    "division": "Rangpur",
    "district": "Dinajpur",
    "photo": "https://ui-avatars.com/api/?name=Dipu+Khanam&background=10B981&color=fff&size=200",
    "skills": [
      "Public Speaking",
      "Advocacy",
      "Content Creation"
    ],
    "email": "dipu.khanam653@scriptysphere.org",
    "phone": "+880 1830398120",
    "joinedDate": "2025-02-11",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1199,
    "name": "Tania Basu",
    "role": "Outreach Officer",
    "division": "Barishal",
    "district": "Barishal",
    "photo": "https://ui-avatars.com/api/?name=Tania+Basu&background=10B981&color=fff&size=200",
    "skills": [
      "Advocacy",
      "Monitoring",
      "Public Speaking"
    ],
    "email": "tania.basu409@scriptysphere.org",
    "phone": "+880 1897853181",
    "joinedDate": "2020-03-08",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1200,
    "name": "Vishal Hasan",
    "role": "Volunteer",
    "division": "Barishal",
    "district": "Bhola",
    "photo": "https://ui-avatars.com/api/?name=Vishal+Hasan&background=10B981&color=fff&size=200",
    "skills": [
      "Leadership",
      "Logistics",
      "Community Building"
    ],
    "email": "vishal.hasan271@scriptysphere.org",
    "phone": "+880 1887552251",
    "joinedDate": "2020-12-16",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1201,
    "name": "Dihan Hossain",
    "role": "Outreach Officer",
    "division": "Khulna",
    "district": "Bagerhat",
    "photo": "https://ui-avatars.com/api/?name=Dihan+Hossain&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Photography",
      "Community Building",
      "Data Analysis"
    ],
    "email": "dihan.hossain400@scriptysphere.org",
    "phone": "+880 1832123497",
    "joinedDate": "2024-03-21",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1202,
    "name": "Abir Sultana",
    "role": "Logistics Officer",
    "division": "Rajshahi",
    "district": "Bogra",
    "photo": "https://ui-avatars.com/api/?name=Abir+Sultana&background=06B6D4&color=fff&size=200",
    "skills": [
      "Coordination",
      "Project Management",
      "Leadership"
    ],
    "email": "abir.sultana672@scriptysphere.org",
    "phone": "+880 1659831348",
    "joinedDate": "2024-09-13",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1203,
    "name": "Abir Hossain",
    "role": "Outreach Officer",
    "division": "Rangpur",
    "district": "Thakurgaon",
    "photo": "https://ui-avatars.com/api/?name=Abir+Hossain&background=10B981&color=fff&size=200",
    "skills": [
      "Social Media",
      "AI/ML",
      "Content Creation"
    ],
    "email": "abir.hossain391@scriptysphere.org",
    "phone": "+880 1641271471",
    "joinedDate": "2021-01-13",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1204,
    "name": "Wahid Rashid",
    "role": "Admin",
    "division": "Chattogram",
    "district": "Cox's Bazar",
    "photo": "https://ui-avatars.com/api/?name=Wahid+Rashid&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Leadership",
      "Communication",
      "AI/ML"
    ],
    "email": "wahid.rashid883@scriptysphere.org",
    "phone": "+880 1997227192",
    "joinedDate": "2019-11-20",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1205,
    "name": "Wahid Khan",
    "role": "Designer",
    "division": "Barishal",
    "district": "Bhola",
    "photo": "https://ui-avatars.com/api/?name=Wahid+Khan&background=10B981&color=fff&size=200",
    "skills": [
      "Public Speaking",
      "Project Management",
      "Community Building"
    ],
    "email": "wahid.khan218@scriptysphere.org",
    "phone": "+880 1349168282",
    "joinedDate": "2021-09-18",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1206,
    "name": "Jannat Chowdhury",
    "role": "Monitoring Officer",
    "division": "Barishal",
    "district": "Bhola",
    "photo": "https://ui-avatars.com/api/?name=Jannat+Chowdhury&background=06B6D4&color=fff&size=200",
    "skills": [
      "Data Analysis",
      "Advocacy",
      "Community Building"
    ],
    "email": "jannat.chowdhury211@scriptysphere.org",
    "phone": "+880 1543963170",
    "joinedDate": "2022-05-15",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1207,
    "name": "Gulshan Bhuiyan",
    "role": "Monitoring Officer",
    "division": "Barishal",
    "district": "Barishal",
    "photo": "https://ui-avatars.com/api/?name=Gulshan+Bhuiyan&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Training",
      "Advocacy",
      "Python"
    ],
    "email": "gulshan.bhuiyan376@scriptysphere.org",
    "phone": "+880 1667947005",
    "joinedDate": "2021-04-19",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1208,
    "name": "Mithun Hasan",
    "role": "Trainer",
    "division": "Chattogram",
    "district": "Comilla",
    "photo": "https://ui-avatars.com/api/?name=Mithun+Hasan&background=F59E0B&color=fff&size=200",
    "skills": [
      "Monitoring",
      "Writing",
      "Social Media"
    ],
    "email": "mithun.hasan497@scriptysphere.org",
    "phone": "+880 1400998600",
    "joinedDate": "2022-08-27",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1209,
    "name": "Imran Rahman",
    "role": "Research Assistant",
    "division": "Rajshahi",
    "district": "Pabna",
    "photo": "https://ui-avatars.com/api/?name=Imran+Rahman&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Data Analysis",
      "Communication",
      "Community Building"
    ],
    "email": "imran.rahman180@scriptysphere.org",
    "phone": "+880 1603478641",
    "joinedDate": "2023-01-04",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1210,
    "name": "Farhana Khan",
    "role": "Trainer",
    "division": "Mymensingh",
    "district": "Netrokona",
    "photo": "https://ui-avatars.com/api/?name=Farhana+Khan&background=10B981&color=fff&size=200",
    "skills": [
      "Project Management",
      "Research",
      "Communication"
    ],
    "email": "farhana.khan503@scriptysphere.org",
    "phone": "+880 1559375451",
    "joinedDate": "2018-08-09",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1211,
    "name": "Jannat Sarker",
    "role": "Trainer",
    "division": "Barishal",
    "district": "Barishal",
    "photo": "https://ui-avatars.com/api/?name=Jannat+Sarker&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Research",
      "Advocacy",
      "Web Development"
    ],
    "email": "jannat.sarker705@scriptysphere.org",
    "phone": "+880 1444573062",
    "joinedDate": "2022-02-20",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1212,
    "name": "Nabila Jahan",
    "role": "Outreach Officer",
    "division": "Rajshahi",
    "district": "Bogra",
    "photo": "https://ui-avatars.com/api/?name=Nabila+Jahan&background=F59E0B&color=fff&size=200",
    "skills": [
      "Coding",
      "Training",
      "Leadership"
    ],
    "email": "nabila.jahan979@scriptysphere.org",
    "phone": "+880 1488240920",
    "joinedDate": "2021-05-26",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1213,
    "name": "Esha Akter",
    "role": "Research Assistant",
    "division": "Dhaka",
    "district": "Faridpur",
    "photo": "https://ui-avatars.com/api/?name=Esha+Akter&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Project Management",
      "Content Creation",
      "Public Speaking"
    ],
    "email": "esha.akter301@scriptysphere.org",
    "phone": "+880 1469097945",
    "joinedDate": "2023-08-11",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1214,
    "name": "Gias Sarker",
    "role": "Field Officer",
    "division": "Rangpur",
    "district": "Rangpur",
    "photo": "https://ui-avatars.com/api/?name=Gias+Sarker&background=10B981&color=fff&size=200",
    "skills": [
      "Photography",
      "AI/ML",
      "Public Speaking"
    ],
    "email": "gias.sarker642@scriptysphere.org",
    "phone": "+880 1539653280",
    "joinedDate": "2022-03-25",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1215,
    "name": "Ehsan Khan",
    "role": "Research Assistant",
    "division": "Chattogram",
    "district": "Feni",
    "photo": "https://ui-avatars.com/api/?name=Ehsan+Khan&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Content Creation",
      "Communication",
      "Research"
    ],
    "email": "ehsan.khan374@scriptysphere.org",
    "phone": "+880 1660241897",
    "joinedDate": "2023-01-14",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1216,
    "name": "Zarin Shah",
    "role": "Monitoring Officer",
    "division": "Dhaka",
    "district": "Faridpur",
    "photo": "https://ui-avatars.com/api/?name=Zarin+Shah&background=06B6D4&color=fff&size=200",
    "skills": [
      "Leadership",
      "AI/ML",
      "Writing"
    ],
    "email": "zarin.shah557@scriptysphere.org",
    "phone": "+880 1483303888",
    "joinedDate": "2021-07-15",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1217,
    "name": "Usman Akter",
    "role": "Outreach Officer",
    "division": "Dhaka",
    "district": "Faridpur",
    "photo": "https://ui-avatars.com/api/?name=Usman+Akter&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Data Analysis",
      "AI/ML",
      "Writing"
    ],
    "email": "usman.akter438@scriptysphere.org",
    "phone": "+880 1796904219",
    "joinedDate": "2021-01-26",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1218,
    "name": "Farhana Amin",
    "role": "Finance Officer",
    "division": "Dhaka",
    "district": "Dhaka",
    "photo": "https://ui-avatars.com/api/?name=Farhana+Amin&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Advocacy",
      "Event Management",
      "Community Building"
    ],
    "email": "farhana.amin484@scriptysphere.org",
    "phone": "+880 1919686151",
    "joinedDate": "2021-12-04",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1219,
    "name": "Arif Mia",
    "role": "Monitoring Officer",
    "division": "Barishal",
    "district": "Bhola",
    "photo": "https://ui-avatars.com/api/?name=Arif+Mia&background=06B6D4&color=fff&size=200",
    "skills": [
      "Mentorship",
      "Content Creation",
      "Monitoring"
    ],
    "email": "arif.mia487@scriptysphere.org",
    "phone": "+880 1357857506",
    "joinedDate": "2025-09-20",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1220,
    "name": "Bappy Akter",
    "role": "Designer",
    "division": "Mymensingh",
    "district": "Netrokona",
    "photo": "https://ui-avatars.com/api/?name=Bappy+Akter&background=06B6D4&color=fff&size=200",
    "skills": [
      "Community Building",
      "Data Analysis",
      "Research"
    ],
    "email": "bappy.akter258@scriptysphere.org",
    "phone": "+880 1457096042",
    "joinedDate": "2024-02-18",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1221,
    "name": "Esha Mia",
    "role": "Designer",
    "division": "Dhaka",
    "district": "Gazipur",
    "photo": "https://ui-avatars.com/api/?name=Esha+Mia&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Communication",
      "Mentorship",
      "Advocacy"
    ],
    "email": "esha.mia721@scriptysphere.org",
    "phone": "+880 1719824593",
    "joinedDate": "2021-12-27",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1222,
    "name": "Ehsan Jahan",
    "role": "Designer",
    "division": "Khulna",
    "district": "Satkhira",
    "photo": "https://ui-avatars.com/api/?name=Ehsan+Jahan&background=06B6D4&color=fff&size=200",
    "skills": [
      "AI/ML",
      "Project Management",
      "Logistics"
    ],
    "email": "ehsan.jahan57@scriptysphere.org",
    "phone": "+880 1680619126",
    "joinedDate": "2020-09-26",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1223,
    "name": "Champa Amin",
    "role": "Logistics Officer",
    "division": "Rangpur",
    "district": "Thakurgaon",
    "photo": "https://ui-avatars.com/api/?name=Champa+Amin&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Design",
      "Logistics",
      "Photography"
    ],
    "email": "champa.amin171@scriptysphere.org",
    "phone": "+880 1920545958",
    "joinedDate": "2018-11-17",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1224,
    "name": "Lima Hasan",
    "role": "Volunteer",
    "division": "Chattogram",
    "district": "Cox's Bazar",
    "photo": "https://ui-avatars.com/api/?name=Lima+Hasan&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Data Analysis",
      "Training",
      "Public Speaking"
    ],
    "email": "lima.hasan396@scriptysphere.org",
    "phone": "+880 1724782232",
    "joinedDate": "2018-03-15",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1225,
    "name": "Firoz Hossain",
    "role": "Field Officer",
    "division": "Chattogram",
    "district": "Chattogram",
    "photo": "https://ui-avatars.com/api/?name=Firoz+Hossain&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Training",
      "Coordination",
      "Social Media"
    ],
    "email": "firoz.hossain167@scriptysphere.org",
    "phone": "+880 1755550095",
    "joinedDate": "2019-01-06",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1226,
    "name": "Abir Amin",
    "role": "Designer",
    "division": "Chattogram",
    "district": "Chattogram",
    "photo": "https://ui-avatars.com/api/?name=Abir+Amin&background=06B6D4&color=fff&size=200",
    "skills": [
      "Python",
      "Web Development",
      "Coding"
    ],
    "email": "abir.amin925@scriptysphere.org",
    "phone": "+880 1399544743",
    "joinedDate": "2020-02-26",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1227,
    "name": "Ehsan Rashid",
    "role": "Field Officer",
    "division": "Sylhet",
    "district": "Sylhet",
    "photo": "https://ui-avatars.com/api/?name=Ehsan+Rashid&background=F59E0B&color=fff&size=200",
    "skills": [
      "Project Management",
      "Photography",
      "Design"
    ],
    "email": "ehsan.rashid752@scriptysphere.org",
    "phone": "+880 1496930326",
    "joinedDate": "2020-01-07",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1228,
    "name": "Abir Bhuiyan",
    "role": "Media Lead",
    "division": "Dhaka",
    "district": "Dhaka",
    "photo": "https://ui-avatars.com/api/?name=Abir+Bhuiyan&background=06B6D4&color=fff&size=200",
    "skills": [
      "Content Creation",
      "Event Management",
      "Social Media"
    ],
    "email": "abir.bhuiyan468@scriptysphere.org",
    "phone": "+880 1675996797",
    "joinedDate": "2023-11-23",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1229,
    "name": "Gulshan Khanam",
    "role": "Admin",
    "division": "Rajshahi",
    "district": "Bogra",
    "photo": "https://ui-avatars.com/api/?name=Gulshan+Khanam&background=F59E0B&color=fff&size=200",
    "skills": [
      "Photography",
      "Writing",
      "Content Creation"
    ],
    "email": "gulshan.khanam120@scriptysphere.org",
    "phone": "+880 1537150080",
    "joinedDate": "2019-03-03",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1230,
    "name": "Firoz Sarker",
    "role": "Field Officer",
    "division": "Barishal",
    "district": "Patuakhali",
    "photo": "https://ui-avatars.com/api/?name=Firoz+Sarker&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Mentorship",
      "Monitoring",
      "Community Building"
    ],
    "email": "firoz.sarker591@scriptysphere.org",
    "phone": "+880 1436679581",
    "joinedDate": "2023-03-12",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1231,
    "name": "Vishal Rahman",
    "role": "Coordinator",
    "division": "Khulna",
    "district": "Khulna",
    "photo": "https://ui-avatars.com/api/?name=Vishal+Rahman&background=10B981&color=fff&size=200",
    "skills": [
      "Writing",
      "Python",
      "Coding"
    ],
    "email": "vishal.rahman644@scriptysphere.org",
    "phone": "+880 1676972192",
    "joinedDate": "2021-08-25",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1232,
    "name": "Yasir Sultana",
    "role": "Field Officer",
    "division": "Rajshahi",
    "district": "Bogra",
    "photo": "https://ui-avatars.com/api/?name=Yasir+Sultana&background=F59E0B&color=fff&size=200",
    "skills": [
      "Leadership",
      "Training",
      "Project Management"
    ],
    "email": "yasir.sultana944@scriptysphere.org",
    "phone": "+880 1487135652",
    "joinedDate": "2024-01-18",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1233,
    "name": "Tania Roy",
    "role": "Logistics Officer",
    "division": "Sylhet",
    "district": "Moulvibazar",
    "photo": "https://ui-avatars.com/api/?name=Tania+Roy&background=06B6D4&color=fff&size=200",
    "skills": [
      "Fundraising",
      "Web Development",
      "Data Analysis"
    ],
    "email": "tania.roy261@scriptysphere.org",
    "phone": "+880 1823360982",
    "joinedDate": "2021-12-01",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1234,
    "name": "Zarin Sarker",
    "role": "Research Assistant",
    "division": "Rajshahi",
    "district": "Naogaon",
    "photo": "https://ui-avatars.com/api/?name=Zarin+Sarker&background=10B981&color=fff&size=200",
    "skills": [
      "Social Media",
      "Photography",
      "Data Analysis"
    ],
    "email": "zarin.sarker89@scriptysphere.org",
    "phone": "+880 1982499061",
    "joinedDate": "2020-05-19",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1235,
    "name": "Dihan Akter",
    "role": "Research Assistant",
    "division": "Mymensingh",
    "district": "Netrokona",
    "photo": "https://ui-avatars.com/api/?name=Dihan+Akter&background=06B6D4&color=fff&size=200",
    "skills": [
      "Coordination",
      "Project Management",
      "Web Development"
    ],
    "email": "dihan.akter478@scriptysphere.org",
    "phone": "+880 1478503108",
    "joinedDate": "2021-12-24",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1236,
    "name": "Lima Rahman",
    "role": "Admin",
    "division": "Rajshahi",
    "district": "Bogra",
    "photo": "https://ui-avatars.com/api/?name=Lima+Rahman&background=F59E0B&color=fff&size=200",
    "skills": [
      "AI/ML",
      "Project Management",
      "Fundraising"
    ],
    "email": "lima.rahman86@scriptysphere.org",
    "phone": "+880 1728037924",
    "joinedDate": "2024-11-17",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1237,
    "name": "Vishal Khan",
    "role": "Logistics Officer",
    "division": "Sylhet",
    "district": "Moulvibazar",
    "photo": "https://ui-avatars.com/api/?name=Vishal+Khan&background=F59E0B&color=fff&size=200",
    "skills": [
      "Project Management",
      "Public Speaking",
      "Content Creation"
    ],
    "email": "vishal.khan475@scriptysphere.org",
    "phone": "+880 1689716306",
    "joinedDate": "2025-04-12",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1238,
    "name": "Bela Hossain",
    "role": "Field Officer",
    "division": "Rajshahi",
    "district": "Rajshahi",
    "photo": "https://ui-avatars.com/api/?name=Bela+Hossain&background=06B6D4&color=fff&size=200",
    "skills": [
      "Monitoring",
      "Writing",
      "Photography"
    ],
    "email": "bela.hossain710@scriptysphere.org",
    "phone": "+880 1944901641",
    "joinedDate": "2022-01-20",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1239,
    "name": "Hasina Khan",
    "role": "Outreach Officer",
    "division": "Mymensingh",
    "district": "Netrokona",
    "photo": "https://ui-avatars.com/api/?name=Hasina+Khan&background=06B6D4&color=fff&size=200",
    "skills": [
      "Content Creation",
      "Project Management",
      "Advocacy"
    ],
    "email": "hasina.khan315@scriptysphere.org",
    "phone": "+880 1570487595",
    "joinedDate": "2022-01-03",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1240,
    "name": "Sabbir Sarker",
    "role": "Data Officer",
    "division": "Sylhet",
    "district": "Sunamganj",
    "photo": "https://ui-avatars.com/api/?name=Sabbir+Sarker&background=F59E0B&color=fff&size=200",
    "skills": [
      "Community Building",
      "Monitoring",
      "Event Management"
    ],
    "email": "sabbir.sarker799@scriptysphere.org",
    "phone": "+880 1816952970",
    "joinedDate": "2019-11-16",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1241,
    "name": "Hasina Rahman",
    "role": "Designer",
    "division": "Rangpur",
    "district": "Rangpur",
    "photo": "https://ui-avatars.com/api/?name=Hasina+Rahman&background=F59E0B&color=fff&size=200",
    "skills": [
      "Communication",
      "Mentorship",
      "Event Management"
    ],
    "email": "hasina.rahman674@scriptysphere.org",
    "phone": "+880 1640734324",
    "joinedDate": "2018-04-19",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1242,
    "name": "Jannat Akter",
    "role": "Field Officer",
    "division": "Mymensingh",
    "district": "Sherpur",
    "photo": "https://ui-avatars.com/api/?name=Jannat+Akter&background=F59E0B&color=fff&size=200",
    "skills": [
      "Photography",
      "Leadership",
      "Logistics"
    ],
    "email": "jannat.akter710@scriptysphere.org",
    "phone": "+880 1919375550",
    "joinedDate": "2025-10-15",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1243,
    "name": "Firoz Sarker",
    "role": "Admin",
    "division": "Dhaka",
    "district": "Gazipur",
    "photo": "https://ui-avatars.com/api/?name=Firoz+Sarker&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Advocacy",
      "Research",
      "Writing"
    ],
    "email": "firoz.sarker895@scriptysphere.org",
    "phone": "+880 1981502123",
    "joinedDate": "2018-10-28",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1244,
    "name": "Orin Khanam",
    "role": "Coordinator",
    "division": "Dhaka",
    "district": "Gazipur",
    "photo": "https://ui-avatars.com/api/?name=Orin+Khanam&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Research",
      "Social Media",
      "Python"
    ],
    "email": "orin.khanam781@scriptysphere.org",
    "phone": "+880 1378994416",
    "joinedDate": "2021-12-23",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1245,
    "name": "Sabbir Amin",
    "role": "Logistics Officer",
    "division": "Khulna",
    "district": "Khulna",
    "photo": "https://ui-avatars.com/api/?name=Sabbir+Amin&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Writing",
      "AI/ML",
      "Web Development"
    ],
    "email": "sabbir.amin327@scriptysphere.org",
    "phone": "+880 1957526710",
    "joinedDate": "2022-06-01",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1246,
    "name": "Mithun Islam",
    "role": "Field Officer",
    "division": "Rangpur",
    "district": "Lalmonirhat",
    "photo": "https://ui-avatars.com/api/?name=Mithun+Islam&background=F59E0B&color=fff&size=200",
    "skills": [
      "Public Speaking",
      "Design",
      "Python"
    ],
    "email": "mithun.islam326@scriptysphere.org",
    "phone": "+880 1813942636",
    "joinedDate": "2025-06-22",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1247,
    "name": "Tania Mia",
    "role": "Media Lead",
    "division": "Sylhet",
    "district": "Habiganj",
    "photo": "https://ui-avatars.com/api/?name=Tania+Mia&background=10B981&color=fff&size=200",
    "skills": [
      "Python",
      "Coding",
      "Communication"
    ],
    "email": "tania.mia567@scriptysphere.org",
    "phone": "+880 1856108124",
    "joinedDate": "2025-10-31",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1248,
    "name": "Hasina Rashid",
    "role": "Finance Officer",
    "division": "Mymensingh",
    "district": "Kishoreganj",
    "photo": "https://ui-avatars.com/api/?name=Hasina+Rashid&background=F59E0B&color=fff&size=200",
    "skills": [
      "Community Building",
      "Design",
      "Web Development"
    ],
    "email": "hasina.rashid764@scriptysphere.org",
    "phone": "+880 1563061798",
    "joinedDate": "2023-02-12",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1249,
    "name": "Gias Islam",
    "role": "Finance Officer",
    "division": "Rangpur",
    "district": "Lalmonirhat",
    "photo": "https://ui-avatars.com/api/?name=Gias+Islam&background=10B981&color=fff&size=200",
    "skills": [
      "Photography",
      "Web Development",
      "Content Creation"
    ],
    "email": "gias.islam69@scriptysphere.org",
    "phone": "+880 1621867649",
    "joinedDate": "2024-11-30",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1250,
    "name": "Farhana Roy",
    "role": "Volunteer",
    "division": "Rangpur",
    "district": "Lalmonirhat",
    "photo": "https://ui-avatars.com/api/?name=Farhana+Roy&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Writing",
      "Coding",
      "Web Development"
    ],
    "email": "farhana.roy308@scriptysphere.org",
    "phone": "+880 1537349023",
    "joinedDate": "2019-03-17",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1251,
    "name": "Wahid Mia",
    "role": "Logistics Officer",
    "division": "Khulna",
    "district": "Khulna",
    "photo": "https://ui-avatars.com/api/?name=Wahid+Mia&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Project Management",
      "Logistics",
      "Monitoring"
    ],
    "email": "wahid.mia403@scriptysphere.org",
    "phone": "+880 1571733771",
    "joinedDate": "2021-09-22",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1252,
    "name": "Celina Sultana",
    "role": "Monitoring Officer",
    "division": "Barishal",
    "district": "Bhola",
    "photo": "https://ui-avatars.com/api/?name=Celina+Sultana&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Mentorship",
      "AI/ML",
      "Coding"
    ],
    "email": "celina.sultana863@scriptysphere.org",
    "phone": "+880 1464823674",
    "joinedDate": "2020-04-09",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1253,
    "name": "Yasir Ahmed",
    "role": "Monitoring Officer",
    "division": "Barishal",
    "district": "Patuakhali",
    "photo": "https://ui-avatars.com/api/?name=Yasir+Ahmed&background=F59E0B&color=fff&size=200",
    "skills": [
      "Training",
      "Community Building",
      "Event Management"
    ],
    "email": "yasir.ahmed688@scriptysphere.org",
    "phone": "+880 1712627703",
    "joinedDate": "2018-11-27",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1254,
    "name": "Lima Rahman",
    "role": "Research Assistant",
    "division": "Mymensingh",
    "district": "Netrokona",
    "photo": "https://ui-avatars.com/api/?name=Lima+Rahman&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Community Building",
      "Coordination",
      "Coding"
    ],
    "email": "lima.rahman416@scriptysphere.org",
    "phone": "+880 1478098979",
    "joinedDate": "2022-04-26",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1255,
    "name": "Dipu Jahan",
    "role": "Research Assistant",
    "division": "Sylhet",
    "district": "Moulvibazar",
    "photo": "https://ui-avatars.com/api/?name=Dipu+Jahan&background=F59E0B&color=fff&size=200",
    "skills": [
      "Writing",
      "Monitoring",
      "Advocacy"
    ],
    "email": "dipu.jahan768@scriptysphere.org",
    "phone": "+880 1930658848",
    "joinedDate": "2025-04-22",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1256,
    "name": "Wahid Khanam",
    "role": "Volunteer",
    "division": "Dhaka",
    "district": "Faridpur",
    "photo": "https://ui-avatars.com/api/?name=Wahid+Khanam&background=06B6D4&color=fff&size=200",
    "skills": [
      "Mentorship",
      "Data Analysis",
      "Social Media"
    ],
    "email": "wahid.khanam236@scriptysphere.org",
    "phone": "+880 1439141756",
    "joinedDate": "2021-11-28",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1257,
    "name": "Gulshan Shah",
    "role": "Media Lead",
    "division": "Rajshahi",
    "district": "Pabna",
    "photo": "https://ui-avatars.com/api/?name=Gulshan+Shah&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Public Speaking",
      "Design",
      "Photography"
    ],
    "email": "gulshan.shah325@scriptysphere.org",
    "phone": "+880 1326729203",
    "joinedDate": "2018-07-26",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1258,
    "name": "Hasina Chowdhury",
    "role": "Research Assistant",
    "division": "Khulna",
    "district": "Jessore",
    "photo": "https://ui-avatars.com/api/?name=Hasina+Chowdhury&background=06B6D4&color=fff&size=200",
    "skills": [
      "Python",
      "Data Analysis",
      "Writing"
    ],
    "email": "hasina.chowdhury756@scriptysphere.org",
    "phone": "+880 1441062315",
    "joinedDate": "2021-07-16",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1259,
    "name": "Bela Islam",
    "role": "Monitoring Officer",
    "division": "Sylhet",
    "district": "Habiganj",
    "photo": "https://ui-avatars.com/api/?name=Bela+Islam&background=10B981&color=fff&size=200",
    "skills": [
      "Photography",
      "Data Analysis",
      "Coordination"
    ],
    "email": "bela.islam270@scriptysphere.org",
    "phone": "+880 1464504780",
    "joinedDate": "2020-02-03",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1260,
    "name": "Esha Sarker",
    "role": "Finance Officer",
    "division": "Sylhet",
    "district": "Sunamganj",
    "photo": "https://ui-avatars.com/api/?name=Esha+Sarker&background=F59E0B&color=fff&size=200",
    "skills": [
      "Community Building",
      "Coding",
      "Event Management"
    ],
    "email": "esha.sarker838@scriptysphere.org",
    "phone": "+880 1405720615",
    "joinedDate": "2025-06-30",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1261,
    "name": "Mithun Rashid",
    "role": "Logistics Officer",
    "division": "Barishal",
    "district": "Barguna",
    "photo": "https://ui-avatars.com/api/?name=Mithun+Rashid&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Fundraising",
      "AI/ML",
      "Research"
    ],
    "email": "mithun.rashid445@scriptysphere.org",
    "phone": "+880 1918069232",
    "joinedDate": "2020-12-02",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1262,
    "name": "Mithun Khan",
    "role": "Volunteer",
    "division": "Rangpur",
    "district": "Thakurgaon",
    "photo": "https://ui-avatars.com/api/?name=Mithun+Khan&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Communication",
      "Web Development",
      "Coding"
    ],
    "email": "mithun.khan525@scriptysphere.org",
    "phone": "+880 1613101111",
    "joinedDate": "2018-05-26",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1263,
    "name": "Dihan Mia",
    "role": "Admin",
    "division": "Rangpur",
    "district": "Dinajpur",
    "photo": "https://ui-avatars.com/api/?name=Dihan+Mia&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Coding",
      "Logistics",
      "Leadership"
    ],
    "email": "dihan.mia35@scriptysphere.org",
    "phone": "+880 1657266022",
    "joinedDate": "2021-12-26",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1264,
    "name": "Bela Ahmed",
    "role": "Designer",
    "division": "Khulna",
    "district": "Satkhira",
    "photo": "https://ui-avatars.com/api/?name=Bela+Ahmed&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Monitoring",
      "Training",
      "Data Analysis"
    ],
    "email": "bela.ahmed502@scriptysphere.org",
    "phone": "+880 1338924529",
    "joinedDate": "2018-08-31",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1265,
    "name": "Bela Rashid",
    "role": "Media Lead",
    "division": "Mymensingh",
    "district": "Netrokona",
    "photo": "https://ui-avatars.com/api/?name=Bela+Rashid&background=F59E0B&color=fff&size=200",
    "skills": [
      "Public Speaking",
      "Social Media",
      "Web Development"
    ],
    "email": "bela.rashid752@scriptysphere.org",
    "phone": "+880 1670547767",
    "joinedDate": "2018-05-31",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1266,
    "name": "Sabbir Ahmed",
    "role": "Volunteer",
    "division": "Mymensingh",
    "district": "Netrokona",
    "photo": "https://ui-avatars.com/api/?name=Sabbir+Ahmed&background=06B6D4&color=fff&size=200",
    "skills": [
      "Training",
      "Photography",
      "Communication"
    ],
    "email": "sabbir.ahmed684@scriptysphere.org",
    "phone": "+880 1381438320",
    "joinedDate": "2024-04-09",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1267,
    "name": "Celina Mia",
    "role": "Designer",
    "division": "Rangpur",
    "district": "Lalmonirhat",
    "photo": "https://ui-avatars.com/api/?name=Celina+Mia&background=06B6D4&color=fff&size=200",
    "skills": [
      "Public Speaking",
      "Python",
      "Writing"
    ],
    "email": "celina.mia233@scriptysphere.org",
    "phone": "+880 1974907641",
    "joinedDate": "2023-10-11",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1268,
    "name": "Zarin Hossain",
    "role": "Coordinator",
    "division": "Barishal",
    "district": "Patuakhali",
    "photo": "https://ui-avatars.com/api/?name=Zarin+Hossain&background=F59E0B&color=fff&size=200",
    "skills": [
      "Social Media",
      "Design",
      "Public Speaking"
    ],
    "email": "zarin.hossain203@scriptysphere.org",
    "phone": "+880 1496791329",
    "joinedDate": "2020-01-19",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1269,
    "name": "Ehsan Islam",
    "role": "Volunteer",
    "division": "Barishal",
    "district": "Barguna",
    "photo": "https://ui-avatars.com/api/?name=Ehsan+Islam&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Logistics",
      "Leadership",
      "Social Media"
    ],
    "email": "ehsan.islam577@scriptysphere.org",
    "phone": "+880 1461781841",
    "joinedDate": "2018-02-06",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1270,
    "name": "Lima Mia",
    "role": "Volunteer",
    "division": "Sylhet",
    "district": "Moulvibazar",
    "photo": "https://ui-avatars.com/api/?name=Lima+Mia&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Mentorship",
      "Leadership",
      "Web Development"
    ],
    "email": "lima.mia594@scriptysphere.org",
    "phone": "+880 1879785340",
    "joinedDate": "2023-09-24",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1271,
    "name": "Firoz Jahan",
    "role": "Designer",
    "division": "Mymensingh",
    "district": "Kishoreganj",
    "photo": "https://ui-avatars.com/api/?name=Firoz+Jahan&background=10B981&color=fff&size=200",
    "skills": [
      "Python",
      "Mentorship",
      "Advocacy"
    ],
    "email": "firoz.jahan743@scriptysphere.org",
    "phone": "+880 1334343548",
    "joinedDate": "2023-03-16",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1272,
    "name": "Bela Akter",
    "role": "Designer",
    "division": "Mymensingh",
    "district": "Netrokona",
    "photo": "https://ui-avatars.com/api/?name=Bela+Akter&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Mentorship",
      "Social Media",
      "Photography"
    ],
    "email": "bela.akter413@scriptysphere.org",
    "phone": "+880 1834212512",
    "joinedDate": "2020-05-14",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1273,
    "name": "Vishal Rahman",
    "role": "Finance Officer",
    "division": "Khulna",
    "district": "Satkhira",
    "photo": "https://ui-avatars.com/api/?name=Vishal+Rahman&background=10B981&color=fff&size=200",
    "skills": [
      "Event Management",
      "Web Development",
      "Data Analysis"
    ],
    "email": "vishal.rahman827@scriptysphere.org",
    "phone": "+880 1911364542",
    "joinedDate": "2025-06-16",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1274,
    "name": "Vishal Amin",
    "role": "Data Officer",
    "division": "Rangpur",
    "district": "Thakurgaon",
    "photo": "https://ui-avatars.com/api/?name=Vishal+Amin&background=10B981&color=fff&size=200",
    "skills": [
      "Coding",
      "Logistics",
      "Research"
    ],
    "email": "vishal.amin28@scriptysphere.org",
    "phone": "+880 1672769096",
    "joinedDate": "2024-11-19",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1275,
    "name": "Parvez Basu",
    "role": "Field Officer",
    "division": "Barishal",
    "district": "Barishal",
    "photo": "https://ui-avatars.com/api/?name=Parvez+Basu&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Research",
      "Public Speaking",
      "Writing"
    ],
    "email": "parvez.basu500@scriptysphere.org",
    "phone": "+880 1879223079",
    "joinedDate": "2025-09-19",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1276,
    "name": "Dihan Hossain",
    "role": "Volunteer",
    "division": "Sylhet",
    "district": "Habiganj",
    "photo": "https://ui-avatars.com/api/?name=Dihan+Hossain&background=06B6D4&color=fff&size=200",
    "skills": [
      "Logistics",
      "AI/ML",
      "Data Analysis"
    ],
    "email": "dihan.hossain958@scriptysphere.org",
    "phone": "+880 1364994971",
    "joinedDate": "2020-11-05",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1277,
    "name": "Imran Rashid",
    "role": "Finance Officer",
    "division": "Rajshahi",
    "district": "Naogaon",
    "photo": "https://ui-avatars.com/api/?name=Imran+Rashid&background=F59E0B&color=fff&size=200",
    "skills": [
      "Communication",
      "Advocacy",
      "Python"
    ],
    "email": "imran.rashid528@scriptysphere.org",
    "phone": "+880 1760815829",
    "joinedDate": "2024-07-27",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1278,
    "name": "Rima Basu",
    "role": "Data Officer",
    "division": "Sylhet",
    "district": "Moulvibazar",
    "photo": "https://ui-avatars.com/api/?name=Rima+Basu&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Research",
      "Coordination",
      "Community Building"
    ],
    "email": "rima.basu447@scriptysphere.org",
    "phone": "+880 1664411939",
    "joinedDate": "2021-05-27",
    "bio": "Skilled communicator with a can-do attitude."
  },
  {
    "id": 1279,
    "name": "Rima Akter",
    "role": "Admin",
    "division": "Chattogram",
    "district": "Comilla",
    "photo": "https://ui-avatars.com/api/?name=Rima+Akter&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Data Analysis",
      "Community Building",
      "Web Development"
    ],
    "email": "rima.akter927@scriptysphere.org",
    "phone": "+880 1815662555",
    "joinedDate": "2022-02-21",
    "bio": "Passionate about community work and youth development."
  },
  {
    "id": 1280,
    "name": "Dihan Hossain",
    "role": "Designer",
    "division": "Rangpur",
    "district": "Rangpur",
    "photo": "https://ui-avatars.com/api/?name=Dihan+Hossain&background=10B981&color=fff&size=200",
    "skills": [
      "Event Management",
      "Photography",
      "Advocacy"
    ],
    "email": "dihan.hossain862@scriptysphere.org",
    "phone": "+880 1500146266",
    "joinedDate": "2018-01-29",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1281,
    "name": "Hasina Akter",
    "role": "Research Assistant",
    "division": "Barishal",
    "district": "Barguna",
    "photo": "https://ui-avatars.com/api/?name=Hasina+Akter&background=06B6D4&color=fff&size=200",
    "skills": [
      "Leadership",
      "Data Analysis",
      "Web Development"
    ],
    "email": "hasina.akter319@scriptysphere.org",
    "phone": "+880 1458065621",
    "joinedDate": "2022-03-18",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1282,
    "name": "Mithun Hossain",
    "role": "Monitoring Officer",
    "division": "Chattogram",
    "district": "Chattogram",
    "photo": "https://ui-avatars.com/api/?name=Mithun+Hossain&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Fundraising",
      "Advocacy",
      "Public Speaking"
    ],
    "email": "mithun.hossain39@scriptysphere.org",
    "phone": "+880 1917763632",
    "joinedDate": "2021-11-10",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1283,
    "name": "Yasir Shah",
    "role": "Outreach Officer",
    "division": "Dhaka",
    "district": "Narayanganj",
    "photo": "https://ui-avatars.com/api/?name=Yasir+Shah&background=10B981&color=fff&size=200",
    "skills": [
      "Communication",
      "Fundraising",
      "AI/ML"
    ],
    "email": "yasir.shah393@scriptysphere.org",
    "phone": "+880 1377558865",
    "joinedDate": "2024-02-01",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1284,
    "name": "Parvez Chowdhury",
    "role": "Designer",
    "division": "Mymensingh",
    "district": "Kishoreganj",
    "photo": "https://ui-avatars.com/api/?name=Parvez+Chowdhury&background=06B6D4&color=fff&size=200",
    "skills": [
      "Event Management",
      "Data Analysis",
      "Advocacy"
    ],
    "email": "parvez.chowdhury30@scriptysphere.org",
    "phone": "+880 1354932538",
    "joinedDate": "2021-05-21",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1285,
    "name": "Vishal Amin",
    "role": "Volunteer",
    "division": "Rajshahi",
    "district": "Pabna",
    "photo": "https://ui-avatars.com/api/?name=Vishal+Amin&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Coding",
      "Data Analysis",
      "Public Speaking"
    ],
    "email": "vishal.amin402@scriptysphere.org",
    "phone": "+880 1483370550",
    "joinedDate": "2023-07-23",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1286,
    "name": "Usman Ahmed",
    "role": "Trainer",
    "division": "Dhaka",
    "district": "Gazipur",
    "photo": "https://ui-avatars.com/api/?name=Usman+Ahmed&background=10B981&color=fff&size=200",
    "skills": [
      "Content Creation",
      "Logistics",
      "Design"
    ],
    "email": "usman.ahmed244@scriptysphere.org",
    "phone": "+880 1656952816",
    "joinedDate": "2018-01-13",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1287,
    "name": "Arif Shah",
    "role": "Monitoring Officer",
    "division": "Chattogram",
    "district": "Chattogram",
    "photo": "https://ui-avatars.com/api/?name=Arif+Shah&background=10B981&color=fff&size=200",
    "skills": [
      "Project Management",
      "Logistics",
      "Training"
    ],
    "email": "arif.shah932@scriptysphere.org",
    "phone": "+880 1615514848",
    "joinedDate": "2018-08-09",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1288,
    "name": "Kamal Bhuiyan",
    "role": "Media Lead",
    "division": "Dhaka",
    "district": "Gazipur",
    "photo": "https://ui-avatars.com/api/?name=Kamal+Bhuiyan&background=10B981&color=fff&size=200",
    "skills": [
      "Coding",
      "Project Management",
      "Community Building"
    ],
    "email": "kamal.bhuiyan638@scriptysphere.org",
    "phone": "+880 1405167710",
    "joinedDate": "2021-11-09",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1289,
    "name": "Rima Sultana",
    "role": "Monitoring Officer",
    "division": "Mymensingh",
    "district": "Mymensingh",
    "photo": "https://ui-avatars.com/api/?name=Rima+Sultana&background=F59E0B&color=fff&size=200",
    "skills": [
      "Social Media",
      "Event Management",
      "Writing"
    ],
    "email": "rima.sultana973@scriptysphere.org",
    "phone": "+880 1802139348",
    "joinedDate": "2019-12-16",
    "bio": "Committed to creating impact through grassroots initiatives."
  },
  {
    "id": 1290,
    "name": "Vishal Rahman",
    "role": "Coordinator",
    "division": "Mymensingh",
    "district": "Kishoreganj",
    "photo": "https://ui-avatars.com/api/?name=Vishal+Rahman&background=06B6D4&color=fff&size=200",
    "skills": [
      "Data Analysis",
      "AI/ML",
      "Training"
    ],
    "email": "vishal.rahman360@scriptysphere.org",
    "phone": "+880 1701615205",
    "joinedDate": "2024-07-13",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1291,
    "name": "Ehsan Bhuiyan",
    "role": "Trainer",
    "division": "Chattogram",
    "district": "Chattogram",
    "photo": "https://ui-avatars.com/api/?name=Ehsan+Bhuiyan&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Design",
      "Leadership",
      "Data Analysis"
    ],
    "email": "ehsan.bhuiyan198@scriptysphere.org",
    "phone": "+880 1307356135",
    "joinedDate": "2025-07-16",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1292,
    "name": "Abir Ahmed",
    "role": "Coordinator",
    "division": "Rajshahi",
    "district": "Bogra",
    "photo": "https://ui-avatars.com/api/?name=Abir+Ahmed&background=F59E0B&color=fff&size=200",
    "skills": [
      "Event Management",
      "Mentorship",
      "Content Creation"
    ],
    "email": "abir.ahmed92@scriptysphere.org",
    "phone": "+880 1459206528",
    "joinedDate": "2018-06-24",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1293,
    "name": "Wahid Amin",
    "role": "Monitoring Officer",
    "division": "Mymensingh",
    "district": "Kishoreganj",
    "photo": "https://ui-avatars.com/api/?name=Wahid+Amin&background=06B6D4&color=fff&size=200",
    "skills": [
      "Project Management",
      "Public Speaking",
      "Training"
    ],
    "email": "wahid.amin967@scriptysphere.org",
    "phone": "+880 1919592943",
    "joinedDate": "2022-01-16",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1294,
    "name": "Vishal Akter",
    "role": "Trainer",
    "division": "Rangpur",
    "district": "Rangpur",
    "photo": "https://ui-avatars.com/api/?name=Vishal+Akter&background=0EA5E9&color=fff&size=200",
    "skills": [
      "Monitoring",
      "Event Management",
      "Python"
    ],
    "email": "vishal.akter305@scriptysphere.org",
    "phone": "+880 1340594261",
    "joinedDate": "2018-02-15",
    "bio": "Focused on building sustainable programmes."
  },
  {
    "id": 1295,
    "name": "Kamal Khanam",
    "role": "Media Lead",
    "division": "Rangpur",
    "district": "Lalmonirhat",
    "photo": "https://ui-avatars.com/api/?name=Kamal+Khanam&background=10B981&color=fff&size=200",
    "skills": [
      "Advocacy",
      "Community Building",
      "AI/ML"
    ],
    "email": "kamal.khanam594@scriptysphere.org",
    "phone": "+880 1392771104",
    "joinedDate": "2019-09-27",
    "bio": "Lifelong learner and problem solver."
  },
  {
    "id": 1296,
    "name": "Mithun Mia",
    "role": "Coordinator",
    "division": "Chattogram",
    "district": "Cox's Bazar",
    "photo": "https://ui-avatars.com/api/?name=Mithun+Mia&background=8B5CF6&color=fff&size=200",
    "skills": [
      "Writing",
      "Monitoring",
      "Content Creation"
    ],
    "email": "mithun.mia968@scriptysphere.org",
    "phone": "+880 1676378546",
    "joinedDate": "2024-09-14",
    "bio": "Enthusiastic volunteer who loves learning new skills."
  },
  {
    "id": 1297,
    "name": "Dihan Shah",
    "role": "Field Officer",
    "division": "Rangpur",
    "district": "Thakurgaon",
    "photo": "https://ui-avatars.com/api/?name=Dihan+Shah&background=06B6D4&color=fff&size=200",
    "skills": [
      "Coding",
      "Python",
      "Leadership"
    ],
    "email": "dihan.shah358@scriptysphere.org",
    "phone": "+880 1332070533",
    "joinedDate": "2020-09-18",
    "bio": "Driven by curiosity and a desire to serve the community."
  },
  {
    "id": 1298,
    "name": "Champa Rashid",
    "role": "Field Officer",
    "division": "Rajshahi",
    "district": "Bogra",
    "photo": "https://ui-avatars.com/api/?name=Champa+Rashid&background=10B981&color=fff&size=200",
    "skills": [
      "Content Creation",
      "Coordination",
      "Photography"
    ],
    "email": "champa.rashid521@scriptysphere.org",
    "phone": "+880 1796199626",
    "joinedDate": "2022-07-27",
    "bio": "Experienced organiser and team player."
  },
  {
    "id": 1299,
    "name": "Ehsan Hossain",
    "role": "Coordinator",
    "division": "Sylhet",
    "district": "Sunamganj",
    "photo": "https://ui-avatars.com/api/?name=Ehsan+Hossain&background=06B6D4&color=fff&size=200",
    "skills": [
      "Public Speaking",
      "Photography",
      "Content Creation"
    ],
    "email": "ehsan.hossain291@scriptysphere.org",
    "phone": "+880 1901708922",
    "joinedDate": "2021-04-17",
    "bio": "Skilled communicator with a can-do attitude."
  }
];

// ========== STATE MANAGEMENT ==========
let currentView = 'all';
let currentDivision = null;
let currentDistrict = null;
let displayedMembers = 12;
let filteredMembers = [...membersData];

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initAOS();
  initCountUp();
  initTabs();
  initSearch();
  initSort();
  loadAllMembers();
  loadDivisions();
  loadAllDistricts();
  initModal();
  
  // SEO: Update page title dynamically
  updatePageTitle();
});

// ========== SCROLL PROGRESS ==========
function initScrollProgress() {
  const progress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / height) * 100;
    progress.style.width = `${scrolled}%`;
  }, { passive: true });
}

// ========== AOS (ANIMATE ON SCROLL) ==========
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: true,
      offset: 100
    });
  }
}

// ========== COUNTUP ANIMATIONS ==========
function initCountUp() {
  const counters = document.querySelectorAll('[data-count]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        const target = entry.target;
        const end = parseInt(target.getAttribute('data-count'));
        animateCount(target, 0, end, 2000);
        target.classList.add('counted');
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => observer.observe(counter));
}

function animateCount(element, start, end, duration) {
  const increment = (end - start) / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= end) {
      element.textContent = end;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// ========== TAB FUNCTIONALITY ==========
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      
      // Update active tab
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      
      // Switch views
      switchView(category);
    });
  });
}

function switchView(view) {
  currentView = view;
  const sections = document.querySelectorAll('.content-section');
  
  sections.forEach(section => section.classList.remove('active'));
  
  switch(view) {
    case 'all':
      document.getElementById('allMembersSection').classList.add('active');
      loadAllMembers();
      break;
    case 'divisions':
      document.getElementById('divisionsSection').classList.add('active');
      showDivisionsView();
      break;
    case 'districts':
      document.getElementById('districtsSection').classList.add('active');
      break;
  }
  
  // SEO: Update page title
  updatePageTitle();
}

// ========== SEARCH FUNCTIONALITY ==========
function initSearch() {
  const searchInput = document.getElementById('memberSearch');
  let debounceTimer;
  
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = e.target.value.toLowerCase().trim();
      filterMembers(query);
    }, 300);
  });
}

function filterMembers(query) {
  if (!query) {
    filteredMembers = [...membersData];
  } else {
    filteredMembers = membersData.filter(member => 
      member.name.toLowerCase().includes(query) ||
      member.role.toLowerCase().includes(query) ||
      member.skills.some(skill => skill.toLowerCase().includes(query)) ||
      member.division.toLowerCase().includes(query) ||
      member.district.toLowerCase().includes(query)
    );
  }
  
  displayedMembers = 12;
  loadAllMembers();
}

// ========== SORT FUNCTIONALITY ==========
function initSort() {
  const sortSelect = document.getElementById('sortSelect');
  
  sortSelect.addEventListener('change', (e) => {
    const sortType = e.target.value;
    sortMembers(sortType);
  });
}

function sortMembers(type) {
  switch(type) {
    case 'name-asc':
      filteredMembers.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      filteredMembers.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'date-new':
      filteredMembers.sort((a, b) => new Date(b.joinedDate) - new Date(a.joinedDate));
      break;
    case 'date-old':
      filteredMembers.sort((a, b) => new Date(a.joinedDate) - new Date(b.joinedDate));
      break;
    case 'role':
      filteredMembers.sort((a, b) => a.role.localeCompare(b.role));
      break;
  }
  
  loadAllMembers();
}

// ========== LOAD ALL MEMBERS ==========
function loadAllMembers() {
  const grid = document.getElementById('membersGrid');
  const noResults = document.getElementById('noResults');
  const memberCount = document.getElementById('memberCount');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const loadMoreWrapper = document.getElementById('loadMoreWrapper');
  
  grid.innerHTML = '';
  
  if (filteredMembers.length === 0) {
    noResults.style.display = 'block';
    loadMoreWrapper.style.display = 'none';
    memberCount.textContent = '0';
    return;
  }
  
  noResults.style.display = 'none';
  memberCount.textContent = filteredMembers.length;
  
  const membersToShow = filteredMembers.slice(0, displayedMembers);
  
  membersToShow.forEach((member, index) => {
    const card = createMemberCard(member, index);
    grid.appendChild(card);
  });
  
  // Show/hide load more button
  if (displayedMembers < filteredMembers.length) {
    loadMoreWrapper.style.display = 'block';
  } else {
    loadMoreWrapper.style.display = 'none';
  }
  
  // Load more functionality
  loadMoreBtn.onclick = () => {
    displayedMembers += 12;
    loadAllMembers();
  };
}

// ========== CREATE MEMBER CARD ==========
function createMemberCard(member, index) {
  const card = document.createElement('div');
  card.className = 'member-card';
  card.setAttribute('data-aos', 'fade-up');
  card.setAttribute('data-aos-delay', (index % 3) * 100);
  
  card.innerHTML = `
    <div class="member-card-header">
      <div class="member-avatar-wrapper">
        <img 
          src="${member.photo}" 
          alt="${member.name} - ${member.role} at ScriptySphere" 
          class="member-avatar"
          loading="lazy"
        >
      </div>
    </div>
    <div class="member-card-body">
      <h3 class="member-name">${member.name}</h3>
      <p class="member-role">${member.role}</p>
      <div class="member-location">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <span>${member.district}, ${member.division}</span>
      </div>
      <div class="member-skills">
        ${member.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
      <div class="member-actions">
        <button class="btn-action" onclick="openMemberModal(${member.id})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 16v-4M12 8h.01"/>
          </svg>
          View Details
        </button>
        <button class="btn-action btn-share" onclick="shareMember(${member.id})">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="18" cy="5" r="3"/>
            <circle cx="6" cy="12" r="3"/>
            <circle cx="18" cy="19" r="3"/>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
          </svg>
        </button>
      </div>
    </div>
  `;
  
  return card;
}

// ========== LOAD DIVISIONS ==========
function loadDivisions() {
  const grid = document.getElementById('divisionsGrid');
  grid.innerHTML = '';
  
  Object.keys(divisionsData).forEach((divisionName, index) => {
    const division = divisionsData[divisionName];
    const memberCount = membersData.filter(m => m.division === divisionName).length;
    
    const card = document.createElement('div');
    card.className = 'division-card';
    card.setAttribute('data-aos', 'zoom-in');
    card.setAttribute('data-aos-delay', index * 50);
    
    card.innerHTML = `
      <div class="division-icon">${division.icon}</div>
      <h3 class="division-name">${divisionName}</h3>
      <div class="division-stats">
        <span class="stat-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
          </svg>
          ${memberCount} Members
        </span>
        <span class="stat-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          </svg>
          ${division.districts.length} Districts
        </span>
      </div>
    `;
    
    card.onclick = () => selectDivision(divisionName);
    grid.appendChild(card);
  });
}

// ========== SELECT DIVISION ==========
function selectDivision(divisionName) {
  currentDivision = divisionName;
  const division = divisionsData[divisionName];
  
  // Hide divisions grid
  document.getElementById('divisionsGrid').style.display = 'none';
  
  // Show back button
  document.getElementById('backToDivisions').style.display = 'inline-flex';
  document.getElementById('divisionTitle').textContent = `Districts in ${divisionName}`;
  
  // Load districts
  const districtsGrid = document.getElementById('districtsGrid');
  districtsGrid.style.display = 'grid';
  districtsGrid.innerHTML = '';
  
  division.districts.forEach((districtName, index) => {
    const memberCount = membersData.filter(m => 
      m.division === divisionName && m.district === districtName
    ).length;
    
    const card = document.createElement('div');
    card.className = 'district-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', index * 30);
    
    card.innerHTML = `
      <div class="district-icon">📍</div>
      <h4 class="district-name">${districtName}</h4>
      <div class="district-stats">
        <span class="stat-badge">
          ${memberCount} ${memberCount === 1 ? 'Member' : 'Members'}
        </span>
      </div>
    `;
    
    card.onclick = () => selectDistrict(divisionName, districtName);
    districtsGrid.appendChild(card);
  });
  
  // Back button functionality
  document.getElementById('backToDivisions').onclick = showDivisionsView;
}

// ========== SELECT DISTRICT ==========
function selectDistrict(divisionName, districtName) {
  currentDistrict = districtName;
  
  const members = membersData.filter(m => 
    m.division === divisionName && m.district === districtName
  );
  
  // Hide districts grid
  document.getElementById('districtsGrid').style.display = 'none';
  
  // Update title
  document.getElementById('divisionTitle').textContent = `Members from ${districtName}, ${divisionName}`;
  
  if (members.length === 0) {
    // Show empty state
    const emptyState = document.getElementById('emptyDivision');
    emptyState.style.display = 'block';
    document.getElementById('emptyMessage').textContent = 
      `No members yet from ${districtName}. Join ScriptySphere and become the first member from this district!`;
  } else {
    // Show members
    const membersGrid = document.getElementById('divisionMembersGrid');
    membersGrid.style.display = 'grid';
    membersGrid.innerHTML = '';
    
    members.forEach((member, index) => {
      const card = createMemberCard(member, index);
      membersGrid.appendChild(card);
    });
  }
}

// ========== SHOW DIVISIONS VIEW ==========
function showDivisionsView() {
  document.getElementById('divisionsGrid').style.display = 'grid';
  document.getElementById('districtsGrid').style.display = 'none';
  document.getElementById('divisionMembersGrid').style.display = 'none';
  document.getElementById('emptyDivision').style.display = 'none';
  document.getElementById('backToDivisions').style.display = 'none';
  document.getElementById('divisionTitle').textContent = 'Divisions of Bangladesh';
  
  currentDivision = null;
  currentDistrict = null;
}

// ========== LOAD ALL DISTRICTS ==========
function loadAllDistricts() {
  const grid = document.getElementById('allDistrictsGrid');
  grid.innerHTML = '';
  
  let allDistricts = [];
  Object.keys(divisionsData).forEach(divisionName => {
    divisionsData[divisionName].districts.forEach(districtName => {
      allDistricts.push({ division: divisionName, district: districtName });
    });
  });
  
  allDistricts.forEach((item, index) => {
    const memberCount = membersData.filter(m => 
      m.division === item.division && m.district === item.district
    ).length;
    
    const card = document.createElement('div');
    card.className = 'district-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index % 8) * 20);
    
    card.innerHTML = `
      <div class="district-icon">📍</div>
      <h4 class="district-name">${item.district}</h4>
      <p style="font-size: 0.875rem; color: var(--gray-600); margin-bottom: var(--space-sm);">${item.division} Division</p>
      <div class="district-stats">
        <span class="stat-badge">
          ${memberCount} ${memberCount === 1 ? 'Member' : 'Members'}
        </span>
      </div>
    `;
    
    card.onclick = () => selectDistrict(item.division, item.district);
    grid.appendChild(card);
  });
}

// ========== MODAL FUNCTIONALITY ==========
function initModal() {
  const modal = document.getElementById('memberModal');
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');
  
  closeBtn.onclick = closeModal;
  overlay.onclick = closeModal;
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

function openMemberModal(memberId) {
  const member = membersData.find(m => m.id === memberId);
  if (!member) return;
  
  const modal = document.getElementById('memberModal');
  const modalBody = modal.querySelector('.modal-body');
  
  modalBody.innerHTML = `
    <div class="modal-member-header">
      <img 
        src="${member.photo}" 
        alt="${member.name} - ${member.role}" 
        class="modal-member-avatar"
        loading="lazy"
      >
      <h2 class="modal-member-name">${member.name}</h2>
      <p class="modal-member-role">${member.role}</p>
    </div>
    
    <div class="modal-member-info">
      <div class="info-row">
        <div class="info-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
        <div class="info-content">
          <div class="info-label">Location</div>
          <div class="info-value">${member.district}, ${member.division}</div>
        </div>
      </div>
      
      <div class="info-row">
        <div class="info-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </div>
        <div class="info-content">
          <div class="info-label">Email</div>
          <div class="info-value">${member.email}</div>
        </div>
      </div>
      
      <div class="info-row">
        <div class="info-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </div>
        <div class="info-content">
          <div class="info-label">Phone</div>
          <div class="info-value">${member.phone}</div>
        </div>
      </div>
      
      <div class="info-row">
        <div class="info-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        </div>
        <div class="info-content">
          <div class="info-label">Joined</div>
          <div class="info-value">${new Date(member.joinedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
        </div>
      </div>
      
      <div class="info-row">
        <div class="info-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 20v-6M6 20V10M18 20V4"/>
          </svg>
        </div>
        <div class="info-content">
          <div class="info-label">Skills</div>
          <div class="info-value">${member.skills.join(', ')}</div>
        </div>
      </div>
    </div>
    
    ${member.bio ? `<p style="color: var(--gray-600); line-height: 1.8; margin-bottom: var(--space-xl);">${member.bio}</p>` : ''}
    
    <div class="modal-member-actions">
      <button class="btn-action" onclick="window.location.href='mailto:${member.email}'">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        Send Email
      </button>
      <button class="btn-action btn-share" onclick="shareMember(${member.id})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
        Share Profile
      </button>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // SEO: Update page title
  document.title = `${member.name} - ${member.role} | ScriptySphere Members`;
}

function closeModal() {
  const modal = document.getElementById('memberModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
  
  // SEO: Restore original title
  updatePageTitle();
}

// ========== SHARE MEMBER ==========
function shareMember(memberId) {
  const member = membersData.find(m => m.id === memberId);
  if (!member) return;
  
  // Create shareable URL
  const baseUrl = window.location.origin + window.location.pathname;
  const shareUrl = `${baseUrl}?member=${memberId}`;
  
  // Try to use Web Share API
  if (navigator.share) {
    navigator.share({
      title: `${member.name} - ${member.role}`,
      text: `Check out ${member.name}'s profile on ScriptySphere!`,
      url: shareUrl
    }).catch(err => {
      console.log('Share cancelled:', err);
    });
  } else {
    // Fallback: Copy to clipboard
    copyToClipboard(shareUrl);
  }
}

function copyToClipboard(text) {
  // Create temporary input
  const input = document.createElement('input');
  input.value = text;
  document.body.appendChild(input);
  input.select();
  
  try {
    document.execCommand('copy');
    showToast();
  } catch (err) {
    console.error('Failed to copy:', err);
  }
  
  document.body.removeChild(input);
}

function showToast() {
  const toast = document.getElementById('shareToast');
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ========== CHECK URL PARAMETERS ==========
function checkUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const memberId = params.get('member');
  
  if (memberId) {
    const id = parseInt(memberId);
    const member = membersData.find(m => m.id === id);
    
    if (member) {
      // Open modal for shared member
      setTimeout(() => {
        openMemberModal(id);
      }, 500);
    }
  }
}

// Check URL params on load
checkUrlParams();

// ========== SEO: UPDATE PAGE TITLE ==========
function updatePageTitle() {
  let title = 'Members Directory - ScriptySphere';
  
  switch(currentView) {
    case 'all':
      title = `All Members (${membersData.length}) - ScriptySphere`;
      break;
    case 'divisions':
      if (currentDivision && currentDistrict) {
        title = `Members from ${currentDistrict}, ${currentDivision} - ScriptySphere`;
      } else if (currentDivision) {
        title = `Members from ${currentDivision} Division - ScriptySphere`;
      } else {
        title = 'Members by Division - ScriptySphere';
      }
      break;
    case 'districts':
      title = 'Members by District (64 Districts) - ScriptySphere';
      break;
  }
  
  document.title = title;
  
  // Update meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', `Browse ${membersData.length}+ ScriptySphere members from across Bangladesh. ${title}`);
  }
}

// ========== PERFORMANCE: LAZY LOAD IMAGES ==========
document.addEventListener('DOMContentLoaded', () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });
    
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
  }
});

// ========== ANALYTICS: TRACK PAGE VIEWS ==========
function trackPageView(view) {
  // Google Analytics integration
  if (typeof gtag !== 'undefined') {
    gtag('event', 'page_view', {
      page_title: document.title,
      page_path: window.location.pathname + window.location.search,
      view_type: view
    });
  }
  
  // Console log for debugging
  console.log(`Page View: ${view}`, {
    title: document.title,
    members: membersData.length
  });
}

// Track initial view
trackPageView('initial_load');

// ========== KEYBOARD NAVIGATION ==========
document.addEventListener('keydown', (e) => {
  // Escape key to close modal
  if (e.key === 'Escape') {
    const modal = document.getElementById('memberModal');
    if (modal.classList.contains('active')) {
      closeModal();
    }
  }
  
  // Ctrl/Cmd + K for search focus
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    document.getElementById('memberSearch').focus();
  }
});

// ========== EXPORT FUNCTIONS FOR GLOBAL ACCESS ==========
window.openMemberModal = openMemberModal;
window.shareMember = shareMember;
window.selectDivision = selectDivision;
window.selectDistrict = selectDistrict;

// ========== PERFORMANCE MONITORING ==========
window.addEventListener('load', () => {
  if (window.performance) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Page Load Time: ${pageLoadTime}ms`);
  }
});

// ========== ERROR HANDLING ==========
window.addEventListener('error', (e) => {
  console.error('JavaScript Error:', e.error);
});

// ========== PWA: SERVICE WORKER ==========
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registered:', registration);
      })
      .catch(err => {
        console.log('ServiceWorker registration failed:', err);
      });
  });
}

// ========== CONSOLE BRANDING ==========
console.log(
  '%cScriptySphere Members Directory',
  'color: #0EA5E9; font-size: 24px; font-weight: bold;'
);
console.log(
  '%c300+ Youth Innovators Across Bangladesh',
  'color: #06B6D4; font-size: 14px;'
);
console.log(
  '%cBuilt with ❤️ by ScriptySphere Team',
  'color: #10B981; font-size: 12px;'
);

// ========== EXPORT MODULE ==========
export {
  divisionsData,
  membersData,
  openMemberModal,
  shareMember,
  selectDivision,
  selectDistrict,
  updatePageTitle
};
