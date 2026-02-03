import requests
import json

BASE_URL = "http://localhost:8000"

def test_skill_execution(skill_id, content):
    print(f"Testing skill: {skill_id}...")
    try:
        response = requests.post(
            f"{BASE_URL}/skills/execute",
            json={"skill_id": skill_id, "content": content}
        )
        if response.status_code == 200:
            print(f"SUCCESS: {skill_id}")
            # print(json.dumps(response.json(), indent=2))
        else:
            print(f"FAILED: {skill_id} (Status: {response.status_code})")
            print(response.text)
    except Exception as e:
        print(f"ERROR: Could not connect to worker: {str(e)}")

if __name__ == "__main__":
    skills_to_test = [
        "security-auditor",
        "code-review-excellence",
        "compliance-legal-sentinel",
        "agent-evaluation"
    ]

    sample_content = "def insecure_function(data):\n    eval(data)\n    return data"

    for skill in skills_to_test:
        test_skill_execution(skill, sample_content)
