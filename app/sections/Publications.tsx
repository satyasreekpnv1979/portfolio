"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaBook, FaSearch, FaExternalLinkAlt, FaFilePdf, FaTimes } from "react-icons/fa";

const Publications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const itemsPerPage = 20; // 5x4 grid

  const publications = [
    {
      id: 1,
      title: "EMG Controlled Bionic Robotic Arm Using Artificial Intelligence And Machine Learning",
      journal: "I-SMAC 2021",
      date: "20 December 2021",
      issn: "2768-0673",
      type: "IEEE Xplore+ Scopus",
      pages: "",
      url: ""
    },
    {
      id: 2,
      title: "Brain Tissue Segmentation Via Deep Convolutional Neural Networks",
      journal: "I-SMAC 2021",
      date: "20 December 2021",
      issn: "2768-0665",
      type: "IEEE Xplore+ Scopus",
      pages: "",
      url: ""
    },
    {
      id: 3,
      title: "Nonlinear Regression Framework For Geomagnetic Data Restoration Analysis Through Machine Learning Techniques",
      journal: "International Journal Of Advanced Science And Technology",
      date: "2 April 2021",
      issn: "2214-7853",
      type: "Elsevier (H-Index: 47) Free Scopus",
      pages: "",
      url: ""
    },
    {
      id: 4,
      title: "Deep Learning Approaches For Classifying Data: A Review",
      journal: "Journal Of Engineering Science And Technology",
      date: "August 2020",
      issn: "Vol. 15, No. 4",
      type: "Scopus",
      pages: "2580-2594",
      url: ""
    },
    {
      id: 5,
      title: "A Secure Scheme Of Cloud Forensics For Cloud Log Assuring Soundness And Secrecy",
      journal: "International Journal Of Research",
      date: "June 2019",
      issn: "2236-6124 Vol 08 Issue 6",
      type: "UGC",
      pages: "",
      url: ""
    },
    {
      id: 6,
      title: "An Enhanced Method Of Clustering For Big Data Mining Using K-Means",
      journal: "JETIR",
      date: "June 2019",
      issn: "2349-5162 Vol 6 Issue 6",
      type: "UGC",
      pages: "",
      url: ""
    },
    {
      id: 7,
      title: "A Survey On Prediction Of Heart Disease Using Machine Learning Algorithm",
      journal: "ACJ",
      date: "May 2020",
      issn: "2231-3990 Volume IX, Issue V",
      type: "UGC",
      pages: "1794-1800",
      url: ""
    },
    {
      id: 8,
      title: "A Deep Learning Technique For Detecting Facial Mask",
      journal: "Dogo Rangsang Research Journal",
      date: "2021",
      issn: "2347-7180 Vol-08 Issue-14 No. 02",
      type: "UGC Care Group I Journal",
      pages: "33-38",
      url: "https://www.journal-dogorangsang.in/"
    },
    {
      id: 9,
      title: "Enhanced And Reliable Air Pollution Prediction Using Machine Learning",
      journal: "Journal Of Interdisciplinary Cycle Research",
      date: "May 2020",
      issn: "0022-1945 Volume XII, Issue V",
      type: "UGC",
      pages: "352-358",
      url: ""
    },
    {
      id: 10,
      title: "Classification Of Breast Cancer Using A Supervised Learning Approach",
      journal: "JASC: Journal Of Applied Science And Computations",
      date: "November 2018",
      issn: "1076-5131 Volume 5, Issue 11",
      type: "UGC",
      pages: "1992-2000",
      url: ""
    },
    {
      id: 11,
      title: "Smart Farming Using Cluster Based Wireless Sensor Networks",
      journal: "Journal Of Fundamental & Comparative Research",
      date: "2022",
      issn: "2277-7067 Vol. VIII, No. 1(XVII)",
      type: "UGC Care",
      pages: "40-43",
      url: ""
    },
    {
      id: 12,
      title: "Indoor Navigation Using Augmented Reality",
      journal: "JARTMS",
      date: "July 2021",
      issn: "2582-3078 Volume: 03 Issue: 04",
      type: "Peer Reviewed",
      pages: "",
      url: "http://www.jartms.org"
    },
    {
      id: 13,
      title: "IoT Based Smart Vision Security System",
      journal: "JARTMS",
      date: "July 2021",
      issn: "2582-3078 Volume: 03 Issue: 04",
      type: "Peer Reviewed",
      pages: "",
      url: "http://www.jartms.org"
    },
    {
      id: 14,
      title: "Blockchain Based Land Registration System",
      journal: "JARTMS",
      date: "July 2021",
      issn: "2582-3078 Volume: 03 Issue: 04",
      type: "Peer Reviewed",
      pages: "",
      url: "http://www.jartms.org"
    },
    {
      id: 15,
      title: "Electronic Voting Using Block Chain Technology",
      journal: "JARTMS",
      date: "July 2021",
      issn: "2582-3078 Volume: 03 Issue: 04",
      type: "Peer Reviewed",
      pages: "",
      url: "http://www.jartms.org"
    },
    {
      id: 16,
      title: "Disease Prediction With Genetics Using ML",
      journal: "JARTMS",
      date: "July 2021",
      issn: "2582-3078 Volume: 03 Issue: 04",
      type: "Peer Reviewed",
      pages: "",
      url: "http://www.jartms.org"
    },
    {
      id: 17,
      title: "Health Prediction Based On Genetics-Heredity Using Machine Learning",
      journal: "Journal Of Advanced Research In Technology And Management Sciences (JARTMS)",
      date: "July 2021",
      issn: "2582-3078",
      type: "Peer Reviewed",
      pages: "",
      url: "https://jartms.org/admin/uploads/3ihfmk.pdf"
    },
    {
      id: 18,
      title: "Optimized Conversion Of Categorical And Numerical Features In Machine Learning Models",
      journal: "I-SMAC 2021",
      date: "20 December 2021",
      issn: "2768-0673",
      type: "IEEE Xplore + Scopus",
      pages: "",
      url: "https://ieeexplore.ieee.org/abstract/document/9640967"
    },
    {
      id: 19,
      title: "Experimental Evidences Of Methanolic Extraction Of Cressa Cretica Linn. On Alloxan Induced Hyperglycemic Wistar Rats",
      journal: "Perspectives In Science",
      date: "September 2016",
      issn: "2213-0209 Volume 8",
      type: "Elsevier Science Direct",
      pages: "179-182",
      url: "https://www.sciencedirect.com/science/article/pii/S2213020916300428"
    },
    {
      id: 20,
      title: "Assimilating Text-Mining & Bio-Informatics Tools To Analyze Cellulase Structures",
      journal: "Materials Science And Engineering",
      date: "July 2017",
      issn: "DOI:10.1088/1757-899x/225/1/012162",
      type: "Scopus",
      pages: "",
      url: "https://iopscience.iop.org/article/10.1088/1757-899x/225/1/012162/meta"
    },
    {
      id: 21,
      title: "To Implement The Frameworks To Reduce The Risks Of Fragmentness & Integrity Issues In M-Commerce Through Virtual Objects(Vo)",
      journal: "International Journal Of Advanced And Innovative Research",
      date: "2018",
      issn: "2278-7844 Vol 5 Issue 4",
      type: "Peer Reviewed",
      pages: "765-773",
      url: ""
    },
    {
      id: 22,
      title: "A Novel Integrated IoT Framework With Classification Approach For Medical Data Analysis",
      journal: "International Journal Of Advanced Science And Technology",
      date: "2 May 2022",
      issn: "978-93-80544-44-1",
      type: "IEEE + Scopus (H-Index: 15)",
      pages: "",
      url: "https://ieeexplore.ieee.org/document/9763297"
    },
    {
      id: 23,
      title: "Breast Cancer Detection using Ensemble learning model",
      journal: "ICIHCNN - 2022",
      date: "December 2022",
      issn: "2191-6861",
      type: "Springer",
      pages: "",
      url: "https://link.springer.com/book/9789819928316"
    },
    {
      id: 24,
      title: "A Boosted Random Forest Algorithm For Automated Bug Classification",
      journal: "ICCT'23 Smart Trends For Computing & Communication",
      date: "15 June 2023",
      issn: "",
      type: "Springer",
      pages: "23-33",
      url: "https://link.springer.com/chapter/10.1007/978-981-99-0838-7_3"
    },
    {
      id: 25,
      title: "Optimizing Energy Efficiency in Wireless Sensor Networks via Cluster-Based Routing and a Hybrid Optimization Approach",
      journal: "IIETA-International Information and Engineering Technology Association",
      date: "7 December 2023",
      issn: "",
      type: "Scopus",
      pages: "753-760",
      url: "https://www.iieta.org/journals/isi/paper/10.18280/isi.290237",
      doi: "https://doi.org/10.18280/isi.290237"
    },
    {
      id: 26,
      title: "Edge AI for Real-Time Video Analytics in Surveillance Systems",
      journal: "International Journal on Recent and Innovation Trends in Computing and Communication",
      date: "11 February 2023",
      issn: "2321-8169 Volume: 11 Issue: 10",
      type: "UGC",
      pages: "",
      url: "https://ijritcc.org/index.php/ijritcc/article/view/8947"
    },
    {
      id: 27,
      title: "Fundamentals of AI and ML",
      journal: "Text Book",
      date: "2024",
      issn: "9789361324161",
      type: "Book",
      pages: "",
      url: "https://www.flipkart.com/fundamentals-ai-ml/p/itm13ca135b3ad38?pid=9789361324161"
    },
    {
      id: 28,
      title: "IoT Enabled monitoring of solar plants in agri lands",
      journal: "Book Chapter - Innovations in computational intelligence, big data analytics, and internet of things",
      date: "2024",
      issn: "9798887305615",
      type: "Book Chapter",
      pages: "199",
      url: "https://books.google.co.in/books?hl=en&lr=lang_en&id=j2ABEQAAQBAJ&oi=fnd&pg=PA199"
    },
    {
      id: 29,
      title: "Convergence of Cybersecurity and Cloud Computing",
      journal: "Book Chapter - Improved Security in Mobile Cloud Computing Using Modern Cryptographic Approaches",
      date: "3 January 2025",
      issn: "9798369368596",
      type: "Book Chapter",
      pages: "",
      url: "https://www.igi-global.com/chapter/improved-security-in-mobile-cloud-computing-using-modern-cryptographic-approaches/367218",
      doi: "10.4018/979-8-3693-6859-6.ch020"
    },
    {
      id: 30,
      title: "Mitigating Financial Fraud and Cybercrime in Financial Services with Security Protocols and Risk Management Strategies",
      journal: "Computer Fraud and Security (Q2 Scopus)",
      date: "2024",
      issn: "1873-7056",
      type: "Scopus Q2",
      pages: "",
      url: "https://computerfraudsecurity.com/index.php/journal/article/view/129",
      doi: "10.52710/cfs.129"
    },
    {
      id: 31,
      title: "Prediction Of Red Wine Using Random Forest",
      journal: "Journal For Basic Sciences",
      date: "2024",
      issn: "1006-8341",
      type: "UGC",
      pages: "433-440",
      url: "https://fzgxjckxxb.com/volume-24-issue-2-2024/",
      doi: "10.37896/JBSV24.2/2918"
    },
    {
      id: 32,
      title: "ECG-CNN Fusion: Unleashing Deep Learning For Myocardial Infarction Prediction",
      journal: "Journal For Basic Sciences",
      date: "2024",
      issn: "1006-8341",
      type: "UGC",
      pages: "441-446",
      url: "https://fzgxjckxxb.com/volume-24-issue-2-2024/",
      doi: "10.37896/JBSV24.2/2919"
    },
    {
      id: 33,
      title: "Enhancing Brain Stroke Prediction and Estimation with Machine Learning Algorithms",
      journal: "Journal For Basic Sciences",
      date: "2024",
      issn: "1006-8341",
      type: "UGC",
      pages: "474-480",
      url: "https://fzgxjckxxb.com/volume-24-issue-2-2024/",
      doi: "10.37896/JBSV24.2/2924"
    },
    {
      id: 34,
      title: "Enhancing Data Analysis Through Cross-validation And Bootstrap Evaluation Of Machine Learning Algorithms",
      journal: "Journal For Basic Sciences",
      date: "2024",
      issn: "1006-8341",
      type: "UGC",
      pages: "481-485",
      url: "https://fzgxjckxxb.com/volume-24-issue-2-2024/",
      doi: "10.37896/JBSV24.2/2925"
    },
    {
      id: 35,
      title: "Classification Of Brain Images By Using Support Vector Machine",
      journal: "Journal For Basic Sciences",
      date: "2024",
      issn: "1006-8341",
      type: "UGC",
      pages: "506-513",
      url: "https://fzgxjckxxb.com/volume-24-issue-2-2024/",
      doi: "10.37896/JBSV24.2/2928"
    },
    {
      id: 36,
      title: "Prognosis Of Breast Cancer Using Ensemble Machine Learning Techniques",
      journal: "JASC: Journal of Applied Science and Computations",
      date: "April 2023",
      issn: "1076-5131",
      type: "UGC",
      pages: "41-46",
      url: "https://j-asc.com/index.php/volume-x-issue-ivapril-2023/",
      doi: "16.10089.JASC.2023.V10I04.453459.1508085"
    },
    {
      id: 37,
      title: "Natural Disaster Identification On Bigdata Using Machine Learning",
      journal: "JASC: Journal of Applied Science and Computations",
      date: "April 2023",
      issn: "1076-5131",
      type: "UGC",
      pages: "52-57",
      url: "https://j-asc.com/index.php/volume-x-issue-ivapril-2023/",
      doi: "16.10089.JASC.2023.V10I04.453459.1508087"
    },
    {
      id: 38,
      title: "Prediction Of Stock Market Using Machine Learning Through LSTM – RNN",
      journal: "JASC: Journal of Applied Science and Computations",
      date: "April 2023",
      issn: "1076-5131",
      type: "UGC",
      pages: "63-69",
      url: "https://j-asc.com/index.php/volume-x-issue-ivapril-2023/",
      doi: "16.10089.JASC.2023.V10I04.453459.1508089"
    },
    {
      id: 39,
      title: "Predicting Crime: An ML-Based Analysis",
      journal: "JASC: Journal of Applied Science and Computations",
      date: "April 2023",
      issn: "1076-5131",
      type: "UGC",
      pages: "107-112",
      url: "https://j-asc.com/index.php/volume-x-issue-ivapril-2023/",
      doi: "16.10089.JASC.2023.V10I04.453459.1508095"
    },
    {
      id: 40,
      title: "A Study on Mental Health of Indian Students During Covid-19",
      journal: "JASC: Journal of Applied Science and Computations",
      date: "April 2023",
      issn: "1076-5131",
      type: "UGC",
      pages: "140-146",
      url: "https://j-asc.com/index.php/volume-x-issue-ivapril-2023/",
      doi: "16.10089.JASC.2023.V10I04.453459.1508100"
    },
    {
      id: 41,
      title: "Price Forecasting Of Used Cars Using Machine Learning",
      journal: "The International journal of analytical and experimental modal analysis",
      date: "April 2023",
      issn: "0886-9367",
      type: "UGC",
      pages: "221-225",
      url: "https://ijaema.com/index.php/volume-xv-issue-iv-april-2023/",
      doi: "18.0002.IJAEMA.2023.V15I04.200001.01568597177969"
    },
    {
      id: 42,
      title: "Streamlining Employee Management with Payroll and Leave Management",
      journal: "The International journal of analytical and experimental modal analysis",
      date: "April 2023",
      issn: "0886-9367",
      type: "UGC",
      pages: "234-237",
      url: "https://ijaema.com/index.php/volume-xv-issue-iv-april-2023/",
      doi: "18.0002.IJAEMA.2023.V15I04.200001.01568597177971"
    },
    {
      id: 43,
      title: "Automated Stress Monitoring Using Computer Vision And Machine Learning in IT Professionals",
      journal: "The International journal of analytical and experimental modal analysis",
      date: "April 2023",
      issn: "0886-9367",
      type: "UGC",
      pages: "300-307",
      url: "https://ijaema.com/index.php/volume-xv-issue-iv-april-2023/",
      doi: "18.0002.IJAEMA.2023.V15I04.200001.01568597177981"
    },
    {
      id: 44,
      title: "Cost Estimation Of Health Insurance Using Machine Learning",
      journal: "The International journal of analytical and experimental modal analysis",
      date: "April 2023",
      issn: "0886-9367",
      type: "UGC",
      pages: "666-672",
      url: "https://ijaema.com/index.php/volume-xv-issue-iv-april-2023/",
      doi: "18.0002.IJAEMA.2023.V15I04.200001.01568597178026"
    },
    {
      id: 45,
      title: "Facial Emotional Detection Using Artificial Neural Networks",
      journal: "Technische Sicherheit",
      date: "2024",
      issn: "1434-9728",
      type: "UGC",
      pages: "165-177",
      url: "https://technikwissen.eu/volume-24-issue-2-2024/",
      doi: "22.8342.TSJ.2024.V24.2.01264"
    },
    {
      id: 46,
      title: "Neural Network-based Alzheimer's Disease Diagnosis With Densenet-169 Architecture",
      journal: "Technische Sicherheit",
      date: "2024",
      issn: "1434-9728",
      type: "UGC",
      pages: "178-195",
      url: "https://technikwissen.eu/volume-24-issue-2-2024/",
      doi: "22.8342.TSJ.2024.V24.2.01265"
    },
    {
      id: 47,
      title: "Optimized Prediction of Telephone Customer Churn Rate Using Machine Learning Algorithms",
      journal: "Technische Sicherheit",
      date: "2024",
      issn: "1434-9728",
      type: "UGC",
      pages: "309-320",
      url: "https://technikwissen.eu/volume-24-issue-2-2024/",
      doi: "22.8342.TSJ.2024.V24.2.01276"
    },
    {
      id: 48,
      title: "Optimizing Energy Efficiency in Wireless Sensor Networks via Cluster-Based Routing and a Hybrid Optimization Approach",
      journal: "Ingénierie des Systèmes d'Information IIETA",
      date: "25 April 2024",
      issn: "",
      type: "Scopus",
      pages: "753-760",
      url: "https://www.iieta.org/journals/isi/paper/10.18280/isi.290237",
      doi: "https://doi.org/10.18280/isi.290237"
    },
    {
      id: 49,
      title: "Energy Oriented Multi-Objective Route Optimization Using Donkey Smuggler Optimization in Cluster Based Wireless Sensor Networks",
      journal: "Journal Européen des Systèmes Automatisés",
      date: "October 2024",
      issn: "",
      type: "Scopus",
      pages: "1481-1488",
      url: "https://iieta.org/journals/jesa/paper/10.18280/jesa.570523",
      doi: "https://doi.org/10.18280/jesa.570523"
    },
    {
      id: 50,
      title: "MSRP-TODNet: a multi-scale reinforced region wise analyser for tiny object detection",
      journal: "BMC Journals - Springer Nature",
      date: "30 April 2025",
      issn: "Volume 18, Article 200 (2025)",
      type: "Springer Nature",
      pages: "",
      url: "https://link.springer.com/article/10.1186/s13104-025-07263-7",
      doi: "https://doi.org/10.1186/s13104-025-07263-7"
    },
    {
      id: 51,
      title: "Improved Security in Mobile Cloud Computing Using Modern Cryptographic Approaches",
      journal: "Convergence of Cybersecurity and Cloud Computing",
      date: "2025",
      issn: "",
      type: "Book Chapter",
      pages: "",
      url: "https://www.igi-global.com/chapter/improved-security-in-mobile-cloud-computing-using-modern-cryptographic-approaches/367218",
      doi: "10.4018/979-8-3693-6859-6.ch020"
    },
    {
      id: 52,
      title: "Gen AI-Driven AI Threats: Enhancing Cyber Security in Military Cyber-Physical Systems",
      journal: "Springer Nature Switzerland - Data Science and Big Data Analytics (IDBA 2025)",
      date: "26 September 2025",
      issn: "ISBN: 9783032053732",
      type: "Springer Nature",
      pages: "",
      url: "https://link.springer.com/chapter/10.1007/978-3-032-05373-2_32",
      doi: "10.1007/978-3-032-05373-2_32"
    },
    {
      id: 53,
      title: "Gen AI-Driven AI Threats: Enhancing Cyber Security in Military Cyber-Physical Systems",
      journal: "5th International Conference On ICTBIG-IEEE Conference",
      date: "27-28 June 2025",
      issn: "",
      type: "IEEE Conference",
      pages: "",
      url: "https://www.researchgate.net/publication/396077056_Gen_AI-Driven_AI_Threats_Enhancing_Cyber_Security_in_Military_Cyber-Physical_Systems",
      doi: "10.1007/978-3-032-05373-2_32"
    },
    {
      id: 54,
      title: "Facial Emotional Detection Using Artificial Neural Networks",
      journal: "Technische Sicherheit (Technical Security)",
      date: "Feb 2024",
      issn: "1434-9728",
      type: "UGC",
      pages: "165-177",
      url: "https://technikwissen.eu/volume-24-issue-2-2024/",
      doi: "22.8342.TSJ.2024.V24.2.01264"
    },
    {
      id: 55,
      title: "Smart Grid Management Using Machine Learning",
      journal: "Journal of Nonlinear Analysis and Optimization",
      date: "2025",
      issn: "1906-9685 Vol. 16, Issue 1",
      type: "UGC",
      pages: "",
      url: ""
    },
    {
      id: 56,
      title: "Deep Learning-Driven Early Diagnosis of Respiratory Diseases using CNN-RNN Fusion on Lung Sound Data",
      journal: "Scientific Reports",
      date: "24 November 2025",
      issn: "Article number: 45233 (2025)",
      type: "SCIE + Scopus",
      pages: "",
      url: "https://link.springer.com/article/10.1038/s41598-025-28832-7",
      doi: "https://doi.org/10.1038/s41598-025-28832-7"
    },
    {
      id: 57,
      title: "Energy-Efficient Cluster-Based Routing in Wireless Sensor Networks Using Resilient Honey Badger Optimization Algorithm",
      journal: "Proceedings of Sixth International Conference on Computer and Communication Technologies: IC3T 2024",
      date: "2025",
      issn: "Volume 2",
      type: "Springer Nature",
      pages: "387",
      url: "https://link.springer.com/chapter/10.1007/978-981-96-7477-0_34"
    },
    {
      id: 58,
      title: "Deep learning-based ovarian cancer detection from histopathology images",
      journal: "Quality & Quantity - International Journal of Methodology",
      date: "2026",
      issn: "Volume 60",
      type: "Springer Nature",
      pages: "1529-1543",
      url: "https://link.springer.com/article/10.1007/s11135-025-02315-3",
      doi: "10.1007/s11135-025-02315-3"
    },
    {
      id: 59,
      title: "AI-Based Forecasting for Hospital Bed Capacity Planning: ML and DL Applications in Public Healthcare",
      journal: "IAENG International Journal of Computer Science",
      date: "2026",
      issn: "1819-656X",
      type: "Journal",
      pages: "Vol 53, Issue 2, p782",
      url: "https://openurl.ebsco.com/EPDB%3Agcd%3A7%3A36397911/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A191342907&crl=c&link_origin=scholar.google.com"
    },
    {
      id: 60,
      title: "Resilient Honey Badger Optimization Algorithm",
      journal: "Sixth International Conference on Computer and Communication Technologies: IC3T 2024",
      date: "14 October 2025",
      issn: "Volume 2",
      type: "Conference Publication",
      pages: "388-400",
      url: "https://books.google.co.in/books?hl=en&lr=&id=4HCPEQAAQBAJ&oi=fnd&pg=PA387"
    },
    {
      id: 61,
      title: "SUPER PRODUCTIVE: SEAMLESS PROJECT MANAGEMENT TOOL",
      journal: "Journal of Nonlinear Analysis and Optimization",
      date: "2025",
      issn: "1906-9685 Vol. 16, Issue 1",
      type: "UGC",
      pages: "",
      url: "https://jnao-nu.com/Vol.%2016,%20Issue.%2001,%20January-June%20:%202025/46_online.pdf"
    },
    {
      id: 62,
      title: "SUPER PRODUCTIVE: SEAMLESS PROJECT MANAGEMENT TOOL",
      journal: "Journal of Nonlinear Analysis and Optimization",
      date: "2025",
      issn: "1906-9685 Vol. 16, Issue 1",
      type: "UGC",
      pages: "",
      url: "https://jnao-nu.com/Vol.%2016,%20Issue.%2001,%20January-June%20:%202025/46_online.pdf"
    }
  ];

  const filteredPublications = publications.filter((pub) =>
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.journal.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredPublications.length / itemsPerPage);
  const currentPublications = filteredPublications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section id="publications" className="pt-24 pb-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Publications</h2>
            <button
              onClick={() => setShowPdfViewer(true)}
              className="hidden xl:flex px-4 py-2 bg-blue-500/85 hover:bg-blue-600/85 backdrop-blur-sm rounded-full text-white items-center gap-2 transition-colors"
              suppressHydrationWarning
            >
              <FaFilePdf /> View Full List
            </button>
          </div>
        </motion.div>

        {/* Search Bar */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-4 py-2 rounded-lg bg-gray-800/85 backdrop-blur-sm text-white border border-gray-700 focus:outline-none focus:border-blue-400"
              suppressHydrationWarning
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {currentPublications.map((pub) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: pub.id % 5 * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/85 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-3 mb-3">
                  <FaBook className="text-blue-400 text-xl flex-shrink-0 mt-1" />
                  <h3 className="text-white font-medium text-sm line-clamp-3">{pub.title}</h3>
                </div>
                <div className="mt-auto space-y-2 text-sm">
                  <p className="text-gray-300 line-clamp-1">{pub.journal}</p>
                  <p className="text-gray-400">{pub.date}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 text-xs">{pub.type}</span>
                    {pub.url && (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <FaExternalLinkAlt size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {pageCount > 1 && (
          <div className="mt-8 flex justify-center space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md bg-gray-800/85 backdrop-blur-sm text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/85 transition-colors"
              suppressHydrationWarning
            >
              Previous
            </button>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  currentPage === page
                    ? "bg-blue-500/85 backdrop-blur-sm text-white"
                    : "bg-gray-800/85 backdrop-blur-sm text-white hover:bg-gray-700/85"
                }`}
                suppressHydrationWarning
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, pageCount))}
              disabled={currentPage === pageCount}
              className="px-4 py-2 rounded-md bg-gray-800/85 backdrop-blur-sm text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/85 transition-colors"
              suppressHydrationWarning
            >
              Next
            </button>
          </div>
        )}

        {/* PDF Viewer Modal */}
        {showPdfViewer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="relative w-full max-w-5xl h-[80vh] bg-gray-900 rounded-lg shadow-xl">
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => setShowPdfViewer(false)}
                  className="p-2 rounded-full bg-gray-800/85 text-white hover:bg-gray-700/85 transition-colors"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <iframe
                src="/publications.pdf#toolbar=0"
                className="w-full h-full rounded-lg"
                title="Publications PDF"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Publications; 