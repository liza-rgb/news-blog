interface LaunchProps {
  id: string;
  provider: string;
}

interface EventProps {
  id: string;
  provider: string;
}

export interface ArticleProps {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  launches: LaunchProps[];
  events: EventProps[];
}
