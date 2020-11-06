FROM archlinux

RUN pacman -Syu --noconfirm
RUN pacman -Sy yarn node npm --noconfirm
