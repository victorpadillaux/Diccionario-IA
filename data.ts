import { 
  Bot, 
  BrainCircuit, 
  Sparkles, 
  Box, 
  Scale, 
  MessageSquareText, 
  Workflow, 
  Blocks, 
  FileText, 
  Ghost, 
  Sliders, 
  Database, 
  Zap, 
  Lightbulb, 
  Settings2, 
  Search, 
  Binary, 
  Layers, 
  Server, 
  Timer 
} from 'lucide-react';
import { TermItem } from './types';

export const terms: TermItem[] = [
  { 
    id: '1', 
    title: 'Agentes', 
    icon: Bot, 
    videoUrl: 'https://player.vimeo.com/video/1145574956?h=ca9806f51f',
    transcription: "Los agentes de IA son sistemas autónomos diseñados para percibir su entorno, razonar sobre él y tomar acciones para alcanzar objetivos específicos. A diferencia de un chatbot pasivo, un agente tiene 'agencia': puede iniciar tareas, usar herramientas (como navegadores web o calculadoras) y encadenar pasos lógicos para resolver problemas complejos sin intervención humana constante."
  },
  { 
    id: '2', 
    title: 'AGI', 
    icon: BrainCircuit, 
    videoUrl: 'https://player.vimeo.com/video/1145575517?h=64389afc26',
    transcription: "La Inteligencia General Artificial (AGI) es el santo grial de la investigación en IA: un sistema hipotético con la capacidad de aprender, entender y aplicar inteligencia a cualquier tarea intelectual que un ser humano pueda realizar. A diferencia de la IA estrecha (ANI) actual, que es experta en una sola cosa, una AGI tendría flexibilidad cognitiva y sentido común generalizado."
  },
  { 
    id: '3', 
    title: 'ASI', 
    icon: Sparkles, 
    videoUrl: 'https://player.vimeo.com/video/1145575572?h=3d81a4728b',
    transcription: "La Superinteligencia Artificial (ASI) se refiere a un intelecto que es mucho más inteligente que los mejores cerebros humanos en prácticamente todos los campos, incluyendo la creatividad científica, la sabiduría general y las habilidades sociales. Es el estadio teórico posterior a la AGI, donde la máquina supera nuestra capacidad biológica de procesamiento."
  },
  { 
    id: '4', 
    title: 'Cajas negras', 
    icon: Box, 
    videoUrl: 'https://player.vimeo.com/video/1145575540?h=3d6eed8ebe',
    transcription: "El problema de la 'caja negra' en IA describe la opacidad de los algoritmos de aprendizaje profundo. Sabemos qué datos entran y qué resultados salen, pero los procesos internos —cómo las millones de neuronas artificiales ponderan la información para llegar a una conclusión— son a menudo ininteligibles, incluso para sus propios creadores."
  },
  { 
    id: '5', 
    title: 'Alineamiento', 
    icon: Scale, 
    videoUrl: 'https://player.vimeo.com/video/1145575456?h=80bdf55c01',
    transcription: "El alineamiento es el campo de seguridad de la IA enfocado en asegurar que los objetivos y comportamientos de los sistemas artificiales coincidan con los valores e intenciones humanas. Se trata de evitar que una IA muy capaz interprete mal una instrucción y cause daño mientras intenta cumplirla eficientemente (el problema del 'genio de la lámpara')."
  },
  { 
    id: '6', 
    title: 'LLM y MLLM', 
    icon: MessageSquareText, 
    videoUrl: 'https://player.vimeo.com/video/1145575782?h=0484862557',
    transcription: "Un LLM (Large Language Model) es un modelo entrenado con vastas cantidades de texto para entender y generar lenguaje humano. Un MLLM (Multimodal Large Language Model) lleva esto un paso más allá, integrando la capacidad de procesar y generar no solo texto, sino también imágenes, audio y video, imitando más de cerca la percepción sensorial humana."
  },
  { 
    id: '7', 
    title: 'Transformer', 
    icon: Workflow, 
    videoUrl: 'https://player.vimeo.com/video/1145575749?h=dcec36177a',
    transcription: "Presentada por Google en 2017, la arquitectura Transformer es la base de la revolución actual de la IA generativa. Su innovación clave es el mecanismo de 'atención', que permite al modelo sopesar la importancia de diferentes partes de una entrada (como palabras en una frase) simultáneamente, capturando relaciones complejas a larga distancia mejor que las redes anteriores."
  },
  { 
    id: '8', 
    title: 'Tokens', 
    icon: Blocks, 
    videoUrl: 'https://player.vimeo.com/video/1145575917?h=c67e4458d4',
    transcription: "Los tokens son las unidades fundamentales de información que procesa un LLM. No son siempre palabras completas; pueden ser partes de palabras o caracteres. Por ejemplo, la palabra 'ingobernable' podría dividirse en varios tokens. Los modelos tienen límites de tokens, lo que define cuánto pueden 'leer' o 'escribir' de una sola vez."
  },
  { 
    id: '9', 
    title: 'Contexto', 
    icon: FileText, 
    videoUrl: 'https://player.vimeo.com/video/1145575811?h=05600b35c6',
    transcription: "La ventana de contexto es la memoria a corto plazo del modelo durante una interacción. Define cuánta información (texto anterior, instrucciones, documentos subidos) puede mantener activa la IA para generar una respuesta coherente. Una ventana más grande permite analizar libros enteros o mantener conversaciones muy largas sin olvidar el principio."
  },
  { 
    id: '10', 
    title: 'Alucinación', 
    icon: Ghost, 
    videoUrl: 'https://player.vimeo.com/video/1145575675?h=e83c4e519d',
    transcription: "Una alucinación ocurre cuando una IA genera información que suena plausible y confiada, pero que es factualmente incorrecta o totalmente inventada. Esto sucede porque el modelo predice palabras basándose en probabilidad estadística, no en una base de datos de hechos verificados, priorizando la fluidez sobre la veracidad."
  },
  { 
    id: '11', 
    title: 'Parámetros', 
    icon: Sliders, 
    videoUrl: 'https://player.vimeo.com/video/1145575644?h=0c8887c7c6',
    transcription: "Los parámetros son las variables internas ajustables (pesos y sesgos) dentro de una red neuronal. Se calibran durante el entrenamiento. En general, mayor cantidad de parámetros indica un modelo más complejo y capaz de capturar matices sutiles, aunque también requiere más potencia de cálculo para ejecutarse."
  },
  { 
    id: '12', 
    title: 'Dataset', 
    icon: Database, 
    videoUrl: 'https://player.vimeo.com/video/1145575838?h=4528305cfb',
    transcription: "El dataset es el conjunto de datos utilizado para enseñar a la IA. La calidad, diversidad y tamaño del dataset determinan directamente la inteligencia y los sesgos del modelo final. 'Garbage in, garbage out': si entrenas una IA con datos malos o sesgados, obtendrás resultados defectuosos."
  },
  { 
    id: '13', 
    title: 'Entrenamiento', 
    icon: Zap, 
    videoUrl: 'https://player.vimeo.com/video/1145575894?h=433f80f3f8',
    transcription: "El entrenamiento es la fase inicial y más costosa donde el modelo 'aprende'. Analiza terabytes de datos, intentando predecir el siguiente token y ajustando sus parámetros internos cada vez que se equivoca. Este proceso puede tomar meses y miles de GPUs trabajando en paralelo."
  },
  { 
    id: '14', 
    title: 'Inferencia', 
    icon: Lightbulb, 
    videoUrl: 'https://player.vimeo.com/video/1145575853?h=952acec50b',
    transcription: "La inferencia es el momento de la verdad: cuando usas el modelo ya entrenado para obtener una respuesta. Es el proceso de aplicar los conocimientos congelados del modelo a datos nuevos. A diferencia del entrenamiento, es menos costoso computacionalmente pero debe ser rápido para la experiencia de usuario."
  },
  { 
    id: '15', 
    title: 'Fine-tuning', 
    icon: Settings2, 
    videoUrl: 'https://player.vimeo.com/video/1145575605?h=1cd862fa16',
    transcription: "El fine-tuning (ajuste fino) es el proceso de tomar un modelo base pre-entrenado (que sabe 'de todo un poco') y entrenarlo adicionalmente con un dataset más pequeño y especializado. Esto lo convierte en un experto en una tarea específica, como redacción legal, código médico o el estilo de una marca."
  },
  { 
    id: '16', 
    title: 'RAG', 
    icon: Search, 
    videoUrl: 'https://player.vimeo.com/video/1145575871?h=98dcc68f8b',
    transcription: "RAG (Retrieval-Augmented Generation) es una técnica que mejora la precisión de los LLMs. En lugar de confiar solo en su memoria entrenada, el modelo busca información relevante en una base de datos externa confiable antes de responder. Esto reduce alucinaciones y permite al modelo usar datos privados o muy recientes."
  },
  { 
    id: '17', 
    title: 'Embeddings', 
    icon: Binary, 
    videoUrl: 'https://player.vimeo.com/video/1145575171?h=a5ea702c20',
    transcription: "Los embeddings son representaciones matemáticas de datos (palabras, imágenes) como vectores en un espacio multidimensional. En este espacio, conceptos semánticamente similares (como 'rey' y 'reina') están matemáticamente cerca. Esto permite a la computadora 'entender' significados y relaciones, no solo comparar palabras clave."
  },
  { 
    id: '18', 
    title: 'Multimodalidad', 
    icon: Layers, 
    videoUrl: 'https://player.vimeo.com/video/1145575709?h=5121939075',
    transcription: "La multimodalidad es la capacidad de un sistema de IA para comprender y generar información a través de múltiples tipos de medios (modos) simultáneamente. Una IA multimodal puede ver una foto, leer un texto sobre ella y responder con un audio, integrando toda esa información como lo haría un humano."
  },
  { 
    id: '19', 
    title: 'Centros de cómputo', 
    icon: Server, 
    videoUrl: 'https://player.vimeo.com/video/1145575949?h=0a72058559',
    transcription: "Las fábricas de la inteligencia moderna. Son instalaciones masivas equipadas con miles de servidores y chips especializados (GPUs/TPUs) que consumen enormes cantidades de energía y refrigeración. Es donde reside físicamente la 'nube' que entrena y ejecuta los modelos de IA más avanzados."
  },
  { 
    id: '20', 
    title: 'Latencia', 
    icon: Timer, 
    videoUrl: 'https://player.vimeo.com/video/1145575931?h=fd81c1e53e',
    transcription: "La latencia es el tiempo de espera entre tu petición y la respuesta de la IA. En sistemas de voz o video en tiempo real, una latencia baja (milisegundos) es crucial para que la conversación se sienta natural. Depende de la velocidad de inferencia del modelo y de la red."
  },
];