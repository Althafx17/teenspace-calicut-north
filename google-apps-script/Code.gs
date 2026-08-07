/**
 * Google Apps Script Backend for Kozhikode North Workshop / Conference Registration
 * 
 * Features:
 * - Handles POST requests (doPost) with JSON payload
 * - Handles GET requests (doGet) for health check / instructions
 * - Auto-creates sheet headers if the sheet is empty
 * - Appends registration timestamp and student details
 * - CORS & no-cors friendly response handling
 */

// Name of the tab in your Google Sheet (default: "Registrations" or "Sheet1")
var SHEET_NAME = "Registrations";

function doPost(e) {
  var lock = LockService.getScriptLock();
  // Wait for up to 30 seconds for other processes to finish
  lock.tryLock(30000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, use the active sheet or create one
    if (!sheet) {
      sheet = doc.getActiveSheet();
    }

    // Header row structure
    var headers = [
      "Timestamp",
      "Full Name",
      "Age",
      "Class",
      "School",
      "Place",
      "Phone",
      "Expectations"
    ];

    // If sheet is brand new / empty, write headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#f3f4f6");
      sheet.setFrozenRows(1);
    }

    // Parse incoming data
    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Prepare row data matching headers
    var row = [
      new Date(),
      data.name || "",
      data.age || "",
      data.schoolClass || "",
      data.institution || "",
      data.place || "",
      data.phone || "",
      data.expectations || ""
    ];

    // Append data row
    sheet.appendRow(row);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", message: "Registration recorded successfully" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput("Wisdom Students Kozhikode North - Registration API is live!")
    .setMimeType(ContentService.MimeType.TEXT);
}
