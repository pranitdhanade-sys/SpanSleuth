from fastapi import APIRouter

router = APIRouter()

@router.get('/config')
def get_alert_config():
    return {"slack": True, "email": False, "webhook": False}
