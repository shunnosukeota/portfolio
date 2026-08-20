import type { ReactNode } from 'react'

/** 最大幅 1280px、外側パディング 24px（SP）/ 64px（PC） */
export default function Container({
  children,
  className = '',
  size = 'default',
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  size?: 'default' | 'wide'
  as?: 'div' | 'section' | 'header' | 'footer' | 'article' | 'nav'
}) {
  const max = size === 'wide' ? 'max-w-wide' : 'max-w-content'
  return <Tag className={`mx-auto w-full ${max} px-6 md:px-10 lg:px-16 ${className}`}>{children}</Tag>
}
