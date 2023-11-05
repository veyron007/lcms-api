
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


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

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
