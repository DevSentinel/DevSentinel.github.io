/**
 * Media utility functions for optimizing and managing images and other media
 */

/**
 * Generates a responsive image srcset for different viewport sizes
 * @param src Base image source path
 * @param sizes Array of sizes to generate srcset for
 * @returns Formatted srcset string
 */
export function generateSrcSet(src: string, sizes: number[] = [640, 750, 828, 1080, 1200]): string {
  // Handle external URLs
  if (src.startsWith('http')) {
    return src;
  }
  
  // Extract file name and extension
  const lastDotIndex = src.lastIndexOf('.');
  const fileName = src.substring(0, lastDotIndex);
  const extension = src.substring(lastDotIndex);
  
  // Generate srcset with different sizes
  return sizes
    .map(size => `${fileName}-${size}w${extension} ${size}w`)
    .join(', ');
}

/**
 * Determines appropriate sizes attribute for responsive images
 * @param defaultSize Default size as percentage of viewport width
 * @returns Formatted sizes attribute string
 */
export function getResponsiveSizes(defaultSize: number = 100): string {
  return `
    (max-width: 640px) 100vw,
    (max-width: 768px) ${Math.min(defaultSize, 100)}vw,
    ${defaultSize}vw
  `.trim();
}

/**
 * Gets appropriate image dimensions based on image type/usage
 * @param type Type of image (hero, thumbnail, gallery, etc.)
 * @returns Object with width and height
 */
export function getImageDimensions(type: 'hero' | 'thumbnail' | 'gallery' | 'timeline' | 'map' | 'portrait'): {
  width: number;
  height: number;
  aspectRatio: string;
} {
  switch (type) {
    case 'hero':
      return { width: 1920, height: 1080, aspectRatio: '16/9' };
    case 'thumbnail':
      return { width: 400, height: 300, aspectRatio: '4/3' };
    case 'gallery':
      return { width: 800, height: 600, aspectRatio: '4/3' };
    case 'timeline':
      return { width: 600, height: 400, aspectRatio: '3/2' };
    case 'map':
      return { width: 300, height: 300, aspectRatio: '1/1' };
    case 'portrait':
      return { width: 400, height: 600, aspectRatio: '2/3' };
    default:
      return { width: 800, height: 600, aspectRatio: '4/3' };
  }
}

/**
 * Generates a blurred placeholder image URL
 * @param src Original image source
 * @returns URL for blurred placeholder
 */
export function getBlurredPlaceholder(src: string): string {
  // For external URLs, return a generic placeholder
  if (src.startsWith('http')) {
    return '/placeholders/blur.svg';
  }
  
  // Extract file name and extension
  const lastDotIndex = src.lastIndexOf('.');
  const fileName = src.substring(0, lastDotIndex);
  const extension = src.substring(lastDotIndex);
  
  // Return path to blurred placeholder
  return `${fileName}-placeholder${extension}`;
}

/**
 * Formats file size for display
 * @param bytes File size in bytes
 * @returns Formatted file size string
 */
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} bytes`;
  } else if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  } else {
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }
}

/**
 * Checks if a file is an image based on its extension
 * @param filename Filename to check
 * @returns Boolean indicating if file is an image
 */
export function isImageFile(filename: string): boolean {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg'];
  const extension = filename.substring(filename.lastIndexOf('.')).toLowerCase();
  return imageExtensions.includes(extension);
}

/**
 * Checks if a file is a video based on its extension
 * @param filename Filename to check
 * @returns Boolean indicating if file is a video
 */
export function isVideoFile(filename: string): boolean {
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov'];
  const extension = filename.substring(filename.lastIndexOf('.')).toLowerCase();
  return videoExtensions.includes(extension);
}

/**
 * Checks if a file is an audio file based on its extension
 * @param filename Filename to check
 * @returns Boolean indicating if file is an audio file
 */
export function isAudioFile(filename: string): boolean {
  const audioExtensions = ['.mp3', '.wav', '.ogg', '.aac'];
  const extension = filename.substring(filename.lastIndexOf('.')).toLowerCase();
  return audioExtensions.includes(extension);
}

/**
 * Gets the media type from a filename
 * @param filename Filename to check
 * @returns Media type string
 */
export function getMediaType(filename: string): 'image' | 'video' | 'audio' | 'document' | 'unknown' {
  if (isImageFile(filename)) return 'image';
  if (isVideoFile(filename)) return 'video';
  if (isAudioFile(filename)) return 'audio';
  
  const documentExtensions = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.txt'];
  const extension = filename.substring(filename.lastIndexOf('.')).toLowerCase();
  if (documentExtensions.includes(extension)) return 'document';
  
  return 'unknown';
}
