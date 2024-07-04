"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBuilder = void 0;
class QueryBuilder {
    constructor(modelQuery, query) {
        this.isSearching = false;
        this.modelQuery = modelQuery;
        this.query = query;
    }
    searching() {
        var _a;
        const searchTerm = (_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.searchTerm;
        const searchableFields = ["name"];
        if (searchTerm) {
            this.isSearching = true;
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map((item) => ({
                    [item]: { $regex: searchTerm, $options: "i" },
                })),
            });
        }
        return this;
    }
}
exports.QueryBuilder = QueryBuilder;
