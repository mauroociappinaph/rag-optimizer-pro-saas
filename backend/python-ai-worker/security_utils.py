import re
import logging

# Standard PII Patterns (2026 Industry Benchmarks)
PII_PATTERNS = {
    "email": r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+',
    "api_key": r'(sk|pk|ak)-(live|test)-[a-zA-Z0-9]{20,}',
    "auth_token": r'Bearer\s+[a-zA-Z0-9\._\-]+',
    "credit_card": r'\b(?:\d[ -]*?){13,16}\b'
}

def scrub_pii(text: str) -> str:
    """
    Sovereign PII Scrubber - Replaces sensitive data with labels.
    Executed locally to ensure zero-leakage to cloud logs.
    """
    if not isinstance(text, str):
        return text
        
    scrubbed = text
    for label, pattern in PII_PATTERNS.items():
        scrubbed = re.sub(pattern, f"[[REDACTED_{label.upper()}]]", scrubbed)
    
    return scrubbed

class PIIGuardFilter(logging.Filter):
    """
    Logging Filter to ensure no PII reaches the stdout/stderr.
    """
    def filter(self, record):
        if isinstance(record.msg, str):
            record.msg = scrub_pii(record.msg)
        return True
