import type { SocialLink } from '@/types/content'

export const socials: readonly SocialLink[] = [
  { label: 'Email', value: 'dulanprabashwara@gmail.com', href: 'mailto:dulanprabashwara@gmail.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/dulan-prabashwara/', href: 'https://linkedin.com/in/dulan-prabashwara/' },
  { label: 'GitHub', value: 'github.com/dulanprabashwara', href: 'https://github.com/dulanprabashwara' },
  { label: 'Location', value: 'Bandarawela, Sri Lanka', href: null },
] as const
