from datetime import datetime, timedelta, UTC
from fastapi import APIRouter, HTTPException
from jose import jwt
from passlib.hash import argon2
from app.schemas.auth import LoginRequest

router = APIRouter()
SECRET = 'dev-secret'

@router.post('/login')
def login(payload: LoginRequest):
    if payload.email != 'admin@pulseguard.local' or not argon2.verify(payload.password, argon2.hash('admin123')):
        raise HTTPException(status_code=401, detail='Invalid credentials')
    exp = datetime.now(UTC) + timedelta(minutes=30)
    token = jwt.encode({'sub': payload.email, 'role': 'admin', 'exp': exp}, SECRET, algorithm='HS256')
    return {'access_token': token, 'token_type': 'bearer'}
