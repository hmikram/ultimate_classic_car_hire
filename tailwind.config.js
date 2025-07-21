module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B2951", // navy-900 - Deep navy for authority and trust-building
        secondary: "#F8F6F0", // cream-50 - Warm cream for testimonial backgrounds
        accent: "#D4AF37", // gold-500 - Classic gold for CTAs and premium indicators
        background: "#FFFFFF", // white - Pure white for maximum content clarity
        surface: "#F5F5F5", // gray-100 - Light gray for subtle section separation
        text: {
          primary: "#2C3E50", // slate-700 - High contrast dark blue-gray for scanning
          secondary: "#6C757D", // gray-500 - Medium gray for supporting information
        },
        success: "#28A745", // green-600 - Green for form confirmations only
        warning: "#FF6B35", // orange-500 - Warm orange for scarcity indicators
        error: "#DC3545", // red-600 - Red for form validation feedback
        border: {
          light: "#E9ECEF", // gray-200 - Minimal borders for form fields and sections
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'cta': '0 4px 12px rgba(212, 175, 55, 0.25)',
        'cta-hover': '0 6px 16px rgba(212, 175, 55, 0.35)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
      transitionDuration: {
        '200': '200ms',
        '250': '250ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}