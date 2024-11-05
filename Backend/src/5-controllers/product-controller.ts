import express, { Request, Response, NextFunction } from "express";
import { StatusCode } from "../3-models/enums";
import { securityMiddleware } from "../6-middleware/security-middleware";
import { fileSaver } from "uploaded-file-saver";

// Product controller - listening to product requests:
class ProductController {
  // Creating a router object:
  public readonly router = express.Router();

  // Register routes:
  public constructor() {
    this.router.get("/products", this.getAllProducts);
  }

  // Get all products:
  private async getAllProducts(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      //   console.log("Getting all products from the database...");
      //   const products = await productService.getAllProducts();
      //   response.json(products);
    } catch (err: any) {
      next(err); // Go to catchAll middleware!
    }
  }
}

export const productController = new ProductController();
