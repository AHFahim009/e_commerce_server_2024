import { FilterQuery, Query } from "mongoose";

export class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;
  public isSearching: boolean = false;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  searching() {
    const searchTerm = this?.query?.searchTerm;
    const searchableFields = ["name"];
    if (searchTerm) {
      this.isSearching = true;
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map(
          (item: string) =>
          ({
            [item]: { $regex: searchTerm, $options: "i" },
          } as FilterQuery<T>)
        ),
      });
    }
    return this;
  }
}
