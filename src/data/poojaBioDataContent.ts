import type { Language, BioContent } from "./bioDataContent";

export const poojaBioDataContent: Record<Language, BioContent> = {
  en: {
    header: {
      blessing: "|| Shree Ganeshaya Namah ||",
      title: "Bio-Data",
      name: "Pooja Bharti",
      closingBlessing: "|| Shubh Mangal ||",
    },
    sections: [
      {
        id: "basicDetails",
        title: "Personal Details",
        type: "details",
        items: [
          { label: "Name", value: "Pooja Bharti" },
          { label: "Date of Birth", value: "13 March 2000" },
          { label: "Place of Birth", value: "Madhubani, Bihar" },
          { label: "Rashi", value: "Kanya (Virgo)" },
          { label: "Height", value: "5 feet 6 inches (168 cm)" },
          { label: "Mother Tongue", value: "Maithili" },
        ],
      },
      {
        id: "education",
        title: "Education",
        type: "list",
        groups: [
          {
            items: [
              "Matriculation — Block Topper",
              "Intermediate — Science stream",
              "B.A. — English",
              "B.Ed. — College Top 5 rank holder",
              "CTET — Qualified",
              "M.A. — Pursuing from Patna",
            ],
          },
        ],
      },
      {
        id: "skills",
        title: "Skills & Interests",
        type: "list",
        groups: [
          {
            items: [
              "Strong public speaking skills",
              "Computer proficiency with certification",
              "Comfortable with independent travel by air, train, and road",
              "Proficient in driving both 2-wheeler and 4-wheeler vehicles",
            ],
          },
        ],
      },
      {
        id: "family",
        title: "Family Details",
        type: "details",
        items: [
          { label: "Father", value: "Late Shri Ashok Kumar Thakur" },
          { label: "Mother", value: "Smt. Veena Kumari" },
          { label: "Mother's Occupation", value: "Government Teacher" },
          { label: "Brother", value: "Ashish Kumar" },
          { label: "Brother's Occupation", value: "Senior Software Engineer" },
        ],
      },
    ],
    gallery: {
      title: "Photographs",
    },
    contact: {
      title: "Contact Information",
      phone: { label: "Phone (Brother)", value: "+91 95153 74137" },
      address: { label: "Address", value: "Madhubani, Bihar" },
    },
  },
  hi: {
    header: {
      blessing: "॥ श्री गणेशाय नमः ॥",
      title: "जीवन-परिचय",
      name: "पूजा भारती",
      closingBlessing: "॥ शुभ मंगल ॥",
    },
    sections: [
      {
        id: "basicDetails",
        title: "व्यक्तिगत विवरण",
        type: "details",
        items: [
          { label: "नाम", value: "पूजा भारती" },
          { label: "जन्म तिथि", value: "13 मार्च 2000" },
          { label: "जन्म स्थान", value: "मधुबनी, बिहार" },
          { label: "राशि", value: "कन्या" },
          { label: "ऊँचाई", value: "5 फीट 6 इंच (168 सेमी)" },
          { label: "मातृभाषा", value: "मैथिली" },
        ],
      },
      {
        id: "education",
        title: "शिक्षा",
        type: "list",
        groups: [
          {
            items: [
              "मैट्रिक — ब्लॉक टॉपर",
              "इंटरमीडिएट — विज्ञान संकाय",
              "बी.ए. — अंग्रेज़ी",
              "बी.एड. — कॉलेज में शीर्ष 5 में स्थान",
              "CTET — उत्तीर्ण",
              "एम.ए. — पटना से अध्ययनरत",
            ],
          },
        ],
      },
      {
        id: "skills",
        title: "कौशल एवं रुचियाँ",
        type: "list",
        groups: [
          {
            items: [
              "उत्कृष्ट वाक्पटुता कौशल",
              "कंप्यूटर दक्षता एवं प्रमाणपत्र प्राप्त",
              "हवाई, रेल एवं सड़क मार्ग से स्वतंत्र रूप से यात्रा करने में सक्षम",
              "दो पहिया एवं चार पहिया वाहन चालन में दक्ष",
            ],
          },
        ],
      },
      {
        id: "family",
        title: "पारिवारिक विवरण",
        type: "details",
        items: [
          { label: "पिताजी", value: "स्वर्गीय श्री अशोक कुमार ठाकुर" },
          { label: "माँ", value: "श्रीमती वीणा कुमारी" },
          { label: "माँ का व्यवसाय", value: "सरकारी शिक्षिका" },
          { label: "भाई", value: "आशीष कुमार" },
          { label: "भाई का व्यवसाय", value: "सीनियर सॉफ्टवेयर इंजीनियर" },
        ],
      },
    ],
    gallery: {
      title: "फ़ोटोग्राफ़",
    },
    contact: {
      title: "संपर्क जानकारी",
      phone: { label: "फ़ोन (भाई)", value: "+91 95153 74137" },
      address: { label: "पता", value: "मधुबनी, बिहार" },
    },
  },
};
