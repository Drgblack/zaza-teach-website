import type { MDXComponents } from 'mdx/types';
import Callout from "@/components/blog/Callout";
import Tip from "@/components/blog/Tip";
import Quote from "@/components/blog/Quote";
import KeyTakeaways from "@/components/blog/KeyTakeaways";
import Figure from "@/components/blog/Figure";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    Tip,
    Quote,
    KeyTakeaways,
    Figure,
    ...components,
  };
}