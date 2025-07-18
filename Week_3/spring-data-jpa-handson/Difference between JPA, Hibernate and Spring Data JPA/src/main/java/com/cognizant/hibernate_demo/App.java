package com.cognizant.hibernate_demo;

import org.hibernate.Session;
import org.hibernate.Transaction;

public class App {
    public static void main(String[] args) {
        // Create a new Employee object
        Employee employee = new Employee("Alice", 65000.0);

        
        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction transaction = null;

        try {
            
            transaction = session.beginTransaction();

            session.save(employee);

            transaction.commit();

            System.out.println("Employee saved with ID: " + employee.getId());
        } catch (Exception e) {
            if (transaction != null) transaction.rollback();
            e.printStackTrace();
        } finally {
            session.close();
        }

      
        HibernateUtil.shutdown();
    }
}
