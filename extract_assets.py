import fitz
import os

doc = fitz.open("profile.pdf")
os.makedirs("assets", exist_ok=True)
count = 0

for i, page in enumerate(doc):
    for img_idx, img in enumerate(page.get_images(full=True)):
        xref = img[0]
        base_img = doc.extract_image(xref)
        img_bytes = base_img["image"]
        img_ext = base_img["ext"]
        w = base_img["width"]
        h = base_img["height"]
        img_name = f"assets/page_{i+1}_img_{img_idx+1}_{w}x{h}.{img_ext}"
        with open(img_name, "wb") as f:
            f.write(img_bytes)
        print(f"Extracted {img_name}: {w}x{h}, {len(img_bytes)} bytes")
        count += 1

print(f"Total images extracted: {count}")
