package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private String serviceName; // Constructor-injected
    private BookRepository bookRepository; // Setter-injected

    // Constructor Injection
    public BookService(String serviceName) {
        this.serviceName = serviceName;
    }

    // Setter Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayServiceDetails() {
        System.out.println("Service Name: " + serviceName);
        if (bookRepository != null) {
            bookRepository.displayRepository();
        } else {
            System.out.println("BookRepository not injected.");
        }
    }
}
