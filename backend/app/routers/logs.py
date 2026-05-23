from fastapi import APIRouter
from app.schemas.log import LogIngestRequest

router = APIRouter()

@router.post('/ingest')
def ingest_logs(payload: LogIngestRequest):
    return {"accepted": len(payload.logs), "source": payload.source}
