import { useOrderModal } from '../context/OrderModalContext'

// WhatsApp SVG icon (official brand green kept neutral — button colour is controlled by parent)
function WhatsAppIcon({ size = 18 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.65 4.897 1.885 7.02L2 30l7.18-1.857A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.455a11.41 11.41 0 0 1-5.82-1.594l-.418-.248-4.26 1.102 1.13-4.14-.272-.432A11.41 11.41 0 0 1 4.545 16c0-6.32 5.138-11.455 11.458-11.455S27.455 9.68 27.455 16c0 6.318-5.135 11.455-11.452 11.455zm6.28-8.573c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.022-.53.15-.702.155-.154.344-.4.516-.6.172-.2.23-.344.344-.573.115-.23.058-.43-.028-.602-.086-.172-.776-1.87-1.063-2.56-.28-.672-.564-.58-.776-.59l-.66-.012c-.23 0-.602.086-.917.43-.316.344-1.205 1.177-1.205 2.87s1.233 3.33 1.405 3.56c.172.23 2.428 3.71 5.882 5.203.822.355 1.464.567 1.964.726.825.263 1.576.226 2.17.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.143-.316-.23-.66-.4z" />
    </svg>
  )
}

/**
 * Reusable WhatsApp Order Button
 *
 * Props:
 *  product   – { name, price }  (required)
 *  size      – 'sm' | 'md' | 'lg'  (default 'md')
 *  fullWidth – boolean (default false)
 *  label     – override button text
 */
function WhatsAppButton({ product, size = 'md', fullWidth = false, label }) {
  const { openOrderModal } = useOrderModal()
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-2.5',
  }

  const iconSize = { sm: 15, md: 18, lg: 20 }

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        openOrderModal(product)
      }}
      className={[
        // base
        'group relative inline-flex items-center justify-center overflow-hidden',
        'rounded-full font-semibold tracking-wide',
        'bg-black text-white',
        // hover → gold
        'transition-all duration-300 ease-out',
        'hover:bg-gold hover:text-black hover:scale-105',
        // active press
        'active:scale-95',
        // shadow
        'shadow-md hover:shadow-[0_6px_20px_rgba(212,175,55,0.45)]',
        sizeClasses[size] ?? sizeClasses.md,
        fullWidth ? 'w-full' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label={`Order ${product?.name ?? 'product'} on WhatsApp`}
    >
      {/* ripple layer */}
      <span
        aria-hidden="true"
        className="absolute inset-0 scale-0 rounded-full bg-white/20 transition-transform duration-500 group-active:scale-150 group-active:opacity-0"
      />

      <WhatsAppIcon size={iconSize[size] ?? 18} />
      <span>{label ?? 'Order on WhatsApp'}</span>
    </button>
  )
}

export default WhatsAppButton
