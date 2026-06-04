import { useState, useRef, useEffect } from 'react'
import { businessInfo } from '@/config/business-info'
import { translations } from '@/config/translations'
import { cn } from '@/lib/utils'

// ─── Inline SVG icons (no external icon library needed) ───────────────────────

function IconWhatsapp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}

function IconMessageCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  )
}

// ─── Simple avatar — initials fallback, no external dependency ─────────────────

function ContactAvatar({ name, imageUrl }: { name: string; imageUrl?: string }) {
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(n => n[0])
    .join('')
    .toUpperCase()

  return (
    <div className="relative size-10 rounded-full border border-border bg-muted overflow-hidden flex items-center justify-center shrink-0">
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" loading="lazy" />
      ) : (
        <span className="text-xs font-bold text-muted-foreground select-none">{initials}</span>
      )}
    </div>
  )
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface WhatsAppContact {
  name: string
  department: string
  phone: string
  message?: string
  imageUrl?: string
}

interface WhatsAppWidgetProps {
  locale?: string
}

// ─── Widget ──────────────────────────────────────────────────────────────────

export function WhatsAppWidget({ locale = 'es' }: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const widgetRef = useRef<HTMLDivElement>(null)

  const lang = (locale === 'en' ? 'en' : 'es') as 'es' | 'en'
  const t = translations[lang].whatsappWidget

  // Build contacts: use whatsappContacts if defined, otherwise fall back to single contact
  const rawContacts =
    businessInfo.whatsappContacts && businessInfo.whatsappContacts.length > 0
      ? businessInfo.whatsappContacts
      : [
          {
            name: businessInfo.brand.name,
            department: businessInfo.brand.shortDescription,
            phone: businessInfo.contact.whatsapp.replace(/[^\d]/g, ''),
            message: businessInfo.contact.whatsappMessage,
          },
        ];

  const contacts: WhatsAppContact[] = rawContacts.map((contact) => ({
    ...contact,
    department: t.department || contact.department,
  }));

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div
      ref={widgetRef}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none"
    >
      {/* ── Popup panel ── */}
      <div
        className={cn(
          'absolute bottom-full mb-4 right-0 w-[calc(100vw-2rem)] sm:w-80 max-w-80 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all duration-300 origin-bottom-right',
          isOpen
            ? 'scale-100 opacity-100 translate-y-0 pointer-events-auto'
            : 'pointer-events-none scale-95 opacity-0 translate-y-2'
        )}
        role="dialog"
        aria-label={t.title}
      >
        {/* Header */}
        <div className="relative overflow-hidden bg-muted/50 p-5 border-b border-border">
          <div className="absolute -right-4 -top-4 size-24 rounded-full bg-[#25D366]/10 blur-2xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1.5">
              <IconWhatsapp className="size-5 text-[#25D366] shrink-0" />
              <h3 className="text-base font-bold text-foreground">{t.title}</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{t.subtitle}</p>
          </div>
        </div>

        {/* Contact list */}
        <div className="p-3 bg-card">
          <div className="space-y-2">
            {contacts.map((contact, idx) => {
              const href = `https://wa.me/${contact.phone}${
                contact.message ? `?text=${encodeURIComponent(contact.message)}` : ''
              }`
              return (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-border/50 bg-background p-3 transition-all hover:border-[#25D366]/30 hover:bg-muted"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative shrink-0">
                      <ContactAvatar name={contact.name} imageUrl={contact.imageUrl} />
                      <span className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-background bg-[#25D366] group-hover:border-muted transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">
                        {contact.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {contact.department}
                      </p>
                    </div>
                  </div>
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full text-[#25D366] opacity-0 group-hover:opacity-100 group-hover:bg-[#25D366]/10 transition-all ml-2">
                    <IconMessageCircle className="size-4" />
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Trigger row: tooltip + button ── */}
      <div className="flex items-center gap-3 pointer-events-none">
        {/* Hover tooltip (desktop only) */}
        {!isOpen && (
          <div
            className={cn(
              'hidden sm:flex flex-col items-end rounded-xl border border-border bg-popover px-4 py-2.5 shadow-lg transition-all duration-300 pointer-events-auto',
              isHovered ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0 pointer-events-none'
            )}
          >
            <p className="text-sm font-semibold text-popover-foreground whitespace-nowrap">{t.helpTooltip}</p>
            <p className="text-xs text-muted-foreground whitespace-nowrap">{t.chatTooltip}</p>
          </div>
        )}

        {/* FAB button */}
        <button
          onClick={() => setIsOpen(prev => !prev)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20b858] text-white shadow-[0_0_20px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border-0 outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 pointer-events-auto"
          aria-label={isOpen ? t.ariaClose : t.ariaOpen}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
        >
          {/* Pulse ring (only when closed) */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-20" />
          )}

          {/* WhatsApp icon */}
          <span className={cn('absolute transition-all duration-300', isOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100')}>
            <IconWhatsapp className="size-6 sm:size-7" />
          </span>

          {/* Close icon */}
          <span className={cn('absolute transition-all duration-300', isOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0')}>
            <IconX className="size-5 sm:size-6" />
          </span>
        </button>
      </div>
    </div>
  )
}
