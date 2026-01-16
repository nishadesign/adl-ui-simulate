// Data Library Type Definitions

export type SourceType = 'Knowledge' | 'Files' | 'URL' | 'Custom Retriever';

export type LibraryStatus = 'Ready' | 'Error' | 'In Progress' | 'Add Data';

export interface DataLibrary {
  id: string;
  libraryName: string;
  apiName: string;
  description: string;
  sourceType: SourceType;
  status: LibraryStatus;
  searchIndex: string;
  retriever: string;
}

export interface CreateLibraryFormData {
  libraryName: string;
  apiName: string;
  description: string;
}

export interface DataSourceFormData {
  dataSpace: string;
  unstructuredDataModelObject: string;
  dataType: string;
  files: File[];
}
