package Inventory_Management_System;
public class Main {
    public static void main(String[] args) {
        Inventory inventory = new Inventory();

        Product p1 = new Product(101, "Mouse", 50, 299.99);
        Product p2 = new Product(102, "Keyboard", 30, 499.99);

        inventory.addProduct(p1);
        inventory.addProduct(p2);

        inventory.updateProduct(101, 45, 279.99);
        inventory.deleteProduct(102);

        inventory.showInventory();
    }
}
