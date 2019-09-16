import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAvailableTags, IBaseStory, IResultList, IBaseStoryType, IHackerNews, Hit, IStory } from 'interfaces';
import { forkJoin, Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  BASE_URL = 'https://hacker-news.firebaseio.com/v0';

  BASE_URL_ALGOLIA = 'https://hn.algolia.com/api/v1';

  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * To get newest stories
   */
  getStories(page: number = 1, pageSize: number = 20, type = IBaseStoryType.TOP): Observable<IResultList> {
    return this.http.get<any>(`${this.BASE_URL}/${type}.json?print=pretty`).pipe(
      mergeMap((ids) => forkJoin([ of(ids.length), ...ids.slice((page - 1) * pageSize, page * pageSize).map(id => this.getStory(id)) ])),
      map(data => {
        return {
          total: data[ 0 ],
          data : data.slice(1)
        };
      })
    );
  }

  /**
   * To get story detail (comments)
   */
  getStory(itemId: number): Observable<IBaseStory> {
    return this.http.get<IBaseStory>(`${this.BASE_URL}/item/${itemId}.json?print=pretty`);
  }

  /**
   *
   * @param query: 查询内容
   * @param page: 当前页码
   * @param pageSize: 每页显示数目
   * @param sortType: 排序方式，常规或最新
   * @param tags: 结果类型
   */
  getStoriesByAlgolia(query = '', page = 1, pageSize = 20, sortType: 'search' | 'search_by_date' = 'search', tags = IAvailableTags.STORY): Observable<IHackerNews> {
    const params = new HttpParams().append('tags', tags).append('page', page.toString()).append('hitsPerPage', pageSize.toString());
    if (query) {
      params.append('query', query);
    }
    return this.http.get<IHackerNews>(`${this.BASE_URL_ALGOLIA}/${sortType}`, { params, responseType: 'json' });
  }

  getStoryByAlgolia(itemId: number): Observable<IStory> {
    return this.http.get<IStory>(`${this.BASE_URL_ALGOLIA}/items/${itemId}`);
  }

}
