# Deployment Guide for ADL UI Simulate

This guide will help you deploy the ADL UI Simulate component to a Salesforce org.

## Prerequisites

Before deploying, you need:
1. A Salesforce org (Developer Edition is free)
2. Salesforce CLI installed on your local machine

## Step 1: Get a Free Salesforce Developer Org

1. Go to https://developer.salesforce.com/signup
2. Fill out the form and click "Sign me up"
3. Check your email and verify your account
4. You'll receive a free, permanent Salesforce Developer Edition org

## Step 2: Install Salesforce CLI

Install the Salesforce CLI on your local machine:

### macOS
```bash
brew install sf
```

### Windows
Download from: https://developer.salesforce.com/tools/sfdxcli

### Linux
```bash
npm install -g @salesforce/cli
```

## Step 3: Create Custom Objects

Before deploying the component, you need to create the custom objects in your Salesforce org:

1. Log in to your Salesforce org
2. Go to **Setup** → **Object Manager**
3. Click **Create** → **Custom Object**

### Create Data_Library__c Object

- **Label**: Data Library
- **Plural Label**: Data Libraries
- **Object Name**: Data_Library__c
- Check: **Allow Reports**, **Allow Activities**, **Track Field History**

Add these custom fields:
- `API_Name__c` (Text, 255)
- `Data_Space__c` (Picklist: Default, Production, Development)
- `Data_Type__c` (Text, 50)
- `Unstructured_Data_Model__c` (Text, 255)
- `Status__c` (Picklist: In Progress, Active, Inactive)
- `Total_Files__c` (Number, 18, 0)
- `Description__c` (Long Text Area, 32768)

### Create Data_Library_File__c Object

- **Label**: Data Library File
- **Plural Label**: Data Library Files
- **Object Name**: Data_Library_File__c
- Check: **Allow Reports**, **Allow Activities**

Add these custom fields:
- `Data_Library__c` (Master-Detail relationship to Data_Library__c)
- `File_Size__c` (Text, 50)
- `Document_Id__c` (Text, 18)
- `Status__c` (Picklist: Uploaded, Processing, Completed, Failed)

## Step 4: Authenticate with Salesforce

Open a terminal in your local project directory and run:

```bash
# Authenticate to your Salesforce org
sf org login web --set-default-dev-hub --alias myDevOrg
```

This will open a browser window. Log in with your Salesforce credentials.

## Step 5: Deploy the Component

From the project root directory, run:

```bash
# Deploy to your org
sf project deploy start --source-dir force-app
```

Wait for the deployment to complete. You should see a success message.

## Step 6: Add Component to a Page

1. Log in to your Salesforce org
2. Go to **Setup** → **Lightning App Builder**
3. Click **New** → **App Page**
4. Name it "ADL UI Simulate" and choose a template
5. From the left sidebar, find **adlUiSimulate** under Custom components
6. Drag it onto the page canvas
7. Click **Save** → **Activate**
8. Choose where to make it available (e.g., Lightning Experience)
9. Click **Save** again

## Step 7: View Your Component

1. Click the App Launcher (9 dots in the top-left)
2. Search for "ADL UI Simulate"
3. Click to open and view your component!

## Troubleshooting

### "Component not found" error
- Make sure you've deployed all files successfully
- Check that the component name matches in the metadata file

### "Custom object not found" error
- You need to create the custom objects first (Step 3)
- Make sure the API names match exactly

### Authentication errors
- Run `sf org login web` again
- Check that you're logged into the correct org

## Alternative: Quick Deploy Without Salesforce CLI

If you don't want to install Salesforce CLI, you can use the **Salesforce Developer Console**:

1. Log in to your Salesforce org
2. Open **Developer Console** (gear icon → Developer Console)
3. Go to **File** → **New** → **Lightning Component**
4. Name it "adlUiSimulate"
5. Copy and paste the contents from each file:
   - `adlUiSimulate.html` → Template
   - `adlUiSimulate.js` → Controller
   - `adlUiSimulate.css` → Style
6. Create Apex classes:
   - **File** → **New** → **Apex Class**
   - Create `AdlUiSimulateController` and paste the code
   - Create `AdlUiSimulateControllerTest` and paste the code
7. Save all files

## Need Help?

- Salesforce Developer Documentation: https://developer.salesforce.com/docs
- Trailhead (Free Learning): https://trailhead.salesforce.com
- Salesforce Stack Exchange: https://salesforce.stackexchange.com

---

**Note**: The `preview.html` file in the root directory is for local previewing only and shows the UI without Salesforce backend functionality.
