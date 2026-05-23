from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth, logs, incidents, analytics, alerts, ai
from app.middleware.security import SecurityHeadersMiddleware

app = FastAPI(title="PulseGuard AI API", version="0.1.0")

app.add_middleware(SecurityHeadersMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(logs.router, prefix="/api/logs", tags=["logs"])
app.include_router(incidents.router, prefix="/api/incidents", tags=["incidents"])
app.include_router(analytics.router, prefix="/api/analytics", tags=["analytics"])
app.include_router(alerts.router, prefix="/api/alerts", tags=["alerts"])
app.include_router(ai.router, prefix="/api/ai", tags=["ai"])


@app.get('/health')
def health() -> dict[str, str]:
    return {"status": "ok"}
