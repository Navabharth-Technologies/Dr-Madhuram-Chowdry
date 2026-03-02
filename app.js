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
    nav_cta: "Schedule Now",
    nav_drawer_cta: "Schedule Consultation",
    hero_badge: "Accepting Knee Replacement Patients",
    hero_name: "Dr. Madhuram Chowdry",
    hero_line1: "Knee Replacement",
    hero_line2: 'Specialist<span class="vb-dot">.</span>',
    stat_years: "Years Experience",
    stat_knees: "Knees Replaced",
    stat_success: "Success Rate",
    services_tag: "Knee Surgery Specializations",
    services_title: 'Our Knee <span class="highlight-text">Expertise</span>',
    services_sub: "Click on any procedure to learn about our advanced knee replacement techniques and treatment options.",
    testimonials_tag: "Patient Success Stories",
    testimonials_title: 'Knees <span class="highlight-text">Transformed</span>',
    testimonials_sub: "Real patients, real recoveries-walking pain-free after knee replacement with Dr. Madhuram Chowdry.",
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
    opt_total_knee: "Total Knee Replacement",
    opt_partial_knee: "Partial Knee Replacement",
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
    service_0_title: "Total Knee Replacement",
    service_0_sub: "Full joint resurfacing",
    service_0_desc: "Complete resurfacing of the knee joint using high-grade titanium and polyethylene implants. Ideal for severe arthritis, providing long-lasting pain relief and restored mobility.",
    service_1_title: "Partial Knee Replacement",
    service_1_sub: "Unicompartmental surgery",
    service_1_desc: "Minimally invasive surgery replacing only the damaged compartment of the knee. Preserves healthy bone and ligaments for a quicker, more natural recovery.",
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
    about_bio_1: 'Dr. Madhuram Chowdry is a highly skilled <strong>Orthopedic Surgeon</strong> specializing in <strong>Total Knee Replacement, Partial Knee Replacement, and Revision Knee Surgery</strong>. With over <strong>10+ years of experience</strong> and <strong>500+ successful knee replacements</strong>, he is committed to restoring mobility and eliminating knee pain through advanced robotic-assisted surgical techniques.',
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
    ls_card_text_3: 'Joining <strong>A R Hospital, Mysuru</strong>, Dr. Chowdry established himself as the city\'s most trusted knee specialist. With over <strong>10+ years</strong> of hands-on experience and <strong>500+ successful knee replacements</strong>, he has given hundreds of patients a new lease on life — free from pain and full of movement.',
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
    nav_cta: "ಈಗಲೇ ನಿಗದಿಪಡಿಸಿ",
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
    opt_total_knee: "ಸಂಪೂರ್ಣ ಮೊಣಕಾಲು ಬದಲಾವಣೆ",
    opt_partial_knee: "ಭಾಗಶಃ ಮೊಣಕಾಲು ಬದಲಾವಣೆ",
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
    service_0_title: "ಸಂಪೂರ್ಣ ಮೊಣಕಾಲು ಬದಲಾವಣೆ",
    service_0_sub: "ಸಂಪೂರ್ಣ ಕೀಲು ಮರುಮೇಲ್ಮೈ ಮಾಡುವಿಕೆ",
    service_0_desc: "ಉನ್ನತ ದರ್ಜೆಯ ಟೈಟಾನಿಯಂ ಮತ್ತು ಪಾಲಿಥಿಲೀನ್ ಇಂಪ್ಲಾಂಟ್‌ಗಳನ್ನು ಬಳಸಿಕೊಂಡು ಮೊಣಕಾಲಿನ ಕೀಲಿನ ಸಂಪೂರ್ಣ ಮರುಮೇಲ್ಮೈ ಮಾಡುವಿಕೆ. ತೀವ್ರವಾದ ಸಂಧಿವಾತಕ್ಕೆ ಸೂಕ್ತವಾಗಿದೆ, ದೀರ್ಘಕಾಲದ ನೋವು ನಿವಾರಣೆ ಮತ್ತು ಚಲನಶೀಲತೆಯನ್ನು ಮರುಸ್ಥಾಪಿಸುತ್ತದೆ.",
    service_1_title: "ಭಾಗಶಃ ಮೊಣಕಾಲು ಬದಲಾವಣೆ",
    service_1_sub: "ಯುನಿಕಂಪಾರ್ಟ್‌ಮೆಂಟಲ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ",
    service_1_desc: "ಮೊಣಕಾಲಿನ ಹಾನಿಗೊಳಗಾದ ಭಾಗವನ್ನು ಮಾತ್ರ ಬದಲಾಯಿಸುವ ಕನಿಷ್ಠ ಆಕ್ರಮಣಕಾರಿ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ. ವೇಗವಾಗಿ ಮತ್ತು ನೈಸರ್ಗಿಕ ಚೇತರಿಕೆಗಾಗಿ ಆರೋಗ್ಯಕರ ಮೂಳೆ ಮತ್ತು ಅಸ್ಥಿರಜ್ಜುಗಳನ್ನು ಸಂರಕ್ಷಿಸುತ್ತದೆ.",
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
    about_bio_1: 'ಡಾ. ಮಧು ರಾಮ್ ಚೌದ್ರಿ ಒಬ್ಬ ಉನ್ನತ ಕೌಶಲ್ಯದ <strong>ಆರ್ಥೋಪೆಡಿಕ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕ</strong>, <strong>ಸಂಪೂರ್ಣ ಮೊಣಕಾಲು ಬದಲಾವಣೆ, ಭಾಗಶಃ ಮೊಣಕಾಲು ಬದಲಾವಣೆ ಮತ್ತು ಪುನರಾವರ್ತಿತ ಮೊಣಕಾಲು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ</strong>ಯಲ್ಲಿ ಪರಿಣಿತರು. <strong>10+ ವರ್ಷಗಳ ಅನುಭವ</strong> ಮತ್ತು <strong>500+ ಯಶಸ್ವಿ ಮೊಣಕಾಲು ಬದಲಾವಣೆ</strong>ಗಳೊಂದಿಗೆ, ಅವರು ಸುಧಾರಿತ ರೊಬೊಟಿಕ್-ಸಹಾಯದ ಶಸ್ತ್ರಚಿಕಿತ್ಸಾ ತಂತ್ರಗಳ ಮೂಲಕ ಚಲನಶೀಲತೆಯನ್ನು ಮರುಸ್ಥಾಪಿಸಲು ಮತ್ತು ಮೊಣಕಾಲು ನೋವನ್ನು ತೆಗೆದುಹಾಕಲು ಬದ್ಧರಾಗಿದ್ದಾರೆ.',
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
    ls_card_text_3: '<strong>ಎ ಆರ್ ಆಸ್ಪತ್ರೆ, ಮೈಸೂರು</strong> ಸೇರಿ, ಡಾ. ಮಧು ರಾಮ್ ಚೌದ್ರಿ ನಗರದ ಅತ್ಯಂತ ವಿಶ್ವಾಸಾರ್ಹ ಮೊಣಕಾಲು ತಜ್ಞರಾಗಿ ನಿಲ್ಲಿದರು. <strong>10+ ವರ್ಷಗಳ</strong> ಪ್ರಾಯೋಗಿಕ ಅನುಭವ ಮತ್ತು <strong>500+ ಯಶಸ್ವಿ ಮೊಣಕಾಲು ಬದಲಾವಣೆ</strong>ಗಳೊಂದಿಗೆ, ನೂರಾರು ರೋಗಿಗಳಿಗೆ ಹೊಸ ಜೀವನ ನೀಡಿದ್ದಾರೆ.',
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

  // Scroll → add glass effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
    updateActiveLink();
  });

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
// 2. PARTICLE CANVAS (background dots grid)
// ============================================================
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    buildParticles();
  }

  function buildParticles() {
    particles = [];
    const count = Math.floor((W * H) / 14000);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.8 + 0.5,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        alpha: Math.random() * 0.18 + 0.05,
        color: ['#0ea5e9', '#16a34a', '#ea580c', '#0284c7', '#15803d'][Math.floor(Math.random() * 5)]
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize(); draw();
})();

// ============================================================
// 3. THREE.JS — Knee Replacement 3D Animation with mouse tilt
// ============================================================
(function initThreeD() {
  const canvas = document.getElementById('threeCanvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0, 7.5);

  // ── LIGHTS ──────────────────────────────
  scene.add(new THREE.AmbientLight(0xffffff, 0.5));

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
  keyLight.position.set(4, 6, 5);
  keyLight.castShadow = true;
  scene.add(keyLight);

  const blueLight = new THREE.PointLight(0x38bdf8, 4, 18);
  blueLight.position.set(3, 2, 4);
  scene.add(blueLight);

  const greenLight = new THREE.PointLight(0x22c55e, 2.5, 18);
  greenLight.position.set(-3, -2, 3);
  scene.add(greenLight);

  const orangeLight = new THREE.PointLight(0xf97316, 1.8, 14);
  orangeLight.position.set(0, -5, 2);
  scene.add(orangeLight);

  const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.8);
  rimLight.position.set(-4, 0, -2);
  scene.add(rimLight);

  // ── MATERIALS ───────────────────────────
  // Bone — warm ivory
  const boneMat = new THREE.MeshStandardMaterial({
    color: 0xf5e8c8,
    metalness: 0.0,
    roughness: 0.75,
    emissive: 0x2a1a00,
    emissiveIntensity: 0.06
  });

  // Titanium implant — polished chrome-blue
  const titaniumMat = new THREE.MeshStandardMaterial({
    color: 0x8ab4d4,
    metalness: 0.95,
    roughness: 0.08,
    emissive: 0x0a2a3a,
    emissiveIntensity: 0.12,
    envMapIntensity: 1.2
  });

  // Polyethylene insert — white/light gray
  const polyMat = new THREE.MeshStandardMaterial({
    color: 0xeaf4ff,
    metalness: 0.0,
    roughness: 0.45,
    emissive: 0x0a1a2a,
    emissiveIntensity: 0.04
  });

  // Screw — darker titanium
  const screwMat = new THREE.MeshStandardMaterial({
    color: 0x5a8aaa,
    metalness: 0.98,
    roughness: 0.06
  });

  // Cartilage glow — subtle orange
  const glowMat = new THREE.MeshStandardMaterial({
    color: 0xf97316,
    metalness: 0.0,
    roughness: 0.9,
    transparent: true,
    opacity: 0.22,
    emissive: 0xf97316,
    emissiveIntensity: 0.35
  });

  // ── OUTER PIVOT GROUP (mouse tilt controls this) ──────────
  const outerGroup = new THREE.Group();
  scene.add(outerGroup);
  outerGroup.position.set(1.6, 0, 0); // shift right so content text has room

  // ── FEMUR UPPER GROUP (rotates for flexion animation) ──
  const femurGroup = new THREE.Group();
  outerGroup.add(femurGroup);

  // --- Femur shaft (tapered cylinder) ---
  const femurShaftGeo = new THREE.CylinderGeometry(0.32, 0.42, 2.6, 18, 1);
  const femurShaft = new THREE.Mesh(femurShaftGeo, boneMat);
  femurShaft.position.y = 1.8;
  femurShaft.castShadow = true;
  femurGroup.add(femurShaft);

  // Femur distal end — wider flare
  const femurDistalGeo = new THREE.CylinderGeometry(0.52, 0.36, 0.5, 18);
  const femurDistal = new THREE.Mesh(femurDistalGeo, boneMat);
  femurDistal.position.y = 0.6;
  femurGroup.add(femurDistal);

  // --- Medial condyle (left rounded lobe) ---
  const medCondyle = new THREE.Mesh(new THREE.SphereGeometry(0.38, 18, 14), boneMat);
  medCondyle.position.set(-0.28, 0.32, 0.05);
  medCondyle.scale.set(1, 0.72, 0.85);
  femurGroup.add(medCondyle);

  // --- Lateral condyle (right rounded lobe) ---
  const latCondyle = new THREE.Mesh(new THREE.SphereGeometry(0.38, 18, 14), boneMat);
  latCondyle.position.set(0.28, 0.32, 0.05);
  latCondyle.scale.set(1, 0.72, 0.85);
  femurGroup.add(latCondyle);

  // --- Femoral Component (titanium cap over condyles) ---
  // Main curved shell approximated with a flattened half-sphere
  const femCompGeo = new THREE.SphereGeometry(0.52, 24, 14, 0, Math.PI * 2, 0, Math.PI * 0.55);
  const femComp = new THREE.Mesh(femCompGeo, titaniumMat);
  femComp.rotation.x = Math.PI;
  femComp.position.set(0, 0.30, 0.06);
  femComp.scale.set(1.12, 0.88, 0.95);
  femComp.castShadow = true;
  femurGroup.add(femComp);

  // Femoral component flange (anterior flange sticking up)
  const flangeGeo = new THREE.BoxGeometry(0.78, 0.42, 0.14);
  const flange = new THREE.Mesh(flangeGeo, titaniumMat);
  flange.position.set(0, 0.56, 0.22);
  flange.rotation.x = -0.3;
  femurGroup.add(flange);

  // ── TIBIA LOWER GROUP (fixed, does not rotate) ──────────
  const tibiaGroup = new THREE.Group();
  outerGroup.add(tibiaGroup);

  // --- Tibial plateau (flat top of tibia) ---
  const tibPlateauGeo = new THREE.CylinderGeometry(0.55, 0.48, 0.22, 20);
  const tibPlateau = new THREE.Mesh(tibPlateauGeo, boneMat);
  tibPlateau.position.y = -0.55;
  tibiaGroup.add(tibPlateau);

  // --- Tibial Tray (metallic flat platform) ---
  const tibTrayGeo = new THREE.CylinderGeometry(0.52, 0.52, 0.13, 20);
  const tibTray = new THREE.Mesh(tibTrayGeo, titaniumMat);
  tibTray.position.y = -0.39;
  tibTray.castShadow = true;
  tibiaGroup.add(tibTray);

  // Tibial tray lip / rim
  const tibRimGeo = new THREE.TorusGeometry(0.52, 0.04, 8, 30);
  const tibRim = new THREE.Mesh(tibRimGeo, titaniumMat);
  tibRim.position.y = -0.33;
  tibiaGroup.add(tibRim);

  // Tibial stem (peg going down into tibia)
  const tibStemGeo = new THREE.CylinderGeometry(0.1, 0.08, 0.55, 12);
  const tibStem = new THREE.Mesh(tibStemGeo, titaniumMat);
  tibStem.position.y = -0.74;
  tibiaGroup.add(tibStem);

  // --- Polyethylene insert (sits on top of tibial tray) ---
  const polyGeo = new THREE.CylinderGeometry(0.48, 0.48, 0.18, 20);
  const polyInsert = new THREE.Mesh(polyGeo, polyMat);
  polyInsert.position.y = -0.24;
  tibiaGroup.add(polyInsert);

  // Concave dish carved into poly (simulate articulating surface)
  const dishGeo = new THREE.SphereGeometry(0.38, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.4);
  const dish = new THREE.Mesh(dishGeo, polyMat);
  dish.rotation.x = Math.PI;
  dish.position.set(0, -0.15, 0);
  dish.scale.set(1, 0.35, 0.9);
  tibiaGroup.add(dish);

  // --- Tibia shaft ---
  const tibShaftGeo = new THREE.CylinderGeometry(0.28, 0.33, 2.4, 16);
  const tibShaft = new THREE.Mesh(tibShaftGeo, boneMat);
  tibShaft.position.y = -1.85;
  tibShaft.castShadow = true;
  tibiaGroup.add(tibShaft);

  // Tibia distal taper
  const tibDistal = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.28, 0.4, 16), boneMat);
  tibDistal.position.y = -0.88;
  tibiaGroup.add(tibDistal);

  // --- Fixing screws (4 screws in tibial tray) ---
  const screwPositions = [
    [-0.22, 0, -0.22], [0.22, 0, 0.22],
    [-0.22, 0, 0.22], [0.22, 0, -0.22]
  ];
  screwPositions.forEach(([x, , z]) => {
    const screwGeo = new THREE.CylinderGeometry(0.04, 0.035, 0.35, 8);
    const screw = new THREE.Mesh(screwGeo, screwMat);
    screw.position.set(x, -0.58, z);
    // Screw head
    const headGeo = new THREE.CylinderGeometry(0.07, 0.04, 0.08, 8);
    const head = new THREE.Mesh(headGeo, screwMat);
    head.position.set(x, -0.38, z);
    tibiaGroup.add(screw);
    tibiaGroup.add(head);
  });

  // ── PATELLAR COMPONENT (small button in front) ──────────
  const patellaGroup = new THREE.Group();
  outerGroup.add(patellaGroup);

  const patellaGeo = new THREE.SphereGeometry(0.22, 14, 10);
  const patella = new THREE.Mesh(patellaGeo, boneMat);
  patella.scale.set(1.0, 0.7, 0.5);
  patella.position.set(0, 0.15, 0.62);
  patellaGroup.add(patella);

  const patCapGeo = new THREE.SphereGeometry(0.18, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.5);
  const patCap = new THREE.Mesh(patCapGeo, polyMat);
  patCap.rotation.x = Math.PI;
  patCap.position.set(0, 0.15, 0.66);
  patCap.scale.set(1, 0.55, 0.45);
  patellaGroup.add(patCap);

  // ── GLOW ENERGY RING around joint line ────────────────
  const glowRingGeo = new THREE.TorusGeometry(0.62, 0.045, 10, 60);
  const glowRing = new THREE.Mesh(glowRingGeo, glowMat);
  glowRing.rotation.x = Math.PI / 2;
  glowRing.position.y = -0.15;
  outerGroup.add(glowRing);

  // Second faint ring
  const glowRing2 = new THREE.Mesh(
    new THREE.TorusGeometry(0.78, 0.025, 8, 60),
    new THREE.MeshStandardMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.18, emissive: 0x38bdf8, emissiveIntensity: 0.5 })
  );
  glowRing2.rotation.x = Math.PI / 2;
  glowRing2.position.y = -0.15;
  outerGroup.add(glowRing2);

  // ── ORBITING DIAGNOSTIC PARTICLES ─────────────────────
  const orbParticles = [];
  const orbColors = [0x38bdf8, 0x22c55e, 0xf97316, 0xffffff];
  for (let i = 0; i < 6; i++) {
    const orb = new THREE.Mesh(
      new THREE.SphereGeometry(0.055 + (i % 2) * 0.03, 10, 10),
      new THREE.MeshStandardMaterial({
        color: orbColors[i % 4],
        metalness: 0.9, roughness: 0.05,
        emissive: orbColors[i % 4],
        emissiveIntensity: 0.6
      })
    );
    outerGroup.add(orb);
    orbParticles.push({ mesh: orb, angle: (i / 6) * Math.PI * 2, radius: 1.2 + (i % 3) * 0.25, speed: 0.018 + i * 0.004, yOffset: (i - 2.5) * 0.55 });
  }

  // ── RESIZE handler ─────────────────────────────────────
  function layout() {
    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    renderer.setSize(W, H);
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
    // On mobile, centre the model
    outerGroup.position.x = W < 768 ? 0 : 1.6;
  }
  window.addEventListener('resize', layout);
  layout();

  // ── MOUSE / TOUCH TILT ────────────────────────────────
  let targetRX = 0.12, targetRY = 0;
  let currentRX = 0.12, currentRY = 0;

  document.addEventListener('mousemove', e => {
    if (window.scrollY > window.innerHeight) return;
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    targetRY = ((e.clientX - cx) / cx) * 0.7;
    targetRX = -((e.clientY - cy) / cy) * 0.5 + 0.12;
  });

  document.addEventListener('touchmove', e => {
    if (window.scrollY > window.innerHeight) return;
    const touch = e.touches[0];
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    targetRY = ((touch.clientX - cx) / cx) * 0.45;
    targetRX = -((touch.clientY - cy) / cy) * 0.35 + 0.12;
  }, { passive: true });

  // ── ANIMATION LOOP ─────────────────────────────────────
  let autoYaw = 0;

  function animate() {
    requestAnimationFrame(animate);
    const t = Date.now() * 0.001;

    // Slow auto yaw
    autoYaw += 0.003;

    // Smooth lerp for mouse tilt
    currentRX += (targetRX - currentRX) * 0.055;
    currentRY += (targetRY - currentRY) * 0.055;

    outerGroup.rotation.x = currentRX;
    outerGroup.rotation.y = currentRY + autoYaw;

    // ── KNEE FLEXION / EXTENSION ──────────────────────────
    // Oscillate between 0° (straight) and ~75° (flexed) in radians
    // Uses a smooth sinusoidal with slight hold at extremes (eased)
    const rawFlex = (Math.sin(t * 0.65) + 1) / 2; // 0 → 1
    // Cubic ease at extremes (holds at 0° and 75° briefly)
    const eased = rawFlex < 0.5
      ? 4 * rawFlex * rawFlex * rawFlex
      : 1 - Math.pow(-2 * rawFlex + 2, 3) / 2;
    const flexAngle = eased * (Math.PI * 0.42); // max ~75°

    femurGroup.rotation.x = -flexAngle;
    // Patella rides along with flexion
    patellaGroup.rotation.x = -flexAngle * 0.6;
    patellaGroup.position.y = Math.sin(flexAngle) * 0.3;
    patellaGroup.position.z = Math.cos(flexAngle) * 0.05;

    // ── GLOW RINGS PULSE ──────────────────────────────────
    const pulse = 0.7 + 0.3 * Math.sin(t * 3.5);
    glowRing.material.opacity = 0.18 + 0.14 * pulse;
    glowRing2.material.opacity = 0.10 + 0.10 * pulse;
    glowRing.scale.setScalar(1 + 0.04 * Math.sin(t * 2.2));

    // ── ORBITING PARTICLES ────────────────────────────────
    orbParticles.forEach(p => {
      p.angle += p.speed;
      p.mesh.position.x = Math.cos(p.angle) * p.radius;
      p.mesh.position.z = Math.sin(p.angle) * p.radius;
      p.mesh.position.y = p.yOffset + Math.sin(p.angle * 1.5 + t) * 0.12;
    });

    // ── LIGHT PULSE ───────────────────────────────────────
    blueLight.intensity = 3.5 + Math.sin(t * 2.1) * 1.0;
    orangeLight.intensity = 1.5 + Math.sin(t * 1.7 + 1) * 0.5;

    // Camera parallax on scroll
    camera.position.y = -window.scrollY * 0.003;

    renderer.render(scene, camera);
  }
  animate();
})();

// ============================================================
// 4. GSAP SCROLL ANIMATIONS
// ============================================================
(function initScrollAnimations() {
  // Helper: only animate if element exists
  function animateIfExists(selector, props) {
    if (document.querySelector(selector)) {
      gsap.from(selector, props);
    }
  }

  // Video banner entrance (replaces old hero animations)
  animateIfExists('.video-banner__text', { duration: 0.9, y: 50, opacity: 0, ease: 'power3.out', delay: 0.3 });
  animateIfExists('.vb-stats-overlay', { duration: 0.8, y: 30, opacity: 0, ease: 'power3.out', delay: 0.7 });

  // Section headers
  const headers = document.querySelectorAll('.section-header');
  headers.forEach(el => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      y: 40, opacity: 0, duration: 0.8, ease: 'power3.out'
    });
  });

  // About Doctor — image from left, text from right
  animateIfExists('#aboutImgCol', {
    scrollTrigger: { trigger: '.about-doctor', start: 'top 80%', toggleActions: 'play none none none' },
    x: -80, opacity: 0, duration: 1, ease: 'power3.out'
  });
  animateIfExists('#aboutTextCol', {
    scrollTrigger: { trigger: '.about-doctor', start: 'top 80%', toggleActions: 'play none none none' },
    x: 80, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.15
  });
  animateIfExists('.about-highlight-card', {
    scrollTrigger: { trigger: '.about-doctor', start: 'top 75%', toggleActions: 'play none none none' },
    x: 30, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out'
  });

  // Hex items stagger
  animateIfExists('.hex-item', {
    scrollTrigger: { trigger: '#hexGrid', start: 'top 80%', toggleActions: 'play none none none' },
    y: 50, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out'
  });

  // Form wrapper
  animateIfExists('.form-wrapper', {
    scrollTrigger: { trigger: '.appointment', start: 'top 75%', toggleActions: 'play none none none' },
    y: 60, opacity: 0, duration: 0.8, ease: 'power3.out'
  });

  // Contact grid
  animateIfExists('.contact-info-col', {
    scrollTrigger: { trigger: '.contact-footer', start: 'top 80%', toggleActions: 'play none none none' },
    x: -50, opacity: 0, duration: 0.8, ease: 'power3.out'
  });
  animateIfExists('.map-col', {
    scrollTrigger: { trigger: '.contact-footer', start: 'top 80%', toggleActions: 'play none none none' },
    x: 50, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.15
  });
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

  window.addEventListener('scroll', animateCounters);
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
  const reviews = [
    { name: 'Priya Sharma', dept: 'Total Knee Replacement', stars: 5, text: 'After years of unbearable knee pain, Dr. Chowdry gave me my life back. I was walking without a stick within a week of surgery. Truly life-changing!', color: '#38bdf8', initials: 'PS' },
    { name: 'Rajesh Kumar', dept: 'Bilateral Knee Replacement', stars: 5, text: 'Both my knees were replaced in a single surgery. The robotic precision was incredible. I am now climbing stairs pain-free for the first time in 10 years.', color: '#22c55e', initials: 'RK' },
    { name: 'Ananya Reddy', dept: 'Partial Knee Replacement', stars: 5, text: 'I was worried about recovery time, but Dr. Chowdry\'s minimally invasive approach had me back home in two days. The knee feels completely natural.', color: '#f97316', initials: 'AR' },
    { name: 'Mohammed Ali', dept: 'Revision Knee Surgery', stars: 5, text: 'My previous implant had failed elsewhere. Dr. Chowdry handled the complex revision surgery with extraordinary expertise. I have zero pain today.', color: '#38bdf8', initials: 'MA' },
    { name: 'Sujatha Nair', dept: 'Knee Arthroscopy', stars: 5, text: 'The keyhole surgery for my meniscal tear was smooth and recovery was fast. Dr. Chowdry explained every step clearly. Back to walking in 3 days!', color: '#22c55e', initials: 'SN' },
    { name: 'Vikram Patel', dept: 'Sports Knee Injury', stars: 5, text: 'As a cricket player, my ACL tear was devastating. Dr. Chowdry\'s reconstruction surgery got me back on the field in 6 months. Outstanding work!', color: '#f97316', initials: 'VP' },
    { name: 'Deepika Singh', dept: 'Total Knee Replacement', stars: 5, text: 'The robotic-assisted surgery was precise. My new knee feels completely natural. Six months later I am dancing at my daughter\'s wedding — pain free!', color: '#38bdf8', initials: 'DS' },
    { name: 'Arjun Krishnan', dept: 'Post-Op Rehabilitation', stars: 5, text: 'The rehabilitation team was exceptional. Structured physiotherapy from day one made my recovery incredibly smooth. I exceeded all recovery milestones.', color: '#22c55e', initials: 'AK' },
  ];

  const track = document.getElementById('ribbonTrack');
  if (!track) return;

  // Clear track for re-rendering if needed
  track.innerHTML = '';

  const currentLang = localStorage.getItem('drChowdryLang') || 'en';

  const reviewsEN = [
    { name: 'Priya Sharma', dept: 'Total Knee Replacement', stars: 5, text: 'After years of unbearable knee pain, Dr. Chowdry gave me my life back. I was walking without a stick within a week of surgery. Truly life-changing!', color: '#38bdf8', initials: 'PS' },
    { name: 'Rajesh Kumar', dept: 'Bilateral Knee Replacement', stars: 5, text: 'Both my knees were replaced in a single surgery. The robotic precision was incredible. I am now climbing stairs pain-free for the first time in 10 years.', color: '#22c55e', initials: 'RK' },
    { name: 'Ananya Reddy', dept: 'Partial Knee Replacement', stars: 5, text: 'I was worried about recovery time, but Dr. Chowdry\'s minimally invasive approach had me back home in two days. The knee feels completely natural.', color: '#f97316', initials: 'AR' },
    { name: 'Mohammed Ali', dept: 'Revision Knee Surgery', stars: 5, text: 'My previous implant had failed elsewhere. Dr. Chowdry handled the complex revision surgery with extraordinary expertise. I have zero pain today.', color: '#38bdf8', initials: 'MA' },
    { name: 'Sujatha Nair', dept: 'Knee Arthroscopy', stars: 5, text: 'The keyhole surgery for my meniscal tear was smooth and recovery was fast. Dr. Chowdry explained every step clearly. Back to walking in 3 days!', color: '#22c55e', initials: 'SN' },
    { name: 'Vikram Patel', dept: 'Sports Knee Injury', stars: 5, text: 'As a cricket player, my ACL tear was devastating. Dr. Chowdry\'s reconstruction surgery got me back on the field in 6 months. Outstanding work!', color: '#f97316', initials: 'VP' },
    { name: 'Deepika Singh', dept: 'Total Knee Replacement', stars: 5, text: 'The robotic-assisted surgery was precise. My new knee feels completely natural. Six months later I am dancing at my daughter\'s wedding — pain free!', color: '#38bdf8', initials: 'DS' },
    { name: 'Arjun Krishnan', dept: 'Post-Op Rehabilitation', stars: 5, text: 'The rehabilitation team was exceptional. Structured physiotherapy from day one made my recovery incredibly smooth. I exceeded all recovery milestones.', color: '#22c55e', initials: 'AK' },
  ];

  const reviewsKN = [
    { name: 'ಪ್ರಿಯಾ ಶರ್ಮಾ', dept: 'ಸಂಪೂರ್ಣ ಮೊಣಕಾಲು ಬದಲಾವಣೆ', stars: 5, text: 'ವರ್ಷಗಳ ಮೊಣಕಾಲು ನೋವಿನ ನಂತರ, ಡಾ. ಮಧು ರಾಮ್ ಚೌದ್ರಿ ನನಗೆ ನನ್ನ ಜೀವನವನ್ನು ಮರಳಿ ನೀಡಿದರು. ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ಒಂದು ವಾರದಲ್ಲೇ ನಾನು ಕೋಲಿನ ಸಹಾಯವಿಲ್ಲದೆ ನಡೆಯುತ್ತಿದ್ದೆ. ನಿಜವಾಗಿಯೂ ಜೀವನ ಬದಲಾಯಿತು!', color: '#38bdf8', initials: 'PS' },
    { name: 'ರಾಜೇಶ್ ಕುಮಾರ್', dept: 'ದ್ವಿಪಕ್ಷೀಯ ಮೊಣಕಾಲು ಬದಲಾವಣೆ', stars: 5, text: 'ನನ್ನ ಎರಡೂ ಮೊಣಕಾಲುಗಳನ್ನು ಒಂದೇ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯಲ್ಲಿ ಬದಲಾಯಿಸಲಾಯಿತು. ರೊಬೊಟಿಕ್ ನಿಖರತೆ ಅದ್ಭುತವಾಗಿತ್ತು. ನಾನು ಈಗ 10 ವರ್ಷಗಳಲ್ಲಿ ಮೊದಲ ಬಾರಿಗೆ ನೋವು ಮುಕ್ತವಾಗಿ ಮೆಟ್ಟಿಲುಗಳನ್ನು ಹತ್ತುತ್ತಿದ್ದೇನೆ.', color: '#22c55e', initials: 'RK' },
    { name: 'ಅನನ್ಯಾ ರೆಡ್ಡಿ', dept: 'ಭಾಗಶಃ ಮೊಣಕಾಲು ಬದಲಾವಣೆ', stars: 5, text: 'ಚೇತರಿಕೆಯ ಸಮಯದ ಬಗ್ಗೆ ನಾನು ಚಿಂತಿತಳಾಗಿದ್ದೆ, ಆದರೆ ಡಾ. ಮಧು ರಾಮ್ ಚೌದ್ರಿ ಅವರ ಚಿಕಿತ್ಸೆಯು ಎರಡು ದಿನಗಳಲ್ಲಿ ನನ್ನನ್ನು ಮನೆಗೆ ಮರಳುವಂತೆ ಮಾಡಿತು. ಮೊಣಕಾಲು ಸಂಪೂರ್ಣವಾಗಿ ಸಹಜವಾಗಿ ಭಾಸವಾಗುತ್ತಿದೆ.', color: '#f97316', initials: 'AR' },
    { name: 'ಮೊಹಮ್ಮದ್ ಅಲಿ', dept: 'ಪುನರಾವರ್ತಿತ ಮೊಣಕಾಲು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ', stars: 5, text: 'ನನ್ನ ಹಿಂದಿನ ಇಂಪ್ಲಾಂಟ್ ಬೇರೆಡೆ ವಿಫಲವಾಗಿತ್ತು. ಡಾ. ಮಧು ರಾಮ್ ಚೌದ್ರಿ ಅವರು ಅಸಾಧಾರಣ ಪರಿಣತಿಯೊಂದಿಗೆ ಸಂಕೀರ್ಣ ಪುನರಾವರ್ತಿತ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯನ್ನು ನಿರ್ವಹಿಸಿದರು. ಇಂದು ನನಗೆ ಕಿಂಚಿತ್ತೂ ನೋವಿಲ್ಲ.', color: '#38bdf8', initials: 'MA' },
    { name: 'ಸುಜಾತಾ ನಾಯರ್', dept: 'ಮೊಣಕಾಲು ಆರ್ಥ್ರೋಸ್ಕೋಪಿ', stars: 5, text: 'ನನ್ನ ಮೆನಿಸ್ಕಲ್ ಕಣ್ಣೀರಿಗೆ ಕೀಹೋಲ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಸುಗಮವಾಗಿತ್ತು ಮತ್ತು ಚೇತರಿಕೆ ವೇಗವಾಗಿತ್ತು. ಡಾ. ಮಧು ರಾಮ್ ಚೌದ್ರಿ ಪ್ರತಿಯೊಂದು ಹಂತವನ್ನೂ ಸ್ಪಷ್ಟವಾಗಿ ವಿವರಿಸಿದರು. 3 ದಿನಗಳಲ್ಲಿ ಮತ್ತೆ ನಡೆಯುತ್ತಿದ್ದೇನೆ!', color: '#22c55e', initials: 'SN' },
    { name: 'ವಿಕ್ರಮ್ ಪಟೇಲ್', dept: 'ಕ್ರೀಡಾ ಮೊಣಕಾಲು ಗಾಯ', stars: 5, text: 'ಕ್ರಿಕೆಟ್ ಆಟಗಾರನಾಗಿ, ನನ್ನ ACL ಕಣ್ಣೀರು ವಿನಾಶಕಾರಿಯಾಗಿತ್ತು. ಡಾ. ಮಧು ರಾಮ್ ಚೌದ್ರಿ ಅವರ ಪುನರ್ನಿರ್ಮಾಣ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯು 6 ತಿಂಗಳಲ್ಲಿ ನನ್ನನ್ನು ಮತ್ತೆ ಮೈದಾನಕ್ಕೆ ಮರಳುವಂತೆ ಮಾಡಿತು. ಅತ್ಯುತ್ತಮ ಕೆಲಸ!', color: '#f97316', initials: 'VP' },
    { name: 'ದೀಪಿಕಾ ಸಿಂಗ್', dept: 'ಸಂಪೂರ್ಣ ಮೊಣಕಾಲು ಬದಲಾವಣೆ', stars: 5, text: 'ರೊಬೊಟಿಕ್-ಸಹಾಯದ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ನಿಖರವಾಗಿತ್ತು. ನನ್ನ ಹೊಸ ಮೊಣಕಾಲು ಸಂಪೂರ್ಣವಾಗಿ ಸಹಜವಾಗಿ ಭಾಸವಾಗುತ್ತಿದೆ. ಆರು ತಿಂಗಳ ನಂತರ ನಾನು ನನ್ನ ಮಗಳ ಮದುವೆಯಲ್ಲಿ ನೃತ್ಯ ಮಾಡುತ್ತಿದ್ದೇನೆ — ನೋವು ಮುಕ್ತವಾಗಿ!', color: '#38bdf8', initials: 'DS' },
    { name: 'ಅರ್ಜುನ್ ಕೃಷ್ಣನ್', dept: 'ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರದ ಪುನರ್ವಸತಿ', stars: 5, text: 'ಪುನರ್ವಸತಿ ತಂಡವು ಅಸಾಧಾರಣವಾಗಿತ್ತು. ಮೊದಲ ದಿನದಿಂದ ಯೋಜಿತ ಫಿಸಿಯೋಥೆರಪಿ ನನ್ನ ಚೇತರಿಕೆಯನ್ನು ಸುಗಮಗೊಳಿಸಿತು. ನಾನು ಎಲ್ಲಾ ಚೇತರಿಕೆಯ ಗುರಿಗಳನ್ನು ಮೀರಿಸಿದ್ದೇನೆ.', color: '#22c55e', initials: 'AK' },
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
let currentStep = 1;
const totalSteps = 3;

function updateProgress(step) {
  const fill = document.getElementById('progressFill');
  const pct = (step / totalSteps) * 100;
  fill.style.width = pct + '%';

  for (let i = 1; i <= totalSteps; i++) {
    const ind = document.getElementById(`step-indicator-${i}`);
    ind.classList.remove('active', 'done');
    if (i === step) ind.classList.add('active');
    if (i < step) ind.classList.add('done');
  }
}

function showStep(n) {
  document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(`formStep${n}`);
  if (el) el.classList.add('active');
  currentStep = n;
  updateProgress(n);
}

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

function validateStep1() {
  const checks = [
    validateField('firstName', 'fg-firstName', v => v.length >= 2 ? true : 'First name is required (min 2 characters)'),
    validateField('lastName', 'fg-lastName', v => v.length >= 2 ? true : 'Last name is required (min 2 characters)'),
    validateField('email', 'fg-email', v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? true : 'Please enter a valid email address'),
    validateField('phone', 'fg-phone', v => v.replace(/\D/g, '').length >= 8 ? true : 'Please enter a valid phone number'),
    validateField('dob', 'fg-dob', v => v ? true : 'Please select your date of birth'),
    validateField('gender', 'fg-gender', v => v ? true : 'Please select your gender'),
  ];
  return checks.every(Boolean);
}

function validateStep2() {
  const checks = [
    validateField('specialty', 'fg-specialty', v => v ? true : 'Please select a specialty'),
    validateField('preferredDate', 'fg-date', v => v ? true : 'Please select a preferred date'),
    validateField('preferredTime', 'fg-time', v => v ? true : 'Please select a preferred time'),
    validateField('reason', 'fg-reason', v => v.length >= 10 ? true : 'Please describe your reason (min 10 characters)'),
  ];
  return checks.every(Boolean);
}

function nextStep(from) {
  let valid = false;
  if (from === 1) valid = validateStep1();
  if (from === 2) valid = validateStep2();
  if (!valid) {
    // Shake animation
    const formGlass = document.querySelector('.form-glass');
    gsap.fromTo(formGlass, { x: -6 }, { x: 6, repeat: 5, yoyo: true, duration: 0.06, ease: 'power1.inOut', onComplete: () => gsap.set(formGlass, { x: 0 }) });
    return;
  }
  if (from === 2) buildConfirmSummary();
  showStep(from + 1);
  document.querySelector('.form-wrapper')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function prevStep(from) {
  showStep(from - 1);
}

function buildConfirmSummary() {
  const summary = document.getElementById('confirmSummary');
  const getValue = id => (document.getElementById(id)?.value || '—').trim();
  const getSelectText = id => {
    const sel = document.getElementById(id);
    return sel?.options[sel.selectedIndex]?.text || '—';
  };

  const firstName = getValue('firstName');
  const lastName = getValue('lastName');
  const email = getValue('email');
  const phone = getValue('phone');
  const dob = getValue('dob') ? new Date(getValue('dob')).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : '—';
  const gender = getSelectText('gender');
  const specialty = getSelectText('specialty');
  const date = getValue('preferredDate') ? new Date(getValue('preferredDate')).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : '—';
  const time = getSelectText('preferredTime');
  const reason = getValue('reason');

  summary.innerHTML = `
    <div class="confirm-row"><span class="confirm-label">Full Name</span><span class="confirm-value">${firstName} ${lastName}</span></div>
    <div class="confirm-row"><span class="confirm-label">Date of Birth</span><span class="confirm-value">${dob}</span></div>
    <div class="confirm-row"><span class="confirm-label">Email</span><span class="confirm-value">${email}</span></div>
    <div class="confirm-row"><span class="confirm-label">Phone</span><span class="confirm-value">${phone}</span></div>
    <div class="confirm-row"><span class="confirm-label">Gender</span><span class="confirm-value">${gender}</span></div>
    <div class="confirm-row"><span class="confirm-label">Specialty</span><span class="confirm-value">${specialty}</span></div>
    <div class="confirm-row"><span class="confirm-label">Preferred Date</span><span class="confirm-value">${date}</span></div>
    <div class="confirm-row"><span class="confirm-label">Preferred Time</span><span class="confirm-value">${time}</span></div>
    <div class="confirm-row" style="grid-column:1/-1"><span class="confirm-label">Reason for Visit</span><span class="confirm-value">${reason || '—'}</span></div>
  `;
}

function submitForm() {
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
  const specialty = getSelectText('specialty');
  const date = getValue('preferredDate');
  const time = getSelectText('preferredTime');
  const reason = getValue('reason');

  // Build WhatsApp message
  const message = [
    `🏥 *New Appointment Request*`,
    ``,
    `👤 *Name:* ${firstName} ${lastName}`,
    `📞 *Phone:* ${phone}`,
    `📧 *Email:* ${email}`,
    `🦴 *Specialty:* ${specialty}`,
    `📅 *Preferred Date:* ${date}`,
    `⏰ *Preferred Time:* ${time}`,
    `📝 *Reason:* ${reason}`,
  ].join('\n');

  const encodedMsg = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/918073582068?text=${encodedMsg}`;

  // Use anchor click to bypass popup blockers
  const a = document.createElement('a');
  a.href = whatsappURL;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // Show success screen
  showStep(99);
  document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
  const successEl = document.getElementById('formSuccess');
  successEl.classList.add('active');
  updateProgress(3);
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
  showStep(1);
}

// Live validation on blur
document.addEventListener('DOMContentLoaded', () => {
  showStep(1);

  const fieldValidators = {
    firstName: v => v.length >= 2 ? true : 'Min 2 characters',
    lastName: v => v.length >= 2 ? true : 'Min 2 characters',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? true : 'Invalid email',
    phone: v => v.replace(/\D/g, '').length >= 8 ? true : 'Invalid phone',
    dob: v => v ? true : 'Required',
    gender: v => v ? true : 'Please select',
    specialty: v => v ? true : 'Please select',
    preferredDate: v => v ? true : 'Required',
    preferredTime: v => v ? true : 'Required',
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
