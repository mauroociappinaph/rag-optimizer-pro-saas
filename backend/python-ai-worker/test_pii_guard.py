import sys
import os

# Ensure the worker directory is in the path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from security_utils import scrub_pii

def test_pii_scrubbing_industrial():
    """
    Certifies that sensitive data patterns are correctly redacted.
    """
    test_cases = [
        {
            "input": "Contactar a mauro@example.com para soporte.",
            "expect": "[[REDACTED_EMAIL]]"
        },
        {
            "input": "Mi API Key es sk-live-1234567890abcdef1234567890.",
            "expect": "[[REDACTED_API_KEY]]"
        },
        {
            "input": "Usa el token Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
            "expect": "[[REDACTED_AUTH_TOKEN]]"
        }
    ]

    print("--- 🛡️ Industrial Security Audit: PII Guard ---")
    
    passed_count = 0
    for case in test_cases:
        output = scrub_pii(case["input"])
        if case["expect"] in output:
            print(f"✅ PASS: Found {case['expect']}")
            passed_count += 1
        else:
            print(f"❌ FAIL: Expected {case['expect']} but got: {output}")

    success_rate = (passed_count / len(test_cases)) * 100
    print(f"\nAudit Success Rate: {success_rate}%")
    
    return success_rate == 100

if __name__ == "__main__":
    if test_pii_scrubbing_industrial():
        print("\n🏆 SECURITY CERTIFIED: PII Guard is 100% operational.")
        sys.exit(0)
    else:
        print("\n🛑 SECURITY BREACH: PII Guard is leaking sensitive data.")
        sys.exit(1)