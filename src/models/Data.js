export const categories = [
    {
        id: 1,
        categoryTitle: 'خدمات السيارات',
        categoryType: 'CAR_SERVICES',
        icon: 'camera',
        availableServices: [ 'غسيل وتلميع', 'تغيير زيوت', 'سطحه' ,'تغيير كفرات',  'قطع غيار' ]
    },
    {
        id: 2,
        categoryTitle: 'نقل وتركيب اثاث',
        categoryType: 'MOVING_AND_INSTALLING_FURNITURE',
        icon: 'camera',
    },
    {
        id: 3,
        categoryTitle: 'تجميل',
        categoryType: 'BEAUTY',
        icon: 'camera',
    },
    {
        id: 4,
        categoryTitle: 'عناية بالحيوانات',
        categoryType: 'PET_CARE',
        icon: 'camera',
    },
    {
        id: 5,
        categoryTitle: 'خدمات المنزل',
        categoryType: 'HOME_SERVICES',
        icon: 'camera',
    },
    {
        id: 6,
        categoryTitle: 'قص شعر',
        categoryType: 'CUTTING_HAIR',
        icon: 'camera',
    },
    {
        id: 7,
        categoryTitle: 'مدرسين خصوصيين',
        categoryType: 'PRIVATE_TUTORING ',
        icon: 'camera',
    },
]

export const serviceProviders = [
    {
        id: 1,
        serviceProviderCategory: 'CAR_SERVICES',
        serviceProviderName: 'شركة مرني',
        serviceProviderDescription: 'يقدم مرني خدمات المساعدة على الطريق. يمكنك الدفع عند اكمال الطلب او اشتري احد الباقات السنوية',
        serviceProviderIcon: 'https://play-lh.googleusercontent.com/GhZvZxiugJc2g2JljHZ8Mhe1lXXadN2dKcQEvToWVg1xUZlyAc3HAvLufOPJdMtffs1F',
        services: [
            { id: '1', label: 'غسيل وتلميع', value: 'بعد تواصلك معنا لتحديد نوع المساحات سوف نرسل لك فريق مختص لتغيير مساحاتك بأسرع وقت' },
            { id: '1', label: 'تغيير زيت', value: 'services.value' },
        ],
        clientReviews: [
            { clientName: 'هند', clientDescription: 'شغلهم احترافي وسريع، شكرا لكم 👍', clienIcon: 'https://pbs.twimg.com/media/ElENQo-U8AA_1jS.jpg', clientStarsReview: 4 }
        ],
    },
    {
        id: 2,
        serviceProviderCategory: 'CAR_SERVICES',
        serviceProviderName: 'مؤسسة مسمار',
        serviceProviderDescription: 'مسمار شركة تقنية سعودية ناشئة قائمة على تطبيق ذكي متوفر على متجر أبلوأندرويد',
        serviceProviderIcon: 'https://play-lh.googleusercontent.com/GhZvZxiugJc2g2JljHZ8Mhe1lXXadN2dKcQEvToWVg1xUZlyAc3HAvLufOPJdMtffs1F',
        services: [
            { id: '1', label: 'غسيل وتلميع', value: 'بعد تواصلك معنا لتحديد نوع المساحات سوف نرسل لك فريق مختص لتغيير مساحاتك بأسرع وقت' },
            { id: '1', label: 'تغيير زيت', value: 'services.value' },
        ],
        clientReviews: [
            { clientName: 'هند', clientDescription: 'شغلهم احترافي وسريع، شكرا لكم 👍', clienIcon: 'https://pbs.twimg.com/media/ElENQo-U8AA_1jS.jpg', clientStarsReview: 4 }
        ]
    },
]

export const famousServiceProviders = [
    {
        id: 1,
        serviceProviderCategory: 'CAR_SERVICES',
        serviceProviderName: 'شركة مرني',
        serviceProviderDescription: 'يقدم مرني خدمات المساعدة على الطريق. يمكنك الدفع عند اكمال الطلب او اشتري احد الباقات السنوية',
        serviceProviderIcon: 'https://play-lh.googleusercontent.com/GhZvZxiugJc2g2JljHZ8Mhe1lXXadN2dKcQEvToWVg1xUZlyAc3HAvLufOPJdMtffs1F',
        services: [
            { id: '1', label: 'غسيل وتلميع', value: 'بعد تواصلك معنا لتحديد نوع المساحات سوف نرسل لك فريق مختص لتغيير مساحاتك بأسرع وقت' },
            { id: '1', label: 'تغيير زيت', value: 'services.value' },
        ],
        clientReviews: [
            { clientName: 'هند', clientDescription: 'شغلهم احترافي وسريع، شكرا لكم 👍', clienIcon: 'https://pbs.twimg.com/media/ElENQo-U8AA_1jS.jpg', clientStarsReview: 4 }
        ]
    },
    {
        id: 2,
        serviceProviderCategory: 'CAR_SERVICES',
        serviceProviderName: 'مؤسسة مسمار',
        serviceProviderDescription: 'مسمار شركة تقنية سعودية ناشئة قائمة على تطبيق ذكي متوفر على متجر أبلوأندرويد',
        serviceProviderIcon: 'https://play-lh.googleusercontent.com/GhZvZxiugJc2g2JljHZ8Mhe1lXXadN2dKcQEvToWVg1xUZlyAc3HAvLufOPJdMtffs1F',
        services: [
            { id: '1', label: 'غسيل وتلميع', value: 'بعد تواصلك معنا لتحديد نوع المساحات سوف نرسل لك فريق مختص لتغيير مساحاتك بأسرع وقت' },
            { id: '1', label: 'تغيير زيت', value: 'services.value' },
        ],
        clientReviews: [
            { clientName: 'هند', clientDescription: 'شغلهم احترافي وسريع، شكرا لكم 👍', clienIcon: 'https://pbs.twimg.com/media/ElENQo-U8AA_1jS.jpg', clientStarsReview: 4 }
        ]
    },
]

export const chatData = [
    {
      serviceProviderName: 'مشاعل - جليس اطفال',
      serviceProviderChatPreview: 'في طريقي لك',
      serviceProviderIcon: 'https://www.pantrypal.io/content/images/2021/03/ToyFaces_Colored_BG_26.jpg',
      timing: '6:34 PM',
    },
    {
      serviceProviderName: 'مرني - خدمات السيارات',
      serviceProviderChatPreview: 'ايه نعم',
      serviceProviderIcon: 'https://play-lh.googleusercontent.com/GhZvZxiugJc2g2JljHZ8Mhe1lXXadN2dKcQEvToWVg1xUZlyAc3HAvLufOPJdMtffs1F',
      timing: '2:15 PM',
    },
    {
      serviceProviderName: 'عبدالرحمن - نقل وتركيب اثاث',
      serviceProviderChatPreview: 'السلام عليكم، نقلنا الأثاث للشقه',
      serviceProviderIcon: 'https://pbs.twimg.com/media/EbRZ0YAU8AEY7KJ.jpg',
      timing: '3:50 PM',
    },
  ]

export const bookingAvailability = [
    {
        title: 'متاح للطلب الأن',
        value: 'availableNow',
    },
    {
        title: 'حجوزات فقط',
        value: 'availableNow',
    },
]

