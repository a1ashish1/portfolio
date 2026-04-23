export type Language = "en" | "hi";

export interface DetailItem {
  label: string;
  value: string;
}

export interface ListGroup {
  subtitle?: string;
  items: string[];
}

export interface BioSection {
  id: string;
  title: string;
  type: "details" | "list";
  items?: DetailItem[];
  groups?: ListGroup[];
}

export interface BioHeader {
  blessing: string;
  title: string;
  name: string;
  closingBlessing: string;
}

export interface BioContact {
  title: string;
  phone: { label: string; value: string };
  email?: { label: string; value: string };
  address?: { label: string; value: string };
}

export interface BioGallery {
  title: string;
}

export interface BioContent {
  header: BioHeader;
  sections: BioSection[];
  gallery: BioGallery;
  contact: BioContact;
}

export const bioDataContent: Record<Language, BioContent> = {
  en: {
    header: {
      blessing: "|| Shree Ganeshaya Namah ||",
      title: "Bio-Data",
      name: "Ashish Kumar",
      closingBlessing: "|| Shubh Mangal ||",
    },
    sections: [
      {
        id: "basicDetails",
        title: "Basic Details",
        type: "details",
        items: [
          { label: "Name", value: "Ashish Kumar" },
          { label: "Date of Birth", value: "27 June 1998" },
          { label: "Time of Birth", value: "12:15 AM" },
          { label: "Place of Birth", value: "Vindhyanagar, Madhya Pradesh" },
        ],
      },
      {
        id: "earlyLife",
        title: "Early Life & Education",
        type: "list",
        groups: [
          {
            items: [
              "Born in Vindhyanagar, later moved to Faridabad",
              "Completed primary education in Faridabad up to Class 4 (2007)",
              "Relocated to Bihar in 2007 after mother received a government posting",
              "Briefly attended a boarding school in Darbhanga",
              "Selected for Jawahar Navodaya Vidyalaya (JNV) in 2009",
              "Matriculation from JNV Darbhanga (2014) with 10 CGPA",
              "Maintained a Top 3 rank throughout schooling",
              "Actively participated in academics and extracurricular activities",
            ],
          },
        ],
      },
      {
        id: "achievements",
        title: "Achievements",
        type: "list",
        groups: [
          {
            items: [
              "Represented Bihar–Jharkhand cluster in Table Tennis (2011–2014)",
              "Qualified for Math Olympiad Regionals on two occasions",
              "Served as House Captain for 3 consecutive years",
              "Served as School Captain for 1 year",
            ],
          },
        ],
      },
      {
        id: "intermediate",
        title: "Intermediate Education",
        type: "list",
        groups: [
          {
            subtitle: "Academics",
            items: [
              "Enrolled at Sri Chaitanya for intermediate studies (Class 11–12)",
              "Qualified for National Talent Search Examination",
              "Andhra Pradesh State Rank 1 in National Science Olympiad (NSO)",
            ],
          },
          {
            subtitle: "Competitive Examinations",
            items: [
              "JEE Mains Rank — ~1,300",
              "JEE Advanced Rank — ~7,000",
              "VIT / SRM Rank — under 500",
            ],
          },
        ],
      },
      {
        id: "graduation",
        title: "Graduation",
        type: "list",
        groups: [
          {
            subtitle: "Academics",
            items: [
              "Joined NIT Warangal (2016) — Electrical & Electronics Engineering",
              "Upgraded to Electronics & Communication Engineering after first year as branch topper",
              "Graduated with CGPA 8.65, ranked in Top 5 of the department",
              "Awarded merit scholarship for all 4 years, covering full tuition fees",
            ],
          },
          {
            subtitle: "Sports & Activities",
            items: [
              "Member of the college Table Tennis team for all 4 years",
              "Represented college at inter-NIT tournaments in Kurukshetra, Nagpur, and Silchar",
              "Served as Team Captain in the final year",
              "Won 2 Gold and 5 Silver medals at NIT Silchar tournament",
              "Awarded Best Sportsman of the Year and best outgoing sportsman of the year by NIT Warangal",
            ],
          },
        ],
      },
      {
        id: "career",
        title: "Career",
        type: "list",
        groups: [
          {
            items: [
              "Began professional journey with an internship at Samsung Research, Bangalore",
              "Oracle — Application Developer (3 years)",
              "Highspot — SDE 2 Level 2 (~1.8 years)",
              "ABC Fitness — Senior Software Engineer (current role)",
            ],
          },
        ],
      },
      {
        id: "family",
        title: "Family Details",
        type: "details",
        items: [
          { label: "Father", value: "Late (passed away in 2010)" },
          {
            label: "Mother",
            value: "Government school teacher",
          },
          {
            label: "Sister",
            value:
              "Younger, completed postgraduation, preparing for government examinations",
          },
          { label: "Family Residence", value: "Madhubani, Bihar" },
        ],
      },
    ],
    gallery: {
      title: "Photographs",
    },
    contact: {
      title: "Contact Information",
      phone: { label: "Phone", value: "+91 95153 74137" },
      email: { label: "Email", value: "ycsashish120@gmail.com" },
    },
  },
  hi: {
    header: {
      blessing: "॥ श्री गणेशाय नमः ॥",
      title: "जीवन-परिचय",
      name: "आशीष कुमार",
      closingBlessing: "॥ शुभ मंगल ॥",
    },
    sections: [
      {
        id: "basicDetails",
        title: "मूल विवरण",
        type: "details",
        items: [
          { label: "नाम", value: "आशीष कुमार" },
          { label: "जन्म तिथि", value: "27 जून 1998" },
          { label: "जन्म समय", value: "रात्रि 12:15 बजे" },
          { label: "जन्म स्थान", value: "विंध्यनगर, मध्य प्रदेश" },
        ],
      },
      {
        id: "earlyLife",
        title: "प्रारंभिक जीवन एवं शिक्षा",
        type: "list",
        groups: [
          {
            items: [
              "विंध्यनगर में जन्म, बाद में फरीदाबाद आए",
              "फरीदाबाद में कक्षा 4 तक प्राथमिक शिक्षा पूर्ण की (2007)",
              "2007 में बिहार स्थानांतरित हुए, माँ को सरकारी नियुक्ति प्राप्त हुई",
              "दरभंगा के एक आवासीय विद्यालय में कुछ समय अध्ययन किया",
              "2009 में जवाहर नवोदय विद्यालय (JNV) में चयनित",
              "JNV दरभंगा से दसवीं (2014) — 10 CGPA के साथ उत्तीर्ण",
              "विद्यालय में सदैव शीर्ष 3 में स्थान बनाए रखा",
              "शिक्षा एवं सह-पाठ्यक्रम गतिविधियों में सक्रिय भागीदारी",
            ],
          },
        ],
      },
      {
        id: "achievements",
        title: "उपलब्धियाँ",
        type: "list",
        groups: [
          {
            items: [
              "बिहार-झारखंड क्लस्टर का टेबल टेनिस में प्रतिनिधित्व (2011–2014)",
              "गणित ओलंपियाड क्षेत्रीय स्तर के लिए दो बार चयनित",
              "3 वर्षों तक हाउस कैप्टन के रूप में सेवा",
              "1 वर्ष तक स्कूल कैप्टन के रूप में सेवा",
            ],
          },
        ],
      },
      {
        id: "intermediate",
        title: "इंटरमीडिएट शिक्षा",
        type: "list",
        groups: [
          {
            subtitle: "शैक्षणिक",
            items: [
              "इंटरमीडिएट शिक्षा (कक्षा 11–12) हेतु श्री चैतन्य में प्रवेश",
              "राष्ट्रीय प्रतिभा खोज परीक्षा (NTSE) के लिए योग्यता प्राप्त",
              "राष्ट्रीय विज्ञान ओलंपियाड (NSO) में आंध्र प्रदेश राज्य रैंक 1",
            ],
          },
          {
            subtitle: "प्रतियोगी परीक्षाएँ",
            items: [
              "JEE Mains रैंक — ~1,300",
              "JEE Advanced रैंक — ~7,000",
              "VIT / SRM रैंक — 500 से कम",
            ],
          },
        ],
      },
      {
        id: "graduation",
        title: "स्नातक शिक्षा",
        type: "list",
        groups: [
          {
            subtitle: "शैक्षणिक",
            items: [
              "NIT वारंगल (2016) में विद्युत एवं इलेक्ट्रॉनिक्स अभियांत्रिकी में प्रवेश",
              "प्रथम वर्ष में ब्रांच टॉपर के रूप में इलेक्ट्रॉनिक्स एवं संचार अभियांत्रिकी में अपग्रेड",
              "CGPA 8.65 के साथ स्नातक, विभाग में शीर्ष 5",
              "चारों वर्ष मेरिट छात्रवृत्ति प्राप्त, पूर्ण शुल्क माफ़ी",
            ],
          },
          {
            subtitle: "खेल एवं गतिविधियाँ",
            items: [
              "चारों वर्ष कॉलेज टेबल टेनिस टीम के सदस्य",
              "कुरुक्षेत्र, नागपुर एवं सिलचर में अंतर-NIT प्रतियोगिताओं में कॉलेज का प्रतिनिधित्व",
              "अंतिम वर्ष में टीम कैप्टन",
              "NIT सिलचर में 2 स्वर्ण एवं 5 रजत पदक",
              "NIT वारंगल द्वारा वर्ष का सर्वश्रेष्ठ खिलाड़ी एवं सर्वश्रेष्ठ विदाई खिलाड़ी पुरस्कार",
            ],
          },
        ],
      },
      {
        id: "career",
        title: "व्यावसायिक अनुभव",
        type: "list",
        groups: [
          {
            items: [
              "Samsung Research, बेंगलुरु में इंटर्नशिप से व्यावसायिक यात्रा की शुरुआत",
              "Oracle — एप्लीकेशन डेवलपर (3 वर्ष)",
              "Highspot — SDE 2 Level 2 (लगभग 1.8 वर्ष)",
              "ABC Fitness — सीनियर सॉफ्टवेयर इंजीनियर (वर्तमान)",
            ],
          },
        ],
      },
      {
        id: "family",
        title: "पारिवारिक विवरण",
        type: "details",
        items: [
          { label: "पिताजी", value: "स्वर्गीय (2010 में निधन)" },
          {
            label: "माँ",
            value: "सरकारी विद्यालय में शिक्षिका",
          },
          {
            label: "बहन",
            value:
              "छोटी बहन, स्नातकोत्तर पूर्ण, सरकारी परीक्षाओं की तैयारी में",
          },
          { label: "पारिवारिक निवास", value: "मधुबनी, बिहार" },
        ],
      },
    ],
    gallery: {
      title: "फ़ोटोग्राफ़",
    },
    contact: {
      title: "संपर्क जानकारी",
      phone: { label: "फ़ोन", value: "+91 95153 74137" },
      email: { label: "ईमेल", value: "ycsashish120@gmail.com" },
    },
  },
};
