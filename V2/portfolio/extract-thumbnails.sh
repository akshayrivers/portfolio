#!/bin/bash
# Extract first frame from each wallpaper video as thumbnail
# Usage: ./extract-thumbnails.sh

VIDEO_DIR="public/assets/wallpapers"
THUMB_DIR="public/assets/thumbnails"

mkdir -p "$THUMB_DIR"

for video in "$VIDEO_DIR"/*.mp4; do
  filename=$(basename "$video" .mp4)
  echo "Extracting thumbnail for $filename..."
  ffmpeg -y -i "$video" -vf "select=eq(n\,0)" -vframes 1 -q:v 2 "$THUMB_DIR/${filename}.jpg" 2>/dev/null
done

echo "Done! Thumbnails saved to $THUMB_DIR"
