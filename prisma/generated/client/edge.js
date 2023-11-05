
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.4.2
 * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
 */
Prisma.prismaVersion = {
  client: "5.4.2",
  engine: "ac9d7041ed77bcc8a8dbd2ab6616b39013829574"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdditionalInformationScalarFieldEnum = {
  id: 'id',
  preferred_communication_method: 'preferred_communication_method',
  emergency_contact_name: 'emergency_contact_name',
  emergency_contact_relationship: 'emergency_contact_relationship',
  emergency_contact_phone: 'emergency_contact_phone',
  how_did_you_hear_about_us: 'how_did_you_hear_about_us',
  authorization_and_consent: 'authorization_and_consent',
  client_id: 'client_id'
};

exports.Prisma.AttachmentsScalarFieldEnum = {
  id: 'id',
  client_id: 'client_id',
  document_name: 'document_name',
  document_url: 'document_url'
};

exports.Prisma.CaseDetailsScalarFieldEnum = {
  id: 'id',
  nature_of_legal_issue: 'nature_of_legal_issue',
  date_of_incident: 'date_of_incident',
  case_number: 'case_number',
  opposing_parties: 'opposing_parties',
  current_attorney: 'current_attorney',
  client_id: 'client_id'
};

exports.Prisma.ElectronicSignatureScalarFieldEnum = {
  id: 'id',
  client_id: 'client_id',
  signature_image_url: 'signature_image_url',
  signature_date: 'signature_date'
};

exports.Prisma.FamilyPersonalHistoryScalarFieldEnum = {
  id: 'id',
  marital_status: 'marital_status',
  dependents: 'dependents',
  health_information: 'health_information',
  child_custody_support_info: 'child_custody_support_info',
  client_id: 'client_id'
};

exports.Prisma.FinancialInformationScalarFieldEnum = {
  id: 'id',
  current_employer: 'current_employer',
  job_title: 'job_title',
  income: 'income',
  monthly_expenses: 'monthly_expenses',
  debts: 'debts',
  assets: 'assets',
  liabilities: 'liabilities',
  bankruptcy_history: 'bankruptcy_history',
  client_id: 'client_id'
};

exports.Prisma.LegalHistoryScalarFieldEnum = {
  id: 'id',
  criminal_history: 'criminal_history',
  civil_litigation_history: 'civil_litigation_history',
  legal_restrictions_or_probation: 'legal_restrictions_or_probation',
  client_id: 'client_id'
};

exports.Prisma.PersonalInformationScalarFieldEnum = {
  id: 'id',
  first_name: 'first_name',
  middle_name: 'middle_name',
  last_name: 'last_name',
  address: 'address',
  phone_number: 'phone_number',
  email_address: 'email_address',
  date_of_birth: 'date_of_birth',
  social_security_number: 'social_security_number',
  preferred_pronouns: 'preferred_pronouns'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  AdditionalInformation: 'AdditionalInformation',
  Attachments: 'Attachments',
  CaseDetails: 'CaseDetails',
  ElectronicSignature: 'ElectronicSignature',
  FamilyPersonalHistory: 'FamilyPersonalHistory',
  FinancialInformation: 'FinancialInformation',
  LegalHistory: 'LegalHistory',
  PersonalInformation: 'PersonalInformation'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/veyron/Desktop/client_lcms_api/client_lcms_api/prisma/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.4.2",
  "engineVersion": "ac9d7041ed77bcc8a8dbd2ab6616b39013829574",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gIm15c3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBBZGRpdGlvbmFsSW5mb3JtYXRpb24gewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgcHJlZmVycmVkX2NvbW11bmljYXRpb25fbWV0aG9kIFN0cmluZz8KICBlbWVyZ2VuY3lfY29udGFjdF9uYW1lICAgICAgICAgU3RyaW5nPwogIGVtZXJnZW5jeV9jb250YWN0X3JlbGF0aW9uc2hpcCBTdHJpbmc/CiAgZW1lcmdlbmN5X2NvbnRhY3RfcGhvbmUgICAgICAgIFN0cmluZz8KICBob3dfZGlkX3lvdV9oZWFyX2Fib3V0X3VzICAgICAgU3RyaW5nPwogIGF1dGhvcml6YXRpb25fYW5kX2NvbnNlbnQgICAgICBCb29sZWFuCiAgY2xpZW50X2lkICAgICAgICAgICAgICAgICAgICAgIEludAogIFBlcnNvbmFsSW5mb3JtYXRpb24gICAgICAgICAgICBQZXJzb25hbEluZm9ybWF0aW9uIEByZWxhdGlvbihmaWVsZHM6IFtjbGllbnRfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQoKICBAQGluZGV4KFtjbGllbnRfaWRdLCBtYXA6ICJBZGRpdGlvbmFsSW5mb3JtYXRpb25fY2xpZW50X2lkX2ZrZXkiKQp9Cgptb2RlbCBBdHRhY2htZW50cyB7CiAgaWQgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgY2xpZW50X2lkICAgICAgICAgICBJbnQKICBkb2N1bWVudF9uYW1lICAgICAgIFN0cmluZz8KICBkb2N1bWVudF91cmwgICAgICAgIFN0cmluZz8KICBQZXJzb25hbEluZm9ybWF0aW9uIFBlcnNvbmFsSW5mb3JtYXRpb24gQHJlbGF0aW9uKGZpZWxkczogW2NsaWVudF9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pCgogIEBAaW5kZXgoW2NsaWVudF9pZF0sIG1hcDogIkF0dGFjaG1lbnRzX2NsaWVudF9pZF9ma2V5IikKfQoKbW9kZWwgQ2FzZURldGFpbHMgewogIGlkICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgbmF0dXJlX29mX2xlZ2FsX2lzc3VlIFN0cmluZwogIGRhdGVfb2ZfaW5jaWRlbnQgICAgICBEYXRlVGltZT8KICBjYXNlX251bWJlciAgICAgICAgICAgU3RyaW5nPwogIG9wcG9zaW5nX3BhcnRpZXMgICAgICBTdHJpbmc/CiAgY3VycmVudF9hdHRvcm5leSAgICAgIFN0cmluZz8KICBjbGllbnRfaWQgICAgICAgICAgICAgSW50CiAgUGVyc29uYWxJbmZvcm1hdGlvbiAgIFBlcnNvbmFsSW5mb3JtYXRpb24gQHJlbGF0aW9uKGZpZWxkczogW2NsaWVudF9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pCgogIEBAaW5kZXgoW2NsaWVudF9pZF0sIG1hcDogIkNhc2VEZXRhaWxzX2NsaWVudF9pZF9ma2V5IikKfQoKbW9kZWwgRWxlY3Ryb25pY1NpZ25hdHVyZSB7CiAgaWQgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgY2xpZW50X2lkICAgICAgICAgICBJbnQKICBzaWduYXR1cmVfaW1hZ2VfdXJsIFN0cmluZz8KICBzaWduYXR1cmVfZGF0ZSAgICAgIERhdGVUaW1lPwogIFBlcnNvbmFsSW5mb3JtYXRpb24gUGVyc29uYWxJbmZvcm1hdGlvbiBAcmVsYXRpb24oZmllbGRzOiBbY2xpZW50X2lkXSwgcmVmZXJlbmNlczogW2lkXSkKCiAgQEBpbmRleChbY2xpZW50X2lkXSwgbWFwOiAiRWxlY3Ryb25pY1NpZ25hdHVyZV9jbGllbnRfaWRfZmtleSIpCn0KCm1vZGVsIEZhbWlseVBlcnNvbmFsSGlzdG9yeSB7CiAgaWQgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG1hcml0YWxfc3RhdHVzICAgICAgICAgICAgIFN0cmluZz8KICBkZXBlbmRlbnRzICAgICAgICAgICAgICAgICBJbnQ/CiAgaGVhbHRoX2luZm9ybWF0aW9uICAgICAgICAgU3RyaW5nPwogIGNoaWxkX2N1c3RvZHlfc3VwcG9ydF9pbmZvIFN0cmluZz8KICBjbGllbnRfaWQgICAgICAgICAgICAgICAgICBJbnQKICBQZXJzb25hbEluZm9ybWF0aW9uICAgICAgICBQZXJzb25hbEluZm9ybWF0aW9uIEByZWxhdGlvbihmaWVsZHM6IFtjbGllbnRfaWRdLCByZWZlcmVuY2VzOiBbaWRdKQoKICBAQGluZGV4KFtjbGllbnRfaWRdLCBtYXA6ICJGYW1pbHlQZXJzb25hbEhpc3RvcnlfY2xpZW50X2lkX2ZrZXkiKQp9Cgptb2RlbCBGaW5hbmNpYWxJbmZvcm1hdGlvbiB7CiAgaWQgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgY3VycmVudF9lbXBsb3llciAgICBTdHJpbmc/CiAgam9iX3RpdGxlICAgICAgICAgICBTdHJpbmc/CiAgaW5jb21lICAgICAgICAgICAgICBGbG9hdD8KICBtb250aGx5X2V4cGVuc2VzICAgIEZsb2F0PwogIGRlYnRzICAgICAgICAgICAgICAgRmxvYXQ/CiAgYXNzZXRzICAgICAgICAgICAgICBTdHJpbmc/CiAgbGlhYmlsaXRpZXMgICAgICAgICBTdHJpbmc/CiAgYmFua3J1cHRjeV9oaXN0b3J5ICBCb29sZWFuCiAgY2xpZW50X2lkICAgICAgICAgICBJbnQKICBQZXJzb25hbEluZm9ybWF0aW9uIFBlcnNvbmFsSW5mb3JtYXRpb24gQHJlbGF0aW9uKGZpZWxkczogW2NsaWVudF9pZF0sIHJlZmVyZW5jZXM6IFtpZF0pCgogIEBAaW5kZXgoW2NsaWVudF9pZF0sIG1hcDogIkZpbmFuY2lhbEluZm9ybWF0aW9uX2NsaWVudF9pZF9ma2V5IikKfQoKbW9kZWwgTGVnYWxIaXN0b3J5IHsKICBpZCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBjcmltaW5hbF9oaXN0b3J5ICAgICAgICAgICAgICAgIFN0cmluZz8KICBjaXZpbF9saXRpZ2F0aW9uX2hpc3RvcnkgICAgICAgIFN0cmluZz8KICBsZWdhbF9yZXN0cmljdGlvbnNfb3JfcHJvYmF0aW9uIFN0cmluZz8KICBjbGllbnRfaWQgICAgICAgICAgICAgICAgICAgICAgIEludAogIFBlcnNvbmFsSW5mb3JtYXRpb24gICAgICAgICAgICAgUGVyc29uYWxJbmZvcm1hdGlvbiBAcmVsYXRpb24oZmllbGRzOiBbY2xpZW50X2lkXSwgcmVmZXJlbmNlczogW2lkXSkKCiAgQEBpbmRleChbY2xpZW50X2lkXSwgbWFwOiAiTGVnYWxIaXN0b3J5X2NsaWVudF9pZF9ma2V5IikKfQoKbW9kZWwgUGVyc29uYWxJbmZvcm1hdGlvbiB7CiAgaWQgICAgICAgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGZpcnN0X25hbWUgICAgICAgICAgICAgU3RyaW5nCiAgbWlkZGxlX25hbWUgICAgICAgICAgICBTdHJpbmc/CiAgbGFzdF9uYW1lICAgICAgICAgICAgICBTdHJpbmcKICBhZGRyZXNzICAgICAgICAgICAgICAgIFN0cmluZz8KICBwaG9uZV9udW1iZXIgICAgICAgICAgIFN0cmluZwogIGVtYWlsX2FkZHJlc3MgICAgICAgICAgU3RyaW5nCiAgZGF0ZV9vZl9iaXJ0aCAgICAgICAgICBEYXRlVGltZT8KICBzb2NpYWxfc2VjdXJpdHlfbnVtYmVyIFN0cmluZz8KICBwcmVmZXJyZWRfcHJvbm91bnMgICAgIFN0cmluZz8KICBBZGRpdGlvbmFsSW5mb3JtYXRpb24gIEFkZGl0aW9uYWxJbmZvcm1hdGlvbltdCiAgQXR0YWNobWVudHMgICAgICAgICAgICBBdHRhY2htZW50c1tdCiAgQ2FzZURldGFpbHMgICAgICAgICAgICBDYXNlRGV0YWlsc1tdCiAgRWxlY3Ryb25pY1NpZ25hdHVyZSAgICBFbGVjdHJvbmljU2lnbmF0dXJlW10KICBGYW1pbHlQZXJzb25hbEhpc3RvcnkgIEZhbWlseVBlcnNvbmFsSGlzdG9yeVtdCiAgRmluYW5jaWFsSW5mb3JtYXRpb24gICBGaW5hbmNpYWxJbmZvcm1hdGlvbltdCiAgTGVnYWxIaXN0b3J5ICAgICAgICAgICBMZWdhbEhpc3RvcnlbXQp9Cg==",
  "inlineSchemaHash": "554fd389fa219b1cf31d708e086ba7495853a4865ec734e528040aa250b6dcc8",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"AdditionalInformation\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preferred_communication_method\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emergency_contact_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emergency_contact_relationship\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"emergency_contact_phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"how_did_you_hear_about_us\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorization_and_consent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"client_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PersonalInformation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PersonalInformation\",\"relationName\":\"AdditionalInformationToPersonalInformation\",\"relationFromFields\":[\"client_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Attachments\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"client_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"document_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"document_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PersonalInformation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PersonalInformation\",\"relationName\":\"AttachmentsToPersonalInformation\",\"relationFromFields\":[\"client_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CaseDetails\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nature_of_legal_issue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date_of_incident\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"case_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opposing_parties\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_attorney\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"client_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PersonalInformation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PersonalInformation\",\"relationName\":\"CaseDetailsToPersonalInformation\",\"relationFromFields\":[\"client_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ElectronicSignature\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"client_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"signature_image_url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"signature_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PersonalInformation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PersonalInformation\",\"relationName\":\"ElectronicSignatureToPersonalInformation\",\"relationFromFields\":[\"client_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FamilyPersonalHistory\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"marital_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dependents\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"health_information\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"child_custody_support_info\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"client_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PersonalInformation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PersonalInformation\",\"relationName\":\"FamilyPersonalHistoryToPersonalInformation\",\"relationFromFields\":[\"client_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FinancialInformation\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"current_employer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"job_title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"income\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"monthly_expenses\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"debts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"assets\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"liabilities\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bankruptcy_history\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"client_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PersonalInformation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PersonalInformation\",\"relationName\":\"FinancialInformationToPersonalInformation\",\"relationFromFields\":[\"client_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"LegalHistory\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"criminal_history\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"civil_litigation_history\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"legal_restrictions_or_probation\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"client_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PersonalInformation\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PersonalInformation\",\"relationName\":\"LegalHistoryToPersonalInformation\",\"relationFromFields\":[\"client_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PersonalInformation\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"first_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"middle_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email_address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date_of_birth\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"social_security_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"preferred_pronouns\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AdditionalInformation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AdditionalInformation\",\"relationName\":\"AdditionalInformationToPersonalInformation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Attachments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Attachments\",\"relationName\":\"AttachmentsToPersonalInformation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CaseDetails\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"CaseDetails\",\"relationName\":\"CaseDetailsToPersonalInformation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ElectronicSignature\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ElectronicSignature\",\"relationName\":\"ElectronicSignatureToPersonalInformation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FamilyPersonalHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FamilyPersonalHistory\",\"relationName\":\"FamilyPersonalHistoryToPersonalInformation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"FinancialInformation\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"FinancialInformation\",\"relationName\":\"FinancialInformationToPersonalInformation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LegalHistory\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LegalHistory\",\"relationName\":\"LegalHistoryToPersonalInformation\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

