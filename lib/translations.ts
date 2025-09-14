export type Language = "en" | "ru" | "uz"

export interface Translations {
  nav: {
    home: string
    about: string
    services: string
    clients: string
    team: string
    process: string
    rates: string
    order: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
    trustBadge: string
    yearsExperience: string
    clientsSatisfied: string
    projectsCompleted: string
    badge: string
  }
  stats: {
    clientsServed: string
    yearsExperience: string
    clientSatisfaction: string
    supportAvailable: string
  }
  benefits: {
    certifiedAuditors: string
    financialAnalysis: string
    compliance: string
    customSolutions: string
    multilingualSupport: string
    competitivePricing: string
  }
  whyChoose: {
    title: string
    subtitle: string
    learnMore: string
  }
  features: {
    enterprise: string
    enterpriseDesc: string
    expertTeam: string
    expertTeamDesc: string
    dataAnalytics: string
    dataAnalyticsDesc: string
    qualityAssurance: string
    qualityAssuranceDesc: string
  }
  cta: {
    title: string
    subtitle: string
    consultation: string
    viewRates: string
  }
  about: {
    title: string
    description: string
    mission: string
    missionText: string
    vision: string
    visionText: string
    values: string
    valuesText: string
    whyChooseUs?: string
    whyChooseUsText?: string
    expertise: string
    expertiseText: string
    reliability?: string
    reliabilityText?: string
    innovation?: string
    innovationText?: string
    integrity: string
    integrityText: string
    partnership: string
    partnershipText: string
    excellence: string
    excellenceText: string
    journey: string
    journeyText: string
    founded: string
    foundedText: string
    expansion?: string
    expansionText?: string
    recognition?: string
    recognitionText?: string
    transformation?: string
    transformationText?: string
    leadership?: string
    leadershipText?: string
    license: string
    licenseText: string
    capital: string
    capitalText: string
    insurance: string
    insuranceText: string
    management: string
    managementText: string
  }
  services: {
    title: string
    subtitle: string
    audit: string
    auditDesc: string
    auditFeatures: string[]
    consulting: string
    consultingDesc: string
    consultingFeatures: string[]
    tax: string
    taxDesc: string
    taxFeatures: string[]
    accounting: string
    accountingDesc: string
    accountingFeatures: string[]
    financial: string
    financialDesc: string
    financialFeatures: string[]
    compliance: string
    complianceDesc: string
    complianceFeatures: string[]
    additionalServicesTitle: string
    additionalServicesSubtitle: string
    dueDiligence: string
    dueDiligenceDesc: string
    forensicAccounting: string
    forensicAccountingDesc: string
    ifrsImplementation: string
    ifrsImplementationDesc: string
    trainingWorkshops: string
    trainingWorkshopsDesc: string
    processTitle: string
    processSubtitle: string
    step1Title: string
    step1Desc: string
    step2Title: string
    step2Desc: string
    step3Title: string
    step3Desc: string
    step4Title: string
    step4Desc: string
    getStarted: string
    whatsIncluded: string
    startingFrom: string
  }
  clients: {
    title: string
    subtitle: string
    smallBusiness: string
    smallBusinessDesc: string
    mediumBusiness: string
    mediumBusinessDesc: string
    largeCorporations: string
    largeCorporationsDesc: string
    startups: string
    startupsDesc: string
    nonprofits: string
    nonprofitsDesc: string
    individuals: string
    individualsDesc: string
    industries: string
    industriesTitle: string
    manufacturing: string
    retail: string
    technology: string
    healthcare: string
    construction: string
    hospitality: string
    transportCompanies: string
    itCompanies: string
    production: string
    wholesaleCompanies: string
    clinics: string
    cafesRestaurants: string
  }
  team: {
    title: string
    subtitle: string
    director: string
    auditor: string
    education: string
    directorDesc: string
    auditorDesc: string
    ceo?: string
    ceoRole?: string
    ceoDesc?: string
    cfoRole?: string
    cfoDesc?: string
    seniorAuditorRole?: string
    seniorAuditorDesc?: string
    taxSpecialistRole?: string
    taxSpecialistDesc?: string
    consultantRole?: string
    consultantDesc?: string
    accountantRole?: string
    accountantDesc?: string
    joinTeam: string
    joinTeamDesc: string
  }
  process: {
    title: string
    subtitle: string
    step1Title: string
    step1Desc: string
    step2Title: string
    step2Desc: string
    step3Title: string
    step3Desc: string
    stepsTitle: string
    stepsSubtitle: string
    featuresTitle: string
    featuresSubtitle: string
    feature1Title: string
    feature1Desc: string
    feature2Title: string
    feature2Desc: string
    feature3Title: string
    feature3Desc: string
  }
  rates: {
    title: string
    subtitle: string
    basic: string
    basicPrice: string
    basicDesc: string
    basicFeatures: string[]
    professional: string
    professionalPrice: string
    professionalDesc: string
    professionalFeatures: string[]
    enterprise: string
    enterprisePrice: string
    enterpriseDesc: string
    enterpriseFeatures: string[]
    custom: string
    customDesc: string
    consultation: string
    consultationDesc: string
    hourlyRate: string
    hourlyRateDesc: string
    getQuote: string
    popular: string
    contactForPricing: string
  }
  order: {
    title: string
    getStarted: string
    heroDesc: string
    requestQuote: string
    quoteDesc: string
    personalInfo: string
    firstName: string
    lastName: string
    email: string
    phone: string
    companyInfo: string
    companyName: string
    position: string
    industry: string
    selectIndustry: string
    projectInfo: string
    serviceType: string
    selectService: string
    projectDescription: string
    projectDescPlaceholder: string
    timeline: string
    selectTimeline: string
    budget: string
    selectBudget: string
    additionalServices: string
    contactPreferences: string
    preferredContact: string
    emailContact: string
    phoneContact: string
    bothContact: string
    projectUrgency: string
    lowUrgency: string
    normalUrgency: string
    highUrgency: string
    submitRequest: string
    submittingRequest: string
    privacyNote: string
    whatHappensNext: string
    whatHappensDesc: string
    initialReview: string
    initialReviewDesc: string
    personalContact: string
    personalContactDesc: string
    customProposal: string
    customProposalDesc: string
    successTitle: string
    successDesc: string
    services: {
      audit: string
      tax: string
      consulting: string
      accounting: string
      dueDiligence: string
      ifrs: string
      other: string
    }
    budgetRanges: {
      under5k: string
      range5k15k: string
      range15k50k: string
      range50k100k: string
      over100k: string
      discuss: string
    }
    timelines: {
      urgent: string
      oneMonth: string
      twoThreeMonths: string
      threeSixMonths: string
      flexible: string
    }
    additionalServiceOptions: {
      training: string
      ongoingSupport: string
      systemImplementation: string
      processDocumentation: string
      complianceMonitoring: string
      regularReviews: string
    }
  }
  contact: {
    title: string
    name: string
    email: string
    phone: string
    message: string
    send: string
    subject: string
    getInTouch: string
    sendMessage: string
    heroDesc: string
    formDesc: string
    namePlaceholder: string
    emailPlaceholder: string
    phonePlaceholder: string
    subjectPlaceholder: string
    messagePlaceholder: string
    sending: string
    successTitle: string
    successDesc: string
    privacy: string
    whyContactTitle: string
    whyContactDesc: string
    quickResponse: string
    quickResponseDesc: string
    personalizedService: string
    personalizedServiceDesc: string
    expertAdvice: string
    expertAdviceDesc: string
    emailDesc: string
    phoneDesc: string
    address: string
    addressDesc: string
    response: string
    responseTime: string
    responseDesc: string
    officeHours: string
    officeHoursTime: string
    location: string
    locationAddress: string
  }
  footer: {
    company: string
    services: string
    contact: string
    rights: string
    description: string
    quickLinks: string
    followUs: string
    newsletter: string
    newsletterDesc: string
    subscribe: string
    emailPlaceholder: string
  }
  common: {
    learnMore: string
    getStarted: string
    contactUs: string
    readMore: string
    viewAll: string
    backToTop: string
    loading: string
    error: string
    success: string
    years: string
    clients: string
    projects: string
    experience: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Our Services",
      clients: "Who Do We Work With?",
      team: "Team",
      process: "How We Are Working",
      rates: "Rates",
      order: "Order",
      contact: "Contact",
    },
    hero: {
      title: "Professional Audit & Consulting Services",
      subtitle:
        "Wise Resolvere provides comprehensive audit, tax, and consulting services to help your business grow with confidence and compliance.",
      cta: "Get Free Consultation",
      trustBadge: "Trusted by 500+ businesses",
      yearsExperience: "15+ Years Experience",
      clientsSatisfied: "500+ Satisfied Clients",
      projectsCompleted: "1000+ Projects Completed",
      badge: "Professional Audit Company",
    },
    stats: {
      clientsServed: "Clients Served",
      yearsExperience: "Years Experience",
      clientSatisfaction: "Client Satisfaction",
      supportAvailable: "Support Available",
    },
    benefits: {
      certifiedAuditors: "Professional certified auditors",
      financialAnalysis: "Comprehensive financial analysis",
      compliance: "Regulatory compliance expertise",
      customSolutions: "Customized business solutions",
      multilingualSupport: "Multilingual support team",
      competitivePricing: "Competitive pricing structure",
    },
    whyChoose: {
      title: "Why Choose Wise Resolvere?",
      subtitle:
        "We combine expertise, technology, and personalized service to deliver exceptional results for your business.",
      learnMore: "Learn More About Us",
    },
    features: {
      enterprise: "Enterprise Solutions",
      enterpriseDesc: "Scalable audit solutions for large organizations",
      expertTeam: "Expert Team",
      expertTeamDesc: "Certified professionals with extensive experience",
      dataAnalytics: "Data Analytics",
      dataAnalyticsDesc: "Advanced analytics for better business insights",
      qualityAssurance: "Quality Assurance",
      qualityAssuranceDesc: "Rigorous quality control processes",
    },
    cta: {
      title: "Ready to Get Started?",
      subtitle:
        "Contact us today for a free consultation and discover how we can help your business achieve its financial goals.",
      consultation: "Get Free Consultation",
      viewRates: "View Our Rates",
    },
    about: {
      title: "About Wise Resolvere",
      description:
        "WISE RESOLVERE LLC is an audit organization created in 2022 that has been successfully operating in the audit services market. We unite qualified auditors and highly qualified specialists capable of solving problems of any complexity.",
      mission: "Our Mission",
      missionText:
        "Satisfying high demands and providing qualified assistance to our clients are the main values and objectives that we set for ourselves in our daily activities.",
      vision: "Our Vision",
      visionText:
        "We build our relationships with clients on the principles of independence, honesty, openness and mutual trust. By developing an open and active dialogue with clients, we expand our presence in the market.",
      values: "Our Values",
      valuesText: "Independence, honesty, openness and mutual trust guide everything we do.",
      integrity: "Independence",
      integrityText: "We maintain independence in all our professional dealings and client relationships.",
      partnership: "Partnership",
      partnershipText: "We work closely with our clients as trusted partners to achieve their business objectives.",
      excellence: "Excellence",
      excellenceText: "We strive for excellence in every service we provide, ensuring quality and precision.",
      expertise: "Expertise",
      expertiseText: "Our team of qualified auditors and specialists can solve problems of any complexity.",
      journey: "Our Journey",
      journeyText: "From our founding in 2022 to today, we've established ourselves as a trusted audit organization.",
      founded: "Company Founded",
      foundedText: "WISE RESOLVERE LLC was created in 2022 and began operating in the audit services market.",
      license: "Licensed Operations",
      licenseText:
        "We operate on the basis of license No. 127 of the Ministry of Finance of the Republic of Uzbekistan dated January 26, 2023.",
      capital: "Authorized Capital",
      capitalText:
        "The authorized capital currently amounts to more than 100,000,000 soums on the day of registration.",
      insurance: "Insurance Coverage",
      insuranceText:
        "Audit organization liability insurance policy No. 03-03/0681169266-001 with coverage of 2,000,000,000 sum through O'ZBEKINVEST.",
      management: "Management Structure",
      managementText:
        "The management of the organization is led by the director of WISE RESOLVERE LLC - a full-time employee of the organization.",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive audit and consulting services tailored to your business needs",
      audit: "Financial Audit",
      auditDesc: "Comprehensive financial audits ensuring accuracy and compliance with regulatory standards.",
      auditFeatures: [
        "Independent financial statement audits",
        "Internal control assessments",
        "Compliance audits",
        "Risk assessment and management",
        "Audit report preparation",
        "Management letter recommendations",
      ],
      consulting: "Business Consulting",
      consultingDesc: "Strategic business consulting to optimize operations and drive growth.",
      consultingFeatures: [
        "Business process optimization",
        "Financial planning and analysis",
        "Strategic planning support",
        "Performance improvement",
        "Change management",
        "Market analysis and research",
      ],
      tax: "Tax Services",
      taxDesc: "Expert tax planning and compliance services for individuals and businesses.",
      taxFeatures: [
        "Corporate tax preparation",
        "Individual tax returns",
        "Tax planning strategies",
        "Tax compliance reviews",
        "International tax services",
        "Tax dispute resolution",
      ],
      accounting: "Accounting Services",
      accountingDesc: "Professional accounting services to maintain accurate financial records.",
      accountingFeatures: [
        "Bookkeeping and record maintenance",
        "Financial statement preparation",
        "Payroll processing",
        "Accounts payable/receivable",
        "Monthly financial reporting",
        "Budget preparation and monitoring",
      ],
      financial: "Financial Advisory",
      financialDesc: "Strategic financial advisory services for informed business decisions.",
      financialFeatures: [
        "Financial planning and forecasting",
        "Investment advisory",
        "Cash flow management",
        "Capital structure optimization",
        "Merger and acquisition support",
        "Valuation services",
      ],
      compliance: "Compliance Services",
      complianceDesc: "Ensure regulatory compliance across all business operations.",
      complianceFeatures: [
        "Regulatory compliance reviews",
        "Policy development",
        "Compliance training",
        "Risk management frameworks",
        "Internal audit services",
        "Governance advisory",
      ],
      additionalServicesTitle: "Additional Services",
      additionalServicesSubtitle: "Specialized services to meet your unique business requirements",
      dueDiligence: "Due Diligence",
      dueDiligenceDesc: "Comprehensive due diligence for mergers, acquisitions, and investments.",
      forensicAccounting: "Forensic Accounting",
      forensicAccountingDesc: "Investigation of financial irregularities and fraud detection.",
      ifrsImplementation: "IFRS Implementation",
      ifrsImplementationDesc: "Assistance with International Financial Reporting Standards adoption.",
      trainingWorkshops: "Training & Workshops",
      trainingWorkshopsDesc: "Professional development programs for your finance team.",
      processTitle: "Our Service Process",
      processSubtitle: "A structured approach to delivering exceptional results",
      step1Title: "Initial Consultation",
      step1Desc: "We discuss your needs and objectives to understand your requirements.",
      step2Title: "Proposal & Agreement",
      step2Desc: "We provide a detailed proposal with scope, timeline, and pricing.",
      step3Title: "Project Execution",
      step3Desc: "Our expert team delivers the services according to agreed specifications.",
      step4Title: "Review & Delivery",
      step4Desc: "We review all deliverables and provide comprehensive reports and recommendations.",
      getStarted: "Get Started",
      whatsIncluded: "What's Included:",
      startingFrom: "Starting from",
    },
    clients: {
      title: "Who Do We Work With?",
      subtitle: "We serve businesses of all sizes across various industries",
      smallBusiness: "Small Businesses",
      smallBusinessDesc:
        "Tailored accounting and tax services for small businesses and startups looking to establish strong financial foundations.",
      mediumBusiness: "Medium Enterprises",
      mediumBusinessDesc:
        "Comprehensive audit, consulting, and compliance services for growing medium-sized businesses.",
      largeCorporations: "Large Corporations",
      largeCorporationsDesc:
        "Complex audit, tax, and consulting solutions for large corporations with sophisticated financial needs.",
      startups: "Startups & Entrepreneurs",
      startupsDesc:
        "Specialized services for startups including business planning, tax optimization, and growth strategies.",
      nonprofits: "Non-Profit Organizations",
      nonprofitsDesc:
        "Dedicated audit and accounting services for non-profit organizations and charitable institutions.",
      individuals: "High Net Worth Individuals",
      individualsDesc:
        "Personal tax planning, estate planning, and wealth management services for affluent individuals.",
      industries: "Industries We Serve",
      industriesTitle: "Our expertise spans across multiple industries",
      manufacturing: "Manufacturing",
      retail: "Retail & E-commerce",
      technology: "Technology",
      healthcare: "Healthcare",
      construction: "Construction",
      hospitality: "Hospitality",
      transportCompanies: "Transport Companies",
      itCompanies: "IT Companies",
      production: "Production",
      wholesaleCompanies: "Wholesale Companies",
      clinics: "Clinics and Medical Centers",
      cafesRestaurants: "Cafes and Restaurants",
    },
    team: {
      title: "Meet Our Expert Team",
      subtitle: "Experienced professionals dedicated to your success",
      director: "Director",
      auditor: "Auditor",
      education: "Education",
      directorDesc:
        "Qualified accountant with extensive experience in international accounting standards and financial management.",
      auditorDesc: "Qualified accountant with specialized expertise in auditing and financial analysis.",
      joinTeam: "Join Our Team",
      joinTeamDesc:
        "We're always looking for talented professionals to join our growing team. Contact us to learn about career opportunities.",
    },
    process: {
      title: "How We Work",
      subtitle:
        "Here you will learn more about the stages of our work, and you will also be able to imagine how everything will take place!",
      step1Title: "Establishing a Team of Accountants",
      step1Desc:
        "After concluding an agreement and discussing payment, you are assigned an individual team of accountants tailored specifically to your specific industry!",
      step2Title: "Complete Assistance",
      step2Desc:
        "Now accounting, taxes and personnel will be under the control of our accountants assigned to you and your company! And also legal support!",
      step3Title: "You Control the Main Processes",
      step3Desc:
        "Set tasks for your team of accountants and send photos of documents in any way convenient for you! There is also a convenient application for smooth and convenient work!",
      stepsTitle: "Our Working Process",
      stepsSubtitle: "A proven methodology that delivers consistent results for every client engagement",
      featuresTitle: "Why Choose Our Process",
      featuresSubtitle: "The advantages that make our approach unique and effective",
      feature1Title: "Individual Team Assignment",
      feature1Desc: "Each client gets a dedicated team of qualified accountants specialized in their industry",
      feature2Title: "Complete Service Coverage",
      feature2Desc: "We handle all aspects including accounting, taxes, personnel, and legal support",
      feature3Title: "Convenient Communication",
      feature3Desc: "Use our mobile app or any convenient method to communicate and send documents",
    },
    rates: {
      title: "Our Service Rates",
      subtitle: "Transparent pricing for professional services",
      basic: "Basic Package",
      basicPrice: "$2,500",
      basicDesc: "Perfect for small businesses and startups",
      basicFeatures: [
        "Basic Financial Audit",
        "Tax Return Preparation",
        "Monthly Financial Reports",
        "Email Support",
        "Standard Timeline",
      ],
      professional: "Professional Package",
      professionalPrice: "$5,000",
      professionalDesc: "Ideal for growing medium-sized businesses",
      professionalFeatures: [
        "Comprehensive Financial Audit",
        "Tax Planning & Preparation",
        "Quarterly Business Reviews",
        "Management Advisory Services",
        "Priority Support",
        "Expedited Timeline",
      ],
      enterprise: "Enterprise Package",
      enterprisePrice: "$10,000+",
      enterpriseDesc: "Comprehensive solutions for large corporations",
      enterpriseFeatures: [
        "Full-Scope Audit Services",
        "Complex Tax Services",
        "Strategic Consulting",
        "Compliance Management",
        "Dedicated Account Manager",
        "24/7 Support",
      ],
      custom: "Custom Solutions",
      customDesc: "Tailored packages based on your specific needs and requirements",
      consultation: "Free Consultation",
      consultationDesc: "Schedule a free consultation to discuss your needs and get a customized quote",
      hourlyRate: "Hourly Consulting",
      hourlyRateDesc: "Professional consulting services at $150-300 per hour based on complexity",
      getQuote: "Get Custom Quote",
      popular: "Most Popular",
      contactForPricing: "Contact for Pricing",
    },
    order: {
      title: "Order Services",
      getStarted: "Get Started Today",
      heroDesc:
        "Ready to work with us? Fill out the form below and we'll get back to you within 24 hours with a customized proposal.",
      requestQuote: "Request a Quote",
      quoteDesc: "Tell us about your project and we'll provide a customized proposal",
      personalInfo: "Personal Information",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      companyInfo: "Company Information",
      companyName: "Company Name",
      position: "Your Position",
      industry: "Industry",
      selectIndustry: "Select your industry",
      projectInfo: "Project Information",
      serviceType: "Service Type",
      selectService: "Select the service you need",
      projectDescription: "Project Description",
      projectDescPlaceholder:
        "Please describe your project, specific requirements, and any challenges you're facing...",
      timeline: "Timeline",
      selectTimeline: "When do you need this completed?",
      budget: "Budget Range",
      selectBudget: "Select your budget range",
      additionalServices: "Additional Services",
      contactPreferences: "Contact Preferences",
      preferredContact: "Preferred Contact Method",
      emailContact: "Email",
      phoneContact: "Phone Call",
      bothContact: "Both Email and Phone",
      projectUrgency: "Project Urgency",
      lowUrgency: "Low - Planning ahead",
      normalUrgency: "Normal - Standard timeline",
      highUrgency: "High - Need to start soon",
      submitRequest: "Submit Request",
      submittingRequest: "Submitting Request...",
      privacyNote:
        "By submitting this form, you agree to our terms of service and privacy policy. We'll contact you within 24 hours to discuss your project.",
      whatHappensNext: "What Happens Next?",
      whatHappensDesc: "Here's what you can expect after submitting your request",
      initialReview: "Initial Review",
      initialReviewDesc: "We review your request and assign the right team member to your project within 2 hours.",
      personalContact: "Personal Contact",
      personalContactDesc: "Our expert contacts you within 24 hours to discuss your needs and answer questions.",
      customProposal: "Custom Proposal",
      customProposalDesc: "We prepare a detailed proposal with timeline, scope, and pricing within 48 hours.",
      successTitle: "Request Submitted Successfully!",
      successDesc: "We'll contact you within 24 hours to discuss your project.",
      services: {
        audit: "Financial Audit",
        tax: "Tax Services",
        consulting: "Business Consulting",
        accounting: "Accounting Services",
        dueDiligence: "Due Diligence",
        ifrs: "IFRS Implementation",
        other: "Other Services",
      },
      budgetRanges: {
        under5k: "Under $5,000",
        range5k15k: "$5,000 - $15,000",
        range15k50k: "$15,000 - $50,000",
        range50k100k: "$50,000 - $100,000",
        over100k: "Over $100,000",
        discuss: "Prefer to discuss",
      },
      timelines: {
        urgent: "Urgent (Within 2 weeks)",
        oneMonth: "1 Month",
        twoThreeMonths: "2-3 Months",
        threeSixMonths: "3-6 Months",
        flexible: "Flexible timeline",
      },
      additionalServiceOptions: {
        training: "Training & Workshops",
        ongoingSupport: "Ongoing Support",
        systemImplementation: "System Implementation",
        processDocumentation: "Process Documentation",
        complianceMonitoring: "Compliance Monitoring",
        regularReviews: "Regular Reviews",
      },
    },
    contact: {
      title: "Contact Us",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      message: "Message",
      send: "Send Message",
      subject: "Subject",
      getInTouch: "Get In Touch",
      sendMessage: "Send us a Message",
      heroDesc:
        "Have questions about our services? Need a consultation? We're here to help. Contact us today and let's discuss how we can support your business.",
      formDesc: "Fill out the form below and we'll get back to you as soon as possible.",
      namePlaceholder: "Your full name",
      emailPlaceholder: "your@email.com",
      phonePlaceholder: "+1 (555) 123-4567",
      subjectPlaceholder: "What is this about?",
      messagePlaceholder: "Tell us about your inquiry, questions, or how we can help you...",
      sending: "Sending...",
      successTitle: "Message Sent Successfully!",
      successDesc: "We'll get back to you within 24 hours.",
      privacy: "By submitting this form, you agree to our privacy policy. We'll respond within 24 hours.",
      whyContactTitle: "Why Contact Wise Resolvere?",
      whyContactDesc:
        "We're committed to providing exceptional service and building lasting relationships with our clients.",
      quickResponse: "Quick Response",
      quickResponseDesc: "We respond to all inquiries within 24 hours, often much sooner.",
      personalizedService: "Personalized Service",
      personalizedServiceDesc: "Every client receives personalized attention and tailored solutions.",
      expertAdvice: "Expert Advice",
      expertAdviceDesc: "Get professional advice from our experienced team of audit and consulting experts.",
      emailDesc: "Send us an email anytime",
      phoneDesc: "Mon-Fri 9:00 AM - 6:00 PM",
      address: "Visit Us",
      addressDesc: "Schedule an appointment",
      response: "Response Time",
      responseTime: "Within 24 hours",
      responseDesc: "We respond quickly",
      officeHours: "Office Hours",
      officeHoursTime: "Monday - Friday: 9:00 AM - 6:00 PM",
      location: "Our Location",
      locationAddress: "123 Business District, Tashkent, Uzbekistan",
    },
    footer: {
      company: "Company",
      services: "Services",
      contact: "Contact",
      rights: "All rights reserved.",
      description:
        "Professional audit and consulting services helping businesses achieve financial excellence and compliance.",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      newsletter: "Newsletter",
      newsletterDesc: "Subscribe to our newsletter for the latest updates and insights.",
      subscribe: "Subscribe",
      emailPlaceholder: "Enter your email",
    },
    common: {
      learnMore: "Learn More",
      getStarted: "Get Started",
      contactUs: "Contact Us",
      readMore: "Read More",
      viewAll: "View All",
      backToTop: "Back to Top",
      loading: "Loading...",
      error: "Error",
      success: "Success",
      years: "Years",
      clients: "Clients",
      projects: "Projects",
      experience: "Experience",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "О нас",
      services: "Наши услуги",
      clients: "С кем мы работаем?",
      team: "Команда",
      process: "Как мы работаем",
      rates: "Тарифы",
      order: "Заказать",
      contact: "Контакты",
    },
    hero: {
      title: "Профессиональные аудиторские и консалтинговые услуги",
      subtitle:
        "Wise Resolvere предоставляет комплексные аудиторские, налоговые и консалтинговые услуги, чтобы помочь вашему бизнесу расти с уверенностью и соблюдением требований.",
      cta: "Получить бесплатную консультацию",
      trustBadge: "Нам доверяют 500+ компаний",
      yearsExperience: "15+ лет опыта",
      clientsSatisfied: "500+ довольных клиентов",
      projectsCompleted: "1000+ завершенных проектов",
      badge: "Профессиональная аудиторская компания",
    },
    stats: {
      clientsServed: "Обслуженных клиентов",
      yearsExperience: "Лет опыта",
      clientSatisfaction: "Удовлетворенность клиентов",
      supportAvailable: "Поддержка доступна",
    },
    benefits: {
      certifiedAuditors: "Профессиональные сертифицированные аудиторы",
      financialAnalysis: "Комплексный финансовый анализ",
      compliance: "Экспертиза по соблюдению требований",
      customSolutions: "Индивидуальные бизнес-решения",
      multilingualSupport: "Многоязычная команда поддержки",
      competitivePricing: "Конкурентная структура цен",
    },
    whyChoose: {
      title: "Почему выбирают Wise Resolvere?",
      subtitle:
        "Мы сочетаем экспертизу, технологии и персонализированный сервис для достижения исключительных результатов для вашего бизнеса.",
      learnMore: "Узнать больше о нас",
    },
    features: {
      enterprise: "Корпоративные решения",
      enterpriseDesc: "Масштабируемые аудиторские решения для крупных организаций",
      expertTeam: "Экспертная команда",
      expertTeamDesc: "Сертифицированные специалисты с обширным опытом",
      dataAnalytics: "Аналитика данных",
      dataAnalyticsDesc: "Продвинутая аналитика для лучшего понимания бизнеса",
      qualityAssurance: "Обеспечение качества",
      qualityAssuranceDesc: "Строгие процессы контроля качества",
    },
    cta: {
      title: "Готовы начать?",
      subtitle:
        "Свяжитесь с нами сегодня для бесплатной консультации и узнайте, как мы можем помочь вашему бизнесу достичь финансовых целей.",
      consultation: "Получить бесплатную консультацию",
      viewRates: "Посмотреть наши тарифы",
    },
    about: {
      title: "О компании Wise Resolvere",
      description:
        "ООО «WISE RESOLVERE» — аудиторская организация, созданная в 2022 году и успешно работающая на рынке аудиторских услуг. Мы объединяем квалифицированных аудиторов и высококвалифицированных специалистов, способных решать задачи любой сложности.",
      mission: "Наша миссия",
      missionText:
        "Удовлетворение высоких требований и предоставление квалифицированной помощи нашим клиентам являются основными ценностями и задачами, которые мы ставим перед собой в повседневной деятельности.",
      vision: "Наше видение",
      visionText:
        "Мы строим отношения с клиентами на принципах независимости, честности, открытости и взаимного доверия. Развивая открытый и активный диалог с клиентами, мы расширяем свое присутствие на рынке.",
      values: "Наши ценности",
      valuesText: "Независимость, честность, открытость и взаимное доверие направляют все, что мы делаем.",
      integrity: "Независимость",
      integrityText: "Мы поддерживаем независимость во всех наших профессиональных отношениях с клиентами.",
      partnership: "Партнерство",
      partnershipText: "Мы тесно работаем с нашими клиентами как надежные партнеры для достижения их бизнес-целей.",
      excellence: "Совершенство",
      excellenceText:
        "Мы стремимся к совершенству в каждой услуге, которую мы предоставляем, обеспечивая качество и точность.",
      expertise: "Экспертиза",
      expertiseText: "Наша команда квалифицированных аудиторов и специалистов может решать задачи любой сложности.",
      journey: "Наш путь",
      journeyText:
        "От нашего основания в 2022 году до сегодняшнего дня мы утвердились как надежная аудиторская организация.",
      founded: "Основание компании",
      foundedText: "ООО «WISE RESOLVERE» было создано в 2022 году и начало работать на рынке аудиторских услуг.",
      license: "Лицензированная деятельность",
      licenseText:
        "Мы работаем на основании лицензии № 127 Министерства финансов Республики Узбекистан от 26 января 2023 года.",
      capital: "Уставный капитал",
      capitalText: "Уставный капитал в настоящее время составляет более 100 000 000 сумов на день регистрации.",
      insurance: "Страховое покрытие",
      insuranceText:
        "Полис страхования ответственности аудиторской организации № 03-03/0681169266-001 с покрытием 2 000 000 000 сум через О'ЗБЕКИНВЕСТ.",
      management: "Структура управления",
      managementText:
        "Управление организацией осуществляет директор ООО «WISE RESOLVERE» — штатный сотрудник организации.",
    },
    services: {
      title: "Наши услуги",
      subtitle: "Комплексные аудиторские и консалтинговые услуги, адаптированные под потребности вашего бизнеса",
      audit: "Финансовый аудит",
      auditDesc: "Комплексные финансовые аудиты, обеспечивающие точность и соответствие нормативным стандартам.",
      auditFeatures: [
        "Независимые аудиты финансовой отчетности",
        "Оценка внутреннего контроля",
        "Аудиты соответствия",
        "Оценка и управление рисками",
        "Подготовка аудиторских отчетов",
        "Рекомендации руководству",
      ],
      consulting: "Бизнес-консалтинг",
      consultingDesc: "Стратегический бизнес-консалтинг для оптимизации операций и стимулирования роста.",
      consultingFeatures: [
        "Оптимизация бизнес-процессов",
        "Финансовое планирование и анализ",
        "Поддержка стратегического планирования",
        "Повышение эффективности",
        "Управление изменениями",
        "Анализ и исследование рынка",
      ],
      tax: "Налоговые услуги",
      taxDesc: "Экспертное налоговое планирование и услуги по соблюдению требований для физических и юридических лиц.",
      taxFeatures: [
        "Подготовка корпоративных налогов",
        "Индивидуальные налоговые декларации",
        "Стратегии налогового планирования",
        "Проверки налогового соответствия",
        "Международные налоговые услуги",
        "Разрешение налоговых споров",
      ],
      accounting: "Бухгалтерские услуги",
      accountingDesc: "Профессиональные бухгалтерские услуги для ведения точных финансовых записей.",
      accountingFeatures: [
        "Ведение книг и записей",
        "Подготовка финансовой отчетности",
        "Обработка заработной платы",
        "Кредиторская/дебиторская задолженность",
        "Ежемесячная финансовая отчетность",
        "Подготовка и мониторинг бюджета",
      ],
      financial: "Финансовое консультирование",
      financialDesc: "Стратегические услуги финансового консультирования для обоснованных бизнес-решений.",
      financialFeatures: [
        "Финансовое планирование и прогнозирование",
        "Инвестиционное консультирование",
        "Управление денежными потоками",
        "Оптимизация структуры капитала",
        "Поддержка слияний и поглощений",
        "Услуги оценки",
      ],
      compliance: "Услуги соответствия",
      complianceDesc: "Обеспечение соблюдения нормативных требований во всех бизнес-операциях.",
      complianceFeatures: [
        "Проверки соблюдения нормативных требований",
        "Разработка политик",
        "Обучение соответствию",
        "Системы управления рисками",
        "Услуги внутреннего аудита",
        "Консультирование по управлению",
      ],
      additionalServicesTitle: "Дополнительные услуги",
      additionalServicesSubtitle: "Специализированные услуги для удовлетворения ваших уникальных бизнес-требований",
      dueDiligence: "Комплексная проверка",
      dueDiligenceDesc: "Комплексная проверка для слияний, поглощений и инвестиций.",
      forensicAccounting: "Судебная бухгалтерия",
      forensicAccountingDesc: "Расследование финансовых нарушений и выявление мошенничества.",
      ifrsImplementation: "Внедрение МСФО",
      ifrsImplementationDesc: "Помощь в принятии Международных стандартов финансовой отчетности.",
      trainingWorkshops: "Обучение и семинары",
      trainingWorkshopsDesc: "Программы профессионального развития для вашей финансовой команды.",
      processTitle: "Наш процесс обслуживания",
      processSubtitle: "Структурированный подход к достижению исключительных результатов",
      step1Title: "Первичная консультация",
      step1Desc: "Мы обсуждаем ваши потребности и цели, чтобы понять ваши требования.",
      step2Title: "Предложение и соглашение",
      step2Desc: "Мы предоставляем подробное предложение с объемом, сроками и ценами.",
      step3Title: "Выполнение проекта",
      step3Desc: "Наша экспертная команда предоставляет услуги согласно согласованным спецификациям.",
      step4Title: "Проверка и доставка",
      step4Desc: "Мы проверяем все результаты и предоставляем комплексные отчеты и рекомендации.",
      getStarted: "Начать",
      whatsIncluded: "Что включено:",
      startingFrom: "Начиная с",
    },
    clients: {
      title: "С кем мы работаем?",
      subtitle: "Мы обслуживаем предприятия всех размеров в различных отраслях",
      smallBusiness: "Малый бизнес",
      smallBusinessDesc:
        "Индивидуальные бухгалтерские и налоговые услуги для малого бизнеса и стартапов, стремящихся создать прочные финансовые основы.",
      mediumBusiness: "Средние предприятия",
      mediumBusinessDesc:
        "Комплексные аудиторские, консалтинговые услуги и услуги по соблюдению требований для растущих средних предприятий.",
      largeCorporations: "Крупные корпорации",
      largeCorporationsDesc:
        "Сложные аудиторские, налоговые и консалтинговые решения для крупных корпораций со сложными финансовыми потребностями.",
      startups: "Стартапы и предприниматели",
      startupsDesc:
        "Специализированные услуги для стартапов, включая бизнес-планирование, налоговую оптимизацию и стратегии роста.",
      nonprofits: "Некоммерческие организации",
      nonprofitsDesc:
        "Специализированные аудиторские и бухгалтерские услуги для некоммерческих организаций и благотворительных учреждений.",
      individuals: "Состоятельные частные лица",
      individualsDesc:
        "Персональное налоговое планирование, планирование наследства и услуги по управлению капиталом для состоятельных лиц.",
      industries: "Отрасли, которые мы обслуживаем",
      industriesTitle: "Наша экспертиза охватывает множество отраслей",
      manufacturing: "Производство",
      retail: "Розничная торговля и электронная коммерция",
      technology: "Технологии",
      healthcare: "Здравоохранение",
      construction: "Строительство",
      hospitality: "Гостиничный бизнес",
      transportCompanies: "Транспортные компании",
      itCompanies: "IT-компании",
      production: "Производство",
      wholesaleCompanies: "Оптовые компании",
      clinics: "Клиники и медицинские центры",
      cafesRestaurants: "Кафе и рестораны",
    },
    team: {
      title: "Познакомьтесь с нашей экспертной командой",
      subtitle: "Опытные профессионалы, преданные вашему успеху",
      director: "Директор",
      auditor: "Аудитор",
      education: "Образование",
      directorDesc:
        "Квалифицированный бухгалтер с обширным опытом в международных стандартах учета и финансового управления.",
      auditorDesc: "Квалифицированный бухгалтер со специализированной экспертизой в аудите и финансовом анализе.",
      joinTeam: "Присоединиться к нашей команде",
      joinTeamDesc:
        "Мы всегда ищем талантливых профессионалов для присоединения к нашей растущей команде. Свяжитесь с нами, чтобы узнать о карьерных возможностях.",
    },
    process: {
      title: "Как мы работаем",
      subtitle:
        "Здесь вы узнаете больше об этапах нашей работы, а также сможете представить, как все будет происходить!",
      step1Title: "Создание команды бухгалтеров",
      step1Desc:
        "После заключения договора и обсуждения оплаты вам назначается индивидуальная команда бухгалтеров, адаптированная специально под вашу конкретную отрасль!",
      step2Title: "Полная помощь",
      step2Desc:
        "Теперь бухгалтерия, налоги и персонал будут под контролем наших бухгалтеров, назначенных вам и вашей компании! А также юридическая поддержка!",
      step3Title: "Вы контролируете основные процессы",
      step3Desc:
        "Ставьте задачи своей команде бухгалтеров и отправляйте фотографии документов любым удобным для вас способом! Также есть удобное приложение для плавной и удобной работы!",
      stepsTitle: "Наш рабочий процесс",
      stepsSubtitle:
        "Проверенная методология, которая обеспечивает стабильные результаты для каждого клиентского взаимодействия",
      featuresTitle: "Почему выбирают наш процесс",
      featuresSubtitle: "Преимущества, которые делают наш подход уникальным и эффективным",
      feature1Title: "Индивидуальное назначение команды",
      feature1Desc:
        "Каждый клиент получает выделенную команду квалифицированных бухгалтеров, специализирующихся в их отрасли",
      feature2Title: "Полное покрытие услуг",
      feature2Desc: "Мы обрабатываем все аспекты, включая бухгалтерию, налоги, персонал и юридическую поддержку",
      feature3Title: "Удобная коммуникация",
      feature3Desc: "Используйте наше мобильное приложение или любой удобный способ для общения и отправки документов",
    },
    rates: {
      title: "Наши тарифы на услуги",
      subtitle: "Прозрачные цены на профессиональные услуги",
      basic: "Базовый пакет",
      basicPrice: "2 500 $",
      basicDesc: "Идеально для малого бизнеса и стартапов",
      basicFeatures: [
        "Базовый финансовый аудит",
        "Подготовка налоговых деклараций",
        "Ежемесячные финансовые отчеты",
        "Поддержка по электронной почте",
        "Стандартные сроки",
      ],
      professional: "Профессиональный пакет",
      professionalPrice: "5 000 $",
      professionalDesc: "Идеально для растущих средних предприятий",
      professionalFeatures: [
        "Комплексный финансовый аудит",
        "Налоговое планирование и подготовка",
        "Квартальные бизнес-обзоры",
        "Консультационные услуги по управлению",
        "Приоритетная поддержка",
        "Ускоренные сроки",
      ],
      enterprise: "Корпоративный пакет",
      enterprisePrice: "10 000 $ +",
      enterpriseDesc: "Комплексные решения для крупных корпораций",
      enterpriseFeatures: [
        "Полномасштабные аудиторские услуги",
        "Сложные налоговые услуги",
        "Стратегический консалтинг",
        "Управление соответствием",
        "Выделенный менеджер по работе с клиентами",
        "Поддержка 24/7",
      ],
      custom: "Индивидуальные решения",
      customDesc: "Индивидуальные пакеты на основе ваших конкретных потребностей и требований",
      consultation: "Бесплатная консультация",
      consultationDesc:
        "Запланируйте бесплатную консультацию, чтобы обсудить ваши потребности и получить индивидуальное предложение",
      hourlyRate: "Почасовой консалтинг",
      hourlyRateDesc:
        "Профессиональные консалтинговые услуги по цене 150-300 долларов в час в зависимости от сложности",
      getQuote: "Получить индивидуальное предложение",
      popular: "Самый популярный",
      contactForPricing: "Свяжитесь для уточнения цены",
    },
    order: {
      title: "Заказать услуги",
      getStarted: "Начать сегодня",
      heroDesc:
        "Готовы работать с нами? Заполните форму ниже, и мы свяжемся с вами в течение 24 часов с индивидуальным предложением.",
      requestQuote: "Запросить предложение",
      quoteDesc: "Расскажите нам о своем проекте, и мы предоставим индивидуальное предложение",
      personalInfo: "Личная информация",
      firstName: "Имя",
      lastName: "Фамилия",
      email: "Адрес электронной почты",
      phone: "Номер телефона",
      companyInfo: "Информация о компании",
      companyName: "Название компании",
      position: "Ваша должность",
      industry: "Отрасль",
      selectIndustry: "Выберите вашу отрасль",
      projectInfo: "Информация о проекте",
      serviceType: "Тип услуги",
      selectService: "Выберите нужную вам услугу",
      projectDescription: "Описание проекта",
      projectDescPlaceholder:
        "Пожалуйста, опишите ваш проект, конкретные требования и любые проблемы, с которыми вы сталкиваетесь...",
      timeline: "Временные рамки",
      selectTimeline: "Когда вам нужно это завершить?",
      budget: "Диапазон бюджета",
      selectBudget: "Выберите ваш диапазон бюджета",
      additionalServices: "Дополнительные услуги",
      contactPreferences: "Предпочтения по контакту",
      preferredContact: "Предпочтительный способ связи",
      emailContact: "Электронная почта",
      phoneContact: "Телефонный звонок",
      bothContact: "И электронная почта, и телефон",
      projectUrgency: "Срочность проекта",
      lowUrgency: "Низкая - планирование заранее",
      normalUrgency: "Обычная - стандартные сроки",
      highUrgency: "Высокая - нужно начать скоро",
      submitRequest: "Отправить запрос",
      submittingRequest: "Отправка запроса...",
      privacyNote:
        "Отправляя эту форму, вы соглашаетесь с нашими условиями обслуживания и политикой конфиденциальности. Мы свяжемся с вами в течение 24 часов для обсуждения вашего проекта.",
      whatHappensNext: "Что происходит дальше?",
      whatHappensDesc: "Вот что вы можете ожидать после отправки вашего запроса",
      initialReview: "Первичный обзор",
      initialReviewDesc:
        "Мы рассматриваем ваш запрос и назначаем подходящего члена команды для вашего проекта в течение 2 часов.",
      personalContact: "Личный контакт",
      personalContactDesc:
        "Наш эксперт связывается с вами в течение 24 часов, чтобы обсудить ваши потребности и ответить на вопросы.",
      customProposal: "Индивидуальное предложение",
      customProposalDesc: "Мы готовим подробное предложение с временными рамками, объемом и ценами в течение 48 часов.",
      successTitle: "Запрос успешно отправлен!",
      successDesc: "Мы свяжемся с вами в течение 24 часов для обсуждения вашего проекта.",
      services: {
        audit: "Финансовый аудит",
        tax: "Налоговые услуги",
        consulting: "Бизнес-консалтинг",
        accounting: "Бухгалтерские услуги",
        dueDiligence: "Комплексная проверка",
        ifrs: "Внедрение МСФО",
        other: "Другие услуги",
      },
      budgetRanges: {
        under5k: "Менее 5 000 $",
        range5k15k: "5 000 $ - 15 000 $",
        range15k50k: "15 000 $ - 50 000 $",
        range50k100k: "50 000 $ - 100 000 $",
        over100k: "Более 100 000 $",
        discuss: "Предпочитаю обсудить",
      },
      timelines: {
        urgent: "Срочно (в течение 2 недель)",
        oneMonth: "1 месяц",
        twoThreeMonths: "2-3 месяца",
        threeSixMonths: "3-6 месяцев",
        flexible: "Гибкие сроки",
      },
      additionalServiceOptions: {
        training: "Обучение и семинары",
        ongoingSupport: "Постоянная поддержка",
        systemImplementation: "Внедрение системы",
        processDocumentation: "Документирование процессов",
        complianceMonitoring: "Мониторинг соответствия",
        regularReviews: "Регулярные обзоры",
      },
    },
    contact: {
      title: "Свяжитесь с нами",
      name: "Полное имя",
      email: "Адрес электронной почты",
      phone: "Номер телефона",
      message: "Сообщение",
      send: "Отправить сообщение",
      subject: "Тема",
      getInTouch: "Связаться",
      sendMessage: "Отправьте нам сообщение",
      heroDesc:
        "Есть вопросы о наших услугах? Нужна консультация? Мы здесь, чтобы помочь. Свяжитесь с нами сегодня, и давайте обсудим, как мы можем поддержать ваш бизнес.",
      formDesc: "Заполните форму ниже, и мы свяжемся с вами как можно скорее.",
      namePlaceholder: "Ваше полное имя",
      emailPlaceholder: "your@email.com",
      phonePlaceholder: "+1 (555) 123-4567",
      subjectPlaceholder: "О чем это?",
      messagePlaceholder: "Расскажите нам о вашем запросе, вопросах или как мы можем вам помочь...",
      sending: "Отправка...",
      successTitle: "Сообщение успешно отправлено!",
      successDesc: "Мы свяжемся с вами в течение 24 часов.",
      privacy:
        "Отправляя эту форму, вы соглашаетесь с нашей политикой конфиденциальности. Мы ответим в течение 24 часов.",
      whyContactTitle: "Почему стоит связаться с Wise Resolvere?",
      whyContactDesc:
        "Мы стремимся предоставлять исключительный сервис и строить долгосрочные отношения с нашими клиентами.",
      quickResponse: "Быстрый ответ",
      quickResponseDesc: "Мы отвечаем на все запросы в течение 24 часов, часто намного быстрее.",
      personalizedService: "Персонализированный сервис",
      personalizedServiceDesc: "Каждый клиент получает персональное внимание и индивидуальные решения.",
      expertAdvice: "Экспертный совет",
      expertAdviceDesc: "Получите профессиональный совет от нашей опытной команды экспертов по аудиту и консалтингу.",
      emailDesc: "Отправьте нам электронное письмо в любое время",
      phoneDesc: "Пн-Пт 9:00 - 18:00",
      address: "Посетите нас",
      addressDesc: "Запланируйте встречу",
      response: "Время ответа",
      responseTime: "В течение 24 часов",
      responseDesc: "Мы отвечаем быстро",
      officeHours: "Часы работы",
      officeHoursTime: "Понедельник - Пятница: 9:00 - 18:00",
      location: "Наше местоположение",
      locationAddress: "123 Бизнес-район, Ташкент, Узбекистан",
    },
    footer: {
      company: "Компания",
      services: "Услуги",
      contact: "Контакт",
      rights: "Все права защищены.",
      description:
        "Профессиональные аудиторские и консалтинговые услуги, помогающие бизнесу достичь финансового совершенства и соответствия.",
      quickLinks: "Быстрые ссылки",
      followUs: "Следите за нами",
      newsletter: "Рассылка",
      newsletterDesc: "Подпишитесь на нашу рассылку для получения последних обновлений и идей.",
      subscribe: "Подписаться",
      emailPlaceholder: "Введите ваш email",
    },
    common: {
      learnMore: "Узнать больше",
      getStarted: "Начать",
      contactUs: "Свяжитесь с нами",
      readMore: "Читать далее",
      viewAll: "Посмотреть все",
      backToTop: "Наверх",
      loading: "Загрузка...",
      error: "Ошибка",
      success: "Успех",
      years: "Лет",
      clients: "Клиенты",
      projects: "Проекты",
      experience: "Опыт",
    },
  },
  uz: {
    nav: {
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      services: "Bizning xizmatlarimiz",
      clients: "Kim bilan ishlaymiz?",
      team: "Jamoa",
      process: "Qanday ishlaymiz",
      rates: "Tariflar",
      order: "Buyurtma",
    },
    hero: {
      title: "Professional audit va konsalting xizmatlari",
      subtitle:
        "Wise Resolvere sizning biznesingizni ishonch va muvofiqlik bilan o'sishiga yordam berish uchun keng qamrovli audit, soliq va konsalting xizmatlarini taqdim etadi.",
      cta: "Bepul konsultatsiya oling",
      trustBadge: "500+ kompaniya bizga ishonadi",
      yearsExperience: "15+ yillik tajriba",
      clientsSatisfied: "500+ mamnun mijoz",
      projectsCompleted: "1000+ tugallangan loyiha",
      badge: "Professional audit kompaniyasi",
    },
    stats: {
      clientsServed: "Xizmat ko'rsatilgan mijozlar",
      yearsExperience: "Yillik tajriba",
      clientSatisfaction: "Mijozlar mamnunligi",
      supportAvailable: "Yordam mavjud",
    },
    benefits: {
      certifiedAuditors: "Professional sertifikatlangan auditorlar",
      financialAnalysis: "Keng qamrovli moliyaviy tahlil",
      compliance: "Tartibga solish talablariga rioya qilish bo'yicha ekspertiza",
      customSolutions: "Moslashtirilgan biznes yechimlari",
      multilingualSupport: "Ko'p tilli yordam jamoasi",
      competitivePricing: "Raqobatbardosh narx tuzilmasi",
    },
    whyChoose: {
      title: "Nega Wise Resolvere ni tanlash kerak?",
      subtitle:
        "Biz sizning biznesingiz uchun ajoyib natijalar berish uchun ekspertiza, texnologiya va shaxsiylashtirilgan xizmatni birlashtiramiz.",
      learnMore: "Biz haqimizda ko'proq bilib oling",
    },
    features: {
      enterprise: "Korporativ yechimlar",
      enterpriseDesc: "Yirik tashkilotlar uchun miqyoslanadigan audit yechimlari",
      expertTeam: "Ekspert jamoa",
      expertTeamDesc: "Keng tajribaga ega sertifikatlangan mutaxassislar",
      dataAnalytics: "Ma'lumotlar tahlili",
      dataAnalyticsDesc: "Yaxshiroq biznes tushunchalari uchun ilg'or tahlil",
      qualityAssurance: "Sifat kafolati",
      qualityAssuranceDesc: "Qat'iy sifat nazorati jarayonlari",
    },
    cta: {
      title: "Boshlashga tayyormisiz?",
      subtitle:
        "Bugun biz bilan bog'laning, bepul konsultatsiya oling va biznesingizning moliyaviy maqsadlariga erishishda qanday yordam bera olishimizni bilib oling.",
      consultation: "Bepul konsultatsiya oling",
      viewRates: "Bizning tariflarimizni ko'ring",
    },
    about: {
      title: "Wise Resolvere haqida",
      description:
        "WISE RESOLVERE MChJ 2022 yilda yaratilgan va audit xizmatlari bozorida muvaffaqiyatli faoliyat yuritayotgan audit tashkilotidir. Biz har qanday murakkablikdagi masalalarni hal qila oladigan malakali auditorlar va yuqori malakali mutaxassislarni birlashtiramiz.",
      mission: "Bizning missiyamiz",
      missionText:
        "Yuqori talablarni qondirish va mijozlarimizga malakali yordam ko'rsatish bizning kundalik faoliyatimizda o'zimiz oldimizga qo'ygan asosiy qadriyatlar va vazifalardir.",
      vision: "Bizning ko'rish",
      visionText:
        "Biz mijozlar bilan munosabatlarni mustaqillik, halollik, ochiqlik va o'zaro ishonch tamoyillari asosida quramiz. Mijozlar bilan ochiq va faol muloqot o'rnatish orqali bozoridagi mavqeimizni kengaytiramiz.",
      values: "Bizning qadriyatlarimiz",
      valuesText: "Mustaqillik, halollik, ochiqlik va o'zaro ishonch biz qiladigan hamma narsani boshqaradi.",
      integrity: "Mustaqillik",
      integrityText: "Biz barcha professional munosabatlar va mijoz aloqalarida mustaqillikni saqlaymiz.",
      partnership: "Hamkorlik",
      partnershipText:
        "Biz mijozlarimiz bilan ishonchli hamkorlar sifatida ularning biznes maqsadlariga erishish uchun yaqindan ishlaymiz.",
      excellence: "Mukammallik",
      excellenceText: "Biz taqdim etadigan har bir xizmatda mukammallikka intilmiz, sifat va aniqlikni ta'minlaymiz.",
      expertise: "Ekspertiza",
      expertiseText:
        "Bizning malakali auditorlar va mutaxassislar jamoamiz har qanday murakkablikdagi masalalarni hal qila oladi.",
      journey: "Bizning yo'limiz",
      journeyText:
        "2022 yilda tashkil etilganimizdan bugungi kungacha biz ishonchli audit tashkiloti sifatida o'zimizni mustahkamladik.",
      founded: "Kompaniya tashkil etilishi",
      foundedText: "WISE RESOLVERE MChJ 2022 yilda yaratildi va audit xizmatlari bozorida faoliyat boshladi.",
      license: "Litsenziyalangan faoliyat",
      licenseText:
        "Biz O'zbekiston Respublikasi Moliya vazirligining 2023 yil 26 yanvardagi 127-sonli litsenziyasi asosida faoliyat yuritamiz.",
      capital: "Ustav kapitali",
      capitalText: "Ustav kapitali hozirda ro'yxatga olish kunida 100 000 000 so'mdan ortiq miqdorni tashkil etadi.",
      insurance: "Sug'urta qamrovi",
      insuranceText:
        "Audit tashkiloti javobgarligini sug'urtalash polisi № 03-03/0681169266-001, O'ZBEKINVEST orqali 2 000 000 000 so'm miqdorida qamrov.",
      management: "Boshqaruv tuzilmasi",
      managementText:
        "Tashkilotni boshqarish WISE RESOLVERE MChJ direktori - tashkilotning doimiy xodimi tomonidan amalga oshiriladi.",
    },
    services: {
      title: "Bizning xizmatlarimiz",
      subtitle: "Sizning biznes ehtiyojlaringizga moslashtirilgan keng qamrovli audit va konsalting xizmatlari",
      audit: "Moliyaviy audit",
      auditDesc:
        "Aniqlik va tartibga solish standartlariga muvofiqlikni ta'minlaydigan keng qamrovli moliyaviy auditlar.",
      auditFeatures: [
        "Mustaqil moliyaviy hisobot auditlari",
        "Ichki nazorat baholash",
        "Muvofiqlik auditlari",
        "Xavflarni baholash va boshqarish",
        "Audit hisobotini tayyorlash",
        "Rahbariyatga tavsiyalar",
      ],
      consulting: "Biznes konsalting",
      consultingDesc:
        "Operatsiyalarni optimallashtirish va o'sishni rag'batlantirish uchun strategik biznes konsalting.",
      consultingFeatures: [
        "Biznes jarayonlarini optimallashtirish",
        "Moliyaviy rejalashtirish va tahlil",
        "Strategik rejalashtirish yordami",
        "Samaradorlikni oshirish",
        "O'zgarishlarni boshqarish",
        "Bozor tahlili va tadqiqot",
      ],
      tax: "Soliq xizmatlari",
      taxDesc: "Jismoniy va yuridik shaxslar uchun ekspert soliq rejalashtirish va muvofiqlik xizmatlari.",
      taxFeatures: [
        "Korporativ soliq tayyorlash",
        "Shaxsiy soliq deklaratsiyalari",
        "Soliq rejalashtirish strategiyalari",
        "Soliq muvofiqligini tekshirish",
        "Xalqaro soliq xizmatlari",
        "Soliq nizolarini hal qilish",
      ],
      accounting: "Buxgalteriya xizmatlari",
      accountingDesc: "Aniq moliyaviy yozuvlarni saqlash uchun professional buxgalteriya xizmatlari.",
      accountingFeatures: [
        "Kitoblar va yozuvlarni yuritish",
        "Moliyaviy hisobot tayyorlash",
        "Ish haqi ishlov berish",
        "Kreditorlik/debitorlik qarzlari",
        "Oylik moliyaviy hisobot",
        "Byudjet tayyorlash va monitoring",
      ],
      financial: "Moliyaviy maslahat",
      financialDesc: "Ma'lumotli biznes qarorlari uchun strategik moliyaviy maslahat xizmatlari.",
      financialFeatures: [
        "Moliyaviy rejalashtirish va prognozlash",
        "Investitsiya maslahati",
        "Pul oqimini boshqarish",
        "Kapital tuzilmasini optimallashtirish",
        "Qo'shilish va sotib olishni qo'llab-quvvatlash",
        "Baholash xizmatlari",
      ],
      compliance: "Muvofiqlik xizmatlari",
      complianceDesc: "Barcha biznes operatsiyalarida tartibga solish talablariga rioya qilishni ta'minlash.",
      complianceFeatures: [
        "Tartibga solish talablariga muvofiqlikni tekshirish",
        "Siyosat ishlab chiqish",
        "Muvofiqlik bo'yicha o'qitish",
        "Xavflarni boshqarish tizimi",
        "Ichki audit xizmatlari",
        "Boshqaruv bo'yicha maslahat",
      ],
      additionalServicesTitle: "Qo'shimcha xizmatlar",
      additionalServicesSubtitle: "Sizning noyob biznes talablaringizni qondirish uchun ixtisoslashgan xizmatlar",
      dueDiligence: "Keng qamrovli tekshiruv",
      dueDiligenceDesc: "Qo'shilish, sotib olish va investitsiyalar uchun keng qamrovli tekshiruv.",
      forensicAccounting: "Sud buxgalteriyasi",
      forensicAccountingDesc: "Moliyaviy qoidabuzarliklarni tergov qilish va firibgarlikni aniqlash.",
      ifrsImplementation: "XMHS joriy etish",
      ifrsImplementationDesc: "Xalqaro moliyaviy hisobot standartlarini qabul qilishda yordam.",
      trainingWorkshops: "O'qitish va seminarlar",
      trainingWorkshopsDesc: "Sizning moliya jamoangiz uchun professional rivojlanish dasturlari.",
      processTitle: "Bizning xizmat jarayoni",
      processSubtitle: "Ajoyib natijalarni berish uchun tuzilgan yondashuv",
      step1Title: "Dastlabki konsultatsiya",
      step1Desc: "Biz sizning talablaringizni tushunish uchun ehtiyojlaringiz va maqsadlaringizni muhokama qilamiz.",
      step2Title: "Taklif va kelishuv",
      step2Desc: "Biz qamrov, muddat va narxlar bilan batafsil taklif taqdim etamiz.",
      step3Title: "Loyihani amalga oshirish",
      step3Desc: "Bizning ekspert jamoamiz kelishilgan spetsifikatsiyalar bo'yicha xizmatlarni taqdim etadi.",
      step4Title: "Ko'rib chiqish va yetkazib berish",
      step4Desc: "Biz barcha natijalarni ko'rib chiqamiz va keng qamrovli hisobotlar va tavsiyalar taqdim etamiz.",
      getStarted: "Boshlash",
      whatsIncluded: "Nima kiritilgan:",
      startingFrom: "Dan boshlab",
    },
    clients: {
      title: "Kim bilan ishlaymiz?",
      subtitle: "Biz turli sohalardagi har xil o'lchamdagi bizneslarni xizmat qilamiz",
      smallBusiness: "Kichik biznes",
      smallBusinessDesc:
        "Mustahkam moliyaviy asoslarni yaratishga intilayotgan kichik biznes va startaplar uchun moslashtirilgan buxgalteriya va soliq xizmatlari.",
      mediumBusiness: "O'rta korxonalar",
      mediumBusinessDesc:
        "O'sib borayotgan o'rta o'lchamdagi bizneslar uchun keng qamrovli audit, konsalting va muvofiqlik xizmatlari.",
      largeCorporations: "Yirik korporatsiyalar",
      largeCorporationsDesc:
        "Murakkab moliyaviy ehtiyojlarga ega yirik korporatsiyalar uchun murakkab audit, soliq va konsalting yechimlari.",
      startups: "Startaplar va tadbirkorlar",
      startupsDesc:
        "Biznes rejalashtirish, soliq optimallashtirish va o'sish strategiyalarini o'z ichiga olgan startaplar uchun ixtisoslashgan xizmatlar.",
      nonprofits: "Notijorat tashkilotlari",
      nonprofitsDesc: "Notijorat tashkilotlari va xayriya muassasalari uchun maxsus audit va buxgalteriya xizmatlari.",
      individuals: "Yuqori daromadli shaxslar",
      individualsDesc:
        "Boy shaxslar uchun shaxsiy soliq rejalashtirish, meros rejalashtirish va boylik boshqaruvi xizmatlari.",
      industries: "Xizmat ko'rsatadigan sohalar",
      industriesTitle: "Bizning ekspertizamiz ko'plab sohalarni qamrab oladi",
      manufacturing: "Ishlab chiqarish",
      retail: "Chakana savdo va elektron tijorat",
      technology: "Texnologiya",
      healthcare: "Sog'liqni saqlash",
      construction: "Qurilish",
      hospitality: "Mehmonxona biznesi",
      transportCompanies: "Transport kompaniyalari",
      itCompanies: "IT kompaniyalar",
      production: "Ishlab chiqarish",
      wholesaleCompanies: "Ulgurji kompaniyalar",
      clinics: "Klinikalar va tibbiy markazlar",
      cafesRestaurants: "Kafeler va restoranlar",
    },
    team: {
      title: "Bizning ekspert jamoamiz bilan tanishing",
      subtitle: "Sizning muvaffaqiyatingizga bag'ishlangan tajribali mutaxassislar",
      director: "Direktor",
      auditor: "Auditor",
      education: "Ta'lim",
      directorDesc: "Xalqaro buxgalteriya standartlari va moliyaviy boshqaruvda keng tajribaga ega malakali buxgalter.",
      auditorDesc: "Audit va moliyaviy tahlilda ixtisoslashgan ekspertizaga ega malakali buxgalter.",
      joinTeam: "Jamoamizga qo'shiling",
      joinTeamDesc:
        "Biz har doim o'sib borayotgan jamoamizga qo'shilish uchun iqtidorli mutaxassislarni qidirmoqdamiz. Karyera imkoniyatlari haqida bilish uchun biz bilan bog'laning.",
    },
    process: {
      title: "Qanday ishlaymiz",
      subtitle:
        "Bu yerda siz bizning ish bosqichlarimiz haqida ko'proq bilib olasiz, shuningdek, hamma narsa qanday sodir bo'lishini tasavvur qila olasiz!",
      step1Title: "Buxgalterlar jamoasini tuzish",
      step1Desc:
        "Shartnoma tuzish va to'lovni muhokama qilgandan so'ng, sizga maxsus sohangizga moslashtirilgan individual buxgalterlar jamoasi tayinlanadi!",
      step2Title: "To'liq yordam",
      step2Desc:
        "Endi buxgalteriya, soliqlar va kadrlar sizga va kompaniyangizga tayinlangan buxgalterlarimiz nazorati ostida bo'ladi! Shuningdek, yuridik yordam!",
      step3Title: "Siz asosiy jarayonlarni nazorat qilasiz",
      step3Desc:
        "Buxgalterlar jamoangizga vazifalar qo'ying va hujjatlarning fotosuratlarini o'zingiz uchun qulay bo'lgan har qanday usulda yuboring! Shuningdek, silliq va qulay ish uchun qulay ilova mavjud!",
      stepsTitle: "Bizning ish jarayoni",
      stepsSubtitle: "Har bir mijoz bilan ishlashda barqaror natijalar beradigan isbotlangan metodologiya",
      featuresTitle: "Nega bizning jarayonimizni tanlash kerak",
      featuresSubtitle: "Bizning yondashuvimizni noyob va samarali qiladigan afzalliklar",
      feature1Title: "Individual jamoa tayinlash",
      feature1Desc: "Har bir mijoz o'z sohasida ixtisoslashgan malakali buxgalterlarning maxsus jamoasini oladi",
      feature2Title: "To'liq xizmat qamrovi",
      feature2Desc: "Biz buxgalteriya, soliqlar, kadrlar va yuridik yordam kabi barcha jihatlarni hal qilamiz",
      feature3Title: "Qulay aloqa",
      feature3Desc:
        "Aloqa qilish va hujjatlarni yuborish uchun bizning mobil ilovamizdan yoki har qanday qulay usuldan foydalaning",
    },
    rates: {
      title: "Bizning xizmat tariflari",
      subtitle: "Professional xizmatlar uchun shaffof narxlar",
      basic: "Asosiy paket",
      basicPrice: "2 500 $",
      basicDesc: "Kichik biznes va startaplar uchun mukammal",
      basicFeatures: [
        "Asosiy moliyaviy audit",
        "Soliq deklaratsiyasini tayyorlash",
        "Oylik moliyaviy hisobotlar",
        "Elektron pochta yordami",
        "Standart muddat",
      ],
      professional: "Professional paket",
      professionalPrice: "5 000 $",
      professionalDesc: "O'sib borayotgan o'rta bizneslar uchun ideal",
      professionalFeatures: [
        "Keng qamrovli moliyaviy audit",
        "Soliq rejalashtirish va tayyorlash",
        "Choraklik biznes ko'rib chiqishlar",
        "Boshqaruv maslahat xizmatlari",
        "Ustuvor yordam",
        "Tezlashtirilgan muddat",
      ],
      enterprise: "Korporativ paket",
      enterprisePrice: "10 000 $ +",
      enterpriseDesc: "Yirik korporatsiyalar uchun keng qamrovli yechimlar",
      enterpriseFeatures: [
        "To'liq qamrovli audit xizmatlari",
        "Murakkab soliq xizmatlari",
        "Strategik konsalting",
        "Muvofiqlik boshqaruvi",
        "Maxsus hisob menejeri",
        "24/7 yordam",
      ],
      custom: "Maxsus yechimlar",
      customDesc: "Sizning aniq ehtiyojlaringiz va talablaringiz asosida moslashtirilgan paketlar",
      consultation: "Bepul konsultatsiya",
      consultationDesc:
        "Ehtiyojlaringizni muhokama qilish va moslashtirilgan taklif olish uchun bepul konsultatsiya rejalashtiring",
      hourlyRate: "Soatlik konsalting",
      hourlyRateDesc: "Murakkablikka qarab soatiga 150-300 dollar professional konsalting xizmatlari",
      getQuote: "Maxsus taklif oling",
      popular: "Eng mashhur",
      contactForPricing: "Narx uchun bog'laning",
    },
    order: {
      title: "Xizmatlarni buyurtma qilish",
      getStarted: "Bugun boshlang",
      heroDesc:
        "Biz bilan ishlashga tayyormisiz? Quyidagi formani to'ldiring va biz 24 soat ichida moslashtirilgan taklif bilan sizga qaytamiz.",
      requestQuote: "Taklif so'rang",
      quoteDesc: "Loyihangiz haqida bizga ayting va biz moslashtirilgan taklif taqdim etamiz",
      personalInfo: "Shaxsiy ma'lumotlar",
      firstName: "Ism",
      lastName: "Familiya",
      email: "Elektron pochta manzili",
      phone: "Telefon raqami",
      companyInfo: "Kompaniya ma'lumotlari",
      companyName: "Kompaniya nomi",
      position: "Sizning lavozimingiz",
      industry: "Soha",
      selectIndustry: "Sohangizni tanlang",
      projectInfo: "Loyiha ma'lumotlari",
      serviceType: "Xizmat turi",
      selectService: "Kerakli xizmatni tanlang",
      projectDescription: "Loyiha tavsifi",
      projectDescPlaceholder:
        "Iltimos, loyihangizni, aniq talablarni va duch kelayotgan qiyinchiliklarni tasvirlab bering...",
      timeline: "Vaqt jadvali",
      selectTimeline: "Buni qachon tugallashingiz kerak?",
      budget: "Byudjet diapazoni",
      selectBudget: "Byudjet diapazoningizni tanlang",
      additionalServices: "Qo'shimcha xizmatlar",
      contactPreferences: "Aloqa afzalliklari",
      preferredContact: "Afzal qilingan aloqa usuli",
      emailContact: "Elektron pochta",
      phoneContact: "Telefon qo'ng'irog'i",
      bothContact: "Elektron pochta ham, telefon ham",
      projectUrgency: "Loyiha shoshilinchligi",
      lowUrgency: "Past - oldindan rejalashtirish",
      normalUrgency: "Oddiy - standart muddat",
      highUrgency: "Yuqori - tez boshlash kerak",
      submitRequest: "So'rovni yuborish",
      submittingRequest: "So'rov yuborilmoqda...",
      privacyNote:
        "Ushbu formani yuborish orqali siz bizning xizmat shartlari va maxfiylik siyosatimizga rozilik bildirasiz. Loyihangizni muhokama qilish uchun 24 soat ichida siz bilan bog'lanamiz.",
      whatHappensNext: "Keyin nima bo'ladi?",
      whatHappensDesc: "So'rovingizni yuborgandan keyin nimani kutishingiz mumkin",
      initialReview: "Dastlabki ko'rib chiqish",
      initialReviewDesc:
        "Biz so'rovingizni ko'rib chiqamiz va 2 soat ichida loyihangiz uchun to'g'ri jamoa a'zosini tayinlaymiz.",
      personalContact: "Shaxsiy aloqa",
      personalContactDesc:
        "Bizning ekspertimiz ehtiyojlaringizni muhokama qilish va savollarga javob berish uchun 24 soat ichida siz bilan bog'lanadi.",
      customProposal: "Maxsus taklif",
      customProposalDesc: "Biz 48 soat ichida vaqt jadvali, qamrov va narxlar bilan batafsil taklif tayyorlaymiz.",
      successTitle: "So'rov muvaffaqiyatli yuborildi!",
      successDesc: "Loyihangizni muhokama qilish uchun 24 soat ichida siz bilan bog'lanamiz.",
      services: {
        audit: "Moliyaviy audit",
        tax: "Soliq xizmatlari",
        consulting: "Biznes konsalting",
        accounting: "Buxgalteriya xizmatlari",
        dueDiligence: "Keng qamrovli tekshiruv",
        ifrs: "XMHS joriy etish",
        other: "Boshqa xizmatlar",
      },
      budgetRanges: {
        under5k: "5 000 $ dan kam",
        range5k15k: "5 000 $ - 15 000 $",
        range15k50k: "15 000 $ - 50 000 $",
        range50k100k: "50 000 $ - 100 000 $",
        over100k: "100 000 $ dan ortiq",
        discuss: "Muhokama qilishni afzal ko'raman",
      },
      timelines: {
        urgent: "Shoshilinch (2 hafta ichida)",
        oneMonth: "1 oy",
        twoThreeMonths: "2-3 oy",
        threeSixMonths: "3-6 oy",
        flexible: "Moslashuvchan muddat",
      },
      additionalServiceOptions: {
        training: "O'qitish va seminarlar",
        ongoingSupport: "Doimiy yordam",
        systemImplementation: "Tizimni joriy etish",
        processDocumentation: "Jarayonlarni hujjatlashtirish",
        complianceMonitoring: "Muvofiqlik monitoringi",
        regularReviews: "Muntazam ko'rib chiqishlar",
      },
    },
    contact: {
      title: "Biz bilan bog'laning",
      name: "To'liq ism",
      email: "Elektron pochta manzili",
      phone: "Telefon raqami",
      message: "Xabar",
      send: "Xabar yuborish",
      subject: "Mavzu",
      getInTouch: "Bog'laning",
      sendMessage: "Bizga xabar yuboring",
      heroDesc:
        "Xizmatlarimiz haqida savollaringiz bormi? Konsultatsiya kerakmi? Biz yordam berish uchun shu yerdamiz. Bugun biz bilan bog'laning va biznesingizni qanday qo'llab-quvvatlashimiz mumkinligini muhokama qilaylik.",
      formDesc: "Quyidagi formani to'ldiring va biz imkon qadar tezroq siz bilan bog'lanamiz.",
      namePlaceholder: "Sizning to'liq ismingiz",
      emailPlaceholder: "your@email.com",
      phonePlaceholder: "+1 (555) 123-4567",
      subjectPlaceholder: "Bu nima haqida?",
      messagePlaceholder: "So'rovingiz, savollaringiz yoki sizga qanday yordam bera olishimiz haqida bizga ayting...",
      sending: "Yuborilmoqda...",
      successTitle: "Xabar muvaffaqiyatli yuborildi!",
      successDesc: "24 soat ichida siz bilan bog'lanamiz.",
      privacy:
        "Ushbu formani yuborish orqali siz bizning maxfiylik siyosatimizga rozilik bildirasiz. 24 soat ichida javob beramiz.",
      whyContactTitle: "Nega Wise Resolvere bilan bog'lanish kerak?",
      whyContactDesc:
        "Biz ajoyib xizmat ko'rsatish va mijozlarimiz bilan uzoq muddatli munosabatlar o'rnatishga sodiqmiz.",
      quickResponse: "Tez javob",
      quickResponseDesc: "Biz barcha so'rovlarga 24 soat ichida, ko'pincha ancha tezroq javob beramiz.",
      personalizedService: "Shaxsiylashtirilgan xizmat",
      personalizedServiceDesc: "Har bir mijoz shaxsiy e'tibor va moslashtirilgan yechimlarni oladi.",
      expertAdvice: "Ekspert maslahati",
      expertAdviceDesc: "Bizning tajribali audit va konsalting ekspertlari jamoasidan professional maslahat oling.",
      emailDesc: "Bizga istalgan vaqtda elektron pochta yuboring",
      phoneDesc: "Du-Ju 9:00 - 18:00",
      address: "Bizni ziyorat qiling",
      addressDesc: "Uchrashuv rejalashtiring",
      response: "Javob vaqti",
      responseTime: "24 soat ichida",
      responseDesc: "Biz tez javob beramiz",
      officeHours: "Ish vaqti",
      officeHoursTime: "Dushanba - Juma: 9:00 - 18:00",
      location: "Bizning joylashuvimiz",
      locationAddress: "123 Biznes tumani, Toshkent, O'zbekiston",
    },
    footer: {
      company: "Kompaniya",
      services: "Xizmatlar",
      contact: "Aloqa",
      rights: "Barcha huquqlar himoyalangan.",
      description:
        "Bizneslarning moliyaviy mukammallik va muvofiqlikka erishishiga yordam beradigan professional audit va konsalting xizmatlari.",
      quickLinks: "Tez havolalar",
      followUs: "Bizni kuzatib boring",
      newsletter: "Yangiliklar",
      newsletterDesc: "Eng so'nggi yangilanishlar va tushunchalar uchun bizning yangiliklar ro'yxatiga obuna bo'ling.",
      subscribe: "Obuna bo'lish",
      emailPlaceholder: "Emailingizni kiriting",
    },
    common: {
      learnMore: "Ko'proq bilib oling",
      getStarted: "Boshlash",
      contactUs: "Biz bilan bog'laning",
      readMore: "Ko'proq o'qish",
      viewAll: "Barchasini ko'rish",
      backToTop: "Yuqoriga",
      loading: "Yuklanmoqda...",
      error: "Xato",
      success: "Muvaffaqiyat",
      years: "Yil",
      clients: "Mijozlar",
      projects: "Loyihalar",
      experience: "Tajriba",
    },
  },
}
