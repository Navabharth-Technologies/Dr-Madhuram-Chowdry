/* ============================================================
   DR. MADHURAM CHOWDRY — app.js
   All interactivity, animations, Three.js, GSAP, Form logic, i18n
   ============================================================ */

const i18nData = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_expertise: "Expertise",
    nav_contact: "Contact",
    nav_cta: "Book Appointment",
    nav_drawer_cta: "Book Appointment",
    hero_badge: "Accepting Knee Replacement Patients",
    hero_name: "Dr. Madhuram Chowdry",
    hero_line1: "Knee Replacement",
    hero_line2: 'surgeon<span class="vb-dot">.</span>',
    stat_years: "Years Experience",
    stat_knees: "Knees Replaced",
    stat_success: "Success Rate",
    services_tag: "Knee Surgery Specializations",
    services_title: 'Our Knee <span class="highlight-text">Expertise</span>',
    services_sub: "Click on any procedure to learn about our advanced knee replacement techniques and treatment options.",
    testimonials_tag: "Patient Success Stories",
    testimonials_title: 'Knees <span class="highlight-text">Transformed</span>',
    testimonials_sub: "Our patients, walking pain-free after knee replacement with Dr. Madhuram Chowdry.",
    form_tag: "Book Knee Consultation",
    form_title: 'Schedule Your <span class="highlight-text">Knee Assessment</span>',
    form_sub: "Start your journey to pain-free movement. Our knee specialist team will confirm your appointment within 24 hours.",
    step_1: "Personal",
    step_2: "Medical",
    step_3: "Confirm",
    step_1_title: "Personal Information",
    label_first_name: "First Name",
    placeholder_first_name: "Rahul",
    label_last_name: "Last Name",
    placeholder_last_name: "Sharma",
    label_email: "Email Address",
    placeholder_email: "rahul@email.com",
    label_phone: "Phone Number",
    placeholder_phone: "+91 98765 43210",
    label_dob: "Date of Birth",
    label_gender: "Gender",
    opt_select: "Select",
    opt_male: "Male",
    opt_female: "Female",
    opt_other: "Other",
    opt_prefer_not: "Prefer not to say",
    btn_medical: "Continue to Medical Details",
    step_2_title: "Medical Details",
    label_specialty: "Specialty / Department",
    opt_procedure: "Choose procedure…",
    opt_total_knee: "Minimally Invasive Knee Replacement",
    opt_partial_knee: "Robotic Knee Replacement",
    opt_revision: "Revision Knee Surgery",
    opt_arthroscopy: "Knee Arthroscopy",
    opt_sports: "Sports Knee Injury",
    opt_rehab: "Post-Op Rehabilitation",
    opt_assessment: "Initial Knee Assessment",
    label_date: "Preferred Date",
    label_time: "Preferred Time",
    opt_time: "Select time…",
    label_reason: "Reason for Visit",
    placeholder_reason: "Describe your knee pain, symptoms, or previous treatments…",
    btn_back: "Back",
    btn_confirm: "Review & Confirm",
    step_3_title: "Confirm Appointment",
    label_consent: "I confirm that the information provided is accurate and I consent to data processing for appointment scheduling.",
    btn_final_confirm: "Confirm Appointment",
    success_title: "Appointment Requested!",
    success_msg: "Thank you! Our team will contact you within <strong>24 hours</strong> to confirm your appointment.",
    btn_reset: "Book Another",
    service_0_title: "Minimally Invasive Knee Replacement",
    service_0_sub: "Full joint resurfacing",
    service_0_desc: "Complete resurfacing of the knee joint using high-grade titanium and polyethylene implants. Ideal for severe arthritis, providing long-lasting pain relief and restored mobility.",
    service_1_title: "Robotic Knee Replacement",
    service_1_sub: "Robotic-assisted surgery",
    service_1_desc: "Advanced robotic-assisted technology provides unmatched precision in implant alignment and placement. Minimizes damage to surrounding healthy tissue for a faster recovery and a natural-feeling knee.",
    service_2_title: "Revision Knee Surgery",
    service_2_sub: "Implant replacement & repair",
    service_2_desc: "Specialised surgery to replace or repair a failed or worn-out knee implant. Our team handles the most complex revision cases with cutting-edge implants and techniques.",
    service_3_title: "Knee Arthroscopy",
    service_3_sub: "Keyhole joint surgery",
    service_3_desc: "Minimally invasive keyhole surgery to diagnose and treat meniscal tears, ligament injuries, cartilage damage, and loose bodies inside the knee joint.",
    service_4_title: "Sports Knee Injuries",
    service_4_sub: "ACL, meniscus & ligaments",
    service_4_desc: "Expert management of sports-related knee injuries including ACL/PCL tears, meniscal injuries, patellar dislocations, and collateral ligament damage for athletes of all levels.",
    service_5_title: "Post-Op Rehabilitation",
    service_5_sub: "Recovery & physiotherapy",
    service_5_desc: "Comprehensive physiotherapy and rehabilitation programs tailored for knee replacement patients — from in-hospital mobilisation to full return-to-activity milestones.",
    footer_name: "Dr. Madhuram Chowdry",
    footer_tagline: "MBBS, MS-Orthopedics",
    footer_desc: "Mysuru's leading knee replacement surgeon, dedicated to restoring mobility and eliminating knee pain through advanced robotic-assisted surgery and compassionate care.",
    label_address: "Address",
    value_address: "A R Hospital 22, New Kantharaj Urs Rd, CFTRI layout, Sharadadevi Nagar <br> Mysuru, Karnataka– 570022",
    label_phone_footer: "Phone",
    label_hours: "Hours",
    value_hours: "Mon – Sat: 11:00 AM – 8:00 PM<br>Sun: Emergency Only",
    footer_rights: "© 2026 Dr. Madhuram Chowdry. All rights reserved. | Designed with ❤️ for better healthcare.",
    link_privacy: "Privacy Policy",
    link_terms: "Terms of Service",
    link_hipaa: "HIPAA Compliance",
    // About section
    about_section_title: 'Dr. Madhuram Chowdry',
    about_bio_1: 'Dr. Madhuram Chowdry is a highly skilled <strong>Orthopedic Surgeon</strong> specializing in <strong>Minimally Invasive Knee Replacement, Robotic Knee Replacement, and Revision Knee Surgery</strong>. With over <strong>10+ years of experience</strong> and <strong>1000+ successful knee replacements</strong>, he is committed to restoring mobility and eliminating knee pain through advanced robotic-assisted surgical techniques.',
    about_bio_2: 'Based at <strong>A R Hospital, Mysuru</strong>, Dr. Chowdry combines cutting-edge technology with compassionate patient care, ensuring every patient receives a personalized treatment plan for the fastest possible recovery.',
    ahc_1_title: 'MBBS, MS - Orthopedics',
    ahc_1_sub: 'Advanced Surgical Training',
    ahc_2_title: 'Robotic-Assisted Surgery',
    ahc_2_sub: 'Precision & Accuracy',
    ahc_3_title: 'Rapid Recovery Protocol',
    ahc_3_sub: 'Walk Within 24 Hours',
    btn_explore: 'Explore More',
    // Life Story section
    ls_tag: 'Journey & Legacy',
    ls_title: 'Life Story of <span class="highlight-text">Dr. Madhuram Chowdry</span>',
    ls_sub: 'A journey of dedication, perseverance, and an unwavering commitment to healing.',
    ls_year_1: 'Early Life & Education',
    ls_card_title_1: 'The Foundation of Excellence',
    ls_card_text_1: 'Dr. Madhuram Chowdry pursued his dream of medicine with passion, earning his <strong>MBBS degree</strong> followed by a <strong>Master of Surgery (MS) in Orthopedics</strong>. His academic journey laid a strong foundation in the science of bones, joints, and surgical precision.',
    ls_year_2: 'Training & Specialisation',
    ls_card_title_2: 'Mastering the Art of Knee Surgery',
    ls_card_text_2: 'After completing his postgraduate training, Dr. Chowdry undertook advanced fellowship training in <strong>Joint Replacement Surgery</strong> and <strong>Robotic-Assisted Knee Procedures</strong>. He trained alongside leading orthopedic surgeons, honing his craft to world-class standards.',
    ls_year_3: 'Clinical Practice',
    ls_card_title_3: 'Building a Legacy of Mobility',
    ls_card_text_3: 'Joining <strong>A R Hospital, Mysuru</strong>, Dr. Chowdry established himself as the city\'s most trusted knee specialist. With over <strong>10+ years</strong> of hands-on experience and <strong>1000+ successful knee replacements</strong>, he has given hundreds of patients a new lease on life — free from pain and full of movement.',
    ls_year_4: 'Today & Beyond',
    ls_card_title_4: 'A Commitment That Never Stops',
    ls_card_text_4: 'Dr. Chowdry continues to push the boundaries of orthopedic care — embracing the latest innovations in <strong>robotics</strong>, <strong>minimally invasive techniques</strong>, and <strong>rapid recovery protocols</strong>. His mission remains simple: help every patient walk pain-free, as quickly and safely as possible.',
    // Knee process section
    process_section_title: 'Your Journey to a <span class="highlight-text">Pain-Free Life</span>',
    process_1_title: 'Active Before Pain',
    process_1_desc: 'Enjoying an active lifestyle without joint discomfort.',
    process_2_title: 'Developing Knee Pain',
    process_2_desc: 'Age or injury causing severe pain and mobility issues.',
    process_3_title: 'Robotic Surgery',
    process_3_desc: 'Precision robotic-assisted knee replacement treatment.',
    process_4_title: 'Rapid Recovery',
    process_4_desc: 'Walking within 24 hours and returning to an active life.'
  },
  kn: {
    nav_home: "ಮುಖಪುಟ",
    nav_about: "ಬಗ್ಗೆ",
    nav_expertise: "ಪರಿಣಿತಿ",
    nav_contact: "ಸಂಪರ್ಕ",
    nav_cta: "ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಕಾಯ್ದಿರಿಸಿ",
    nav_drawer_cta: "ಸಮಾಲೋಚನೆ ನಿಗದಿಪಡಿಸಿ",
    hero_badge: "ಮೊಣಕಾಲು ಬದಲಾವಣೆ ರೋಗಿಗಳನ್ನು ಸ್ವೀಕರಿಸಲಾಗುತ್ತಿದೆ",
    hero_name: "ಡಾ. ಮಧು ರಾಮ್ ಚೌದ್ರಿ",
    hero_line1: "ಮೊಣಕಾಲು ಬದಲಾವಣೆ",
    hero_line2: 'ತಜ್ಞರು<span class="vb-dot">.</span>',
    stat_years: "ವರ್ಷಗಳ ಅನುಭವ",
    stat_knees: "ಮೊಣಕಾಲುಗಳ ಬದಲಾವಣೆ",
    stat_success: "ಯಶಸ್ಸಿನ ಪ್ರಮಾಣ",
    services_tag: "ಮೊಣಕಾಲು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ಪರಿಣಿತಿ",
    services_title: 'ನಮ್ಮ ಮೊಣಕಾಲು <span class="highlight-text">ಪರಿಣಿತಿ</span>',
    services_sub: "ನಮ್ಮ ಸುಧಾರಿತ ಮೊಣಕಾಲು ಬದಲಾವಣೆ ತಂತ್ರಗಳು ಮತ್ತು ಚಿಕಿತ್ಸಾ ಆಯ್ಕೆಗಳ ಬಗ್ಗೆ ತಿಳಿಯಲು ಯಾವುದೇ ವಿಧಾನದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ.",
    testimonials_tag: "ರೋಗಿಗಳ ಯಶಸ್ಸಿನ ಕಥೆಗಳು",
    testimonials_title: 'ಮೊಣಕಾಲುಗಳ <span class="highlight-text">ರೂಪಾಂತರ</span>',
    testimonials_sub: "ನಿಜವಾದ ರೋಗಿಗಳು, ನಿಜವಾದ ಚೇತರಿಕೆಗಳು-ಡಾ. ಮಧು ರಾಮ್ ಚೌದ್ರಿ ಅವರೊಂದಿಗೆ ಮೊಣಕಾಲು ಬದಲಾವಣೆಯ ನಂತರ ನೋವು ಮುಕ್ತವಾಗಿ ನಡೆಯುತ್ತಿದ್ದಾರೆ.",
    form_tag: "ಮೊಣಕಾಲು ಸಮಾಲೋಚನೆ ಕಾಯ್ದಿರಿಸಿ",
    form_title: 'ನಿಮ್ಮ ಮೊಣಕಾಲು <span class="highlight-text">ಮೌಲ್ಯಮಾಪನವನ್ನು</span> ನಿಗದಿಪಡಿಸಿ',
    form_sub: "ನೋವು ಮುಕ್ತ ಚಲನೆಯತ್ತ ನಿಮ್ಮ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಿ. ನಮ್ಮ ಮೊಣಕಾಲು ತಜ್ಞರ ತಂಡವು 24 ಗಂಟೆಗಳ ಒಳಗೆ ನಿಮ್ಮ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಅನ್ನು ದೃಢೀಕರಿಸುತ್ತದೆ.",
    step_1: "ವೈಯಕ್ತಿಕ",
    step_2: "ವೈದ್ಯಕೀಯ",
    step_3: "ದೃಢೀಕರಿಸಿ",
    step_1_title: "ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ",
    label_first_name: "ಮೊದಲ ಹೆಸರು",
    placeholder_first_name: "ರಾಹುಲ್",
    label_last_name: "ಕೊನೆಯ ಹೆಸರು",
    placeholder_last_name: "ಶರ್ಮಾ",
    label_email: "ಇಮೇಲ್ ವಿಳಾಸ",
    placeholder_email: "rahul@email.com",
    label_phone: "ಫೋನ್ ಸಂಖ್ಯೆ",
    placeholder_phone: "+91 98765 43210",
    label_dob: "ಜನ್ಮ ದಿನಾಂಕ",
    label_gender: "ಲಿಂಗ",
    opt_select: "ಆಯ್ಕೆ ಮಾಡಿ",
    opt_male: "ಪುರುಷ",
    opt_female: "ಮಹಿಳೆ",
    opt_other: "ಇತರೆ",
    opt_prefer_not: "ಹೇಳಲು ಇಷ್ಟವಿಲ್ಲ",
    btn_medical: "ವೈದ್ಯಕೀಯ ವಿವರಗಳಿಗೆ ಮುಂದುವರಿಯಿರಿ",
    step_2_title: "ವೈದ್ಯಕೀಯ ವಿವರಗಳು",
    label_specialty: "ಪರಿಣಿತಿ / ಇಲಾಖೆ",
    opt_procedure: "ವಿಧಾನವನ್ನು ಆಯ್ಕೆಮಾಡಿ…",
    opt_total_knee: "ಕನಿಷ್ಠ ಆಕ್ರಮಣಕಾರಿ ಮೊಣಕಾಲು ಬದಲಾವಣೆ",
    opt_partial_knee: "ರೊಬೊಟಿಕ್ ಮೊಣಕಾಲು ಬದಲಾವಣೆ",
    opt_revision: "ಪುನರಾವರ್ತಿತ ಮೊಣಕಾಲು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ",
    opt_arthroscopy: "ಮೊಣಕಾಲು ಆರ್ಥ್ರೋಸ್ಕೋಪಿ",
    opt_sports: "ಕ್ರೀಡಾ ಮೊಣಕಾಲು ಗಾಯ",
    opt_rehab: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರದ ಪುನರ್ವಸತಿ",
    opt_assessment: "ಆರಂಭಿಕ ಮೊಣಕಾಲು ಮೌಲ್ಯಮಾಪನ",
    label_date: "ಆದ್ಯತೆಯ ದಿನಾಂಕ",
    label_time: "ಆದ್ಯತೆಯ ಸಮಯ",
    opt_time: "ಸಮಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ…",
    label_reason: "ಭೇಟಿಯ ಕಾರಣ",
    placeholder_reason: "ನಿಮ್ಮ ಮೊಣಕಾಲು ನೋವು, ಲಕ್ಷಣಗಳು ಅಥವಾ ಹಿಂದಿನ ಚಿಕಿತ್ಸೆಗಳನ್ನು ವಿವರಿಸಿ...",
    btn_back: "ಹಿಂದೆ",
    btn_confirm: "ಪರಿಶೀಲಿಸಿ ಮತ್ತು ದೃಢೀಕರಿಸಿ",
    step_3_title: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ದೃಢೀಕರಿಸಿ",
    label_consent: "ಒದಗಿಸಿದ ಮಾಹಿತಿಯು ನಿಖರವಾಗಿದೆ ಎಂದು ನಾನು ದೃಢೀಕರಿಸುತ್ತೇನೆ ಮತ್ತು ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ವೇಳಾಪಟ್ಟಿಗಾಗಿ ಡೇಟಾ ಪ್ರಕ್ರಿಯೆಗೆ ನಾನು ಸಮ್ಮತಿಸುತ್ತೇನೆ.",
    btn_final_confirm: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ದೃಢೀಕರಿಸಿ",
    success_title: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ವಿನಂತಿಸಲಾಗಿದೆ!",
    success_msg: "ಧನ್ಯವಾದಗಳು! ನಿಮ್ಮ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಅನ್ನು ದೃಢೀಕರಿಸಲು ನಮ್ಮ ತಂಡವು 24 ಗಂಟೆಗಳ ಒಳಗೆ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ.",
    btn_reset: "ಇನ್ನೊಂದನ್ನು ಕಾಯ್ದಿರಿಸಿ",
    service_0_title: "ಕನಿಷ್ಠ ಆಕ್ರಮಣಕಾರಿ ಮೊಣಕಾಲು ಬದಲಾವಣೆ",
    service_0_sub: "ಸಂಪೂರ್ಣ ಕೀಲು ಮರುಮೇಲ್ಮೈ ಮಾಡುವಿಕೆ",
    service_0_desc: "ಉನ್ನತ ದರ್ಜೆಯ ಟೈಟಾನಿಯಂ ಮತ್ತು ಪಾಲಿಥಿಲೀನ್ ಇಂಪ್ಲಾಂಟ್‌ಗಳನ್ನು ಬಳಸಿಕೊಂಡು ಮೊಣಕಾಲಿನ ಕೀಲಿನ ಸಂಪೂರ್ಣ ಮರುಮೇಲ್ಮೈ ಮಾಡುವಿಕೆ. ತೀವ್ರವಾದ ಸಂಧಿವಾತಕ್ಕೆ ಸೂಕ್ತವಾಗಿದೆ, ದೀರ್ಘಕಾಲದ ನೋವು ನಿವಾರಣೆ ಮತ್ತು ಚಲನಶೀಲತೆಯನ್ನು ಮರುಸ್ಥಾಪಿಸುತ್ತದೆ.",
    service_1_title: "ರೊಬೊಟಿಕ್ ಮೊಣಕಾಲು ಬದಲಾವಣೆ",
    service_1_sub: "ರೊಬೊಟಿಕ್-ಸಹಾಯದ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ",
    service_1_desc: "ಸುಧಾರಿತ ರೊಬೊಟಿಕ್-ಸಹಾಯದ ತಂತ್ರಜ್ಞಾನವು ಇಂಪ್ಲಾಂಟ್ ಜೋಡಣೆ ಮತ್ತು ನಿಯೋಜನೆಯಲ್ಲಿ ಸಾಟಿಯಿಲ್ಲದ ನಿಖರತೆಯನ್ನು ಒದಗಿಸುತ್ತದೆ. ವೇಗವಾಗಿ ಚೇತರಿಸಿಕೊಳ್ಳಲು ಮತ್ತು ನೈಸರ್ಗಿಕ ಮೊಣಕಾಲು ಭಾವನೆಗಾಗಿ ಸುತ್ತಮುತ್ತಲಿನ ಆರೋಗ್ಯಕರ ಅಂಗಾಂಶಗಳಿಗೆ ಹಾನಿಯಾಗದಂತೆ ಕನಿಷ್ಠಗೊಳಿಸುತ್ತದೆ.",
    service_2_title: "ಪುನರಾವರ್ತಿತ ಮೊಣಕಾಲು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ",
    service_2_sub: "ಇಂಪ್ಲಾಂಟ್ ಬದಲಾವಣೆ ಮತ್ತು ದುರಸ್ತಿ",
    service_2_desc: "ವಿಫಲವಾದ ಅಥವಾ ಸವೆದುಹೋದ ಮೊಣಕಾಲು ಇಂಪ್ಲಾಂಟ್ ಅನ್ನು ಬದಲಿಸಲು ಅಥವಾ ಸರಿಪಡಿಸಲು ವಿಶೇಷ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ. ನಮ್ಮ ತಂಡವು ಅತ್ಯಾಧುನಿಕ ಇಂಪ್ಲಾಂಟ್‌ಗಳು ಮತ್ತು ತಂತ್ರಗಳೊಂದಿಗೆ ಅತ್ಯಂತ ಸಂಕೀರ್ಣವಾದ ಪುನರಾವರ್ತಿತ ಪ್ರಕರಣಗಳನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ.",
    service_3_title: "ಮೊಣಕಾಲು ಆರ್ಥ್ರೋಸ್ಕೋಪಿ",
    service_3_sub: "ಕೀಹೋಲ್ ಜಾಯಿಂಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ",
    service_3_desc: "ಮೆನಿಸ್ಕಲ್ ಕಣ್ಣೀರು, ಅಸ್ಥಿರಜ್ಜು ಗಾಯಗಳು, ಕಾರ್ಟಿಲೆಜ್ ಹಾನಿ ಮತ್ತು ಮೊಣಕಾಲಿನ ಕೀಲಿನ ಒಳಗೆ ಸಡಿಲವಾದ ಕಾಯಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಲು ಮತ್ತು ಚಿಕಿತ್ಸೆ ನೀಡಲು ಕನಿಷ್ಠ ಆಕ್ರಮಣಕಾರಿ ಕೀಹೋಲ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ.",
    service_4_title: "ಕ್ರೀಡಾ ಮೊಣಕಾಲು ಗಾಯಗಳು",
    service_4_sub: "ಎಸಿಎಲ್, ಮೆನಿಸ್ಕಸ್ ಮತ್ತು ಅಸ್ಥಿರಜ್ಜುಗಳು",
    service_4_desc: "ಎಲ್ಲಾ ಹಂತದ ಕ್ರೀಡಾಪಟುಗಳಿಗೆ ಎಸಿಎಲ್/ಪಿಸಿಎಲ್ ಕಣ್ಣೀರು, ಮೆನಿಸ್ಕಲ್ ಗಾಯಗಳು, ಪಟೇಲರ್ ಸ್ಥಳಾಂತರಗಳು ಮತ್ತು ಕೊಲ್ಯಾಟರಲ್ ಲಿಗಮೆಂಟ್ ಹಾನಿ ಸೇರಿದಂತೆ ಕ್ರೀಡೆಗೆ ಸಂಬಂಧಿಸಿದ ಮೊಣಕಾಲು ಗಾಯಗಳ ಪರಿಣಿತ ನಿರ್ವಹಣೆ.",
    service_5_title: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರದ ಪುನರ್ವಸತಿ",
    service_5_sub: "ಚೇತರಿಕೆ ಮತ್ತು ಫಿಸಿಯೋಥೆರಪಿ",
    service_5_desc: "ಮೊಣಕಾಲು ಬದಲಾವಣೆ ರೋಗಿಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ಸಮಗ್ರ ಫಿಸಿಯೋಥೆರಪಿ ಮತ್ತು ಪುನರ್ವಸತಿ ಕಾರ್ಯಕ್ರಮಗಳು — ಆಸ್ಪತ್ರೆಯ ಒಳಗಿನ ಚಟುವಟಿಕೆಯಿಂದ ಪೂರ್ಣ ಚಟುವಟಿಕೆಗೆ ಮರಳುವವರೆಗೆ.",
    footer_name: "ಡಾ. ಮಧು ರಾಮ್ ಚೌದ್ರಿ",
    footer_tagline: "MBBS, MS-Orthopedics",
    footer_desc: "ಮೈಸೂರಿನ ಪ್ರಮುಖ ಮೊಣಕಾಲು ಬದಲಾವಣೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕರು, ಸುಧಾರಿತ ರೊಬೊಟಿಕ್-ಸಹಾಯದ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಮತ್ತು ಕಾಳಜಿಯುಕ್ತ ಆರೈಕೆಯ ಮೂಲಕ ಚಲನಶೀಲತೆಯನ್ನು ಮರುಸ್ಥಾಪಿಸಲು ಮತ್ತು ಮೊಣಕಾಲು ನೋವನ್ನು ಹೋಗಲಾಡಿಸಲು ಸಮರ್ಪಿತರಾಗಿದ್ದಾರೆ.",
    label_address: "ವಿಳಾಸ",
    value_address: "ಎ ಆರ್ ಆಸ್ಪತ್ರೆ 22, ನ್ಯೂ ಕಾಂತರಾಜ್ ಅರಸ್ ರಸ್ತೆ, ಸಿ ಎಫ್‌ ಟಿ ಆರ್ ಐ ಲೇಔಟ್, ಶಾರದಾ ದೇವಿ ನಗರ <br> ಮೈಸೂರು, ಕರ್ನಾಟಕ– 570022",
    label_phone_footer: "ಫೋನ್",
    label_hours: "ಸಮಯ",
    value_hours: "ಸೋಮ – ಶನಿ: 11:00 AM – 8:00 PM<br>ಭಾನು: ತುರ್ತು ಪರಿಸ್ಥಿತಿ ಮಾತ್ರ",
    footer_rights: "© 2026 ಡಾ. ಮಧು ರಾಮ್ ಚೌದ್ರಿ. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ. | ಉತ್ತಮ ಆರೋಗ್ಯ ರಕ್ಷಣೆಗಾಗಿ ❤️ ನೊಂದಿಗೆ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.",
    link_privacy: "ಗೌಪ್ಯತಾ ನೀತಿ",
    link_terms: "ಸೇವಾ ನಿಯಮಗಳು",
    link_hipaa: "HIPAA ಅನುಸರಣೆ",
    // About section
    about_section_title: 'ಡಾ. ಮಧು ರಾಮ್ ಚೌದ್ರಿ',
    about_bio_1: 'ಡಾ. ಮಧು ರಾಮ್ ಚೌದ್ರಿ ಒಬ್ಬ ಉನ್ನತ ಕೌಶಲ್ಯದ <strong>ಆರ್ಥೋಪೆಡಿಕ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕ</strong>, <strong>ಕನಿಷ್ಠ ಆಕ್ರಮಣಕಾರಿ ಮೊಣಕಾಲು ಬದಲಾವಣೆ, ರೊಬೊಟಿಕ್ ಮೊಣಕಾಲು ಬದಲಾವಣೆ ಮತ್ತು ಪುನರಾವರ್ತಿತ ಮೊಣಕಾಲು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ</strong>ಯಲ್ಲಿ ಪರಿಣಿತರು. <strong>10+ ವರ್ಷಗಳ ಅನುಭವ</strong> ಮತ್ತು <strong>1000+ ಯಶಸ್ವಿ ಮೊಣಕಾಲು ಬದಲಾವಣೆ</strong>ಗಳೊಂದಿಗೆ, ಅವರು ಸುಧಾರಿತ ರೊಬೊಟಿಕ್-ಸಹಾಯದ ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ತಂತ್ರಗಳ ಮೂಲಕ ಚಲನಶೀಲತೆಯನ್ನು ಮರುಸ್ಥಾಪಿಸಲು ಮತ್ತು ಮೊಣಕಾಲು ನೋವನ್ನು ತೆಗೆದುಹಾಕಲು ಬದ್ಧರಾಗಿದ್ದಾರೆ.',
    about_bio_2: '<strong>ಎ ಆರ್ ಆಸ್ಪತ್ರೆ, ಮೈಸೂರು</strong>ದಲ್ಲಿ ನೆಲೆಸಿರುವ ಡಾ. ಮಧು ರಾಮ್ ಚೌದ್ರಿ ಅಧುನಾತನ ತಂತ್ರಜ್ಞಾನವನ್ನು ಸಹಾನುಭೂತಿಯ ರೋಗಿ ಆರೈಕೆಯೊಂದಿಗೆ ಸಂಯೋಜಿಸುತ್ತಾರೆ, ಪ್ರತಿ ರೋಗಿಗೂ ವೇಗವಾಗಿ ಚೇತರಿಕೆಗಾಗಿ ವೈಯಕ್ತಿಕ ಚಿಕಿತ್ಸಾ ಯೋಜನೆಯನ್ನು ಖಾತ್ರಿಪಡಿಸುತ್ತಾರೆ.',
    ahc_1_title: 'MBBS, MS - ಆರ್ಥೋಪೆಡಿಕ್ಸ್',
    ahc_1_sub: 'ಸುಧಾರಿತ ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ತರಬೇತಿ',
    ahc_2_title: 'ರೊಬೊಟಿಕ್-ಸಹಾಯದ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ',
    ahc_2_sub: 'ನಿಖರತೆ ಮತ್ತು ಕರಾರು',
    ahc_3_title: 'ತ್ವರಿತ ಚೇತರಿಕೆ ಪ್ರೋಟೋಕಾಲ್',
    ahc_3_sub: '24 ಗಂಟೆಗಳಲ್ಲಿ ನಡೆಯಿರಿ',
    btn_explore: 'ಇನ್ನಷ್ಟು ಅನ್ವೇಷಿಸಿ',
    // Life Story section
    ls_tag: 'ಪ್ರಯಾಣ ಮತ್ತು ಪರಂಪರೆ',
    ls_title: 'ಡಾ. ಮಧು ರಾಮ್ <span class="highlight-text">ಚೌದ್ರಿ</span> ಅವರ ಜೀವನ ಕಥೆ',
    ls_sub: 'ಸಮರ್ಪಣೆ, ಪರಿಶ್ರಮ ಮತ್ತು ಗುಣಪಡಿಸುವ ಅಚಲ ಬದ್ಧತೆಯ ಪ್ರಯಾಣ.',
    ls_year_1: 'ಆರಂಭಿಕ ಜೀವನ ಮತ್ತು ಶಿಕ್ಷಣ',
    ls_card_title_1: 'ಶ್ರೇಷ್ಠತೆಯ ಅಡಿಪಾಯ',
    ls_card_text_1: 'ಡಾ. ಮಧು ರಾಮ್ ಚೌದ್ರಿ ತಮ್ಮ ವೈದ್ಯಕೀಯ ಕನಸನ್ನು ಉತ್ಸಾಹದಿಂದ ಅನ್ವೇಷಿಸಿದರು, <strong>MBBS ಪದವಿ</strong> ನಂತರ <strong>ಆರ್ಥೋಪೆಡಿಕ್ಸ್‌ನಲ್ಲಿ ಎಂ.ಎಸ್.</strong> ಪಡೆದರು. ಅವರ ಶೈಕ್ಷಣಿಕ ಪ್ರಯಾಣವು ಮೂಳೆ, ಕೀಲು ಮತ್ತು ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ನಿಖರತೆಯ ವಿಜ್ಞಾನದಲ್ಲಿ ದೃಢ ಅಡಿಪಾಯ ಹಾಕಿತು.',
    ls_year_2: 'ತರಬೇತಿ ಮತ್ತು ಪರಿಣಿತಿ',
    ls_card_title_2: 'ಮೊಣಕಾಲು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ಕಲೆ ಕರಗತ',
    ls_card_text_2: 'ಸ್ನಾತಕೋತ್ತರ ತರಬೇತಿ ಪೂರ್ಣಗೊಳಿಸಿದ ನಂತರ, ಡಾ. ಮಧು ರಾಮ್ ಚೌದ್ರಿ <strong>ಜಾಯಿಂಟ್ ರಿಪ್ಲೇಸ್‌ಮೆಂಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ</strong> ಮತ್ತು <strong>ರೊಬೊಟಿಕ್-ಸಹಾಯದ ಮೊಣಕಾಲು ವಿಧಾನಗಳಲ್ಲಿ</strong> ಸುಧಾರಿತ ಫೆಲೋಶಿಪ್ ತರಬೇತಿ ಪಡೆದರು. ಅವರು ಪ್ರಮುಖ ಆರ್ಥೋಪೆಡಿಕ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕರ ಜೊತೆ ತರಬೇತಿ ಪಡೆದು ವಿಶ್ವ ಮಟ್ಟ ತಲುಪಿದರು.',
    ls_year_3: 'ವೈದ್ಯಕೀಯ ಅಭ್ಯಾಸ',
    ls_card_title_3: 'ಚಲನಶೀಲತೆಯ ಪರಂಪರೆ ನಿರ್ಮಾಣ',
    ls_card_text_3: '<strong>ಎ ಆರ್ ಆಸ್ಪತ್ರೆ, ಮೈಸೂರು</strong> ಸೇರಿ, ಡಾ. ಮಧು ರಾಮ್ ಚೌದ್ರಿ ನಗರದ ಅತ್ಯಂತ ವಿಶ್ವಾಸಾರ್ಹ ಮೊಣಕಾಲು ತಜ್ಞರಾಗಿ ನಿಲ್ಲಿದರು. <strong>10+ ವರ್ಷಗಳ</strong> ಪ್ರಾಯೋಗಿಕ ಅನುಭವ ಮತ್ತು <strong>1000+ ಯಶಸ್ವಿ ಮೊಣಕಾಲು ಬದಲಾವಣೆ</strong>ಗಳೊಂದಿಗೆ, ನೂರಾರು ರೋಗಿಗಳಿಗೆ ಹೊಸ ಜೀವನ ನೀಡಿದ್ದಾರೆ.',
    ls_year_4: 'ಇಂದು ಮತ್ತು ಮುಂದೆ',
    ls_card_title_4: 'ನಿಲ್ಲದ ಬದ್ಧತೆ',
    ls_card_text_4: 'ಡಾ. ಮಧು ರಾಮ್ ಚೌದ್ರಿ ಆರ್ಥೋಪೆಡಿಕ್ ಆರೈಕೆಯ ಗಡಿಗಳನ್ನು ತಳ್ಳುತ್ತಲೇ ಇದ್ದಾರೆ — <strong>ರೊಬೋಟಿಕ್ಸ್</strong>, <strong>ಕನಿಷ್ಠ ಆಕ್ರಮಣಕಾರಿ ತಂತ್ರಗಳು</strong>, ಮತ್ತು <strong>ತ್ವರಿತ ಚೇತರಿಕೆ ಪ್ರೋಟೋಕಾಲ್‌ಗಳಲ್ಲಿ</strong> ಇತ್ತೀಚಿನ ಆವಿಷ್ಕಾರಗಳನ್ನು ಅಳವಡಿಸಿಕೊಳ್ಳುತ್ತಾ. ಅವರ ಧ್ಯೇಯ ಸರಳ: ಪ್ರತಿ ರೋಗಿಯನ್ನು ನೋವು ಮುಕ್ತವಾಗಿ ನಡೆಯುವಂತೆ ಮಾಡುವುದು.',
    // Knee process section
    process_section_title: 'ನಿಮ್ಮ <span class="highlight-text">ನೋವು ಮುಕ್ತ ಜೀವನ</span>ಕ್ಕೆ ಪ್ರಯಾಣ',
    process_1_title: 'ನೋವಿಗೆ ಮೊದಲು ಸಕ್ರಿಯ',
    process_1_desc: 'ಕೀಲು ಅಸ್ವಸ್ಥತೆಯಿಲ್ಲದೆ ಸಕ್ರಿಯ ಜೀವನಶೈಲಿ ಆನಂದಿಸುವುದು.',
    process_2_title: 'ಮೊಣಕಾಲು ನೋವು ಬೆಳೆಯುವುದು',
    process_2_desc: 'ವಯಸ್ಸು ಅಥವಾ ಗಾಯದಿಂದ ತೀವ್ರ ನೋವು ಮತ್ತು ಚಲನಶೀಲತೆ ತೊಂದರೆ.',
    process_3_title: 'ರೊಬೊಟಿಕ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ',
    process_3_desc: 'ನಿಖರ ರೊಬೊಟಿಕ್-ಸಹಾಯದ ಮೊಣಕಾಲು ಬದಲಾವಣೆ ಚಿಕಿತ್ಸೆ.',
    process_4_title: 'ತ್ವರಿತ ಚೇತರಿಕೆ',
    process_4_desc: '24 ಗಂಟೆಗಳಲ್ಲಿ ನಡೆಯುವುದು ಮತ್ತು ಸಕ್ರಿಯ ಜೀವನಕ್ಕೆ ಮರಳುವುದು.'
  }
};

function switchLanguage(lang) {
  const data = i18nData[lang];
  if (!data) return;

  // Store in localStorage
  localStorage.setItem('drChowdryLang', lang);

  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (data[key]) {
      el.innerHTML = data[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (data[key]) {
      el.placeholder = data[key];
    }
  });

  // Re-run dynamic components
  if (typeof initTestimonials === 'function') initTestimonials();
  // if (typeof initHexGrid === 'function') initHexGrid(); // Not needed if we use static labels or re-render logic
}

// ── Register GSAP plugins ──────────────────────────────────────
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ============================================================
// 1. NAVBAR — scroll behaviour & active link tracking
// ============================================================
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = document.getElementById('drawerClose');
  const navLinks = document.querySelectorAll('.nav-link');
  const drawerLinks = document.querySelectorAll('.drawer-link, .drawer-cta');

  // Scroll → add glass effect (throttled via rAF for smooth performance)
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 60) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Hamburger toggle
  hamburger.addEventListener('click', () => { toggleDrawer(true); });
  closeBtn.addEventListener('click', () => { toggleDrawer(false); });
  overlay.addEventListener('click', () => { toggleDrawer(false); });

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));

    // Touch-friendly animations for mobile
    link.addEventListener('touchstart', () => {
      link.classList.add('touched');
    }, { passive: true });

    link.addEventListener('touchend', () => {
      setTimeout(() => link.classList.remove('touched'), 300);
    }, { passive: true });
  });

  function toggleDrawer(open) {
    hamburger.classList.toggle('open', open);
    drawer.classList.toggle('open', open);
    overlay.classList.toggle('show', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  // Active section detection — only runs on pages that have these sections (e.g. index.html)
  const sections = ['videoBanner', 'expertise', 'testimonials', 'appointment', 'portal', 'contact'];
  const hasSections = !!document.getElementById('videoBanner'); // Only true on index.html
  function updateActiveLink() {
    if (!hasSections) return; // Skip on about.html — active link is set in HTML
    const scrollPos = window.scrollY + 120;
    let current = 'videoBanner';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) current = id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  }
})();

// ============================================================
// 1.05 LAUNCH SCROLL BEHAVIOR
// ============================================================
(function initLaunchScroll() {
  window.addEventListener('load', () => {
    // Check if URL has ?launch=true or #launch
    if (window.location.search.includes('launch=true') || window.location.hash === '#launch') {
      setTimeout(() => {
        const aboutSection = document.getElementById('aboutDoctor');
        if (aboutSection && typeof gsap !== 'undefined') {
          gsap.to(window, {
            duration: 3.5, // Slow scroll duration
            scrollTo: { y: aboutSection, offsetY: 70 },
            ease: "power2.inOut"
          });
        }
      }, 1000); // Wait 1s after load before scrolling
    }
  });
})();

// ============================================================
// 1.1 LANGUAGE SWITCHER — Custom Dropdown Logic
// ============================================================
(function initLangSwitcher() {
  const switcher = document.getElementById('langSwitcher');
  const btn = switcher?.querySelector('.lang-btn');
  const textLabel = switcher?.querySelector('.lang-text');
  const options = switcher?.querySelectorAll('.lang-option');

  if (!switcher || !btn) return;

  // Toggle dropdown
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    switcher.classList.toggle('open');
    const isOpen = switcher.classList.contains('open');
    btn.setAttribute('aria-expanded', isOpen);
  });

  // Handle selection
  options?.forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = opt.dataset.value;

      // Update active state
      options.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');

      // Update label text
      if (textLabel) textLabel.textContent = opt.textContent;

      // Switch language
      switchLanguage(lang);
    });
  });

  // Initial load from localStorage
  const savedLang = localStorage.getItem('drChowdryLang') || 'en';
  if (savedLang !== 'en') {
    switchLanguage(savedLang);
    const targetOpt = Array.from(options).find(o => o.dataset.value === savedLang);
    if (targetOpt) {
      options.forEach(o => o.classList.remove('active'));
      targetOpt.classList.add('active');
      if (textLabel) textLabel.textContent = targetOpt.textContent;
    }
  }

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!switcher.contains(e.target) && switcher.classList.contains('open')) {
      switcher.classList.remove('open');
      btn.setAttribute('aria-expanded', false);
    }
  });
})();

// ── Wire up drawer language buttons ──────────────────────────────
(function initDrawerLang() {
  const drawerOpts = document.querySelectorAll('.drawer-lang-opt');
  if (!drawerOpts.length) return;

  // Sync initial state from localStorage
  const savedLang = localStorage.getItem('drChowdryLang') || 'en';
  drawerOpts.forEach(o => {
    o.classList.toggle('active', o.dataset.value === savedLang);
  });

  drawerOpts.forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = opt.dataset.value;

      // Update drawer button states
      drawerOpts.forEach(o => o.classList.remove('active'));
      opt.classList.add('active');

      // Also sync the navbar dropdown if it exists
      const navOpts = document.querySelectorAll('.lang-option');
      navOpts.forEach(o => {
        o.classList.toggle('active', o.dataset.value === lang);
      });
      const textLabel = document.querySelector('.lang-text');
      if (textLabel) textLabel.textContent = lang === 'kn' ? 'ಕನ್ನಡ' : 'English';

      // Switch language
      switchLanguage(lang);
    });
  });
})();

// ── Smooth scroll helper
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  gsap.to(window, { duration: 1, scrollTo: { y: el, offsetY: 70 }, ease: 'power3.inOut' });
}


// ============================================================
// 4. GSAP SCROLL ANIMATIONS
// ============================================================
(function initScrollAnimations() {
  // Only apply scroll animations if GSAP + ScrollTrigger are available
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  // Video banner entrance — these always run on page load
  if (document.querySelector('.video-banner__text')) {
    gsap.fromTo('.video-banner__text',
      { y: 30, opacity: 0 },
      { duration: 0.9, y: 0, opacity: 1, ease: 'power3.out', delay: 0.3 }
    );
  }
  if (document.querySelector('.vb-stats-overlay')) {
    gsap.fromTo('.vb-stats-overlay',
      { y: 20, opacity: 0 },
      { duration: 0.8, y: 0, opacity: 1, ease: 'power3.out', delay: 0.7 }
    );
  }

  // Helper: animate section when it enters viewport — starts fully visible, animates from offset
  function revealOnScroll(selector, fromVars, triggerEl, triggerStart) {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;
    els.forEach(el => {
      gsap.fromTo(el,
        fromVars,
        {
          ...Object.fromEntries(Object.keys(fromVars).map(k => [k, k === 'opacity' ? 1 : 0])),
          duration: fromVars.duration || 0.7,
          ease: fromVars.ease || 'power3.out',
          delay: fromVars.delay || 0,
          scrollTrigger: {
            trigger: triggerEl || el,
            start: triggerStart || 'top 100%',
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
    });
  }

  // Section headers
  document.querySelectorAll('.section-header').forEach(el => {
    gsap.fromTo(el,
      { y: 25, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 100%', toggleActions: 'play none none none', once: true }
      }
    );
  });

  // About Doctor section
  if (document.querySelector('#aboutImgCol')) {
    gsap.fromTo('#aboutImgCol',
      { x: -50, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-doctor', start: 'top 100%', toggleActions: 'play none none none', once: true }
      }
    );
  }
  if (document.querySelector('#aboutTextCol')) {
    gsap.fromTo('#aboutTextCol',
      { x: 50, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1,
        scrollTrigger: { trigger: '.about-doctor', start: 'top 100%', toggleActions: 'play none none none', once: true }
      }
    );
  }
  document.querySelectorAll('.about-highlight-card').forEach((el, i) => {
    gsap.fromTo(el,
      { x: 20, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: i * 0.1,
        scrollTrigger: { trigger: '.about-doctor', start: 'top 90%', toggleActions: 'play none none none', once: true }
      }
    );
  });

  // Hex items
  document.querySelectorAll('.hex-item').forEach((el, i) => {
    gsap.fromTo(el,
      { y: 25, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: i * 0.07,
        scrollTrigger: { trigger: '#hexGrid', start: 'top 100%', toggleActions: 'play none none none', once: true }
      }
    );
  });

  // Form
  if (document.querySelector('.form-wrapper')) {
    gsap.fromTo('.form-wrapper',
      { y: 35, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.appointment', start: 'top 100%', toggleActions: 'play none none none', once: true }
      }
    );
  }

  // Contact footer
  if (document.querySelector('.contact-info-col')) {
    gsap.fromTo('.contact-info-col',
      { x: -35, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-footer', start: 'top 100%', toggleActions: 'play none none none', once: true }
      }
    );
  }
  if (document.querySelector('.map-col')) {
    gsap.fromTo('.map-col',
      { x: 35, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.1,
        scrollTrigger: { trigger: '.contact-footer', start: 'top 100%', toggleActions: 'play none none none', once: true }
      }
    );
  }
})();



// ============================================================
// 5. STAT COUNTER ANIMATION
// ============================================================
(function initCounters() {
  const statElements = document.querySelectorAll('.stat-num, .vb-stat-num');

  function animateCounters() {
    statElements.forEach(el => {
      if (el.dataset.animated) return; // already animated

      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.dataset.animated = 'true';

        const target = parseInt(el.dataset.target, 10);
        const duration = 1800;
        const start = Date.now();

        function tick() {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target).toLocaleString();

          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = target.toLocaleString();
        }
        requestAnimationFrame(tick);
      }
    });
  }

  let counterTicking = false;
  window.addEventListener('scroll', () => {
    if (!counterTicking) {
      requestAnimationFrame(() => {
        animateCounters();
        counterTicking = false;
      });
      counterTicking = true;
    }
  }, { passive: true });
  setTimeout(animateCounters, 1500); // try on initial render too
})();

// ============================================================
// 6. SERVICE HEXAGONS — click to expand
// ============================================================
(function initHexGrid() {
  const hexItems = document.querySelectorAll('.hex-item');
  hexItems.forEach((item, i) => {
    const shape = item.querySelector('.hex-shape');
    shape.addEventListener('click', () => {
      const isExpanded = item.classList.contains('expanded');
      // Collapse all
      hexItems.forEach(h => h.classList.remove('expanded'));
      // If it wasn't expanded, expand it
      if (!isExpanded) {
        item.classList.add('expanded');
        gsap.from(item.querySelector('.expand-content'), {
          duration: 0.4, y: -10, opacity: 0, ease: 'power3.out'
        });
      }
    });
  });
})();

// ============================================================
// 7. TESTIMONIALS RIBBON — dynamic card generation
// ============================================================
(function initTestimonials() {
  const reviews = [];

  const track = document.getElementById('ribbonTrack');
  if (!track) return;

  // Clear track for re-rendering if needed
  track.innerHTML = '';

  const currentLang = localStorage.getItem('drChowdryLang') || 'en';

  const reviewsEN = [
    { name: 'Gagan Gowda', dept: 'Knee Replacement Surgery', stars: 5, text: 'We had a very good experience at AR hospital. Dr. Madhuram sir had helped in getting proper surgery done well. Post op care was good. Hospital is hygienic and well maintained. Very best knee replacement surgeon in entire Mysore.', color: '#38bdf8', initials: 'GG' },
    { name: 'Sukaram Seervi', dept: 'Hip Replacement Surgery', stars: 5, text: 'I had my hip replacement surgery done by Dr. Madhuram sir, and I am extremely happy with the treatment and care I received. From the first consultation to post-surgery follow-up, he explained everything clearly and gave me great confidence. The surgery was successful, my recovery has been smooth, and I am now able to walk comfortably with much less pain. Dr. Madhuram sir is highly skilled, kind, and very supportive throughout the process. I sincerely thank him for the excellent care.', color: '#22c55e', initials: 'SS' },
    { name: 'Kiran Kumar', dept: 'Joint Replacement', stars: 5, text: 'Very kind hearted doctor and best joint replacement surgeon in entire Mysore.', color: '#ea580c', initials: 'KK' },
    { name: 'Devaraj Kavya', dept: 'Orthopedic Care', stars: 5, text: 'Very best orthopedic surgeon.', color: '#a855f7', initials: 'DK' },
    { name: 'Chandana D N', dept: 'Knee Replacement', stars: 5, text: 'Best orthopedic surgeon and best knee replacement surgeon Dr. Madhuram sir.', color: '#ec4899', initials: 'CD' },
    { name: 'Gowdru C', dept: 'Knee Replacement Surgery', stars: 5, text: 'I recently underwent right knee replacement surgery under the care of Dr. Madhuram. From the initial consultation to the surgery and post-operative follow-ups, the entire experience was excellent.', color: '#eab308', initials: 'GC' },
    { name: 'Lakshmi M Gowda', dept: 'Spine Surgery', stars: 5, text: 'Dr. Madhuram Chowdry is the best spine surgeon in Mysore. My husband had pain and numbness in both legs for 11 months. He was diagnosed with L4 pathological fracture with compressive myelopathy and underwent surgery for the same. He is recovering well.', color: '#14b8a6', initials: 'LG' },
    { name: 'NithyanandaNayak Nayak', dept: 'Orthopedic Recovery', stars: 5, text: 'Dear doctor, I sincerely appreciate your dedication, care, and expertise. Your kindness and commitment made a real difference in my recovery. Thank you for being not just a great doctor, you are a god for me, but also a wonderful human being.', color: '#f97316', initials: 'NN' },
    { name: 'Raj Prince', dept: 'Orthopedic Treatment', stars: 5, text: 'Highly recommend him for his professionalism and patient care. He explained my condition clearly and provided excellent treatment.', color: '#3b82f6', initials: 'RP' }
  ];

  const reviewsKN = [
    { name: 'ಗಗನ್ ಗೌಡ', dept: 'ಮೊಣಕಾಲು ಬದಲಾವಣೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ', stars: 5, text: 'ನಮಗೆ ಎಆರ್ ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ಉತ್ತಮ ಅನುಭವವಾಯಿತು. ಡಾ. ಮಧುರಾಮ್ ಸರ್ ಅವರು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯನ್ನು ಉತ್ತಮವಾಗಿ ಮಾಡಲು ಸಹಾಯ ಮಾಡಿದರು. ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರದ ಆರೈಕೆ ಚೆನ್ನಾಗಿತ್ತು. ಆಸ್ಪತ್ರೆಯು ಸ್ವಚ್ಛವಾಗಿದ್ದು, ಉತ್ತಮವಾಗಿ ನಿರ್ವಹಿಸಲ್ಪಟ್ಟಿದೆ. ಇಡೀ ಮೈಸೂರಿನಲ್ಲೇ ಅತ್ಯುತ್ತಮ ಮೊಣಕಾಲು ಬದಲಾವಣೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕರು.', color: '#38bdf8', initials: 'GG' },
    { name: 'ಸುಖರಾಮ್ ಸೀರ್ವಿ', dept: 'ಸೊಂಟ ಬದಲಾವಣೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ', stars: 5, text: 'ನಾನು ಡಾ. ಮಧುರಾಮ್ ಸರ್ ಅವರಿಂದ ಸೊಂಟ ಬದಲಾವಣೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಮಾಡಿಸಿಕೊಂಡಿದ್ದೇನೆ ಮತ್ತು ನನಗೆ ಸಿಕ್ಕ ಚಿಕಿತ್ಸೆ ಹಾಗೂ ಆರೈಕೆಯಿಂದ ನನಗೆ ತುಂಬಾ ಸಂತೋಷವಾಗಿದೆ. ಮೊದಲ ಸಮಾಲೋಚನೆಯಿಂದ ಹಿಡಿದು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರದ ವರೆಗೆ ಎಲ್ಲವನ್ನೂ ಸ್ಪಷ್ಟವಾಗಿ ವಿವರಿಸಿದರು ಮತ್ತು ನನಗೆ ಹೆಚ್ಚಿನ ವಿಶ್ವಾಸ ನೀಡಿದರು. ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಯಶಸ್ವಿಯಾಯಿತು, ಚೇತರಿಕೆ ಸುಗಮವಾಗಿದೆ ಮತ್ತು ಈಗ ನೋವು ಇಲ್ಲದೆ ಆರಾಮವಾಗಿ ನಡೆಯುತ್ತಿದ್ದೇನೆ. ಡಾ. ಮಧುರಾಮ್ ಸರ್ ಅತ್ಯಂತ ನುರಿತವರು, ದಯಾಳು ಮತ್ತು ಬೆಂಬಲ ನೀಡುವವರಾಗಿದ್ದಾರೆ. ಅವರಿಗೆ ಹಾಗೂ ಅತ್ಯುತ್ತಮ ಆರೈಕೆಗೆ ಧನ್ಯವಾದಗಳು.', color: '#22c55e', initials: 'SS' },
    { name: 'ಕಿರಣ್ ಕುಮಾರ್', dept: 'ಕೀಲು ಬದಲಾವಣೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ', stars: 5, text: 'ಅತ್ಯಂತ ದಯಾಳು ವೈದ್ಯರು ಮತ್ತು ಇಡೀ ಮೈಸೂರಿನಲ್ಲೇ ಅತ್ಯುತ್ತಮ ಕೀಲು ಬದಲಾವಣೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕರು.', color: '#ea580c', initials: 'KK' },
    { name: 'ದೇವರಾಜ್ ಕಾವ್ಯ', dept: 'ಆರ್ಥೋಪೆಡಿಕ್ ಆರೈಕೆ', stars: 5, text: 'ಅತ್ಯಂತ ಶ್ರೇಷ್ಠ ಆರ್ಥೋಪೆಡಿಕ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕರು.', color: '#a855f7', initials: 'DK' },
    { name: 'ಚಂದನಾ ಡಿ ಎನ್', dept: 'ಮೊಣಕಾಲು ಬದಲಾವಣೆ', stars: 5, text: 'ಅತ್ಯುತ್ತಮ ಆರ್ಥೋಪೆಡಿಕ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕರು ಮತ್ತು ಅತ್ಯುತ್ತಮ ಮೊಣಕಾಲು ಬದಲಾವಣೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕರು ಡಾ. ಮಧುರಾಮ್ ಸರ್.', color: '#ec4899', initials: 'CD' },
    { name: 'ಗೌಡ್ರು ಸಿ', dept: 'ಮೊಣಕಾಲು ಬದಲಾವಣೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ', stars: 5, text: 'ನಾನು ಇತ್ತೀಚೆಗೆ ಡಾ. ಮಧುರಾಮ್ ಅವರ ಆರೈಕೆಯಲ್ಲಿ ಬಲ ಮೊಣಕಾಲು ಬದಲಾವಣೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೆ ಒಳಗಾಗಿದ್ದೆ. ಆರಂಭಿಕ ಸಮಾಲೋಚನೆಯಿಂದ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಮತ್ತು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರದ ಫಾಲೋ-ಅಪ್‌ಗಳವರೆಗೆ ಸಂಪೂರ್ಣ ಅನುಭವವು ಅತ್ಯುತ್ತಮವಾಗಿತ್ತು.', color: '#eab308', initials: 'GC' },
    { name: 'ಲಕ್ಷ್ಮಿ ಎಂ ಗೌಡ', dept: 'ಬೆನ್ನುಮೂಳೆಯ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ', stars: 5, text: 'ಡಾ. ಮಧುರಾಮ್ ಚೌದರಿ ಮೈಸೂರಿನ ಅತ್ಯುತ್ತಮ ಬೆನ್ನುಮೂಳೆಯ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕರಾಗಿದ್ದಾರೆ. ನನ್ನ ಪತಿಗೆ 11 ತಿಂಗಳಿನಿಂದ ಎರಡೂ ಕಾಲುಗಳಲ್ಲಿ ನೋವು ಮತ್ತು ಮರಗಟ್ಟುವಿಕೆ ಇತ್ತು, ಅವರಿಗೆ L4 ಪ್ಯಾಥೋಲಾಜಿಕಲ್ ಫ್ರಾಕ್ಚರ್ ಪತ್ತೆಯಾಗಿತ್ತು ಮತ್ತು ಅದಕ್ಕಾಗಿ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೆ ಒಳಗಾಗಿದ್ದರು. ಅವರು ಈಗ ಚೇತರಿಸಿಕೊಳ್ಳುತ್ತಿದ್ದಾರೆ.', color: '#14b8a6', initials: 'LG' },
    { name: 'ನಿತ್ಯಾನಂದ ನಾಯಕ್', dept: 'ಆರ್ಥೋಪೆಡಿಕ್ ಚೇತರಿಕೆ', stars: 5, text: 'ಆತ್ಮೀಯ ವೈದ್ಯರೇ, ನಿಮ್ಮ ಸಮರ್ಪಣೆ, ವ್ಯಾಯಾಮದ ಆರೈಕೆ ಮತ್ತು ಪರಿಣಿತಿಯನ್ನು ನಾನು ಪ್ರಾಮಾಣಿಕವಾಗಿ ಪ್ರಶಂಸಿಸುತ್ತೇನೆ. ನಿಮ್ಮ ದಯೆ ಮತ್ತು ಬದ್ಧತೆಯು ನನ್ನ ಚೇತರಿಕೆಯಲ್ಲಿ ನಿಜವಾದ ಬದಲಾವಣೆಯನ್ನು ತಂದಿತು. ನನಗೆ ಕೇವಲ ಉತ್ತಮ ವೈದ್ಯರಷ್ಟೇ ಅಲ್ಲದೆ ದೇವರಂತಿರುವ ಮತ್ತು ಅದ್ಭುತ ಮನುಷ್ಯರಾಗಿರುವುದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು.', color: '#f97316', initials: 'NN' },
    { name: 'ರಾಜ್ ಪ್ರಿನ್ಸ್', dept: 'ಆರ್ಥೋಪೆಡಿಕ್ ಚಿಕಿತ್ಸೆ', stars: 5, text: 'ಅವರ ವೃತ್ತಿಪರತೆ ಮತ್ತು ರೋಗಿಗಳ ಆರೈಕೆಗಾಗಿ ಅವರನ್ನು ಹೆಚ್ಚು ಶಿಫಾರಸು ಮಾಡುತ್ತೇನೆ. ಅವರು ನನ್ನ ಸ್ಥಿತಿಯನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ವಿವರಿಸಿದರು ಮತ್ತು ಅತ್ಯುತ್ತಮ ಚಿಕಿತ್ಸೆ ನೀಡಿದರು.', color: '#3b82f6', initials: 'RP' }
  ];

  const reviewsToDisplay = currentLang === 'kn' ? reviewsKN : reviewsEN;
  const allReviews = [...reviewsToDisplay, ...reviewsToDisplay];

  allReviews.forEach(r => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="review-header">
        <div class="review-avatar" style="background: ${r.color}20; border: 2px solid ${r.color}40; color: ${r.color}">
          ${r.initials}
        </div>
        <div class="review-meta">
          <div class="review-name">${r.name}</div>
          <div class="review-dept">${r.dept}</div>
        </div>
      </div>
      <div class="review-stars">${'<span class="star">★</span>'.repeat(r.stars)}</div>
      <p class="review-text">${r.text}</p>
    `;
    track.appendChild(card);
  });
})();

// ============================================================
// 8. MULTI-STEP APPOINTMENT FORM
// ============================================================
let currentFormState = 'form'; // can be 'form' or 'success'

// Validation helpers
function validateField(id, groupId, validator) {
  const input = document.getElementById(id);
  const group = document.getElementById(groupId || `fg-${id}`);
  if (!input || !group) return true;
  const value = input.value.trim();
  const error = group.querySelector('.field-error');
  const result = validator(value);

  group.classList.remove('valid', 'error');
  if (result === true) {
    group.classList.add('valid');
    if (error) error.textContent = '';
    return true;
  } else {
    group.classList.add('error');
    if (error) error.textContent = result;
    return false;
  }
}

function validateForm() {
  const checks = [
    validateField('firstName', 'fg-firstName', v => v.length >= 2 ? true : 'First name is required (min 2 characters)'),
    validateField('lastName', 'fg-lastName', v => v.length >= 2 ? true : 'Last name is required (min 2 characters)'),
    validateField('email', 'fg-email', v => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? true : 'Please enter a valid email address'),
    validateField('phone', 'fg-phone', v => v.replace(/\D/g, '').length >= 8 ? true : 'Please enter a valid phone number'),
    validateField('gender', 'fg-gender', v => v ? true : 'Please select your gender'),
    validateField('reason', 'fg-reason', v => v.length >= 10 ? true : 'Please describe the problem you are facing (min 10 characters)'),
  ];
  return checks.every(Boolean);
}

function submitForm() {
  const valid = validateForm();

  if (!valid) {
    // Shake animation
    const formGlass = document.querySelector('.form-glass');
    gsap.fromTo(formGlass, { x: -6 }, { x: 6, repeat: 5, yoyo: true, duration: 0.06, ease: 'power1.inOut', onComplete: () => gsap.set(formGlass, { x: 0 }) });
    return;
  }

  const consent = document.getElementById('consent');
  if (!consent?.checked) {
    gsap.fromTo(consent.parentElement, { x: -4 }, { x: 4, repeat: 5, yoyo: true, duration: 0.05, ease: 'power1.inOut', onComplete: () => gsap.set(consent.parentElement, { x: 0 }) });
    return;
  }

  // Collect form data
  const getValue = id => (document.getElementById(id)?.value || '').trim();
  const getSelectText = id => {
    const sel = document.getElementById(id);
    return sel?.options[sel.selectedIndex]?.text || '';
  };

  const firstName = getValue('firstName');
  const lastName = getValue('lastName');
  const phone = getValue('phone');
  const email = getValue('email');
  const gender = getSelectText('gender');
  const reason = getValue('reason');

  // Build WhatsApp message
  const message = [
    `🏥 *New Appointment Request*`,
    ``,
    `👤 *Name:* ${firstName} ${lastName}`,
    `📞 *Phone:* ${phone}`,
    `📧 *Email:* ${email}`,
    `⚧ *Gender:* ${gender}`,
    `📝 *Problem Description:* ${reason}`,
  ].join('\n');

  const encodedMsg = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/919008994827?text=${encodedMsg}`;

  // Use anchor click to bypass popup blockers
  const a = document.createElement('a');
  a.href = whatsappURL;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Show success screen
  document.getElementById('formStep1').classList.remove('active');
  const successEl = document.getElementById('formSuccess');
  successEl.classList.add('active');
  currentFormState = 'success';
  gsap.from('.success-ring', { scale: 0, opacity: 0, duration: 0.5, ease: 'back.out(1.7)' });
}

function resetForm() {
  // Clear inputs
  document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(el => { el.value = ''; });
  document.querySelectorAll('.form-group').forEach(g => g.classList.remove('valid', 'error'));
  const successEl = document.getElementById('formSuccess');
  successEl.classList.remove('active');
  const consent = document.getElementById('consent');
  if (consent) consent.checked = false;

  document.getElementById('formStep1').classList.add('active');
  currentFormState = 'form';
}

// Live validation on blur
document.addEventListener('DOMContentLoaded', () => {

  const fieldValidators = {
    firstName: v => v.length >= 2 ? true : 'Min 2 characters',
    lastName: v => v.length >= 2 ? true : 'Min 2 characters',
    email: v => !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? true : 'Invalid email',
    phone: v => v.replace(/\D/g, '').length >= 8 ? true : 'Invalid phone',
    gender: v => v ? true : 'Please select',
    reason: v => v.length >= 10 ? true : 'Min 10 characters',
  };

  Object.entries(fieldValidators).forEach(([id, validator]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('blur', () => {
      if (el.value.trim() || el.tagName === 'SELECT') {
        validateField(id, null, validator);
      }
    });
    el.addEventListener('input', () => {
      const group = document.getElementById(`fg-${id}`);
      if (group?.classList.contains('error')) {
        validateField(id, null, validator);
      }
    });
  });
});

// ============================================================
// 9. PATIENT PORTAL NOTIFY
// ============================================================
function notifyPortal() {
  const input = document.getElementById('portalEmail');
  if (!input) return;
  const email = input.value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    input.style.borderColor = '#ef4444';
    input.style.boxShadow = '0 0 0 3px rgba(239,68,68,0.2)';
    gsap.fromTo(input, { x: -5 }, { x: 5, repeat: 4, yoyo: true, duration: 0.06, ease: 'power1.inOut', onComplete: () => gsap.set(input, { x: 0 }) });
    return;
  }
  const btn = input.nextElementSibling;
  btn.textContent = '✓ Registered!';
  btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
  input.value = '';
  input.style.borderColor = '#22c55e';
  input.style.boxShadow = '0 0 0 3px rgba(34,197,94,0.2)';
  input.placeholder = 'You\'re on the list!';
  gsap.from(btn, { scale: 0.85, duration: 0.4, ease: 'back.out(1.7)' });
}

// ============================================================
// 10. GSAP PARALLAX ON HERO BLOBS (mouse-driven)
// ============================================================
(function initBlobParallax() {
  const blobs = {
    '.blob-1': 0.015,
    '.blob-2': -0.02,
    '.blob-3': 0.01,
    '.blob-4': -0.012,
  };
  document.addEventListener('mousemove', e => {
    if (window.scrollY > window.innerHeight) return;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    Object.entries(blobs).forEach(([selector, factor]) => {
      const el = document.querySelector(selector);
      if (el) {
        gsap.to(el, { x: dx * factor, y: dy * factor, duration: 1.5, ease: 'power2.out' });
      }
    });
  });
})();

// ============================================================
// 11. FOOTER — copyright year
// ============================================================
(function () {
  const sections = document.querySelectorAll('#videoBanner, #expertise, #contact, #appointment');
  // Year is already set to 2026 in HTML
})();

// ============================================================
// TESTIMONIAL RIBBON — drag-to-scroll (mouse & touch)
// ============================================================
(function initRibbonScroll() {
  const ribbon = document.getElementById('testimonialRibbon');
  const track = document.getElementById('ribbonTrack');
  if (!ribbon || !track) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let resumeTimer = null;

  function pauseAnimation() {
    track.style.animationPlayState = 'paused';
  }

  function resumeAnimation() {
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
      track.style.animationPlayState = 'running';
    }, 2000);
  }

  // ── Mouse drag ────────────────────────────────────────────
  ribbon.addEventListener('mousedown', e => {
    isDown = true;
    ribbon.classList.add('dragging');
    startX = e.pageX - ribbon.offsetLeft;
    scrollLeft = ribbon.scrollLeft;
    pauseAnimation();
  });

  ribbon.addEventListener('mouseleave', () => {
    if (!isDown) return;
    isDown = false;
    ribbon.classList.remove('dragging');
    resumeAnimation();
  });

  ribbon.addEventListener('mouseup', () => {
    isDown = false;
    ribbon.classList.remove('dragging');
    resumeAnimation();
  });

  ribbon.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - ribbon.offsetLeft;
    const walk = (x - startX) * 1.5;
    ribbon.scrollLeft = scrollLeft - walk;
  });

  // ── Touch drag (pause auto-scroll on touch) ───────────────
  ribbon.addEventListener('touchstart', () => {
    pauseAnimation();
  }, { passive: true });

  ribbon.addEventListener('touchend', () => {
    resumeAnimation();
  }, { passive: true });
})();

// ============================================================
// REEL MANAGER — single-play cover overlay + footer redirect
// Each reel starts hidden behind a play cover.
// Clicking a cover reveals that reel only & pauses all others.
// Footer area redirects to @madhuramchowdry14 (not original account).
// ============================================================
(function initReelManager() {
  const IG_PROFILE = 'https://www.instagram.com/madhuramchowdry14/';

  // Store { card, cover, savedSrc } for every reel slot
  const reels = [];

  function pauseIframe(card) {
    const iframe = card.querySelector('iframe');
    if (!iframe) return;
    const src = iframe.src;
    if (!src || src === 'about:blank') return;
    card._savedSrc = src;
    iframe.src = 'about:blank';
    // Restore quickly so embed is ready for next play
    setTimeout(() => {
      if (card._savedSrc) iframe.src = card._savedSrc;
    }, 300);
  }

  function buildCover(card, coverEl) {
    coverEl.style.display = 'flex';
    pauseIframe(card);
  }

  function playCover(activeCard, activeCover) {
    // Hide this cover → reveal the real reel
    activeCover.style.display = 'none';

    // Pause & re-cover every OTHER reel
    reels.forEach(({ card, cover }) => {
      if (card === activeCard) return;
      buildCover(card, cover);
    });
  }

  function setupCard(card) {
    if (card.querySelector('.reel-cover')) return; // already done

    // --- Play cover ---
    const cover = document.createElement('div');
    cover.className = 'reel-cover';
    cover.innerHTML = `
      <div class="reel-play-btn">
        <svg viewBox="0 0 24 24" fill="white" width="30" height="30">
          <polygon points="6,3 20,12 6,21"/>
        </svg>
      </div>
      <span class="reel-play-label">Tap to play</span>`;

    // --- Footer redirect link (covers "View more on Instagram" area) ---
    const footerLink = document.createElement('a');
    footerLink.className = 'reel-footer-overlay';
    footerLink.href = IG_PROFILE;
    footerLink.target = '_blank';
    footerLink.rel = 'noopener noreferrer';
    footerLink.setAttribute('aria-label', 'View @madhuramchowdry14 on Instagram');

    card.appendChild(cover);
    card.appendChild(footerLink);

    // Immediately hide the iframe so autoplay can't start
    pauseIframe(card);

    reels.push({ card, cover });

    cover.addEventListener('click', () => playCover(card, cover));
  }

  function init() {
    document.querySelectorAll('.reel-placeholder').forEach(setupCard);
  }

  // Run immediately and after embed.js has time to create iframes
  init();
  setTimeout(init, 800);
  setTimeout(init, 2000);
  setTimeout(init, 4000);

  // --- Auto-pause on scroll ---
  // When the happyClients section goes out of view, we pause any playing reel.
  const section = document.getElementById('happyClients');
  if (section && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          // Section scrolled out of view -> Reset all reels to cover state
          reels.forEach(({ card, cover }) => {
            if (cover.style.display === 'none') {
              buildCover(card, cover);
            }
          });
        }
      });
    }, { threshold: 0.05 }); // Trigger as soon as it's almost gone
    observer.observe(section);
  }
})();

console.log('%c Dr. Madhuram Chowdry — Website Loaded ✔', 'background:#06080F;color:#38bdf8;font-size:14px;padding:6px 12px;border-radius:4px;font-weight:bold;');

// ============================================================
// THEME TOGGLE — dark / light mode with localStorage
// ============================================================
(function initTheme() {
  const html = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');

  // Icons
  const MOON = '🌙';
  const SUN = '☀️';

  // Load saved preference; default is light
  const saved = localStorage.getItem('drChowdryTheme') || 'light';
  applyTheme(saved);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme') || 'light';
      const next = current === 'light' ? 'dark' : 'light';
      applyTheme(next);
      localStorage.setItem('drChowdryTheme', next);
    });
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (toggleBtn) {
      toggleBtn.textContent = theme === 'dark' ? SUN : MOON;
      toggleBtn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
  }
})();

// ============================================================
// 12. FLATPICKR INITIALIZATION
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  if (typeof flatpickr !== 'undefined') {
    flatpickr("#dob", {
      dateFormat: "Y-m-d",
      maxDate: "today",
      disableMobile: "true",
      theme: "dark" // Use a dark theme matching the advanced look
    });

    flatpickr("#preferredDate", {
      dateFormat: "Y-m-d",
      minDate: "today",
      disableMobile: "true",
      theme: "dark"
    });
  }
});

// ============================================================
// X. ACCESSIBILITY: Auto-tag generated external iframes
// ============================================================
(function observerIframes() {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.tagName === 'IFRAME' && node.classList.contains('instagram-media')) {
          if (!node.hasAttribute('title')) {
            node.setAttribute('title', 'Instagram Post Component');
          }
        } else if (node.querySelectorAll) {
          const iframes = node.querySelectorAll('iframe.instagram-media');
          iframes.forEach(iframe => {
            if (!iframe.hasAttribute('title')) {
              iframe.setAttribute('title', 'Instagram Post Component');
            }
          });
        }
      });
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Retroactive check
  setTimeout(() => {
    document.querySelectorAll('iframe.instagram-media').forEach(iframe => {
      if (!iframe.hasAttribute('title')) iframe.setAttribute('title', 'Instagram Post Component');
    });
  }, 3000);
})();

// ============================================================
// XI. CLEAN URL NAVIGATION (Prevent hash pollution in address bar)
// ============================================================
(function initCleanNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      if (!targetId) return;

      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault(); // Stop hash from appearing in URL
        
        if (typeof gsap !== 'undefined' && typeof ScrollToPlugin !== 'undefined') {
          gsap.to(window, { duration: 1, scrollTo: { y: targetEl, offsetY: 70 }, ease: 'power3.inOut' });
        } else {
          const y = targetEl.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
        
        // Remove any existing hash cleanly
        if (window.location.hash) {
          history.replaceState(null, null, window.location.pathname + window.location.search);
        }
      }
    });
  });

  // Clean URL on page load if user came from a shared link with a hash
  if (window.location.hash) {
    setTimeout(() => {
      history.replaceState(null, null, window.location.pathname + window.location.search);
    }, 10);
  }
})();
