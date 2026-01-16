# Agentforce Data Library - Implementation Documentation

## Overview

This implementation provides React + TypeScript components with SLDS (Salesforce Lightning Design System) CSS classes that match the Figma designs 1:1.

## Project Structure

```
src/
├── types/
│   └── DataLibrary.types.ts          # TypeScript type definitions
├── components/
│   ├── shared/                       # Reusable base components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Dropdown.tsx
│   │   ├── Textarea.tsx
│   │   ├── Badge.tsx
│   │   ├── Icon.tsx
│   │   ├── FileUpload.tsx
│   │   └── index.ts
│   ├── layout/                       # Layout components
│   │   ├── GlobalHeader.tsx
│   │   ├── GlobalNavigation.tsx
│   │   ├── SetupTree.tsx
│   │   └── index.ts
│   └── data-library/
│       ├── home/                     # Data Library Home page
│       │   ├── DataLibraryHome.tsx
│       │   ├── DataLibraryHeader.tsx
│       │   ├── DataLibraryInfoCard.tsx
│       │   ├── DataLibraryFilters.tsx
│       │   ├── DataLibraryTable.tsx
│       │   ├── DataLibraryTableRow.tsx
│       │   └── index.ts
│       ├── create/                   # Create Library Modal
│       │   ├── CreateLibraryModal.tsx
│       │   ├── CreateLibraryForm.tsx
│       │   ├── ModalFooter.tsx
│       │   └── index.ts
│       └── detail/                   # Data Library Detail page
│           ├── DataLibraryDetail.tsx
│           ├── DetailPageHeader.tsx
│           ├── DetailInfoRow.tsx
│           ├── AddDataSourcesCard.tsx
│           ├── DataSourceForm.tsx
│           ├── FileUploadSection.tsx
│           ├── ContentProcessingInfo.tsx
│           ├── LibraryStatusSection.tsx
│           ├── DetailFooter.tsx
│           └── index.ts
├── pages/
│   ├── DataLibraryHomePage.tsx
│   ├── DataLibraryDetailPage.tsx
│   └── index.ts
├── App.tsx                           # Demo application
└── index.ts                          # Main exports

```

## Three Implemented Screens

### 1. Data Library Home (`DataLibraryHomePage`)
- **Route**: Home view
- **Components**:
  - `GlobalHeader`: Top header with Salesforce logo, search, and utility icons
  - `GlobalNavigation`: Navigation bar with Setup and tabs
  - `SetupTree`: Left sidebar with tree navigation
  - `DataLibraryHeader`: Page header with "All Data Libraries" and New button
  - `DataLibraryInfoCard`: Info card with "Boost Your AI with Data"
  - `DataLibraryFilters`: Filter dropdowns for Library Name, Source Type, Status, etc.
  - `DataLibraryTable`: Table displaying 4 data libraries with columns:
    - Library Name (link)
    - Source Type (icon + text)
    - Library Status (badge)
    - Search Index (link)
    - Retriever (link)
    - Actions (dropdown icon)

### 2. Create Library Modal (`CreateLibraryModal`)
- **Trigger**: "New" button on home page
- **Components**:
  - Modal with "Create a Library" header
  - `CreateLibraryForm`: Form with fields:
    - Library Name (required, text input)
    - API Name (required, text input)
    - Description (required, textarea with info icon)
  - `ModalFooter`: Cancel and Create buttons

### 3. Data Library Detail (`DataLibraryDetailPage`)
- **Route**: Detail view for "Honda Manual Docs"
- **Components**:
  - `GlobalHeader` & `GlobalNavigation` (same as home)
  - `SetupTree` (same as home)
  - `DetailPageHeader`: Header with breadcrumb, title "Honda Manual Docs", and Edit button
  - `DetailInfoRow`: Three-column detail row showing:
    - API Name: `honda_Manual_Docs`
    - Description: Full text
    - Status: "Add Data" badge
  - `AddDataSourcesCard`: Card containing:
    - `DataSourceForm`: Data Space dropdown and Unstructured Data Model Object input
    - Data Type field with "Files" and X button
    - `FileUploadSection`: Upload Files button with "Or drop files" text
    - `ContentProcessingInfo`: Content Processing info section with links
  - `LibraryStatusSection`: Expandable "Library Status" section
  - `DetailFooter`: Fixed footer with disabled Cancel and Save buttons

## Design Fidelity

All components match the Figma designs exactly:
- **Layout**: Grid structure with 248px sidebar
- **Typography**: Uses SLDS font scales and weights
- **Colors**: Matches SLDS color tokens
- **Spacing**: Uses SLDS spacing utilities
- **Components**: SLDS-compliant markup and classes
- **Icons**: SVG sprite references (placeholders)
- **States**: Includes disabled, active, and hover states
- **Status Badges**: Colored badges for Ready (green), Error (red), In Progress (orange), Add Data (gray)

## Placeholder Data

The implementation includes mock data matching the designs:
- 4 sample data libraries in the table
- Sample form values in the Create modal
- Detail page for "Honda Manual Docs"
- No backend logic or state management (as requested)

## SLDS CSS

All components use SLDS CSS classes from the local `slds-plus (4).css` file. The implementation follows SLDS naming conventions and component patterns.

## Usage

```tsx
import { DataLibraryHomePage, DataLibraryDetailPage } from './pages';
import { CreateLibraryModal } from './components/data-library/create';

// Render the home page
<DataLibraryHomePage />

// Render the detail page
<DataLibraryDetailPage />

// Show the create modal
<CreateLibraryModal isOpen={true} onClose={() => {}} />
```

## Notes

- No backend integration (placeholder data only)
- No state management (component stubs)
- No invented UI elements or flows
- All content matches Figma designs 1:1
- Icons are SVG sprite references (require SLDS icon assets)
- Components are fully typed with TypeScript

## Next Steps

To make this functional:
1. Add state management (React Context or Redux)
2. Implement event handlers
3. Connect to backend APIs
4. Add routing (React Router)
5. Import SLDS icon assets
6. Add form validation
7. Implement modal backdrop click handling
8. Add loading and error states
