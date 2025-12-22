// Theme toggle utility
export function initTheme() {
  // Check for saved theme preference or default to light mode
  const savedTheme = typeof window !== 'undefined' 
    ? localStorage.getItem('theme') || 'light'
    : 'light';
  
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
}

export function toggleTheme() {
  if (typeof document === 'undefined' || typeof window === 'undefined') return;
  
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  // Use View Transition API if available for smooth transition
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  } else {
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }
  
  return newTheme;
}

export function getTheme(): 'light' | 'dark' {
  if (typeof document === 'undefined') return 'light';
  return (document.documentElement.getAttribute('data-theme') || 'light') as 'light' | 'dark';
}

