package Example;

import static org.junit.Assert.*;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class Calculatortest2 {

    private calculator calc;

    @Before
    public void setUp() {
        calc = new calculator(); // Arrange
        System.out.println("Setup: calculator object created.");
    }

    @After
    public void tearDown() {
        calc = null;
        System.out.println("Teardown: calculator object cleaned up.");
    }

    @Test
    public void testAdd() {
        // Act
        int result = calc.add(10, 5);

        // Assert
        assertEquals(15, result);
    }

    @Test
    public void testSubtract() {
        // Act
        int result = calc.subtract(8, 3);

        // Assert
        assertEquals(5, result);
    }

    @Test
    public void testAssertionsExample() {
        // Arrange
        String message = null;

        // Assert
        assertTrue(4 < 9);
        assertFalse(4 > 9);
        assertNull(message);
        assertNotNull(new Object());
        assertEquals(20, 10 + 10);
    }
}

