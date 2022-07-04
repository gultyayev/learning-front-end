import React, { PropsWithChildren } from "react";

export const H1 = ({ children }: PropsWithChildren) => (
  <h1 className="text-4xl mb-8">{children}</h1>
);

export const H2 = ({ children }: PropsWithChildren) => (
  <h2 className="text-3xl mb-6">{children}</h2>
);

export const H3 = ({ children }: PropsWithChildren) => (
  <h2 className="text-2xl mb-4">{children}</h2>
);

export const P = ({ children }: PropsWithChildren) => (
  <p className="mb-4">{children}</p>
);

export const Ul = ({ children }: PropsWithChildren) => (
  <ul className="list-disc mb-4 pl-4">{children}</ul>
);

export const A = ({ children, ...props }: PropsWithChildren) => (
  <a className="underline text-blue-200" target="_blank" {...props}>
    {children}
  </a>
);

export const InlineCode = ({ children }: PropsWithChildren) => (
  <code className="bg-slate-800 py-1 px-1.5 mx-0.5 rounded-sm">{children}</code>
);

export const Code = ({ children }: PropsWithChildren) => (
  <code className="bg-slate-800 p-2 mb-4 rounded-lg block">{children}</code>
);

export const layoutPrimitives = {
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  ul: Ul,
  a: A,
  inlineCode: InlineCode,
  code: Code,
};