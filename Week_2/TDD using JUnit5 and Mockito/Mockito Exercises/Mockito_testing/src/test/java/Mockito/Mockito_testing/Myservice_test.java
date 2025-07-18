package Mockito.Mockito_testing;

import static org.mockito.Mockito.*;
import static org.junit.Assert.*;

import org.junit.Test;
import org.mockito.Mockito;

public class Myservice_test {

    @Test
    public void testExternalApi() {
        
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");
        Myservice service = new Myservice(mockApi);
        String result = service.fetchData();
        assertEquals("Mock Data", result);
        
    }
}
