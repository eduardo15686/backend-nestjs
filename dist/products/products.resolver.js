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
exports.ProductsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const products_service_1 = require("./products.service");
const create_product_dto_1 = require("./dtos/create-product.dto");
const edit_product_1 = require("./dtos/edit-product");
const graphql_subscriptions_1 = require("graphql-subscriptions");
const product_schema_1 = require("./schemas/product.schema");
const pubSub = new graphql_subscriptions_1.PubSub();
let ProductsResolver = class ProductsResolver {
    constructor(productService) {
        this.productService = productService;
    }
    async getProducts() {
        return this.productService.getProducts();
    }
    async getProductById(_id) {
        return this.productService.getProductById(_id);
    }
    async getProductsByUser(_id) {
        return this.productService.getProductsByUser(_id);
    }
    createProduct(createProduct) {
        const newProduct = this.productService.createProduct(createProduct);
        pubSub.publish('productAdded', { productAdded: newProduct });
        return newProduct;
    }
    updateProduct(updateProduct) {
        return this.productService.updateProduct(updateProduct);
    }
    productAdded() {
        return pubSub.asyncIterator('productAdded');
    }
};
exports.ProductsResolver = ProductsResolver;
__decorate([
    (0, graphql_1.Query)((returns) => [product_schema_1.Product]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "getProducts", null);
__decorate([
    (0, graphql_1.Query)((returns) => product_schema_1.Product),
    __param(0, (0, graphql_1.Args)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "getProductById", null);
__decorate([
    (0, graphql_1.Query)((returns) => [product_schema_1.Product]),
    __param(0, (0, graphql_1.Args)('getProductsByUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "getProductsByUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_schema_1.Product),
    __param(0, (0, graphql_1.Args)('createProduct')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProduct]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "createProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_schema_1.Product),
    __param(0, (0, graphql_1.Args)('updateProduct')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edit_product_1.UpdateProduct]),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "updateProduct", null);
__decorate([
    (0, graphql_1.Subscription)((returns) => product_schema_1.Product),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsResolver.prototype, "productAdded", null);
exports.ProductsResolver = ProductsResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsResolver);
//# sourceMappingURL=products.resolver.js.map