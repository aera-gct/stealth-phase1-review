/* Local-only mock data for the Stealth Project Phase 1 prototype. */
const CLASSIFICATIONS = [
  "Confidential PII — Employee Records",
  "Confidential PII — Customer Data",
  "Privileged — Attorney-Client Communications",
  "SOX-Regulated Financial Data",
  "Confidential Employee Records",
  "Confidential — Third-Party Contractual Data",
  "PCI-Regulated Payment Data"
];

const alerts = [
  {id:"ALT-0021", event:"Authorized data access", entity:"R. Patel", title:"Finance Analyst", department:"Finance", tenure:"5 years", sourceSystem:"Approved AI Tool", dataSource:"Customer Data", classification:"Confidential PII — Customer Data", sensitivity:"Confidential", authorization:"Authorized", severity:"LOW", severityReason:"Access matches active authorization scope", timestamp:"09/18/2026 08:53", status:"Open"},
  {id:"ALT-0022", event:"Data access event", entity:"J. Chen", title:"HR Specialist", department:"HR", tenure:"7 years", sourceSystem:"CRM", dataSource:"Employee Records", classification:"Confidential PII — Employee Records", sensitivity:"Confidential", authorization:"Expired", severity:"MEDIUM", severityReason:"Authorization has expired", timestamp:"09/18/2026 09:18", status:"In Review"},
  {id:"ALT-0023", event:"Privileged data access", entity:"A. Morgan", title:"Senior Counsel", department:"Legal", tenure:"3 years", sourceSystem:"Microsoft Teams", dataSource:"Matter Files", classification:"Privileged — Attorney-Client Communications", sensitivity:"Privileged", authorization:"Unauthorized", severity:"HIGH", severityReason:"No active authorization record", timestamp:"09/18/2026 09:42", status:"Open"},
  {id:"ALT-0024", event:"Data access event", entity:"Jordan Lee", title:"Senior Analyst", department:"Finance", tenure:"2 years", sourceSystem:"Microsoft Teams", dataSource:"Matter Files", classification:"SOX-Regulated Financial Data", sensitivity:"Restricted", authorization:"Expired", severity:"HIGH", severityReason:"Access outside authorization scope", timestamp:"09/18/2026 09:42", status:"Open"},
  {id:"ALT-0025", event:"Authorized records access", entity:"Priya Shah", title:"HR Manager", department:"HR", tenure:"4 years", sourceSystem:"HR System", dataSource:"Employee Records", classification:"Confidential Employee Records", sensitivity:"Confidential", authorization:"Authorized", severity:"LOW", severityReason:"Access is within approved HR operations scope", timestamp:"09/18/2026 10:05", status:"Resolved", reviewer:"Reviewer Demo", reviewTimestamp:"09/18/2026 10:10", reason:"Reviewed against the sample authorization record."},
  {id:"ALT-0026", event:"Unidentified source access", entity:"Unknown", title:"Unknown", department:"Unknown", tenure:"—", sourceSystem:"Document Store", dataSource:"Customer Data", classification:"Confidential — Third-Party Contractual Data", sensitivity:"Restricted", authorization:"Unknown", severity:"HIGH", severityReason:"Initiating identity could not be identified", timestamp:"09/18/2026 10:21", status:"Open"}
];

const authorizationRecords = [
  {entity:"Jordan Lee", department:"Finance", system:"Microsoft Teams", source:"Financial files", start:"01/01/2026", expiry:"12/31/2026", scope:"Finance team / approved matters", status:"Active"},
  {entity:"Alex Morgan", department:"Legal", system:"Approved AI Assistant", source:"Matter files", start:"03/15/2026", expiry:"09/15/2026", scope:"Legal research only", status:"Expired"},
  {entity:"Priya Shah", department:"HR", system:"HR System", source:"Employee records", start:"08/01/2026", expiry:"01/31/2027", scope:"HR operations / named files", status:"Pending Review"},
  {entity:"Chen Wu", department:"Compliance", system:"CRM", source:"Customer data", start:"07/01/2026", expiry:"05/30/2027", scope:"Compliance review", status:"Active"},
  {entity:"R. Patel", department:"Finance", system:"Approved AI Tool", source:"Customer Data", start:"01/10/2026", expiry:"12/31/2026", scope:"Approved finance analysis", status:"Active"},
  {entity:"Unknown", department:"—", system:"Document Store", source:"Contract files", start:"—", expiry:"—", scope:"No authorization on file", status:"Pending Review"}
];
