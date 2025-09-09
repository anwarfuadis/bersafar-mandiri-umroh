
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Bersafar custom colors
				sand: {
					DEFAULT: '#F5F1E6',
					50: '#FEFCF8',
					100: '#F5F1E6',
					200: '#EDE6D4',
					300: '#E4DAC2',
					400: '#DCCEB0',
					500: '#D3C29E'
				},
				spiritual: {
					DEFAULT: '#1F283B',
					50: '#f8f9fa',
					100: '#f1f3f4',
					200: '#e8eaed',
					300: '#dadce0',
					400: '#bdc1c6',
					500: '#9aa0a6',
					600: '#5f6368',
					700: '#3c4043',
					800: '#202124',
					900: '#1F283B'
				},
				gold: {
					'50': '#fef9f0',
					'100': '#fef3e2',
					'200': '#fce7c6',
					'300': '#f9d3a2',
					'400': '#E1BD7C',
					'500': '#D4A862',
					'600': '#B8954D',
					'700': '#9e7c3e',
					'800': '#826135',
					'900': '#6b4f2e',
				},
				bersafar: {
					'50': '#f0fdfa',
					'100': '#ccfbf1',
					'200': '#99f6e4',
					'300': '#5eead4',
					'400': '#2dd4bf',
					'500': '#1DB584',
					'600': '#16a085',
					'700': '#138f7a',
					'800': '#0f766e',
					'900': '#134e4a',
					primary: '#1DB584',
					secondary: '#16a085',
					dark: '#138f7a',
					light: '#48d4aa',
					accent: '#0d9488',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'pulse-gentle': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite'
			},
			fontFamily: {
				sans: ["Poppins", "system-ui", "sans-serif"],
				poppins: ["Poppins", "system-ui", "sans-serif"],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
