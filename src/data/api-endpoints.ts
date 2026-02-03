import { Brain, Database, Book, Zap, BarChart } from 'lucide-react';
import { ApiCategory } from '../types';

export const API_ENDPOINTS: ApiCategory[] = [
  {
    categoria: 'Embeddings',
    icon: Brain,
    items: [
      {
        method: 'POST',
        path: '/api/v1/embeddings/optimize',
        descripcion: 'Optimiza automáticamente el modelo de embedding para tu dataset',
        params: [
          { nombre: 'dataset_id', tipo: 'string', requerido: true, descripcion: 'ID del dataset a analizar' },
          { nombre: 'target_latency', tipo: 'number', requerido: false, descripcion: 'Latencia objetivo en ms' }
        ],
        response: '{\n  "status": "success",\n  "recommended_model": "all-MiniLM-L6-v2"\n}'
      }
    ]
  },
  {
    categoria: 'Cache',
    icon: Database,
    items: [
      {
        method: 'POST',
        path: '/api/v1/cache/query',
        descripcion: 'Consulta el cache semántico antes de llamar al LLM',
        params: [
          { nombre: 'query', tipo: 'string', requerido: true, descripcion: 'Consulta del usuario' }
        ],
        response: '{\n  "hit": true,\n  "savings": "$0.0023"\n}'
      }
    ]
  }
];
