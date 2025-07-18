package Example;

import static org.junit.Assert.*;
import org.junit.Test;

public class Calculatortest {

	@Test
	public void testAdd() {
        calculator calc = new calculator();
        assertEquals(5, calc.add(2, 3));
    }

    @Test
    public void testSubtract() {
        calculator calc = new calculator();
        assertEquals(1, calc.subtract(4, 3));
    }
    //Exercise 3: Assertion
    @Test
    public void testAssertionsExamples() {
        // Assert true
        assertTrue(5 > 3);

        // Assert false
        assertFalse(3 > 5);

        // Assert null
        String str = null;
        assertNull(str);

        // Assert not null
        Object obj = new Object();
        assertNotNull(obj);

        // Assert equals
        assertEquals(7, 4 + 3);
    }

}
