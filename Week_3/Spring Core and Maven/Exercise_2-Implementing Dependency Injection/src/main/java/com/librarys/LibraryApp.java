package com.librarys;
import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryApp {
    public static void main(String[] args) {
        // Load Spring context
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get bookService bean
        BookService bookService = (BookService) context.getBean("bookService");

        // Test method
        bookService.displayBook();  // Should print the book title from BookRepository
    }
}