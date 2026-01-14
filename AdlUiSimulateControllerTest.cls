@isTest
private class AdlUiSimulateControllerTest {
    
    @TestSetup
    static void setupTestData() {
        // Create test data library
        Data_Library__c testLibrary = new Data_Library__c(
            Name = 'Test ADL UI Simulate',
            API_Name__c = 'test_adl_UI_Simulate',
            Data_Space__c = 'Default',
            Data_Type__c = 'Files',
            Unstructured_Data_Model__c = 'test_adi_name_sidno',
            Status__c = 'In Progress',
            Description__c = 'Test data library for ADL UI simulation'
        );
        insert testLibrary;
        
        // Create test file records
        List<Data_Library_File__c> testFiles = new List<Data_Library_File__c>();
        for (Integer i = 0; i < 5; i++) {
            testFiles.add(new Data_Library_File__c(
                Data_Library__c = testLibrary.Id,
                Name = 'Test File ' + i,
                File_Size__c = '100 KB',
                Status__c = 'Uploaded'
            ));
        }
        insert testFiles;
    }
    
    @isTest
    static void testSaveDataLibrary() {
        Test.startTest();
        
        List<AdlUiSimulateController.FileWrapper> files = new List<AdlUiSimulateController.FileWrapper>();
        AdlUiSimulateController.FileWrapper file1 = new AdlUiSimulateController.FileWrapper();
        file1.name = 'Test Manual.pdf';
        file1.size = '250 KB';
        file1.documentId = '069000000000001';
        files.add(file1);
        
        String filesJson = JSON.serialize(files);
        String result = AdlUiSimulateController.saveDataLibrary(
            'Default', 
            'Files', 
            'test_model',
            filesJson
        );
        
        Test.stopTest();
        
        AdlUiSimulateController.ResponseWrapper response = 
            (AdlUiSimulateController.ResponseWrapper) JSON.deserialize(
                result, 
                AdlUiSimulateController.ResponseWrapper.class
            );
        
        System.assert(response.success, 'Save should succeed');
        System.assertNotEquals(null, response.recordId, 'Record ID should be returned');
        
        // Verify data library was created
        List<Data_Library__c> libraries = [SELECT Id FROM Data_Library__c WHERE API_Name__c = 'adl_UI_Simulate'];
        System.assertEquals(1, libraries.size(), 'Data library should be created');
    }
    
    @isTest
    static void testGetDataLibrary() {
        Data_Library__c testLibrary = [SELECT Id FROM Data_Library__c LIMIT 1];
        
        Test.startTest();
        String result = AdlUiSimulateController.getDataLibrary(testLibrary.Id);
        Test.stopTest();
        
        Data_Library__c library = (Data_Library__c) JSON.deserialize(result, Data_Library__c.class);
        System.assertNotEquals(null, library, 'Library should be returned');
        System.assertEquals('Test ADL UI Simulate', library.Name, 'Name should match');
    }
    
    @isTest
    static void testGetDataLibraryFiles() {
        Data_Library__c testLibrary = [SELECT Id FROM Data_Library__c LIMIT 1];
        
        Test.startTest();
        List<Data_Library_File__c> files = AdlUiSimulateController.getDataLibraryFiles(testLibrary.Id);
        Test.stopTest();
        
        System.assertEquals(5, files.size(), 'Should return 5 files');
    }
    
    @isTest
    static void testDeleteFile() {
        Data_Library_File__c testFile = [SELECT Id FROM Data_Library_File__c LIMIT 1];
        
        Test.startTest();
        String result = AdlUiSimulateController.deleteFile(testFile.Id);
        Test.stopTest();
        
        AdlUiSimulateController.ResponseWrapper response = 
            (AdlUiSimulateController.ResponseWrapper) JSON.deserialize(
                result, 
                AdlUiSimulateController.ResponseWrapper.class
            );
        
        System.assert(response.success, 'Delete should succeed');
        
        List<Data_Library_File__c> remainingFiles = [SELECT Id FROM Data_Library_File__c WHERE Id = :testFile.Id];
        System.assertEquals(0, remainingFiles.size(), 'File should be deleted');
    }
    
    @isTest
    static void testUpdateStatus() {
        Data_Library__c testLibrary = [SELECT Id FROM Data_Library__c LIMIT 1];
        
        Test.startTest();
        String result = AdlUiSimulateController.updateStatus(testLibrary.Id, 'Active');
        Test.stopTest();
        
        AdlUiSimulateController.ResponseWrapper response = 
            (AdlUiSimulateController.ResponseWrapper) JSON.deserialize(
                result, 
                AdlUiSimulateController.ResponseWrapper.class
            );
        
        System.assert(response.success, 'Update should succeed');
        
        Data_Library__c updatedLibrary = [SELECT Status__c FROM Data_Library__c WHERE Id = :testLibrary.Id];
        System.assertEquals('Active', updatedLibrary.Status__c, 'Status should be updated');
    }
    
    @isTest
    static void testErrorHandling() {
        Test.startTest();
        
        try {
            String result = AdlUiSimulateController.getDataLibrary('invalid_id');
            System.assert(false, 'Should throw exception');
        } catch (AuraHandledException e) {
            System.assert(e.getMessage().contains('Error retrieving data library'), 'Should contain error message');
        }
        
        Test.stopTest();
    }
}
