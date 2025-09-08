const sampleData = {
  protests: [
    {
      title: "March for Justice - City Center",
      description:
        "Join us for a peaceful march demanding justice and accountability. We will gather at the city center and march to the government building.",
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      location: "City Center Plaza, Main Street",
      guidelines:
        "Please bring water, wear comfortable shoes, and follow all safety guidelines. Stay peaceful and respectful.",
      status: "upcoming",
      publishedAt: new Date(),
    },
    {
      title: "Silent Vigil for Change",
      description:
        "A peaceful silent vigil to honor those affected and demand systemic change.",
      date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
      location: "Memorial Park",
      guidelines:
        "Please maintain silence during the vigil. Bring candles and wear black clothing.",
      status: "upcoming",
      publishedAt: new Date(),
    },
  ],
  agendas: [
    {
      title: "End Police Brutality",
      description:
        "We demand an end to police brutality and the implementation of comprehensive police reform measures including mandatory body cameras, de-escalation training, and independent oversight boards.",
      icon: "🛡️",
      priority: 1,
      publishedAt: new Date(),
    },
    {
      title: "Economic Justice",
      description:
        "We demand fair wages, affordable housing, and economic policies that support working families and reduce income inequality.",
      icon: "💰",
      priority: 2,
      publishedAt: new Date(),
    },
    {
      title: "Healthcare for All",
      description:
        "We demand universal healthcare coverage and the elimination of barriers to essential medical services for all citizens.",
      icon: "🏥",
      priority: 3,
      publishedAt: new Date(),
    },
    {
      title: "Environmental Protection",
      description:
        "We demand immediate action on climate change, environmental protection, and sustainable development policies.",
      icon: "🌍",
      priority: 4,
      publishedAt: new Date(),
    },
  ],
  updates: [
    {
      message:
        "The movement is growing stronger every day. Thank you to all who participated in yesterday's peaceful demonstration.",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      urgent: false,
      publishedAt: new Date(),
    },
    {
      message:
        "URGENT: New protest location announced due to weather conditions. Check the protests page for updated information.",
      timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
      urgent: true,
      publishedAt: new Date(),
    },
    {
      message:
        "We have reached 10,000 supporters! Your voices are being heard. Keep sharing and spreading awareness.",
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      urgent: false,
      publishedAt: new Date(),
    },
  ],
  safety: [
    {
      title: "Digital Security Basics",
      content:
        "Protect your digital privacy by using strong passwords, enabling two-factor authentication, and being cautious about sharing personal information online. Use encrypted messaging apps and avoid public Wi-Fi for sensitive communications.",
      tags: ["privacy", "encryption", "mobile"],
      publishedAt: new Date(),
    },
    {
      title: "Protest Safety Guidelines",
      content:
        "When participating in protests, stay aware of your surroundings, have an exit plan, and bring essential items like water, snacks, and a first aid kit. Document incidents but prioritize your safety.",
      tags: ["mobile", "network"],
      publishedAt: new Date(),
    },
    {
      title: "Secure Communication",
      content:
        "Use end-to-end encrypted messaging apps like Signal or WhatsApp for sensitive communications. Avoid discussing protest plans on public social media platforms.",
      tags: ["encryption", "privacy"],
      publishedAt: new Date(),
    },
  ],
  press: [
    {
      title: "Movement Reaches 10,000 Supporters Milestone",
      date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
      content:
        "The movement has reached a significant milestone with over 10,000 supporters joining our cause for justice and equality. This growing support demonstrates the widespread demand for systemic change in our society.",
      publishedAt: new Date(),
    },
    {
      title: "Peaceful Demonstrations Continue Across the City",
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      content:
        "Peaceful demonstrations continue across the city as citizens demand accountability and reform. The movement remains committed to non-violent protest and constructive dialogue with authorities.",
      publishedAt: new Date(),
    },
  ],
};

module.exports = sampleData;
