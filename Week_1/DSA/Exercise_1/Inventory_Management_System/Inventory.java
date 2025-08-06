package Inventory_Management_System;
import java.util.HashMap;

public class Inventory {
    private HashMap<Integer, Product> products;

    public Inventory() {
        products = new HashMap<>();
    }

    public void addProduct(Product product) {
        products.put(product.productId, product);
        System.out.println("Product added: " + product.productName);
    }

    public void updateProduct(int productId, int quantity, double price) {
        if (products.containsKey(productId)) {
            Product p = products.get(productId);
            p.quantity = quantity;
            p.price = price;
            System.out.println("Product updated: " + p.productName);
        } else {
            System.out.println("Product not found.");
        }
    }

    public void deleteProduct(int productId) {
        if (products.remove(productId) != null) {
            System.out.println("Product deleted.");
        } else {
            System.out.println("Product not found.");
        }
    }

    public void showInventory() {
        for (Product p : products.values()) {
            System.out.println(p);
        }
    }
}
