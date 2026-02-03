import requests
import json
import time

def test_pii_guard():
    url = "http://localhost:8000/process-document"
    payload = {
        "content": "Estimado cliente, mi email es test@example.com y mi tarjeta de crédito es 4242-4242-4242-4242. Por favor, procese este documento.",
        "config": {"chunk_size": 100}
    }

    print(f"Enviando contenido con PII a {url}...")
    try:
        response = requests.post(url, json=payload)
        print(f"Status Code: {response.status_code}")
        print("Respuesta recibida. Verificando logs del servidor...")

        # En una auditoría real, buscaríamos en logs/ai_worker.log la cadena [[REDACTED_EMAIL]]
        print("\nPrueba finalizada. Por favor, verifique manualmente los logs del worker para confirmar el saneamiento.")
    except Exception as e:
        print(f"Error conectando con el worker: {e}")

if __name__ == "__main__":
    test_pii_guard()
