import { DataLibrary } from '../types/DataLibrary.types';

const STORAGE_KEY = 'agentforce_data_libraries';

export const libraryStorage = {
  // Get all libraries from localStorage
  getAll: (): DataLibrary[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading libraries from storage:', error);
      return [];
    }
  },

  // Add a new library
  add: (library: DataLibrary): void => {
    try {
      const libraries = libraryStorage.getAll();
      libraries.push(library);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(libraries));
    } catch (error) {
      console.error('Error adding library to storage:', error);
    }
  },

  // Update an existing library
  update: (id: string, updates: Partial<DataLibrary>): void => {
    try {
      const libraries = libraryStorage.getAll();
      const index = libraries.findIndex(lib => lib.id === id);
      if (index !== -1) {
        libraries[index] = { ...libraries[index], ...updates };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(libraries));
      }
    } catch (error) {
      console.error('Error updating library in storage:', error);
    }
  },

  // Get a library by ID
  getById: (id: string): DataLibrary | null => {
    try {
      const libraries = libraryStorage.getAll();
      return libraries.find(lib => lib.id === id) || null;
    } catch (error) {
      console.error('Error getting library from storage:', error);
      return null;
    }
  },

  // Clear all libraries (for testing)
  clear: (): void => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing libraries from storage:', error);
    }
  }
};
