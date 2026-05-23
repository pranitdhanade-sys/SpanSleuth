"""Anomaly detection primitives for latency, error rate, and traffic anomalies."""

def detect_error_spike(current_rate: float, baseline: float) -> bool:
    return current_rate > baseline * 2.5
