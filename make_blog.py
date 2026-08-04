import os
import re

base_dir = r"c:\Users\Techbuild Hub\Desktop\Dr.Madhuram Chowdry"
src_html = os.path.join(base_dir, "prevent-knee-arthritis-guide.html")
dest_html = os.path.join(base_dir, "recovery-timeline-after-knee-replacement.html")

with open(src_html, "r", encoding="utf-8") as f:
    content = f.read()

# Replace head metadata
content = content.replace(
    '"How to Prevent Knee Arthritis: A Complete Guide to Protecting Your Joints for Life"',
    '"Recovery Timeline After Knee Replacement: Week-by-Week Guide"'
)
content = content.replace(
    'content="Learn how to prevent knee arthritis with expert advice from Dr. Madhuram Chowdry. Find 10 effective prevention tips, joint-friendly exercises, foods, and FAQ."',
    'content="Learn the complete recovery timeline after knee replacement surgery, including recovery milestones, physiotherapy, pain management, and FAQs."'
)
content = content.replace(
    '<title>How to Prevent Knee Arthritis: Guide to Joint Care | Dr. Madhuram Chowdry</title>',
    '<title>Recovery Timeline After Knee Replacement | Week-by-Week Guide</title>'
)
content = content.replace(
    'content="prevent knee arthritis, avoid knee replacement, joint pain prevention Mysore, knee health tips, how to strengthen knees, anti-inflammatory diet for knees, Dr Madhuram Chowdry, orthopedic surgeon Mysore, knee exercises, osteoarthritis prevention"',
    'content="Recovery Timeline After Knee Replacement, Knee Replacement Recovery, Total Knee Replacement Recovery, Recovery After Knee Surgery, Knee Replacement Rehabilitation, Recovery Time After Knee Replacement"'
)
content = content.replace(
    '"datePublished": "2026-07-15"',
    '"datePublished": "2026-08-04"'
)
content = content.replace(
    'https://drmadhuramchowdryortho.com/assets/blog2image1.jpg',
    'https://drmadhuramchowdryortho.com/assets/blogimage1.png'
)

# Replace Breadcrumb & Tags
content = content.replace(
    '<span style="color: var(--text-primary); font-weight: 500;">Preventing Knee Arthritis</span>',
    '<span style="color: var(--text-primary); font-weight: 500;">Knee Replacement Recovery Timeline</span>'
)
content = content.replace(
    '<span class="article-tag">Joint Care</span>',
    '<span class="article-tag">Knee Replacement</span>'
)
content = content.replace(
    '<h1 class="article-title">How to Prevent Knee Arthritis: A Complete Guide to Protecting Your Joints for Life</h1>',
    '<h1 class="article-title">Recovery Timeline After Knee Replacement: Week-by-Week Guide to a Faster Recovery</h1>'
)
content = content.replace(
    'July 15, 2026',
    'August 4, 2026'
)
content = content.replace(
    'assets/blog2image1.jpg',
    'assets/blogimage1.png'
)
content = content.replace(
    'alt="Knee Arthritis Prevention"',
    'alt="Recovery Timeline After Knee Replacement"'
)

# Replace Body content
body_html = """
            <div class="article-body">
              <p>Knee replacement surgery is one of the most successful orthopedic procedures for people suffering from severe knee arthritis, chronic pain, and reduced mobility. While the surgery itself can dramatically improve quality of life, the recovery journey is equally important for achieving the best possible results.</p>
              
              <p>Many patients ask:</p>
              <ul>
                <li>How long does knee replacement recovery take?</li>
                <li>When can I walk normally?</li>
                <li>When can I climb stairs?</li>
                <li>When can I drive?</li>
                <li>When can I return to work?</li>
              </ul>
              <p>The answer varies depending on age, overall health, muscle strength, commitment to physiotherapy, and whether robotic-assisted knee replacement was performed.</p>
              <p>This guide explains the complete recovery timeline after knee replacement surgery, helping patients understand what to expect during each stage of healing.</p>

              <h2>Understanding Knee Replacement Recovery</h2>
              <p>During knee replacement surgery, the damaged cartilage and worn-out surfaces of the knee joint are replaced with artificial implants.</p>
              <p>Although patients often experience immediate pain relief from arthritis, the body still needs time to heal:</p>
              <ul>
                <li>Bone healing</li>
                <li>Soft tissue healing</li>
                <li>Muscle strengthening</li>
                <li>Balance restoration</li>
                <li>Joint flexibility improvement</li>
              </ul>
              <p>Recovery is gradual and continues for several months.</p>

              <h2>Immediate Recovery: Day of Surgery</h2>
              <p>Most patients are encouraged to stand and walk on the same day of surgery.</p>
              <h3>What Happens?</h3>
              <ul>
                <li>Pain medications begin</li>
                <li>Ice therapy reduces swelling</li>
                <li>Physiotherapist starts exercises</li>
                <li>Walking begins with support</li>
                <li>Knee bending exercises start</li>
              </ul>
              <h3>Goals</h3>
              <ul>
                <li>Prevent blood clots</li>
                <li>Improve circulation</li>
                <li>Restore movement</li>
                <li>Reduce stiffness</li>
              </ul>

              <h2>Week 1 Recovery</h2>
              <p>The first week focuses on reducing pain and beginning mobility.</p>
              <h3>Expected Progress</h3>
              <ul>
                <li>Walking with walker</li>
                <li>Controlled pain using medication</li>
                <li>Swelling around knee</li>
                <li>Daily physiotherapy</li>
                <li>Knee bending reaches around 60–90 degrees</li>
              </ul>
              <h3>Exercises</h3>
              <ul>
                <li>Ankle pumps</li>
                <li>Quadriceps sets</li>
                <li>Straight leg raises</li>
                <li>Heel slides</li>
              </ul>
              <p>Patients are usually discharged within 2–4 days depending on recovery.</p>

              <h2>Week 2 Recovery</h2>
              <p>During the second week, confidence improves significantly.</p>
              <h3>Improvements</h3>
              <ul>
                <li>Better walking</li>
                <li>Less swelling</li>
                <li>Improved sleep</li>
                <li>Increased knee movement</li>
                <li>Better independence</li>
              </ul>
              <p>Many patients begin walking longer distances inside the house.</p>
              <h3>Goals</h3>
              <ul>
                <li>Bend knee beyond 90°</li>
                <li>Walk safely</li>
                <li>Improve muscle strength</li>
              </ul>

              <h2>Weeks 3–4 Recovery</h2>
              <p>This period often marks noticeable improvements.</p>
              <p>Patients usually:</p>
              <ul>
                <li>Walk using a walking stick</li>
                <li>Climb stairs with support</li>
                <li>Perform household activities</li>
                <li>Experience reduced pain</li>
              </ul>
              <p>Physiotherapy focuses on:</p>
              <ul>
                <li>Muscle strengthening</li>
                <li>Walking pattern correction</li>
                <li>Balance exercises</li>
                <li>Flexibility</li>
              </ul>

              <h2>One Month After Surgery</h2>
              <p>By one month, most patients can:</p>
              <ul>
                <li>Walk independently indoors</li>
                <li>Sit comfortably</li>
                <li>Sleep better</li>
                <li>Perform basic daily activities</li>
              </ul>
              <p>Swelling may still persist, especially after prolonged walking. This is completely normal.</p>

              <h2>Six Weeks Recovery</h2>
              <p>Around six weeks, patients often:</p>
              <ul>
                <li>Walk without support</li>
                <li>Drive (if cleared by the surgeon)</li>
                <li>Return to desk jobs</li>
                <li>Walk longer distances</li>
              </ul>
              <p>Knee bending usually reaches 110–120 degrees. Pain becomes significantly lower than before surgery.</p>

              <h2>Two Months Recovery</h2>
              <p>At two months, strength continues improving. Patients can:</p>
              <ul>
                <li>Shop independently</li>
                <li>Climb stairs more comfortably</li>
                <li>Walk outdoors confidently</li>
                <li>Perform light household work</li>
              </ul>
              <p>Exercise becomes increasingly important.</p>

              <h2>Three Months Recovery</h2>
              <p>Three months is a major milestone. Most patients experience:</p>
              <ul>
                <li>Minimal pain</li>
                <li>Improved confidence</li>
                <li>Better knee flexibility</li>
                <li>Stronger muscles</li>
                <li>Nearly normal walking pattern</li>
              </ul>
              <p>Many people resume gardening, light travel, recreational walking, and social activities.</p>

              <h2>Six Months Recovery</h2>
              <p>At six months, recovery is well advanced. Most patients report:</p>
              <ul>
                <li>Excellent pain relief</li>
                <li>Comfortable walking</li>
                <li>Improved balance</li>
                <li>Better endurance</li>
                <li>Significant quality-of-life improvement</li>
              </ul>
              <p>Some stiffness after prolonged sitting may still occur.</p>

              <h2>One Year Recovery</h2>
              <p>Complete recovery can take up to one year. At this stage:</p>
              <ul>
                <li>Scar tissue fully matures</li>
                <li>Muscles regain strength</li>
                <li>Swelling almost completely resolves</li>
                <li>Knee feels more natural</li>
                <li>Maximum functional improvement is achieved</li>
              </ul>

              <h2>Physiotherapy Timeline</h2>
              <p>Physiotherapy is the most important part of recovery.</p>
              <ul>
                <li><strong>Phase 1:</strong> Pain control, Swelling reduction, Walking training</li>
                <li><strong>Phase 2:</strong> Knee bending, Muscle activation, Balance exercises</li>
                <li><strong>Phase 3:</strong> Strength training, Stair climbing, Walking endurance</li>
                <li><strong>Phase 4:</strong> Functional activities, Sports-specific rehabilitation (if appropriate)</li>
              </ul>
              <p>Patients who consistently perform exercises recover faster.</p>

              <h2>Pain During Recovery</h2>
              <p>Pain gradually decreases over time. Typical progression:</p>
              <ul>
                <li><strong>Week 1:</strong> Moderate pain</li>
                <li><strong>Week 2:</strong> Improving pain</li>
                <li><strong>Month 1:</strong> Occasional discomfort</li>
                <li><strong>Month 3:</strong> Minimal pain</li>
                <li><strong>Month 6:</strong> Rare discomfort</li>
              </ul>
              <p>Persistent or worsening pain should be evaluated by the orthopedic surgeon.</p>

              <h2>Managing Swelling</h2>
              <p>Swelling is common. Ways to reduce swelling:</p>
              <ul>
                <li>Ice packs</li>
                <li>Leg elevation</li>
                <li>Compression stockings</li>
                <li>Regular walking</li>
                <li>Physiotherapy</li>
                <li>Adequate hydration</li>
              </ul>
              <p>Swelling may continue for several months.</p>

              <h2>Nutrition for Faster Recovery</h2>
              <p>Healthy nutrition supports healing. Recommended foods:</p>
              <ul>
                <li>Protein-rich diet</li>
                <li>Fresh fruits</li>
                <li>Green vegetables</li>
                <li>Milk and dairy</li>
                <li>Eggs</li>
                <li>Fish</li>
                <li>Nuts</li>
                <li>Whole grains</li>
              </ul>
              <p>Drink plenty of water daily.</p>

              <h2>Activities to Avoid During Recovery</h2>
              <p>Avoid:</p>
              <ul>
                <li>Squatting</li>
                <li>Sitting cross-legged (if advised)</li>
                <li>High-impact sports</li>
                <li>Running</li>
                <li>Jumping</li>
                <li>Heavy lifting in early recovery</li>
              </ul>
              <p>Follow your surgeon's recommendations regarding activity restrictions.</p>

              <h2>Returning to Daily Activities</h2>
              <div class="table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th>Activity</th>
                      <th>Approximate Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Walking with support</td><td>Same day</td></tr>
                    <tr><td>Climbing stairs</td><td>2–4 weeks</td></tr>
                    <tr><td>Driving</td><td>4–6 weeks</td></tr>
                    <tr><td>Office work</td><td>4–8 weeks</td></tr>
                    <tr><td>Light household work</td><td>6 weeks</td></tr>
                    <tr><td>Long-distance travel</td><td>6–8 weeks</td></tr>
                    <tr><td>Golf</td><td>3 months</td></tr>
                    <tr><td>Swimming</td><td>6–12 weeks</td></tr>
                    <tr><td>Cycling</td><td>6–10 weeks</td></tr>
                  </tbody>
                </table>
              </div>

              <h2>Signs of Normal Recovery</h2>
              <p>Normal recovery includes mild swelling, mild warmth, improving flexibility, better walking each week, and occasional stiffness.</p>

              <h2>Warning Signs</h2>
              <p>Seek immediate medical attention if you experience:</p>
              <ul>
                <li>Fever</li>
                <li>Increasing redness</li>
                <li>Wound drainage</li>
                <li>Severe swelling</li>
                <li>Calf pain</li>
                <li>Chest pain</li>
                <li>Difficulty breathing</li>
                <li>Sudden inability to walk</li>
              </ul>

              <h2>Factors That Affect Recovery</h2>
              <p>Recovery depends on age, weight, diabetes control, smoking, muscle strength, physiotherapy compliance, surgical technique, and implant positioning.</p>
              <p>Robotic-assisted knee replacement may improve implant alignment and contribute to smoother functional recovery in appropriate patients.</p>

              <h2>Tips for Faster Recovery</h2>
              <ul>
                <li>Follow physiotherapy daily.</li>
                <li>Walk regularly.</li>
                <li>Take medications as prescribed.</li>
                <li>Maintain a healthy weight.</li>
                <li>Eat a balanced diet.</li>
                <li>Sleep well.</li>
                <li>Stay hydrated.</li>
                <li>Attend all follow-up appointments.</li>
              </ul>

              <h2>Conclusion</h2>
              <p>Recovery after knee replacement is a gradual process, but each week brings meaningful progress. Most patients notice significant improvements within 6–12 weeks and continue gaining strength and mobility for up to a year.</p>
              <p>With expert surgical care, dedicated physiotherapy, and healthy lifestyle habits, patients can return to an active, pain-free life.</p>
            </div>
"""

start_idx = content.find('<div class="article-body">')
end_idx = content.find('<!-- Share Article -->', start_idx)
if end_idx == -1:
    end_idx = content.find('<footer class="article-footer">', start_idx)
    
if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + body_html + content[end_idx:]
else:
    # Fallback to simple replace if the structure changed slightly
    end_idx = content.find('<h2>Frequently Asked Questions (FAQs)</h2>', start_idx)
    if end_idx != -1:
        content = content[:start_idx] + body_html + content[end_idx:]

with open(dest_html, "w", encoding="utf-8") as f:
    f.write(content)

print("Blog file generated successfully.")
