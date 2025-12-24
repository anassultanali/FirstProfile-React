import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navbar: {
          langEN: "English",
          langAR: "Arabic",
          logoW: "Anas",
          logoP: "Sultan",
          home: "Home",
          about: "About",
          skills: "Skills",
          projects: "Projects",
          contact: "Contact",
        },
        hero: {
          welcome: "Hi, I'm",
          fName: "Anas",
          lName: "Sultan",
          subtitles:
            "I create stellar web experiences with modern technologies. Specializing in front-end development, I build interfaces that are both beautiful and functional.",
          heroBtn: "View My Work",
          scroll: "Scroll",
        },
        about: {
          title1: "About",
          title2: "Me",
          subTitle: "Web Developer & Tech Creator",
          subtitles1: "",
          subtitles2:
            "I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.",
          contactBtn: "Get In Touch",
          CVbtn: " Download CV",
          card1: {
            title: "Web Development",
            sub: "Creating responsive websites and web applications with modern frameworks.",
          },
          card2: {
            title: "UI/UX Design",
            sub: "Designing intuitive user interfaces and seamless user experiences.",
          },
          card3: {
            title: "Project Management",
            sub: "Leading projects from conception to completion with agile methodologies.",
          },
        },
        skills: {
          title1: "My",
          title2: "Skills",
          all: "All",
          tools: "Tools",
        },
        projects: {
          title1: "Featured",
          title2: "Projects",
          sub: "Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.",
          project1: {
            title: "Mohamed Ali Club",
            sub: "A multi-page introductory website using Bootstrap."
          },
          project2: {
            title: "Interno Furniture",
            sub: "A beautiful landing page app using  Tailwind."
          },
          project3: {
            title: "Movies Recommendation",
            sub: "A Movies Recommendation page using React and Tailwind."
          },
          btn: "Check My Github"
        },
        contact: {
          title1: "Get In ",
          title2: "Touch",
          sub: "Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.",
          contactInfo: "Contact Information",
          email: "Email",
          phone: "Phone",
          location: "Location",
          locSub: "sana'a , Yemen",
          socialTitle: "Connect With Me",
          form: {
            title: "Send a Message",
            name: {
              title: "Your Name",
              PH: "Inter your name..."
            },
            email: {
              title: "Your Email",
              PH: "Inter your Email..."
            },
            message: {
              title: "Your Message",
              PH: "Inter your Message..."
            },
            btnSend : "Send Message",
            btnSending : "Sending...",
          }
        },
      },
    },
    ar: {
      translation: {
        navbar: {
          langEN: "أنجليزي",
          langAR: "عربي",
          logoW: "أنس",
          logoP: "سلطان",
          home: "الرئيسية",
          about: "عني",
          skills: "المهارات",
          projects: "أعمالي",
          contact: "للتواصل",
        },
        hero: {
          welcome: "مرحباً، أنا",
          fName: "أنس",
          lName: "سلطان👋",
          subtitles: `مطوّر واجهات أمامية وخلفية أبني مواقع ويب حديثة باستخدام React ⚛️ و Laravel 🛠️   `,
          heroBtn: "عرض أعمالي",
          scroll: "اكتشف المزيد",
        },
        about: {
          title1: "نبذة",
          title2: "عني",
          subTitle: "مطور مواقع إلكترونية ومبتك تقنيات",
          subtitles1: "",
          subtitles2:
            "أنا شغوف بابتكار حلول أنيقة للمشاكل المعقدة، وأحرص باستمرار على تعلم التقنيات والأساليب الجديدة للبقاء في طليعة المشهد المتطور باستمرار للويب.",
          contactBtn: "تواصل معنا",
          CVbtn: " تحميل السيرة الذاتية",
          card1: {
            title: "تطوير الويب",
            sub: "إنشاء مواقع ويب وتطبيقات ويب متجاوبة باستخدام أطر عمل حديثة.",
          },
          card2: {
            title: "تصميم UI/UX",
            sub: "تصميم واجهات مستخدم سهلة الاستخدام وتجارب مستخدم سلسة.",
          },
          card3: {
            title: "إدارة المشاريع",
            sub: "قيادة المشاريع من الفكرة إلى الإنجاز باستخدام منهجيات رشيقة.",
          },
        },
        skills: {
          title1: "المهارات &",
          title2: "التفنيات",
          all: "الكل",
          tools: "التفنيات",
        },
        projects: {
          title1: "المشاريع",
          title2: "المميزية",
          sub: "إليكم بعض مشاريعي الأخيرة. تم تصميم كل مشروع بعناية فائقة مع الاهتمام بالتفاصيل والأداء وتجربة المستخدم.",
          project1: {
            title: "نادي محمد علي",
            sub: "موقع تعريفي متعدد الصفحات باستخدام  Bootstrap."
          },
          project2: {
            title: "Interno للأثاث",
            sub: "صفحة تعريفية باستخدام Tailwind"
          },
          project3: {
            title: "توصيات الأفلام",
            sub: "صفحة توصيات أفلام باستخدام React و Tailwind."
          },
          btn: "راجع حسابي على Github"
        },
        contact: {
          title1: "تواصل  ",
          title2: "معنا",
          sub: "هل لديك مشروع في ذهنك أو ترغب في التعاون؟ لا تتردد في التواصل معي. أنا منفتح دائمًا على مناقشة الفرص الجديدة.",
          contactInfo: "معلومات للتواصل",
          email: "بريد إلكتروني",
          phone: "هاتف",
          location: "الموقع",
          locSub: "صنعاء، اليمن",
          socialTitle: "تواصل معي عبر...",
          form: {
            title: "أرسل لي رسالة",
            name: {
              title: "أسمك",
              PH: "أدخل أسمك..."
            },
            email: {
              title: "البريد الألكتروني",
              PH: "أدخل بريدك الألكتروني..."
            },
            message: {
              title: "رسالتك",
              PH: "أدخل رسالتك هنا..."
            },
            btnSend : "أرسال",
            btnSending : "جاري الأرسال...",
          }
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escspeValue: false },
});

export default i18n;
