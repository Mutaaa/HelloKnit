import type { SVGProps } from 'react';

export const YarnIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M11.8 3.5c-2.3.2-4.2 2-4.3 4.3" />
    <path d="M12.2 20.5c2.3-.2 4.2-2 4.3-4.3" />
    <path d="M20.5 12.2c.2-2.3-1.5-4.4-3.8-4.7" />
    <path d="M3.5 11.8c-.2 2.3 1.5 4.4 3.8 4.7" />
    <path d="M8.5 6.4c-1.2.8-2 2-2.1 3.4" />
    <path d="M15.5 17.6c1.2-.8 2-2 2.1-3.4" />
    <path d="M17.6 8.5c.8 1.2 1.1 2.7.8 4.1" />
    <path d="M6.4 15.5c-.8-1.2-1.1-2.7-.8-4.1" />
    <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
  </svg>
);

export const NeedlesIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
        <path d="M2 22l5-5" />
        <path d="M7 17l2.5-2.5" />
        <path d="M14 10l2.5-2.5" />
        <path d="M21 3l-5 5" />
        <path d="M22 2L17 7" />
        <path d="M3 21l2.5-2.5" />
        <path d="M10 14l2.5-2.5" />
        <path d="M17 7l5-5" />
    </svg>
);

export const Logo = () => (
  <div className="flex items-center gap-2.5 font-headline text-lg font-semibold text-foreground">
    <div className="rounded-lg bg-primary p-1.5">
        <YarnIcon className="h-5 w-5 text-primary-foreground" />
    </div>
    <span>HelloKnit</span>
  </div>
);
