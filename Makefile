up:
	docker compose up --build

down:
	docker compose down

api:
	cd backend && uvicorn app.main:app --reload

web:
	cd frontend && npm run dev
