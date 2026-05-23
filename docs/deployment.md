# Deployment Guide

## Local
1. Copy `.env.example` to `.env`
2. Run `docker compose up --build`

## Kubernetes
Apply manifests in `infrastructure/k8s` after updating image tags.
