import os

base_dir = r"c:\Users\Techbuild Hub\Desktop\Dr.Madhuram Chowdry"

images = [
    "blog12image1.webp",
    "blog12image2.png",
    "blog12image3.png",
    "blog12image4.png"
]

print("Checking blog 12 images in assets:")
for img_name in images:
    img_path = os.path.join(base_dir, "assets", img_name)
    if os.path.exists(img_path):
        size_mb = os.path.getsize(img_path) / (1024 * 1024)
        print(f"  - assets/{img_name} ({size_mb:.2f} MB)")
    else:
        print(f"  - Warning: assets/{img_name} missing!")

blog_html = os.path.join(base_dir, "exercises-after-knee-replacement.html")
if os.path.exists(blog_html):
    with open(blog_html, "r", encoding="utf-8") as f:
        content = f.read()
    print("\nHTML references verified in exercises-after-knee-replacement.html:")
    for img_name in images:
        if f"assets/{img_name}" in content:
            print(f"  - assets/{img_name} found in HTML")
        else:
            print(f"  - assets/{img_name} NOT found in HTML")
