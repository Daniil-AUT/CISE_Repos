"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const articles_1 = require("./dummydata/articles");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    getArticles() {
        return articles_1.ARTICLES;
    }
    getArticlesById(id) {
        return articles_1.ARTICLES.find((n) => n._id === id);
    }
    createArticle(article) {
        articles_1.ARTICLES.push(article);
        return article;
    }
    deleteArticle(id) {
        const index = articles_1.ARTICLES.findIndex((n) => n._id === id);
        if (index === -1) {
            return { message: 'Article not found' };
        }
        const deletedArticle = articles_1.ARTICLES.splice(index, 1);
        return deletedArticle;
    }
    updateArticle(id, updatedArticle) {
        const index = articles_1.ARTICLES.findIndex((n) => n._id === id);
        if (index === -1) {
            return { message: 'Article not found' };
        }
        articles_1.ARTICLES[index] = { ...articles_1.ARTICLES[index], ...updatedArticle };
        return articles_1.ARTICLES[index];
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('/api/articles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getArticles", null);
__decorate([
    (0, common_1.Get)('/api/articles/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "getArticlesById", null);
__decorate([
    (0, common_1.Post)('/api/articles'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "createArticle", null);
__decorate([
    (0, common_1.Delete)('/api/articles/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], AppController.prototype, "deleteArticle", null);
__decorate([
    (0, common_1.Put)('/api/articles/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Object)
], AppController.prototype, "updateArticle", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map