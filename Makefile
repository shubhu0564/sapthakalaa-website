## Makefile for common tasks

.PHONY: build server dev docker-up docker-down docker-build all

build:
	@echo "Building frontend"
	npm run build

server:
	@echo "Starting backend server (foreground)"
	npm run server

dev:
	@echo "Starting frontend dev server"
	npm run dev

docker-build:
	@echo "Building docker images"
	docker-compose build

docker-up:
	@echo "Starting docker-compose (app + db)"
	docker-compose up -d --build

docker-down:
	@echo "Stopping docker-compose"
	docker-compose down

all: build
	@echo "Build complete. Use 'make server' and 'make dev' in separate terminals, or 'make docker-up' to run with Docker."
