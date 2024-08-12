import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ARTICLES } from './dummydata/articles';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/articles')
  getArticles(): any[] {
    return ARTICLES;
  }

  @Get('/api/articles/:id')
  getArticlesById(@Param('id') id: string): any {
    return ARTICLES.find((n) => n._id === id);
  }

  @Post('/api/articles')
  createArticle(@Body() article: any): any {
    ARTICLES.push(article);
    return article;
  }

  @Delete('/api/articles/:id')
  deleteArticle(@Param('id') id: string): any {
    const index = ARTICLES.findIndex((n) => n._id === id);
    if (index === -1) {
      return { message: 'Article not found' };
    }
    const deletedArticle = ARTICLES.splice(index, 1);
    return deletedArticle;
  }
  
  @Put('/api/articles/:id')
  updateArticle(@Param('id') id: string, @Body() updatedArticle: any): any {
    const index = ARTICLES.findIndex((n) => n._id === id);
    if (index === -1) {
      return { message: 'Article not found' };
    }
    ARTICLES[index] = { ...ARTICLES[index], ...updatedArticle };
    return ARTICLES[index];
  }
}
