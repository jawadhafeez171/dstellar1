"use client";
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface LoginModalProps {
  onClose: () => void;
}

const LABELS: Record<string, Record<string, string>> = {
  en: {
    title: 'Welcome back',
    subtitle: 'Sign in to your Dstellar account',
    email: 'Email address',
    password: 'Password',
    forgot: 'Forgot password?',
    submit: 'Sign In',
    or: 'or continue with',
    noAccount: "Don't have an account?",
    signup: 'Request access',
    emailPlaceholder: 'you@company.com',
    passwordPlaceholder: '••••••••',
    submitting: 'Signing in…',
  },
  es: {
    title: 'Bienvenido de nuevo',
    subtitle: 'Inicia sesión en tu cuenta Dstellar',
    email: 'Correo electrónico',
    password: 'Contraseña',
    forgot: '¿Olvidaste tu contraseña?',
    submit: 'Iniciar Sesión',
    or: 'o continuar con',
    noAccount: '¿No tienes cuenta?',
    signup: 'Solicitar acceso',
    emailPlaceholder: 'tu@empresa.com',
    passwordPlaceholder: '••••••••',
    submitting: 'Iniciando sesión…',
  },
  zh: {
    title: '欢迎回来',
    subtitle: '登录您的 Dstellar 账户',
    email: '电子邮箱',
    password: '密码',
    forgot: '忘记密码？',
    submit: '登录',
    or: '或通过以下方式登录',
    noAccount: '还没有账户？',
    signup: '申请访问',
    emailPlaceholder: 'you@company.com',
    passwordPlaceholder: '••••••••',
    submitting: '登录中…',
  },
  de: {
    title: 'Willkommen zurück',
    subtitle: 'Melden Sie sich bei Ihrem Dstellar-Konto an',
    email: 'E-Mail-Adresse',
    password: 'Passwort',
    forgot: 'Passwort vergessen?',
    submit: 'Anmelden',
    or: 'oder weiter mit',
    noAccount: 'Noch kein Konto?',
    signup: 'Zugang anfordern',
    emailPlaceholder: 'sie@firma.de',
    passwordPlaceholder: '••••••••',
    submitting: 'Anmelden…',
  },
  fr: {
    title: 'Bon retour',
    subtitle: 'Connectez-vous à votre compte Dstellar',
    email: 'Adresse e-mail',
    password: 'Mot de passe',
    forgot: 'Mot de passe oublié ?',
    submit: 'Se connecter',
    or: 'ou continuer avec',
    noAccount: 'Pas encore de compte ?',
    signup: "Demander l'accès",
    emailPlaceholder: 'vous@entreprise.fr',
    passwordPlaceholder: '••••••••',
    submitting: 'Connexion…',
  },
  ja: {
    title: 'おかえりなさい',
    subtitle: 'Dstellarアカウントにサインイン',
    email: 'メールアドレス',
    password: 'パスワード',
    forgot: 'パスワードをお忘れですか？',
    submit: 'サインイン',
    or: 'または以下でサインイン',
    noAccount: 'アカウントをお持ちでない方は',
    signup: 'アクセスを申請する',
    emailPlaceholder: 'you@company.com',
    passwordPlaceholder: '••••••••',
    submitting: 'サインイン中…',
  },
};

export function LoginModal({ onClose }: LoginModalProps) {
  const { language } = useLanguage();
  const L = LABELS[language] ?? LABELS['en'];

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [shake, setShake] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  // Focus email on open
  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setShake(true);
      setTimeout(() => setShake(false), 600);
      return;
    }
    setSubmitting(true);
    // Simulate async auth call
    await new Promise(r => setTimeout(r, 1400));
    setSubmitting(false);
    // Reset (in production this would redirect / set session)
    onClose();
  };

  return (
    <div
      className="login-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Login"
    >
      <div className={`login-modal ${shake ? 'login-modal--shake' : ''}`}>
        {/* Close */}
        <button className="login-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Logo mark */}
        <div className="login-logo-wrap">
          <div className="login-logo-glow" />
          <svg viewBox="0 0 48 48" width="40" height="40" className="login-logo-icon">
            <defs>
              <linearGradient id="lgLogin" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4a3aff"/>
                <stop offset="100%" stopColor="#00d4c8"/>
              </linearGradient>
            </defs>
            <circle cx="24" cy="24" r="22" fill="url(#lgLogin)" opacity="0.15"/>
            <path d="M24 6 L28 20 L42 20 L31 29 L35 43 L24 34 L13 43 L17 29 L6 20 L20 20 Z"
              fill="url(#lgLogin)"/>
          </svg>
        </div>

        <h2 className="login-title">{L.title}</h2>
        <p className="login-subtitle">{L.subtitle}</p>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          {/* Email */}
          <div className="login-field">
            <label className="login-label" htmlFor="login-email">{L.email}</label>
            <div className="login-input-wrap">
              <svg className="login-input-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 8l10 7 10-7"/>
              </svg>
              <input
                ref={emailRef}
                id="login-email"
                type="email"
                className="login-input"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={L.emailPlaceholder}
                autoComplete="email"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="login-field">
            <div className="login-label-row">
              <label className="login-label" htmlFor="login-password">{L.password}</label>
              <button type="button" className="login-forgot">{L.forgot}</button>
            </div>
            <div className="login-input-wrap">
              <svg className="login-input-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="11" width="14" height="10" rx="2"/>
                <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
              </svg>
              <input
                id="login-password"
                type={showPass ? 'text' : 'password'}
                className="login-input"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder={L.passwordPlaceholder}
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="login-show-pass"
                onClick={() => setShowPass(v => !v)}
                aria-label={showPass ? 'Hide password' : 'Show password'}
              >
                {showPass ? (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`login-submit ${submitting ? 'login-submit--loading' : ''}`}
            disabled={submitting}
          >
            {submitting ? (
              <>
                <span className="login-spinner" />
                {L.submitting}
              </>
            ) : L.submit}
          </button>
        </form>

        {/* Divider */}
        <div className="login-divider">
          <span>{L.or}</span>
        </div>

        {/* Social */}
        <div className="login-social">
          <button type="button" className="login-social-btn" aria-label="Sign in with Google">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Google
          </button>
          <button type="button" className="login-social-btn" aria-label="Sign in with Microsoft">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="#F25022" d="M1 1h10v10H1z"/>
              <path fill="#00A4EF" d="M13 1h10v10H13z"/>
              <path fill="#7FBA00" d="M1 13h10v10H1z"/>
              <path fill="#FFB900" d="M13 13h10v10H13z"/>
            </svg>
            Microsoft
          </button>
        </div>

        {/* Sign up link */}
        <p className="login-signup-row">
          {L.noAccount}&nbsp;
          <a href="#" className="login-signup-link">{L.signup}</a>
        </p>
      </div>
    </div>
  );
}
