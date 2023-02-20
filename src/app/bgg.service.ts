import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Subject } from "rxjs";
import { Game } from "./models";

const BACKEND = 'http://localhost:8085';

//Remember to include 'https://' when copying the backend link from railway
//const BACKEND = 'https://deploymenttestapp-production.up.railway.app'


@Injectable()
export class BGGService {

    onSearchResults = new Subject<Game>();
    onSearchQuery = new Subject<string>();

    constructor(private http: HttpClient){};


    searchGameByRanking(ranking: string): Promise<Game> {
        this.onSearchQuery.next(ranking);

        const params = new HttpParams().set("ranking", ranking);

        return firstValueFrom(
            this.http.get<Game>(`${BACKEND}/api/getbgg/rankingzxc`, { params })
          ).then(results => {
            this.onSearchResults.next(results)
            return results;
          })
    }
}