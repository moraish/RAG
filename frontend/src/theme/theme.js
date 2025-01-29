const theme = {
    light: {
        colors: {
            primary: {
                main: '#A8D8EA',
                light: '#C5E4F1',
                dark: '#8BBED3',
                contrast: '#2C3E50'
            },
            secondary: {
                main: '#FAE3D9',
                light: '#FFF0EA',
                dark: '#E3CAC0',
                contrast: '#2C3E50'
            },
            accent: {
                main: '#FFBBCC',
                light: '#FFD4E0',
                dark: '#E6A2B8',
                contrast: '#2C3E50'
            },
            success: {
                main: '#C3E6CB',
                light: '#D6EFD9',
                dark: '#A9CEB2',
                contrast: '#2C3E50'
            },
            warning: {
                main: '#FFE5D9',
                light: '#FFF0EA',
                dark: '#E6CCB8',
                contrast: '#2C3E50'
            },
            error: {
                main: '#FFB7B2',
                light: '#FFCCC8',
                dark: '#E69E99',
                contrast: '#FFFFFF'
            },
            neutral: {
                50: '#F8F9FA',
                100: '#F1F3F5',
                200: '#E9ECEF',
                300: '#DEE2E6',
                400: '#CED4DA',
                500: '#ADB5BD',
                600: '#6C757D',
                700: '#495057',
                800: '#343A40',
                900: '#212529'
            },
            background: {
                default: '#FFFFFF',
                paper: '#F8F9FA',
                subtle: '#F1F3F5'
            },
            text: {
                primary: '#2C3E50',
                secondary: '#6C757D',
                disabled: '#ADB5BD'
            }
        },
        spacing: {
            xs: '0.25rem',    // 4px
            sm: '0.5rem',     // 8px
            md: '1rem',       // 16px
            lg: '1.5rem',     // 24px
            xl: '2rem',       // 32px
            '2xl': '2.5rem',  // 40px
            '3xl': '3rem'     // 48px
        },
        radii: {
            none: '0',
            sm: '0.25rem',    // 4px
            md: '0.5rem',     // 8px
            lg: '0.75rem',    // 12px
            xl: '1rem',       // 16px
            full: '9999px'
        },
        shadows: {
            none: 'none',
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
        },
        typography: {
            fontFamily: {
                sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                mono: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace"
            },
            fontSize: {
                xs: '0.75rem',     // 12px
                sm: '0.875rem',    // 14px
                md: '1rem',        // 16px
                lg: '1.125rem',    // 18px
                xl: '1.25rem',     // 20px
                '2xl': '1.5rem',   // 24px
                '3xl': '1.875rem', // 30px
                '4xl': '2.25rem'   // 36px
            },
            fontWeight: {
                normal: 400,
                medium: 500,
                semibold: 600,
                bold: 700
            },
            lineHeight: {
                none: 1,
                tight: 1.25,
                snug: 1.375,
                normal: 1.5,
                relaxed: 1.625,
                loose: 2
            },
            letterSpacing: {
                tight: '-0.025em',
                normal: '0',
                wide: '0.025em'
            }
        },
        transitions: {
            duration: {
                fast: '150ms',
                normal: '250ms',
                slow: '350ms'
            },
            timing: {
                ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
                linear: 'linear',
                easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
                easeOut: 'cubic-bezier(0, 0, 0.2, 1)'
            }
        },
        zIndex: {
            hide: -1,
            auto: 'auto',
            base: 0,
            docked: 10,
            dropdown: 1000,
            sticky: 1100,
            banner: 1200,
            overlay: 1300,
            modal: 1400,
            popover: 1500,
            tooltip: 1600
        }
    },
    dark: {
        colors: {
            primary: {
                main: '#466D81',
                light: '#587D91',
                dark: '#385A6B',
                contrast: '#FFFFFF'
            },
            secondary: {
                main: '#8B6F6A',
                light: '#9C847F',
                dark: '#725A55',
                contrast: '#FFFFFF'
            },
            accent: {
                main: '#8B616D',
                light: '#9C7683',
                dark: '#724F5A',
                contrast: '#FFFFFF'
            },
            success: {
                main: '#5A7D62',
                light: '#6E8F75',
                dark: '#496650',
                contrast: '#FFFFFF'
            },
            warning: {
                main: '#8B7355',
                light: '#9C876A',
                dark: '#725E44',
                contrast: '#FFFFFF'
            },
            error: {
                main: '#8B5D57',
                light: '#9C726C',
                dark: '#724B45',
                contrast: '#FFFFFF'
            },
            neutral: {
                50: '#2D2F34',
                100: '#3E4047',
                200: '#4A4D55',
                300: '#5C5F6A',
                400: '#737780',
                500: '#8C929D',
                600: '#A5ABB6',
                700: '#C0C5CF',
                800: '#DCE0E7',
                900: '#F3F5F7'
            },
            background: {
                default: '#1A1B1E',
                paper: '#2D2F34',
                subtle: '#3E4047'
            },
            text: {
                primary: '#E9ECEF',
                secondary: '#ADB5BD',
                disabled: '#6C757D'
            }
        },
        // All other properties (spacing, radii, typography, etc.) remain the same as light theme
    }
};

export default theme;