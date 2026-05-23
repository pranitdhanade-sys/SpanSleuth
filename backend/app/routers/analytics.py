from fastapi import APIRouter

router = APIRouter()

@router.get('/overview')
def overview():
    return {"request_volume": 12450, "p95": 220, "p99": 480}
