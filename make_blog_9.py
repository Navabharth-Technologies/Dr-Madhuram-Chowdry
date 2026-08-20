import os
import shutil

base_dir = r"c:\Users\Techbuild Hub\Desktop\Dr.Madhuram Chowdry"

# 1. Copy placeholder image for blog 9 if not present
src_img = os.path.join(base_dir, "assets", "blog8image1.webp")
dest_img = os.path.join(base_dir, "assets", "blog9image1.webp")
if not os.path.exists(dest_img) and os.path.exists(src_img):
    shutil.copyfile(src_img, dest_img)
    print("Created blog9image1.webp placeholder.")

# 2. Build bilateral-knee-replacement-pros-cons.html
src_html = os.path.join(base_dir, "stage-4-knee-arthritis.html")
dest_html = os.path.join(base_dir, "bilateral-knee-replacement-pros-cons.html")

with open(src_html, "r", encoding="utf-8") as f:
    content = f.read()

# Replace Head Metadata & Schemas
blog_posting_schema = """<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Bilateral Knee Replacement: Pros and Cons",
    "image": "https://drmadhuramchowdryortho.com/assets/blog9image1.webp",
    "author": {
      "@type": "Person",
      "name": "Dr. Madhuram Chowdry"
    },
    "publisher": {
      "@type": "Physician",
      "name": "Dr. Madhuram Chowdry",
      "logo": {
        "@type": "ImageObject",
        "url": "https://drmadhuramchowdryortho.com/assets/logo-optimized.png"
      }
    },
    "datePublished": "2026-08-20",
    "description": "Comprehensive guide to bilateral knee replacement surgery. Compare simultaneous vs staged bilateral knee replacement, pros and cons, recovery timeline, and FAQs."
  }
  </script>"""

faq_schema = """<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is bilateral knee replacement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bilateral knee replacement is a procedure in which both damaged knee joints are replaced with artificial components. It may be performed simultaneously during one operation or as two staged procedures."
        }
      },
      {
        "@type": "Question",
        "name": "Is simultaneous bilateral knee replacement safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It can be safe for appropriately selected patients, but it is not suitable for everyone. The AAOS recommends caution and advises avoiding simultaneous bilateral knee replacement in patients at high risk of cardiopulmonary complications."
        }
      },
      {
        "@type": "Question",
        "name": "What are the advantages of bilateral knee replacement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Potential advantages include treating both knees in one surgical episode, avoiding a second operation, potentially reducing the overall treatment timeline, and completing rehabilitation for both knees during the same general recovery period."
        }
      },
      {
        "@type": "Question",
        "name": "What are the disadvantages of simultaneous bilateral knee replacement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both knees recover at the same time, which can make early walking and rehabilitation more challenging. Some studies have also reported higher risks of blood transfusion, venous thromboembolism, and mortality compared with staged procedures."
        }
      },
      {
        "@type": "Question",
        "name": "Is staged knee replacement safer than simultaneous surgery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Staged surgery may reduce certain risks for some patients, particularly those who may not tolerate a major bilateral procedure. However, staged surgery also requires two operations. The safest approach depends on individual patient factors."
        }
      },
      {
        "@type": "Question",
        "name": "How long should I wait between two knee replacements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no fixed interval that is appropriate for everyone. The timing depends on recovery from the first surgery, medical stability, rehabilitation progress, and overall health. Your surgeon should determine the appropriate timing."
        }
      },
      {
        "@type": "Question",
        "name": "Can older adults undergo bilateral knee replacement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Age alone does not determine whether bilateral knee replacement is appropriate. Overall health, heart and lung function, physical fitness, medical conditions, medications, and ability to participate in rehabilitation are important factors."
        }
      },
      {
        "@type": "Question",
        "name": "Can robotic-assisted technology be used for bilateral knee replacement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Robotic-assisted technology may be used for selected knee replacement procedures. It can assist the surgical team with planning and bone preparation, but the surgeon remains responsible for performing the operation and making clinical decisions."
        }
      }
    ]
  }
  </script>"""

# Replace schemas
start_schema = content.find('<!-- Structured Data (JSON-LD) for BlogPosting -->')
end_schema = content.find('</head>')
if start_schema != -1 and end_schema != -1:
    new_head_schemas = f"<!-- Structured Data (JSON-LD) for BlogPosting -->\n  {blog_posting_schema}\n\n  <!-- FAQ Schema -->\n  {faq_schema}\n\n"
    content = content[:start_schema] + new_head_schemas + content[end_schema:]

# Replace Meta Title, Meta Description, Meta Keywords
content = content.replace(
    '<title>Stage 4 Knee Arthritis: Symptoms, Causes & Treatment | Dr. Madhuram Chowdry</title>',
    '<title>Bilateral Knee Replacement: Pros and Cons | Dr. Madhuram Chowdry</title>'
)
content = content.replace(
    'content="Learn about stage 4 knee arthritis, its symptoms, causes, and treatment options including non-surgical methods and knee replacement surgery."',
    'content="Comprehensive guide to bilateral knee replacement surgery. Compare simultaneous vs staged bilateral knee replacement, pros and cons, recovery timeline, and FAQs."'
)
content = content.replace(
    'content="stage 4 knee arthritis, severe knee arthritis, knee osteoarthritis symptoms, knee arthritis treatment, robotic knee replacement Mysore, orthopedic surgeon"',
    'content="bilateral knee replacement, simultaneous knee replacement, staged knee replacement, double knee replacement pros and cons, knee osteoarthritis, robotic knee replacement Mysore, orthopedic surgeon Mysore"'
)

# Replace Header Elements & Breadcrumb
content = content.replace(
    '<span style="color: var(--text-primary); font-weight: 500;">Stage 4 Knee Arthritis</span>',
    '<span style="color: var(--text-primary); font-weight: 500;">Bilateral Knee Replacement</span>'
)
content = content.replace(
    '<span class="article-tag">Knee Arthritis</span>',
    '<span class="article-tag">Treatment Comparison</span>'
)
content = content.replace(
    '<h1 class="article-title">Stage 4 Knee Arthritis: Symptoms, Causes & Treatment</h1>',
    '<h1 class="article-title">Bilateral Knee Replacement: Pros and Cons</h1>'
)
content = content.replace(
    'August 17, 2026',
    'August 20, 2026'
)
content = content.replace(
    'assets/blog8image1.webp',
    'assets/blog9image1.webp'
)
content = content.replace(
    'alt="Stage 4 Knee Arthritis: Symptoms, Causes & Treatment"',
    'alt="Bilateral Knee Replacement: Pros and Cons"'
)
content = content.replace(
    'Stage 4 Knee Arthritis?',
    'Both Knees Hurting?'
)

# Add Table CSS to Head
table_css = """
    /* Table Styling for Comparison */
    .article-table-wrap {
      width: 100%;
      overflow-x: auto;
      margin: 28px 0;
      border-radius: var(--radius);
      border: 1px solid var(--border);
      box-shadow: var(--shadow-sm);
    }
    .article-table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 0.95rem;
    }
    .article-table th {
      background: rgba(14, 165, 233, 0.08);
      color: var(--text-primary);
      font-family: var(--font-head);
      font-weight: 700;
      padding: 14px 18px;
      border-bottom: 2px solid var(--border);
    }
    .article-table td {
      padding: 12px 18px;
      border-bottom: 1px solid var(--border);
      color: var(--text-secondary);
      line-height: 1.5;
    }
    .article-table tr:nth-child(even) {
      background: rgba(255, 255, 255, 0.02);
    }
    .article-table tr:hover {
      background: rgba(14, 165, 233, 0.04);
    }
"""

if '</style>' in content:
    content = content.replace('</style>', f'{table_css}\n  </style>')

# Build Body HTML
body_html = """
            <div class="article-body">
              <p>When arthritis affects both knees, everyday activities such as walking, climbing stairs, standing for long periods, or getting up from a chair can become increasingly difficult. If both knees have severe osteoarthritis and non-surgical treatments no longer provide enough relief, knee replacement may be considered.</p>
              <p>Bilateral knee replacement means replacing both damaged knee joints. Depending on the patient's health, severity of arthritis, functional limitations, and surgical risk, both knees may be replaced during the same operation or through two separate surgeries.</p>
              <p>Choosing between simultaneous and staged bilateral knee replacement is an important decision. Having both knees treated at once can mean one hospitalization and one rehabilitation period, but it also places greater physical demands on the body during a single operation. Staged surgery allows recovery from the first knee replacement before the second procedure, but it requires another operation and another recovery period.</p>
              <p>There is no single approach that is right for everyone. The safest option depends on individual health, age, medical conditions, functional status, and the surgeon's assessment.</p>

              <h2>What Is Bilateral Knee Replacement?</h2>
              <p>Bilateral knee replacement, also called bilateral total knee arthroplasty, is a surgical procedure in which both damaged knee joints are replaced with artificial components.</p>
              <p>It may be considered when both knees have advanced osteoarthritis that causes:</p>
              <ul>
                <li>Persistent knee pain</li>
                <li>Severe stiffness</li>
                <li>Difficulty walking</li>
                <li>Difficulty climbing stairs</li>
                <li>Reduced mobility</li>
                <li>Pain during rest or sleep</li>
                <li>Significant limitation of everyday activities</li>
                <li>Poor response to non-surgical treatment</li>
              </ul>
              <p>Bilateral knee replacement can be performed in two main ways:</p>

              <h3>Simultaneous Bilateral Knee Replacement</h3>
              <p>Both knees are replaced during the same surgical session. This approach is sometimes called one-stage bilateral knee replacement. The potential advantage is that the patient undergoes one major operation rather than returning for a second knee replacement later. However, because both knees are operated on during the same period, the procedure can place greater demands on the patient's cardiovascular, respiratory, and overall physical reserve.</p>

              <h3>Staged Bilateral Knee Replacement</h3>
              <p>The two knees are replaced during separate operations. For example, one knee may be replaced first, followed by a period of rehabilitation before the second knee is treated. The interval between surgeries varies depending on the patient's recovery and medical circumstances. Evidence evaluating different intervals suggests that timing should be individualized rather than following one universal schedule.</p>

              <h2>Why Do Some Patients Need Both Knees Replaced?</h2>
              <p>Osteoarthritis commonly affects both knees, although the severity may differ from one knee to the other.</p>
              <p>When arthritis becomes advanced, cartilage gradually deteriorates. This can lead to narrowing of the joint space, changes in the underlying bone, stiffness, pain, and altered alignment.</p>
              <p>If both knees become severely affected, treating only one knee may not completely restore mobility. For example, a patient may have severe pain in both knees and find it difficult to walk even after one knee has been treated.</p>
              <p>However, having arthritis in both knees does not automatically mean that both need to be replaced at the same time. The decision depends on symptoms, imaging findings, physical examination, overall health, and the effect of arthritis on quality of life.</p>

              <h2>Pros of Bilateral Knee Replacement</h2>
              <p>Bilateral knee replacement can offer several potential advantages, particularly for carefully selected patients.</p>

              <h3>1. Both Knees Can Be Treated at Once</h3>
              <p>The most obvious advantage of simultaneous bilateral knee replacement is that both painful knees are addressed during one surgical session. For patients with severe arthritis in both knees, this can eliminate the need to undergo a second knee replacement later.</p>

              <h3>2. One Hospitalization</h3>
              <p>Simultaneous surgery can potentially avoid a second hospital admission associated with another operation. This may be convenient for patients and families, particularly when travel, caregiving, or time away from work is an important consideration.</p>

              <h3>3. One Major Rehabilitation Period</h3>
              <p>Instead of completing rehabilitation for one knee and then repeating the process for the other, simultaneous surgery allows both knees to recover during the same overall rehabilitation period. However, rehabilitation can be demanding because both legs are recovering at the same time.</p>

              <h3>4. Balanced Treatment of Both Knees</h3>
              <p>When both knees have similar levels of severe arthritis or deformity, treating both during the same surgical episode may allow the surgeon to address both sides as part of one overall treatment plan.</p>

              <h3>5. Potentially Shorter Overall Treatment Timeline</h3>
              <p>A patient who undergoes simultaneous surgery does not need to wait several weeks or months before undergoing the second procedure. This can potentially shorten the overall journey from having two severely arthritic knees to having both knees treated.</p>

              <h3>6. One Anesthesia and Surgical Episode</h3>
              <p>Simultaneous bilateral surgery means the patient does not need a second separate anesthesia and surgical episode. However, this advantage must be balanced against the fact that the single operation involves treatment of both knees and may place greater demands on the body.</p>

              <h2>Cons of Bilateral Knee Replacement</h2>
              <p>The advantages of simultaneous bilateral knee replacement need to be considered alongside potential disadvantages.</p>

              <h3>1. Greater Physical Stress on the Body</h3>
              <p>Replacing both knees during one operation is a major procedure. The body must recover from surgery involving both lower limbs at the same time. This is one reason patient selection is extremely important. The AAOS states that simultaneous bilateral knee replacement may be considered in appropriately selected patients but should be performed cautiously and avoided in patients at high risk of cardiopulmonary complications.</p>

              <h3>2. Higher Risk in Some Patients</h3>
              <p>Research comparing simultaneous and staged bilateral knee replacement has found different complication profiles. A 2026 systematic review of more than 570,000 patients reported higher observed short-term mortality, deep-vein thrombosis, and transfusion requirements with simultaneous bilateral surgery, while staged surgery showed higher rates of some infections. The researchers emphasized that neither approach is universally superior and that patient selection is important. These findings do not mean that simultaneous surgery is unsafe for every patient. They highlight why the procedure should be considered only after a detailed medical and surgical assessment.</p>

              <h3>3. Rehabilitation Can Be More Challenging</h3>
              <p>After unilateral knee replacement, the opposite leg can provide support during walking and rehabilitation. After simultaneous bilateral surgery, both knees are recovering. This can make standing up, walking, using stairs, getting in and out of bed, and performing exercises more challenging during the early recovery period. Patients may require additional assistance initially.</p>

              <h3>4. Greater Blood Loss and Transfusion Risk</h3>
              <p>Bilateral surgery can involve greater blood loss than a single-knee procedure. Recent evidence has found higher transfusion requirements in some analyses of simultaneous bilateral knee replacement compared with staged surgery. Modern surgical and blood-management techniques can help reduce these risks, but the patient's medical history still needs to be considered.</p>

              <h3>5. Greater Concern About Blood Clots</h3>
              <p>Major lower-limb surgery can increase the risk of venous thromboembolism. Some systematic reviews have found higher rates of deep-vein thrombosis and/or pulmonary embolism with simultaneous bilateral knee replacement compared with staged procedures. Doctors use measures such as early mobilization, appropriate medication, compression strategies, and individualized risk assessment to reduce this risk.</p>

              <h3>6. Not Suitable for Everyone</h3>
              <p>Patients with significant heart, lung, or other medical problems may not be suitable candidates for simultaneous bilateral surgery. Age alone does not determine suitability. Instead, the surgical team considers overall health, medical conditions, fitness, medications, previous medical history, and the patient's ability to tolerate a major operation.</p>

              <h2>Simultaneous vs Staged Bilateral Knee Replacement</h2>
              <div class="article-table-wrap">
                <table class="article-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Simultaneous Surgery</th>
                      <th>Staged Surgery</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Number of operations</strong></td>
                      <td>One</td>
                      <td>Two</td>
                    </tr>
                    <tr>
                      <td><strong>Hospitalization</strong></td>
                      <td>Usually one surgical admission</td>
                      <td>Separate admissions may be required</td>
                    </tr>
                    <tr>
                      <td><strong>Rehabilitation</strong></td>
                      <td>Both knees recover together</td>
                      <td>One knee recovers before the second</td>
                    </tr>
                    <tr>
                      <td><strong>Overall treatment timeline</strong></td>
                      <td>Potentially shorter</td>
                      <td>Usually longer</td>
                    </tr>
                    <tr>
                      <td><strong>Second anesthesia</strong></td>
                      <td>Not required for the second knee</td>
                      <td>Required for second procedure</td>
                    </tr>
                    <tr>
                      <td><strong>Early mobility</strong></td>
                      <td>Both legs recovering simultaneously</td>
                      <td>One operated knee with the other leg available for support</td>
                    </tr>
                    <tr>
                      <td><strong>Patient selection</strong></td>
                      <td>Requires careful medical assessment</td>
                      <td>May be suitable for a wider range of patients</td>
                    </tr>
                    <tr>
                      <td><strong>Surgical risk</strong></td>
                      <td>Greater physiological demand in one episode</td>
                      <td>Risk distributed across two procedures</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>The evidence comparing the two approaches is mixed and has evolved over time. Some studies report similar overall complication rates among carefully matched patients, while multiple meta-analyses have identified increased risks of certain complications with simultaneous surgery. Therefore, the decision should not be based simply on which procedure appears faster or more convenient.</p>

              <h2>Who May Be a Candidate for Simultaneous Bilateral Knee Replacement?</h2>
              <p>There is no single checklist that guarantees suitability. A patient may be considered for simultaneous surgery when:</p>
              <ul>
                <li>Both knees have significant arthritis</li>
                <li>Both knees cause substantial symptoms</li>
                <li>Non-surgical treatment has not provided sufficient relief</li>
                <li>The patient is medically fit for major surgery</li>
                <li>Cardiovascular and respiratory risks are acceptable</li>
                <li>The patient understands the rehabilitation requirements</li>
                <li>The surgical team considers the overall risk acceptable</li>
              </ul>
              <p>The AAOS specifically recommends caution and avoidance of simultaneous bilateral TKA in patients who are at high risk of cardiopulmonary complications. A comprehensive preoperative assessment is therefore essential.</p>

              <h2>Who May Benefit From Staged Bilateral Knee Replacement?</h2>
              <p>Staged surgery may be considered when the surgical team believes that treating one knee at a time provides a safer or more manageable approach. It may be particularly relevant when:</p>
              <ul>
                <li>The patient has significant medical conditions</li>
                <li>The patient may not tolerate a long or physiologically demanding operation</li>
                <li>One knee is considerably worse than the other</li>
                <li>The patient wants to recover from one operation before undergoing another</li>
                <li>Rehabilitation with both knees simultaneously would be difficult</li>
                <li>The surgeon recommends separating the procedures based on individual risk</li>
              </ul>
              <p>Staged surgery also allows the patient and surgical team to evaluate recovery from the first knee before planning the second procedure.</p>

              <h2>How Long Should You Wait Between Two Knee Replacements?</h2>
              <p>There is no universally appropriate interval for every patient. The timing of the second knee replacement depends on:</p>
              <ul>
                <li>Recovery from the first surgery</li>
                <li>Muscle strength</li>
                <li>Walking ability</li>
                <li>Wound healing</li>
                <li>Medical stability</li>
                <li>Pain control</li>
                <li>Rehabilitation progress</li>
                <li>Overall health</li>
              </ul>
              <p>A 2025 network meta-analysis found that, among the observational studies included, staged surgery at intervals of more than six weeks and less than six months was associated with lower mortality and complication risk than simultaneous surgery. However, the researchers also noted limitations associated with non-randomized evidence.</p>
              <p>The interval should therefore be decided individually rather than using a fixed rule.</p>

              <h2>Recovery After Bilateral Knee Replacement</h2>
              <p>Recovery after bilateral knee replacement varies from person to person. With simultaneous surgery, both knees begin recovery at approximately the same time.</p>
              <p>Early rehabilitation generally focuses on:</p>
              <ul>
                <li>Pain control</li>
                <li>Knee movement</li>
                <li>Muscle activation</li>
                <li>Safe transfers</li>
                <li>Walking</li>
                <li>Strengthening exercises</li>
                <li>Preventing complications</li>
                <li>Gradually increasing independence</li>
              </ul>
              <p>With staged surgery, rehabilitation begins with the first knee while the other knee remains available to provide support. Once the patient has recovered sufficiently, the second knee can be addressed.</p>
              <p>The exact recovery timeline depends on age, muscle strength, overall health, surgical technique, rehabilitation participation, and other individual factors.</p>

              <h2>Is Bilateral Knee Replacement Better Than One Knee at a Time?</h2>
              <p>There is no universally better option.</p>
              <p>For a healthy, carefully selected patient with severe arthritis in both knees, simultaneous bilateral knee replacement may offer the convenience of treating both knees in one surgical episode.</p>
              <p>For another patient, staged surgery may provide a safer and more manageable recovery.</p>
              <p>Recent research supports this individualized approach. A large 2026 meta-analysis concluded that simultaneous and staged bilateral knee replacement have distinct risk profiles rather than one approach being universally superior.</p>
              <p>The goal should not simply be to complete both operations as quickly as possible. The goal is to choose the approach that provides the best balance of safety, pain relief, mobility, recovery, and long-term function for the individual patient.</p>

              <h2>Role of Robotic-Assisted Knee Replacement</h2>
              <p>Robotic-assisted technology may be used in knee replacement surgery for selected patients. The technology can assist the surgical team with preoperative planning, bone preparation, alignment assessment, and implant positioning.</p>
              <p>It is important to understand that a robotic system does not independently perform the operation. The orthopaedic surgeon remains responsible for the surgical plan and procedure.</p>
              <div class="article-callout">
                For patients considering advanced knee replacement options, read our cornerstone guide:<br>
                <a href="robotic-knee-replacement-mysore.html" style="color: var(--blue); font-weight: 700; text-decoration: underline;">Robotic Knee Replacement in Mysore: Complete Guide</a><br>
                This guide can provide additional information about robotic-assisted knee replacement, preparation, the surgical process, recovery, and frequently asked questions.
              </div>

              <h2>What Questions Should You Ask Your Orthopaedic Surgeon?</h2>
              <p>Before deciding between simultaneous and staged bilateral knee replacement, consider asking:</p>
              <ul>
                <li>Do both of my knees require replacement?</li>
                <li>Am I medically suitable for simultaneous bilateral surgery?</li>
                <li>Would staged surgery be safer for me?</li>
                <li>What are my individual risks?</li>
                <li>How long would you expect my rehabilitation to take?</li>
                <li>What support would I need at home?</li>
                <li>How long should I wait before considering the second knee?</li>
                <li>What complications should I watch for?</li>
                <li>Would robotic-assisted surgery be appropriate for my condition?</li>
                <li>What can I expect regarding pain relief and mobility after surgery?</li>
              </ul>
              <p>These questions can help you have a more informed discussion with your orthopaedic surgeon.</p>

              <h2>Can Both Knees Be Replaced at the Same Time?</h2>
              <p>Yes, both knees can be replaced during the same surgical episode in appropriately selected patients.</p>
              <p>However, simultaneous bilateral knee replacement is not automatically the best choice simply because it reduces the number of surgical episodes.</p>
              <p>The potential benefits of one-stage surgery need to be weighed against the increased physical demands and possible risks.</p>
              <p>The AAOS recommends that simultaneous bilateral TKA be considered cautiously and only in appropriately selected patients, particularly avoiding it in those at high cardiopulmonary risk.</p>

              <h2>Conclusion</h2>
              <p>Bilateral knee replacement can be an effective treatment for patients whose both knees have severe arthritis and whose pain and disability are no longer adequately controlled with non-surgical treatment.</p>
              <p>The major advantage of simultaneous bilateral knee replacement is convenience: both knees can be treated during one surgical episode, potentially reducing the need for a second hospitalization and separate rehabilitation period.</p>
              <p>However, simultaneous surgery also places greater physical demands on the patient. Research has identified increased risks of certain complications, including blood clots, transfusion, and mortality in some study populations, while staged surgery has its own disadvantages and may involve additional hospitalization, anesthesia, cost, and recovery time.</p>
              <p>For this reason, there is no universal answer to whether simultaneous or staged bilateral knee replacement is better.</p>
              <p>The right decision depends on your knee condition, medical history, cardiovascular and respiratory health, mobility, age, fitness, and ability to tolerate and recover from major surgery.</p>
              <p>A detailed evaluation by an experienced orthopaedic surgeon can help determine whether bilateral knee replacement is appropriate and whether simultaneous or staged surgery is the safer option.</p>
              <p>For more information about robotic-assisted knee replacement and the treatment journey, read <a href="robotic-knee-replacement-mysore.html" style="color: var(--blue); font-weight: 600; text-decoration: underline;">Robotic Knee Replacement in Mysore: Complete Guide</a>.</p>

              <h2>Frequently Asked Questions</h2>
              <div class="faq-accordion">
                <div class="faq-item">
                  <button class="faq-question-btn" aria-expanded="false">
                    1. What is bilateral knee replacement?
                    <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div class="faq-answer">
                    <div class="faq-answer-inner">
                      <p>Bilateral knee replacement is a procedure in which both damaged knee joints are replaced with artificial components. It may be performed simultaneously during one operation or as two staged procedures.</p>
                    </div>
                  </div>
                </div>

                <div class="faq-item">
                  <button class="faq-question-btn" aria-expanded="false">
                    2. Is simultaneous bilateral knee replacement safe?
                    <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div class="faq-answer">
                    <div class="faq-answer-inner">
                      <p>It can be safe for appropriately selected patients, but it is not suitable for everyone. The AAOS recommends caution and advises avoiding simultaneous bilateral knee replacement in patients at high risk of cardiopulmonary complications.</p>
                    </div>
                  </div>
                </div>

                <div class="faq-item">
                  <button class="faq-question-btn" aria-expanded="false">
                    3. What are the advantages of bilateral knee replacement?
                    <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div class="faq-answer">
                    <div class="faq-answer-inner">
                      <p>Potential advantages include treating both knees in one surgical episode, avoiding a second operation, potentially reducing the overall treatment timeline, and completing rehabilitation for both knees during the same general recovery period.</p>
                    </div>
                  </div>
                </div>

                <div class="faq-item">
                  <button class="faq-question-btn" aria-expanded="false">
                    4. What are the disadvantages of simultaneous bilateral knee replacement?
                    <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div class="faq-answer">
                    <div class="faq-answer-inner">
                      <p>Both knees recover at the same time, which can make early walking and rehabilitation more challenging. Some studies have also reported higher risks of blood transfusion, venous thromboembolism, and mortality compared with staged procedures.</p>
                    </div>
                  </div>
                </div>

                <div class="faq-item">
                  <button class="faq-question-btn" aria-expanded="false">
                    5. Is staged knee replacement safer than simultaneous surgery?
                    <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div class="faq-answer">
                    <div class="faq-answer-inner">
                      <p>Staged surgery may reduce certain risks for some patients, particularly those who may not tolerate a major bilateral procedure. However, staged surgery also requires two operations. The safest approach depends on individual patient factors.</p>
                    </div>
                  </div>
                </div>

                <div class="faq-item">
                  <button class="faq-question-btn" aria-expanded="false">
                    6. How long should I wait between two knee replacements?
                    <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div class="faq-answer">
                    <div class="faq-answer-inner">
                      <p>There is no fixed interval that is appropriate for everyone. The timing depends on recovery from the first surgery, medical stability, rehabilitation progress, and overall health. Your surgeon should determine the appropriate timing.</p>
                    </div>
                  </div>
                </div>

                <div class="faq-item">
                  <button class="faq-question-btn" aria-expanded="false">
                    7. Can older adults undergo bilateral knee replacement?
                    <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div class="faq-answer">
                    <div class="faq-answer-inner">
                      <p>Age alone does not determine whether bilateral knee replacement is appropriate. Overall health, heart and lung function, physical fitness, medical conditions, medications, and ability to participate in rehabilitation are important factors.</p>
                    </div>
                  </div>
                </div>

                <div class="faq-item">
                  <button class="faq-question-btn" aria-expanded="false">
                    8. Can robotic-assisted technology be used for bilateral knee replacement?
                    <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  <div class="faq-answer">
                    <div class="faq-answer-inner">
                      <p>Robotic-assisted technology may be used for selected knee replacement procedures. It can assist the surgical team with planning and bone preparation, but the surgeon remains responsible for performing the operation and making clinical decisions.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="article-callout" style="margin-top: 40px; font-size: 0.9rem;">
                <strong>Medical Disclaimer:</strong> This article is intended for general educational purposes and should not replace an examination, diagnosis, or personalized medical advice from a qualified orthopaedic specialist. Treatment decisions, including whether bilateral knee replacement should be performed simultaneously or in stages, should be made after an individual medical assessment.
              </div>
            </div>
"""

start_idx = content.find('<div class="article-body">')
end_idx = content.find('</article>', start_idx)

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + body_html + content[end_idx:]

with open(dest_html, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Generated {dest_html} successfully.")

# 3. Update blog.html
blog_html_path = os.path.join(base_dir, "blog.html")
with open(blog_html_path, "r", encoding="utf-8") as f:
    blog_page = f.read()

new_blog_card = """        <article class="blog-card">
          <div class="blog-card-img-wrap">
            <div class="blog-card-img">
              <img src="assets/blog9image1.webp" alt="Bilateral Knee Replacement: Pros and Cons" style="width: 100%; height: 100%; object-fit: cover; display: block;">
            </div>
            <div class="blog-category-badge blue">Treatment Comparison</div>
            <span class="blog-read-time">8 Min Read</span>
          </div>
          <div class="blog-card-body">
            <div class="blog-meta">
              <span class="blog-date">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 4px; display: inline-block; vertical-align: middle;">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                August 20, 2026
              </span>
            </div>
            <h3 class="blog-card-title">
              <a href="bilateral-knee-replacement-pros-cons.html" style="text-decoration: none; color: inherit;">Bilateral Knee Replacement: Pros and Cons</a>
            </h3>
            <p class="blog-card-excerpt">Comprehensive guide comparing simultaneous vs staged bilateral knee replacement, pros and cons, recovery, candidate selection, and FAQs.</p>
            <div class="blog-card-footer">
              <div class="blog-author">
                <div class="blog-author-avatar">MC</div>
                <div class="blog-author-info">
                  <span class="blog-author-name">Dr. Madhuram Chowdry</span>
                  <span class="blog-author-role">Orthopedic Surgeon</span>
                </div>
              </div>
              <a href="bilateral-knee-replacement-pros-cons.html" class="blog-read-btn">
                Read More
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </article>

"""

grid_marker = '<div class="blog-grid" id="blogGrid">'
if "bilateral-knee-replacement-pros-cons.html" not in blog_page and grid_marker in blog_page:
    blog_page = blog_page.replace(grid_marker, f"{grid_marker}\n{new_blog_card}")
    with open(blog_html_path, "w", encoding="utf-8") as f:
        f.write(blog_page)
    print("Updated blog.html with new blog card.")

# 4. Update sitemap.xml
sitemap_path = os.path.join(base_dir, "sitemap.xml")
with open(sitemap_path, "r", encoding="utf-8") as f:
    sitemap = f.read()

sitemap_entry = """<url>
<loc>https://drmadhuramchowdryortho.com/bilateral-knee-replacement-pros-cons.html</loc>
<priority>0.70</priority>
</url>
"""

if "bilateral-knee-replacement-pros-cons.html" not in sitemap and "</urlset>" in sitemap:
    sitemap = sitemap.replace("</urlset>", f"{sitemap_entry}</urlset>")
    with open(sitemap_path, "w", encoding="utf-8") as f:
        f.write(sitemap)
    print("Updated sitemap.xml with new blog post link.")

print("All tasks completed successfully!")
