interface Props {
  icon: React.ReactNode
  text: string
  size: 'small' | 'big'
  href?: string
}

export default function LinkComponent({ icon, text, href, size }: Props) {
  const content = (
    <div
      className={`flex items-center gap-1 text-neutral-500 ${
        href && 'hover:text-neutral-300'
      }`}
    >
      {icon}
      <span
        className={`${
          size === 'small'
            ? 'text-sm sm:text-base font-medium'
            : 'text-base sm:text-lg font-semibold'
        }`}
      >
        {text}
      </span>
    </div>
  )

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  )
}
