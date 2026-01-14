# Honda Manual Docs - Salesforce LWC Component

A fully interactive Salesforce Lightning Web Component for managing data libraries with file upload capabilities, built using SLDS (Salesforce Lightning Design System).

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Component Structure](#component-structure)
- [Configuration](#configuration)
- [Usage](#usage)
- [Custom Objects Required](#custom-objects-required)
- [API Reference](#api-reference)
- [Troubleshooting](#troubleshooting)

## ✨ Features

- **Interactive File Upload**: Drag-and-drop or browse to upload multiple files
- **Dynamic File Management**: View, select, and manage uploaded files in a sortable table
- **Form Validation**: Required field validation for data space and unstructured data model
- **Real-time File Tracking**: Display file count, size, and upload status
- **SLDS Styling**: Fully styled with Salesforce Lightning Design System v2
- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **Toast Notifications**: User-friendly success/error messages
- **Content Processing Information**: Integrated Intelligent Context guidance
- **Bulk Operations**: Select multiple files for batch operations

## 🔧 Prerequisites

- Salesforce org with Lightning Experience enabled
- Salesforce CLI (for deployment)
- Administrator or Developer access
- Custom objects created (see below)

## 📦 Installation

### Step 1: Create Custom Objects

Create the following custom objects in your Salesforce org:

#### Data Library Object (`Data_Library__c`)

| Field Name | API Name | Type | Required |
|------------|----------|------|----------|
| Name | Name | Text(80) | Yes |
| API Name | API_Name__c | Text(255) | Yes |
| Data Space | Data_Space__c | Picklist | No |
| Data Type | Data_Type__c | Text(50) | No |
| Unstructured Data Model | Unstructured_Data_Model__c | Text(255) | No |
| Status | Status__c | Picklist | No |
| Total Files | Total_Files__c | Number(18,0) | No |
| Description | Description__c | Long Text Area(32768) | No |

**Status Picklist Values**: In Progress, Active, Inactive, Archived

**Data Space Picklist Values**: Default, Custom Space 1, Custom Space 2

#### Data Library File Object (`Data_Library_File__c`)

| Field Name | API Name | Type | Required |
|------------|----------|------|----------|
| Name | Name | Text(255) | Yes |
| Data Library | Data_Library__c | Master-Detail(Data_Library__c) | Yes |
| File Size | File_Size__c | Text(50) | No |
| Status | Status__c | Picklist | No |
| Document Id | Document_Id__c | Text(18) | No |

**Status Picklist Values**: Uploaded, Processing, Complete, Failed

### Step 2: Deploy the Component

Using Salesforce CLI:

```bash
# Navigate to your project directory
cd your-project-directory

# Create LWC component structure
mkdir -p force-app/main/default/lwc/hondaManualDocs

# Copy files to the component directory
cp hondaManualDocs.html force-app/main/default/lwc/hondaManualDocs/
cp hondaManualDocs.js force-app/main/default/lwc/hondaManualDocs/
cp hondaManualDocs.css force-app/main/default/lwc/hondaManualDocs/
cp hondaManualDocs.js-meta.xml force-app/main/default/lwc/hondaManualDocs/

# Deploy Apex classes
mkdir -p force-app/main/default/classes
cp HondaManualDocsController.cls force-app/main/default/classes/
cp HondaManualDocsControllerTest.cls force-app/main/default/classes/

# Deploy to your org
sfdx force:source:deploy -p force-app/main/default -u your-org-alias
```

Or use VS Code with Salesforce Extension Pack:
1. Right-click on the `lwc` folder
2. Select "SFDX: Deploy Source to Org"

### Step 3: Add Component to Page

1. Navigate to the Lightning App Builder
2. Edit the desired page (App Page, Record Page, or Home Page)
3. Drag the **hondaManualDocs** component onto the page
4. Save and activate the page

## 📁 Component Structure

```
hondaManualDocs/
├── hondaManualDocs.html          # Component template
├── hondaManualDocs.js            # Component controller
├── hondaManualDocs.css           # Component styles
└── hondaManualDocs.js-meta.xml   # Component metadata

classes/
├── HondaManualDocsController.cls      # Apex controller
└── HondaManualDocsControllerTest.cls  # Apex test class
```

## ⚙️ Configuration

### Component Properties

The component can be configured through the Lightning App Builder:

```javascript
@api recordId;  // Automatically passed when on a record page
```

### Accepted File Formats

Default accepted formats (can be modified in the controller):

```javascript
get acceptedFormats() {
    return ['.pdf', '.png', '.jpg', '.doc', '.docx', '.txt'];
}
```

To modify, update the `acceptedFormats` getter in `hondaManualDocs.js`.

### Data Space Options

To add more data space options, modify the `dataSpaceOptions` array:

```javascript
dataSpaceOptions = [
    { label: 'Default', value: 'Default' },
    { label: 'Custom Space 1', value: 'Custom1' },
    { label: 'Custom Space 2', value: 'Custom2' },
    // Add more options here
];
```

## 📖 Usage

### Uploading Files

1. Select a **Data Space** from the dropdown
2. Enter an **Unstructured Data Model Object** name
3. Click **Upload Files** or drag files into the upload area
4. Review uploaded files in the table
5. Click **Save** to persist the data

### Managing Files

- **Select Files**: Check the checkbox next to each file
- **Select All**: Use the header checkbox to select all files
- **Preview File**: Click the preview icon in the Actions column
- **Delete Files**: Select files and use the delete action (requires implementation)

### Form Actions

- **Cancel**: Resets the form to default values
- **Save**: Validates and saves the data library configuration

## 🗄️ Custom Objects Required

You'll need to create these custom objects before deploying:

### Object Relationships

```
Data_Library__c (Parent)
    └── Data_Library_File__c (Child) - Master-Detail Relationship
```

### Permission Requirements

Ensure users have:
- Read/Create/Edit access to `Data_Library__c`
- Read/Create/Edit/Delete access to `Data_Library_File__c`
- Access to upload files (`ContentDocument` and `ContentVersion`)

## 🔌 API Reference

### JavaScript Methods

#### `handleUploadFinished(event)`
Handles file upload completion and updates the file list.

#### `handleSave()`
Validates form and saves data library configuration.

#### `handleCancel()`
Resets the form to initial state.

#### `handleRowSelection(event)`
Handles individual file selection in the table.

#### `handleSelectAll(event)`
Selects or deselects all files in the table.

### Apex Methods

#### `saveDataLibrary(String dataSpace, String dataType, String unstructuredDataModel, String filesJson)`
Saves data library configuration to the database.

**Parameters:**
- `dataSpace`: Selected data space value
- `dataType`: Type of data (e.g., "Files")
- `unstructuredDataModel`: Model object name
- `filesJson`: JSON string of uploaded files

**Returns:** JSON string with ResponseWrapper

#### `getDataLibrary(String recordId)`
Retrieves data library details by ID.

#### `getDataLibraryFiles(String dataLibraryId)`
Retrieves all files associated with a data library.

#### `deleteFile(String fileId)`
Deletes a file and its associated content document.

## 🐛 Troubleshooting

### Files Not Uploading

1. Check file size limits (default Salesforce limit is 2GB)
2. Verify accepted file formats match your files
3. Ensure proper permissions on ContentDocument object

### Component Not Displaying

1. Verify the component is activated on the page
2. Check user permissions for custom objects
3. Review browser console for JavaScript errors

### Save Operation Failing

1. Ensure required fields are populated
2. Check Apex debug logs for errors
3. Verify custom objects and fields exist
4. Confirm user has create/edit permissions

### Styling Issues

1. Clear browser cache
2. Ensure SLDS resources are loading
3. Check for CSS conflicts with other components

## 📝 Additional Notes

### Connecting to Real Apex Controller

To connect the component to the Apex controller, add these imports to `hondaManualDocs.js`:

```javascript
import saveDataLibrary from '@salesforce/apex/HondaManualDocsController.saveDataLibrary';
import getDataLibrary from '@salesforce/apex/HondaManualDocsController.getDataLibrary';
import getDataLibraryFiles from '@salesforce/apex/HondaManualDocsController.getDataLibraryFiles';
```

Then update the `handleSave` method:

```javascript
handleSave() {
    if (!this.unstructuredDataModel) {
        this.showToast('Error', 'Please enter an Unstructured Data Model Object', 'error');
        return;
    }

    const filesJson = JSON.stringify(this.fileList);
    
    saveDataLibrary({ 
        dataSpace: this.dataSpaceValue,
        dataType: this.dataType,
        unstructuredDataModel: this.unstructuredDataModel,
        filesJson: filesJson
    })
    .then(result => {
        const response = JSON.parse(result);
        if (response.success) {
            this.showToast('Success', response.message, 'success');
        } else {
            this.showToast('Error', response.message, 'error');
        }
    })
    .catch(error => {
        this.showToast('Error', error.body.message, 'error');
    });
}
```

### Performance Optimization

For large file lists (500+ files):
1. Implement pagination in the table
2. Use virtual scrolling for better performance
3. Consider lazy loading file data

### Security Considerations

1. Always validate file types on the server side
2. Scan uploaded files for malware
3. Implement proper field-level security
4. Use `with sharing` in Apex controllers

## 📄 License

This component is provided as-is for use within Salesforce orgs.

## 🤝 Support

For issues or questions:
1. Check the Troubleshooting section
2. Review Salesforce documentation
3. Check debug logs for detailed error messages

---

**Version**: 1.0.0  
**Last Updated**: January 2026  
**Salesforce API Version**: 60.0
