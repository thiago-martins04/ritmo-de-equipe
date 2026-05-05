import { NavItem, ServicePlan, Testimonial, Feature } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Sobre', href: '#about' },
  { label: 'Planos', href: '#services' },
  { label: 'Depoimentos', href: '#testimonials' },
];

export const FEATURES: Feature[] = [
  {
    title: 'Treino Personalizado',
    description: 'Planilhas adaptadas ao seu nível, objetivos e rotina, seja para 5km ou uma maratona.',
    iconName: 'Target'
  },
  {
    title: 'Vídeo Aula',
    description: 'Conteúdo com vídeos explicativos de exercícios de coordenação e fortalecimento',
    iconName: 'Users'
  },
  {
    title: 'Acompanhamento',
    description: 'Monitoramento constante do seu progresso e ajustes na periodização.',
    iconName: 'Activity'
  },
  {
    title: 'Suporte Online',
    description: 'Dúvidas e feedbacks diretos via aplicativo e WhatsApp.',
    iconName: 'Smartphone'
  }
];

export const PLANS: ServicePlan[] = [
  {
    title: 'Assessoria Corrida',
    price: 'R$ 99,90',
    features: [
      'Planilha via App',
      'Análise e feedback de cada treino',
      'Suporte via WhatsApp',
      'Planilhas mensais e ajustes quando necessário'
    ],
    link: 'https://invoice.infinitepay.io/plans/ritmo-de-equipe/2azz6cwrdF'
  },
  {
    title: 'Híbrido (Corrida + Musculação)',
    price: 'R$ 139,90',
    isPopular: true,
    features: [
      'Tudo do plano anterior',
      'Planlha de musculação personalizada',
      'Vídeos de execução de movimentos',
      'Suporte prioritário'
    ],
    link: 'https://invoice.infinitepay.io/plans/ritmo-de-equipe/7mzznWY8Kx'
  },
  {
    title: 'Personal Trainer (Presencial)',
    price: 'Sob Consulta',
    features: [
      'Acompanhamento exclusivo',
      'Correção biomecânica',
      'Adequação à rotina e nível de condicionamento',
      'Disponível na cidade de Taubaté - SP'
    ],
    link: 'https://api.whatsapp.com/message/ZHVEC5OA4N5FC1?autoload=1&app_absent=0'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Joyce',
    role: 'Atleta Amadora',
    content: 'Amei conhecer você esse ano. Voltar a correr acompanhada por vc tem feito muita diferença. Obrigada pelo conhecimento compartilhado e principalmente pelo acolhimento 🥰',
    image: 'female'
  },
  {
    id: 2,
    name: 'Paulo',
    role: 'Iniciante',
    content: 'Feliz por ontem, primeira prova oficial que participo e o calor estava bem forte, consegui fazer meu melhor tempo nos 5K e principalmente terminar a prova sem dores.',
    image: 'male'
  },
  {
    id: 3,
    name: 'Ana',
    role: 'Corredora a 1 ano',
    content: 'A corrida mudou minha vida! Agradeço à @bia.personal_ que minha nutricionista me apresentou, ela que me incentiva, orienta e sempre diz que vou conseguir 🏃🏾‍♀️.',
    image: 'female'
  }
];