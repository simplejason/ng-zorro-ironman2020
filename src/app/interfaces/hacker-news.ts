// ======== hacker news official =========
export interface IResultList {
  total: number;
  data: IStory[];
}

export interface IBaseStory {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export enum IBaseStoryType {
  TOP    = 'topstories',
  NEWEST = 'newstories',
  BEST   = 'beststories',
  ASK    = 'askstories',
  SHOW   = 'showstories',
  JOBS   = 'jobstories'
}

// ============ Algolia hacker news ================
export enum IAvailableTags {
  STORY   = 'story',
  COMMENT = 'comment',
  POLL    = 'poll',
  SHOW    = 'show_hn',
  ASK     = 'ask_hn'
}

/**
 * For Story Summary
 */
export interface Title {
  value: string;
  matchLevel: string;
  fullyHighlighted: boolean;
  matchedWords: string[];
}

export interface Url {
  value: string;
  matchLevel: string;
  fullyHighlighted: boolean;
  matchedWords: string[];
}

export interface Author {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface HighlightResult {
  title: Title;
  url: Url;
  author: Author;
}

export interface Hit {
  created_at: Date;
  title: string;
  url: string;
  author: string;
  points: number;
  story_text?: any;
  comment_text?: any;
  num_comments: number;
  story_id?: any;
  story_title?: any;
  story_url?: any;
  parent_id?: any;
  created_at_i: number;
  relevancy_score: number;
  _tags: IAvailableTags[];
  objectID: string;
  _highlightResult: HighlightResult;
}

export interface IHackerNews {
  hits: Hit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  processingTimeMS: number;
  exhaustiveNbHits: boolean;
  query: string;
  params: string;
}


/**
 * For story detail
 */
export interface IReplyComment {
  id: number;
  created_at: Date;
  created_at_i: number;
  type: string;
  author: string;
  title?: any;
  url?: any;
  text: string;
  points?: any;
  parent_id: number;
  story_id: number;
  children: IReplyComment[];
  options: any[];
}

export interface IStory {
  id: number;
  created_at: Date;
  created_at_i: number;
  type: string;
  author: string;
  title: string;
  url: string;
  text?: any;
  points: number;
  parent_id?: any;
  story_id?: any;
  children: IReplyComment[];
  options: any[];
}


