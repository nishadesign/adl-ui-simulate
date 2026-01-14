public with sharing class AdlUiSimulateController {
    
    /**
     * Save data library configuration
     */
    @AuraEnabled
    public static String saveDataLibrary(String dataSpace, String dataType, 
                                        String unstructuredDataModel, String filesJson) {
        try {
            // Parse files JSON
            List<FileWrapper> files = (List<FileWrapper>) JSON.deserialize(filesJson, List<FileWrapper>.class);
            
            // Create or update Data Library record
            // Note: Replace with your actual custom object API name
            Data_Library__c dataLibrary = new Data_Library__c();
            dataLibrary.Name = 'ADL UI Simulate';
            dataLibrary.API_Name__c = 'adl_UI_Simulate';
            dataLibrary.Data_Space__c = dataSpace;
            dataLibrary.Data_Type__c = dataType;
            dataLibrary.Unstructured_Data_Model__c = unstructuredDataModel;
            dataLibrary.Status__c = 'In Progress';
            dataLibrary.Total_Files__c = files.size();
            
            upsert dataLibrary;
            
            // Create file records
            List<Data_Library_File__c> fileRecords = new List<Data_Library_File__c>();
            for (FileWrapper file : files) {
                Data_Library_File__c fileRecord = new Data_Library_File__c();
                fileRecord.Data_Library__c = dataLibrary.Id;
                fileRecord.Name = file.name;
                fileRecord.File_Size__c = file.size;
                fileRecord.Document_Id__c = file.documentId;
                fileRecord.Status__c = 'Uploaded';
                fileRecords.add(fileRecord);
            }
            
            if (!fileRecords.isEmpty()) {
                insert fileRecords;
            }
            
            return JSON.serialize(new ResponseWrapper(true, 'Data library saved successfully', dataLibrary.Id));
            
        } catch (Exception e) {
            return JSON.serialize(new ResponseWrapper(false, 'Error: ' + e.getMessage(), null));
        }
    }
    
    /**
     * Get data library details
     */
    @AuraEnabled(cacheable=true)
    public static String getDataLibrary(String recordId) {
        try {
            Data_Library__c dataLibrary = [
                SELECT Id, Name, API_Name__c, Data_Space__c, Data_Type__c, 
                       Unstructured_Data_Model__c, Status__c, Total_Files__c,
                       Description__c
                FROM Data_Library__c
                WHERE Id = :recordId
                LIMIT 1
            ];
            
            return JSON.serialize(dataLibrary);
            
        } catch (Exception e) {
            throw new AuraHandledException('Error retrieving data library: ' + e.getMessage());
        }
    }
    
    /**
     * Get files for a data library
     */
    @AuraEnabled(cacheable=true)
    public static List<Data_Library_File__c> getDataLibraryFiles(String dataLibraryId) {
        try {
            return [
                SELECT Id, Name, File_Size__c, Status__c, Document_Id__c,
                       CreatedBy.Name, CreatedDate
                FROM Data_Library_File__c
                WHERE Data_Library__c = :dataLibraryId
                ORDER BY CreatedDate DESC
                LIMIT 500
            ];
            
        } catch (Exception e) {
            throw new AuraHandledException('Error retrieving files: ' + e.getMessage());
        }
    }
    
    /**
     * Delete a file
     */
    @AuraEnabled
    public static String deleteFile(String fileId) {
        try {
            Data_Library_File__c fileToDelete = [
                SELECT Id, Document_Id__c 
                FROM Data_Library_File__c 
                WHERE Id = :fileId 
                LIMIT 1
            ];
            
            // Delete ContentDocument if exists
            if (String.isNotBlank(fileToDelete.Document_Id__c)) {
                ContentDocument doc = [
                    SELECT Id 
                    FROM ContentDocument 
                    WHERE Id = :fileToDelete.Document_Id__c 
                    LIMIT 1
                ];
                delete doc;
            }
            
            delete fileToDelete;
            
            return JSON.serialize(new ResponseWrapper(true, 'File deleted successfully', null));
            
        } catch (Exception e) {
            return JSON.serialize(new ResponseWrapper(false, 'Error: ' + e.getMessage(), null));
        }
    }
    
    /**
     * Update data library status
     */
    @AuraEnabled
    public static String updateStatus(String recordId, String status) {
        try {
            Data_Library__c dataLibrary = [
                SELECT Id, Status__c 
                FROM Data_Library__c 
                WHERE Id = :recordId 
                LIMIT 1
            ];
            
            dataLibrary.Status__c = status;
            update dataLibrary;
            
            return JSON.serialize(new ResponseWrapper(true, 'Status updated successfully', null));
            
        } catch (Exception e) {
            return JSON.serialize(new ResponseWrapper(false, 'Error: ' + e.getMessage(), null));
        }
    }
    
    // Wrapper classes
    public class FileWrapper {
        @AuraEnabled public String id { get; set; }
        @AuraEnabled public String name { get; set; }
        @AuraEnabled public String size { get; set; }
        @AuraEnabled public String documentId { get; set; }
    }
    
    public class ResponseWrapper {
        @AuraEnabled public Boolean success { get; set; }
        @AuraEnabled public String message { get; set; }
        @AuraEnabled public String recordId { get; set; }
        
        public ResponseWrapper(Boolean success, String message, String recordId) {
            this.success = success;
            this.message = message;
            this.recordId = recordId;
        }
    }
}
