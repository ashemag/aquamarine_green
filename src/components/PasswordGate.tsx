'use client';

import { useState, type ReactNode } from 'react';

interface PasswordGateProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export default function PasswordGate({ children, title, subtitle }: PasswordGateProps) {
  const [password, setPassword] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase().trim() === 'lilyschwabe') {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
  };

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm text-center">
        {/* Diamond mark */}
        <div className="flex justify-center mb-8">
          <div className="w-3 h-3 bg-seafoam rotate-45" />
        </div>

        {title && (
          <h1 className="font-display text-2xl md:text-3xl text-charcoal mb-2">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="font-body text-charcoal/40 text-xs tracking-[0.2em] uppercase mb-10">
            {subtitle}
          </p>
        )}

        {!title && !subtitle && (
          <p className="font-body text-charcoal/40 text-xs tracking-[0.2em] uppercase mb-10">
            Private Presentation
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className={shaking ? 'animate-shake' : ''}>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Enter password"
              className={`flex h-11 w-full rounded-md border bg-white px-4 py-3 font-body text-sm text-charcoal text-center placeholder:text-charcoal/30 outline-none transition-colors ${error
                  ? 'border-coral/60 focus:border-coral/80'
                  : 'border-charcoal/10 focus:border-charcoal/30'
                }`}
              autoFocus
            />
          </div>

          {error && (
            <p className="font-body text-coral text-xs tracking-wide">
              Incorrect password
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-charcoal text-white font-body text-xs tracking-[0.15em] uppercase px-6 py-3 hover:bg-seafoam hover:text-charcoal transition-colors"
          >
            View Presentation
          </button>
        </form>

        <div className="mt-12 h-px bg-charcoal/5" />
        <p className="mt-4 font-body text-charcoal/20 text-[10px] tracking-[0.15em] uppercase">
          Aquamarine Green
        </p>
      </div>
    </div>
  );
}
