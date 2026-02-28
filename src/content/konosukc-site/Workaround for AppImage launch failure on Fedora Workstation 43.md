## Environment

- **OS:** Fedora Workstation 43

## Issue

Tauri-based AppImage fails to launch on Fedora Workstation 43 with error: `Could not create default EGL display: EGL_BAD_PARAMETER. Aborting...`.

## Cause

Library conflict between bundled Wayland libraries and and system libraries.

## Workaround

Apply unpack-fix-repack pattern: Unpack AppImage, fix AppImage (remove bundled Wayland libraries), and repack AppImage to force use of system libraries.

```bash
# Get appimagetool
wget https://github.com/AppImage/appimagetool/releases/download/1.9.1/appimagetool-x86_64.AppImage
chmod +x appimagetool-x86_64.AppImage

# Get target AppImage
wget https://github.com/EpicenterHQ/epicenter/releases/download/v7.11.0/Whispering_7.11.0_amd64.AppImage
# Unpack AppImage
./Whispering_7.11.0_amd64.AppImage --appimage-extract
# Fix AppImage
rm squashfs-root/usr/lib/libwayland-*
# Repack AppImage
ARCH=x86_64 ./appimagetool-x86_64.AppImage squashfs-root Whispering_7.11.0-fixed_amd64.AppImage
```