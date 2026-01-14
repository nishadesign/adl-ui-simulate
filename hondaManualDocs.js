import { LightningElement, track, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class HondaManualDocs extends LightningElement {
    @api recordId;
    
    @track dataSpaceValue = 'Default';
    @track dataType = 'Files';
    @track unstructuredDataModel = 'adi_name_sidno';
    @track uploadedFiles = [];
    @track selectedFiles = [];
    
    // Mock data for demonstration
    @track fileList = [
        { id: '1', name: 'Honda CRV Manual', size: '34 KB', status: '', uploadedBy: '', uploadedOn: '', selected: false },
        { id: '2', name: 'Honda Odyssey manual', size: '340 KB', status: '', uploadedBy: '', uploadedOn: '', selected: false },
        { id: '3', name: 'Operating Manual', size: '400 KB', status: '', uploadedBy: '', uploadedOn: '', selected: false },
        { id: '4', name: 'Marketing Manual', size: '880 KB', status: '', uploadedBy: '', uploadedOn: '', selected: false },
        { id: '5', name: 'Policy Docs', size: '889 KB', status: '', uploadedBy: '', uploadedOn: '', selected: false },
        { id: '6', name: 'Test File', size: '888 KB', status: '', uploadedBy: '', uploadedOn: '', selected: false },
        { id: '7', name: 'Demo Files', size: '888 KB', status: '', uploadedBy: '', uploadedOn: '', selected: false }
    ];

    totalFiles = 460;
    showingFiles = 200;

    dataSpaceOptions = [
        { label: 'Default', value: 'Default' },
        { label: 'Custom Space 1', value: 'Custom1' },
        { label: 'Custom Space 2', value: 'Custom2' }
    ];

    columns = [
        { label: 'File Name', fieldName: 'name', sortable: true },
        { label: 'Size', fieldName: 'size', sortable: true },
        { label: 'Status', fieldName: 'status', sortable: true },
        { label: 'Uploaded By', fieldName: 'uploadedBy', sortable: true },
        { label: 'Uploaded On', fieldName: 'uploadedOn', type: 'date', sortable: true }
    ];

    get acceptedFormats() {
        return ['.pdf', '.png', '.jpg', '.doc', '.docx', '.txt'];
    }

    get fileCountMessage() {
        return `Showing ${this.showingFiles} out of ${this.totalFiles} files`;
    }

    get hasFiles() {
        return this.fileList && this.fileList.length > 0;
    }

    handleDataSpaceChange(event) {
        this.dataSpaceValue = event.detail.value;
    }

    handleUnstructuredDataModelChange(event) {
        this.unstructuredDataModel = event.target.value;
    }

    handleUploadFinished(event) {
        const uploadedFiles = event.detail.files;
        
        uploadedFiles.forEach(file => {
            const newFile = {
                id: Date.now() + Math.random(),
                name: file.name,
                size: this.formatFileSize(file.size),
                status: 'Uploaded',
                uploadedBy: 'Current User',
                uploadedOn: new Date().toISOString(),
                selected: false,
                documentId: file.documentId
            };
            this.fileList = [...this.fileList, newFile];
        });

        this.showToast('Success', `${uploadedFiles.length} file(s) uploaded successfully`, 'success');
        this.showingFiles = this.fileList.length;
    }

    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i)) + ' ' + sizes[i];
    }

    handleRowSelection(event) {
        const fileId = event.target.dataset.id;
        this.fileList = this.fileList.map(file => {
            if (file.id === fileId) {
                return { ...file, selected: !file.selected };
            }
            return file;
        });
        
        this.selectedFiles = this.fileList.filter(file => file.selected);
    }

    handleSelectAll(event) {
        const isChecked = event.target.checked;
        this.fileList = this.fileList.map(file => ({
            ...file,
            selected: isChecked
        }));
        
        this.selectedFiles = isChecked ? [...this.fileList] : [];
    }

    handleCancel() {
        // Reset form
        this.dataSpaceValue = 'Default';
        this.unstructuredDataModel = 'adi_name_sidno';
        this.uploadedFiles = [];
        this.showToast('Info', 'Form cancelled', 'info');
    }

    handleSave() {
        // Validate form
        if (!this.unstructuredDataModel) {
            this.showToast('Error', 'Please enter an Unstructured Data Model Object', 'error');
            return;
        }

        if (this.fileList.length === 0) {
            this.showToast('Warning', 'Please upload at least one file', 'warning');
            return;
        }

        // In a real implementation, you would call an Apex method here
        // Example: saveDataLibrary({ dataSpace: this.dataSpaceValue, ... })
        
        this.showToast('Success', 'Data saved successfully', 'success');
        
        // Dispatch custom event for parent component
        const saveEvent = new CustomEvent('save', {
            detail: {
                dataSpace: this.dataSpaceValue,
                dataType: this.dataType,
                unstructuredDataModel: this.unstructuredDataModel,
                files: this.fileList
            }
        });
        this.dispatchEvent(saveEvent);
    }

    handleIntelligentContextClick() {
        // Navigate to Intelligent Context settings
        this.showToast('Info', 'Navigating to Intelligent Context...', 'info');
    }

    handleLearnMoreClick() {
        // Open help documentation
        window.open('https://help.salesforce.com', '_blank');
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(event);
    }

    handleRowAction(event) {
        const fileId = event.currentTarget.dataset.id;
        const file = this.fileList.find(f => f.id === fileId);
        
        // Handle row actions (view, download, delete, etc.)
        this.showToast('Info', `Action on file: ${file.name}`, 'info');
    }
}
