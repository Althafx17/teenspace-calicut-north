# Google Sheets & Google Apps Script Setup Guide

Follow these steps to set up a database sheet and API endpoint for storing student registrations.

## Step 1: Create a Google Sheet
1. Open [Google Sheets](https://sheets.google.com).
2. Create a new blank spreadsheet.
3. Rename the sheet to `Wisdom Students TEENSPACE Registrations`.
4. In the first sheet, name the first row (headers) as follows:
   * **A1**: `Timestamp`
   * **B1**: `Name`
   * **C1**: `Age`
   * **D1**: `District`
   * **E1**: `Area`
   * **F1**: `Place`
   * **G1**: `Phone`
   * **H1**: `Parent Phone`
   * **I1**: `Institution`
   * **J1**: `School Class / Course`
   * **K1**: `Email`
   * **L1**: `Expectations`

---

## Step 2: Open Google Apps Script Editor
1. In your Google Sheet menu bar, click on **Extensions** -> **Apps Script**.
2. This opens the script editor project.
3. Clear any existing placeholder code in `Code.gs`.

---

## Step 3: Paste the Serverless Script
Copy and paste the following script into the `Code.gs` editor:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.age || '',
      data.district || '',
      data.area || '',
      data.place || '',
      data.phone || '',
      data.parentPhone || '',
      data.institution || '',
      data.schoolClass || '',
      data.email || '',
      data.expectations || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Registration added successfully'
    })).setMimeType(ContentService.MimeType.JSON)
       .setHeader('Access-Control-Allow-Origin', '*');
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON)
       .setHeader('Access-Control-Allow-Origin', '*');
  }
}

// Handle preflight CORS request from modern web browsers
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
}
```

---

## Step 4: Deploy the Web App
1. At the top-right of the Apps Script dashboard, click on **Deploy** -> **New deployment**.
2. Click the gear icon (**Select type**) and select **Web app**.
3. Fill in the deployment details:
   * **Description**: `TEENSPACE Registrations API`
   * **Execute as**: `Me (your-gmail-account@gmail.com)`
   * **Who has access**: `Anyone`
4. Click **Deploy**.
5. Google will prompt you to authorize permissions. Click **Authorize access**, choose your Google account, click **Advanced** -> **Go to Untitled project (unsafe)**, and select **Allow**.
6. Once the deployment completes, copy the **Web App URL** (e.g., `https://script.google.com/macros/s/AKfycb.../exec`).

---

## Step 5: Connect to your Next.js App
Add the copied deployment URL to your environment variables file `.env.local` at the root of the project:

```bash
NEXT_PUBLIC_APPS_SCRIPT_URL="https://script.google.com/macros/s/YOUR_DEPLOYNENT_ID/exec"
```

Restart your local development server (`npm run dev`) to apply the environment variable. Submissions will now write directly to your Google Sheet spreadsheet database.
