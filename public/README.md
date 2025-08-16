# Public Assets

This folder contains static assets that are served directly by the web server.

## Profile Image

To display your profile picture:

1. **Option 1 (Recommended)**: Rename your image file to `profile.jpg` and place it in this folder
2. **Option 2**: If your image has a different extension (like .png, .jpeg), update the code in `src/App.tsx` to match your filename

### Current Code Reference

The image is referenced in `src/App.tsx` at line 212:

```tsx
<img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
```

### Supported Image Formats

- .jpg / .jpeg
- .png
- .webp
- .gif

### Image Requirements

- Recommended size: 192x192 pixels (48x48 in the code = 48 \* 4 = 192px)
- The image will be automatically resized and cropped to fit the container
- Use a square image for best results
