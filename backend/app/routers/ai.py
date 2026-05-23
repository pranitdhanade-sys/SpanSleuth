from fastapi import APIRouter

router = APIRouter()

@router.get('/analysis/{incident_id}')
def analysis(incident_id: str):
    return {
        'incident_id': incident_id,
        'root_cause': 'Auth token validation failed after deployment',
        'confidence': 0.86,
        'recommendations': ['Rollback auth middleware', 'Invalidate stale tokens']
    }
