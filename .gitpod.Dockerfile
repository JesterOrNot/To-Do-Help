FROM gitpod/workspace-full-vnc

USER gitpod

RUN sudo apt-get update \
    && sudo apt install -yq \
        chromium-browser
