from fastapi import APIRouter

router = APIRouter()

@router.get('')
def list_incidents():
    return [{"id": "inc_001", "service": "payment", "severity": "high"}]
