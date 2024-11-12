import {makeObservable, makeAutoObservable} from "mobx";
import logo from "../images/compass_logo.svg";
import logoWhite from "../images/logo_white.svg";
import problems_icon1 from "../images/problems_icon1.svg";
import problems_icon2 from "../images/problems_icon2.svg";
import problems_icon3 from "../images/problems_icon3.svg";
import problems_icon4 from "../images/problems_icon4.svg";
import problems_icon5 from "../images/problems_icon5.svg";
import checkIcon from "../images/check_icon.svg";
import solutions_icon1 from "../images/solutions_icon1.svg";
import solutions_icon2 from "../images/solutions_icon2.svg";
import solutions_image1 from "../images/solutions_image1.png";
import solutions_image2 from "../images/solutions_image2.png";
import features_image from "../images/features_image.png";
import features_image_mob from "../images/features_mob_image.png";
import features_icon1 from "../images/features_icon1.svg";
import features_icon2 from "../images/features_icon2.svg";
import features_icon3 from "../images/features_icon3.svg";
import services_icon1 from "../images/services_icon1.svg";
import services_icon2 from "../images/services_icon2.svg";
import services_icon3 from "../images/services_icon3.svg";
import services_icon4 from "../images/services_icon4.svg";

class State {
    constructor () {
        makeAutoObservable(this)
    }
    siteInfo = {
        'logo': logo,
        'white_logo': logoWhite
    }
    siteFirstBlock = {
        'title': 'Simplify Your Healthcare Management',
        'subTitle': 'Focus More on Patient Care',
        'desc': 'Unlock the full potential of your dental or ortho practice with Compass Comprehensive Healthcare Management System System. Our all-in-one solution integrates appointment scheduling, patient management, and billing into a single, easy-to-use platform. Save time, reduce errors, and focus more on providing exceptional patient care',
        'videoLink': 'https://www.youtube.com/embed/0mh5d2a8wp0'
    }
    siteBlocks = {
        'siteBlocksList': [
            {
                id: 1, 
                title:'Problems', 
                desc: "Running a dental or ortho practice comes with a unique set of challenges. Here are some of the common pain points that can hinder your practice's efficiency and growth:",
                list: [
                    {
                        title: 'Appointment Scheduling and Management',
                        problem: 'Managing appointments manually can lead to double bookings, missed appointments, and inefficient time use.',
                        impact: 'This results in frustration for staff and patients, leading to lost revenue and decreased patient satisfaction.',
                        icon: problems_icon1
                    },
                    {
                        title: 'Patient Records and Documentation',
                        problem: 'Keeping accurate and up-to-date patient records is a time-consuming and error-prone task.',
                        impact: 'Inefficient record-keeping can lead to misplaced documents, delayed treatments, and compliance issues, ultimately affecting the quality of patient care.',
                        icon: problems_icon2
                    },
                    {
                        title: 'Billing and Insurance Processing',
                        problem: 'Handling billing and insurance claims involves complex procedures and is prone to errors.',
                        impact: "Incorrect billing and delayed insurance claims can cause financial strain and administrative burdens, reducing the practice's profitability.",
                        icon: problems_icon3
                    },
                    {
                        title: 'Patient Communication and Engagement',
                        problem: 'Maintaining effective communication with patients is challenging, leading to missed appointments and lacking engagement.',
                        impact: 'Poor communication can result in lower patient retention rates and decreased adherence to treatment plans, which can impact overall patient outcomes.',
                        icon: problems_icon4
                    },
                    {
                        title: 'Practice Growth and Marketing',
                        problem: 'Attracting new patients and retaining existing ones requires continuous marketing efforts and a strong online presence.',
                        impact: 'Without effective marketing strategies, practices may struggle to grow, leaving potential revenue on the table and facing increased competition.',
                        icon: problems_icon5
                    }
                ],
                text: "Addressing these pain points can significantly improve your practice's operational efficiency, enhance patient satisfaction, and drive growth.",
                checkIcon: checkIcon
            },
            {
                id: 2,
                title: 'Solutions',
                titleList: [
                    {
                        title: 'COMPASS - Comprehensive Healthcare Management System'
                    },
                    {
                        title: 'Your Solution to Common Practice Challenges'
                    }
                ],
                list: [
                    {
                        title: 'Appointment Scheduling and Management',
                        text: 'Managing appointments can be a complex and time-consuming task. COMPASS - Comprehensive Healthcare Management System simplifies this process with an intuitive scheduling system that prevents double bookings, minimizes no-shows, and optimizes your calendar. Automated reminders and easy rescheduling options ensure your practice runs smoothly, freeing up valuable time for patient care.',
                        icon: solutions_icon1,
                        image: solutions_image1
                    },
                    {
                        title: 'Patient Communication and Engagement',
                        text: 'Effective communication is key to patient satisfaction and retention. COMPASS - Comprehensive Healthcare Management System enhances patient engagement through a dedicated patient portal, where patients can access their records, receive appointment reminders, and communicate with your team. This ensures patients are informed, engaged, and more likely to adhere to their treatment plans.',
                        icon: solutions_icon2,
                        image: solutions_image2
                    }
                ],
                bottomList: [
                    {
                        title: 'Patient Records and Documentation',
                        text: 'Keeping accurate and accessible patient records is crucial for providing quality care. COMPASS - Comprehensive Healthcare Management System offers a comprehensive electronic health records (EHR) system that securely stores and organizes patient information. With easy access to medical histories, treatment plans, and progress notes, your team can provide personalized care without the hassle of paperwork.'
                    },
                    {
                        title: 'Billing and Insurance Processing',
                        text: 'Billing and insurance claims are often sources of frustration and errors. COMPASS - Comprehensive Healthcare Management System streamlines these processes with integrated billing software that automates claims, tracks payments, and reduces administrative burdens. Our system ensures accurate billing, faster reimbursements, and improved financial management, allowing you to focus on your patients rather than paperwork.'
                    },
                    {
                        title: 'Practice Growth and Marketing',
                        text: "Growing your practice requires strategic marketing and a solid online presence. COMPASS - Comprehensive Healthcare Management System includes built-in marketing tools that help you attract new patients and retain existing ones. Track your marketing efforts, manage online reviews, and easily maintain an active social media presence. Our analytics provide insights into what works best, driving growth and maximizing your practice's potential."
                    }
                ]
            },
            {
                id: 3,
                title: 'Features',
                image: features_image,
                mob_image: features_image_mob,
                list: [
                    {
                        title: 'Patient Management and EMR',
                        icon: features_icon1,
                        list: [
                            {
                                title: 'Comprehensive Records:',
                                text: 'Maintain detailed patient records, including medical history, treatment plans, and medications.'
                            },
                            {
                                title: 'Easy Accessibility:',
                                text: 'Securely store and organize patient information for quick retrieval.'
                            },
                            {
                                title: 'Enhanced Care:',
                                text: 'Provide personalized care with well-organized and accessible patient data.'
                            }
                        ]
                    },
                    {
                        title: 'Document Management and Digital Signature',
                        icon: features_icon2,
                        list: [
                            {
                                title: 'Efficient Handling:',
                                text: 'Scan and digitally sign documents for secure management.'
                            },
                            {
                                title: 'Secure Storage:',
                                text: 'Keep patient files and consent forms safe and easily accessible.'
                            },
                            {
                                title: 'Streamlined Processes:',
                                text: 'Reduce paperwork and enhance administrative efficiency.'
                            }
                        ]
                    },
                    {
                        title: 'Communication Management',
                        icon: features_icon3,
                        list: [
                            {
                                title: 'Centralized Communication',
                                text: 'Manage all communications through email, SMS, and eFax in one place.'
                            },
                            {
                                title: 'Privacy Compliance:',
                                text: 'Ensure all interactions meet privacy regulations.'
                            },
                            {
                                title: 'Improved Interaction:',
                                text: 'Enhance communication between practitioners and patients.'
                            }
                        ]
                    },
                    {
                        title: 'Appointment Scheduling',
                        icon: '',
                        list: [
                            {
                                title: 'Seamless Management:',
                                text: 'Optimize appointment schedules with flexible booking and rescheduling options.'
                            },
                            {
                                title: 'Automated Reminders:',
                                text: 'Reduce no-shows with automated email, SMS, and eFax reminders.'
                            },
                            {
                                title: 'Improved Efficiency:',
                                text: 'Streamline the scheduling process, saving time for both staff and patients.'
                            }
                        ]
                    },
                    {
                        title: 'xRay Scanning',
                        icon: '',
                        list: [
                            {
                                title: 'Integrated Imaging:',
                                text: 'Capture and manage X-ray scans within the system.'
                            },
                            {
                                title: 'Easy Access:',
                                text: 'Provide quick access to imaging for diagnostic purposes.'
                            },
                            {
                                title: 'Enhanced Diagnostics:',
                                text: 'Improve accuracy with seamless imaging integration.'
                            }
                        ]
                    },
                    {
                        title: 'To-Do and Queue Management',
                        icon: '',
                        list: [
                            {
                                title: 'Task Management:',
                                text: 'Streamline workflows with efficient task management.'
                            },
                            {
                                title: 'Queue Management:',
                                text: 'Reduce patient waiting times with effective queue handling.'
                            },
                            {
                                title: 'Operational Efficiency:',
                                text: 'Ensure smooth operation with organized tasks and queue management.'
                            }
                        ]
                    },
                    {
                        title: 'Inventory Management',
                        icon: '',
                        list: [
                            {
                                title: 'Inventory Tracking:',
                                text: 'Keep track of medical supplies and equipment.'
                            },
                            {
                                title: 'Efficient Reordering:',
                                text: 'Ensure availability and timely reordering of supplies.'
                            },
                            {
                                title: 'Cost Management:',
                                text: 'Manage inventory efficiently to reduce costs.'
                            }
                        ]
                    },
                    {
                        title: 'Insurance Claim Management',
                        icon: '',
                        list: [
                            {
                                title: 'Streamlined Claims:',
                                text: 'Simplify the insurance claims process.'
                            },
                            {
                                title: 'Accurate Submissions:',
                                text: 'Reduce errors and ensure accuracy in claims submissions.'
                            },
                            {
                                title: 'Administrative Efficiency:',
                                text: 'Minimize the administrative burden of managing claims.'
                            }
                        ]
                    },
                    {
                        title: 'Financial Management',
                        icon: '',
                        list: [
                            {
                                title: 'Comprehensive Overview:',
                                text: 'Manage contracts, ledger entries, billing, payments, invoicing, and tax calculations.'
                            },
                            {
                                title: 'Financial Accuracy:',
                                text: 'Ensure accurate financial records and reporting.'
                            },
                            {
                                title: 'Enhanced Control:',
                                text: 'Gain a complete financial overview for better decision-making.'
                            }
                        ]
                    },
                    {
                        title: 'Reporting and Analytics',
                        icon: '',
                        list: [
                            {
                                title: 'Insightful Reports:',
                                text: 'Generate detailed reports for performance evaluation.'
                            },
                            {
                                title: 'Operational Trends:',
                                text: 'Track operational trends and compliance.'
                            },
                            {
                                title: 'Informed Decisions:',
                                text: 'Use data-driven insights for continuous improvement.'
                            }
                        ]
                    },
                    {
                        title: 'Process <br>Automation',
                        icon: '',
                        list: [
                            {
                                title: 'Task Automation:',
                                text: 'Automate repetitive tasks to save time and reduce manual workload.'
                            },
                            {
                                title: 'Operational Efficiency:',
                                text: 'Enhance efficiency by automating routine processes.'
                            },
                            {
                                title: 'Improved Productivity:',
                                text: 'Allow staff to focus on more critical tasks.'
                            }
                        ]
                    },
                    {
                        title: 'Online Request Forms',
                        icon: '',
                        list: [
                            {
                                title: 'Easy Access:',
                                text: 'Enable patients to fill out forms online.'
                            },
                            {
                                title: 'Smooth Process:',
                                text: 'Facilitate smoother administrative processes.'
                            },
                            {
                                title: 'Enhanced Engagement:',
                                text: 'Improve patient experience with easy-to-use online forms.'
                            }
                        ]
                    },
                    {
                        title: 'Patient Portal',
                        icon: '',
                        list: [
                            {
                                title: 'Secure Access:',
                                text: 'Provide patients with secure access to their medical records.'
                            },
                            {
                                title: 'Engagement:',
                                text: 'Foster active patient engagement in their healthcare journey.'
                            },
                            {
                                title: 'Convenience:',
                                text: 'Allow patients to view appointments and personalized information online.'
                            }
                        ]
                    }
                ]
            },
            {
                id: 4,
                title: 'Benefits',
                text: 'COMPASS is designed to transform your practice management, making it easier, more efficient, and more patient-centric.',
                link: '#',
                btnText: 'Request Demo',
                list: [
                    {
                        title: 'Streamlined Administration',
                        text: 'Reduce administrative tasks and improve operational efficiency.'
                    },
                    {
                        title: 'Enhanced Patient Care',
                        text: 'Focus more on patient care with efficient management tools.'
                    },
                    {
                        title: 'Compliance',
                        text: 'Ensure regulatory compliance with secure and organized data management.'
                    },
                    {
                        title: 'Unified Platform',
                        text: 'Manage all aspects of your practice from one comprehensive, user-friendly platform.'
                    }
                ]
            },
            {
                id: 5,
                title: 'Easy Steps',
                text: 'to Get Started with COMPASS:',
                list: [
                    {
                        title: 'Sign Up',
                        list: [
                            {
                                title: 'Submit Access Request:',
                                text: 'Visit our website and complete the form.'
                            },
                            {
                                title: 'Schedule a Setup Call:',
                                text: 'Book a convenient time to speak with our team about customizing your practice account based on your specific needs.'
                            },
                            {
                                title: 'Receive Login Credentials',
                                text: 'After the setup call, receive your login credentials to access COMPASS and start using the platform.'
                            }
                        ]
                    },
                    {
                        title: 'Onboard Your Team',
                        list: [
                            {
                                title: 'Seamless Integration:',
                                text: 'Integrate your existing data with our additional services.'
                            },
                            {
                                title: 'Training and Support:',
                                text: 'Access comprehensive training resources to keep your team up.'
                            },
                            {
                                title: 'Customization:',
                                text: 'Tailor the platform settings to match your practice’s specific workflows and preferences.'
                            }
                        ]
                    },
                    {
                        title: 'Manage Effortlessly',
                        list: [
                            {
                                title: 'Start Using COMPASS:',
                                text: 'Begin managing appointments, patient records, billing, and more with our intuitive interface.'
                            },
                            {
                                title: 'Optimize Your Operations:',
                                text: 'Utilize advanced features and automation tools to enhance efficiency.'
                            },
                            {
                                title: 'Continuous Improvement',
                                text: 'Monitor performance with analytics and reports and make informed decisions for continuous practice improvement.'
                            }
                        ]
                    }
                ]
            },
            {
                id: 6,
                title: 'Additional Services',
                desc: 'These additional services ensure you get the most out of the COMPASS platform, providing a smooth transition, reliable data management, comprehensive training, and continuous support for your practice.',
                list: [
                    {
                        title: 'Patient Data Migration',
                        icon: services_icon1,
                        list: [
                            {
                                title: 'Seamless Transition:',
                                desc: 'Our team assists in migrating your existing patient data to the COMPASS platform with minimal disruption to your practice.'
                            },
                            {
                                title: 'Data Integrity:',
                                desc: 'Ensure the accuracy and completeness of your patient records during the migration process.'
                            },
                            {
                                title: 'Seamless Transition:',
                                desc: 'Maintain compliance with all relevant data protection regulations during the transition.'
                            }
                        ]
                    },
                    {
                        title: 'Data Management (Automatic Backups)',
                        icon: services_icon2,
                        list: [
                            {
                                title: 'Secure Storage:',
                                desc: 'Your data is securely stored and protected against loss or corruption.'
                            },
                            {
                                title: 'Automatic Backups:',
                                desc: 'Regular, automated backups ensure that your data is always up-to-date and can be restored quickly in case of any issues.'
                            },
                            {
                                title: 'Peace of Mind:',
                                desc: 'Focus on your practice, knowing that your data is safe and reliably backed up.'
                            }
                        ]
                    },
                    {
                        title: 'Training Your Team / Crew',
                        icon: services_icon3,
                        list: [
                            {
                                title: 'Comprehensive Training:',
                                desc: 'We provide extensive training programs tailored to your team’s needs, ensuring they are fully equipped to use the COMPASS platform effectively.'
                            },
                            {
                                title: 'Onboarding Support:',
                                desc: 'From initial setup to advanced feature usage, our training covers all aspects of the system.'
                            },
                            {
                                title: 'Continuous Learning:',
                                desc: 'Access ongoing training resources and updates to keep your team proficient with the latest features and best practices.'
                            }
                        ]
                    },
                    {
                        title: 'Office Support',
                        icon: services_icon4,
                        list: [
                            {
                                title: 'Dedicated Assistance:',
                                desc: 'Our support team is available to assist with any issues or questions you may have, ensuring the smooth operation of your practice.'
                            },
                            {
                                title: 'Technical Support:',
                                desc: 'Receive prompt technical support to resolve any system-related problems.'
                            },
                            {
                                title: 'Operational Guidance:',
                                desc: 'Get advice and best practices on optimizing your practice management with COMPASS, which will help you maximize efficiency and patient care.'
                            }
                        ]
                    }
                ]
            },
            {
                id: 7,
                title: 'Transformation Stories',
                desc: 'Discover how COMPASS has revolutionized practice management for dental and ortho offices, leading to increased efficiency, better patient care, and significant growth. Here are a few success stories from our satisfied clients:',
                list: [
                    {
                        title: "Green Dental Clinic",
                        case: 'Case Study 1:',
                        challenge: 'Green Dental Clinic faced challenges maintaining patient engagement and managing effective communication. Their marketing efforts were not yielding the desired results, leading to stagnated growth.',
                        solution: 'COMPASS provided Green Dental Clinic with a comprehensive patient communication system and integrated marketing tools to enhance engagement and attract new patients.',
                        list: [
                            {
                                title: '<b>Enhanced Patient Engagement:</b> With a centralized communication system, patient interaction improved, leading to higher satisfaction rates.'
                            },
                            {
                                title: '<b>Successful Marketing Campaigns:</b> The clinic’s online presence grew, and targeted marketing campaigns increased new patient appointments by 25%.'
                            },
                            {
                                title: '<b>Retention Rates:</b> Improved communication and engagement tools helped retain existing patients, leading to steady practice growth.'
                            }
                        ]
                    },
                    {
                        title: "Dr. Smith's Orthodontic Practice",
                        case: 'Case Study 2:',
                        challenge: "Dr. Smith's practice struggled with inefficient appointment scheduling, which resulted in frequent double bookings and no-shows. Manually managing patient records was time-consuming, and billing errors were affecting the practice’s revenue.",
                        solution: "After implementing COMPASS, Dr. Smith’s practice transformed its operations with automated appointment scheduling, streamlined patient records management, and accurate billing integration.",
                        list: [
                            {
                                title: '<b>30% Reduction in No-Shows:</b> Automated reminders and flexible scheduling reduced missed appointments significantly.'
                            },
                            {
                                title: '<b>Improved Efficiency:</b> The practice saved over 10 weekly hours on administrative tasks, allowing staff to focus more on patient care.'
                            },
                            {
                                title: '<b>Increased Revenue:</b> Accurate billing and faster insurance claim processing boosted the practice’s revenue by 20%.'
                            }
                        ]
                    },
                    {
                        title: "Sunrise Dental",
                        case: 'Case Study 3:',
                        challenge: "Sunrise Dental struggled with managing patient records and ensuring compliance with data protection regulations. The manual documentation process was prone to errors, affecting the quality of patient care.",
                        solution: "By adopting COMPASS, Sunrise Dental streamlined their patient records management with a secure EMR system and automated documentation processes.",
                        list: [
                            {
                                title: '<b>Secure Data Management:</b> The EMR system ensured secure and organized patient records, reducing the risk of compliance issues.'
                            },
                            {
                                title: '<b>Enhanced Patient Care:</b> Easy access to accurate patient records enabled the staff to provide more personalized and timely care.'
                            },
                            {
                                title: '<b>Operational Efficiency:</b> The automated documentation process reduced manual errors and saved significant time, improving overall efficiency.'
                            }
                        ]
                    }
                ]
            }
        ]
    }
}

export default new State();