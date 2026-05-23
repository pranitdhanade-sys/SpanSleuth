from pydantic import BaseModel

class APILog(BaseModel):
    timestamp: str
    service: str
    endpoint: str
    method: str
    status_code: int
    latency_ms: int
    message: str

class LogIngestRequest(BaseModel):
    source: str
    logs: list[APILog]
