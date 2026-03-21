import { getLanguage } from '../../hooks/useServerTheme';

interface MDXContentServerProps {
  slug: string;
}

export default async function MDXContentServer({ slug }: MDXContentServerProps) {
  const language = await getLanguage();
  
  // Server-side MDX content loading
  let Content;
  try {
    if (language === 'ko') {
      Content = (await import(`../../contents/${slug}.mdx`)).default;
    } else {
      Content = (await import(`../../contents/${slug}En.mdx`)).default;
    }
  } catch (error) {
    return <div>Content not found</div>;
  }

  return <Content />;
}
