import express, { Request, Response } from 'express';

export const category = (req: Request, res: Response) => {
  res.render("admin/pages/article-category", {
    pageTitle: "Quản lý danh mục bài viết"
  });
}
export const createCategory = (req: Request, res: Response) => {
  res.render("admin/pages/article-create-category", {
    pageTitle: "Tạo danh mục bài viết"
  });
}
