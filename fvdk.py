import cv2

# Load the image
img = cv2.imread('maxresdefault.jpg')

# Convert to gray
gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Invert the grayscale image
inverted = 255 - gray_img

# Blur the image
blurred = cv2.GaussianBlur(inverted, (21, 21), 0)

# Invert the blurred image
inverted_blurred = 255 - blurred

# Create the pencil sketch
sketch = cv2.divide(gray_img, inverted_blurred, scale=256.0)

# Save or show the result
cv2.imwrite('pencil_sketch.jpg', sketch)
