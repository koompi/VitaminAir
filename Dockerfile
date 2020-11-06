FROM archlinux

RUN pacman -Syu --noconfirm
RUN pacman -Sy yarn nodejs npm --noconfirm
