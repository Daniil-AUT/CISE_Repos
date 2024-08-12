import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getArticles(): any[];
    getArticlesById(id: string): any;
    createArticle(article: any): any;
    deleteArticle(id: string): any;
    updateArticle(id: string, updatedArticle: any): any;
}
