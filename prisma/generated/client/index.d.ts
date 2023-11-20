
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AdditionalInformation
 * 
 */
export type AdditionalInformation = $Result.DefaultSelection<Prisma.$AdditionalInformationPayload>
/**
 * Model Attachments
 * 
 */
export type Attachments = $Result.DefaultSelection<Prisma.$AttachmentsPayload>
/**
 * Model CaseDetails
 * 
 */
export type CaseDetails = $Result.DefaultSelection<Prisma.$CaseDetailsPayload>
/**
 * Model ElectronicSignature
 * 
 */
export type ElectronicSignature = $Result.DefaultSelection<Prisma.$ElectronicSignaturePayload>
/**
 * Model FamilyPersonalHistory
 * 
 */
export type FamilyPersonalHistory = $Result.DefaultSelection<Prisma.$FamilyPersonalHistoryPayload>
/**
 * Model FinancialInformation
 * 
 */
export type FinancialInformation = $Result.DefaultSelection<Prisma.$FinancialInformationPayload>
/**
 * Model LegalHistory
 * 
 */
export type LegalHistory = $Result.DefaultSelection<Prisma.$LegalHistoryPayload>
/**
 * Model PersonalInformation
 * 
 */
export type PersonalInformation = $Result.DefaultSelection<Prisma.$PersonalInformationPayload>
/**
 * Model UserLogin
 * 
 */
export type UserLogin = $Result.DefaultSelection<Prisma.$UserLoginPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AdditionalInformations
 * const additionalInformations = await prisma.additionalInformation.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AdditionalInformations
   * const additionalInformations = await prisma.additionalInformation.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.additionalInformation`: Exposes CRUD operations for the **AdditionalInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdditionalInformations
    * const additionalInformations = await prisma.additionalInformation.findMany()
    * ```
    */
  get additionalInformation(): Prisma.AdditionalInformationDelegate<ExtArgs>;

  /**
   * `prisma.attachments`: Exposes CRUD operations for the **Attachments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachments.findMany()
    * ```
    */
  get attachments(): Prisma.AttachmentsDelegate<ExtArgs>;

  /**
   * `prisma.caseDetails`: Exposes CRUD operations for the **CaseDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CaseDetails
    * const caseDetails = await prisma.caseDetails.findMany()
    * ```
    */
  get caseDetails(): Prisma.CaseDetailsDelegate<ExtArgs>;

  /**
   * `prisma.electronicSignature`: Exposes CRUD operations for the **ElectronicSignature** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ElectronicSignatures
    * const electronicSignatures = await prisma.electronicSignature.findMany()
    * ```
    */
  get electronicSignature(): Prisma.ElectronicSignatureDelegate<ExtArgs>;

  /**
   * `prisma.familyPersonalHistory`: Exposes CRUD operations for the **FamilyPersonalHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FamilyPersonalHistories
    * const familyPersonalHistories = await prisma.familyPersonalHistory.findMany()
    * ```
    */
  get familyPersonalHistory(): Prisma.FamilyPersonalHistoryDelegate<ExtArgs>;

  /**
   * `prisma.financialInformation`: Exposes CRUD operations for the **FinancialInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinancialInformations
    * const financialInformations = await prisma.financialInformation.findMany()
    * ```
    */
  get financialInformation(): Prisma.FinancialInformationDelegate<ExtArgs>;

  /**
   * `prisma.legalHistory`: Exposes CRUD operations for the **LegalHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LegalHistories
    * const legalHistories = await prisma.legalHistory.findMany()
    * ```
    */
  get legalHistory(): Prisma.LegalHistoryDelegate<ExtArgs>;

  /**
   * `prisma.personalInformation`: Exposes CRUD operations for the **PersonalInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonalInformations
    * const personalInformations = await prisma.personalInformation.findMany()
    * ```
    */
  get personalInformation(): Prisma.PersonalInformationDelegate<ExtArgs>;

  /**
   * `prisma.userLogin`: Exposes CRUD operations for the **UserLogin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLogins
    * const userLogins = await prisma.userLogin.findMany()
    * ```
    */
  get userLogin(): Prisma.UserLoginDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AdditionalInformation: 'AdditionalInformation',
    Attachments: 'Attachments',
    CaseDetails: 'CaseDetails',
    ElectronicSignature: 'ElectronicSignature',
    FamilyPersonalHistory: 'FamilyPersonalHistory',
    FinancialInformation: 'FinancialInformation',
    LegalHistory: 'LegalHistory',
    PersonalInformation: 'PersonalInformation',
    UserLogin: 'UserLogin'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'additionalInformation' | 'attachments' | 'caseDetails' | 'electronicSignature' | 'familyPersonalHistory' | 'financialInformation' | 'legalHistory' | 'personalInformation' | 'userLogin'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      AdditionalInformation: {
        payload: Prisma.$AdditionalInformationPayload<ExtArgs>
        fields: Prisma.AdditionalInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdditionalInformationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdditionalInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdditionalInformationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdditionalInformationPayload>
          }
          findFirst: {
            args: Prisma.AdditionalInformationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdditionalInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdditionalInformationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdditionalInformationPayload>
          }
          findMany: {
            args: Prisma.AdditionalInformationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdditionalInformationPayload>[]
          }
          create: {
            args: Prisma.AdditionalInformationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdditionalInformationPayload>
          }
          createMany: {
            args: Prisma.AdditionalInformationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AdditionalInformationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdditionalInformationPayload>
          }
          update: {
            args: Prisma.AdditionalInformationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdditionalInformationPayload>
          }
          deleteMany: {
            args: Prisma.AdditionalInformationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AdditionalInformationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AdditionalInformationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdditionalInformationPayload>
          }
          aggregate: {
            args: Prisma.AdditionalInformationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdditionalInformation>
          }
          groupBy: {
            args: Prisma.AdditionalInformationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdditionalInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdditionalInformationCountArgs<ExtArgs>,
            result: $Utils.Optional<AdditionalInformationCountAggregateOutputType> | number
          }
        }
      }
      Attachments: {
        payload: Prisma.$AttachmentsPayload<ExtArgs>
        fields: Prisma.AttachmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttachmentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachmentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>
          }
          findFirst: {
            args: Prisma.AttachmentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachmentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>
          }
          findMany: {
            args: Prisma.AttachmentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>[]
          }
          create: {
            args: Prisma.AttachmentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>
          }
          createMany: {
            args: Prisma.AttachmentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AttachmentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>
          }
          update: {
            args: Prisma.AttachmentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>
          }
          deleteMany: {
            args: Prisma.AttachmentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AttachmentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AttachmentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttachmentsPayload>
          }
          aggregate: {
            args: Prisma.AttachmentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAttachments>
          }
          groupBy: {
            args: Prisma.AttachmentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AttachmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttachmentsCountArgs<ExtArgs>,
            result: $Utils.Optional<AttachmentsCountAggregateOutputType> | number
          }
        }
      }
      CaseDetails: {
        payload: Prisma.$CaseDetailsPayload<ExtArgs>
        fields: Prisma.CaseDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CaseDetailsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CaseDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CaseDetailsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CaseDetailsPayload>
          }
          findFirst: {
            args: Prisma.CaseDetailsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CaseDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CaseDetailsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CaseDetailsPayload>
          }
          findMany: {
            args: Prisma.CaseDetailsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CaseDetailsPayload>[]
          }
          create: {
            args: Prisma.CaseDetailsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CaseDetailsPayload>
          }
          createMany: {
            args: Prisma.CaseDetailsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CaseDetailsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CaseDetailsPayload>
          }
          update: {
            args: Prisma.CaseDetailsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CaseDetailsPayload>
          }
          deleteMany: {
            args: Prisma.CaseDetailsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CaseDetailsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CaseDetailsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CaseDetailsPayload>
          }
          aggregate: {
            args: Prisma.CaseDetailsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCaseDetails>
          }
          groupBy: {
            args: Prisma.CaseDetailsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CaseDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CaseDetailsCountArgs<ExtArgs>,
            result: $Utils.Optional<CaseDetailsCountAggregateOutputType> | number
          }
        }
      }
      ElectronicSignature: {
        payload: Prisma.$ElectronicSignaturePayload<ExtArgs>
        fields: Prisma.ElectronicSignatureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ElectronicSignatureFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ElectronicSignaturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ElectronicSignatureFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ElectronicSignaturePayload>
          }
          findFirst: {
            args: Prisma.ElectronicSignatureFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ElectronicSignaturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ElectronicSignatureFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ElectronicSignaturePayload>
          }
          findMany: {
            args: Prisma.ElectronicSignatureFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ElectronicSignaturePayload>[]
          }
          create: {
            args: Prisma.ElectronicSignatureCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ElectronicSignaturePayload>
          }
          createMany: {
            args: Prisma.ElectronicSignatureCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ElectronicSignatureDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ElectronicSignaturePayload>
          }
          update: {
            args: Prisma.ElectronicSignatureUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ElectronicSignaturePayload>
          }
          deleteMany: {
            args: Prisma.ElectronicSignatureDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ElectronicSignatureUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ElectronicSignatureUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ElectronicSignaturePayload>
          }
          aggregate: {
            args: Prisma.ElectronicSignatureAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateElectronicSignature>
          }
          groupBy: {
            args: Prisma.ElectronicSignatureGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ElectronicSignatureGroupByOutputType>[]
          }
          count: {
            args: Prisma.ElectronicSignatureCountArgs<ExtArgs>,
            result: $Utils.Optional<ElectronicSignatureCountAggregateOutputType> | number
          }
        }
      }
      FamilyPersonalHistory: {
        payload: Prisma.$FamilyPersonalHistoryPayload<ExtArgs>
        fields: Prisma.FamilyPersonalHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FamilyPersonalHistoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyPersonalHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FamilyPersonalHistoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyPersonalHistoryPayload>
          }
          findFirst: {
            args: Prisma.FamilyPersonalHistoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyPersonalHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FamilyPersonalHistoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyPersonalHistoryPayload>
          }
          findMany: {
            args: Prisma.FamilyPersonalHistoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyPersonalHistoryPayload>[]
          }
          create: {
            args: Prisma.FamilyPersonalHistoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyPersonalHistoryPayload>
          }
          createMany: {
            args: Prisma.FamilyPersonalHistoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FamilyPersonalHistoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyPersonalHistoryPayload>
          }
          update: {
            args: Prisma.FamilyPersonalHistoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyPersonalHistoryPayload>
          }
          deleteMany: {
            args: Prisma.FamilyPersonalHistoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FamilyPersonalHistoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FamilyPersonalHistoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FamilyPersonalHistoryPayload>
          }
          aggregate: {
            args: Prisma.FamilyPersonalHistoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFamilyPersonalHistory>
          }
          groupBy: {
            args: Prisma.FamilyPersonalHistoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FamilyPersonalHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FamilyPersonalHistoryCountArgs<ExtArgs>,
            result: $Utils.Optional<FamilyPersonalHistoryCountAggregateOutputType> | number
          }
        }
      }
      FinancialInformation: {
        payload: Prisma.$FinancialInformationPayload<ExtArgs>
        fields: Prisma.FinancialInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancialInformationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinancialInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancialInformationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinancialInformationPayload>
          }
          findFirst: {
            args: Prisma.FinancialInformationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinancialInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancialInformationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinancialInformationPayload>
          }
          findMany: {
            args: Prisma.FinancialInformationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinancialInformationPayload>[]
          }
          create: {
            args: Prisma.FinancialInformationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinancialInformationPayload>
          }
          createMany: {
            args: Prisma.FinancialInformationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FinancialInformationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinancialInformationPayload>
          }
          update: {
            args: Prisma.FinancialInformationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinancialInformationPayload>
          }
          deleteMany: {
            args: Prisma.FinancialInformationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FinancialInformationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FinancialInformationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FinancialInformationPayload>
          }
          aggregate: {
            args: Prisma.FinancialInformationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFinancialInformation>
          }
          groupBy: {
            args: Prisma.FinancialInformationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FinancialInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinancialInformationCountArgs<ExtArgs>,
            result: $Utils.Optional<FinancialInformationCountAggregateOutputType> | number
          }
        }
      }
      LegalHistory: {
        payload: Prisma.$LegalHistoryPayload<ExtArgs>
        fields: Prisma.LegalHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LegalHistoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LegalHistoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalHistoryPayload>
          }
          findFirst: {
            args: Prisma.LegalHistoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LegalHistoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalHistoryPayload>
          }
          findMany: {
            args: Prisma.LegalHistoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalHistoryPayload>[]
          }
          create: {
            args: Prisma.LegalHistoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalHistoryPayload>
          }
          createMany: {
            args: Prisma.LegalHistoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LegalHistoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalHistoryPayload>
          }
          update: {
            args: Prisma.LegalHistoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalHistoryPayload>
          }
          deleteMany: {
            args: Prisma.LegalHistoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LegalHistoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LegalHistoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LegalHistoryPayload>
          }
          aggregate: {
            args: Prisma.LegalHistoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLegalHistory>
          }
          groupBy: {
            args: Prisma.LegalHistoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LegalHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LegalHistoryCountArgs<ExtArgs>,
            result: $Utils.Optional<LegalHistoryCountAggregateOutputType> | number
          }
        }
      }
      PersonalInformation: {
        payload: Prisma.$PersonalInformationPayload<ExtArgs>
        fields: Prisma.PersonalInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalInformationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonalInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalInformationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonalInformationPayload>
          }
          findFirst: {
            args: Prisma.PersonalInformationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonalInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalInformationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonalInformationPayload>
          }
          findMany: {
            args: Prisma.PersonalInformationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonalInformationPayload>[]
          }
          create: {
            args: Prisma.PersonalInformationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonalInformationPayload>
          }
          createMany: {
            args: Prisma.PersonalInformationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PersonalInformationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonalInformationPayload>
          }
          update: {
            args: Prisma.PersonalInformationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonalInformationPayload>
          }
          deleteMany: {
            args: Prisma.PersonalInformationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalInformationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PersonalInformationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PersonalInformationPayload>
          }
          aggregate: {
            args: Prisma.PersonalInformationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePersonalInformation>
          }
          groupBy: {
            args: Prisma.PersonalInformationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PersonalInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalInformationCountArgs<ExtArgs>,
            result: $Utils.Optional<PersonalInformationCountAggregateOutputType> | number
          }
        }
      }
      UserLogin: {
        payload: Prisma.$UserLoginPayload<ExtArgs>
        fields: Prisma.UserLoginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLoginFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLoginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLoginFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLoginPayload>
          }
          findFirst: {
            args: Prisma.UserLoginFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLoginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLoginFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLoginPayload>
          }
          findMany: {
            args: Prisma.UserLoginFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLoginPayload>[]
          }
          create: {
            args: Prisma.UserLoginCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLoginPayload>
          }
          createMany: {
            args: Prisma.UserLoginCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserLoginDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLoginPayload>
          }
          update: {
            args: Prisma.UserLoginUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLoginPayload>
          }
          deleteMany: {
            args: Prisma.UserLoginDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserLoginUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserLoginUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLoginPayload>
          }
          aggregate: {
            args: Prisma.UserLoginAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserLogin>
          }
          groupBy: {
            args: Prisma.UserLoginGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserLoginGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLoginCountArgs<ExtArgs>,
            result: $Utils.Optional<UserLoginCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PersonalInformationCountOutputType
   */

  export type PersonalInformationCountOutputType = {
    AdditionalInformation: number
    Attachments: number
    CaseDetails: number
    ElectronicSignature: number
    FamilyPersonalHistory: number
    FinancialInformation: number
    LegalHistory: number
  }

  export type PersonalInformationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AdditionalInformation?: boolean | PersonalInformationCountOutputTypeCountAdditionalInformationArgs
    Attachments?: boolean | PersonalInformationCountOutputTypeCountAttachmentsArgs
    CaseDetails?: boolean | PersonalInformationCountOutputTypeCountCaseDetailsArgs
    ElectronicSignature?: boolean | PersonalInformationCountOutputTypeCountElectronicSignatureArgs
    FamilyPersonalHistory?: boolean | PersonalInformationCountOutputTypeCountFamilyPersonalHistoryArgs
    FinancialInformation?: boolean | PersonalInformationCountOutputTypeCountFinancialInformationArgs
    LegalHistory?: boolean | PersonalInformationCountOutputTypeCountLegalHistoryArgs
  }

  // Custom InputTypes

  /**
   * PersonalInformationCountOutputType without action
   */
  export type PersonalInformationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformationCountOutputType
     */
    select?: PersonalInformationCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PersonalInformationCountOutputType without action
   */
  export type PersonalInformationCountOutputTypeCountAdditionalInformationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdditionalInformationWhereInput
  }


  /**
   * PersonalInformationCountOutputType without action
   */
  export type PersonalInformationCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentsWhereInput
  }


  /**
   * PersonalInformationCountOutputType without action
   */
  export type PersonalInformationCountOutputTypeCountCaseDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseDetailsWhereInput
  }


  /**
   * PersonalInformationCountOutputType without action
   */
  export type PersonalInformationCountOutputTypeCountElectronicSignatureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectronicSignatureWhereInput
  }


  /**
   * PersonalInformationCountOutputType without action
   */
  export type PersonalInformationCountOutputTypeCountFamilyPersonalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyPersonalHistoryWhereInput
  }


  /**
   * PersonalInformationCountOutputType without action
   */
  export type PersonalInformationCountOutputTypeCountFinancialInformationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialInformationWhereInput
  }


  /**
   * PersonalInformationCountOutputType without action
   */
  export type PersonalInformationCountOutputTypeCountLegalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegalHistoryWhereInput
  }



  /**
   * Models
   */

  /**
   * Model AdditionalInformation
   */

  export type AggregateAdditionalInformation = {
    _count: AdditionalInformationCountAggregateOutputType | null
    _avg: AdditionalInformationAvgAggregateOutputType | null
    _sum: AdditionalInformationSumAggregateOutputType | null
    _min: AdditionalInformationMinAggregateOutputType | null
    _max: AdditionalInformationMaxAggregateOutputType | null
  }

  export type AdditionalInformationAvgAggregateOutputType = {
    id: number | null
    client_id: number | null
  }

  export type AdditionalInformationSumAggregateOutputType = {
    id: number | null
    client_id: number | null
  }

  export type AdditionalInformationMinAggregateOutputType = {
    id: number | null
    preferred_communication_method: string | null
    emergency_contact_name: string | null
    emergency_contact_relationship: string | null
    emergency_contact_phone: string | null
    how_did_you_hear_about_us: string | null
    authorization_and_consent: boolean | null
    client_id: number | null
  }

  export type AdditionalInformationMaxAggregateOutputType = {
    id: number | null
    preferred_communication_method: string | null
    emergency_contact_name: string | null
    emergency_contact_relationship: string | null
    emergency_contact_phone: string | null
    how_did_you_hear_about_us: string | null
    authorization_and_consent: boolean | null
    client_id: number | null
  }

  export type AdditionalInformationCountAggregateOutputType = {
    id: number
    preferred_communication_method: number
    emergency_contact_name: number
    emergency_contact_relationship: number
    emergency_contact_phone: number
    how_did_you_hear_about_us: number
    authorization_and_consent: number
    client_id: number
    _all: number
  }


  export type AdditionalInformationAvgAggregateInputType = {
    id?: true
    client_id?: true
  }

  export type AdditionalInformationSumAggregateInputType = {
    id?: true
    client_id?: true
  }

  export type AdditionalInformationMinAggregateInputType = {
    id?: true
    preferred_communication_method?: true
    emergency_contact_name?: true
    emergency_contact_relationship?: true
    emergency_contact_phone?: true
    how_did_you_hear_about_us?: true
    authorization_and_consent?: true
    client_id?: true
  }

  export type AdditionalInformationMaxAggregateInputType = {
    id?: true
    preferred_communication_method?: true
    emergency_contact_name?: true
    emergency_contact_relationship?: true
    emergency_contact_phone?: true
    how_did_you_hear_about_us?: true
    authorization_and_consent?: true
    client_id?: true
  }

  export type AdditionalInformationCountAggregateInputType = {
    id?: true
    preferred_communication_method?: true
    emergency_contact_name?: true
    emergency_contact_relationship?: true
    emergency_contact_phone?: true
    how_did_you_hear_about_us?: true
    authorization_and_consent?: true
    client_id?: true
    _all?: true
  }

  export type AdditionalInformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdditionalInformation to aggregate.
     */
    where?: AdditionalInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdditionalInformations to fetch.
     */
    orderBy?: AdditionalInformationOrderByWithRelationInput | AdditionalInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdditionalInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdditionalInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdditionalInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdditionalInformations
    **/
    _count?: true | AdditionalInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdditionalInformationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdditionalInformationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdditionalInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdditionalInformationMaxAggregateInputType
  }

  export type GetAdditionalInformationAggregateType<T extends AdditionalInformationAggregateArgs> = {
        [P in keyof T & keyof AggregateAdditionalInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdditionalInformation[P]>
      : GetScalarType<T[P], AggregateAdditionalInformation[P]>
  }




  export type AdditionalInformationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdditionalInformationWhereInput
    orderBy?: AdditionalInformationOrderByWithAggregationInput | AdditionalInformationOrderByWithAggregationInput[]
    by: AdditionalInformationScalarFieldEnum[] | AdditionalInformationScalarFieldEnum
    having?: AdditionalInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdditionalInformationCountAggregateInputType | true
    _avg?: AdditionalInformationAvgAggregateInputType
    _sum?: AdditionalInformationSumAggregateInputType
    _min?: AdditionalInformationMinAggregateInputType
    _max?: AdditionalInformationMaxAggregateInputType
  }

  export type AdditionalInformationGroupByOutputType = {
    id: number
    preferred_communication_method: string | null
    emergency_contact_name: string | null
    emergency_contact_relationship: string | null
    emergency_contact_phone: string | null
    how_did_you_hear_about_us: string | null
    authorization_and_consent: boolean
    client_id: number
    _count: AdditionalInformationCountAggregateOutputType | null
    _avg: AdditionalInformationAvgAggregateOutputType | null
    _sum: AdditionalInformationSumAggregateOutputType | null
    _min: AdditionalInformationMinAggregateOutputType | null
    _max: AdditionalInformationMaxAggregateOutputType | null
  }

  type GetAdditionalInformationGroupByPayload<T extends AdditionalInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdditionalInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdditionalInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdditionalInformationGroupByOutputType[P]>
            : GetScalarType<T[P], AdditionalInformationGroupByOutputType[P]>
        }
      >
    >


  export type AdditionalInformationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    preferred_communication_method?: boolean
    emergency_contact_name?: boolean
    emergency_contact_relationship?: boolean
    emergency_contact_phone?: boolean
    how_did_you_hear_about_us?: boolean
    authorization_and_consent?: boolean
    client_id?: boolean
    PersonalInformation?: boolean | PersonalInformationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["additionalInformation"]>

  export type AdditionalInformationSelectScalar = {
    id?: boolean
    preferred_communication_method?: boolean
    emergency_contact_name?: boolean
    emergency_contact_relationship?: boolean
    emergency_contact_phone?: boolean
    how_did_you_hear_about_us?: boolean
    authorization_and_consent?: boolean
    client_id?: boolean
  }

  export type AdditionalInformationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PersonalInformation?: boolean | PersonalInformationDefaultArgs<ExtArgs>
  }


  export type $AdditionalInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdditionalInformation"
    objects: {
      PersonalInformation: Prisma.$PersonalInformationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      preferred_communication_method: string | null
      emergency_contact_name: string | null
      emergency_contact_relationship: string | null
      emergency_contact_phone: string | null
      how_did_you_hear_about_us: string | null
      authorization_and_consent: boolean
      client_id: number
    }, ExtArgs["result"]["additionalInformation"]>
    composites: {}
  }


  type AdditionalInformationGetPayload<S extends boolean | null | undefined | AdditionalInformationDefaultArgs> = $Result.GetResult<Prisma.$AdditionalInformationPayload, S>

  type AdditionalInformationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdditionalInformationFindManyArgs, 'select' | 'include'> & {
      select?: AdditionalInformationCountAggregateInputType | true
    }

  export interface AdditionalInformationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdditionalInformation'], meta: { name: 'AdditionalInformation' } }
    /**
     * Find zero or one AdditionalInformation that matches the filter.
     * @param {AdditionalInformationFindUniqueArgs} args - Arguments to find a AdditionalInformation
     * @example
     * // Get one AdditionalInformation
     * const additionalInformation = await prisma.additionalInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdditionalInformationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdditionalInformationFindUniqueArgs<ExtArgs>>
    ): Prisma__AdditionalInformationClient<$Result.GetResult<Prisma.$AdditionalInformationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AdditionalInformation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdditionalInformationFindUniqueOrThrowArgs} args - Arguments to find a AdditionalInformation
     * @example
     * // Get one AdditionalInformation
     * const additionalInformation = await prisma.additionalInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdditionalInformationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdditionalInformationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AdditionalInformationClient<$Result.GetResult<Prisma.$AdditionalInformationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AdditionalInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalInformationFindFirstArgs} args - Arguments to find a AdditionalInformation
     * @example
     * // Get one AdditionalInformation
     * const additionalInformation = await prisma.additionalInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdditionalInformationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdditionalInformationFindFirstArgs<ExtArgs>>
    ): Prisma__AdditionalInformationClient<$Result.GetResult<Prisma.$AdditionalInformationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AdditionalInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalInformationFindFirstOrThrowArgs} args - Arguments to find a AdditionalInformation
     * @example
     * // Get one AdditionalInformation
     * const additionalInformation = await prisma.additionalInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdditionalInformationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdditionalInformationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AdditionalInformationClient<$Result.GetResult<Prisma.$AdditionalInformationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AdditionalInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalInformationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdditionalInformations
     * const additionalInformations = await prisma.additionalInformation.findMany()
     * 
     * // Get first 10 AdditionalInformations
     * const additionalInformations = await prisma.additionalInformation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const additionalInformationWithIdOnly = await prisma.additionalInformation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdditionalInformationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdditionalInformationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdditionalInformationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AdditionalInformation.
     * @param {AdditionalInformationCreateArgs} args - Arguments to create a AdditionalInformation.
     * @example
     * // Create one AdditionalInformation
     * const AdditionalInformation = await prisma.additionalInformation.create({
     *   data: {
     *     // ... data to create a AdditionalInformation
     *   }
     * })
     * 
    **/
    create<T extends AdditionalInformationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdditionalInformationCreateArgs<ExtArgs>>
    ): Prisma__AdditionalInformationClient<$Result.GetResult<Prisma.$AdditionalInformationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AdditionalInformations.
     *     @param {AdditionalInformationCreateManyArgs} args - Arguments to create many AdditionalInformations.
     *     @example
     *     // Create many AdditionalInformations
     *     const additionalInformation = await prisma.additionalInformation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdditionalInformationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdditionalInformationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AdditionalInformation.
     * @param {AdditionalInformationDeleteArgs} args - Arguments to delete one AdditionalInformation.
     * @example
     * // Delete one AdditionalInformation
     * const AdditionalInformation = await prisma.additionalInformation.delete({
     *   where: {
     *     // ... filter to delete one AdditionalInformation
     *   }
     * })
     * 
    **/
    delete<T extends AdditionalInformationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdditionalInformationDeleteArgs<ExtArgs>>
    ): Prisma__AdditionalInformationClient<$Result.GetResult<Prisma.$AdditionalInformationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AdditionalInformation.
     * @param {AdditionalInformationUpdateArgs} args - Arguments to update one AdditionalInformation.
     * @example
     * // Update one AdditionalInformation
     * const additionalInformation = await prisma.additionalInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdditionalInformationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdditionalInformationUpdateArgs<ExtArgs>>
    ): Prisma__AdditionalInformationClient<$Result.GetResult<Prisma.$AdditionalInformationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AdditionalInformations.
     * @param {AdditionalInformationDeleteManyArgs} args - Arguments to filter AdditionalInformations to delete.
     * @example
     * // Delete a few AdditionalInformations
     * const { count } = await prisma.additionalInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdditionalInformationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdditionalInformationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdditionalInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdditionalInformations
     * const additionalInformation = await prisma.additionalInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdditionalInformationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdditionalInformationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdditionalInformation.
     * @param {AdditionalInformationUpsertArgs} args - Arguments to update or create a AdditionalInformation.
     * @example
     * // Update or create a AdditionalInformation
     * const additionalInformation = await prisma.additionalInformation.upsert({
     *   create: {
     *     // ... data to create a AdditionalInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdditionalInformation we want to update
     *   }
     * })
    **/
    upsert<T extends AdditionalInformationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdditionalInformationUpsertArgs<ExtArgs>>
    ): Prisma__AdditionalInformationClient<$Result.GetResult<Prisma.$AdditionalInformationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AdditionalInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalInformationCountArgs} args - Arguments to filter AdditionalInformations to count.
     * @example
     * // Count the number of AdditionalInformations
     * const count = await prisma.additionalInformation.count({
     *   where: {
     *     // ... the filter for the AdditionalInformations we want to count
     *   }
     * })
    **/
    count<T extends AdditionalInformationCountArgs>(
      args?: Subset<T, AdditionalInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdditionalInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdditionalInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdditionalInformationAggregateArgs>(args: Subset<T, AdditionalInformationAggregateArgs>): Prisma.PrismaPromise<GetAdditionalInformationAggregateType<T>>

    /**
     * Group by AdditionalInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdditionalInformationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdditionalInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdditionalInformationGroupByArgs['orderBy'] }
        : { orderBy?: AdditionalInformationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdditionalInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdditionalInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdditionalInformation model
   */
  readonly fields: AdditionalInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdditionalInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdditionalInformationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    PersonalInformation<T extends PersonalInformationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonalInformationDefaultArgs<ExtArgs>>): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AdditionalInformation model
   */ 
  interface AdditionalInformationFieldRefs {
    readonly id: FieldRef<"AdditionalInformation", 'Int'>
    readonly preferred_communication_method: FieldRef<"AdditionalInformation", 'String'>
    readonly emergency_contact_name: FieldRef<"AdditionalInformation", 'String'>
    readonly emergency_contact_relationship: FieldRef<"AdditionalInformation", 'String'>
    readonly emergency_contact_phone: FieldRef<"AdditionalInformation", 'String'>
    readonly how_did_you_hear_about_us: FieldRef<"AdditionalInformation", 'String'>
    readonly authorization_and_consent: FieldRef<"AdditionalInformation", 'Boolean'>
    readonly client_id: FieldRef<"AdditionalInformation", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * AdditionalInformation findUnique
   */
  export type AdditionalInformationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalInformation
     */
    select?: AdditionalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdditionalInformationInclude<ExtArgs> | null
    /**
     * Filter, which AdditionalInformation to fetch.
     */
    where: AdditionalInformationWhereUniqueInput
  }


  /**
   * AdditionalInformation findUniqueOrThrow
   */
  export type AdditionalInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalInformation
     */
    select?: AdditionalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdditionalInformationInclude<ExtArgs> | null
    /**
     * Filter, which AdditionalInformation to fetch.
     */
    where: AdditionalInformationWhereUniqueInput
  }


  /**
   * AdditionalInformation findFirst
   */
  export type AdditionalInformationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalInformation
     */
    select?: AdditionalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdditionalInformationInclude<ExtArgs> | null
    /**
     * Filter, which AdditionalInformation to fetch.
     */
    where?: AdditionalInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdditionalInformations to fetch.
     */
    orderBy?: AdditionalInformationOrderByWithRelationInput | AdditionalInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdditionalInformations.
     */
    cursor?: AdditionalInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdditionalInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdditionalInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdditionalInformations.
     */
    distinct?: AdditionalInformationScalarFieldEnum | AdditionalInformationScalarFieldEnum[]
  }


  /**
   * AdditionalInformation findFirstOrThrow
   */
  export type AdditionalInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalInformation
     */
    select?: AdditionalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdditionalInformationInclude<ExtArgs> | null
    /**
     * Filter, which AdditionalInformation to fetch.
     */
    where?: AdditionalInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdditionalInformations to fetch.
     */
    orderBy?: AdditionalInformationOrderByWithRelationInput | AdditionalInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdditionalInformations.
     */
    cursor?: AdditionalInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdditionalInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdditionalInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdditionalInformations.
     */
    distinct?: AdditionalInformationScalarFieldEnum | AdditionalInformationScalarFieldEnum[]
  }


  /**
   * AdditionalInformation findMany
   */
  export type AdditionalInformationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalInformation
     */
    select?: AdditionalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdditionalInformationInclude<ExtArgs> | null
    /**
     * Filter, which AdditionalInformations to fetch.
     */
    where?: AdditionalInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdditionalInformations to fetch.
     */
    orderBy?: AdditionalInformationOrderByWithRelationInput | AdditionalInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdditionalInformations.
     */
    cursor?: AdditionalInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdditionalInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdditionalInformations.
     */
    skip?: number
    distinct?: AdditionalInformationScalarFieldEnum | AdditionalInformationScalarFieldEnum[]
  }


  /**
   * AdditionalInformation create
   */
  export type AdditionalInformationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalInformation
     */
    select?: AdditionalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdditionalInformationInclude<ExtArgs> | null
    /**
     * The data needed to create a AdditionalInformation.
     */
    data: XOR<AdditionalInformationCreateInput, AdditionalInformationUncheckedCreateInput>
  }


  /**
   * AdditionalInformation createMany
   */
  export type AdditionalInformationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdditionalInformations.
     */
    data: AdditionalInformationCreateManyInput | AdditionalInformationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AdditionalInformation update
   */
  export type AdditionalInformationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalInformation
     */
    select?: AdditionalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdditionalInformationInclude<ExtArgs> | null
    /**
     * The data needed to update a AdditionalInformation.
     */
    data: XOR<AdditionalInformationUpdateInput, AdditionalInformationUncheckedUpdateInput>
    /**
     * Choose, which AdditionalInformation to update.
     */
    where: AdditionalInformationWhereUniqueInput
  }


  /**
   * AdditionalInformation updateMany
   */
  export type AdditionalInformationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdditionalInformations.
     */
    data: XOR<AdditionalInformationUpdateManyMutationInput, AdditionalInformationUncheckedUpdateManyInput>
    /**
     * Filter which AdditionalInformations to update
     */
    where?: AdditionalInformationWhereInput
  }


  /**
   * AdditionalInformation upsert
   */
  export type AdditionalInformationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalInformation
     */
    select?: AdditionalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdditionalInformationInclude<ExtArgs> | null
    /**
     * The filter to search for the AdditionalInformation to update in case it exists.
     */
    where: AdditionalInformationWhereUniqueInput
    /**
     * In case the AdditionalInformation found by the `where` argument doesn't exist, create a new AdditionalInformation with this data.
     */
    create: XOR<AdditionalInformationCreateInput, AdditionalInformationUncheckedCreateInput>
    /**
     * In case the AdditionalInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdditionalInformationUpdateInput, AdditionalInformationUncheckedUpdateInput>
  }


  /**
   * AdditionalInformation delete
   */
  export type AdditionalInformationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalInformation
     */
    select?: AdditionalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdditionalInformationInclude<ExtArgs> | null
    /**
     * Filter which AdditionalInformation to delete.
     */
    where: AdditionalInformationWhereUniqueInput
  }


  /**
   * AdditionalInformation deleteMany
   */
  export type AdditionalInformationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdditionalInformations to delete
     */
    where?: AdditionalInformationWhereInput
  }


  /**
   * AdditionalInformation without action
   */
  export type AdditionalInformationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalInformation
     */
    select?: AdditionalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdditionalInformationInclude<ExtArgs> | null
  }



  /**
   * Model Attachments
   */

  export type AggregateAttachments = {
    _count: AttachmentsCountAggregateOutputType | null
    _avg: AttachmentsAvgAggregateOutputType | null
    _sum: AttachmentsSumAggregateOutputType | null
    _min: AttachmentsMinAggregateOutputType | null
    _max: AttachmentsMaxAggregateOutputType | null
  }

  export type AttachmentsAvgAggregateOutputType = {
    id: number | null
    client_id: number | null
  }

  export type AttachmentsSumAggregateOutputType = {
    id: number | null
    client_id: number | null
  }

  export type AttachmentsMinAggregateOutputType = {
    id: number | null
    client_id: number | null
    document_name: string | null
    document_url: string | null
  }

  export type AttachmentsMaxAggregateOutputType = {
    id: number | null
    client_id: number | null
    document_name: string | null
    document_url: string | null
  }

  export type AttachmentsCountAggregateOutputType = {
    id: number
    client_id: number
    document_name: number
    document_url: number
    _all: number
  }


  export type AttachmentsAvgAggregateInputType = {
    id?: true
    client_id?: true
  }

  export type AttachmentsSumAggregateInputType = {
    id?: true
    client_id?: true
  }

  export type AttachmentsMinAggregateInputType = {
    id?: true
    client_id?: true
    document_name?: true
    document_url?: true
  }

  export type AttachmentsMaxAggregateInputType = {
    id?: true
    client_id?: true
    document_name?: true
    document_url?: true
  }

  export type AttachmentsCountAggregateInputType = {
    id?: true
    client_id?: true
    document_name?: true
    document_url?: true
    _all?: true
  }

  export type AttachmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to aggregate.
     */
    where?: AttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentsOrderByWithRelationInput | AttachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attachments
    **/
    _count?: true | AttachmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttachmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttachmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentsMaxAggregateInputType
  }

  export type GetAttachmentsAggregateType<T extends AttachmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachments[P]>
      : GetScalarType<T[P], AggregateAttachments[P]>
  }




  export type AttachmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentsWhereInput
    orderBy?: AttachmentsOrderByWithAggregationInput | AttachmentsOrderByWithAggregationInput[]
    by: AttachmentsScalarFieldEnum[] | AttachmentsScalarFieldEnum
    having?: AttachmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentsCountAggregateInputType | true
    _avg?: AttachmentsAvgAggregateInputType
    _sum?: AttachmentsSumAggregateInputType
    _min?: AttachmentsMinAggregateInputType
    _max?: AttachmentsMaxAggregateInputType
  }

  export type AttachmentsGroupByOutputType = {
    id: number
    client_id: number
    document_name: string | null
    document_url: string | null
    _count: AttachmentsCountAggregateOutputType | null
    _avg: AttachmentsAvgAggregateOutputType | null
    _sum: AttachmentsSumAggregateOutputType | null
    _min: AttachmentsMinAggregateOutputType | null
    _max: AttachmentsMaxAggregateOutputType | null
  }

  type GetAttachmentsGroupByPayload<T extends AttachmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentsGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentsGroupByOutputType[P]>
        }
      >
    >


  export type AttachmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    document_name?: boolean
    document_url?: boolean
    PersonalInformation?: boolean | PersonalInformationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attachments"]>

  export type AttachmentsSelectScalar = {
    id?: boolean
    client_id?: boolean
    document_name?: boolean
    document_url?: boolean
  }

  export type AttachmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PersonalInformation?: boolean | PersonalInformationDefaultArgs<ExtArgs>
  }


  export type $AttachmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attachments"
    objects: {
      PersonalInformation: Prisma.$PersonalInformationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      client_id: number
      document_name: string | null
      document_url: string | null
    }, ExtArgs["result"]["attachments"]>
    composites: {}
  }


  type AttachmentsGetPayload<S extends boolean | null | undefined | AttachmentsDefaultArgs> = $Result.GetResult<Prisma.$AttachmentsPayload, S>

  type AttachmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttachmentsFindManyArgs, 'select' | 'include'> & {
      select?: AttachmentsCountAggregateInputType | true
    }

  export interface AttachmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attachments'], meta: { name: 'Attachments' } }
    /**
     * Find zero or one Attachments that matches the filter.
     * @param {AttachmentsFindUniqueArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AttachmentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentsFindUniqueArgs<ExtArgs>>
    ): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Attachments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AttachmentsFindUniqueOrThrowArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AttachmentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsFindFirstArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AttachmentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentsFindFirstArgs<ExtArgs>>
    ): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Attachments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsFindFirstOrThrowArgs} args - Arguments to find a Attachments
     * @example
     * // Get one Attachments
     * const attachments = await prisma.attachments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AttachmentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachments.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentsWithIdOnly = await prisma.attachments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AttachmentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Attachments.
     * @param {AttachmentsCreateArgs} args - Arguments to create a Attachments.
     * @example
     * // Create one Attachments
     * const Attachments = await prisma.attachments.create({
     *   data: {
     *     // ... data to create a Attachments
     *   }
     * })
     * 
    **/
    create<T extends AttachmentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentsCreateArgs<ExtArgs>>
    ): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Attachments.
     *     @param {AttachmentsCreateManyArgs} args - Arguments to create many Attachments.
     *     @example
     *     // Create many Attachments
     *     const attachments = await prisma.attachments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AttachmentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attachments.
     * @param {AttachmentsDeleteArgs} args - Arguments to delete one Attachments.
     * @example
     * // Delete one Attachments
     * const Attachments = await prisma.attachments.delete({
     *   where: {
     *     // ... filter to delete one Attachments
     *   }
     * })
     * 
    **/
    delete<T extends AttachmentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentsDeleteArgs<ExtArgs>>
    ): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Attachments.
     * @param {AttachmentsUpdateArgs} args - Arguments to update one Attachments.
     * @example
     * // Update one Attachments
     * const attachments = await prisma.attachments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AttachmentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentsUpdateArgs<ExtArgs>>
    ): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Attachments.
     * @param {AttachmentsDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AttachmentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttachmentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachments = await prisma.attachments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AttachmentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attachments.
     * @param {AttachmentsUpsertArgs} args - Arguments to update or create a Attachments.
     * @example
     * // Update or create a Attachments
     * const attachments = await prisma.attachments.upsert({
     *   create: {
     *     // ... data to create a Attachments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachments we want to update
     *   }
     * })
    **/
    upsert<T extends AttachmentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AttachmentsUpsertArgs<ExtArgs>>
    ): Prisma__AttachmentsClient<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachments.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentsCountArgs>(
      args?: Subset<T, AttachmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttachmentsAggregateArgs>(args: Subset<T, AttachmentsAggregateArgs>): Prisma.PrismaPromise<GetAttachmentsAggregateType<T>>

    /**
     * Group by Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttachmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentsGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttachmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attachments model
   */
  readonly fields: AttachmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attachments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttachmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    PersonalInformation<T extends PersonalInformationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonalInformationDefaultArgs<ExtArgs>>): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Attachments model
   */ 
  interface AttachmentsFieldRefs {
    readonly id: FieldRef<"Attachments", 'Int'>
    readonly client_id: FieldRef<"Attachments", 'Int'>
    readonly document_name: FieldRef<"Attachments", 'String'>
    readonly document_url: FieldRef<"Attachments", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Attachments findUnique
   */
  export type AttachmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where: AttachmentsWhereUniqueInput
  }


  /**
   * Attachments findUniqueOrThrow
   */
  export type AttachmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where: AttachmentsWhereUniqueInput
  }


  /**
   * Attachments findFirst
   */
  export type AttachmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentsOrderByWithRelationInput | AttachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }


  /**
   * Attachments findFirstOrThrow
   */
  export type AttachmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentsOrderByWithRelationInput | AttachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }


  /**
   * Attachments findMany
   */
  export type AttachmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentsOrderByWithRelationInput | AttachmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attachments.
     */
    cursor?: AttachmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }


  /**
   * Attachments create
   */
  export type AttachmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Attachments.
     */
    data: XOR<AttachmentsCreateInput, AttachmentsUncheckedCreateInput>
  }


  /**
   * Attachments createMany
   */
  export type AttachmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentsCreateManyInput | AttachmentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Attachments update
   */
  export type AttachmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Attachments.
     */
    data: XOR<AttachmentsUpdateInput, AttachmentsUncheckedUpdateInput>
    /**
     * Choose, which Attachments to update.
     */
    where: AttachmentsWhereUniqueInput
  }


  /**
   * Attachments updateMany
   */
  export type AttachmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentsUpdateManyMutationInput, AttachmentsUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentsWhereInput
  }


  /**
   * Attachments upsert
   */
  export type AttachmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Attachments to update in case it exists.
     */
    where: AttachmentsWhereUniqueInput
    /**
     * In case the Attachments found by the `where` argument doesn't exist, create a new Attachments with this data.
     */
    create: XOR<AttachmentsCreateInput, AttachmentsUncheckedCreateInput>
    /**
     * In case the Attachments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachmentsUpdateInput, AttachmentsUncheckedUpdateInput>
  }


  /**
   * Attachments delete
   */
  export type AttachmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentsInclude<ExtArgs> | null
    /**
     * Filter which Attachments to delete.
     */
    where: AttachmentsWhereUniqueInput
  }


  /**
   * Attachments deleteMany
   */
  export type AttachmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: AttachmentsWhereInput
  }


  /**
   * Attachments without action
   */
  export type AttachmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentsInclude<ExtArgs> | null
  }



  /**
   * Model CaseDetails
   */

  export type AggregateCaseDetails = {
    _count: CaseDetailsCountAggregateOutputType | null
    _avg: CaseDetailsAvgAggregateOutputType | null
    _sum: CaseDetailsSumAggregateOutputType | null
    _min: CaseDetailsMinAggregateOutputType | null
    _max: CaseDetailsMaxAggregateOutputType | null
  }

  export type CaseDetailsAvgAggregateOutputType = {
    id: number | null
    client_id: number | null
  }

  export type CaseDetailsSumAggregateOutputType = {
    id: number | null
    client_id: number | null
  }

  export type CaseDetailsMinAggregateOutputType = {
    id: number | null
    nature_of_legal_issue: string | null
    date_of_incident: Date | null
    case_number: string | null
    opposing_parties: string | null
    current_attorney: string | null
    client_id: number | null
  }

  export type CaseDetailsMaxAggregateOutputType = {
    id: number | null
    nature_of_legal_issue: string | null
    date_of_incident: Date | null
    case_number: string | null
    opposing_parties: string | null
    current_attorney: string | null
    client_id: number | null
  }

  export type CaseDetailsCountAggregateOutputType = {
    id: number
    nature_of_legal_issue: number
    date_of_incident: number
    case_number: number
    opposing_parties: number
    current_attorney: number
    client_id: number
    _all: number
  }


  export type CaseDetailsAvgAggregateInputType = {
    id?: true
    client_id?: true
  }

  export type CaseDetailsSumAggregateInputType = {
    id?: true
    client_id?: true
  }

  export type CaseDetailsMinAggregateInputType = {
    id?: true
    nature_of_legal_issue?: true
    date_of_incident?: true
    case_number?: true
    opposing_parties?: true
    current_attorney?: true
    client_id?: true
  }

  export type CaseDetailsMaxAggregateInputType = {
    id?: true
    nature_of_legal_issue?: true
    date_of_incident?: true
    case_number?: true
    opposing_parties?: true
    current_attorney?: true
    client_id?: true
  }

  export type CaseDetailsCountAggregateInputType = {
    id?: true
    nature_of_legal_issue?: true
    date_of_incident?: true
    case_number?: true
    opposing_parties?: true
    current_attorney?: true
    client_id?: true
    _all?: true
  }

  export type CaseDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaseDetails to aggregate.
     */
    where?: CaseDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseDetails to fetch.
     */
    orderBy?: CaseDetailsOrderByWithRelationInput | CaseDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CaseDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CaseDetails
    **/
    _count?: true | CaseDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CaseDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CaseDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CaseDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CaseDetailsMaxAggregateInputType
  }

  export type GetCaseDetailsAggregateType<T extends CaseDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateCaseDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaseDetails[P]>
      : GetScalarType<T[P], AggregateCaseDetails[P]>
  }




  export type CaseDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CaseDetailsWhereInput
    orderBy?: CaseDetailsOrderByWithAggregationInput | CaseDetailsOrderByWithAggregationInput[]
    by: CaseDetailsScalarFieldEnum[] | CaseDetailsScalarFieldEnum
    having?: CaseDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CaseDetailsCountAggregateInputType | true
    _avg?: CaseDetailsAvgAggregateInputType
    _sum?: CaseDetailsSumAggregateInputType
    _min?: CaseDetailsMinAggregateInputType
    _max?: CaseDetailsMaxAggregateInputType
  }

  export type CaseDetailsGroupByOutputType = {
    id: number
    nature_of_legal_issue: string
    date_of_incident: Date | null
    case_number: string | null
    opposing_parties: string | null
    current_attorney: string | null
    client_id: number
    _count: CaseDetailsCountAggregateOutputType | null
    _avg: CaseDetailsAvgAggregateOutputType | null
    _sum: CaseDetailsSumAggregateOutputType | null
    _min: CaseDetailsMinAggregateOutputType | null
    _max: CaseDetailsMaxAggregateOutputType | null
  }

  type GetCaseDetailsGroupByPayload<T extends CaseDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CaseDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CaseDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CaseDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], CaseDetailsGroupByOutputType[P]>
        }
      >
    >


  export type CaseDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nature_of_legal_issue?: boolean
    date_of_incident?: boolean
    case_number?: boolean
    opposing_parties?: boolean
    current_attorney?: boolean
    client_id?: boolean
    PersonalInformation?: boolean | PersonalInformationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caseDetails"]>

  export type CaseDetailsSelectScalar = {
    id?: boolean
    nature_of_legal_issue?: boolean
    date_of_incident?: boolean
    case_number?: boolean
    opposing_parties?: boolean
    current_attorney?: boolean
    client_id?: boolean
  }

  export type CaseDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PersonalInformation?: boolean | PersonalInformationDefaultArgs<ExtArgs>
  }


  export type $CaseDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CaseDetails"
    objects: {
      PersonalInformation: Prisma.$PersonalInformationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nature_of_legal_issue: string
      date_of_incident: Date | null
      case_number: string | null
      opposing_parties: string | null
      current_attorney: string | null
      client_id: number
    }, ExtArgs["result"]["caseDetails"]>
    composites: {}
  }


  type CaseDetailsGetPayload<S extends boolean | null | undefined | CaseDetailsDefaultArgs> = $Result.GetResult<Prisma.$CaseDetailsPayload, S>

  type CaseDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CaseDetailsFindManyArgs, 'select' | 'include'> & {
      select?: CaseDetailsCountAggregateInputType | true
    }

  export interface CaseDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CaseDetails'], meta: { name: 'CaseDetails' } }
    /**
     * Find zero or one CaseDetails that matches the filter.
     * @param {CaseDetailsFindUniqueArgs} args - Arguments to find a CaseDetails
     * @example
     * // Get one CaseDetails
     * const caseDetails = await prisma.caseDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CaseDetailsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CaseDetailsFindUniqueArgs<ExtArgs>>
    ): Prisma__CaseDetailsClient<$Result.GetResult<Prisma.$CaseDetailsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CaseDetails that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CaseDetailsFindUniqueOrThrowArgs} args - Arguments to find a CaseDetails
     * @example
     * // Get one CaseDetails
     * const caseDetails = await prisma.caseDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CaseDetailsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CaseDetailsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CaseDetailsClient<$Result.GetResult<Prisma.$CaseDetailsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CaseDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseDetailsFindFirstArgs} args - Arguments to find a CaseDetails
     * @example
     * // Get one CaseDetails
     * const caseDetails = await prisma.caseDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CaseDetailsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CaseDetailsFindFirstArgs<ExtArgs>>
    ): Prisma__CaseDetailsClient<$Result.GetResult<Prisma.$CaseDetailsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CaseDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseDetailsFindFirstOrThrowArgs} args - Arguments to find a CaseDetails
     * @example
     * // Get one CaseDetails
     * const caseDetails = await prisma.caseDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CaseDetailsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CaseDetailsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CaseDetailsClient<$Result.GetResult<Prisma.$CaseDetailsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CaseDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseDetailsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CaseDetails
     * const caseDetails = await prisma.caseDetails.findMany()
     * 
     * // Get first 10 CaseDetails
     * const caseDetails = await prisma.caseDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const caseDetailsWithIdOnly = await prisma.caseDetails.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CaseDetailsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CaseDetailsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseDetailsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CaseDetails.
     * @param {CaseDetailsCreateArgs} args - Arguments to create a CaseDetails.
     * @example
     * // Create one CaseDetails
     * const CaseDetails = await prisma.caseDetails.create({
     *   data: {
     *     // ... data to create a CaseDetails
     *   }
     * })
     * 
    **/
    create<T extends CaseDetailsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CaseDetailsCreateArgs<ExtArgs>>
    ): Prisma__CaseDetailsClient<$Result.GetResult<Prisma.$CaseDetailsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CaseDetails.
     *     @param {CaseDetailsCreateManyArgs} args - Arguments to create many CaseDetails.
     *     @example
     *     // Create many CaseDetails
     *     const caseDetails = await prisma.caseDetails.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CaseDetailsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CaseDetailsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CaseDetails.
     * @param {CaseDetailsDeleteArgs} args - Arguments to delete one CaseDetails.
     * @example
     * // Delete one CaseDetails
     * const CaseDetails = await prisma.caseDetails.delete({
     *   where: {
     *     // ... filter to delete one CaseDetails
     *   }
     * })
     * 
    **/
    delete<T extends CaseDetailsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CaseDetailsDeleteArgs<ExtArgs>>
    ): Prisma__CaseDetailsClient<$Result.GetResult<Prisma.$CaseDetailsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CaseDetails.
     * @param {CaseDetailsUpdateArgs} args - Arguments to update one CaseDetails.
     * @example
     * // Update one CaseDetails
     * const caseDetails = await prisma.caseDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CaseDetailsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CaseDetailsUpdateArgs<ExtArgs>>
    ): Prisma__CaseDetailsClient<$Result.GetResult<Prisma.$CaseDetailsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CaseDetails.
     * @param {CaseDetailsDeleteManyArgs} args - Arguments to filter CaseDetails to delete.
     * @example
     * // Delete a few CaseDetails
     * const { count } = await prisma.caseDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CaseDetailsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CaseDetailsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CaseDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CaseDetails
     * const caseDetails = await prisma.caseDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CaseDetailsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CaseDetailsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CaseDetails.
     * @param {CaseDetailsUpsertArgs} args - Arguments to update or create a CaseDetails.
     * @example
     * // Update or create a CaseDetails
     * const caseDetails = await prisma.caseDetails.upsert({
     *   create: {
     *     // ... data to create a CaseDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CaseDetails we want to update
     *   }
     * })
    **/
    upsert<T extends CaseDetailsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CaseDetailsUpsertArgs<ExtArgs>>
    ): Prisma__CaseDetailsClient<$Result.GetResult<Prisma.$CaseDetailsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CaseDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseDetailsCountArgs} args - Arguments to filter CaseDetails to count.
     * @example
     * // Count the number of CaseDetails
     * const count = await prisma.caseDetails.count({
     *   where: {
     *     // ... the filter for the CaseDetails we want to count
     *   }
     * })
    **/
    count<T extends CaseDetailsCountArgs>(
      args?: Subset<T, CaseDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CaseDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CaseDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CaseDetailsAggregateArgs>(args: Subset<T, CaseDetailsAggregateArgs>): Prisma.PrismaPromise<GetCaseDetailsAggregateType<T>>

    /**
     * Group by CaseDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CaseDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CaseDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CaseDetailsGroupByArgs['orderBy'] }
        : { orderBy?: CaseDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CaseDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaseDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CaseDetails model
   */
  readonly fields: CaseDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CaseDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CaseDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    PersonalInformation<T extends PersonalInformationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonalInformationDefaultArgs<ExtArgs>>): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CaseDetails model
   */ 
  interface CaseDetailsFieldRefs {
    readonly id: FieldRef<"CaseDetails", 'Int'>
    readonly nature_of_legal_issue: FieldRef<"CaseDetails", 'String'>
    readonly date_of_incident: FieldRef<"CaseDetails", 'DateTime'>
    readonly case_number: FieldRef<"CaseDetails", 'String'>
    readonly opposing_parties: FieldRef<"CaseDetails", 'String'>
    readonly current_attorney: FieldRef<"CaseDetails", 'String'>
    readonly client_id: FieldRef<"CaseDetails", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * CaseDetails findUnique
   */
  export type CaseDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseDetails
     */
    select?: CaseDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaseDetailsInclude<ExtArgs> | null
    /**
     * Filter, which CaseDetails to fetch.
     */
    where: CaseDetailsWhereUniqueInput
  }


  /**
   * CaseDetails findUniqueOrThrow
   */
  export type CaseDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseDetails
     */
    select?: CaseDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaseDetailsInclude<ExtArgs> | null
    /**
     * Filter, which CaseDetails to fetch.
     */
    where: CaseDetailsWhereUniqueInput
  }


  /**
   * CaseDetails findFirst
   */
  export type CaseDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseDetails
     */
    select?: CaseDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaseDetailsInclude<ExtArgs> | null
    /**
     * Filter, which CaseDetails to fetch.
     */
    where?: CaseDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseDetails to fetch.
     */
    orderBy?: CaseDetailsOrderByWithRelationInput | CaseDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaseDetails.
     */
    cursor?: CaseDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaseDetails.
     */
    distinct?: CaseDetailsScalarFieldEnum | CaseDetailsScalarFieldEnum[]
  }


  /**
   * CaseDetails findFirstOrThrow
   */
  export type CaseDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseDetails
     */
    select?: CaseDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaseDetailsInclude<ExtArgs> | null
    /**
     * Filter, which CaseDetails to fetch.
     */
    where?: CaseDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseDetails to fetch.
     */
    orderBy?: CaseDetailsOrderByWithRelationInput | CaseDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CaseDetails.
     */
    cursor?: CaseDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CaseDetails.
     */
    distinct?: CaseDetailsScalarFieldEnum | CaseDetailsScalarFieldEnum[]
  }


  /**
   * CaseDetails findMany
   */
  export type CaseDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseDetails
     */
    select?: CaseDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaseDetailsInclude<ExtArgs> | null
    /**
     * Filter, which CaseDetails to fetch.
     */
    where?: CaseDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CaseDetails to fetch.
     */
    orderBy?: CaseDetailsOrderByWithRelationInput | CaseDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CaseDetails.
     */
    cursor?: CaseDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CaseDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CaseDetails.
     */
    skip?: number
    distinct?: CaseDetailsScalarFieldEnum | CaseDetailsScalarFieldEnum[]
  }


  /**
   * CaseDetails create
   */
  export type CaseDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseDetails
     */
    select?: CaseDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaseDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a CaseDetails.
     */
    data: XOR<CaseDetailsCreateInput, CaseDetailsUncheckedCreateInput>
  }


  /**
   * CaseDetails createMany
   */
  export type CaseDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CaseDetails.
     */
    data: CaseDetailsCreateManyInput | CaseDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CaseDetails update
   */
  export type CaseDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseDetails
     */
    select?: CaseDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaseDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a CaseDetails.
     */
    data: XOR<CaseDetailsUpdateInput, CaseDetailsUncheckedUpdateInput>
    /**
     * Choose, which CaseDetails to update.
     */
    where: CaseDetailsWhereUniqueInput
  }


  /**
   * CaseDetails updateMany
   */
  export type CaseDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CaseDetails.
     */
    data: XOR<CaseDetailsUpdateManyMutationInput, CaseDetailsUncheckedUpdateManyInput>
    /**
     * Filter which CaseDetails to update
     */
    where?: CaseDetailsWhereInput
  }


  /**
   * CaseDetails upsert
   */
  export type CaseDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseDetails
     */
    select?: CaseDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaseDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the CaseDetails to update in case it exists.
     */
    where: CaseDetailsWhereUniqueInput
    /**
     * In case the CaseDetails found by the `where` argument doesn't exist, create a new CaseDetails with this data.
     */
    create: XOR<CaseDetailsCreateInput, CaseDetailsUncheckedCreateInput>
    /**
     * In case the CaseDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CaseDetailsUpdateInput, CaseDetailsUncheckedUpdateInput>
  }


  /**
   * CaseDetails delete
   */
  export type CaseDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseDetails
     */
    select?: CaseDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaseDetailsInclude<ExtArgs> | null
    /**
     * Filter which CaseDetails to delete.
     */
    where: CaseDetailsWhereUniqueInput
  }


  /**
   * CaseDetails deleteMany
   */
  export type CaseDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CaseDetails to delete
     */
    where?: CaseDetailsWhereInput
  }


  /**
   * CaseDetails without action
   */
  export type CaseDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseDetails
     */
    select?: CaseDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaseDetailsInclude<ExtArgs> | null
  }



  /**
   * Model ElectronicSignature
   */

  export type AggregateElectronicSignature = {
    _count: ElectronicSignatureCountAggregateOutputType | null
    _avg: ElectronicSignatureAvgAggregateOutputType | null
    _sum: ElectronicSignatureSumAggregateOutputType | null
    _min: ElectronicSignatureMinAggregateOutputType | null
    _max: ElectronicSignatureMaxAggregateOutputType | null
  }

  export type ElectronicSignatureAvgAggregateOutputType = {
    id: number | null
    client_id: number | null
  }

  export type ElectronicSignatureSumAggregateOutputType = {
    id: number | null
    client_id: number | null
  }

  export type ElectronicSignatureMinAggregateOutputType = {
    id: number | null
    client_id: number | null
    signature_image_url: string | null
    signature_date: Date | null
  }

  export type ElectronicSignatureMaxAggregateOutputType = {
    id: number | null
    client_id: number | null
    signature_image_url: string | null
    signature_date: Date | null
  }

  export type ElectronicSignatureCountAggregateOutputType = {
    id: number
    client_id: number
    signature_image_url: number
    signature_date: number
    _all: number
  }


  export type ElectronicSignatureAvgAggregateInputType = {
    id?: true
    client_id?: true
  }

  export type ElectronicSignatureSumAggregateInputType = {
    id?: true
    client_id?: true
  }

  export type ElectronicSignatureMinAggregateInputType = {
    id?: true
    client_id?: true
    signature_image_url?: true
    signature_date?: true
  }

  export type ElectronicSignatureMaxAggregateInputType = {
    id?: true
    client_id?: true
    signature_image_url?: true
    signature_date?: true
  }

  export type ElectronicSignatureCountAggregateInputType = {
    id?: true
    client_id?: true
    signature_image_url?: true
    signature_date?: true
    _all?: true
  }

  export type ElectronicSignatureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ElectronicSignature to aggregate.
     */
    where?: ElectronicSignatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElectronicSignatures to fetch.
     */
    orderBy?: ElectronicSignatureOrderByWithRelationInput | ElectronicSignatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ElectronicSignatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElectronicSignatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElectronicSignatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ElectronicSignatures
    **/
    _count?: true | ElectronicSignatureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ElectronicSignatureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ElectronicSignatureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ElectronicSignatureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ElectronicSignatureMaxAggregateInputType
  }

  export type GetElectronicSignatureAggregateType<T extends ElectronicSignatureAggregateArgs> = {
        [P in keyof T & keyof AggregateElectronicSignature]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElectronicSignature[P]>
      : GetScalarType<T[P], AggregateElectronicSignature[P]>
  }




  export type ElectronicSignatureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ElectronicSignatureWhereInput
    orderBy?: ElectronicSignatureOrderByWithAggregationInput | ElectronicSignatureOrderByWithAggregationInput[]
    by: ElectronicSignatureScalarFieldEnum[] | ElectronicSignatureScalarFieldEnum
    having?: ElectronicSignatureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ElectronicSignatureCountAggregateInputType | true
    _avg?: ElectronicSignatureAvgAggregateInputType
    _sum?: ElectronicSignatureSumAggregateInputType
    _min?: ElectronicSignatureMinAggregateInputType
    _max?: ElectronicSignatureMaxAggregateInputType
  }

  export type ElectronicSignatureGroupByOutputType = {
    id: number
    client_id: number
    signature_image_url: string | null
    signature_date: Date | null
    _count: ElectronicSignatureCountAggregateOutputType | null
    _avg: ElectronicSignatureAvgAggregateOutputType | null
    _sum: ElectronicSignatureSumAggregateOutputType | null
    _min: ElectronicSignatureMinAggregateOutputType | null
    _max: ElectronicSignatureMaxAggregateOutputType | null
  }

  type GetElectronicSignatureGroupByPayload<T extends ElectronicSignatureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElectronicSignatureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ElectronicSignatureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElectronicSignatureGroupByOutputType[P]>
            : GetScalarType<T[P], ElectronicSignatureGroupByOutputType[P]>
        }
      >
    >


  export type ElectronicSignatureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    signature_image_url?: boolean
    signature_date?: boolean
    PersonalInformation?: boolean | PersonalInformationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["electronicSignature"]>

  export type ElectronicSignatureSelectScalar = {
    id?: boolean
    client_id?: boolean
    signature_image_url?: boolean
    signature_date?: boolean
  }

  export type ElectronicSignatureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PersonalInformation?: boolean | PersonalInformationDefaultArgs<ExtArgs>
  }


  export type $ElectronicSignaturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ElectronicSignature"
    objects: {
      PersonalInformation: Prisma.$PersonalInformationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      client_id: number
      signature_image_url: string | null
      signature_date: Date | null
    }, ExtArgs["result"]["electronicSignature"]>
    composites: {}
  }


  type ElectronicSignatureGetPayload<S extends boolean | null | undefined | ElectronicSignatureDefaultArgs> = $Result.GetResult<Prisma.$ElectronicSignaturePayload, S>

  type ElectronicSignatureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ElectronicSignatureFindManyArgs, 'select' | 'include'> & {
      select?: ElectronicSignatureCountAggregateInputType | true
    }

  export interface ElectronicSignatureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ElectronicSignature'], meta: { name: 'ElectronicSignature' } }
    /**
     * Find zero or one ElectronicSignature that matches the filter.
     * @param {ElectronicSignatureFindUniqueArgs} args - Arguments to find a ElectronicSignature
     * @example
     * // Get one ElectronicSignature
     * const electronicSignature = await prisma.electronicSignature.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ElectronicSignatureFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ElectronicSignatureFindUniqueArgs<ExtArgs>>
    ): Prisma__ElectronicSignatureClient<$Result.GetResult<Prisma.$ElectronicSignaturePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ElectronicSignature that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ElectronicSignatureFindUniqueOrThrowArgs} args - Arguments to find a ElectronicSignature
     * @example
     * // Get one ElectronicSignature
     * const electronicSignature = await prisma.electronicSignature.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ElectronicSignatureFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ElectronicSignatureFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ElectronicSignatureClient<$Result.GetResult<Prisma.$ElectronicSignaturePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ElectronicSignature that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectronicSignatureFindFirstArgs} args - Arguments to find a ElectronicSignature
     * @example
     * // Get one ElectronicSignature
     * const electronicSignature = await prisma.electronicSignature.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ElectronicSignatureFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ElectronicSignatureFindFirstArgs<ExtArgs>>
    ): Prisma__ElectronicSignatureClient<$Result.GetResult<Prisma.$ElectronicSignaturePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ElectronicSignature that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectronicSignatureFindFirstOrThrowArgs} args - Arguments to find a ElectronicSignature
     * @example
     * // Get one ElectronicSignature
     * const electronicSignature = await prisma.electronicSignature.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ElectronicSignatureFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ElectronicSignatureFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ElectronicSignatureClient<$Result.GetResult<Prisma.$ElectronicSignaturePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ElectronicSignatures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectronicSignatureFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ElectronicSignatures
     * const electronicSignatures = await prisma.electronicSignature.findMany()
     * 
     * // Get first 10 ElectronicSignatures
     * const electronicSignatures = await prisma.electronicSignature.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const electronicSignatureWithIdOnly = await prisma.electronicSignature.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ElectronicSignatureFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ElectronicSignatureFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectronicSignaturePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ElectronicSignature.
     * @param {ElectronicSignatureCreateArgs} args - Arguments to create a ElectronicSignature.
     * @example
     * // Create one ElectronicSignature
     * const ElectronicSignature = await prisma.electronicSignature.create({
     *   data: {
     *     // ... data to create a ElectronicSignature
     *   }
     * })
     * 
    **/
    create<T extends ElectronicSignatureCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ElectronicSignatureCreateArgs<ExtArgs>>
    ): Prisma__ElectronicSignatureClient<$Result.GetResult<Prisma.$ElectronicSignaturePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ElectronicSignatures.
     *     @param {ElectronicSignatureCreateManyArgs} args - Arguments to create many ElectronicSignatures.
     *     @example
     *     // Create many ElectronicSignatures
     *     const electronicSignature = await prisma.electronicSignature.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ElectronicSignatureCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ElectronicSignatureCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ElectronicSignature.
     * @param {ElectronicSignatureDeleteArgs} args - Arguments to delete one ElectronicSignature.
     * @example
     * // Delete one ElectronicSignature
     * const ElectronicSignature = await prisma.electronicSignature.delete({
     *   where: {
     *     // ... filter to delete one ElectronicSignature
     *   }
     * })
     * 
    **/
    delete<T extends ElectronicSignatureDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ElectronicSignatureDeleteArgs<ExtArgs>>
    ): Prisma__ElectronicSignatureClient<$Result.GetResult<Prisma.$ElectronicSignaturePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ElectronicSignature.
     * @param {ElectronicSignatureUpdateArgs} args - Arguments to update one ElectronicSignature.
     * @example
     * // Update one ElectronicSignature
     * const electronicSignature = await prisma.electronicSignature.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ElectronicSignatureUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ElectronicSignatureUpdateArgs<ExtArgs>>
    ): Prisma__ElectronicSignatureClient<$Result.GetResult<Prisma.$ElectronicSignaturePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ElectronicSignatures.
     * @param {ElectronicSignatureDeleteManyArgs} args - Arguments to filter ElectronicSignatures to delete.
     * @example
     * // Delete a few ElectronicSignatures
     * const { count } = await prisma.electronicSignature.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ElectronicSignatureDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ElectronicSignatureDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ElectronicSignatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectronicSignatureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ElectronicSignatures
     * const electronicSignature = await prisma.electronicSignature.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ElectronicSignatureUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ElectronicSignatureUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ElectronicSignature.
     * @param {ElectronicSignatureUpsertArgs} args - Arguments to update or create a ElectronicSignature.
     * @example
     * // Update or create a ElectronicSignature
     * const electronicSignature = await prisma.electronicSignature.upsert({
     *   create: {
     *     // ... data to create a ElectronicSignature
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ElectronicSignature we want to update
     *   }
     * })
    **/
    upsert<T extends ElectronicSignatureUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ElectronicSignatureUpsertArgs<ExtArgs>>
    ): Prisma__ElectronicSignatureClient<$Result.GetResult<Prisma.$ElectronicSignaturePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ElectronicSignatures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectronicSignatureCountArgs} args - Arguments to filter ElectronicSignatures to count.
     * @example
     * // Count the number of ElectronicSignatures
     * const count = await prisma.electronicSignature.count({
     *   where: {
     *     // ... the filter for the ElectronicSignatures we want to count
     *   }
     * })
    **/
    count<T extends ElectronicSignatureCountArgs>(
      args?: Subset<T, ElectronicSignatureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElectronicSignatureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ElectronicSignature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectronicSignatureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ElectronicSignatureAggregateArgs>(args: Subset<T, ElectronicSignatureAggregateArgs>): Prisma.PrismaPromise<GetElectronicSignatureAggregateType<T>>

    /**
     * Group by ElectronicSignature.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectronicSignatureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ElectronicSignatureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ElectronicSignatureGroupByArgs['orderBy'] }
        : { orderBy?: ElectronicSignatureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ElectronicSignatureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElectronicSignatureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ElectronicSignature model
   */
  readonly fields: ElectronicSignatureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ElectronicSignature.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ElectronicSignatureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    PersonalInformation<T extends PersonalInformationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonalInformationDefaultArgs<ExtArgs>>): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ElectronicSignature model
   */ 
  interface ElectronicSignatureFieldRefs {
    readonly id: FieldRef<"ElectronicSignature", 'Int'>
    readonly client_id: FieldRef<"ElectronicSignature", 'Int'>
    readonly signature_image_url: FieldRef<"ElectronicSignature", 'String'>
    readonly signature_date: FieldRef<"ElectronicSignature", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ElectronicSignature findUnique
   */
  export type ElectronicSignatureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectronicSignature
     */
    select?: ElectronicSignatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ElectronicSignatureInclude<ExtArgs> | null
    /**
     * Filter, which ElectronicSignature to fetch.
     */
    where: ElectronicSignatureWhereUniqueInput
  }


  /**
   * ElectronicSignature findUniqueOrThrow
   */
  export type ElectronicSignatureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectronicSignature
     */
    select?: ElectronicSignatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ElectronicSignatureInclude<ExtArgs> | null
    /**
     * Filter, which ElectronicSignature to fetch.
     */
    where: ElectronicSignatureWhereUniqueInput
  }


  /**
   * ElectronicSignature findFirst
   */
  export type ElectronicSignatureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectronicSignature
     */
    select?: ElectronicSignatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ElectronicSignatureInclude<ExtArgs> | null
    /**
     * Filter, which ElectronicSignature to fetch.
     */
    where?: ElectronicSignatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElectronicSignatures to fetch.
     */
    orderBy?: ElectronicSignatureOrderByWithRelationInput | ElectronicSignatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ElectronicSignatures.
     */
    cursor?: ElectronicSignatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElectronicSignatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElectronicSignatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ElectronicSignatures.
     */
    distinct?: ElectronicSignatureScalarFieldEnum | ElectronicSignatureScalarFieldEnum[]
  }


  /**
   * ElectronicSignature findFirstOrThrow
   */
  export type ElectronicSignatureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectronicSignature
     */
    select?: ElectronicSignatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ElectronicSignatureInclude<ExtArgs> | null
    /**
     * Filter, which ElectronicSignature to fetch.
     */
    where?: ElectronicSignatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElectronicSignatures to fetch.
     */
    orderBy?: ElectronicSignatureOrderByWithRelationInput | ElectronicSignatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ElectronicSignatures.
     */
    cursor?: ElectronicSignatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElectronicSignatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElectronicSignatures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ElectronicSignatures.
     */
    distinct?: ElectronicSignatureScalarFieldEnum | ElectronicSignatureScalarFieldEnum[]
  }


  /**
   * ElectronicSignature findMany
   */
  export type ElectronicSignatureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectronicSignature
     */
    select?: ElectronicSignatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ElectronicSignatureInclude<ExtArgs> | null
    /**
     * Filter, which ElectronicSignatures to fetch.
     */
    where?: ElectronicSignatureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ElectronicSignatures to fetch.
     */
    orderBy?: ElectronicSignatureOrderByWithRelationInput | ElectronicSignatureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ElectronicSignatures.
     */
    cursor?: ElectronicSignatureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ElectronicSignatures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ElectronicSignatures.
     */
    skip?: number
    distinct?: ElectronicSignatureScalarFieldEnum | ElectronicSignatureScalarFieldEnum[]
  }


  /**
   * ElectronicSignature create
   */
  export type ElectronicSignatureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectronicSignature
     */
    select?: ElectronicSignatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ElectronicSignatureInclude<ExtArgs> | null
    /**
     * The data needed to create a ElectronicSignature.
     */
    data: XOR<ElectronicSignatureCreateInput, ElectronicSignatureUncheckedCreateInput>
  }


  /**
   * ElectronicSignature createMany
   */
  export type ElectronicSignatureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ElectronicSignatures.
     */
    data: ElectronicSignatureCreateManyInput | ElectronicSignatureCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ElectronicSignature update
   */
  export type ElectronicSignatureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectronicSignature
     */
    select?: ElectronicSignatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ElectronicSignatureInclude<ExtArgs> | null
    /**
     * The data needed to update a ElectronicSignature.
     */
    data: XOR<ElectronicSignatureUpdateInput, ElectronicSignatureUncheckedUpdateInput>
    /**
     * Choose, which ElectronicSignature to update.
     */
    where: ElectronicSignatureWhereUniqueInput
  }


  /**
   * ElectronicSignature updateMany
   */
  export type ElectronicSignatureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ElectronicSignatures.
     */
    data: XOR<ElectronicSignatureUpdateManyMutationInput, ElectronicSignatureUncheckedUpdateManyInput>
    /**
     * Filter which ElectronicSignatures to update
     */
    where?: ElectronicSignatureWhereInput
  }


  /**
   * ElectronicSignature upsert
   */
  export type ElectronicSignatureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectronicSignature
     */
    select?: ElectronicSignatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ElectronicSignatureInclude<ExtArgs> | null
    /**
     * The filter to search for the ElectronicSignature to update in case it exists.
     */
    where: ElectronicSignatureWhereUniqueInput
    /**
     * In case the ElectronicSignature found by the `where` argument doesn't exist, create a new ElectronicSignature with this data.
     */
    create: XOR<ElectronicSignatureCreateInput, ElectronicSignatureUncheckedCreateInput>
    /**
     * In case the ElectronicSignature was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ElectronicSignatureUpdateInput, ElectronicSignatureUncheckedUpdateInput>
  }


  /**
   * ElectronicSignature delete
   */
  export type ElectronicSignatureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectronicSignature
     */
    select?: ElectronicSignatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ElectronicSignatureInclude<ExtArgs> | null
    /**
     * Filter which ElectronicSignature to delete.
     */
    where: ElectronicSignatureWhereUniqueInput
  }


  /**
   * ElectronicSignature deleteMany
   */
  export type ElectronicSignatureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ElectronicSignatures to delete
     */
    where?: ElectronicSignatureWhereInput
  }


  /**
   * ElectronicSignature without action
   */
  export type ElectronicSignatureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectronicSignature
     */
    select?: ElectronicSignatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ElectronicSignatureInclude<ExtArgs> | null
  }



  /**
   * Model FamilyPersonalHistory
   */

  export type AggregateFamilyPersonalHistory = {
    _count: FamilyPersonalHistoryCountAggregateOutputType | null
    _avg: FamilyPersonalHistoryAvgAggregateOutputType | null
    _sum: FamilyPersonalHistorySumAggregateOutputType | null
    _min: FamilyPersonalHistoryMinAggregateOutputType | null
    _max: FamilyPersonalHistoryMaxAggregateOutputType | null
  }

  export type FamilyPersonalHistoryAvgAggregateOutputType = {
    id: number | null
    dependents: number | null
    client_id: number | null
  }

  export type FamilyPersonalHistorySumAggregateOutputType = {
    id: number | null
    dependents: number | null
    client_id: number | null
  }

  export type FamilyPersonalHistoryMinAggregateOutputType = {
    id: number | null
    marital_status: string | null
    dependents: number | null
    health_information: string | null
    child_custody_support_info: string | null
    client_id: number | null
  }

  export type FamilyPersonalHistoryMaxAggregateOutputType = {
    id: number | null
    marital_status: string | null
    dependents: number | null
    health_information: string | null
    child_custody_support_info: string | null
    client_id: number | null
  }

  export type FamilyPersonalHistoryCountAggregateOutputType = {
    id: number
    marital_status: number
    dependents: number
    health_information: number
    child_custody_support_info: number
    client_id: number
    _all: number
  }


  export type FamilyPersonalHistoryAvgAggregateInputType = {
    id?: true
    dependents?: true
    client_id?: true
  }

  export type FamilyPersonalHistorySumAggregateInputType = {
    id?: true
    dependents?: true
    client_id?: true
  }

  export type FamilyPersonalHistoryMinAggregateInputType = {
    id?: true
    marital_status?: true
    dependents?: true
    health_information?: true
    child_custody_support_info?: true
    client_id?: true
  }

  export type FamilyPersonalHistoryMaxAggregateInputType = {
    id?: true
    marital_status?: true
    dependents?: true
    health_information?: true
    child_custody_support_info?: true
    client_id?: true
  }

  export type FamilyPersonalHistoryCountAggregateInputType = {
    id?: true
    marital_status?: true
    dependents?: true
    health_information?: true
    child_custody_support_info?: true
    client_id?: true
    _all?: true
  }

  export type FamilyPersonalHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FamilyPersonalHistory to aggregate.
     */
    where?: FamilyPersonalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyPersonalHistories to fetch.
     */
    orderBy?: FamilyPersonalHistoryOrderByWithRelationInput | FamilyPersonalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FamilyPersonalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyPersonalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyPersonalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FamilyPersonalHistories
    **/
    _count?: true | FamilyPersonalHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FamilyPersonalHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FamilyPersonalHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamilyPersonalHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamilyPersonalHistoryMaxAggregateInputType
  }

  export type GetFamilyPersonalHistoryAggregateType<T extends FamilyPersonalHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFamilyPersonalHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamilyPersonalHistory[P]>
      : GetScalarType<T[P], AggregateFamilyPersonalHistory[P]>
  }




  export type FamilyPersonalHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyPersonalHistoryWhereInput
    orderBy?: FamilyPersonalHistoryOrderByWithAggregationInput | FamilyPersonalHistoryOrderByWithAggregationInput[]
    by: FamilyPersonalHistoryScalarFieldEnum[] | FamilyPersonalHistoryScalarFieldEnum
    having?: FamilyPersonalHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamilyPersonalHistoryCountAggregateInputType | true
    _avg?: FamilyPersonalHistoryAvgAggregateInputType
    _sum?: FamilyPersonalHistorySumAggregateInputType
    _min?: FamilyPersonalHistoryMinAggregateInputType
    _max?: FamilyPersonalHistoryMaxAggregateInputType
  }

  export type FamilyPersonalHistoryGroupByOutputType = {
    id: number
    marital_status: string | null
    dependents: number | null
    health_information: string | null
    child_custody_support_info: string | null
    client_id: number
    _count: FamilyPersonalHistoryCountAggregateOutputType | null
    _avg: FamilyPersonalHistoryAvgAggregateOutputType | null
    _sum: FamilyPersonalHistorySumAggregateOutputType | null
    _min: FamilyPersonalHistoryMinAggregateOutputType | null
    _max: FamilyPersonalHistoryMaxAggregateOutputType | null
  }

  type GetFamilyPersonalHistoryGroupByPayload<T extends FamilyPersonalHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamilyPersonalHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamilyPersonalHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamilyPersonalHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], FamilyPersonalHistoryGroupByOutputType[P]>
        }
      >
    >


  export type FamilyPersonalHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marital_status?: boolean
    dependents?: boolean
    health_information?: boolean
    child_custody_support_info?: boolean
    client_id?: boolean
    PersonalInformation?: boolean | PersonalInformationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familyPersonalHistory"]>

  export type FamilyPersonalHistorySelectScalar = {
    id?: boolean
    marital_status?: boolean
    dependents?: boolean
    health_information?: boolean
    child_custody_support_info?: boolean
    client_id?: boolean
  }

  export type FamilyPersonalHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PersonalInformation?: boolean | PersonalInformationDefaultArgs<ExtArgs>
  }


  export type $FamilyPersonalHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FamilyPersonalHistory"
    objects: {
      PersonalInformation: Prisma.$PersonalInformationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      marital_status: string | null
      dependents: number | null
      health_information: string | null
      child_custody_support_info: string | null
      client_id: number
    }, ExtArgs["result"]["familyPersonalHistory"]>
    composites: {}
  }


  type FamilyPersonalHistoryGetPayload<S extends boolean | null | undefined | FamilyPersonalHistoryDefaultArgs> = $Result.GetResult<Prisma.$FamilyPersonalHistoryPayload, S>

  type FamilyPersonalHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FamilyPersonalHistoryFindManyArgs, 'select' | 'include'> & {
      select?: FamilyPersonalHistoryCountAggregateInputType | true
    }

  export interface FamilyPersonalHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FamilyPersonalHistory'], meta: { name: 'FamilyPersonalHistory' } }
    /**
     * Find zero or one FamilyPersonalHistory that matches the filter.
     * @param {FamilyPersonalHistoryFindUniqueArgs} args - Arguments to find a FamilyPersonalHistory
     * @example
     * // Get one FamilyPersonalHistory
     * const familyPersonalHistory = await prisma.familyPersonalHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FamilyPersonalHistoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FamilyPersonalHistoryFindUniqueArgs<ExtArgs>>
    ): Prisma__FamilyPersonalHistoryClient<$Result.GetResult<Prisma.$FamilyPersonalHistoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FamilyPersonalHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FamilyPersonalHistoryFindUniqueOrThrowArgs} args - Arguments to find a FamilyPersonalHistory
     * @example
     * // Get one FamilyPersonalHistory
     * const familyPersonalHistory = await prisma.familyPersonalHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FamilyPersonalHistoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilyPersonalHistoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FamilyPersonalHistoryClient<$Result.GetResult<Prisma.$FamilyPersonalHistoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FamilyPersonalHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyPersonalHistoryFindFirstArgs} args - Arguments to find a FamilyPersonalHistory
     * @example
     * // Get one FamilyPersonalHistory
     * const familyPersonalHistory = await prisma.familyPersonalHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FamilyPersonalHistoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilyPersonalHistoryFindFirstArgs<ExtArgs>>
    ): Prisma__FamilyPersonalHistoryClient<$Result.GetResult<Prisma.$FamilyPersonalHistoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FamilyPersonalHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyPersonalHistoryFindFirstOrThrowArgs} args - Arguments to find a FamilyPersonalHistory
     * @example
     * // Get one FamilyPersonalHistory
     * const familyPersonalHistory = await prisma.familyPersonalHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FamilyPersonalHistoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilyPersonalHistoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FamilyPersonalHistoryClient<$Result.GetResult<Prisma.$FamilyPersonalHistoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FamilyPersonalHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyPersonalHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FamilyPersonalHistories
     * const familyPersonalHistories = await prisma.familyPersonalHistory.findMany()
     * 
     * // Get first 10 FamilyPersonalHistories
     * const familyPersonalHistories = await prisma.familyPersonalHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const familyPersonalHistoryWithIdOnly = await prisma.familyPersonalHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FamilyPersonalHistoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilyPersonalHistoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyPersonalHistoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FamilyPersonalHistory.
     * @param {FamilyPersonalHistoryCreateArgs} args - Arguments to create a FamilyPersonalHistory.
     * @example
     * // Create one FamilyPersonalHistory
     * const FamilyPersonalHistory = await prisma.familyPersonalHistory.create({
     *   data: {
     *     // ... data to create a FamilyPersonalHistory
     *   }
     * })
     * 
    **/
    create<T extends FamilyPersonalHistoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FamilyPersonalHistoryCreateArgs<ExtArgs>>
    ): Prisma__FamilyPersonalHistoryClient<$Result.GetResult<Prisma.$FamilyPersonalHistoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FamilyPersonalHistories.
     *     @param {FamilyPersonalHistoryCreateManyArgs} args - Arguments to create many FamilyPersonalHistories.
     *     @example
     *     // Create many FamilyPersonalHistories
     *     const familyPersonalHistory = await prisma.familyPersonalHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FamilyPersonalHistoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilyPersonalHistoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FamilyPersonalHistory.
     * @param {FamilyPersonalHistoryDeleteArgs} args - Arguments to delete one FamilyPersonalHistory.
     * @example
     * // Delete one FamilyPersonalHistory
     * const FamilyPersonalHistory = await prisma.familyPersonalHistory.delete({
     *   where: {
     *     // ... filter to delete one FamilyPersonalHistory
     *   }
     * })
     * 
    **/
    delete<T extends FamilyPersonalHistoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FamilyPersonalHistoryDeleteArgs<ExtArgs>>
    ): Prisma__FamilyPersonalHistoryClient<$Result.GetResult<Prisma.$FamilyPersonalHistoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FamilyPersonalHistory.
     * @param {FamilyPersonalHistoryUpdateArgs} args - Arguments to update one FamilyPersonalHistory.
     * @example
     * // Update one FamilyPersonalHistory
     * const familyPersonalHistory = await prisma.familyPersonalHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FamilyPersonalHistoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FamilyPersonalHistoryUpdateArgs<ExtArgs>>
    ): Prisma__FamilyPersonalHistoryClient<$Result.GetResult<Prisma.$FamilyPersonalHistoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FamilyPersonalHistories.
     * @param {FamilyPersonalHistoryDeleteManyArgs} args - Arguments to filter FamilyPersonalHistories to delete.
     * @example
     * // Delete a few FamilyPersonalHistories
     * const { count } = await prisma.familyPersonalHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FamilyPersonalHistoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FamilyPersonalHistoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FamilyPersonalHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyPersonalHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FamilyPersonalHistories
     * const familyPersonalHistory = await prisma.familyPersonalHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FamilyPersonalHistoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FamilyPersonalHistoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FamilyPersonalHistory.
     * @param {FamilyPersonalHistoryUpsertArgs} args - Arguments to update or create a FamilyPersonalHistory.
     * @example
     * // Update or create a FamilyPersonalHistory
     * const familyPersonalHistory = await prisma.familyPersonalHistory.upsert({
     *   create: {
     *     // ... data to create a FamilyPersonalHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FamilyPersonalHistory we want to update
     *   }
     * })
    **/
    upsert<T extends FamilyPersonalHistoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FamilyPersonalHistoryUpsertArgs<ExtArgs>>
    ): Prisma__FamilyPersonalHistoryClient<$Result.GetResult<Prisma.$FamilyPersonalHistoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FamilyPersonalHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyPersonalHistoryCountArgs} args - Arguments to filter FamilyPersonalHistories to count.
     * @example
     * // Count the number of FamilyPersonalHistories
     * const count = await prisma.familyPersonalHistory.count({
     *   where: {
     *     // ... the filter for the FamilyPersonalHistories we want to count
     *   }
     * })
    **/
    count<T extends FamilyPersonalHistoryCountArgs>(
      args?: Subset<T, FamilyPersonalHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamilyPersonalHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FamilyPersonalHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyPersonalHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FamilyPersonalHistoryAggregateArgs>(args: Subset<T, FamilyPersonalHistoryAggregateArgs>): Prisma.PrismaPromise<GetFamilyPersonalHistoryAggregateType<T>>

    /**
     * Group by FamilyPersonalHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyPersonalHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FamilyPersonalHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FamilyPersonalHistoryGroupByArgs['orderBy'] }
        : { orderBy?: FamilyPersonalHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FamilyPersonalHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyPersonalHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FamilyPersonalHistory model
   */
  readonly fields: FamilyPersonalHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FamilyPersonalHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FamilyPersonalHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    PersonalInformation<T extends PersonalInformationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonalInformationDefaultArgs<ExtArgs>>): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FamilyPersonalHistory model
   */ 
  interface FamilyPersonalHistoryFieldRefs {
    readonly id: FieldRef<"FamilyPersonalHistory", 'Int'>
    readonly marital_status: FieldRef<"FamilyPersonalHistory", 'String'>
    readonly dependents: FieldRef<"FamilyPersonalHistory", 'Int'>
    readonly health_information: FieldRef<"FamilyPersonalHistory", 'String'>
    readonly child_custody_support_info: FieldRef<"FamilyPersonalHistory", 'String'>
    readonly client_id: FieldRef<"FamilyPersonalHistory", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * FamilyPersonalHistory findUnique
   */
  export type FamilyPersonalHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyPersonalHistory
     */
    select?: FamilyPersonalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyPersonalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which FamilyPersonalHistory to fetch.
     */
    where: FamilyPersonalHistoryWhereUniqueInput
  }


  /**
   * FamilyPersonalHistory findUniqueOrThrow
   */
  export type FamilyPersonalHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyPersonalHistory
     */
    select?: FamilyPersonalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyPersonalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which FamilyPersonalHistory to fetch.
     */
    where: FamilyPersonalHistoryWhereUniqueInput
  }


  /**
   * FamilyPersonalHistory findFirst
   */
  export type FamilyPersonalHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyPersonalHistory
     */
    select?: FamilyPersonalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyPersonalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which FamilyPersonalHistory to fetch.
     */
    where?: FamilyPersonalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyPersonalHistories to fetch.
     */
    orderBy?: FamilyPersonalHistoryOrderByWithRelationInput | FamilyPersonalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FamilyPersonalHistories.
     */
    cursor?: FamilyPersonalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyPersonalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyPersonalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FamilyPersonalHistories.
     */
    distinct?: FamilyPersonalHistoryScalarFieldEnum | FamilyPersonalHistoryScalarFieldEnum[]
  }


  /**
   * FamilyPersonalHistory findFirstOrThrow
   */
  export type FamilyPersonalHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyPersonalHistory
     */
    select?: FamilyPersonalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyPersonalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which FamilyPersonalHistory to fetch.
     */
    where?: FamilyPersonalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyPersonalHistories to fetch.
     */
    orderBy?: FamilyPersonalHistoryOrderByWithRelationInput | FamilyPersonalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FamilyPersonalHistories.
     */
    cursor?: FamilyPersonalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyPersonalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyPersonalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FamilyPersonalHistories.
     */
    distinct?: FamilyPersonalHistoryScalarFieldEnum | FamilyPersonalHistoryScalarFieldEnum[]
  }


  /**
   * FamilyPersonalHistory findMany
   */
  export type FamilyPersonalHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyPersonalHistory
     */
    select?: FamilyPersonalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyPersonalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which FamilyPersonalHistories to fetch.
     */
    where?: FamilyPersonalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FamilyPersonalHistories to fetch.
     */
    orderBy?: FamilyPersonalHistoryOrderByWithRelationInput | FamilyPersonalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FamilyPersonalHistories.
     */
    cursor?: FamilyPersonalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FamilyPersonalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FamilyPersonalHistories.
     */
    skip?: number
    distinct?: FamilyPersonalHistoryScalarFieldEnum | FamilyPersonalHistoryScalarFieldEnum[]
  }


  /**
   * FamilyPersonalHistory create
   */
  export type FamilyPersonalHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyPersonalHistory
     */
    select?: FamilyPersonalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyPersonalHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a FamilyPersonalHistory.
     */
    data: XOR<FamilyPersonalHistoryCreateInput, FamilyPersonalHistoryUncheckedCreateInput>
  }


  /**
   * FamilyPersonalHistory createMany
   */
  export type FamilyPersonalHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FamilyPersonalHistories.
     */
    data: FamilyPersonalHistoryCreateManyInput | FamilyPersonalHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FamilyPersonalHistory update
   */
  export type FamilyPersonalHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyPersonalHistory
     */
    select?: FamilyPersonalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyPersonalHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a FamilyPersonalHistory.
     */
    data: XOR<FamilyPersonalHistoryUpdateInput, FamilyPersonalHistoryUncheckedUpdateInput>
    /**
     * Choose, which FamilyPersonalHistory to update.
     */
    where: FamilyPersonalHistoryWhereUniqueInput
  }


  /**
   * FamilyPersonalHistory updateMany
   */
  export type FamilyPersonalHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FamilyPersonalHistories.
     */
    data: XOR<FamilyPersonalHistoryUpdateManyMutationInput, FamilyPersonalHistoryUncheckedUpdateManyInput>
    /**
     * Filter which FamilyPersonalHistories to update
     */
    where?: FamilyPersonalHistoryWhereInput
  }


  /**
   * FamilyPersonalHistory upsert
   */
  export type FamilyPersonalHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyPersonalHistory
     */
    select?: FamilyPersonalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyPersonalHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the FamilyPersonalHistory to update in case it exists.
     */
    where: FamilyPersonalHistoryWhereUniqueInput
    /**
     * In case the FamilyPersonalHistory found by the `where` argument doesn't exist, create a new FamilyPersonalHistory with this data.
     */
    create: XOR<FamilyPersonalHistoryCreateInput, FamilyPersonalHistoryUncheckedCreateInput>
    /**
     * In case the FamilyPersonalHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FamilyPersonalHistoryUpdateInput, FamilyPersonalHistoryUncheckedUpdateInput>
  }


  /**
   * FamilyPersonalHistory delete
   */
  export type FamilyPersonalHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyPersonalHistory
     */
    select?: FamilyPersonalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyPersonalHistoryInclude<ExtArgs> | null
    /**
     * Filter which FamilyPersonalHistory to delete.
     */
    where: FamilyPersonalHistoryWhereUniqueInput
  }


  /**
   * FamilyPersonalHistory deleteMany
   */
  export type FamilyPersonalHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FamilyPersonalHistories to delete
     */
    where?: FamilyPersonalHistoryWhereInput
  }


  /**
   * FamilyPersonalHistory without action
   */
  export type FamilyPersonalHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyPersonalHistory
     */
    select?: FamilyPersonalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyPersonalHistoryInclude<ExtArgs> | null
  }



  /**
   * Model FinancialInformation
   */

  export type AggregateFinancialInformation = {
    _count: FinancialInformationCountAggregateOutputType | null
    _avg: FinancialInformationAvgAggregateOutputType | null
    _sum: FinancialInformationSumAggregateOutputType | null
    _min: FinancialInformationMinAggregateOutputType | null
    _max: FinancialInformationMaxAggregateOutputType | null
  }

  export type FinancialInformationAvgAggregateOutputType = {
    id: number | null
    income: number | null
    monthly_expenses: number | null
    debts: number | null
    client_id: number | null
  }

  export type FinancialInformationSumAggregateOutputType = {
    id: number | null
    income: number | null
    monthly_expenses: number | null
    debts: number | null
    client_id: number | null
  }

  export type FinancialInformationMinAggregateOutputType = {
    id: number | null
    current_employer: string | null
    job_title: string | null
    income: number | null
    monthly_expenses: number | null
    debts: number | null
    assets: string | null
    liabilities: string | null
    bankruptcy_history: boolean | null
    client_id: number | null
  }

  export type FinancialInformationMaxAggregateOutputType = {
    id: number | null
    current_employer: string | null
    job_title: string | null
    income: number | null
    monthly_expenses: number | null
    debts: number | null
    assets: string | null
    liabilities: string | null
    bankruptcy_history: boolean | null
    client_id: number | null
  }

  export type FinancialInformationCountAggregateOutputType = {
    id: number
    current_employer: number
    job_title: number
    income: number
    monthly_expenses: number
    debts: number
    assets: number
    liabilities: number
    bankruptcy_history: number
    client_id: number
    _all: number
  }


  export type FinancialInformationAvgAggregateInputType = {
    id?: true
    income?: true
    monthly_expenses?: true
    debts?: true
    client_id?: true
  }

  export type FinancialInformationSumAggregateInputType = {
    id?: true
    income?: true
    monthly_expenses?: true
    debts?: true
    client_id?: true
  }

  export type FinancialInformationMinAggregateInputType = {
    id?: true
    current_employer?: true
    job_title?: true
    income?: true
    monthly_expenses?: true
    debts?: true
    assets?: true
    liabilities?: true
    bankruptcy_history?: true
    client_id?: true
  }

  export type FinancialInformationMaxAggregateInputType = {
    id?: true
    current_employer?: true
    job_title?: true
    income?: true
    monthly_expenses?: true
    debts?: true
    assets?: true
    liabilities?: true
    bankruptcy_history?: true
    client_id?: true
  }

  export type FinancialInformationCountAggregateInputType = {
    id?: true
    current_employer?: true
    job_title?: true
    income?: true
    monthly_expenses?: true
    debts?: true
    assets?: true
    liabilities?: true
    bankruptcy_history?: true
    client_id?: true
    _all?: true
  }

  export type FinancialInformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialInformation to aggregate.
     */
    where?: FinancialInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialInformations to fetch.
     */
    orderBy?: FinancialInformationOrderByWithRelationInput | FinancialInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancialInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinancialInformations
    **/
    _count?: true | FinancialInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinancialInformationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinancialInformationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancialInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancialInformationMaxAggregateInputType
  }

  export type GetFinancialInformationAggregateType<T extends FinancialInformationAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancialInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancialInformation[P]>
      : GetScalarType<T[P], AggregateFinancialInformation[P]>
  }




  export type FinancialInformationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialInformationWhereInput
    orderBy?: FinancialInformationOrderByWithAggregationInput | FinancialInformationOrderByWithAggregationInput[]
    by: FinancialInformationScalarFieldEnum[] | FinancialInformationScalarFieldEnum
    having?: FinancialInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancialInformationCountAggregateInputType | true
    _avg?: FinancialInformationAvgAggregateInputType
    _sum?: FinancialInformationSumAggregateInputType
    _min?: FinancialInformationMinAggregateInputType
    _max?: FinancialInformationMaxAggregateInputType
  }

  export type FinancialInformationGroupByOutputType = {
    id: number
    current_employer: string | null
    job_title: string | null
    income: number | null
    monthly_expenses: number | null
    debts: number | null
    assets: string | null
    liabilities: string | null
    bankruptcy_history: boolean
    client_id: number
    _count: FinancialInformationCountAggregateOutputType | null
    _avg: FinancialInformationAvgAggregateOutputType | null
    _sum: FinancialInformationSumAggregateOutputType | null
    _min: FinancialInformationMinAggregateOutputType | null
    _max: FinancialInformationMaxAggregateOutputType | null
  }

  type GetFinancialInformationGroupByPayload<T extends FinancialInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancialInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancialInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancialInformationGroupByOutputType[P]>
            : GetScalarType<T[P], FinancialInformationGroupByOutputType[P]>
        }
      >
    >


  export type FinancialInformationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    current_employer?: boolean
    job_title?: boolean
    income?: boolean
    monthly_expenses?: boolean
    debts?: boolean
    assets?: boolean
    liabilities?: boolean
    bankruptcy_history?: boolean
    client_id?: boolean
    PersonalInformation?: boolean | PersonalInformationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialInformation"]>

  export type FinancialInformationSelectScalar = {
    id?: boolean
    current_employer?: boolean
    job_title?: boolean
    income?: boolean
    monthly_expenses?: boolean
    debts?: boolean
    assets?: boolean
    liabilities?: boolean
    bankruptcy_history?: boolean
    client_id?: boolean
  }

  export type FinancialInformationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PersonalInformation?: boolean | PersonalInformationDefaultArgs<ExtArgs>
  }


  export type $FinancialInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinancialInformation"
    objects: {
      PersonalInformation: Prisma.$PersonalInformationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      current_employer: string | null
      job_title: string | null
      income: number | null
      monthly_expenses: number | null
      debts: number | null
      assets: string | null
      liabilities: string | null
      bankruptcy_history: boolean
      client_id: number
    }, ExtArgs["result"]["financialInformation"]>
    composites: {}
  }


  type FinancialInformationGetPayload<S extends boolean | null | undefined | FinancialInformationDefaultArgs> = $Result.GetResult<Prisma.$FinancialInformationPayload, S>

  type FinancialInformationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FinancialInformationFindManyArgs, 'select' | 'include'> & {
      select?: FinancialInformationCountAggregateInputType | true
    }

  export interface FinancialInformationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinancialInformation'], meta: { name: 'FinancialInformation' } }
    /**
     * Find zero or one FinancialInformation that matches the filter.
     * @param {FinancialInformationFindUniqueArgs} args - Arguments to find a FinancialInformation
     * @example
     * // Get one FinancialInformation
     * const financialInformation = await prisma.financialInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FinancialInformationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FinancialInformationFindUniqueArgs<ExtArgs>>
    ): Prisma__FinancialInformationClient<$Result.GetResult<Prisma.$FinancialInformationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FinancialInformation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FinancialInformationFindUniqueOrThrowArgs} args - Arguments to find a FinancialInformation
     * @example
     * // Get one FinancialInformation
     * const financialInformation = await prisma.financialInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FinancialInformationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FinancialInformationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FinancialInformationClient<$Result.GetResult<Prisma.$FinancialInformationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FinancialInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialInformationFindFirstArgs} args - Arguments to find a FinancialInformation
     * @example
     * // Get one FinancialInformation
     * const financialInformation = await prisma.financialInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FinancialInformationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FinancialInformationFindFirstArgs<ExtArgs>>
    ): Prisma__FinancialInformationClient<$Result.GetResult<Prisma.$FinancialInformationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FinancialInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialInformationFindFirstOrThrowArgs} args - Arguments to find a FinancialInformation
     * @example
     * // Get one FinancialInformation
     * const financialInformation = await prisma.financialInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FinancialInformationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FinancialInformationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FinancialInformationClient<$Result.GetResult<Prisma.$FinancialInformationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FinancialInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialInformationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinancialInformations
     * const financialInformations = await prisma.financialInformation.findMany()
     * 
     * // Get first 10 FinancialInformations
     * const financialInformations = await prisma.financialInformation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financialInformationWithIdOnly = await prisma.financialInformation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FinancialInformationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FinancialInformationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialInformationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FinancialInformation.
     * @param {FinancialInformationCreateArgs} args - Arguments to create a FinancialInformation.
     * @example
     * // Create one FinancialInformation
     * const FinancialInformation = await prisma.financialInformation.create({
     *   data: {
     *     // ... data to create a FinancialInformation
     *   }
     * })
     * 
    **/
    create<T extends FinancialInformationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FinancialInformationCreateArgs<ExtArgs>>
    ): Prisma__FinancialInformationClient<$Result.GetResult<Prisma.$FinancialInformationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FinancialInformations.
     *     @param {FinancialInformationCreateManyArgs} args - Arguments to create many FinancialInformations.
     *     @example
     *     // Create many FinancialInformations
     *     const financialInformation = await prisma.financialInformation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FinancialInformationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FinancialInformationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FinancialInformation.
     * @param {FinancialInformationDeleteArgs} args - Arguments to delete one FinancialInformation.
     * @example
     * // Delete one FinancialInformation
     * const FinancialInformation = await prisma.financialInformation.delete({
     *   where: {
     *     // ... filter to delete one FinancialInformation
     *   }
     * })
     * 
    **/
    delete<T extends FinancialInformationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FinancialInformationDeleteArgs<ExtArgs>>
    ): Prisma__FinancialInformationClient<$Result.GetResult<Prisma.$FinancialInformationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FinancialInformation.
     * @param {FinancialInformationUpdateArgs} args - Arguments to update one FinancialInformation.
     * @example
     * // Update one FinancialInformation
     * const financialInformation = await prisma.financialInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FinancialInformationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FinancialInformationUpdateArgs<ExtArgs>>
    ): Prisma__FinancialInformationClient<$Result.GetResult<Prisma.$FinancialInformationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FinancialInformations.
     * @param {FinancialInformationDeleteManyArgs} args - Arguments to filter FinancialInformations to delete.
     * @example
     * // Delete a few FinancialInformations
     * const { count } = await prisma.financialInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FinancialInformationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FinancialInformationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinancialInformations
     * const financialInformation = await prisma.financialInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FinancialInformationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FinancialInformationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FinancialInformation.
     * @param {FinancialInformationUpsertArgs} args - Arguments to update or create a FinancialInformation.
     * @example
     * // Update or create a FinancialInformation
     * const financialInformation = await prisma.financialInformation.upsert({
     *   create: {
     *     // ... data to create a FinancialInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinancialInformation we want to update
     *   }
     * })
    **/
    upsert<T extends FinancialInformationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FinancialInformationUpsertArgs<ExtArgs>>
    ): Prisma__FinancialInformationClient<$Result.GetResult<Prisma.$FinancialInformationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FinancialInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialInformationCountArgs} args - Arguments to filter FinancialInformations to count.
     * @example
     * // Count the number of FinancialInformations
     * const count = await prisma.financialInformation.count({
     *   where: {
     *     // ... the filter for the FinancialInformations we want to count
     *   }
     * })
    **/
    count<T extends FinancialInformationCountArgs>(
      args?: Subset<T, FinancialInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancialInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinancialInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FinancialInformationAggregateArgs>(args: Subset<T, FinancialInformationAggregateArgs>): Prisma.PrismaPromise<GetFinancialInformationAggregateType<T>>

    /**
     * Group by FinancialInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialInformationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FinancialInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancialInformationGroupByArgs['orderBy'] }
        : { orderBy?: FinancialInformationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FinancialInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinancialInformation model
   */
  readonly fields: FinancialInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinancialInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancialInformationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    PersonalInformation<T extends PersonalInformationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonalInformationDefaultArgs<ExtArgs>>): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FinancialInformation model
   */ 
  interface FinancialInformationFieldRefs {
    readonly id: FieldRef<"FinancialInformation", 'Int'>
    readonly current_employer: FieldRef<"FinancialInformation", 'String'>
    readonly job_title: FieldRef<"FinancialInformation", 'String'>
    readonly income: FieldRef<"FinancialInformation", 'Float'>
    readonly monthly_expenses: FieldRef<"FinancialInformation", 'Float'>
    readonly debts: FieldRef<"FinancialInformation", 'Float'>
    readonly assets: FieldRef<"FinancialInformation", 'String'>
    readonly liabilities: FieldRef<"FinancialInformation", 'String'>
    readonly bankruptcy_history: FieldRef<"FinancialInformation", 'Boolean'>
    readonly client_id: FieldRef<"FinancialInformation", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * FinancialInformation findUnique
   */
  export type FinancialInformationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInformation
     */
    select?: FinancialInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinancialInformationInclude<ExtArgs> | null
    /**
     * Filter, which FinancialInformation to fetch.
     */
    where: FinancialInformationWhereUniqueInput
  }


  /**
   * FinancialInformation findUniqueOrThrow
   */
  export type FinancialInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInformation
     */
    select?: FinancialInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinancialInformationInclude<ExtArgs> | null
    /**
     * Filter, which FinancialInformation to fetch.
     */
    where: FinancialInformationWhereUniqueInput
  }


  /**
   * FinancialInformation findFirst
   */
  export type FinancialInformationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInformation
     */
    select?: FinancialInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinancialInformationInclude<ExtArgs> | null
    /**
     * Filter, which FinancialInformation to fetch.
     */
    where?: FinancialInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialInformations to fetch.
     */
    orderBy?: FinancialInformationOrderByWithRelationInput | FinancialInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialInformations.
     */
    cursor?: FinancialInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialInformations.
     */
    distinct?: FinancialInformationScalarFieldEnum | FinancialInformationScalarFieldEnum[]
  }


  /**
   * FinancialInformation findFirstOrThrow
   */
  export type FinancialInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInformation
     */
    select?: FinancialInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinancialInformationInclude<ExtArgs> | null
    /**
     * Filter, which FinancialInformation to fetch.
     */
    where?: FinancialInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialInformations to fetch.
     */
    orderBy?: FinancialInformationOrderByWithRelationInput | FinancialInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialInformations.
     */
    cursor?: FinancialInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialInformations.
     */
    distinct?: FinancialInformationScalarFieldEnum | FinancialInformationScalarFieldEnum[]
  }


  /**
   * FinancialInformation findMany
   */
  export type FinancialInformationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInformation
     */
    select?: FinancialInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinancialInformationInclude<ExtArgs> | null
    /**
     * Filter, which FinancialInformations to fetch.
     */
    where?: FinancialInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialInformations to fetch.
     */
    orderBy?: FinancialInformationOrderByWithRelationInput | FinancialInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinancialInformations.
     */
    cursor?: FinancialInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialInformations.
     */
    skip?: number
    distinct?: FinancialInformationScalarFieldEnum | FinancialInformationScalarFieldEnum[]
  }


  /**
   * FinancialInformation create
   */
  export type FinancialInformationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInformation
     */
    select?: FinancialInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinancialInformationInclude<ExtArgs> | null
    /**
     * The data needed to create a FinancialInformation.
     */
    data: XOR<FinancialInformationCreateInput, FinancialInformationUncheckedCreateInput>
  }


  /**
   * FinancialInformation createMany
   */
  export type FinancialInformationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinancialInformations.
     */
    data: FinancialInformationCreateManyInput | FinancialInformationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FinancialInformation update
   */
  export type FinancialInformationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInformation
     */
    select?: FinancialInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinancialInformationInclude<ExtArgs> | null
    /**
     * The data needed to update a FinancialInformation.
     */
    data: XOR<FinancialInformationUpdateInput, FinancialInformationUncheckedUpdateInput>
    /**
     * Choose, which FinancialInformation to update.
     */
    where: FinancialInformationWhereUniqueInput
  }


  /**
   * FinancialInformation updateMany
   */
  export type FinancialInformationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinancialInformations.
     */
    data: XOR<FinancialInformationUpdateManyMutationInput, FinancialInformationUncheckedUpdateManyInput>
    /**
     * Filter which FinancialInformations to update
     */
    where?: FinancialInformationWhereInput
  }


  /**
   * FinancialInformation upsert
   */
  export type FinancialInformationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInformation
     */
    select?: FinancialInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinancialInformationInclude<ExtArgs> | null
    /**
     * The filter to search for the FinancialInformation to update in case it exists.
     */
    where: FinancialInformationWhereUniqueInput
    /**
     * In case the FinancialInformation found by the `where` argument doesn't exist, create a new FinancialInformation with this data.
     */
    create: XOR<FinancialInformationCreateInput, FinancialInformationUncheckedCreateInput>
    /**
     * In case the FinancialInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancialInformationUpdateInput, FinancialInformationUncheckedUpdateInput>
  }


  /**
   * FinancialInformation delete
   */
  export type FinancialInformationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInformation
     */
    select?: FinancialInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinancialInformationInclude<ExtArgs> | null
    /**
     * Filter which FinancialInformation to delete.
     */
    where: FinancialInformationWhereUniqueInput
  }


  /**
   * FinancialInformation deleteMany
   */
  export type FinancialInformationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialInformations to delete
     */
    where?: FinancialInformationWhereInput
  }


  /**
   * FinancialInformation without action
   */
  export type FinancialInformationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInformation
     */
    select?: FinancialInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinancialInformationInclude<ExtArgs> | null
  }



  /**
   * Model LegalHistory
   */

  export type AggregateLegalHistory = {
    _count: LegalHistoryCountAggregateOutputType | null
    _avg: LegalHistoryAvgAggregateOutputType | null
    _sum: LegalHistorySumAggregateOutputType | null
    _min: LegalHistoryMinAggregateOutputType | null
    _max: LegalHistoryMaxAggregateOutputType | null
  }

  export type LegalHistoryAvgAggregateOutputType = {
    id: number | null
    client_id: number | null
  }

  export type LegalHistorySumAggregateOutputType = {
    id: number | null
    client_id: number | null
  }

  export type LegalHistoryMinAggregateOutputType = {
    id: number | null
    criminal_history: string | null
    civil_litigation_history: string | null
    legal_restrictions_or_probation: string | null
    client_id: number | null
  }

  export type LegalHistoryMaxAggregateOutputType = {
    id: number | null
    criminal_history: string | null
    civil_litigation_history: string | null
    legal_restrictions_or_probation: string | null
    client_id: number | null
  }

  export type LegalHistoryCountAggregateOutputType = {
    id: number
    criminal_history: number
    civil_litigation_history: number
    legal_restrictions_or_probation: number
    client_id: number
    _all: number
  }


  export type LegalHistoryAvgAggregateInputType = {
    id?: true
    client_id?: true
  }

  export type LegalHistorySumAggregateInputType = {
    id?: true
    client_id?: true
  }

  export type LegalHistoryMinAggregateInputType = {
    id?: true
    criminal_history?: true
    civil_litigation_history?: true
    legal_restrictions_or_probation?: true
    client_id?: true
  }

  export type LegalHistoryMaxAggregateInputType = {
    id?: true
    criminal_history?: true
    civil_litigation_history?: true
    legal_restrictions_or_probation?: true
    client_id?: true
  }

  export type LegalHistoryCountAggregateInputType = {
    id?: true
    criminal_history?: true
    civil_litigation_history?: true
    legal_restrictions_or_probation?: true
    client_id?: true
    _all?: true
  }

  export type LegalHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegalHistory to aggregate.
     */
    where?: LegalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalHistories to fetch.
     */
    orderBy?: LegalHistoryOrderByWithRelationInput | LegalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LegalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LegalHistories
    **/
    _count?: true | LegalHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LegalHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LegalHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LegalHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LegalHistoryMaxAggregateInputType
  }

  export type GetLegalHistoryAggregateType<T extends LegalHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateLegalHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLegalHistory[P]>
      : GetScalarType<T[P], AggregateLegalHistory[P]>
  }




  export type LegalHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LegalHistoryWhereInput
    orderBy?: LegalHistoryOrderByWithAggregationInput | LegalHistoryOrderByWithAggregationInput[]
    by: LegalHistoryScalarFieldEnum[] | LegalHistoryScalarFieldEnum
    having?: LegalHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LegalHistoryCountAggregateInputType | true
    _avg?: LegalHistoryAvgAggregateInputType
    _sum?: LegalHistorySumAggregateInputType
    _min?: LegalHistoryMinAggregateInputType
    _max?: LegalHistoryMaxAggregateInputType
  }

  export type LegalHistoryGroupByOutputType = {
    id: number
    criminal_history: string | null
    civil_litigation_history: string | null
    legal_restrictions_or_probation: string | null
    client_id: number
    _count: LegalHistoryCountAggregateOutputType | null
    _avg: LegalHistoryAvgAggregateOutputType | null
    _sum: LegalHistorySumAggregateOutputType | null
    _min: LegalHistoryMinAggregateOutputType | null
    _max: LegalHistoryMaxAggregateOutputType | null
  }

  type GetLegalHistoryGroupByPayload<T extends LegalHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LegalHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LegalHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LegalHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], LegalHistoryGroupByOutputType[P]>
        }
      >
    >


  export type LegalHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    criminal_history?: boolean
    civil_litigation_history?: boolean
    legal_restrictions_or_probation?: boolean
    client_id?: boolean
    PersonalInformation?: boolean | PersonalInformationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["legalHistory"]>

  export type LegalHistorySelectScalar = {
    id?: boolean
    criminal_history?: boolean
    civil_litigation_history?: boolean
    legal_restrictions_or_probation?: boolean
    client_id?: boolean
  }

  export type LegalHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PersonalInformation?: boolean | PersonalInformationDefaultArgs<ExtArgs>
  }


  export type $LegalHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LegalHistory"
    objects: {
      PersonalInformation: Prisma.$PersonalInformationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      criminal_history: string | null
      civil_litigation_history: string | null
      legal_restrictions_or_probation: string | null
      client_id: number
    }, ExtArgs["result"]["legalHistory"]>
    composites: {}
  }


  type LegalHistoryGetPayload<S extends boolean | null | undefined | LegalHistoryDefaultArgs> = $Result.GetResult<Prisma.$LegalHistoryPayload, S>

  type LegalHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LegalHistoryFindManyArgs, 'select' | 'include'> & {
      select?: LegalHistoryCountAggregateInputType | true
    }

  export interface LegalHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LegalHistory'], meta: { name: 'LegalHistory' } }
    /**
     * Find zero or one LegalHistory that matches the filter.
     * @param {LegalHistoryFindUniqueArgs} args - Arguments to find a LegalHistory
     * @example
     * // Get one LegalHistory
     * const legalHistory = await prisma.legalHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LegalHistoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LegalHistoryFindUniqueArgs<ExtArgs>>
    ): Prisma__LegalHistoryClient<$Result.GetResult<Prisma.$LegalHistoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LegalHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LegalHistoryFindUniqueOrThrowArgs} args - Arguments to find a LegalHistory
     * @example
     * // Get one LegalHistory
     * const legalHistory = await prisma.legalHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LegalHistoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalHistoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LegalHistoryClient<$Result.GetResult<Prisma.$LegalHistoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LegalHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalHistoryFindFirstArgs} args - Arguments to find a LegalHistory
     * @example
     * // Get one LegalHistory
     * const legalHistory = await prisma.legalHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LegalHistoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalHistoryFindFirstArgs<ExtArgs>>
    ): Prisma__LegalHistoryClient<$Result.GetResult<Prisma.$LegalHistoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LegalHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalHistoryFindFirstOrThrowArgs} args - Arguments to find a LegalHistory
     * @example
     * // Get one LegalHistory
     * const legalHistory = await prisma.legalHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LegalHistoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalHistoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LegalHistoryClient<$Result.GetResult<Prisma.$LegalHistoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LegalHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LegalHistories
     * const legalHistories = await prisma.legalHistory.findMany()
     * 
     * // Get first 10 LegalHistories
     * const legalHistories = await prisma.legalHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const legalHistoryWithIdOnly = await prisma.legalHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LegalHistoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalHistoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegalHistoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LegalHistory.
     * @param {LegalHistoryCreateArgs} args - Arguments to create a LegalHistory.
     * @example
     * // Create one LegalHistory
     * const LegalHistory = await prisma.legalHistory.create({
     *   data: {
     *     // ... data to create a LegalHistory
     *   }
     * })
     * 
    **/
    create<T extends LegalHistoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LegalHistoryCreateArgs<ExtArgs>>
    ): Prisma__LegalHistoryClient<$Result.GetResult<Prisma.$LegalHistoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LegalHistories.
     *     @param {LegalHistoryCreateManyArgs} args - Arguments to create many LegalHistories.
     *     @example
     *     // Create many LegalHistories
     *     const legalHistory = await prisma.legalHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LegalHistoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalHistoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LegalHistory.
     * @param {LegalHistoryDeleteArgs} args - Arguments to delete one LegalHistory.
     * @example
     * // Delete one LegalHistory
     * const LegalHistory = await prisma.legalHistory.delete({
     *   where: {
     *     // ... filter to delete one LegalHistory
     *   }
     * })
     * 
    **/
    delete<T extends LegalHistoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LegalHistoryDeleteArgs<ExtArgs>>
    ): Prisma__LegalHistoryClient<$Result.GetResult<Prisma.$LegalHistoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LegalHistory.
     * @param {LegalHistoryUpdateArgs} args - Arguments to update one LegalHistory.
     * @example
     * // Update one LegalHistory
     * const legalHistory = await prisma.legalHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LegalHistoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LegalHistoryUpdateArgs<ExtArgs>>
    ): Prisma__LegalHistoryClient<$Result.GetResult<Prisma.$LegalHistoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LegalHistories.
     * @param {LegalHistoryDeleteManyArgs} args - Arguments to filter LegalHistories to delete.
     * @example
     * // Delete a few LegalHistories
     * const { count } = await prisma.legalHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LegalHistoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LegalHistoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LegalHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LegalHistories
     * const legalHistory = await prisma.legalHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LegalHistoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LegalHistoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LegalHistory.
     * @param {LegalHistoryUpsertArgs} args - Arguments to update or create a LegalHistory.
     * @example
     * // Update or create a LegalHistory
     * const legalHistory = await prisma.legalHistory.upsert({
     *   create: {
     *     // ... data to create a LegalHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LegalHistory we want to update
     *   }
     * })
    **/
    upsert<T extends LegalHistoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LegalHistoryUpsertArgs<ExtArgs>>
    ): Prisma__LegalHistoryClient<$Result.GetResult<Prisma.$LegalHistoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LegalHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalHistoryCountArgs} args - Arguments to filter LegalHistories to count.
     * @example
     * // Count the number of LegalHistories
     * const count = await prisma.legalHistory.count({
     *   where: {
     *     // ... the filter for the LegalHistories we want to count
     *   }
     * })
    **/
    count<T extends LegalHistoryCountArgs>(
      args?: Subset<T, LegalHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LegalHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LegalHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LegalHistoryAggregateArgs>(args: Subset<T, LegalHistoryAggregateArgs>): Prisma.PrismaPromise<GetLegalHistoryAggregateType<T>>

    /**
     * Group by LegalHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LegalHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LegalHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LegalHistoryGroupByArgs['orderBy'] }
        : { orderBy?: LegalHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LegalHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLegalHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LegalHistory model
   */
  readonly fields: LegalHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LegalHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LegalHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    PersonalInformation<T extends PersonalInformationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonalInformationDefaultArgs<ExtArgs>>): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LegalHistory model
   */ 
  interface LegalHistoryFieldRefs {
    readonly id: FieldRef<"LegalHistory", 'Int'>
    readonly criminal_history: FieldRef<"LegalHistory", 'String'>
    readonly civil_litigation_history: FieldRef<"LegalHistory", 'String'>
    readonly legal_restrictions_or_probation: FieldRef<"LegalHistory", 'String'>
    readonly client_id: FieldRef<"LegalHistory", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * LegalHistory findUnique
   */
  export type LegalHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalHistory
     */
    select?: LegalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LegalHistory to fetch.
     */
    where: LegalHistoryWhereUniqueInput
  }


  /**
   * LegalHistory findUniqueOrThrow
   */
  export type LegalHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalHistory
     */
    select?: LegalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LegalHistory to fetch.
     */
    where: LegalHistoryWhereUniqueInput
  }


  /**
   * LegalHistory findFirst
   */
  export type LegalHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalHistory
     */
    select?: LegalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LegalHistory to fetch.
     */
    where?: LegalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalHistories to fetch.
     */
    orderBy?: LegalHistoryOrderByWithRelationInput | LegalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegalHistories.
     */
    cursor?: LegalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegalHistories.
     */
    distinct?: LegalHistoryScalarFieldEnum | LegalHistoryScalarFieldEnum[]
  }


  /**
   * LegalHistory findFirstOrThrow
   */
  export type LegalHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalHistory
     */
    select?: LegalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LegalHistory to fetch.
     */
    where?: LegalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalHistories to fetch.
     */
    orderBy?: LegalHistoryOrderByWithRelationInput | LegalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LegalHistories.
     */
    cursor?: LegalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LegalHistories.
     */
    distinct?: LegalHistoryScalarFieldEnum | LegalHistoryScalarFieldEnum[]
  }


  /**
   * LegalHistory findMany
   */
  export type LegalHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalHistory
     */
    select?: LegalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LegalHistories to fetch.
     */
    where?: LegalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LegalHistories to fetch.
     */
    orderBy?: LegalHistoryOrderByWithRelationInput | LegalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LegalHistories.
     */
    cursor?: LegalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LegalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LegalHistories.
     */
    skip?: number
    distinct?: LegalHistoryScalarFieldEnum | LegalHistoryScalarFieldEnum[]
  }


  /**
   * LegalHistory create
   */
  export type LegalHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalHistory
     */
    select?: LegalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a LegalHistory.
     */
    data: XOR<LegalHistoryCreateInput, LegalHistoryUncheckedCreateInput>
  }


  /**
   * LegalHistory createMany
   */
  export type LegalHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LegalHistories.
     */
    data: LegalHistoryCreateManyInput | LegalHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * LegalHistory update
   */
  export type LegalHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalHistory
     */
    select?: LegalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a LegalHistory.
     */
    data: XOR<LegalHistoryUpdateInput, LegalHistoryUncheckedUpdateInput>
    /**
     * Choose, which LegalHistory to update.
     */
    where: LegalHistoryWhereUniqueInput
  }


  /**
   * LegalHistory updateMany
   */
  export type LegalHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LegalHistories.
     */
    data: XOR<LegalHistoryUpdateManyMutationInput, LegalHistoryUncheckedUpdateManyInput>
    /**
     * Filter which LegalHistories to update
     */
    where?: LegalHistoryWhereInput
  }


  /**
   * LegalHistory upsert
   */
  export type LegalHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalHistory
     */
    select?: LegalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the LegalHistory to update in case it exists.
     */
    where: LegalHistoryWhereUniqueInput
    /**
     * In case the LegalHistory found by the `where` argument doesn't exist, create a new LegalHistory with this data.
     */
    create: XOR<LegalHistoryCreateInput, LegalHistoryUncheckedCreateInput>
    /**
     * In case the LegalHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LegalHistoryUpdateInput, LegalHistoryUncheckedUpdateInput>
  }


  /**
   * LegalHistory delete
   */
  export type LegalHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalHistory
     */
    select?: LegalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalHistoryInclude<ExtArgs> | null
    /**
     * Filter which LegalHistory to delete.
     */
    where: LegalHistoryWhereUniqueInput
  }


  /**
   * LegalHistory deleteMany
   */
  export type LegalHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LegalHistories to delete
     */
    where?: LegalHistoryWhereInput
  }


  /**
   * LegalHistory without action
   */
  export type LegalHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalHistory
     */
    select?: LegalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalHistoryInclude<ExtArgs> | null
  }



  /**
   * Model PersonalInformation
   */

  export type AggregatePersonalInformation = {
    _count: PersonalInformationCountAggregateOutputType | null
    _avg: PersonalInformationAvgAggregateOutputType | null
    _sum: PersonalInformationSumAggregateOutputType | null
    _min: PersonalInformationMinAggregateOutputType | null
    _max: PersonalInformationMaxAggregateOutputType | null
  }

  export type PersonalInformationAvgAggregateOutputType = {
    id: number | null
  }

  export type PersonalInformationSumAggregateOutputType = {
    id: number | null
  }

  export type PersonalInformationMinAggregateOutputType = {
    id: number | null
    first_name: string | null
    middle_name: string | null
    last_name: string | null
    address: string | null
    phone_number: string | null
    email_address: string | null
    date_of_birth: Date | null
    social_security_number: string | null
    preferred_pronouns: string | null
  }

  export type PersonalInformationMaxAggregateOutputType = {
    id: number | null
    first_name: string | null
    middle_name: string | null
    last_name: string | null
    address: string | null
    phone_number: string | null
    email_address: string | null
    date_of_birth: Date | null
    social_security_number: string | null
    preferred_pronouns: string | null
  }

  export type PersonalInformationCountAggregateOutputType = {
    id: number
    first_name: number
    middle_name: number
    last_name: number
    address: number
    phone_number: number
    email_address: number
    date_of_birth: number
    social_security_number: number
    preferred_pronouns: number
    _all: number
  }


  export type PersonalInformationAvgAggregateInputType = {
    id?: true
  }

  export type PersonalInformationSumAggregateInputType = {
    id?: true
  }

  export type PersonalInformationMinAggregateInputType = {
    id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    address?: true
    phone_number?: true
    email_address?: true
    date_of_birth?: true
    social_security_number?: true
    preferred_pronouns?: true
  }

  export type PersonalInformationMaxAggregateInputType = {
    id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    address?: true
    phone_number?: true
    email_address?: true
    date_of_birth?: true
    social_security_number?: true
    preferred_pronouns?: true
  }

  export type PersonalInformationCountAggregateInputType = {
    id?: true
    first_name?: true
    middle_name?: true
    last_name?: true
    address?: true
    phone_number?: true
    email_address?: true
    date_of_birth?: true
    social_security_number?: true
    preferred_pronouns?: true
    _all?: true
  }

  export type PersonalInformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalInformation to aggregate.
     */
    where?: PersonalInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalInformations to fetch.
     */
    orderBy?: PersonalInformationOrderByWithRelationInput | PersonalInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonalInformations
    **/
    _count?: true | PersonalInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonalInformationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonalInformationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalInformationMaxAggregateInputType
  }

  export type GetPersonalInformationAggregateType<T extends PersonalInformationAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonalInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonalInformation[P]>
      : GetScalarType<T[P], AggregatePersonalInformation[P]>
  }




  export type PersonalInformationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalInformationWhereInput
    orderBy?: PersonalInformationOrderByWithAggregationInput | PersonalInformationOrderByWithAggregationInput[]
    by: PersonalInformationScalarFieldEnum[] | PersonalInformationScalarFieldEnum
    having?: PersonalInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalInformationCountAggregateInputType | true
    _avg?: PersonalInformationAvgAggregateInputType
    _sum?: PersonalInformationSumAggregateInputType
    _min?: PersonalInformationMinAggregateInputType
    _max?: PersonalInformationMaxAggregateInputType
  }

  export type PersonalInformationGroupByOutputType = {
    id: number
    first_name: string
    middle_name: string | null
    last_name: string
    address: string | null
    phone_number: string
    email_address: string
    date_of_birth: Date | null
    social_security_number: string | null
    preferred_pronouns: string | null
    _count: PersonalInformationCountAggregateOutputType | null
    _avg: PersonalInformationAvgAggregateOutputType | null
    _sum: PersonalInformationSumAggregateOutputType | null
    _min: PersonalInformationMinAggregateOutputType | null
    _max: PersonalInformationMaxAggregateOutputType | null
  }

  type GetPersonalInformationGroupByPayload<T extends PersonalInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalInformationGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalInformationGroupByOutputType[P]>
        }
      >
    >


  export type PersonalInformationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    address?: boolean
    phone_number?: boolean
    email_address?: boolean
    date_of_birth?: boolean
    social_security_number?: boolean
    preferred_pronouns?: boolean
    AdditionalInformation?: boolean | PersonalInformation$AdditionalInformationArgs<ExtArgs>
    Attachments?: boolean | PersonalInformation$AttachmentsArgs<ExtArgs>
    CaseDetails?: boolean | PersonalInformation$CaseDetailsArgs<ExtArgs>
    ElectronicSignature?: boolean | PersonalInformation$ElectronicSignatureArgs<ExtArgs>
    FamilyPersonalHistory?: boolean | PersonalInformation$FamilyPersonalHistoryArgs<ExtArgs>
    FinancialInformation?: boolean | PersonalInformation$FinancialInformationArgs<ExtArgs>
    LegalHistory?: boolean | PersonalInformation$LegalHistoryArgs<ExtArgs>
    _count?: boolean | PersonalInformationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalInformation"]>

  export type PersonalInformationSelectScalar = {
    id?: boolean
    first_name?: boolean
    middle_name?: boolean
    last_name?: boolean
    address?: boolean
    phone_number?: boolean
    email_address?: boolean
    date_of_birth?: boolean
    social_security_number?: boolean
    preferred_pronouns?: boolean
  }

  export type PersonalInformationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AdditionalInformation?: boolean | PersonalInformation$AdditionalInformationArgs<ExtArgs>
    Attachments?: boolean | PersonalInformation$AttachmentsArgs<ExtArgs>
    CaseDetails?: boolean | PersonalInformation$CaseDetailsArgs<ExtArgs>
    ElectronicSignature?: boolean | PersonalInformation$ElectronicSignatureArgs<ExtArgs>
    FamilyPersonalHistory?: boolean | PersonalInformation$FamilyPersonalHistoryArgs<ExtArgs>
    FinancialInformation?: boolean | PersonalInformation$FinancialInformationArgs<ExtArgs>
    LegalHistory?: boolean | PersonalInformation$LegalHistoryArgs<ExtArgs>
    _count?: boolean | PersonalInformationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PersonalInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonalInformation"
    objects: {
      AdditionalInformation: Prisma.$AdditionalInformationPayload<ExtArgs>[]
      Attachments: Prisma.$AttachmentsPayload<ExtArgs>[]
      CaseDetails: Prisma.$CaseDetailsPayload<ExtArgs>[]
      ElectronicSignature: Prisma.$ElectronicSignaturePayload<ExtArgs>[]
      FamilyPersonalHistory: Prisma.$FamilyPersonalHistoryPayload<ExtArgs>[]
      FinancialInformation: Prisma.$FinancialInformationPayload<ExtArgs>[]
      LegalHistory: Prisma.$LegalHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      first_name: string
      middle_name: string | null
      last_name: string
      address: string | null
      phone_number: string
      email_address: string
      date_of_birth: Date | null
      social_security_number: string | null
      preferred_pronouns: string | null
    }, ExtArgs["result"]["personalInformation"]>
    composites: {}
  }


  type PersonalInformationGetPayload<S extends boolean | null | undefined | PersonalInformationDefaultArgs> = $Result.GetResult<Prisma.$PersonalInformationPayload, S>

  type PersonalInformationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PersonalInformationFindManyArgs, 'select' | 'include'> & {
      select?: PersonalInformationCountAggregateInputType | true
    }

  export interface PersonalInformationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonalInformation'], meta: { name: 'PersonalInformation' } }
    /**
     * Find zero or one PersonalInformation that matches the filter.
     * @param {PersonalInformationFindUniqueArgs} args - Arguments to find a PersonalInformation
     * @example
     * // Get one PersonalInformation
     * const personalInformation = await prisma.personalInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PersonalInformationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PersonalInformationFindUniqueArgs<ExtArgs>>
    ): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PersonalInformation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PersonalInformationFindUniqueOrThrowArgs} args - Arguments to find a PersonalInformation
     * @example
     * // Get one PersonalInformation
     * const personalInformation = await prisma.personalInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PersonalInformationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonalInformationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PersonalInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInformationFindFirstArgs} args - Arguments to find a PersonalInformation
     * @example
     * // Get one PersonalInformation
     * const personalInformation = await prisma.personalInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PersonalInformationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonalInformationFindFirstArgs<ExtArgs>>
    ): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PersonalInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInformationFindFirstOrThrowArgs} args - Arguments to find a PersonalInformation
     * @example
     * // Get one PersonalInformation
     * const personalInformation = await prisma.personalInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PersonalInformationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonalInformationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PersonalInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInformationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonalInformations
     * const personalInformations = await prisma.personalInformation.findMany()
     * 
     * // Get first 10 PersonalInformations
     * const personalInformations = await prisma.personalInformation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalInformationWithIdOnly = await prisma.personalInformation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PersonalInformationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonalInformationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PersonalInformation.
     * @param {PersonalInformationCreateArgs} args - Arguments to create a PersonalInformation.
     * @example
     * // Create one PersonalInformation
     * const PersonalInformation = await prisma.personalInformation.create({
     *   data: {
     *     // ... data to create a PersonalInformation
     *   }
     * })
     * 
    **/
    create<T extends PersonalInformationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PersonalInformationCreateArgs<ExtArgs>>
    ): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PersonalInformations.
     *     @param {PersonalInformationCreateManyArgs} args - Arguments to create many PersonalInformations.
     *     @example
     *     // Create many PersonalInformations
     *     const personalInformation = await prisma.personalInformation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PersonalInformationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonalInformationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PersonalInformation.
     * @param {PersonalInformationDeleteArgs} args - Arguments to delete one PersonalInformation.
     * @example
     * // Delete one PersonalInformation
     * const PersonalInformation = await prisma.personalInformation.delete({
     *   where: {
     *     // ... filter to delete one PersonalInformation
     *   }
     * })
     * 
    **/
    delete<T extends PersonalInformationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PersonalInformationDeleteArgs<ExtArgs>>
    ): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PersonalInformation.
     * @param {PersonalInformationUpdateArgs} args - Arguments to update one PersonalInformation.
     * @example
     * // Update one PersonalInformation
     * const personalInformation = await prisma.personalInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PersonalInformationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PersonalInformationUpdateArgs<ExtArgs>>
    ): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PersonalInformations.
     * @param {PersonalInformationDeleteManyArgs} args - Arguments to filter PersonalInformations to delete.
     * @example
     * // Delete a few PersonalInformations
     * const { count } = await prisma.personalInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PersonalInformationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PersonalInformationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonalInformations
     * const personalInformation = await prisma.personalInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PersonalInformationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PersonalInformationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PersonalInformation.
     * @param {PersonalInformationUpsertArgs} args - Arguments to update or create a PersonalInformation.
     * @example
     * // Update or create a PersonalInformation
     * const personalInformation = await prisma.personalInformation.upsert({
     *   create: {
     *     // ... data to create a PersonalInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonalInformation we want to update
     *   }
     * })
    **/
    upsert<T extends PersonalInformationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PersonalInformationUpsertArgs<ExtArgs>>
    ): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PersonalInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInformationCountArgs} args - Arguments to filter PersonalInformations to count.
     * @example
     * // Count the number of PersonalInformations
     * const count = await prisma.personalInformation.count({
     *   where: {
     *     // ... the filter for the PersonalInformations we want to count
     *   }
     * })
    **/
    count<T extends PersonalInformationCountArgs>(
      args?: Subset<T, PersonalInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonalInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonalInformationAggregateArgs>(args: Subset<T, PersonalInformationAggregateArgs>): Prisma.PrismaPromise<GetPersonalInformationAggregateType<T>>

    /**
     * Group by PersonalInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInformationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonalInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalInformationGroupByArgs['orderBy'] }
        : { orderBy?: PersonalInformationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonalInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonalInformation model
   */
  readonly fields: PersonalInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonalInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalInformationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    AdditionalInformation<T extends PersonalInformation$AdditionalInformationArgs<ExtArgs> = {}>(args?: Subset<T, PersonalInformation$AdditionalInformationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdditionalInformationPayload<ExtArgs>, T, 'findMany'> | Null>;

    Attachments<T extends PersonalInformation$AttachmentsArgs<ExtArgs> = {}>(args?: Subset<T, PersonalInformation$AttachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    CaseDetails<T extends PersonalInformation$CaseDetailsArgs<ExtArgs> = {}>(args?: Subset<T, PersonalInformation$CaseDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CaseDetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    ElectronicSignature<T extends PersonalInformation$ElectronicSignatureArgs<ExtArgs> = {}>(args?: Subset<T, PersonalInformation$ElectronicSignatureArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ElectronicSignaturePayload<ExtArgs>, T, 'findMany'> | Null>;

    FamilyPersonalHistory<T extends PersonalInformation$FamilyPersonalHistoryArgs<ExtArgs> = {}>(args?: Subset<T, PersonalInformation$FamilyPersonalHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyPersonalHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    FinancialInformation<T extends PersonalInformation$FinancialInformationArgs<ExtArgs> = {}>(args?: Subset<T, PersonalInformation$FinancialInformationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialInformationPayload<ExtArgs>, T, 'findMany'> | Null>;

    LegalHistory<T extends PersonalInformation$LegalHistoryArgs<ExtArgs> = {}>(args?: Subset<T, PersonalInformation$LegalHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LegalHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PersonalInformation model
   */ 
  interface PersonalInformationFieldRefs {
    readonly id: FieldRef<"PersonalInformation", 'Int'>
    readonly first_name: FieldRef<"PersonalInformation", 'String'>
    readonly middle_name: FieldRef<"PersonalInformation", 'String'>
    readonly last_name: FieldRef<"PersonalInformation", 'String'>
    readonly address: FieldRef<"PersonalInformation", 'String'>
    readonly phone_number: FieldRef<"PersonalInformation", 'String'>
    readonly email_address: FieldRef<"PersonalInformation", 'String'>
    readonly date_of_birth: FieldRef<"PersonalInformation", 'DateTime'>
    readonly social_security_number: FieldRef<"PersonalInformation", 'String'>
    readonly preferred_pronouns: FieldRef<"PersonalInformation", 'String'>
  }
    

  // Custom InputTypes

  /**
   * PersonalInformation findUnique
   */
  export type PersonalInformationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonalInformationInclude<ExtArgs> | null
    /**
     * Filter, which PersonalInformation to fetch.
     */
    where: PersonalInformationWhereUniqueInput
  }


  /**
   * PersonalInformation findUniqueOrThrow
   */
  export type PersonalInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonalInformationInclude<ExtArgs> | null
    /**
     * Filter, which PersonalInformation to fetch.
     */
    where: PersonalInformationWhereUniqueInput
  }


  /**
   * PersonalInformation findFirst
   */
  export type PersonalInformationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonalInformationInclude<ExtArgs> | null
    /**
     * Filter, which PersonalInformation to fetch.
     */
    where?: PersonalInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalInformations to fetch.
     */
    orderBy?: PersonalInformationOrderByWithRelationInput | PersonalInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalInformations.
     */
    cursor?: PersonalInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalInformations.
     */
    distinct?: PersonalInformationScalarFieldEnum | PersonalInformationScalarFieldEnum[]
  }


  /**
   * PersonalInformation findFirstOrThrow
   */
  export type PersonalInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonalInformationInclude<ExtArgs> | null
    /**
     * Filter, which PersonalInformation to fetch.
     */
    where?: PersonalInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalInformations to fetch.
     */
    orderBy?: PersonalInformationOrderByWithRelationInput | PersonalInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalInformations.
     */
    cursor?: PersonalInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalInformations.
     */
    distinct?: PersonalInformationScalarFieldEnum | PersonalInformationScalarFieldEnum[]
  }


  /**
   * PersonalInformation findMany
   */
  export type PersonalInformationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonalInformationInclude<ExtArgs> | null
    /**
     * Filter, which PersonalInformations to fetch.
     */
    where?: PersonalInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalInformations to fetch.
     */
    orderBy?: PersonalInformationOrderByWithRelationInput | PersonalInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonalInformations.
     */
    cursor?: PersonalInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalInformations.
     */
    skip?: number
    distinct?: PersonalInformationScalarFieldEnum | PersonalInformationScalarFieldEnum[]
  }


  /**
   * PersonalInformation create
   */
  export type PersonalInformationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonalInformationInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonalInformation.
     */
    data: XOR<PersonalInformationCreateInput, PersonalInformationUncheckedCreateInput>
  }


  /**
   * PersonalInformation createMany
   */
  export type PersonalInformationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonalInformations.
     */
    data: PersonalInformationCreateManyInput | PersonalInformationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PersonalInformation update
   */
  export type PersonalInformationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonalInformationInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonalInformation.
     */
    data: XOR<PersonalInformationUpdateInput, PersonalInformationUncheckedUpdateInput>
    /**
     * Choose, which PersonalInformation to update.
     */
    where: PersonalInformationWhereUniqueInput
  }


  /**
   * PersonalInformation updateMany
   */
  export type PersonalInformationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonalInformations.
     */
    data: XOR<PersonalInformationUpdateManyMutationInput, PersonalInformationUncheckedUpdateManyInput>
    /**
     * Filter which PersonalInformations to update
     */
    where?: PersonalInformationWhereInput
  }


  /**
   * PersonalInformation upsert
   */
  export type PersonalInformationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonalInformationInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonalInformation to update in case it exists.
     */
    where: PersonalInformationWhereUniqueInput
    /**
     * In case the PersonalInformation found by the `where` argument doesn't exist, create a new PersonalInformation with this data.
     */
    create: XOR<PersonalInformationCreateInput, PersonalInformationUncheckedCreateInput>
    /**
     * In case the PersonalInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalInformationUpdateInput, PersonalInformationUncheckedUpdateInput>
  }


  /**
   * PersonalInformation delete
   */
  export type PersonalInformationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonalInformationInclude<ExtArgs> | null
    /**
     * Filter which PersonalInformation to delete.
     */
    where: PersonalInformationWhereUniqueInput
  }


  /**
   * PersonalInformation deleteMany
   */
  export type PersonalInformationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalInformations to delete
     */
    where?: PersonalInformationWhereInput
  }


  /**
   * PersonalInformation.AdditionalInformation
   */
  export type PersonalInformation$AdditionalInformationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdditionalInformation
     */
    select?: AdditionalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdditionalInformationInclude<ExtArgs> | null
    where?: AdditionalInformationWhereInput
    orderBy?: AdditionalInformationOrderByWithRelationInput | AdditionalInformationOrderByWithRelationInput[]
    cursor?: AdditionalInformationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdditionalInformationScalarFieldEnum | AdditionalInformationScalarFieldEnum[]
  }


  /**
   * PersonalInformation.Attachments
   */
  export type PersonalInformation$AttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachments
     */
    select?: AttachmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttachmentsInclude<ExtArgs> | null
    where?: AttachmentsWhereInput
    orderBy?: AttachmentsOrderByWithRelationInput | AttachmentsOrderByWithRelationInput[]
    cursor?: AttachmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentsScalarFieldEnum | AttachmentsScalarFieldEnum[]
  }


  /**
   * PersonalInformation.CaseDetails
   */
  export type PersonalInformation$CaseDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CaseDetails
     */
    select?: CaseDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CaseDetailsInclude<ExtArgs> | null
    where?: CaseDetailsWhereInput
    orderBy?: CaseDetailsOrderByWithRelationInput | CaseDetailsOrderByWithRelationInput[]
    cursor?: CaseDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CaseDetailsScalarFieldEnum | CaseDetailsScalarFieldEnum[]
  }


  /**
   * PersonalInformation.ElectronicSignature
   */
  export type PersonalInformation$ElectronicSignatureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ElectronicSignature
     */
    select?: ElectronicSignatureSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ElectronicSignatureInclude<ExtArgs> | null
    where?: ElectronicSignatureWhereInput
    orderBy?: ElectronicSignatureOrderByWithRelationInput | ElectronicSignatureOrderByWithRelationInput[]
    cursor?: ElectronicSignatureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ElectronicSignatureScalarFieldEnum | ElectronicSignatureScalarFieldEnum[]
  }


  /**
   * PersonalInformation.FamilyPersonalHistory
   */
  export type PersonalInformation$FamilyPersonalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyPersonalHistory
     */
    select?: FamilyPersonalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FamilyPersonalHistoryInclude<ExtArgs> | null
    where?: FamilyPersonalHistoryWhereInput
    orderBy?: FamilyPersonalHistoryOrderByWithRelationInput | FamilyPersonalHistoryOrderByWithRelationInput[]
    cursor?: FamilyPersonalHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FamilyPersonalHistoryScalarFieldEnum | FamilyPersonalHistoryScalarFieldEnum[]
  }


  /**
   * PersonalInformation.FinancialInformation
   */
  export type PersonalInformation$FinancialInformationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInformation
     */
    select?: FinancialInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FinancialInformationInclude<ExtArgs> | null
    where?: FinancialInformationWhereInput
    orderBy?: FinancialInformationOrderByWithRelationInput | FinancialInformationOrderByWithRelationInput[]
    cursor?: FinancialInformationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialInformationScalarFieldEnum | FinancialInformationScalarFieldEnum[]
  }


  /**
   * PersonalInformation.LegalHistory
   */
  export type PersonalInformation$LegalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LegalHistory
     */
    select?: LegalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: LegalHistoryInclude<ExtArgs> | null
    where?: LegalHistoryWhereInput
    orderBy?: LegalHistoryOrderByWithRelationInput | LegalHistoryOrderByWithRelationInput[]
    cursor?: LegalHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LegalHistoryScalarFieldEnum | LegalHistoryScalarFieldEnum[]
  }


  /**
   * PersonalInformation without action
   */
  export type PersonalInformationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonalInformationInclude<ExtArgs> | null
  }



  /**
   * Model UserLogin
   */

  export type AggregateUserLogin = {
    _count: UserLoginCountAggregateOutputType | null
    _avg: UserLoginAvgAggregateOutputType | null
    _sum: UserLoginSumAggregateOutputType | null
    _min: UserLoginMinAggregateOutputType | null
    _max: UserLoginMaxAggregateOutputType | null
  }

  export type UserLoginAvgAggregateOutputType = {
    id: number | null
  }

  export type UserLoginSumAggregateOutputType = {
    id: number | null
  }

  export type UserLoginMinAggregateOutputType = {
    id: number | null
    email_address: string | null
    password: string | null
  }

  export type UserLoginMaxAggregateOutputType = {
    id: number | null
    email_address: string | null
    password: string | null
  }

  export type UserLoginCountAggregateOutputType = {
    id: number
    email_address: number
    password: number
    _all: number
  }


  export type UserLoginAvgAggregateInputType = {
    id?: true
  }

  export type UserLoginSumAggregateInputType = {
    id?: true
  }

  export type UserLoginMinAggregateInputType = {
    id?: true
    email_address?: true
    password?: true
  }

  export type UserLoginMaxAggregateInputType = {
    id?: true
    email_address?: true
    password?: true
  }

  export type UserLoginCountAggregateInputType = {
    id?: true
    email_address?: true
    password?: true
    _all?: true
  }

  export type UserLoginAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLogin to aggregate.
     */
    where?: UserLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogins to fetch.
     */
    orderBy?: UserLoginOrderByWithRelationInput | UserLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLogins
    **/
    _count?: true | UserLoginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLoginAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLoginSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLoginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLoginMaxAggregateInputType
  }

  export type GetUserLoginAggregateType<T extends UserLoginAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLogin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLogin[P]>
      : GetScalarType<T[P], AggregateUserLogin[P]>
  }




  export type UserLoginGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLoginWhereInput
    orderBy?: UserLoginOrderByWithAggregationInput | UserLoginOrderByWithAggregationInput[]
    by: UserLoginScalarFieldEnum[] | UserLoginScalarFieldEnum
    having?: UserLoginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLoginCountAggregateInputType | true
    _avg?: UserLoginAvgAggregateInputType
    _sum?: UserLoginSumAggregateInputType
    _min?: UserLoginMinAggregateInputType
    _max?: UserLoginMaxAggregateInputType
  }

  export type UserLoginGroupByOutputType = {
    id: number
    email_address: string
    password: string
    _count: UserLoginCountAggregateOutputType | null
    _avg: UserLoginAvgAggregateOutputType | null
    _sum: UserLoginSumAggregateOutputType | null
    _min: UserLoginMinAggregateOutputType | null
    _max: UserLoginMaxAggregateOutputType | null
  }

  type GetUserLoginGroupByPayload<T extends UserLoginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLoginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLoginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLoginGroupByOutputType[P]>
            : GetScalarType<T[P], UserLoginGroupByOutputType[P]>
        }
      >
    >


  export type UserLoginSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email_address?: boolean
    password?: boolean
  }, ExtArgs["result"]["userLogin"]>

  export type UserLoginSelectScalar = {
    id?: boolean
    email_address?: boolean
    password?: boolean
  }


  export type $UserLoginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLogin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email_address: string
      password: string
    }, ExtArgs["result"]["userLogin"]>
    composites: {}
  }


  type UserLoginGetPayload<S extends boolean | null | undefined | UserLoginDefaultArgs> = $Result.GetResult<Prisma.$UserLoginPayload, S>

  type UserLoginCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserLoginFindManyArgs, 'select' | 'include'> & {
      select?: UserLoginCountAggregateInputType | true
    }

  export interface UserLoginDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLogin'], meta: { name: 'UserLogin' } }
    /**
     * Find zero or one UserLogin that matches the filter.
     * @param {UserLoginFindUniqueArgs} args - Arguments to find a UserLogin
     * @example
     * // Get one UserLogin
     * const userLogin = await prisma.userLogin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserLoginFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserLoginFindUniqueArgs<ExtArgs>>
    ): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserLogin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserLoginFindUniqueOrThrowArgs} args - Arguments to find a UserLogin
     * @example
     * // Get one UserLogin
     * const userLogin = await prisma.userLogin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserLoginFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserLoginFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserLogin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginFindFirstArgs} args - Arguments to find a UserLogin
     * @example
     * // Get one UserLogin
     * const userLogin = await prisma.userLogin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserLoginFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserLoginFindFirstArgs<ExtArgs>>
    ): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserLogin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginFindFirstOrThrowArgs} args - Arguments to find a UserLogin
     * @example
     * // Get one UserLogin
     * const userLogin = await prisma.userLogin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserLoginFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserLoginFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserLogins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLogins
     * const userLogins = await prisma.userLogin.findMany()
     * 
     * // Get first 10 UserLogins
     * const userLogins = await prisma.userLogin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLoginWithIdOnly = await prisma.userLogin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserLoginFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserLoginFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserLogin.
     * @param {UserLoginCreateArgs} args - Arguments to create a UserLogin.
     * @example
     * // Create one UserLogin
     * const UserLogin = await prisma.userLogin.create({
     *   data: {
     *     // ... data to create a UserLogin
     *   }
     * })
     * 
    **/
    create<T extends UserLoginCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserLoginCreateArgs<ExtArgs>>
    ): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserLogins.
     *     @param {UserLoginCreateManyArgs} args - Arguments to create many UserLogins.
     *     @example
     *     // Create many UserLogins
     *     const userLogin = await prisma.userLogin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserLoginCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserLoginCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserLogin.
     * @param {UserLoginDeleteArgs} args - Arguments to delete one UserLogin.
     * @example
     * // Delete one UserLogin
     * const UserLogin = await prisma.userLogin.delete({
     *   where: {
     *     // ... filter to delete one UserLogin
     *   }
     * })
     * 
    **/
    delete<T extends UserLoginDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserLoginDeleteArgs<ExtArgs>>
    ): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserLogin.
     * @param {UserLoginUpdateArgs} args - Arguments to update one UserLogin.
     * @example
     * // Update one UserLogin
     * const userLogin = await prisma.userLogin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserLoginUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserLoginUpdateArgs<ExtArgs>>
    ): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserLogins.
     * @param {UserLoginDeleteManyArgs} args - Arguments to filter UserLogins to delete.
     * @example
     * // Delete a few UserLogins
     * const { count } = await prisma.userLogin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserLoginDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserLoginDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLogins
     * const userLogin = await prisma.userLogin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserLoginUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserLoginUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserLogin.
     * @param {UserLoginUpsertArgs} args - Arguments to update or create a UserLogin.
     * @example
     * // Update or create a UserLogin
     * const userLogin = await prisma.userLogin.upsert({
     *   create: {
     *     // ... data to create a UserLogin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLogin we want to update
     *   }
     * })
    **/
    upsert<T extends UserLoginUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserLoginUpsertArgs<ExtArgs>>
    ): Prisma__UserLoginClient<$Result.GetResult<Prisma.$UserLoginPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginCountArgs} args - Arguments to filter UserLogins to count.
     * @example
     * // Count the number of UserLogins
     * const count = await prisma.userLogin.count({
     *   where: {
     *     // ... the filter for the UserLogins we want to count
     *   }
     * })
    **/
    count<T extends UserLoginCountArgs>(
      args?: Subset<T, UserLoginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLoginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLogin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserLoginAggregateArgs>(args: Subset<T, UserLoginAggregateArgs>): Prisma.PrismaPromise<GetUserLoginAggregateType<T>>

    /**
     * Group by UserLogin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserLoginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLoginGroupByArgs['orderBy'] }
        : { orderBy?: UserLoginGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserLoginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLoginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLogin model
   */
  readonly fields: UserLoginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLogin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLoginClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserLogin model
   */ 
  interface UserLoginFieldRefs {
    readonly id: FieldRef<"UserLogin", 'Int'>
    readonly email_address: FieldRef<"UserLogin", 'String'>
    readonly password: FieldRef<"UserLogin", 'String'>
  }
    

  // Custom InputTypes

  /**
   * UserLogin findUnique
   */
  export type UserLoginFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogin
     */
    select?: UserLoginSelect<ExtArgs> | null
    /**
     * Filter, which UserLogin to fetch.
     */
    where: UserLoginWhereUniqueInput
  }


  /**
   * UserLogin findUniqueOrThrow
   */
  export type UserLoginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogin
     */
    select?: UserLoginSelect<ExtArgs> | null
    /**
     * Filter, which UserLogin to fetch.
     */
    where: UserLoginWhereUniqueInput
  }


  /**
   * UserLogin findFirst
   */
  export type UserLoginFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogin
     */
    select?: UserLoginSelect<ExtArgs> | null
    /**
     * Filter, which UserLogin to fetch.
     */
    where?: UserLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogins to fetch.
     */
    orderBy?: UserLoginOrderByWithRelationInput | UserLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLogins.
     */
    cursor?: UserLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLogins.
     */
    distinct?: UserLoginScalarFieldEnum | UserLoginScalarFieldEnum[]
  }


  /**
   * UserLogin findFirstOrThrow
   */
  export type UserLoginFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogin
     */
    select?: UserLoginSelect<ExtArgs> | null
    /**
     * Filter, which UserLogin to fetch.
     */
    where?: UserLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogins to fetch.
     */
    orderBy?: UserLoginOrderByWithRelationInput | UserLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLogins.
     */
    cursor?: UserLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLogins.
     */
    distinct?: UserLoginScalarFieldEnum | UserLoginScalarFieldEnum[]
  }


  /**
   * UserLogin findMany
   */
  export type UserLoginFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogin
     */
    select?: UserLoginSelect<ExtArgs> | null
    /**
     * Filter, which UserLogins to fetch.
     */
    where?: UserLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLogins to fetch.
     */
    orderBy?: UserLoginOrderByWithRelationInput | UserLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLogins.
     */
    cursor?: UserLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLogins.
     */
    skip?: number
    distinct?: UserLoginScalarFieldEnum | UserLoginScalarFieldEnum[]
  }


  /**
   * UserLogin create
   */
  export type UserLoginCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogin
     */
    select?: UserLoginSelect<ExtArgs> | null
    /**
     * The data needed to create a UserLogin.
     */
    data: XOR<UserLoginCreateInput, UserLoginUncheckedCreateInput>
  }


  /**
   * UserLogin createMany
   */
  export type UserLoginCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLogins.
     */
    data: UserLoginCreateManyInput | UserLoginCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserLogin update
   */
  export type UserLoginUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogin
     */
    select?: UserLoginSelect<ExtArgs> | null
    /**
     * The data needed to update a UserLogin.
     */
    data: XOR<UserLoginUpdateInput, UserLoginUncheckedUpdateInput>
    /**
     * Choose, which UserLogin to update.
     */
    where: UserLoginWhereUniqueInput
  }


  /**
   * UserLogin updateMany
   */
  export type UserLoginUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLogins.
     */
    data: XOR<UserLoginUpdateManyMutationInput, UserLoginUncheckedUpdateManyInput>
    /**
     * Filter which UserLogins to update
     */
    where?: UserLoginWhereInput
  }


  /**
   * UserLogin upsert
   */
  export type UserLoginUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogin
     */
    select?: UserLoginSelect<ExtArgs> | null
    /**
     * The filter to search for the UserLogin to update in case it exists.
     */
    where: UserLoginWhereUniqueInput
    /**
     * In case the UserLogin found by the `where` argument doesn't exist, create a new UserLogin with this data.
     */
    create: XOR<UserLoginCreateInput, UserLoginUncheckedCreateInput>
    /**
     * In case the UserLogin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLoginUpdateInput, UserLoginUncheckedUpdateInput>
  }


  /**
   * UserLogin delete
   */
  export type UserLoginDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogin
     */
    select?: UserLoginSelect<ExtArgs> | null
    /**
     * Filter which UserLogin to delete.
     */
    where: UserLoginWhereUniqueInput
  }


  /**
   * UserLogin deleteMany
   */
  export type UserLoginDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLogins to delete
     */
    where?: UserLoginWhereInput
  }


  /**
   * UserLogin without action
   */
  export type UserLoginDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLogin
     */
    select?: UserLoginSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdditionalInformationScalarFieldEnum: {
    id: 'id',
    preferred_communication_method: 'preferred_communication_method',
    emergency_contact_name: 'emergency_contact_name',
    emergency_contact_relationship: 'emergency_contact_relationship',
    emergency_contact_phone: 'emergency_contact_phone',
    how_did_you_hear_about_us: 'how_did_you_hear_about_us',
    authorization_and_consent: 'authorization_and_consent',
    client_id: 'client_id'
  };

  export type AdditionalInformationScalarFieldEnum = (typeof AdditionalInformationScalarFieldEnum)[keyof typeof AdditionalInformationScalarFieldEnum]


  export const AttachmentsScalarFieldEnum: {
    id: 'id',
    client_id: 'client_id',
    document_name: 'document_name',
    document_url: 'document_url'
  };

  export type AttachmentsScalarFieldEnum = (typeof AttachmentsScalarFieldEnum)[keyof typeof AttachmentsScalarFieldEnum]


  export const CaseDetailsScalarFieldEnum: {
    id: 'id',
    nature_of_legal_issue: 'nature_of_legal_issue',
    date_of_incident: 'date_of_incident',
    case_number: 'case_number',
    opposing_parties: 'opposing_parties',
    current_attorney: 'current_attorney',
    client_id: 'client_id'
  };

  export type CaseDetailsScalarFieldEnum = (typeof CaseDetailsScalarFieldEnum)[keyof typeof CaseDetailsScalarFieldEnum]


  export const ElectronicSignatureScalarFieldEnum: {
    id: 'id',
    client_id: 'client_id',
    signature_image_url: 'signature_image_url',
    signature_date: 'signature_date'
  };

  export type ElectronicSignatureScalarFieldEnum = (typeof ElectronicSignatureScalarFieldEnum)[keyof typeof ElectronicSignatureScalarFieldEnum]


  export const FamilyPersonalHistoryScalarFieldEnum: {
    id: 'id',
    marital_status: 'marital_status',
    dependents: 'dependents',
    health_information: 'health_information',
    child_custody_support_info: 'child_custody_support_info',
    client_id: 'client_id'
  };

  export type FamilyPersonalHistoryScalarFieldEnum = (typeof FamilyPersonalHistoryScalarFieldEnum)[keyof typeof FamilyPersonalHistoryScalarFieldEnum]


  export const FinancialInformationScalarFieldEnum: {
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

  export type FinancialInformationScalarFieldEnum = (typeof FinancialInformationScalarFieldEnum)[keyof typeof FinancialInformationScalarFieldEnum]


  export const LegalHistoryScalarFieldEnum: {
    id: 'id',
    criminal_history: 'criminal_history',
    civil_litigation_history: 'civil_litigation_history',
    legal_restrictions_or_probation: 'legal_restrictions_or_probation',
    client_id: 'client_id'
  };

  export type LegalHistoryScalarFieldEnum = (typeof LegalHistoryScalarFieldEnum)[keyof typeof LegalHistoryScalarFieldEnum]


  export const PersonalInformationScalarFieldEnum: {
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

  export type PersonalInformationScalarFieldEnum = (typeof PersonalInformationScalarFieldEnum)[keyof typeof PersonalInformationScalarFieldEnum]


  export const UserLoginScalarFieldEnum: {
    id: 'id',
    email_address: 'email_address',
    password: 'password'
  };

  export type UserLoginScalarFieldEnum = (typeof UserLoginScalarFieldEnum)[keyof typeof UserLoginScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AdditionalInformationWhereInput = {
    AND?: AdditionalInformationWhereInput | AdditionalInformationWhereInput[]
    OR?: AdditionalInformationWhereInput[]
    NOT?: AdditionalInformationWhereInput | AdditionalInformationWhereInput[]
    id?: IntFilter<"AdditionalInformation"> | number
    preferred_communication_method?: StringNullableFilter<"AdditionalInformation"> | string | null
    emergency_contact_name?: StringNullableFilter<"AdditionalInformation"> | string | null
    emergency_contact_relationship?: StringNullableFilter<"AdditionalInformation"> | string | null
    emergency_contact_phone?: StringNullableFilter<"AdditionalInformation"> | string | null
    how_did_you_hear_about_us?: StringNullableFilter<"AdditionalInformation"> | string | null
    authorization_and_consent?: BoolFilter<"AdditionalInformation"> | boolean
    client_id?: IntFilter<"AdditionalInformation"> | number
    PersonalInformation?: XOR<PersonalInformationRelationFilter, PersonalInformationWhereInput>
  }

  export type AdditionalInformationOrderByWithRelationInput = {
    id?: SortOrder
    preferred_communication_method?: SortOrderInput | SortOrder
    emergency_contact_name?: SortOrderInput | SortOrder
    emergency_contact_relationship?: SortOrderInput | SortOrder
    emergency_contact_phone?: SortOrderInput | SortOrder
    how_did_you_hear_about_us?: SortOrderInput | SortOrder
    authorization_and_consent?: SortOrder
    client_id?: SortOrder
    PersonalInformation?: PersonalInformationOrderByWithRelationInput
  }

  export type AdditionalInformationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdditionalInformationWhereInput | AdditionalInformationWhereInput[]
    OR?: AdditionalInformationWhereInput[]
    NOT?: AdditionalInformationWhereInput | AdditionalInformationWhereInput[]
    preferred_communication_method?: StringNullableFilter<"AdditionalInformation"> | string | null
    emergency_contact_name?: StringNullableFilter<"AdditionalInformation"> | string | null
    emergency_contact_relationship?: StringNullableFilter<"AdditionalInformation"> | string | null
    emergency_contact_phone?: StringNullableFilter<"AdditionalInformation"> | string | null
    how_did_you_hear_about_us?: StringNullableFilter<"AdditionalInformation"> | string | null
    authorization_and_consent?: BoolFilter<"AdditionalInformation"> | boolean
    client_id?: IntFilter<"AdditionalInformation"> | number
    PersonalInformation?: XOR<PersonalInformationRelationFilter, PersonalInformationWhereInput>
  }, "id">

  export type AdditionalInformationOrderByWithAggregationInput = {
    id?: SortOrder
    preferred_communication_method?: SortOrderInput | SortOrder
    emergency_contact_name?: SortOrderInput | SortOrder
    emergency_contact_relationship?: SortOrderInput | SortOrder
    emergency_contact_phone?: SortOrderInput | SortOrder
    how_did_you_hear_about_us?: SortOrderInput | SortOrder
    authorization_and_consent?: SortOrder
    client_id?: SortOrder
    _count?: AdditionalInformationCountOrderByAggregateInput
    _avg?: AdditionalInformationAvgOrderByAggregateInput
    _max?: AdditionalInformationMaxOrderByAggregateInput
    _min?: AdditionalInformationMinOrderByAggregateInput
    _sum?: AdditionalInformationSumOrderByAggregateInput
  }

  export type AdditionalInformationScalarWhereWithAggregatesInput = {
    AND?: AdditionalInformationScalarWhereWithAggregatesInput | AdditionalInformationScalarWhereWithAggregatesInput[]
    OR?: AdditionalInformationScalarWhereWithAggregatesInput[]
    NOT?: AdditionalInformationScalarWhereWithAggregatesInput | AdditionalInformationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdditionalInformation"> | number
    preferred_communication_method?: StringNullableWithAggregatesFilter<"AdditionalInformation"> | string | null
    emergency_contact_name?: StringNullableWithAggregatesFilter<"AdditionalInformation"> | string | null
    emergency_contact_relationship?: StringNullableWithAggregatesFilter<"AdditionalInformation"> | string | null
    emergency_contact_phone?: StringNullableWithAggregatesFilter<"AdditionalInformation"> | string | null
    how_did_you_hear_about_us?: StringNullableWithAggregatesFilter<"AdditionalInformation"> | string | null
    authorization_and_consent?: BoolWithAggregatesFilter<"AdditionalInformation"> | boolean
    client_id?: IntWithAggregatesFilter<"AdditionalInformation"> | number
  }

  export type AttachmentsWhereInput = {
    AND?: AttachmentsWhereInput | AttachmentsWhereInput[]
    OR?: AttachmentsWhereInput[]
    NOT?: AttachmentsWhereInput | AttachmentsWhereInput[]
    id?: IntFilter<"Attachments"> | number
    client_id?: IntFilter<"Attachments"> | number
    document_name?: StringNullableFilter<"Attachments"> | string | null
    document_url?: StringNullableFilter<"Attachments"> | string | null
    PersonalInformation?: XOR<PersonalInformationRelationFilter, PersonalInformationWhereInput>
  }

  export type AttachmentsOrderByWithRelationInput = {
    id?: SortOrder
    client_id?: SortOrder
    document_name?: SortOrderInput | SortOrder
    document_url?: SortOrderInput | SortOrder
    PersonalInformation?: PersonalInformationOrderByWithRelationInput
  }

  export type AttachmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttachmentsWhereInput | AttachmentsWhereInput[]
    OR?: AttachmentsWhereInput[]
    NOT?: AttachmentsWhereInput | AttachmentsWhereInput[]
    client_id?: IntFilter<"Attachments"> | number
    document_name?: StringNullableFilter<"Attachments"> | string | null
    document_url?: StringNullableFilter<"Attachments"> | string | null
    PersonalInformation?: XOR<PersonalInformationRelationFilter, PersonalInformationWhereInput>
  }, "id">

  export type AttachmentsOrderByWithAggregationInput = {
    id?: SortOrder
    client_id?: SortOrder
    document_name?: SortOrderInput | SortOrder
    document_url?: SortOrderInput | SortOrder
    _count?: AttachmentsCountOrderByAggregateInput
    _avg?: AttachmentsAvgOrderByAggregateInput
    _max?: AttachmentsMaxOrderByAggregateInput
    _min?: AttachmentsMinOrderByAggregateInput
    _sum?: AttachmentsSumOrderByAggregateInput
  }

  export type AttachmentsScalarWhereWithAggregatesInput = {
    AND?: AttachmentsScalarWhereWithAggregatesInput | AttachmentsScalarWhereWithAggregatesInput[]
    OR?: AttachmentsScalarWhereWithAggregatesInput[]
    NOT?: AttachmentsScalarWhereWithAggregatesInput | AttachmentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attachments"> | number
    client_id?: IntWithAggregatesFilter<"Attachments"> | number
    document_name?: StringNullableWithAggregatesFilter<"Attachments"> | string | null
    document_url?: StringNullableWithAggregatesFilter<"Attachments"> | string | null
  }

  export type CaseDetailsWhereInput = {
    AND?: CaseDetailsWhereInput | CaseDetailsWhereInput[]
    OR?: CaseDetailsWhereInput[]
    NOT?: CaseDetailsWhereInput | CaseDetailsWhereInput[]
    id?: IntFilter<"CaseDetails"> | number
    nature_of_legal_issue?: StringFilter<"CaseDetails"> | string
    date_of_incident?: DateTimeNullableFilter<"CaseDetails"> | Date | string | null
    case_number?: StringNullableFilter<"CaseDetails"> | string | null
    opposing_parties?: StringNullableFilter<"CaseDetails"> | string | null
    current_attorney?: StringNullableFilter<"CaseDetails"> | string | null
    client_id?: IntFilter<"CaseDetails"> | number
    PersonalInformation?: XOR<PersonalInformationRelationFilter, PersonalInformationWhereInput>
  }

  export type CaseDetailsOrderByWithRelationInput = {
    id?: SortOrder
    nature_of_legal_issue?: SortOrder
    date_of_incident?: SortOrderInput | SortOrder
    case_number?: SortOrderInput | SortOrder
    opposing_parties?: SortOrderInput | SortOrder
    current_attorney?: SortOrderInput | SortOrder
    client_id?: SortOrder
    PersonalInformation?: PersonalInformationOrderByWithRelationInput
  }

  export type CaseDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CaseDetailsWhereInput | CaseDetailsWhereInput[]
    OR?: CaseDetailsWhereInput[]
    NOT?: CaseDetailsWhereInput | CaseDetailsWhereInput[]
    nature_of_legal_issue?: StringFilter<"CaseDetails"> | string
    date_of_incident?: DateTimeNullableFilter<"CaseDetails"> | Date | string | null
    case_number?: StringNullableFilter<"CaseDetails"> | string | null
    opposing_parties?: StringNullableFilter<"CaseDetails"> | string | null
    current_attorney?: StringNullableFilter<"CaseDetails"> | string | null
    client_id?: IntFilter<"CaseDetails"> | number
    PersonalInformation?: XOR<PersonalInformationRelationFilter, PersonalInformationWhereInput>
  }, "id">

  export type CaseDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    nature_of_legal_issue?: SortOrder
    date_of_incident?: SortOrderInput | SortOrder
    case_number?: SortOrderInput | SortOrder
    opposing_parties?: SortOrderInput | SortOrder
    current_attorney?: SortOrderInput | SortOrder
    client_id?: SortOrder
    _count?: CaseDetailsCountOrderByAggregateInput
    _avg?: CaseDetailsAvgOrderByAggregateInput
    _max?: CaseDetailsMaxOrderByAggregateInput
    _min?: CaseDetailsMinOrderByAggregateInput
    _sum?: CaseDetailsSumOrderByAggregateInput
  }

  export type CaseDetailsScalarWhereWithAggregatesInput = {
    AND?: CaseDetailsScalarWhereWithAggregatesInput | CaseDetailsScalarWhereWithAggregatesInput[]
    OR?: CaseDetailsScalarWhereWithAggregatesInput[]
    NOT?: CaseDetailsScalarWhereWithAggregatesInput | CaseDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CaseDetails"> | number
    nature_of_legal_issue?: StringWithAggregatesFilter<"CaseDetails"> | string
    date_of_incident?: DateTimeNullableWithAggregatesFilter<"CaseDetails"> | Date | string | null
    case_number?: StringNullableWithAggregatesFilter<"CaseDetails"> | string | null
    opposing_parties?: StringNullableWithAggregatesFilter<"CaseDetails"> | string | null
    current_attorney?: StringNullableWithAggregatesFilter<"CaseDetails"> | string | null
    client_id?: IntWithAggregatesFilter<"CaseDetails"> | number
  }

  export type ElectronicSignatureWhereInput = {
    AND?: ElectronicSignatureWhereInput | ElectronicSignatureWhereInput[]
    OR?: ElectronicSignatureWhereInput[]
    NOT?: ElectronicSignatureWhereInput | ElectronicSignatureWhereInput[]
    id?: IntFilter<"ElectronicSignature"> | number
    client_id?: IntFilter<"ElectronicSignature"> | number
    signature_image_url?: StringNullableFilter<"ElectronicSignature"> | string | null
    signature_date?: DateTimeNullableFilter<"ElectronicSignature"> | Date | string | null
    PersonalInformation?: XOR<PersonalInformationRelationFilter, PersonalInformationWhereInput>
  }

  export type ElectronicSignatureOrderByWithRelationInput = {
    id?: SortOrder
    client_id?: SortOrder
    signature_image_url?: SortOrderInput | SortOrder
    signature_date?: SortOrderInput | SortOrder
    PersonalInformation?: PersonalInformationOrderByWithRelationInput
  }

  export type ElectronicSignatureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ElectronicSignatureWhereInput | ElectronicSignatureWhereInput[]
    OR?: ElectronicSignatureWhereInput[]
    NOT?: ElectronicSignatureWhereInput | ElectronicSignatureWhereInput[]
    client_id?: IntFilter<"ElectronicSignature"> | number
    signature_image_url?: StringNullableFilter<"ElectronicSignature"> | string | null
    signature_date?: DateTimeNullableFilter<"ElectronicSignature"> | Date | string | null
    PersonalInformation?: XOR<PersonalInformationRelationFilter, PersonalInformationWhereInput>
  }, "id">

  export type ElectronicSignatureOrderByWithAggregationInput = {
    id?: SortOrder
    client_id?: SortOrder
    signature_image_url?: SortOrderInput | SortOrder
    signature_date?: SortOrderInput | SortOrder
    _count?: ElectronicSignatureCountOrderByAggregateInput
    _avg?: ElectronicSignatureAvgOrderByAggregateInput
    _max?: ElectronicSignatureMaxOrderByAggregateInput
    _min?: ElectronicSignatureMinOrderByAggregateInput
    _sum?: ElectronicSignatureSumOrderByAggregateInput
  }

  export type ElectronicSignatureScalarWhereWithAggregatesInput = {
    AND?: ElectronicSignatureScalarWhereWithAggregatesInput | ElectronicSignatureScalarWhereWithAggregatesInput[]
    OR?: ElectronicSignatureScalarWhereWithAggregatesInput[]
    NOT?: ElectronicSignatureScalarWhereWithAggregatesInput | ElectronicSignatureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ElectronicSignature"> | number
    client_id?: IntWithAggregatesFilter<"ElectronicSignature"> | number
    signature_image_url?: StringNullableWithAggregatesFilter<"ElectronicSignature"> | string | null
    signature_date?: DateTimeNullableWithAggregatesFilter<"ElectronicSignature"> | Date | string | null
  }

  export type FamilyPersonalHistoryWhereInput = {
    AND?: FamilyPersonalHistoryWhereInput | FamilyPersonalHistoryWhereInput[]
    OR?: FamilyPersonalHistoryWhereInput[]
    NOT?: FamilyPersonalHistoryWhereInput | FamilyPersonalHistoryWhereInput[]
    id?: IntFilter<"FamilyPersonalHistory"> | number
    marital_status?: StringNullableFilter<"FamilyPersonalHistory"> | string | null
    dependents?: IntNullableFilter<"FamilyPersonalHistory"> | number | null
    health_information?: StringNullableFilter<"FamilyPersonalHistory"> | string | null
    child_custody_support_info?: StringNullableFilter<"FamilyPersonalHistory"> | string | null
    client_id?: IntFilter<"FamilyPersonalHistory"> | number
    PersonalInformation?: XOR<PersonalInformationRelationFilter, PersonalInformationWhereInput>
  }

  export type FamilyPersonalHistoryOrderByWithRelationInput = {
    id?: SortOrder
    marital_status?: SortOrderInput | SortOrder
    dependents?: SortOrderInput | SortOrder
    health_information?: SortOrderInput | SortOrder
    child_custody_support_info?: SortOrderInput | SortOrder
    client_id?: SortOrder
    PersonalInformation?: PersonalInformationOrderByWithRelationInput
  }

  export type FamilyPersonalHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FamilyPersonalHistoryWhereInput | FamilyPersonalHistoryWhereInput[]
    OR?: FamilyPersonalHistoryWhereInput[]
    NOT?: FamilyPersonalHistoryWhereInput | FamilyPersonalHistoryWhereInput[]
    marital_status?: StringNullableFilter<"FamilyPersonalHistory"> | string | null
    dependents?: IntNullableFilter<"FamilyPersonalHistory"> | number | null
    health_information?: StringNullableFilter<"FamilyPersonalHistory"> | string | null
    child_custody_support_info?: StringNullableFilter<"FamilyPersonalHistory"> | string | null
    client_id?: IntFilter<"FamilyPersonalHistory"> | number
    PersonalInformation?: XOR<PersonalInformationRelationFilter, PersonalInformationWhereInput>
  }, "id">

  export type FamilyPersonalHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    marital_status?: SortOrderInput | SortOrder
    dependents?: SortOrderInput | SortOrder
    health_information?: SortOrderInput | SortOrder
    child_custody_support_info?: SortOrderInput | SortOrder
    client_id?: SortOrder
    _count?: FamilyPersonalHistoryCountOrderByAggregateInput
    _avg?: FamilyPersonalHistoryAvgOrderByAggregateInput
    _max?: FamilyPersonalHistoryMaxOrderByAggregateInput
    _min?: FamilyPersonalHistoryMinOrderByAggregateInput
    _sum?: FamilyPersonalHistorySumOrderByAggregateInput
  }

  export type FamilyPersonalHistoryScalarWhereWithAggregatesInput = {
    AND?: FamilyPersonalHistoryScalarWhereWithAggregatesInput | FamilyPersonalHistoryScalarWhereWithAggregatesInput[]
    OR?: FamilyPersonalHistoryScalarWhereWithAggregatesInput[]
    NOT?: FamilyPersonalHistoryScalarWhereWithAggregatesInput | FamilyPersonalHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FamilyPersonalHistory"> | number
    marital_status?: StringNullableWithAggregatesFilter<"FamilyPersonalHistory"> | string | null
    dependents?: IntNullableWithAggregatesFilter<"FamilyPersonalHistory"> | number | null
    health_information?: StringNullableWithAggregatesFilter<"FamilyPersonalHistory"> | string | null
    child_custody_support_info?: StringNullableWithAggregatesFilter<"FamilyPersonalHistory"> | string | null
    client_id?: IntWithAggregatesFilter<"FamilyPersonalHistory"> | number
  }

  export type FinancialInformationWhereInput = {
    AND?: FinancialInformationWhereInput | FinancialInformationWhereInput[]
    OR?: FinancialInformationWhereInput[]
    NOT?: FinancialInformationWhereInput | FinancialInformationWhereInput[]
    id?: IntFilter<"FinancialInformation"> | number
    current_employer?: StringNullableFilter<"FinancialInformation"> | string | null
    job_title?: StringNullableFilter<"FinancialInformation"> | string | null
    income?: FloatNullableFilter<"FinancialInformation"> | number | null
    monthly_expenses?: FloatNullableFilter<"FinancialInformation"> | number | null
    debts?: FloatNullableFilter<"FinancialInformation"> | number | null
    assets?: StringNullableFilter<"FinancialInformation"> | string | null
    liabilities?: StringNullableFilter<"FinancialInformation"> | string | null
    bankruptcy_history?: BoolFilter<"FinancialInformation"> | boolean
    client_id?: IntFilter<"FinancialInformation"> | number
    PersonalInformation?: XOR<PersonalInformationRelationFilter, PersonalInformationWhereInput>
  }

  export type FinancialInformationOrderByWithRelationInput = {
    id?: SortOrder
    current_employer?: SortOrderInput | SortOrder
    job_title?: SortOrderInput | SortOrder
    income?: SortOrderInput | SortOrder
    monthly_expenses?: SortOrderInput | SortOrder
    debts?: SortOrderInput | SortOrder
    assets?: SortOrderInput | SortOrder
    liabilities?: SortOrderInput | SortOrder
    bankruptcy_history?: SortOrder
    client_id?: SortOrder
    PersonalInformation?: PersonalInformationOrderByWithRelationInput
  }

  export type FinancialInformationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FinancialInformationWhereInput | FinancialInformationWhereInput[]
    OR?: FinancialInformationWhereInput[]
    NOT?: FinancialInformationWhereInput | FinancialInformationWhereInput[]
    current_employer?: StringNullableFilter<"FinancialInformation"> | string | null
    job_title?: StringNullableFilter<"FinancialInformation"> | string | null
    income?: FloatNullableFilter<"FinancialInformation"> | number | null
    monthly_expenses?: FloatNullableFilter<"FinancialInformation"> | number | null
    debts?: FloatNullableFilter<"FinancialInformation"> | number | null
    assets?: StringNullableFilter<"FinancialInformation"> | string | null
    liabilities?: StringNullableFilter<"FinancialInformation"> | string | null
    bankruptcy_history?: BoolFilter<"FinancialInformation"> | boolean
    client_id?: IntFilter<"FinancialInformation"> | number
    PersonalInformation?: XOR<PersonalInformationRelationFilter, PersonalInformationWhereInput>
  }, "id">

  export type FinancialInformationOrderByWithAggregationInput = {
    id?: SortOrder
    current_employer?: SortOrderInput | SortOrder
    job_title?: SortOrderInput | SortOrder
    income?: SortOrderInput | SortOrder
    monthly_expenses?: SortOrderInput | SortOrder
    debts?: SortOrderInput | SortOrder
    assets?: SortOrderInput | SortOrder
    liabilities?: SortOrderInput | SortOrder
    bankruptcy_history?: SortOrder
    client_id?: SortOrder
    _count?: FinancialInformationCountOrderByAggregateInput
    _avg?: FinancialInformationAvgOrderByAggregateInput
    _max?: FinancialInformationMaxOrderByAggregateInput
    _min?: FinancialInformationMinOrderByAggregateInput
    _sum?: FinancialInformationSumOrderByAggregateInput
  }

  export type FinancialInformationScalarWhereWithAggregatesInput = {
    AND?: FinancialInformationScalarWhereWithAggregatesInput | FinancialInformationScalarWhereWithAggregatesInput[]
    OR?: FinancialInformationScalarWhereWithAggregatesInput[]
    NOT?: FinancialInformationScalarWhereWithAggregatesInput | FinancialInformationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FinancialInformation"> | number
    current_employer?: StringNullableWithAggregatesFilter<"FinancialInformation"> | string | null
    job_title?: StringNullableWithAggregatesFilter<"FinancialInformation"> | string | null
    income?: FloatNullableWithAggregatesFilter<"FinancialInformation"> | number | null
    monthly_expenses?: FloatNullableWithAggregatesFilter<"FinancialInformation"> | number | null
    debts?: FloatNullableWithAggregatesFilter<"FinancialInformation"> | number | null
    assets?: StringNullableWithAggregatesFilter<"FinancialInformation"> | string | null
    liabilities?: StringNullableWithAggregatesFilter<"FinancialInformation"> | string | null
    bankruptcy_history?: BoolWithAggregatesFilter<"FinancialInformation"> | boolean
    client_id?: IntWithAggregatesFilter<"FinancialInformation"> | number
  }

  export type LegalHistoryWhereInput = {
    AND?: LegalHistoryWhereInput | LegalHistoryWhereInput[]
    OR?: LegalHistoryWhereInput[]
    NOT?: LegalHistoryWhereInput | LegalHistoryWhereInput[]
    id?: IntFilter<"LegalHistory"> | number
    criminal_history?: StringNullableFilter<"LegalHistory"> | string | null
    civil_litigation_history?: StringNullableFilter<"LegalHistory"> | string | null
    legal_restrictions_or_probation?: StringNullableFilter<"LegalHistory"> | string | null
    client_id?: IntFilter<"LegalHistory"> | number
    PersonalInformation?: XOR<PersonalInformationRelationFilter, PersonalInformationWhereInput>
  }

  export type LegalHistoryOrderByWithRelationInput = {
    id?: SortOrder
    criminal_history?: SortOrderInput | SortOrder
    civil_litigation_history?: SortOrderInput | SortOrder
    legal_restrictions_or_probation?: SortOrderInput | SortOrder
    client_id?: SortOrder
    PersonalInformation?: PersonalInformationOrderByWithRelationInput
  }

  export type LegalHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LegalHistoryWhereInput | LegalHistoryWhereInput[]
    OR?: LegalHistoryWhereInput[]
    NOT?: LegalHistoryWhereInput | LegalHistoryWhereInput[]
    criminal_history?: StringNullableFilter<"LegalHistory"> | string | null
    civil_litigation_history?: StringNullableFilter<"LegalHistory"> | string | null
    legal_restrictions_or_probation?: StringNullableFilter<"LegalHistory"> | string | null
    client_id?: IntFilter<"LegalHistory"> | number
    PersonalInformation?: XOR<PersonalInformationRelationFilter, PersonalInformationWhereInput>
  }, "id">

  export type LegalHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    criminal_history?: SortOrderInput | SortOrder
    civil_litigation_history?: SortOrderInput | SortOrder
    legal_restrictions_or_probation?: SortOrderInput | SortOrder
    client_id?: SortOrder
    _count?: LegalHistoryCountOrderByAggregateInput
    _avg?: LegalHistoryAvgOrderByAggregateInput
    _max?: LegalHistoryMaxOrderByAggregateInput
    _min?: LegalHistoryMinOrderByAggregateInput
    _sum?: LegalHistorySumOrderByAggregateInput
  }

  export type LegalHistoryScalarWhereWithAggregatesInput = {
    AND?: LegalHistoryScalarWhereWithAggregatesInput | LegalHistoryScalarWhereWithAggregatesInput[]
    OR?: LegalHistoryScalarWhereWithAggregatesInput[]
    NOT?: LegalHistoryScalarWhereWithAggregatesInput | LegalHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LegalHistory"> | number
    criminal_history?: StringNullableWithAggregatesFilter<"LegalHistory"> | string | null
    civil_litigation_history?: StringNullableWithAggregatesFilter<"LegalHistory"> | string | null
    legal_restrictions_or_probation?: StringNullableWithAggregatesFilter<"LegalHistory"> | string | null
    client_id?: IntWithAggregatesFilter<"LegalHistory"> | number
  }

  export type PersonalInformationWhereInput = {
    AND?: PersonalInformationWhereInput | PersonalInformationWhereInput[]
    OR?: PersonalInformationWhereInput[]
    NOT?: PersonalInformationWhereInput | PersonalInformationWhereInput[]
    id?: IntFilter<"PersonalInformation"> | number
    first_name?: StringFilter<"PersonalInformation"> | string
    middle_name?: StringNullableFilter<"PersonalInformation"> | string | null
    last_name?: StringFilter<"PersonalInformation"> | string
    address?: StringNullableFilter<"PersonalInformation"> | string | null
    phone_number?: StringFilter<"PersonalInformation"> | string
    email_address?: StringFilter<"PersonalInformation"> | string
    date_of_birth?: DateTimeNullableFilter<"PersonalInformation"> | Date | string | null
    social_security_number?: StringNullableFilter<"PersonalInformation"> | string | null
    preferred_pronouns?: StringNullableFilter<"PersonalInformation"> | string | null
    AdditionalInformation?: AdditionalInformationListRelationFilter
    Attachments?: AttachmentsListRelationFilter
    CaseDetails?: CaseDetailsListRelationFilter
    ElectronicSignature?: ElectronicSignatureListRelationFilter
    FamilyPersonalHistory?: FamilyPersonalHistoryListRelationFilter
    FinancialInformation?: FinancialInformationListRelationFilter
    LegalHistory?: LegalHistoryListRelationFilter
  }

  export type PersonalInformationOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone_number?: SortOrder
    email_address?: SortOrder
    date_of_birth?: SortOrderInput | SortOrder
    social_security_number?: SortOrderInput | SortOrder
    preferred_pronouns?: SortOrderInput | SortOrder
    AdditionalInformation?: AdditionalInformationOrderByRelationAggregateInput
    Attachments?: AttachmentsOrderByRelationAggregateInput
    CaseDetails?: CaseDetailsOrderByRelationAggregateInput
    ElectronicSignature?: ElectronicSignatureOrderByRelationAggregateInput
    FamilyPersonalHistory?: FamilyPersonalHistoryOrderByRelationAggregateInput
    FinancialInformation?: FinancialInformationOrderByRelationAggregateInput
    LegalHistory?: LegalHistoryOrderByRelationAggregateInput
  }

  export type PersonalInformationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PersonalInformationWhereInput | PersonalInformationWhereInput[]
    OR?: PersonalInformationWhereInput[]
    NOT?: PersonalInformationWhereInput | PersonalInformationWhereInput[]
    first_name?: StringFilter<"PersonalInformation"> | string
    middle_name?: StringNullableFilter<"PersonalInformation"> | string | null
    last_name?: StringFilter<"PersonalInformation"> | string
    address?: StringNullableFilter<"PersonalInformation"> | string | null
    phone_number?: StringFilter<"PersonalInformation"> | string
    email_address?: StringFilter<"PersonalInformation"> | string
    date_of_birth?: DateTimeNullableFilter<"PersonalInformation"> | Date | string | null
    social_security_number?: StringNullableFilter<"PersonalInformation"> | string | null
    preferred_pronouns?: StringNullableFilter<"PersonalInformation"> | string | null
    AdditionalInformation?: AdditionalInformationListRelationFilter
    Attachments?: AttachmentsListRelationFilter
    CaseDetails?: CaseDetailsListRelationFilter
    ElectronicSignature?: ElectronicSignatureListRelationFilter
    FamilyPersonalHistory?: FamilyPersonalHistoryListRelationFilter
    FinancialInformation?: FinancialInformationListRelationFilter
    LegalHistory?: LegalHistoryListRelationFilter
  }, "id">

  export type PersonalInformationOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrderInput | SortOrder
    last_name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone_number?: SortOrder
    email_address?: SortOrder
    date_of_birth?: SortOrderInput | SortOrder
    social_security_number?: SortOrderInput | SortOrder
    preferred_pronouns?: SortOrderInput | SortOrder
    _count?: PersonalInformationCountOrderByAggregateInput
    _avg?: PersonalInformationAvgOrderByAggregateInput
    _max?: PersonalInformationMaxOrderByAggregateInput
    _min?: PersonalInformationMinOrderByAggregateInput
    _sum?: PersonalInformationSumOrderByAggregateInput
  }

  export type PersonalInformationScalarWhereWithAggregatesInput = {
    AND?: PersonalInformationScalarWhereWithAggregatesInput | PersonalInformationScalarWhereWithAggregatesInput[]
    OR?: PersonalInformationScalarWhereWithAggregatesInput[]
    NOT?: PersonalInformationScalarWhereWithAggregatesInput | PersonalInformationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PersonalInformation"> | number
    first_name?: StringWithAggregatesFilter<"PersonalInformation"> | string
    middle_name?: StringNullableWithAggregatesFilter<"PersonalInformation"> | string | null
    last_name?: StringWithAggregatesFilter<"PersonalInformation"> | string
    address?: StringNullableWithAggregatesFilter<"PersonalInformation"> | string | null
    phone_number?: StringWithAggregatesFilter<"PersonalInformation"> | string
    email_address?: StringWithAggregatesFilter<"PersonalInformation"> | string
    date_of_birth?: DateTimeNullableWithAggregatesFilter<"PersonalInformation"> | Date | string | null
    social_security_number?: StringNullableWithAggregatesFilter<"PersonalInformation"> | string | null
    preferred_pronouns?: StringNullableWithAggregatesFilter<"PersonalInformation"> | string | null
  }

  export type UserLoginWhereInput = {
    AND?: UserLoginWhereInput | UserLoginWhereInput[]
    OR?: UserLoginWhereInput[]
    NOT?: UserLoginWhereInput | UserLoginWhereInput[]
    id?: IntFilter<"UserLogin"> | number
    email_address?: StringFilter<"UserLogin"> | string
    password?: StringFilter<"UserLogin"> | string
  }

  export type UserLoginOrderByWithRelationInput = {
    id?: SortOrder
    email_address?: SortOrder
    password?: SortOrder
  }

  export type UserLoginWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email_address?: string
    AND?: UserLoginWhereInput | UserLoginWhereInput[]
    OR?: UserLoginWhereInput[]
    NOT?: UserLoginWhereInput | UserLoginWhereInput[]
    password?: StringFilter<"UserLogin"> | string
  }, "id" | "email_address">

  export type UserLoginOrderByWithAggregationInput = {
    id?: SortOrder
    email_address?: SortOrder
    password?: SortOrder
    _count?: UserLoginCountOrderByAggregateInput
    _avg?: UserLoginAvgOrderByAggregateInput
    _max?: UserLoginMaxOrderByAggregateInput
    _min?: UserLoginMinOrderByAggregateInput
    _sum?: UserLoginSumOrderByAggregateInput
  }

  export type UserLoginScalarWhereWithAggregatesInput = {
    AND?: UserLoginScalarWhereWithAggregatesInput | UserLoginScalarWhereWithAggregatesInput[]
    OR?: UserLoginScalarWhereWithAggregatesInput[]
    NOT?: UserLoginScalarWhereWithAggregatesInput | UserLoginScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserLogin"> | number
    email_address?: StringWithAggregatesFilter<"UserLogin"> | string
    password?: StringWithAggregatesFilter<"UserLogin"> | string
  }

  export type AdditionalInformationCreateInput = {
    preferred_communication_method?: string | null
    emergency_contact_name?: string | null
    emergency_contact_relationship?: string | null
    emergency_contact_phone?: string | null
    how_did_you_hear_about_us?: string | null
    authorization_and_consent: boolean
    PersonalInformation: PersonalInformationCreateNestedOneWithoutAdditionalInformationInput
  }

  export type AdditionalInformationUncheckedCreateInput = {
    id?: number
    preferred_communication_method?: string | null
    emergency_contact_name?: string | null
    emergency_contact_relationship?: string | null
    emergency_contact_phone?: string | null
    how_did_you_hear_about_us?: string | null
    authorization_and_consent: boolean
    client_id: number
  }

  export type AdditionalInformationUpdateInput = {
    preferred_communication_method?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    how_did_you_hear_about_us?: NullableStringFieldUpdateOperationsInput | string | null
    authorization_and_consent?: BoolFieldUpdateOperationsInput | boolean
    PersonalInformation?: PersonalInformationUpdateOneRequiredWithoutAdditionalInformationNestedInput
  }

  export type AdditionalInformationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    preferred_communication_method?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    how_did_you_hear_about_us?: NullableStringFieldUpdateOperationsInput | string | null
    authorization_and_consent?: BoolFieldUpdateOperationsInput | boolean
    client_id?: IntFieldUpdateOperationsInput | number
  }

  export type AdditionalInformationCreateManyInput = {
    id?: number
    preferred_communication_method?: string | null
    emergency_contact_name?: string | null
    emergency_contact_relationship?: string | null
    emergency_contact_phone?: string | null
    how_did_you_hear_about_us?: string | null
    authorization_and_consent: boolean
    client_id: number
  }

  export type AdditionalInformationUpdateManyMutationInput = {
    preferred_communication_method?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    how_did_you_hear_about_us?: NullableStringFieldUpdateOperationsInput | string | null
    authorization_and_consent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdditionalInformationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    preferred_communication_method?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    how_did_you_hear_about_us?: NullableStringFieldUpdateOperationsInput | string | null
    authorization_and_consent?: BoolFieldUpdateOperationsInput | boolean
    client_id?: IntFieldUpdateOperationsInput | number
  }

  export type AttachmentsCreateInput = {
    document_name?: string | null
    document_url?: string | null
    PersonalInformation: PersonalInformationCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentsUncheckedCreateInput = {
    id?: number
    client_id: number
    document_name?: string | null
    document_url?: string | null
  }

  export type AttachmentsUpdateInput = {
    document_name?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
    PersonalInformation?: PersonalInformationUpdateOneRequiredWithoutAttachmentsNestedInput
  }

  export type AttachmentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    document_name?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttachmentsCreateManyInput = {
    id?: number
    client_id: number
    document_name?: string | null
    document_url?: string | null
  }

  export type AttachmentsUpdateManyMutationInput = {
    document_name?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttachmentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    document_name?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CaseDetailsCreateInput = {
    nature_of_legal_issue: string
    date_of_incident?: Date | string | null
    case_number?: string | null
    opposing_parties?: string | null
    current_attorney?: string | null
    PersonalInformation: PersonalInformationCreateNestedOneWithoutCaseDetailsInput
  }

  export type CaseDetailsUncheckedCreateInput = {
    id?: number
    nature_of_legal_issue: string
    date_of_incident?: Date | string | null
    case_number?: string | null
    opposing_parties?: string | null
    current_attorney?: string | null
    client_id: number
  }

  export type CaseDetailsUpdateInput = {
    nature_of_legal_issue?: StringFieldUpdateOperationsInput | string
    date_of_incident?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    case_number?: NullableStringFieldUpdateOperationsInput | string | null
    opposing_parties?: NullableStringFieldUpdateOperationsInput | string | null
    current_attorney?: NullableStringFieldUpdateOperationsInput | string | null
    PersonalInformation?: PersonalInformationUpdateOneRequiredWithoutCaseDetailsNestedInput
  }

  export type CaseDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nature_of_legal_issue?: StringFieldUpdateOperationsInput | string
    date_of_incident?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    case_number?: NullableStringFieldUpdateOperationsInput | string | null
    opposing_parties?: NullableStringFieldUpdateOperationsInput | string | null
    current_attorney?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: IntFieldUpdateOperationsInput | number
  }

  export type CaseDetailsCreateManyInput = {
    id?: number
    nature_of_legal_issue: string
    date_of_incident?: Date | string | null
    case_number?: string | null
    opposing_parties?: string | null
    current_attorney?: string | null
    client_id: number
  }

  export type CaseDetailsUpdateManyMutationInput = {
    nature_of_legal_issue?: StringFieldUpdateOperationsInput | string
    date_of_incident?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    case_number?: NullableStringFieldUpdateOperationsInput | string | null
    opposing_parties?: NullableStringFieldUpdateOperationsInput | string | null
    current_attorney?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CaseDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nature_of_legal_issue?: StringFieldUpdateOperationsInput | string
    date_of_incident?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    case_number?: NullableStringFieldUpdateOperationsInput | string | null
    opposing_parties?: NullableStringFieldUpdateOperationsInput | string | null
    current_attorney?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: IntFieldUpdateOperationsInput | number
  }

  export type ElectronicSignatureCreateInput = {
    signature_image_url?: string | null
    signature_date?: Date | string | null
    PersonalInformation: PersonalInformationCreateNestedOneWithoutElectronicSignatureInput
  }

  export type ElectronicSignatureUncheckedCreateInput = {
    id?: number
    client_id: number
    signature_image_url?: string | null
    signature_date?: Date | string | null
  }

  export type ElectronicSignatureUpdateInput = {
    signature_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    signature_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PersonalInformation?: PersonalInformationUpdateOneRequiredWithoutElectronicSignatureNestedInput
  }

  export type ElectronicSignatureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    signature_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    signature_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ElectronicSignatureCreateManyInput = {
    id?: number
    client_id: number
    signature_image_url?: string | null
    signature_date?: Date | string | null
  }

  export type ElectronicSignatureUpdateManyMutationInput = {
    signature_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    signature_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ElectronicSignatureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_id?: IntFieldUpdateOperationsInput | number
    signature_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    signature_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FamilyPersonalHistoryCreateInput = {
    marital_status?: string | null
    dependents?: number | null
    health_information?: string | null
    child_custody_support_info?: string | null
    PersonalInformation: PersonalInformationCreateNestedOneWithoutFamilyPersonalHistoryInput
  }

  export type FamilyPersonalHistoryUncheckedCreateInput = {
    id?: number
    marital_status?: string | null
    dependents?: number | null
    health_information?: string | null
    child_custody_support_info?: string | null
    client_id: number
  }

  export type FamilyPersonalHistoryUpdateInput = {
    marital_status?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: NullableIntFieldUpdateOperationsInput | number | null
    health_information?: NullableStringFieldUpdateOperationsInput | string | null
    child_custody_support_info?: NullableStringFieldUpdateOperationsInput | string | null
    PersonalInformation?: PersonalInformationUpdateOneRequiredWithoutFamilyPersonalHistoryNestedInput
  }

  export type FamilyPersonalHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    marital_status?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: NullableIntFieldUpdateOperationsInput | number | null
    health_information?: NullableStringFieldUpdateOperationsInput | string | null
    child_custody_support_info?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: IntFieldUpdateOperationsInput | number
  }

  export type FamilyPersonalHistoryCreateManyInput = {
    id?: number
    marital_status?: string | null
    dependents?: number | null
    health_information?: string | null
    child_custody_support_info?: string | null
    client_id: number
  }

  export type FamilyPersonalHistoryUpdateManyMutationInput = {
    marital_status?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: NullableIntFieldUpdateOperationsInput | number | null
    health_information?: NullableStringFieldUpdateOperationsInput | string | null
    child_custody_support_info?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FamilyPersonalHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    marital_status?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: NullableIntFieldUpdateOperationsInput | number | null
    health_information?: NullableStringFieldUpdateOperationsInput | string | null
    child_custody_support_info?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: IntFieldUpdateOperationsInput | number
  }

  export type FinancialInformationCreateInput = {
    current_employer?: string | null
    job_title?: string | null
    income?: number | null
    monthly_expenses?: number | null
    debts?: number | null
    assets?: string | null
    liabilities?: string | null
    bankruptcy_history: boolean
    PersonalInformation: PersonalInformationCreateNestedOneWithoutFinancialInformationInput
  }

  export type FinancialInformationUncheckedCreateInput = {
    id?: number
    current_employer?: string | null
    job_title?: string | null
    income?: number | null
    monthly_expenses?: number | null
    debts?: number | null
    assets?: string | null
    liabilities?: string | null
    bankruptcy_history: boolean
    client_id: number
  }

  export type FinancialInformationUpdateInput = {
    current_employer?: NullableStringFieldUpdateOperationsInput | string | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    income?: NullableFloatFieldUpdateOperationsInput | number | null
    monthly_expenses?: NullableFloatFieldUpdateOperationsInput | number | null
    debts?: NullableFloatFieldUpdateOperationsInput | number | null
    assets?: NullableStringFieldUpdateOperationsInput | string | null
    liabilities?: NullableStringFieldUpdateOperationsInput | string | null
    bankruptcy_history?: BoolFieldUpdateOperationsInput | boolean
    PersonalInformation?: PersonalInformationUpdateOneRequiredWithoutFinancialInformationNestedInput
  }

  export type FinancialInformationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    current_employer?: NullableStringFieldUpdateOperationsInput | string | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    income?: NullableFloatFieldUpdateOperationsInput | number | null
    monthly_expenses?: NullableFloatFieldUpdateOperationsInput | number | null
    debts?: NullableFloatFieldUpdateOperationsInput | number | null
    assets?: NullableStringFieldUpdateOperationsInput | string | null
    liabilities?: NullableStringFieldUpdateOperationsInput | string | null
    bankruptcy_history?: BoolFieldUpdateOperationsInput | boolean
    client_id?: IntFieldUpdateOperationsInput | number
  }

  export type FinancialInformationCreateManyInput = {
    id?: number
    current_employer?: string | null
    job_title?: string | null
    income?: number | null
    monthly_expenses?: number | null
    debts?: number | null
    assets?: string | null
    liabilities?: string | null
    bankruptcy_history: boolean
    client_id: number
  }

  export type FinancialInformationUpdateManyMutationInput = {
    current_employer?: NullableStringFieldUpdateOperationsInput | string | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    income?: NullableFloatFieldUpdateOperationsInput | number | null
    monthly_expenses?: NullableFloatFieldUpdateOperationsInput | number | null
    debts?: NullableFloatFieldUpdateOperationsInput | number | null
    assets?: NullableStringFieldUpdateOperationsInput | string | null
    liabilities?: NullableStringFieldUpdateOperationsInput | string | null
    bankruptcy_history?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FinancialInformationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    current_employer?: NullableStringFieldUpdateOperationsInput | string | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    income?: NullableFloatFieldUpdateOperationsInput | number | null
    monthly_expenses?: NullableFloatFieldUpdateOperationsInput | number | null
    debts?: NullableFloatFieldUpdateOperationsInput | number | null
    assets?: NullableStringFieldUpdateOperationsInput | string | null
    liabilities?: NullableStringFieldUpdateOperationsInput | string | null
    bankruptcy_history?: BoolFieldUpdateOperationsInput | boolean
    client_id?: IntFieldUpdateOperationsInput | number
  }

  export type LegalHistoryCreateInput = {
    criminal_history?: string | null
    civil_litigation_history?: string | null
    legal_restrictions_or_probation?: string | null
    PersonalInformation: PersonalInformationCreateNestedOneWithoutLegalHistoryInput
  }

  export type LegalHistoryUncheckedCreateInput = {
    id?: number
    criminal_history?: string | null
    civil_litigation_history?: string | null
    legal_restrictions_or_probation?: string | null
    client_id: number
  }

  export type LegalHistoryUpdateInput = {
    criminal_history?: NullableStringFieldUpdateOperationsInput | string | null
    civil_litigation_history?: NullableStringFieldUpdateOperationsInput | string | null
    legal_restrictions_or_probation?: NullableStringFieldUpdateOperationsInput | string | null
    PersonalInformation?: PersonalInformationUpdateOneRequiredWithoutLegalHistoryNestedInput
  }

  export type LegalHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    criminal_history?: NullableStringFieldUpdateOperationsInput | string | null
    civil_litigation_history?: NullableStringFieldUpdateOperationsInput | string | null
    legal_restrictions_or_probation?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: IntFieldUpdateOperationsInput | number
  }

  export type LegalHistoryCreateManyInput = {
    id?: number
    criminal_history?: string | null
    civil_litigation_history?: string | null
    legal_restrictions_or_probation?: string | null
    client_id: number
  }

  export type LegalHistoryUpdateManyMutationInput = {
    criminal_history?: NullableStringFieldUpdateOperationsInput | string | null
    civil_litigation_history?: NullableStringFieldUpdateOperationsInput | string | null
    legal_restrictions_or_probation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LegalHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    criminal_history?: NullableStringFieldUpdateOperationsInput | string | null
    civil_litigation_history?: NullableStringFieldUpdateOperationsInput | string | null
    legal_restrictions_or_probation?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: IntFieldUpdateOperationsInput | number
  }

  export type PersonalInformationCreateInput = {
    first_name: string
    middle_name?: string | null
    last_name: string
    address?: string | null
    phone_number: string
    email_address: string
    date_of_birth?: Date | string | null
    social_security_number?: string | null
    preferred_pronouns?: string | null
    AdditionalInformation?: AdditionalInformationCreateNestedManyWithoutPersonalInformationInput
    Attachments?: AttachmentsCreateNestedManyWithoutPersonalInformationInput
    CaseDetails?: CaseDetailsCreateNestedManyWithoutPersonalInformationInput
    ElectronicSignature?: ElectronicSignatureCreateNestedManyWithoutPersonalInformationInput
    FamilyPersonalHistory?: FamilyPersonalHistoryCreateNestedManyWithoutPersonalInformationInput
    FinancialInformation?: FinancialInformationCreateNestedManyWithoutPersonalInformationInput
    LegalHistory?: LegalHistoryCreateNestedManyWithoutPersonalInformationInput
  }

  export type PersonalInformationUncheckedCreateInput = {
    id?: number
    first_name: string
    middle_name?: string | null
    last_name: string
    address?: string | null
    phone_number: string
    email_address: string
    date_of_birth?: Date | string | null
    social_security_number?: string | null
    preferred_pronouns?: string | null
    AdditionalInformation?: AdditionalInformationUncheckedCreateNestedManyWithoutPersonalInformationInput
    Attachments?: AttachmentsUncheckedCreateNestedManyWithoutPersonalInformationInput
    CaseDetails?: CaseDetailsUncheckedCreateNestedManyWithoutPersonalInformationInput
    ElectronicSignature?: ElectronicSignatureUncheckedCreateNestedManyWithoutPersonalInformationInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUncheckedCreateNestedManyWithoutPersonalInformationInput
    FinancialInformation?: FinancialInformationUncheckedCreateNestedManyWithoutPersonalInformationInput
    LegalHistory?: LegalHistoryUncheckedCreateNestedManyWithoutPersonalInformationInput
  }

  export type PersonalInformationUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    AdditionalInformation?: AdditionalInformationUpdateManyWithoutPersonalInformationNestedInput
    Attachments?: AttachmentsUpdateManyWithoutPersonalInformationNestedInput
    CaseDetails?: CaseDetailsUpdateManyWithoutPersonalInformationNestedInput
    ElectronicSignature?: ElectronicSignatureUpdateManyWithoutPersonalInformationNestedInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUpdateManyWithoutPersonalInformationNestedInput
    FinancialInformation?: FinancialInformationUpdateManyWithoutPersonalInformationNestedInput
    LegalHistory?: LegalHistoryUpdateManyWithoutPersonalInformationNestedInput
  }

  export type PersonalInformationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    AdditionalInformation?: AdditionalInformationUncheckedUpdateManyWithoutPersonalInformationNestedInput
    Attachments?: AttachmentsUncheckedUpdateManyWithoutPersonalInformationNestedInput
    CaseDetails?: CaseDetailsUncheckedUpdateManyWithoutPersonalInformationNestedInput
    ElectronicSignature?: ElectronicSignatureUncheckedUpdateManyWithoutPersonalInformationNestedInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUncheckedUpdateManyWithoutPersonalInformationNestedInput
    FinancialInformation?: FinancialInformationUncheckedUpdateManyWithoutPersonalInformationNestedInput
    LegalHistory?: LegalHistoryUncheckedUpdateManyWithoutPersonalInformationNestedInput
  }

  export type PersonalInformationCreateManyInput = {
    id?: number
    first_name: string
    middle_name?: string | null
    last_name: string
    address?: string | null
    phone_number: string
    email_address: string
    date_of_birth?: Date | string | null
    social_security_number?: string | null
    preferred_pronouns?: string | null
  }

  export type PersonalInformationUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_pronouns?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonalInformationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_pronouns?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserLoginCreateInput = {
    email_address: string
    password: string
  }

  export type UserLoginUncheckedCreateInput = {
    id?: number
    email_address: string
    password: string
  }

  export type UserLoginUpdateInput = {
    email_address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserLoginUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email_address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserLoginCreateManyInput = {
    id?: number
    email_address: string
    password: string
  }

  export type UserLoginUpdateManyMutationInput = {
    email_address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserLoginUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email_address?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PersonalInformationRelationFilter = {
    is?: PersonalInformationWhereInput
    isNot?: PersonalInformationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdditionalInformationCountOrderByAggregateInput = {
    id?: SortOrder
    preferred_communication_method?: SortOrder
    emergency_contact_name?: SortOrder
    emergency_contact_relationship?: SortOrder
    emergency_contact_phone?: SortOrder
    how_did_you_hear_about_us?: SortOrder
    authorization_and_consent?: SortOrder
    client_id?: SortOrder
  }

  export type AdditionalInformationAvgOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
  }

  export type AdditionalInformationMaxOrderByAggregateInput = {
    id?: SortOrder
    preferred_communication_method?: SortOrder
    emergency_contact_name?: SortOrder
    emergency_contact_relationship?: SortOrder
    emergency_contact_phone?: SortOrder
    how_did_you_hear_about_us?: SortOrder
    authorization_and_consent?: SortOrder
    client_id?: SortOrder
  }

  export type AdditionalInformationMinOrderByAggregateInput = {
    id?: SortOrder
    preferred_communication_method?: SortOrder
    emergency_contact_name?: SortOrder
    emergency_contact_relationship?: SortOrder
    emergency_contact_phone?: SortOrder
    how_did_you_hear_about_us?: SortOrder
    authorization_and_consent?: SortOrder
    client_id?: SortOrder
  }

  export type AdditionalInformationSumOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AttachmentsCountOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    document_name?: SortOrder
    document_url?: SortOrder
  }

  export type AttachmentsAvgOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
  }

  export type AttachmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    document_name?: SortOrder
    document_url?: SortOrder
  }

  export type AttachmentsMinOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    document_name?: SortOrder
    document_url?: SortOrder
  }

  export type AttachmentsSumOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CaseDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    nature_of_legal_issue?: SortOrder
    date_of_incident?: SortOrder
    case_number?: SortOrder
    opposing_parties?: SortOrder
    current_attorney?: SortOrder
    client_id?: SortOrder
  }

  export type CaseDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
  }

  export type CaseDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    nature_of_legal_issue?: SortOrder
    date_of_incident?: SortOrder
    case_number?: SortOrder
    opposing_parties?: SortOrder
    current_attorney?: SortOrder
    client_id?: SortOrder
  }

  export type CaseDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    nature_of_legal_issue?: SortOrder
    date_of_incident?: SortOrder
    case_number?: SortOrder
    opposing_parties?: SortOrder
    current_attorney?: SortOrder
    client_id?: SortOrder
  }

  export type CaseDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ElectronicSignatureCountOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    signature_image_url?: SortOrder
    signature_date?: SortOrder
  }

  export type ElectronicSignatureAvgOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
  }

  export type ElectronicSignatureMaxOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    signature_image_url?: SortOrder
    signature_date?: SortOrder
  }

  export type ElectronicSignatureMinOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    signature_image_url?: SortOrder
    signature_date?: SortOrder
  }

  export type ElectronicSignatureSumOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FamilyPersonalHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    marital_status?: SortOrder
    dependents?: SortOrder
    health_information?: SortOrder
    child_custody_support_info?: SortOrder
    client_id?: SortOrder
  }

  export type FamilyPersonalHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    dependents?: SortOrder
    client_id?: SortOrder
  }

  export type FamilyPersonalHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    marital_status?: SortOrder
    dependents?: SortOrder
    health_information?: SortOrder
    child_custody_support_info?: SortOrder
    client_id?: SortOrder
  }

  export type FamilyPersonalHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    marital_status?: SortOrder
    dependents?: SortOrder
    health_information?: SortOrder
    child_custody_support_info?: SortOrder
    client_id?: SortOrder
  }

  export type FamilyPersonalHistorySumOrderByAggregateInput = {
    id?: SortOrder
    dependents?: SortOrder
    client_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FinancialInformationCountOrderByAggregateInput = {
    id?: SortOrder
    current_employer?: SortOrder
    job_title?: SortOrder
    income?: SortOrder
    monthly_expenses?: SortOrder
    debts?: SortOrder
    assets?: SortOrder
    liabilities?: SortOrder
    bankruptcy_history?: SortOrder
    client_id?: SortOrder
  }

  export type FinancialInformationAvgOrderByAggregateInput = {
    id?: SortOrder
    income?: SortOrder
    monthly_expenses?: SortOrder
    debts?: SortOrder
    client_id?: SortOrder
  }

  export type FinancialInformationMaxOrderByAggregateInput = {
    id?: SortOrder
    current_employer?: SortOrder
    job_title?: SortOrder
    income?: SortOrder
    monthly_expenses?: SortOrder
    debts?: SortOrder
    assets?: SortOrder
    liabilities?: SortOrder
    bankruptcy_history?: SortOrder
    client_id?: SortOrder
  }

  export type FinancialInformationMinOrderByAggregateInput = {
    id?: SortOrder
    current_employer?: SortOrder
    job_title?: SortOrder
    income?: SortOrder
    monthly_expenses?: SortOrder
    debts?: SortOrder
    assets?: SortOrder
    liabilities?: SortOrder
    bankruptcy_history?: SortOrder
    client_id?: SortOrder
  }

  export type FinancialInformationSumOrderByAggregateInput = {
    id?: SortOrder
    income?: SortOrder
    monthly_expenses?: SortOrder
    debts?: SortOrder
    client_id?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type LegalHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    criminal_history?: SortOrder
    civil_litigation_history?: SortOrder
    legal_restrictions_or_probation?: SortOrder
    client_id?: SortOrder
  }

  export type LegalHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
  }

  export type LegalHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    criminal_history?: SortOrder
    civil_litigation_history?: SortOrder
    legal_restrictions_or_probation?: SortOrder
    client_id?: SortOrder
  }

  export type LegalHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    criminal_history?: SortOrder
    civil_litigation_history?: SortOrder
    legal_restrictions_or_probation?: SortOrder
    client_id?: SortOrder
  }

  export type LegalHistorySumOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
  }

  export type AdditionalInformationListRelationFilter = {
    every?: AdditionalInformationWhereInput
    some?: AdditionalInformationWhereInput
    none?: AdditionalInformationWhereInput
  }

  export type AttachmentsListRelationFilter = {
    every?: AttachmentsWhereInput
    some?: AttachmentsWhereInput
    none?: AttachmentsWhereInput
  }

  export type CaseDetailsListRelationFilter = {
    every?: CaseDetailsWhereInput
    some?: CaseDetailsWhereInput
    none?: CaseDetailsWhereInput
  }

  export type ElectronicSignatureListRelationFilter = {
    every?: ElectronicSignatureWhereInput
    some?: ElectronicSignatureWhereInput
    none?: ElectronicSignatureWhereInput
  }

  export type FamilyPersonalHistoryListRelationFilter = {
    every?: FamilyPersonalHistoryWhereInput
    some?: FamilyPersonalHistoryWhereInput
    none?: FamilyPersonalHistoryWhereInput
  }

  export type FinancialInformationListRelationFilter = {
    every?: FinancialInformationWhereInput
    some?: FinancialInformationWhereInput
    none?: FinancialInformationWhereInput
  }

  export type LegalHistoryListRelationFilter = {
    every?: LegalHistoryWhereInput
    some?: LegalHistoryWhereInput
    none?: LegalHistoryWhereInput
  }

  export type AdditionalInformationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttachmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CaseDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ElectronicSignatureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FamilyPersonalHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinancialInformationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LegalHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonalInformationCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    email_address?: SortOrder
    date_of_birth?: SortOrder
    social_security_number?: SortOrder
    preferred_pronouns?: SortOrder
  }

  export type PersonalInformationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PersonalInformationMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    email_address?: SortOrder
    date_of_birth?: SortOrder
    social_security_number?: SortOrder
    preferred_pronouns?: SortOrder
  }

  export type PersonalInformationMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    middle_name?: SortOrder
    last_name?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    email_address?: SortOrder
    date_of_birth?: SortOrder
    social_security_number?: SortOrder
    preferred_pronouns?: SortOrder
  }

  export type PersonalInformationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserLoginCountOrderByAggregateInput = {
    id?: SortOrder
    email_address?: SortOrder
    password?: SortOrder
  }

  export type UserLoginAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserLoginMaxOrderByAggregateInput = {
    id?: SortOrder
    email_address?: SortOrder
    password?: SortOrder
  }

  export type UserLoginMinOrderByAggregateInput = {
    id?: SortOrder
    email_address?: SortOrder
    password?: SortOrder
  }

  export type UserLoginSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PersonalInformationCreateNestedOneWithoutAdditionalInformationInput = {
    create?: XOR<PersonalInformationCreateWithoutAdditionalInformationInput, PersonalInformationUncheckedCreateWithoutAdditionalInformationInput>
    connectOrCreate?: PersonalInformationCreateOrConnectWithoutAdditionalInformationInput
    connect?: PersonalInformationWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PersonalInformationUpdateOneRequiredWithoutAdditionalInformationNestedInput = {
    create?: XOR<PersonalInformationCreateWithoutAdditionalInformationInput, PersonalInformationUncheckedCreateWithoutAdditionalInformationInput>
    connectOrCreate?: PersonalInformationCreateOrConnectWithoutAdditionalInformationInput
    upsert?: PersonalInformationUpsertWithoutAdditionalInformationInput
    connect?: PersonalInformationWhereUniqueInput
    update?: XOR<XOR<PersonalInformationUpdateToOneWithWhereWithoutAdditionalInformationInput, PersonalInformationUpdateWithoutAdditionalInformationInput>, PersonalInformationUncheckedUpdateWithoutAdditionalInformationInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PersonalInformationCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<PersonalInformationCreateWithoutAttachmentsInput, PersonalInformationUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: PersonalInformationCreateOrConnectWithoutAttachmentsInput
    connect?: PersonalInformationWhereUniqueInput
  }

  export type PersonalInformationUpdateOneRequiredWithoutAttachmentsNestedInput = {
    create?: XOR<PersonalInformationCreateWithoutAttachmentsInput, PersonalInformationUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: PersonalInformationCreateOrConnectWithoutAttachmentsInput
    upsert?: PersonalInformationUpsertWithoutAttachmentsInput
    connect?: PersonalInformationWhereUniqueInput
    update?: XOR<XOR<PersonalInformationUpdateToOneWithWhereWithoutAttachmentsInput, PersonalInformationUpdateWithoutAttachmentsInput>, PersonalInformationUncheckedUpdateWithoutAttachmentsInput>
  }

  export type PersonalInformationCreateNestedOneWithoutCaseDetailsInput = {
    create?: XOR<PersonalInformationCreateWithoutCaseDetailsInput, PersonalInformationUncheckedCreateWithoutCaseDetailsInput>
    connectOrCreate?: PersonalInformationCreateOrConnectWithoutCaseDetailsInput
    connect?: PersonalInformationWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PersonalInformationUpdateOneRequiredWithoutCaseDetailsNestedInput = {
    create?: XOR<PersonalInformationCreateWithoutCaseDetailsInput, PersonalInformationUncheckedCreateWithoutCaseDetailsInput>
    connectOrCreate?: PersonalInformationCreateOrConnectWithoutCaseDetailsInput
    upsert?: PersonalInformationUpsertWithoutCaseDetailsInput
    connect?: PersonalInformationWhereUniqueInput
    update?: XOR<XOR<PersonalInformationUpdateToOneWithWhereWithoutCaseDetailsInput, PersonalInformationUpdateWithoutCaseDetailsInput>, PersonalInformationUncheckedUpdateWithoutCaseDetailsInput>
  }

  export type PersonalInformationCreateNestedOneWithoutElectronicSignatureInput = {
    create?: XOR<PersonalInformationCreateWithoutElectronicSignatureInput, PersonalInformationUncheckedCreateWithoutElectronicSignatureInput>
    connectOrCreate?: PersonalInformationCreateOrConnectWithoutElectronicSignatureInput
    connect?: PersonalInformationWhereUniqueInput
  }

  export type PersonalInformationUpdateOneRequiredWithoutElectronicSignatureNestedInput = {
    create?: XOR<PersonalInformationCreateWithoutElectronicSignatureInput, PersonalInformationUncheckedCreateWithoutElectronicSignatureInput>
    connectOrCreate?: PersonalInformationCreateOrConnectWithoutElectronicSignatureInput
    upsert?: PersonalInformationUpsertWithoutElectronicSignatureInput
    connect?: PersonalInformationWhereUniqueInput
    update?: XOR<XOR<PersonalInformationUpdateToOneWithWhereWithoutElectronicSignatureInput, PersonalInformationUpdateWithoutElectronicSignatureInput>, PersonalInformationUncheckedUpdateWithoutElectronicSignatureInput>
  }

  export type PersonalInformationCreateNestedOneWithoutFamilyPersonalHistoryInput = {
    create?: XOR<PersonalInformationCreateWithoutFamilyPersonalHistoryInput, PersonalInformationUncheckedCreateWithoutFamilyPersonalHistoryInput>
    connectOrCreate?: PersonalInformationCreateOrConnectWithoutFamilyPersonalHistoryInput
    connect?: PersonalInformationWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PersonalInformationUpdateOneRequiredWithoutFamilyPersonalHistoryNestedInput = {
    create?: XOR<PersonalInformationCreateWithoutFamilyPersonalHistoryInput, PersonalInformationUncheckedCreateWithoutFamilyPersonalHistoryInput>
    connectOrCreate?: PersonalInformationCreateOrConnectWithoutFamilyPersonalHistoryInput
    upsert?: PersonalInformationUpsertWithoutFamilyPersonalHistoryInput
    connect?: PersonalInformationWhereUniqueInput
    update?: XOR<XOR<PersonalInformationUpdateToOneWithWhereWithoutFamilyPersonalHistoryInput, PersonalInformationUpdateWithoutFamilyPersonalHistoryInput>, PersonalInformationUncheckedUpdateWithoutFamilyPersonalHistoryInput>
  }

  export type PersonalInformationCreateNestedOneWithoutFinancialInformationInput = {
    create?: XOR<PersonalInformationCreateWithoutFinancialInformationInput, PersonalInformationUncheckedCreateWithoutFinancialInformationInput>
    connectOrCreate?: PersonalInformationCreateOrConnectWithoutFinancialInformationInput
    connect?: PersonalInformationWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PersonalInformationUpdateOneRequiredWithoutFinancialInformationNestedInput = {
    create?: XOR<PersonalInformationCreateWithoutFinancialInformationInput, PersonalInformationUncheckedCreateWithoutFinancialInformationInput>
    connectOrCreate?: PersonalInformationCreateOrConnectWithoutFinancialInformationInput
    upsert?: PersonalInformationUpsertWithoutFinancialInformationInput
    connect?: PersonalInformationWhereUniqueInput
    update?: XOR<XOR<PersonalInformationUpdateToOneWithWhereWithoutFinancialInformationInput, PersonalInformationUpdateWithoutFinancialInformationInput>, PersonalInformationUncheckedUpdateWithoutFinancialInformationInput>
  }

  export type PersonalInformationCreateNestedOneWithoutLegalHistoryInput = {
    create?: XOR<PersonalInformationCreateWithoutLegalHistoryInput, PersonalInformationUncheckedCreateWithoutLegalHistoryInput>
    connectOrCreate?: PersonalInformationCreateOrConnectWithoutLegalHistoryInput
    connect?: PersonalInformationWhereUniqueInput
  }

  export type PersonalInformationUpdateOneRequiredWithoutLegalHistoryNestedInput = {
    create?: XOR<PersonalInformationCreateWithoutLegalHistoryInput, PersonalInformationUncheckedCreateWithoutLegalHistoryInput>
    connectOrCreate?: PersonalInformationCreateOrConnectWithoutLegalHistoryInput
    upsert?: PersonalInformationUpsertWithoutLegalHistoryInput
    connect?: PersonalInformationWhereUniqueInput
    update?: XOR<XOR<PersonalInformationUpdateToOneWithWhereWithoutLegalHistoryInput, PersonalInformationUpdateWithoutLegalHistoryInput>, PersonalInformationUncheckedUpdateWithoutLegalHistoryInput>
  }

  export type AdditionalInformationCreateNestedManyWithoutPersonalInformationInput = {
    create?: XOR<AdditionalInformationCreateWithoutPersonalInformationInput, AdditionalInformationUncheckedCreateWithoutPersonalInformationInput> | AdditionalInformationCreateWithoutPersonalInformationInput[] | AdditionalInformationUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: AdditionalInformationCreateOrConnectWithoutPersonalInformationInput | AdditionalInformationCreateOrConnectWithoutPersonalInformationInput[]
    createMany?: AdditionalInformationCreateManyPersonalInformationInputEnvelope
    connect?: AdditionalInformationWhereUniqueInput | AdditionalInformationWhereUniqueInput[]
  }

  export type AttachmentsCreateNestedManyWithoutPersonalInformationInput = {
    create?: XOR<AttachmentsCreateWithoutPersonalInformationInput, AttachmentsUncheckedCreateWithoutPersonalInformationInput> | AttachmentsCreateWithoutPersonalInformationInput[] | AttachmentsUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: AttachmentsCreateOrConnectWithoutPersonalInformationInput | AttachmentsCreateOrConnectWithoutPersonalInformationInput[]
    createMany?: AttachmentsCreateManyPersonalInformationInputEnvelope
    connect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
  }

  export type CaseDetailsCreateNestedManyWithoutPersonalInformationInput = {
    create?: XOR<CaseDetailsCreateWithoutPersonalInformationInput, CaseDetailsUncheckedCreateWithoutPersonalInformationInput> | CaseDetailsCreateWithoutPersonalInformationInput[] | CaseDetailsUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: CaseDetailsCreateOrConnectWithoutPersonalInformationInput | CaseDetailsCreateOrConnectWithoutPersonalInformationInput[]
    createMany?: CaseDetailsCreateManyPersonalInformationInputEnvelope
    connect?: CaseDetailsWhereUniqueInput | CaseDetailsWhereUniqueInput[]
  }

  export type ElectronicSignatureCreateNestedManyWithoutPersonalInformationInput = {
    create?: XOR<ElectronicSignatureCreateWithoutPersonalInformationInput, ElectronicSignatureUncheckedCreateWithoutPersonalInformationInput> | ElectronicSignatureCreateWithoutPersonalInformationInput[] | ElectronicSignatureUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: ElectronicSignatureCreateOrConnectWithoutPersonalInformationInput | ElectronicSignatureCreateOrConnectWithoutPersonalInformationInput[]
    createMany?: ElectronicSignatureCreateManyPersonalInformationInputEnvelope
    connect?: ElectronicSignatureWhereUniqueInput | ElectronicSignatureWhereUniqueInput[]
  }

  export type FamilyPersonalHistoryCreateNestedManyWithoutPersonalInformationInput = {
    create?: XOR<FamilyPersonalHistoryCreateWithoutPersonalInformationInput, FamilyPersonalHistoryUncheckedCreateWithoutPersonalInformationInput> | FamilyPersonalHistoryCreateWithoutPersonalInformationInput[] | FamilyPersonalHistoryUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: FamilyPersonalHistoryCreateOrConnectWithoutPersonalInformationInput | FamilyPersonalHistoryCreateOrConnectWithoutPersonalInformationInput[]
    createMany?: FamilyPersonalHistoryCreateManyPersonalInformationInputEnvelope
    connect?: FamilyPersonalHistoryWhereUniqueInput | FamilyPersonalHistoryWhereUniqueInput[]
  }

  export type FinancialInformationCreateNestedManyWithoutPersonalInformationInput = {
    create?: XOR<FinancialInformationCreateWithoutPersonalInformationInput, FinancialInformationUncheckedCreateWithoutPersonalInformationInput> | FinancialInformationCreateWithoutPersonalInformationInput[] | FinancialInformationUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: FinancialInformationCreateOrConnectWithoutPersonalInformationInput | FinancialInformationCreateOrConnectWithoutPersonalInformationInput[]
    createMany?: FinancialInformationCreateManyPersonalInformationInputEnvelope
    connect?: FinancialInformationWhereUniqueInput | FinancialInformationWhereUniqueInput[]
  }

  export type LegalHistoryCreateNestedManyWithoutPersonalInformationInput = {
    create?: XOR<LegalHistoryCreateWithoutPersonalInformationInput, LegalHistoryUncheckedCreateWithoutPersonalInformationInput> | LegalHistoryCreateWithoutPersonalInformationInput[] | LegalHistoryUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: LegalHistoryCreateOrConnectWithoutPersonalInformationInput | LegalHistoryCreateOrConnectWithoutPersonalInformationInput[]
    createMany?: LegalHistoryCreateManyPersonalInformationInputEnvelope
    connect?: LegalHistoryWhereUniqueInput | LegalHistoryWhereUniqueInput[]
  }

  export type AdditionalInformationUncheckedCreateNestedManyWithoutPersonalInformationInput = {
    create?: XOR<AdditionalInformationCreateWithoutPersonalInformationInput, AdditionalInformationUncheckedCreateWithoutPersonalInformationInput> | AdditionalInformationCreateWithoutPersonalInformationInput[] | AdditionalInformationUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: AdditionalInformationCreateOrConnectWithoutPersonalInformationInput | AdditionalInformationCreateOrConnectWithoutPersonalInformationInput[]
    createMany?: AdditionalInformationCreateManyPersonalInformationInputEnvelope
    connect?: AdditionalInformationWhereUniqueInput | AdditionalInformationWhereUniqueInput[]
  }

  export type AttachmentsUncheckedCreateNestedManyWithoutPersonalInformationInput = {
    create?: XOR<AttachmentsCreateWithoutPersonalInformationInput, AttachmentsUncheckedCreateWithoutPersonalInformationInput> | AttachmentsCreateWithoutPersonalInformationInput[] | AttachmentsUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: AttachmentsCreateOrConnectWithoutPersonalInformationInput | AttachmentsCreateOrConnectWithoutPersonalInformationInput[]
    createMany?: AttachmentsCreateManyPersonalInformationInputEnvelope
    connect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
  }

  export type CaseDetailsUncheckedCreateNestedManyWithoutPersonalInformationInput = {
    create?: XOR<CaseDetailsCreateWithoutPersonalInformationInput, CaseDetailsUncheckedCreateWithoutPersonalInformationInput> | CaseDetailsCreateWithoutPersonalInformationInput[] | CaseDetailsUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: CaseDetailsCreateOrConnectWithoutPersonalInformationInput | CaseDetailsCreateOrConnectWithoutPersonalInformationInput[]
    createMany?: CaseDetailsCreateManyPersonalInformationInputEnvelope
    connect?: CaseDetailsWhereUniqueInput | CaseDetailsWhereUniqueInput[]
  }

  export type ElectronicSignatureUncheckedCreateNestedManyWithoutPersonalInformationInput = {
    create?: XOR<ElectronicSignatureCreateWithoutPersonalInformationInput, ElectronicSignatureUncheckedCreateWithoutPersonalInformationInput> | ElectronicSignatureCreateWithoutPersonalInformationInput[] | ElectronicSignatureUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: ElectronicSignatureCreateOrConnectWithoutPersonalInformationInput | ElectronicSignatureCreateOrConnectWithoutPersonalInformationInput[]
    createMany?: ElectronicSignatureCreateManyPersonalInformationInputEnvelope
    connect?: ElectronicSignatureWhereUniqueInput | ElectronicSignatureWhereUniqueInput[]
  }

  export type FamilyPersonalHistoryUncheckedCreateNestedManyWithoutPersonalInformationInput = {
    create?: XOR<FamilyPersonalHistoryCreateWithoutPersonalInformationInput, FamilyPersonalHistoryUncheckedCreateWithoutPersonalInformationInput> | FamilyPersonalHistoryCreateWithoutPersonalInformationInput[] | FamilyPersonalHistoryUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: FamilyPersonalHistoryCreateOrConnectWithoutPersonalInformationInput | FamilyPersonalHistoryCreateOrConnectWithoutPersonalInformationInput[]
    createMany?: FamilyPersonalHistoryCreateManyPersonalInformationInputEnvelope
    connect?: FamilyPersonalHistoryWhereUniqueInput | FamilyPersonalHistoryWhereUniqueInput[]
  }

  export type FinancialInformationUncheckedCreateNestedManyWithoutPersonalInformationInput = {
    create?: XOR<FinancialInformationCreateWithoutPersonalInformationInput, FinancialInformationUncheckedCreateWithoutPersonalInformationInput> | FinancialInformationCreateWithoutPersonalInformationInput[] | FinancialInformationUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: FinancialInformationCreateOrConnectWithoutPersonalInformationInput | FinancialInformationCreateOrConnectWithoutPersonalInformationInput[]
    createMany?: FinancialInformationCreateManyPersonalInformationInputEnvelope
    connect?: FinancialInformationWhereUniqueInput | FinancialInformationWhereUniqueInput[]
  }

  export type LegalHistoryUncheckedCreateNestedManyWithoutPersonalInformationInput = {
    create?: XOR<LegalHistoryCreateWithoutPersonalInformationInput, LegalHistoryUncheckedCreateWithoutPersonalInformationInput> | LegalHistoryCreateWithoutPersonalInformationInput[] | LegalHistoryUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: LegalHistoryCreateOrConnectWithoutPersonalInformationInput | LegalHistoryCreateOrConnectWithoutPersonalInformationInput[]
    createMany?: LegalHistoryCreateManyPersonalInformationInputEnvelope
    connect?: LegalHistoryWhereUniqueInput | LegalHistoryWhereUniqueInput[]
  }

  export type AdditionalInformationUpdateManyWithoutPersonalInformationNestedInput = {
    create?: XOR<AdditionalInformationCreateWithoutPersonalInformationInput, AdditionalInformationUncheckedCreateWithoutPersonalInformationInput> | AdditionalInformationCreateWithoutPersonalInformationInput[] | AdditionalInformationUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: AdditionalInformationCreateOrConnectWithoutPersonalInformationInput | AdditionalInformationCreateOrConnectWithoutPersonalInformationInput[]
    upsert?: AdditionalInformationUpsertWithWhereUniqueWithoutPersonalInformationInput | AdditionalInformationUpsertWithWhereUniqueWithoutPersonalInformationInput[]
    createMany?: AdditionalInformationCreateManyPersonalInformationInputEnvelope
    set?: AdditionalInformationWhereUniqueInput | AdditionalInformationWhereUniqueInput[]
    disconnect?: AdditionalInformationWhereUniqueInput | AdditionalInformationWhereUniqueInput[]
    delete?: AdditionalInformationWhereUniqueInput | AdditionalInformationWhereUniqueInput[]
    connect?: AdditionalInformationWhereUniqueInput | AdditionalInformationWhereUniqueInput[]
    update?: AdditionalInformationUpdateWithWhereUniqueWithoutPersonalInformationInput | AdditionalInformationUpdateWithWhereUniqueWithoutPersonalInformationInput[]
    updateMany?: AdditionalInformationUpdateManyWithWhereWithoutPersonalInformationInput | AdditionalInformationUpdateManyWithWhereWithoutPersonalInformationInput[]
    deleteMany?: AdditionalInformationScalarWhereInput | AdditionalInformationScalarWhereInput[]
  }

  export type AttachmentsUpdateManyWithoutPersonalInformationNestedInput = {
    create?: XOR<AttachmentsCreateWithoutPersonalInformationInput, AttachmentsUncheckedCreateWithoutPersonalInformationInput> | AttachmentsCreateWithoutPersonalInformationInput[] | AttachmentsUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: AttachmentsCreateOrConnectWithoutPersonalInformationInput | AttachmentsCreateOrConnectWithoutPersonalInformationInput[]
    upsert?: AttachmentsUpsertWithWhereUniqueWithoutPersonalInformationInput | AttachmentsUpsertWithWhereUniqueWithoutPersonalInformationInput[]
    createMany?: AttachmentsCreateManyPersonalInformationInputEnvelope
    set?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    disconnect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    delete?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    connect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    update?: AttachmentsUpdateWithWhereUniqueWithoutPersonalInformationInput | AttachmentsUpdateWithWhereUniqueWithoutPersonalInformationInput[]
    updateMany?: AttachmentsUpdateManyWithWhereWithoutPersonalInformationInput | AttachmentsUpdateManyWithWhereWithoutPersonalInformationInput[]
    deleteMany?: AttachmentsScalarWhereInput | AttachmentsScalarWhereInput[]
  }

  export type CaseDetailsUpdateManyWithoutPersonalInformationNestedInput = {
    create?: XOR<CaseDetailsCreateWithoutPersonalInformationInput, CaseDetailsUncheckedCreateWithoutPersonalInformationInput> | CaseDetailsCreateWithoutPersonalInformationInput[] | CaseDetailsUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: CaseDetailsCreateOrConnectWithoutPersonalInformationInput | CaseDetailsCreateOrConnectWithoutPersonalInformationInput[]
    upsert?: CaseDetailsUpsertWithWhereUniqueWithoutPersonalInformationInput | CaseDetailsUpsertWithWhereUniqueWithoutPersonalInformationInput[]
    createMany?: CaseDetailsCreateManyPersonalInformationInputEnvelope
    set?: CaseDetailsWhereUniqueInput | CaseDetailsWhereUniqueInput[]
    disconnect?: CaseDetailsWhereUniqueInput | CaseDetailsWhereUniqueInput[]
    delete?: CaseDetailsWhereUniqueInput | CaseDetailsWhereUniqueInput[]
    connect?: CaseDetailsWhereUniqueInput | CaseDetailsWhereUniqueInput[]
    update?: CaseDetailsUpdateWithWhereUniqueWithoutPersonalInformationInput | CaseDetailsUpdateWithWhereUniqueWithoutPersonalInformationInput[]
    updateMany?: CaseDetailsUpdateManyWithWhereWithoutPersonalInformationInput | CaseDetailsUpdateManyWithWhereWithoutPersonalInformationInput[]
    deleteMany?: CaseDetailsScalarWhereInput | CaseDetailsScalarWhereInput[]
  }

  export type ElectronicSignatureUpdateManyWithoutPersonalInformationNestedInput = {
    create?: XOR<ElectronicSignatureCreateWithoutPersonalInformationInput, ElectronicSignatureUncheckedCreateWithoutPersonalInformationInput> | ElectronicSignatureCreateWithoutPersonalInformationInput[] | ElectronicSignatureUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: ElectronicSignatureCreateOrConnectWithoutPersonalInformationInput | ElectronicSignatureCreateOrConnectWithoutPersonalInformationInput[]
    upsert?: ElectronicSignatureUpsertWithWhereUniqueWithoutPersonalInformationInput | ElectronicSignatureUpsertWithWhereUniqueWithoutPersonalInformationInput[]
    createMany?: ElectronicSignatureCreateManyPersonalInformationInputEnvelope
    set?: ElectronicSignatureWhereUniqueInput | ElectronicSignatureWhereUniqueInput[]
    disconnect?: ElectronicSignatureWhereUniqueInput | ElectronicSignatureWhereUniqueInput[]
    delete?: ElectronicSignatureWhereUniqueInput | ElectronicSignatureWhereUniqueInput[]
    connect?: ElectronicSignatureWhereUniqueInput | ElectronicSignatureWhereUniqueInput[]
    update?: ElectronicSignatureUpdateWithWhereUniqueWithoutPersonalInformationInput | ElectronicSignatureUpdateWithWhereUniqueWithoutPersonalInformationInput[]
    updateMany?: ElectronicSignatureUpdateManyWithWhereWithoutPersonalInformationInput | ElectronicSignatureUpdateManyWithWhereWithoutPersonalInformationInput[]
    deleteMany?: ElectronicSignatureScalarWhereInput | ElectronicSignatureScalarWhereInput[]
  }

  export type FamilyPersonalHistoryUpdateManyWithoutPersonalInformationNestedInput = {
    create?: XOR<FamilyPersonalHistoryCreateWithoutPersonalInformationInput, FamilyPersonalHistoryUncheckedCreateWithoutPersonalInformationInput> | FamilyPersonalHistoryCreateWithoutPersonalInformationInput[] | FamilyPersonalHistoryUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: FamilyPersonalHistoryCreateOrConnectWithoutPersonalInformationInput | FamilyPersonalHistoryCreateOrConnectWithoutPersonalInformationInput[]
    upsert?: FamilyPersonalHistoryUpsertWithWhereUniqueWithoutPersonalInformationInput | FamilyPersonalHistoryUpsertWithWhereUniqueWithoutPersonalInformationInput[]
    createMany?: FamilyPersonalHistoryCreateManyPersonalInformationInputEnvelope
    set?: FamilyPersonalHistoryWhereUniqueInput | FamilyPersonalHistoryWhereUniqueInput[]
    disconnect?: FamilyPersonalHistoryWhereUniqueInput | FamilyPersonalHistoryWhereUniqueInput[]
    delete?: FamilyPersonalHistoryWhereUniqueInput | FamilyPersonalHistoryWhereUniqueInput[]
    connect?: FamilyPersonalHistoryWhereUniqueInput | FamilyPersonalHistoryWhereUniqueInput[]
    update?: FamilyPersonalHistoryUpdateWithWhereUniqueWithoutPersonalInformationInput | FamilyPersonalHistoryUpdateWithWhereUniqueWithoutPersonalInformationInput[]
    updateMany?: FamilyPersonalHistoryUpdateManyWithWhereWithoutPersonalInformationInput | FamilyPersonalHistoryUpdateManyWithWhereWithoutPersonalInformationInput[]
    deleteMany?: FamilyPersonalHistoryScalarWhereInput | FamilyPersonalHistoryScalarWhereInput[]
  }

  export type FinancialInformationUpdateManyWithoutPersonalInformationNestedInput = {
    create?: XOR<FinancialInformationCreateWithoutPersonalInformationInput, FinancialInformationUncheckedCreateWithoutPersonalInformationInput> | FinancialInformationCreateWithoutPersonalInformationInput[] | FinancialInformationUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: FinancialInformationCreateOrConnectWithoutPersonalInformationInput | FinancialInformationCreateOrConnectWithoutPersonalInformationInput[]
    upsert?: FinancialInformationUpsertWithWhereUniqueWithoutPersonalInformationInput | FinancialInformationUpsertWithWhereUniqueWithoutPersonalInformationInput[]
    createMany?: FinancialInformationCreateManyPersonalInformationInputEnvelope
    set?: FinancialInformationWhereUniqueInput | FinancialInformationWhereUniqueInput[]
    disconnect?: FinancialInformationWhereUniqueInput | FinancialInformationWhereUniqueInput[]
    delete?: FinancialInformationWhereUniqueInput | FinancialInformationWhereUniqueInput[]
    connect?: FinancialInformationWhereUniqueInput | FinancialInformationWhereUniqueInput[]
    update?: FinancialInformationUpdateWithWhereUniqueWithoutPersonalInformationInput | FinancialInformationUpdateWithWhereUniqueWithoutPersonalInformationInput[]
    updateMany?: FinancialInformationUpdateManyWithWhereWithoutPersonalInformationInput | FinancialInformationUpdateManyWithWhereWithoutPersonalInformationInput[]
    deleteMany?: FinancialInformationScalarWhereInput | FinancialInformationScalarWhereInput[]
  }

  export type LegalHistoryUpdateManyWithoutPersonalInformationNestedInput = {
    create?: XOR<LegalHistoryCreateWithoutPersonalInformationInput, LegalHistoryUncheckedCreateWithoutPersonalInformationInput> | LegalHistoryCreateWithoutPersonalInformationInput[] | LegalHistoryUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: LegalHistoryCreateOrConnectWithoutPersonalInformationInput | LegalHistoryCreateOrConnectWithoutPersonalInformationInput[]
    upsert?: LegalHistoryUpsertWithWhereUniqueWithoutPersonalInformationInput | LegalHistoryUpsertWithWhereUniqueWithoutPersonalInformationInput[]
    createMany?: LegalHistoryCreateManyPersonalInformationInputEnvelope
    set?: LegalHistoryWhereUniqueInput | LegalHistoryWhereUniqueInput[]
    disconnect?: LegalHistoryWhereUniqueInput | LegalHistoryWhereUniqueInput[]
    delete?: LegalHistoryWhereUniqueInput | LegalHistoryWhereUniqueInput[]
    connect?: LegalHistoryWhereUniqueInput | LegalHistoryWhereUniqueInput[]
    update?: LegalHistoryUpdateWithWhereUniqueWithoutPersonalInformationInput | LegalHistoryUpdateWithWhereUniqueWithoutPersonalInformationInput[]
    updateMany?: LegalHistoryUpdateManyWithWhereWithoutPersonalInformationInput | LegalHistoryUpdateManyWithWhereWithoutPersonalInformationInput[]
    deleteMany?: LegalHistoryScalarWhereInput | LegalHistoryScalarWhereInput[]
  }

  export type AdditionalInformationUncheckedUpdateManyWithoutPersonalInformationNestedInput = {
    create?: XOR<AdditionalInformationCreateWithoutPersonalInformationInput, AdditionalInformationUncheckedCreateWithoutPersonalInformationInput> | AdditionalInformationCreateWithoutPersonalInformationInput[] | AdditionalInformationUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: AdditionalInformationCreateOrConnectWithoutPersonalInformationInput | AdditionalInformationCreateOrConnectWithoutPersonalInformationInput[]
    upsert?: AdditionalInformationUpsertWithWhereUniqueWithoutPersonalInformationInput | AdditionalInformationUpsertWithWhereUniqueWithoutPersonalInformationInput[]
    createMany?: AdditionalInformationCreateManyPersonalInformationInputEnvelope
    set?: AdditionalInformationWhereUniqueInput | AdditionalInformationWhereUniqueInput[]
    disconnect?: AdditionalInformationWhereUniqueInput | AdditionalInformationWhereUniqueInput[]
    delete?: AdditionalInformationWhereUniqueInput | AdditionalInformationWhereUniqueInput[]
    connect?: AdditionalInformationWhereUniqueInput | AdditionalInformationWhereUniqueInput[]
    update?: AdditionalInformationUpdateWithWhereUniqueWithoutPersonalInformationInput | AdditionalInformationUpdateWithWhereUniqueWithoutPersonalInformationInput[]
    updateMany?: AdditionalInformationUpdateManyWithWhereWithoutPersonalInformationInput | AdditionalInformationUpdateManyWithWhereWithoutPersonalInformationInput[]
    deleteMany?: AdditionalInformationScalarWhereInput | AdditionalInformationScalarWhereInput[]
  }

  export type AttachmentsUncheckedUpdateManyWithoutPersonalInformationNestedInput = {
    create?: XOR<AttachmentsCreateWithoutPersonalInformationInput, AttachmentsUncheckedCreateWithoutPersonalInformationInput> | AttachmentsCreateWithoutPersonalInformationInput[] | AttachmentsUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: AttachmentsCreateOrConnectWithoutPersonalInformationInput | AttachmentsCreateOrConnectWithoutPersonalInformationInput[]
    upsert?: AttachmentsUpsertWithWhereUniqueWithoutPersonalInformationInput | AttachmentsUpsertWithWhereUniqueWithoutPersonalInformationInput[]
    createMany?: AttachmentsCreateManyPersonalInformationInputEnvelope
    set?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    disconnect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    delete?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    connect?: AttachmentsWhereUniqueInput | AttachmentsWhereUniqueInput[]
    update?: AttachmentsUpdateWithWhereUniqueWithoutPersonalInformationInput | AttachmentsUpdateWithWhereUniqueWithoutPersonalInformationInput[]
    updateMany?: AttachmentsUpdateManyWithWhereWithoutPersonalInformationInput | AttachmentsUpdateManyWithWhereWithoutPersonalInformationInput[]
    deleteMany?: AttachmentsScalarWhereInput | AttachmentsScalarWhereInput[]
  }

  export type CaseDetailsUncheckedUpdateManyWithoutPersonalInformationNestedInput = {
    create?: XOR<CaseDetailsCreateWithoutPersonalInformationInput, CaseDetailsUncheckedCreateWithoutPersonalInformationInput> | CaseDetailsCreateWithoutPersonalInformationInput[] | CaseDetailsUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: CaseDetailsCreateOrConnectWithoutPersonalInformationInput | CaseDetailsCreateOrConnectWithoutPersonalInformationInput[]
    upsert?: CaseDetailsUpsertWithWhereUniqueWithoutPersonalInformationInput | CaseDetailsUpsertWithWhereUniqueWithoutPersonalInformationInput[]
    createMany?: CaseDetailsCreateManyPersonalInformationInputEnvelope
    set?: CaseDetailsWhereUniqueInput | CaseDetailsWhereUniqueInput[]
    disconnect?: CaseDetailsWhereUniqueInput | CaseDetailsWhereUniqueInput[]
    delete?: CaseDetailsWhereUniqueInput | CaseDetailsWhereUniqueInput[]
    connect?: CaseDetailsWhereUniqueInput | CaseDetailsWhereUniqueInput[]
    update?: CaseDetailsUpdateWithWhereUniqueWithoutPersonalInformationInput | CaseDetailsUpdateWithWhereUniqueWithoutPersonalInformationInput[]
    updateMany?: CaseDetailsUpdateManyWithWhereWithoutPersonalInformationInput | CaseDetailsUpdateManyWithWhereWithoutPersonalInformationInput[]
    deleteMany?: CaseDetailsScalarWhereInput | CaseDetailsScalarWhereInput[]
  }

  export type ElectronicSignatureUncheckedUpdateManyWithoutPersonalInformationNestedInput = {
    create?: XOR<ElectronicSignatureCreateWithoutPersonalInformationInput, ElectronicSignatureUncheckedCreateWithoutPersonalInformationInput> | ElectronicSignatureCreateWithoutPersonalInformationInput[] | ElectronicSignatureUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: ElectronicSignatureCreateOrConnectWithoutPersonalInformationInput | ElectronicSignatureCreateOrConnectWithoutPersonalInformationInput[]
    upsert?: ElectronicSignatureUpsertWithWhereUniqueWithoutPersonalInformationInput | ElectronicSignatureUpsertWithWhereUniqueWithoutPersonalInformationInput[]
    createMany?: ElectronicSignatureCreateManyPersonalInformationInputEnvelope
    set?: ElectronicSignatureWhereUniqueInput | ElectronicSignatureWhereUniqueInput[]
    disconnect?: ElectronicSignatureWhereUniqueInput | ElectronicSignatureWhereUniqueInput[]
    delete?: ElectronicSignatureWhereUniqueInput | ElectronicSignatureWhereUniqueInput[]
    connect?: ElectronicSignatureWhereUniqueInput | ElectronicSignatureWhereUniqueInput[]
    update?: ElectronicSignatureUpdateWithWhereUniqueWithoutPersonalInformationInput | ElectronicSignatureUpdateWithWhereUniqueWithoutPersonalInformationInput[]
    updateMany?: ElectronicSignatureUpdateManyWithWhereWithoutPersonalInformationInput | ElectronicSignatureUpdateManyWithWhereWithoutPersonalInformationInput[]
    deleteMany?: ElectronicSignatureScalarWhereInput | ElectronicSignatureScalarWhereInput[]
  }

  export type FamilyPersonalHistoryUncheckedUpdateManyWithoutPersonalInformationNestedInput = {
    create?: XOR<FamilyPersonalHistoryCreateWithoutPersonalInformationInput, FamilyPersonalHistoryUncheckedCreateWithoutPersonalInformationInput> | FamilyPersonalHistoryCreateWithoutPersonalInformationInput[] | FamilyPersonalHistoryUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: FamilyPersonalHistoryCreateOrConnectWithoutPersonalInformationInput | FamilyPersonalHistoryCreateOrConnectWithoutPersonalInformationInput[]
    upsert?: FamilyPersonalHistoryUpsertWithWhereUniqueWithoutPersonalInformationInput | FamilyPersonalHistoryUpsertWithWhereUniqueWithoutPersonalInformationInput[]
    createMany?: FamilyPersonalHistoryCreateManyPersonalInformationInputEnvelope
    set?: FamilyPersonalHistoryWhereUniqueInput | FamilyPersonalHistoryWhereUniqueInput[]
    disconnect?: FamilyPersonalHistoryWhereUniqueInput | FamilyPersonalHistoryWhereUniqueInput[]
    delete?: FamilyPersonalHistoryWhereUniqueInput | FamilyPersonalHistoryWhereUniqueInput[]
    connect?: FamilyPersonalHistoryWhereUniqueInput | FamilyPersonalHistoryWhereUniqueInput[]
    update?: FamilyPersonalHistoryUpdateWithWhereUniqueWithoutPersonalInformationInput | FamilyPersonalHistoryUpdateWithWhereUniqueWithoutPersonalInformationInput[]
    updateMany?: FamilyPersonalHistoryUpdateManyWithWhereWithoutPersonalInformationInput | FamilyPersonalHistoryUpdateManyWithWhereWithoutPersonalInformationInput[]
    deleteMany?: FamilyPersonalHistoryScalarWhereInput | FamilyPersonalHistoryScalarWhereInput[]
  }

  export type FinancialInformationUncheckedUpdateManyWithoutPersonalInformationNestedInput = {
    create?: XOR<FinancialInformationCreateWithoutPersonalInformationInput, FinancialInformationUncheckedCreateWithoutPersonalInformationInput> | FinancialInformationCreateWithoutPersonalInformationInput[] | FinancialInformationUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: FinancialInformationCreateOrConnectWithoutPersonalInformationInput | FinancialInformationCreateOrConnectWithoutPersonalInformationInput[]
    upsert?: FinancialInformationUpsertWithWhereUniqueWithoutPersonalInformationInput | FinancialInformationUpsertWithWhereUniqueWithoutPersonalInformationInput[]
    createMany?: FinancialInformationCreateManyPersonalInformationInputEnvelope
    set?: FinancialInformationWhereUniqueInput | FinancialInformationWhereUniqueInput[]
    disconnect?: FinancialInformationWhereUniqueInput | FinancialInformationWhereUniqueInput[]
    delete?: FinancialInformationWhereUniqueInput | FinancialInformationWhereUniqueInput[]
    connect?: FinancialInformationWhereUniqueInput | FinancialInformationWhereUniqueInput[]
    update?: FinancialInformationUpdateWithWhereUniqueWithoutPersonalInformationInput | FinancialInformationUpdateWithWhereUniqueWithoutPersonalInformationInput[]
    updateMany?: FinancialInformationUpdateManyWithWhereWithoutPersonalInformationInput | FinancialInformationUpdateManyWithWhereWithoutPersonalInformationInput[]
    deleteMany?: FinancialInformationScalarWhereInput | FinancialInformationScalarWhereInput[]
  }

  export type LegalHistoryUncheckedUpdateManyWithoutPersonalInformationNestedInput = {
    create?: XOR<LegalHistoryCreateWithoutPersonalInformationInput, LegalHistoryUncheckedCreateWithoutPersonalInformationInput> | LegalHistoryCreateWithoutPersonalInformationInput[] | LegalHistoryUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: LegalHistoryCreateOrConnectWithoutPersonalInformationInput | LegalHistoryCreateOrConnectWithoutPersonalInformationInput[]
    upsert?: LegalHistoryUpsertWithWhereUniqueWithoutPersonalInformationInput | LegalHistoryUpsertWithWhereUniqueWithoutPersonalInformationInput[]
    createMany?: LegalHistoryCreateManyPersonalInformationInputEnvelope
    set?: LegalHistoryWhereUniqueInput | LegalHistoryWhereUniqueInput[]
    disconnect?: LegalHistoryWhereUniqueInput | LegalHistoryWhereUniqueInput[]
    delete?: LegalHistoryWhereUniqueInput | LegalHistoryWhereUniqueInput[]
    connect?: LegalHistoryWhereUniqueInput | LegalHistoryWhereUniqueInput[]
    update?: LegalHistoryUpdateWithWhereUniqueWithoutPersonalInformationInput | LegalHistoryUpdateWithWhereUniqueWithoutPersonalInformationInput[]
    updateMany?: LegalHistoryUpdateManyWithWhereWithoutPersonalInformationInput | LegalHistoryUpdateManyWithWhereWithoutPersonalInformationInput[]
    deleteMany?: LegalHistoryScalarWhereInput | LegalHistoryScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type PersonalInformationCreateWithoutAdditionalInformationInput = {
    first_name: string
    middle_name?: string | null
    last_name: string
    address?: string | null
    phone_number: string
    email_address: string
    date_of_birth?: Date | string | null
    social_security_number?: string | null
    preferred_pronouns?: string | null
    Attachments?: AttachmentsCreateNestedManyWithoutPersonalInformationInput
    CaseDetails?: CaseDetailsCreateNestedManyWithoutPersonalInformationInput
    ElectronicSignature?: ElectronicSignatureCreateNestedManyWithoutPersonalInformationInput
    FamilyPersonalHistory?: FamilyPersonalHistoryCreateNestedManyWithoutPersonalInformationInput
    FinancialInformation?: FinancialInformationCreateNestedManyWithoutPersonalInformationInput
    LegalHistory?: LegalHistoryCreateNestedManyWithoutPersonalInformationInput
  }

  export type PersonalInformationUncheckedCreateWithoutAdditionalInformationInput = {
    id?: number
    first_name: string
    middle_name?: string | null
    last_name: string
    address?: string | null
    phone_number: string
    email_address: string
    date_of_birth?: Date | string | null
    social_security_number?: string | null
    preferred_pronouns?: string | null
    Attachments?: AttachmentsUncheckedCreateNestedManyWithoutPersonalInformationInput
    CaseDetails?: CaseDetailsUncheckedCreateNestedManyWithoutPersonalInformationInput
    ElectronicSignature?: ElectronicSignatureUncheckedCreateNestedManyWithoutPersonalInformationInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUncheckedCreateNestedManyWithoutPersonalInformationInput
    FinancialInformation?: FinancialInformationUncheckedCreateNestedManyWithoutPersonalInformationInput
    LegalHistory?: LegalHistoryUncheckedCreateNestedManyWithoutPersonalInformationInput
  }

  export type PersonalInformationCreateOrConnectWithoutAdditionalInformationInput = {
    where: PersonalInformationWhereUniqueInput
    create: XOR<PersonalInformationCreateWithoutAdditionalInformationInput, PersonalInformationUncheckedCreateWithoutAdditionalInformationInput>
  }

  export type PersonalInformationUpsertWithoutAdditionalInformationInput = {
    update: XOR<PersonalInformationUpdateWithoutAdditionalInformationInput, PersonalInformationUncheckedUpdateWithoutAdditionalInformationInput>
    create: XOR<PersonalInformationCreateWithoutAdditionalInformationInput, PersonalInformationUncheckedCreateWithoutAdditionalInformationInput>
    where?: PersonalInformationWhereInput
  }

  export type PersonalInformationUpdateToOneWithWhereWithoutAdditionalInformationInput = {
    where?: PersonalInformationWhereInput
    data: XOR<PersonalInformationUpdateWithoutAdditionalInformationInput, PersonalInformationUncheckedUpdateWithoutAdditionalInformationInput>
  }

  export type PersonalInformationUpdateWithoutAdditionalInformationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    Attachments?: AttachmentsUpdateManyWithoutPersonalInformationNestedInput
    CaseDetails?: CaseDetailsUpdateManyWithoutPersonalInformationNestedInput
    ElectronicSignature?: ElectronicSignatureUpdateManyWithoutPersonalInformationNestedInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUpdateManyWithoutPersonalInformationNestedInput
    FinancialInformation?: FinancialInformationUpdateManyWithoutPersonalInformationNestedInput
    LegalHistory?: LegalHistoryUpdateManyWithoutPersonalInformationNestedInput
  }

  export type PersonalInformationUncheckedUpdateWithoutAdditionalInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    Attachments?: AttachmentsUncheckedUpdateManyWithoutPersonalInformationNestedInput
    CaseDetails?: CaseDetailsUncheckedUpdateManyWithoutPersonalInformationNestedInput
    ElectronicSignature?: ElectronicSignatureUncheckedUpdateManyWithoutPersonalInformationNestedInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUncheckedUpdateManyWithoutPersonalInformationNestedInput
    FinancialInformation?: FinancialInformationUncheckedUpdateManyWithoutPersonalInformationNestedInput
    LegalHistory?: LegalHistoryUncheckedUpdateManyWithoutPersonalInformationNestedInput
  }

  export type PersonalInformationCreateWithoutAttachmentsInput = {
    first_name: string
    middle_name?: string | null
    last_name: string
    address?: string | null
    phone_number: string
    email_address: string
    date_of_birth?: Date | string | null
    social_security_number?: string | null
    preferred_pronouns?: string | null
    AdditionalInformation?: AdditionalInformationCreateNestedManyWithoutPersonalInformationInput
    CaseDetails?: CaseDetailsCreateNestedManyWithoutPersonalInformationInput
    ElectronicSignature?: ElectronicSignatureCreateNestedManyWithoutPersonalInformationInput
    FamilyPersonalHistory?: FamilyPersonalHistoryCreateNestedManyWithoutPersonalInformationInput
    FinancialInformation?: FinancialInformationCreateNestedManyWithoutPersonalInformationInput
    LegalHistory?: LegalHistoryCreateNestedManyWithoutPersonalInformationInput
  }

  export type PersonalInformationUncheckedCreateWithoutAttachmentsInput = {
    id?: number
    first_name: string
    middle_name?: string | null
    last_name: string
    address?: string | null
    phone_number: string
    email_address: string
    date_of_birth?: Date | string | null
    social_security_number?: string | null
    preferred_pronouns?: string | null
    AdditionalInformation?: AdditionalInformationUncheckedCreateNestedManyWithoutPersonalInformationInput
    CaseDetails?: CaseDetailsUncheckedCreateNestedManyWithoutPersonalInformationInput
    ElectronicSignature?: ElectronicSignatureUncheckedCreateNestedManyWithoutPersonalInformationInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUncheckedCreateNestedManyWithoutPersonalInformationInput
    FinancialInformation?: FinancialInformationUncheckedCreateNestedManyWithoutPersonalInformationInput
    LegalHistory?: LegalHistoryUncheckedCreateNestedManyWithoutPersonalInformationInput
  }

  export type PersonalInformationCreateOrConnectWithoutAttachmentsInput = {
    where: PersonalInformationWhereUniqueInput
    create: XOR<PersonalInformationCreateWithoutAttachmentsInput, PersonalInformationUncheckedCreateWithoutAttachmentsInput>
  }

  export type PersonalInformationUpsertWithoutAttachmentsInput = {
    update: XOR<PersonalInformationUpdateWithoutAttachmentsInput, PersonalInformationUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<PersonalInformationCreateWithoutAttachmentsInput, PersonalInformationUncheckedCreateWithoutAttachmentsInput>
    where?: PersonalInformationWhereInput
  }

  export type PersonalInformationUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: PersonalInformationWhereInput
    data: XOR<PersonalInformationUpdateWithoutAttachmentsInput, PersonalInformationUncheckedUpdateWithoutAttachmentsInput>
  }

  export type PersonalInformationUpdateWithoutAttachmentsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    AdditionalInformation?: AdditionalInformationUpdateManyWithoutPersonalInformationNestedInput
    CaseDetails?: CaseDetailsUpdateManyWithoutPersonalInformationNestedInput
    ElectronicSignature?: ElectronicSignatureUpdateManyWithoutPersonalInformationNestedInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUpdateManyWithoutPersonalInformationNestedInput
    FinancialInformation?: FinancialInformationUpdateManyWithoutPersonalInformationNestedInput
    LegalHistory?: LegalHistoryUpdateManyWithoutPersonalInformationNestedInput
  }

  export type PersonalInformationUncheckedUpdateWithoutAttachmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    AdditionalInformation?: AdditionalInformationUncheckedUpdateManyWithoutPersonalInformationNestedInput
    CaseDetails?: CaseDetailsUncheckedUpdateManyWithoutPersonalInformationNestedInput
    ElectronicSignature?: ElectronicSignatureUncheckedUpdateManyWithoutPersonalInformationNestedInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUncheckedUpdateManyWithoutPersonalInformationNestedInput
    FinancialInformation?: FinancialInformationUncheckedUpdateManyWithoutPersonalInformationNestedInput
    LegalHistory?: LegalHistoryUncheckedUpdateManyWithoutPersonalInformationNestedInput
  }

  export type PersonalInformationCreateWithoutCaseDetailsInput = {
    first_name: string
    middle_name?: string | null
    last_name: string
    address?: string | null
    phone_number: string
    email_address: string
    date_of_birth?: Date | string | null
    social_security_number?: string | null
    preferred_pronouns?: string | null
    AdditionalInformation?: AdditionalInformationCreateNestedManyWithoutPersonalInformationInput
    Attachments?: AttachmentsCreateNestedManyWithoutPersonalInformationInput
    ElectronicSignature?: ElectronicSignatureCreateNestedManyWithoutPersonalInformationInput
    FamilyPersonalHistory?: FamilyPersonalHistoryCreateNestedManyWithoutPersonalInformationInput
    FinancialInformation?: FinancialInformationCreateNestedManyWithoutPersonalInformationInput
    LegalHistory?: LegalHistoryCreateNestedManyWithoutPersonalInformationInput
  }

  export type PersonalInformationUncheckedCreateWithoutCaseDetailsInput = {
    id?: number
    first_name: string
    middle_name?: string | null
    last_name: string
    address?: string | null
    phone_number: string
    email_address: string
    date_of_birth?: Date | string | null
    social_security_number?: string | null
    preferred_pronouns?: string | null
    AdditionalInformation?: AdditionalInformationUncheckedCreateNestedManyWithoutPersonalInformationInput
    Attachments?: AttachmentsUncheckedCreateNestedManyWithoutPersonalInformationInput
    ElectronicSignature?: ElectronicSignatureUncheckedCreateNestedManyWithoutPersonalInformationInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUncheckedCreateNestedManyWithoutPersonalInformationInput
    FinancialInformation?: FinancialInformationUncheckedCreateNestedManyWithoutPersonalInformationInput
    LegalHistory?: LegalHistoryUncheckedCreateNestedManyWithoutPersonalInformationInput
  }

  export type PersonalInformationCreateOrConnectWithoutCaseDetailsInput = {
    where: PersonalInformationWhereUniqueInput
    create: XOR<PersonalInformationCreateWithoutCaseDetailsInput, PersonalInformationUncheckedCreateWithoutCaseDetailsInput>
  }

  export type PersonalInformationUpsertWithoutCaseDetailsInput = {
    update: XOR<PersonalInformationUpdateWithoutCaseDetailsInput, PersonalInformationUncheckedUpdateWithoutCaseDetailsInput>
    create: XOR<PersonalInformationCreateWithoutCaseDetailsInput, PersonalInformationUncheckedCreateWithoutCaseDetailsInput>
    where?: PersonalInformationWhereInput
  }

  export type PersonalInformationUpdateToOneWithWhereWithoutCaseDetailsInput = {
    where?: PersonalInformationWhereInput
    data: XOR<PersonalInformationUpdateWithoutCaseDetailsInput, PersonalInformationUncheckedUpdateWithoutCaseDetailsInput>
  }

  export type PersonalInformationUpdateWithoutCaseDetailsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    AdditionalInformation?: AdditionalInformationUpdateManyWithoutPersonalInformationNestedInput
    Attachments?: AttachmentsUpdateManyWithoutPersonalInformationNestedInput
    ElectronicSignature?: ElectronicSignatureUpdateManyWithoutPersonalInformationNestedInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUpdateManyWithoutPersonalInformationNestedInput
    FinancialInformation?: FinancialInformationUpdateManyWithoutPersonalInformationNestedInput
    LegalHistory?: LegalHistoryUpdateManyWithoutPersonalInformationNestedInput
  }

  export type PersonalInformationUncheckedUpdateWithoutCaseDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    AdditionalInformation?: AdditionalInformationUncheckedUpdateManyWithoutPersonalInformationNestedInput
    Attachments?: AttachmentsUncheckedUpdateManyWithoutPersonalInformationNestedInput
    ElectronicSignature?: ElectronicSignatureUncheckedUpdateManyWithoutPersonalInformationNestedInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUncheckedUpdateManyWithoutPersonalInformationNestedInput
    FinancialInformation?: FinancialInformationUncheckedUpdateManyWithoutPersonalInformationNestedInput
    LegalHistory?: LegalHistoryUncheckedUpdateManyWithoutPersonalInformationNestedInput
  }

  export type PersonalInformationCreateWithoutElectronicSignatureInput = {
    first_name: string
    middle_name?: string | null
    last_name: string
    address?: string | null
    phone_number: string
    email_address: string
    date_of_birth?: Date | string | null
    social_security_number?: string | null
    preferred_pronouns?: string | null
    AdditionalInformation?: AdditionalInformationCreateNestedManyWithoutPersonalInformationInput
    Attachments?: AttachmentsCreateNestedManyWithoutPersonalInformationInput
    CaseDetails?: CaseDetailsCreateNestedManyWithoutPersonalInformationInput
    FamilyPersonalHistory?: FamilyPersonalHistoryCreateNestedManyWithoutPersonalInformationInput
    FinancialInformation?: FinancialInformationCreateNestedManyWithoutPersonalInformationInput
    LegalHistory?: LegalHistoryCreateNestedManyWithoutPersonalInformationInput
  }

  export type PersonalInformationUncheckedCreateWithoutElectronicSignatureInput = {
    id?: number
    first_name: string
    middle_name?: string | null
    last_name: string
    address?: string | null
    phone_number: string
    email_address: string
    date_of_birth?: Date | string | null
    social_security_number?: string | null
    preferred_pronouns?: string | null
    AdditionalInformation?: AdditionalInformationUncheckedCreateNestedManyWithoutPersonalInformationInput
    Attachments?: AttachmentsUncheckedCreateNestedManyWithoutPersonalInformationInput
    CaseDetails?: CaseDetailsUncheckedCreateNestedManyWithoutPersonalInformationInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUncheckedCreateNestedManyWithoutPersonalInformationInput
    FinancialInformation?: FinancialInformationUncheckedCreateNestedManyWithoutPersonalInformationInput
    LegalHistory?: LegalHistoryUncheckedCreateNestedManyWithoutPersonalInformationInput
  }

  export type PersonalInformationCreateOrConnectWithoutElectronicSignatureInput = {
    where: PersonalInformationWhereUniqueInput
    create: XOR<PersonalInformationCreateWithoutElectronicSignatureInput, PersonalInformationUncheckedCreateWithoutElectronicSignatureInput>
  }

  export type PersonalInformationUpsertWithoutElectronicSignatureInput = {
    update: XOR<PersonalInformationUpdateWithoutElectronicSignatureInput, PersonalInformationUncheckedUpdateWithoutElectronicSignatureInput>
    create: XOR<PersonalInformationCreateWithoutElectronicSignatureInput, PersonalInformationUncheckedCreateWithoutElectronicSignatureInput>
    where?: PersonalInformationWhereInput
  }

  export type PersonalInformationUpdateToOneWithWhereWithoutElectronicSignatureInput = {
    where?: PersonalInformationWhereInput
    data: XOR<PersonalInformationUpdateWithoutElectronicSignatureInput, PersonalInformationUncheckedUpdateWithoutElectronicSignatureInput>
  }

  export type PersonalInformationUpdateWithoutElectronicSignatureInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    AdditionalInformation?: AdditionalInformationUpdateManyWithoutPersonalInformationNestedInput
    Attachments?: AttachmentsUpdateManyWithoutPersonalInformationNestedInput
    CaseDetails?: CaseDetailsUpdateManyWithoutPersonalInformationNestedInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUpdateManyWithoutPersonalInformationNestedInput
    FinancialInformation?: FinancialInformationUpdateManyWithoutPersonalInformationNestedInput
    LegalHistory?: LegalHistoryUpdateManyWithoutPersonalInformationNestedInput
  }

  export type PersonalInformationUncheckedUpdateWithoutElectronicSignatureInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    AdditionalInformation?: AdditionalInformationUncheckedUpdateManyWithoutPersonalInformationNestedInput
    Attachments?: AttachmentsUncheckedUpdateManyWithoutPersonalInformationNestedInput
    CaseDetails?: CaseDetailsUncheckedUpdateManyWithoutPersonalInformationNestedInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUncheckedUpdateManyWithoutPersonalInformationNestedInput
    FinancialInformation?: FinancialInformationUncheckedUpdateManyWithoutPersonalInformationNestedInput
    LegalHistory?: LegalHistoryUncheckedUpdateManyWithoutPersonalInformationNestedInput
  }

  export type PersonalInformationCreateWithoutFamilyPersonalHistoryInput = {
    first_name: string
    middle_name?: string | null
    last_name: string
    address?: string | null
    phone_number: string
    email_address: string
    date_of_birth?: Date | string | null
    social_security_number?: string | null
    preferred_pronouns?: string | null
    AdditionalInformation?: AdditionalInformationCreateNestedManyWithoutPersonalInformationInput
    Attachments?: AttachmentsCreateNestedManyWithoutPersonalInformationInput
    CaseDetails?: CaseDetailsCreateNestedManyWithoutPersonalInformationInput
    ElectronicSignature?: ElectronicSignatureCreateNestedManyWithoutPersonalInformationInput
    FinancialInformation?: FinancialInformationCreateNestedManyWithoutPersonalInformationInput
    LegalHistory?: LegalHistoryCreateNestedManyWithoutPersonalInformationInput
  }

  export type PersonalInformationUncheckedCreateWithoutFamilyPersonalHistoryInput = {
    id?: number
    first_name: string
    middle_name?: string | null
    last_name: string
    address?: string | null
    phone_number: string
    email_address: string
    date_of_birth?: Date | string | null
    social_security_number?: string | null
    preferred_pronouns?: string | null
    AdditionalInformation?: AdditionalInformationUncheckedCreateNestedManyWithoutPersonalInformationInput
    Attachments?: AttachmentsUncheckedCreateNestedManyWithoutPersonalInformationInput
    CaseDetails?: CaseDetailsUncheckedCreateNestedManyWithoutPersonalInformationInput
    ElectronicSignature?: ElectronicSignatureUncheckedCreateNestedManyWithoutPersonalInformationInput
    FinancialInformation?: FinancialInformationUncheckedCreateNestedManyWithoutPersonalInformationInput
    LegalHistory?: LegalHistoryUncheckedCreateNestedManyWithoutPersonalInformationInput
  }

  export type PersonalInformationCreateOrConnectWithoutFamilyPersonalHistoryInput = {
    where: PersonalInformationWhereUniqueInput
    create: XOR<PersonalInformationCreateWithoutFamilyPersonalHistoryInput, PersonalInformationUncheckedCreateWithoutFamilyPersonalHistoryInput>
  }

  export type PersonalInformationUpsertWithoutFamilyPersonalHistoryInput = {
    update: XOR<PersonalInformationUpdateWithoutFamilyPersonalHistoryInput, PersonalInformationUncheckedUpdateWithoutFamilyPersonalHistoryInput>
    create: XOR<PersonalInformationCreateWithoutFamilyPersonalHistoryInput, PersonalInformationUncheckedCreateWithoutFamilyPersonalHistoryInput>
    where?: PersonalInformationWhereInput
  }

  export type PersonalInformationUpdateToOneWithWhereWithoutFamilyPersonalHistoryInput = {
    where?: PersonalInformationWhereInput
    data: XOR<PersonalInformationUpdateWithoutFamilyPersonalHistoryInput, PersonalInformationUncheckedUpdateWithoutFamilyPersonalHistoryInput>
  }

  export type PersonalInformationUpdateWithoutFamilyPersonalHistoryInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    AdditionalInformation?: AdditionalInformationUpdateManyWithoutPersonalInformationNestedInput
    Attachments?: AttachmentsUpdateManyWithoutPersonalInformationNestedInput
    CaseDetails?: CaseDetailsUpdateManyWithoutPersonalInformationNestedInput
    ElectronicSignature?: ElectronicSignatureUpdateManyWithoutPersonalInformationNestedInput
    FinancialInformation?: FinancialInformationUpdateManyWithoutPersonalInformationNestedInput
    LegalHistory?: LegalHistoryUpdateManyWithoutPersonalInformationNestedInput
  }

  export type PersonalInformationUncheckedUpdateWithoutFamilyPersonalHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    AdditionalInformation?: AdditionalInformationUncheckedUpdateManyWithoutPersonalInformationNestedInput
    Attachments?: AttachmentsUncheckedUpdateManyWithoutPersonalInformationNestedInput
    CaseDetails?: CaseDetailsUncheckedUpdateManyWithoutPersonalInformationNestedInput
    ElectronicSignature?: ElectronicSignatureUncheckedUpdateManyWithoutPersonalInformationNestedInput
    FinancialInformation?: FinancialInformationUncheckedUpdateManyWithoutPersonalInformationNestedInput
    LegalHistory?: LegalHistoryUncheckedUpdateManyWithoutPersonalInformationNestedInput
  }

  export type PersonalInformationCreateWithoutFinancialInformationInput = {
    first_name: string
    middle_name?: string | null
    last_name: string
    address?: string | null
    phone_number: string
    email_address: string
    date_of_birth?: Date | string | null
    social_security_number?: string | null
    preferred_pronouns?: string | null
    AdditionalInformation?: AdditionalInformationCreateNestedManyWithoutPersonalInformationInput
    Attachments?: AttachmentsCreateNestedManyWithoutPersonalInformationInput
    CaseDetails?: CaseDetailsCreateNestedManyWithoutPersonalInformationInput
    ElectronicSignature?: ElectronicSignatureCreateNestedManyWithoutPersonalInformationInput
    FamilyPersonalHistory?: FamilyPersonalHistoryCreateNestedManyWithoutPersonalInformationInput
    LegalHistory?: LegalHistoryCreateNestedManyWithoutPersonalInformationInput
  }

  export type PersonalInformationUncheckedCreateWithoutFinancialInformationInput = {
    id?: number
    first_name: string
    middle_name?: string | null
    last_name: string
    address?: string | null
    phone_number: string
    email_address: string
    date_of_birth?: Date | string | null
    social_security_number?: string | null
    preferred_pronouns?: string | null
    AdditionalInformation?: AdditionalInformationUncheckedCreateNestedManyWithoutPersonalInformationInput
    Attachments?: AttachmentsUncheckedCreateNestedManyWithoutPersonalInformationInput
    CaseDetails?: CaseDetailsUncheckedCreateNestedManyWithoutPersonalInformationInput
    ElectronicSignature?: ElectronicSignatureUncheckedCreateNestedManyWithoutPersonalInformationInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUncheckedCreateNestedManyWithoutPersonalInformationInput
    LegalHistory?: LegalHistoryUncheckedCreateNestedManyWithoutPersonalInformationInput
  }

  export type PersonalInformationCreateOrConnectWithoutFinancialInformationInput = {
    where: PersonalInformationWhereUniqueInput
    create: XOR<PersonalInformationCreateWithoutFinancialInformationInput, PersonalInformationUncheckedCreateWithoutFinancialInformationInput>
  }

  export type PersonalInformationUpsertWithoutFinancialInformationInput = {
    update: XOR<PersonalInformationUpdateWithoutFinancialInformationInput, PersonalInformationUncheckedUpdateWithoutFinancialInformationInput>
    create: XOR<PersonalInformationCreateWithoutFinancialInformationInput, PersonalInformationUncheckedCreateWithoutFinancialInformationInput>
    where?: PersonalInformationWhereInput
  }

  export type PersonalInformationUpdateToOneWithWhereWithoutFinancialInformationInput = {
    where?: PersonalInformationWhereInput
    data: XOR<PersonalInformationUpdateWithoutFinancialInformationInput, PersonalInformationUncheckedUpdateWithoutFinancialInformationInput>
  }

  export type PersonalInformationUpdateWithoutFinancialInformationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    AdditionalInformation?: AdditionalInformationUpdateManyWithoutPersonalInformationNestedInput
    Attachments?: AttachmentsUpdateManyWithoutPersonalInformationNestedInput
    CaseDetails?: CaseDetailsUpdateManyWithoutPersonalInformationNestedInput
    ElectronicSignature?: ElectronicSignatureUpdateManyWithoutPersonalInformationNestedInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUpdateManyWithoutPersonalInformationNestedInput
    LegalHistory?: LegalHistoryUpdateManyWithoutPersonalInformationNestedInput
  }

  export type PersonalInformationUncheckedUpdateWithoutFinancialInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    AdditionalInformation?: AdditionalInformationUncheckedUpdateManyWithoutPersonalInformationNestedInput
    Attachments?: AttachmentsUncheckedUpdateManyWithoutPersonalInformationNestedInput
    CaseDetails?: CaseDetailsUncheckedUpdateManyWithoutPersonalInformationNestedInput
    ElectronicSignature?: ElectronicSignatureUncheckedUpdateManyWithoutPersonalInformationNestedInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUncheckedUpdateManyWithoutPersonalInformationNestedInput
    LegalHistory?: LegalHistoryUncheckedUpdateManyWithoutPersonalInformationNestedInput
  }

  export type PersonalInformationCreateWithoutLegalHistoryInput = {
    first_name: string
    middle_name?: string | null
    last_name: string
    address?: string | null
    phone_number: string
    email_address: string
    date_of_birth?: Date | string | null
    social_security_number?: string | null
    preferred_pronouns?: string | null
    AdditionalInformation?: AdditionalInformationCreateNestedManyWithoutPersonalInformationInput
    Attachments?: AttachmentsCreateNestedManyWithoutPersonalInformationInput
    CaseDetails?: CaseDetailsCreateNestedManyWithoutPersonalInformationInput
    ElectronicSignature?: ElectronicSignatureCreateNestedManyWithoutPersonalInformationInput
    FamilyPersonalHistory?: FamilyPersonalHistoryCreateNestedManyWithoutPersonalInformationInput
    FinancialInformation?: FinancialInformationCreateNestedManyWithoutPersonalInformationInput
  }

  export type PersonalInformationUncheckedCreateWithoutLegalHistoryInput = {
    id?: number
    first_name: string
    middle_name?: string | null
    last_name: string
    address?: string | null
    phone_number: string
    email_address: string
    date_of_birth?: Date | string | null
    social_security_number?: string | null
    preferred_pronouns?: string | null
    AdditionalInformation?: AdditionalInformationUncheckedCreateNestedManyWithoutPersonalInformationInput
    Attachments?: AttachmentsUncheckedCreateNestedManyWithoutPersonalInformationInput
    CaseDetails?: CaseDetailsUncheckedCreateNestedManyWithoutPersonalInformationInput
    ElectronicSignature?: ElectronicSignatureUncheckedCreateNestedManyWithoutPersonalInformationInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUncheckedCreateNestedManyWithoutPersonalInformationInput
    FinancialInformation?: FinancialInformationUncheckedCreateNestedManyWithoutPersonalInformationInput
  }

  export type PersonalInformationCreateOrConnectWithoutLegalHistoryInput = {
    where: PersonalInformationWhereUniqueInput
    create: XOR<PersonalInformationCreateWithoutLegalHistoryInput, PersonalInformationUncheckedCreateWithoutLegalHistoryInput>
  }

  export type PersonalInformationUpsertWithoutLegalHistoryInput = {
    update: XOR<PersonalInformationUpdateWithoutLegalHistoryInput, PersonalInformationUncheckedUpdateWithoutLegalHistoryInput>
    create: XOR<PersonalInformationCreateWithoutLegalHistoryInput, PersonalInformationUncheckedCreateWithoutLegalHistoryInput>
    where?: PersonalInformationWhereInput
  }

  export type PersonalInformationUpdateToOneWithWhereWithoutLegalHistoryInput = {
    where?: PersonalInformationWhereInput
    data: XOR<PersonalInformationUpdateWithoutLegalHistoryInput, PersonalInformationUncheckedUpdateWithoutLegalHistoryInput>
  }

  export type PersonalInformationUpdateWithoutLegalHistoryInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    AdditionalInformation?: AdditionalInformationUpdateManyWithoutPersonalInformationNestedInput
    Attachments?: AttachmentsUpdateManyWithoutPersonalInformationNestedInput
    CaseDetails?: CaseDetailsUpdateManyWithoutPersonalInformationNestedInput
    ElectronicSignature?: ElectronicSignatureUpdateManyWithoutPersonalInformationNestedInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUpdateManyWithoutPersonalInformationNestedInput
    FinancialInformation?: FinancialInformationUpdateManyWithoutPersonalInformationNestedInput
  }

  export type PersonalInformationUncheckedUpdateWithoutLegalHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    middle_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    date_of_birth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    social_security_number?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_pronouns?: NullableStringFieldUpdateOperationsInput | string | null
    AdditionalInformation?: AdditionalInformationUncheckedUpdateManyWithoutPersonalInformationNestedInput
    Attachments?: AttachmentsUncheckedUpdateManyWithoutPersonalInformationNestedInput
    CaseDetails?: CaseDetailsUncheckedUpdateManyWithoutPersonalInformationNestedInput
    ElectronicSignature?: ElectronicSignatureUncheckedUpdateManyWithoutPersonalInformationNestedInput
    FamilyPersonalHistory?: FamilyPersonalHistoryUncheckedUpdateManyWithoutPersonalInformationNestedInput
    FinancialInformation?: FinancialInformationUncheckedUpdateManyWithoutPersonalInformationNestedInput
  }

  export type AdditionalInformationCreateWithoutPersonalInformationInput = {
    preferred_communication_method?: string | null
    emergency_contact_name?: string | null
    emergency_contact_relationship?: string | null
    emergency_contact_phone?: string | null
    how_did_you_hear_about_us?: string | null
    authorization_and_consent: boolean
  }

  export type AdditionalInformationUncheckedCreateWithoutPersonalInformationInput = {
    id?: number
    preferred_communication_method?: string | null
    emergency_contact_name?: string | null
    emergency_contact_relationship?: string | null
    emergency_contact_phone?: string | null
    how_did_you_hear_about_us?: string | null
    authorization_and_consent: boolean
  }

  export type AdditionalInformationCreateOrConnectWithoutPersonalInformationInput = {
    where: AdditionalInformationWhereUniqueInput
    create: XOR<AdditionalInformationCreateWithoutPersonalInformationInput, AdditionalInformationUncheckedCreateWithoutPersonalInformationInput>
  }

  export type AdditionalInformationCreateManyPersonalInformationInputEnvelope = {
    data: AdditionalInformationCreateManyPersonalInformationInput | AdditionalInformationCreateManyPersonalInformationInput[]
    skipDuplicates?: boolean
  }

  export type AttachmentsCreateWithoutPersonalInformationInput = {
    document_name?: string | null
    document_url?: string | null
  }

  export type AttachmentsUncheckedCreateWithoutPersonalInformationInput = {
    id?: number
    document_name?: string | null
    document_url?: string | null
  }

  export type AttachmentsCreateOrConnectWithoutPersonalInformationInput = {
    where: AttachmentsWhereUniqueInput
    create: XOR<AttachmentsCreateWithoutPersonalInformationInput, AttachmentsUncheckedCreateWithoutPersonalInformationInput>
  }

  export type AttachmentsCreateManyPersonalInformationInputEnvelope = {
    data: AttachmentsCreateManyPersonalInformationInput | AttachmentsCreateManyPersonalInformationInput[]
    skipDuplicates?: boolean
  }

  export type CaseDetailsCreateWithoutPersonalInformationInput = {
    nature_of_legal_issue: string
    date_of_incident?: Date | string | null
    case_number?: string | null
    opposing_parties?: string | null
    current_attorney?: string | null
  }

  export type CaseDetailsUncheckedCreateWithoutPersonalInformationInput = {
    id?: number
    nature_of_legal_issue: string
    date_of_incident?: Date | string | null
    case_number?: string | null
    opposing_parties?: string | null
    current_attorney?: string | null
  }

  export type CaseDetailsCreateOrConnectWithoutPersonalInformationInput = {
    where: CaseDetailsWhereUniqueInput
    create: XOR<CaseDetailsCreateWithoutPersonalInformationInput, CaseDetailsUncheckedCreateWithoutPersonalInformationInput>
  }

  export type CaseDetailsCreateManyPersonalInformationInputEnvelope = {
    data: CaseDetailsCreateManyPersonalInformationInput | CaseDetailsCreateManyPersonalInformationInput[]
    skipDuplicates?: boolean
  }

  export type ElectronicSignatureCreateWithoutPersonalInformationInput = {
    signature_image_url?: string | null
    signature_date?: Date | string | null
  }

  export type ElectronicSignatureUncheckedCreateWithoutPersonalInformationInput = {
    id?: number
    signature_image_url?: string | null
    signature_date?: Date | string | null
  }

  export type ElectronicSignatureCreateOrConnectWithoutPersonalInformationInput = {
    where: ElectronicSignatureWhereUniqueInput
    create: XOR<ElectronicSignatureCreateWithoutPersonalInformationInput, ElectronicSignatureUncheckedCreateWithoutPersonalInformationInput>
  }

  export type ElectronicSignatureCreateManyPersonalInformationInputEnvelope = {
    data: ElectronicSignatureCreateManyPersonalInformationInput | ElectronicSignatureCreateManyPersonalInformationInput[]
    skipDuplicates?: boolean
  }

  export type FamilyPersonalHistoryCreateWithoutPersonalInformationInput = {
    marital_status?: string | null
    dependents?: number | null
    health_information?: string | null
    child_custody_support_info?: string | null
  }

  export type FamilyPersonalHistoryUncheckedCreateWithoutPersonalInformationInput = {
    id?: number
    marital_status?: string | null
    dependents?: number | null
    health_information?: string | null
    child_custody_support_info?: string | null
  }

  export type FamilyPersonalHistoryCreateOrConnectWithoutPersonalInformationInput = {
    where: FamilyPersonalHistoryWhereUniqueInput
    create: XOR<FamilyPersonalHistoryCreateWithoutPersonalInformationInput, FamilyPersonalHistoryUncheckedCreateWithoutPersonalInformationInput>
  }

  export type FamilyPersonalHistoryCreateManyPersonalInformationInputEnvelope = {
    data: FamilyPersonalHistoryCreateManyPersonalInformationInput | FamilyPersonalHistoryCreateManyPersonalInformationInput[]
    skipDuplicates?: boolean
  }

  export type FinancialInformationCreateWithoutPersonalInformationInput = {
    current_employer?: string | null
    job_title?: string | null
    income?: number | null
    monthly_expenses?: number | null
    debts?: number | null
    assets?: string | null
    liabilities?: string | null
    bankruptcy_history: boolean
  }

  export type FinancialInformationUncheckedCreateWithoutPersonalInformationInput = {
    id?: number
    current_employer?: string | null
    job_title?: string | null
    income?: number | null
    monthly_expenses?: number | null
    debts?: number | null
    assets?: string | null
    liabilities?: string | null
    bankruptcy_history: boolean
  }

  export type FinancialInformationCreateOrConnectWithoutPersonalInformationInput = {
    where: FinancialInformationWhereUniqueInput
    create: XOR<FinancialInformationCreateWithoutPersonalInformationInput, FinancialInformationUncheckedCreateWithoutPersonalInformationInput>
  }

  export type FinancialInformationCreateManyPersonalInformationInputEnvelope = {
    data: FinancialInformationCreateManyPersonalInformationInput | FinancialInformationCreateManyPersonalInformationInput[]
    skipDuplicates?: boolean
  }

  export type LegalHistoryCreateWithoutPersonalInformationInput = {
    criminal_history?: string | null
    civil_litigation_history?: string | null
    legal_restrictions_or_probation?: string | null
  }

  export type LegalHistoryUncheckedCreateWithoutPersonalInformationInput = {
    id?: number
    criminal_history?: string | null
    civil_litigation_history?: string | null
    legal_restrictions_or_probation?: string | null
  }

  export type LegalHistoryCreateOrConnectWithoutPersonalInformationInput = {
    where: LegalHistoryWhereUniqueInput
    create: XOR<LegalHistoryCreateWithoutPersonalInformationInput, LegalHistoryUncheckedCreateWithoutPersonalInformationInput>
  }

  export type LegalHistoryCreateManyPersonalInformationInputEnvelope = {
    data: LegalHistoryCreateManyPersonalInformationInput | LegalHistoryCreateManyPersonalInformationInput[]
    skipDuplicates?: boolean
  }

  export type AdditionalInformationUpsertWithWhereUniqueWithoutPersonalInformationInput = {
    where: AdditionalInformationWhereUniqueInput
    update: XOR<AdditionalInformationUpdateWithoutPersonalInformationInput, AdditionalInformationUncheckedUpdateWithoutPersonalInformationInput>
    create: XOR<AdditionalInformationCreateWithoutPersonalInformationInput, AdditionalInformationUncheckedCreateWithoutPersonalInformationInput>
  }

  export type AdditionalInformationUpdateWithWhereUniqueWithoutPersonalInformationInput = {
    where: AdditionalInformationWhereUniqueInput
    data: XOR<AdditionalInformationUpdateWithoutPersonalInformationInput, AdditionalInformationUncheckedUpdateWithoutPersonalInformationInput>
  }

  export type AdditionalInformationUpdateManyWithWhereWithoutPersonalInformationInput = {
    where: AdditionalInformationScalarWhereInput
    data: XOR<AdditionalInformationUpdateManyMutationInput, AdditionalInformationUncheckedUpdateManyWithoutPersonalInformationInput>
  }

  export type AdditionalInformationScalarWhereInput = {
    AND?: AdditionalInformationScalarWhereInput | AdditionalInformationScalarWhereInput[]
    OR?: AdditionalInformationScalarWhereInput[]
    NOT?: AdditionalInformationScalarWhereInput | AdditionalInformationScalarWhereInput[]
    id?: IntFilter<"AdditionalInformation"> | number
    preferred_communication_method?: StringNullableFilter<"AdditionalInformation"> | string | null
    emergency_contact_name?: StringNullableFilter<"AdditionalInformation"> | string | null
    emergency_contact_relationship?: StringNullableFilter<"AdditionalInformation"> | string | null
    emergency_contact_phone?: StringNullableFilter<"AdditionalInformation"> | string | null
    how_did_you_hear_about_us?: StringNullableFilter<"AdditionalInformation"> | string | null
    authorization_and_consent?: BoolFilter<"AdditionalInformation"> | boolean
    client_id?: IntFilter<"AdditionalInformation"> | number
  }

  export type AttachmentsUpsertWithWhereUniqueWithoutPersonalInformationInput = {
    where: AttachmentsWhereUniqueInput
    update: XOR<AttachmentsUpdateWithoutPersonalInformationInput, AttachmentsUncheckedUpdateWithoutPersonalInformationInput>
    create: XOR<AttachmentsCreateWithoutPersonalInformationInput, AttachmentsUncheckedCreateWithoutPersonalInformationInput>
  }

  export type AttachmentsUpdateWithWhereUniqueWithoutPersonalInformationInput = {
    where: AttachmentsWhereUniqueInput
    data: XOR<AttachmentsUpdateWithoutPersonalInformationInput, AttachmentsUncheckedUpdateWithoutPersonalInformationInput>
  }

  export type AttachmentsUpdateManyWithWhereWithoutPersonalInformationInput = {
    where: AttachmentsScalarWhereInput
    data: XOR<AttachmentsUpdateManyMutationInput, AttachmentsUncheckedUpdateManyWithoutPersonalInformationInput>
  }

  export type AttachmentsScalarWhereInput = {
    AND?: AttachmentsScalarWhereInput | AttachmentsScalarWhereInput[]
    OR?: AttachmentsScalarWhereInput[]
    NOT?: AttachmentsScalarWhereInput | AttachmentsScalarWhereInput[]
    id?: IntFilter<"Attachments"> | number
    client_id?: IntFilter<"Attachments"> | number
    document_name?: StringNullableFilter<"Attachments"> | string | null
    document_url?: StringNullableFilter<"Attachments"> | string | null
  }

  export type CaseDetailsUpsertWithWhereUniqueWithoutPersonalInformationInput = {
    where: CaseDetailsWhereUniqueInput
    update: XOR<CaseDetailsUpdateWithoutPersonalInformationInput, CaseDetailsUncheckedUpdateWithoutPersonalInformationInput>
    create: XOR<CaseDetailsCreateWithoutPersonalInformationInput, CaseDetailsUncheckedCreateWithoutPersonalInformationInput>
  }

  export type CaseDetailsUpdateWithWhereUniqueWithoutPersonalInformationInput = {
    where: CaseDetailsWhereUniqueInput
    data: XOR<CaseDetailsUpdateWithoutPersonalInformationInput, CaseDetailsUncheckedUpdateWithoutPersonalInformationInput>
  }

  export type CaseDetailsUpdateManyWithWhereWithoutPersonalInformationInput = {
    where: CaseDetailsScalarWhereInput
    data: XOR<CaseDetailsUpdateManyMutationInput, CaseDetailsUncheckedUpdateManyWithoutPersonalInformationInput>
  }

  export type CaseDetailsScalarWhereInput = {
    AND?: CaseDetailsScalarWhereInput | CaseDetailsScalarWhereInput[]
    OR?: CaseDetailsScalarWhereInput[]
    NOT?: CaseDetailsScalarWhereInput | CaseDetailsScalarWhereInput[]
    id?: IntFilter<"CaseDetails"> | number
    nature_of_legal_issue?: StringFilter<"CaseDetails"> | string
    date_of_incident?: DateTimeNullableFilter<"CaseDetails"> | Date | string | null
    case_number?: StringNullableFilter<"CaseDetails"> | string | null
    opposing_parties?: StringNullableFilter<"CaseDetails"> | string | null
    current_attorney?: StringNullableFilter<"CaseDetails"> | string | null
    client_id?: IntFilter<"CaseDetails"> | number
  }

  export type ElectronicSignatureUpsertWithWhereUniqueWithoutPersonalInformationInput = {
    where: ElectronicSignatureWhereUniqueInput
    update: XOR<ElectronicSignatureUpdateWithoutPersonalInformationInput, ElectronicSignatureUncheckedUpdateWithoutPersonalInformationInput>
    create: XOR<ElectronicSignatureCreateWithoutPersonalInformationInput, ElectronicSignatureUncheckedCreateWithoutPersonalInformationInput>
  }

  export type ElectronicSignatureUpdateWithWhereUniqueWithoutPersonalInformationInput = {
    where: ElectronicSignatureWhereUniqueInput
    data: XOR<ElectronicSignatureUpdateWithoutPersonalInformationInput, ElectronicSignatureUncheckedUpdateWithoutPersonalInformationInput>
  }

  export type ElectronicSignatureUpdateManyWithWhereWithoutPersonalInformationInput = {
    where: ElectronicSignatureScalarWhereInput
    data: XOR<ElectronicSignatureUpdateManyMutationInput, ElectronicSignatureUncheckedUpdateManyWithoutPersonalInformationInput>
  }

  export type ElectronicSignatureScalarWhereInput = {
    AND?: ElectronicSignatureScalarWhereInput | ElectronicSignatureScalarWhereInput[]
    OR?: ElectronicSignatureScalarWhereInput[]
    NOT?: ElectronicSignatureScalarWhereInput | ElectronicSignatureScalarWhereInput[]
    id?: IntFilter<"ElectronicSignature"> | number
    client_id?: IntFilter<"ElectronicSignature"> | number
    signature_image_url?: StringNullableFilter<"ElectronicSignature"> | string | null
    signature_date?: DateTimeNullableFilter<"ElectronicSignature"> | Date | string | null
  }

  export type FamilyPersonalHistoryUpsertWithWhereUniqueWithoutPersonalInformationInput = {
    where: FamilyPersonalHistoryWhereUniqueInput
    update: XOR<FamilyPersonalHistoryUpdateWithoutPersonalInformationInput, FamilyPersonalHistoryUncheckedUpdateWithoutPersonalInformationInput>
    create: XOR<FamilyPersonalHistoryCreateWithoutPersonalInformationInput, FamilyPersonalHistoryUncheckedCreateWithoutPersonalInformationInput>
  }

  export type FamilyPersonalHistoryUpdateWithWhereUniqueWithoutPersonalInformationInput = {
    where: FamilyPersonalHistoryWhereUniqueInput
    data: XOR<FamilyPersonalHistoryUpdateWithoutPersonalInformationInput, FamilyPersonalHistoryUncheckedUpdateWithoutPersonalInformationInput>
  }

  export type FamilyPersonalHistoryUpdateManyWithWhereWithoutPersonalInformationInput = {
    where: FamilyPersonalHistoryScalarWhereInput
    data: XOR<FamilyPersonalHistoryUpdateManyMutationInput, FamilyPersonalHistoryUncheckedUpdateManyWithoutPersonalInformationInput>
  }

  export type FamilyPersonalHistoryScalarWhereInput = {
    AND?: FamilyPersonalHistoryScalarWhereInput | FamilyPersonalHistoryScalarWhereInput[]
    OR?: FamilyPersonalHistoryScalarWhereInput[]
    NOT?: FamilyPersonalHistoryScalarWhereInput | FamilyPersonalHistoryScalarWhereInput[]
    id?: IntFilter<"FamilyPersonalHistory"> | number
    marital_status?: StringNullableFilter<"FamilyPersonalHistory"> | string | null
    dependents?: IntNullableFilter<"FamilyPersonalHistory"> | number | null
    health_information?: StringNullableFilter<"FamilyPersonalHistory"> | string | null
    child_custody_support_info?: StringNullableFilter<"FamilyPersonalHistory"> | string | null
    client_id?: IntFilter<"FamilyPersonalHistory"> | number
  }

  export type FinancialInformationUpsertWithWhereUniqueWithoutPersonalInformationInput = {
    where: FinancialInformationWhereUniqueInput
    update: XOR<FinancialInformationUpdateWithoutPersonalInformationInput, FinancialInformationUncheckedUpdateWithoutPersonalInformationInput>
    create: XOR<FinancialInformationCreateWithoutPersonalInformationInput, FinancialInformationUncheckedCreateWithoutPersonalInformationInput>
  }

  export type FinancialInformationUpdateWithWhereUniqueWithoutPersonalInformationInput = {
    where: FinancialInformationWhereUniqueInput
    data: XOR<FinancialInformationUpdateWithoutPersonalInformationInput, FinancialInformationUncheckedUpdateWithoutPersonalInformationInput>
  }

  export type FinancialInformationUpdateManyWithWhereWithoutPersonalInformationInput = {
    where: FinancialInformationScalarWhereInput
    data: XOR<FinancialInformationUpdateManyMutationInput, FinancialInformationUncheckedUpdateManyWithoutPersonalInformationInput>
  }

  export type FinancialInformationScalarWhereInput = {
    AND?: FinancialInformationScalarWhereInput | FinancialInformationScalarWhereInput[]
    OR?: FinancialInformationScalarWhereInput[]
    NOT?: FinancialInformationScalarWhereInput | FinancialInformationScalarWhereInput[]
    id?: IntFilter<"FinancialInformation"> | number
    current_employer?: StringNullableFilter<"FinancialInformation"> | string | null
    job_title?: StringNullableFilter<"FinancialInformation"> | string | null
    income?: FloatNullableFilter<"FinancialInformation"> | number | null
    monthly_expenses?: FloatNullableFilter<"FinancialInformation"> | number | null
    debts?: FloatNullableFilter<"FinancialInformation"> | number | null
    assets?: StringNullableFilter<"FinancialInformation"> | string | null
    liabilities?: StringNullableFilter<"FinancialInformation"> | string | null
    bankruptcy_history?: BoolFilter<"FinancialInformation"> | boolean
    client_id?: IntFilter<"FinancialInformation"> | number
  }

  export type LegalHistoryUpsertWithWhereUniqueWithoutPersonalInformationInput = {
    where: LegalHistoryWhereUniqueInput
    update: XOR<LegalHistoryUpdateWithoutPersonalInformationInput, LegalHistoryUncheckedUpdateWithoutPersonalInformationInput>
    create: XOR<LegalHistoryCreateWithoutPersonalInformationInput, LegalHistoryUncheckedCreateWithoutPersonalInformationInput>
  }

  export type LegalHistoryUpdateWithWhereUniqueWithoutPersonalInformationInput = {
    where: LegalHistoryWhereUniqueInput
    data: XOR<LegalHistoryUpdateWithoutPersonalInformationInput, LegalHistoryUncheckedUpdateWithoutPersonalInformationInput>
  }

  export type LegalHistoryUpdateManyWithWhereWithoutPersonalInformationInput = {
    where: LegalHistoryScalarWhereInput
    data: XOR<LegalHistoryUpdateManyMutationInput, LegalHistoryUncheckedUpdateManyWithoutPersonalInformationInput>
  }

  export type LegalHistoryScalarWhereInput = {
    AND?: LegalHistoryScalarWhereInput | LegalHistoryScalarWhereInput[]
    OR?: LegalHistoryScalarWhereInput[]
    NOT?: LegalHistoryScalarWhereInput | LegalHistoryScalarWhereInput[]
    id?: IntFilter<"LegalHistory"> | number
    criminal_history?: StringNullableFilter<"LegalHistory"> | string | null
    civil_litigation_history?: StringNullableFilter<"LegalHistory"> | string | null
    legal_restrictions_or_probation?: StringNullableFilter<"LegalHistory"> | string | null
    client_id?: IntFilter<"LegalHistory"> | number
  }

  export type AdditionalInformationCreateManyPersonalInformationInput = {
    id?: number
    preferred_communication_method?: string | null
    emergency_contact_name?: string | null
    emergency_contact_relationship?: string | null
    emergency_contact_phone?: string | null
    how_did_you_hear_about_us?: string | null
    authorization_and_consent: boolean
  }

  export type AttachmentsCreateManyPersonalInformationInput = {
    id?: number
    document_name?: string | null
    document_url?: string | null
  }

  export type CaseDetailsCreateManyPersonalInformationInput = {
    id?: number
    nature_of_legal_issue: string
    date_of_incident?: Date | string | null
    case_number?: string | null
    opposing_parties?: string | null
    current_attorney?: string | null
  }

  export type ElectronicSignatureCreateManyPersonalInformationInput = {
    id?: number
    signature_image_url?: string | null
    signature_date?: Date | string | null
  }

  export type FamilyPersonalHistoryCreateManyPersonalInformationInput = {
    id?: number
    marital_status?: string | null
    dependents?: number | null
    health_information?: string | null
    child_custody_support_info?: string | null
  }

  export type FinancialInformationCreateManyPersonalInformationInput = {
    id?: number
    current_employer?: string | null
    job_title?: string | null
    income?: number | null
    monthly_expenses?: number | null
    debts?: number | null
    assets?: string | null
    liabilities?: string | null
    bankruptcy_history: boolean
  }

  export type LegalHistoryCreateManyPersonalInformationInput = {
    id?: number
    criminal_history?: string | null
    civil_litigation_history?: string | null
    legal_restrictions_or_probation?: string | null
  }

  export type AdditionalInformationUpdateWithoutPersonalInformationInput = {
    preferred_communication_method?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    how_did_you_hear_about_us?: NullableStringFieldUpdateOperationsInput | string | null
    authorization_and_consent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdditionalInformationUncheckedUpdateWithoutPersonalInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    preferred_communication_method?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    how_did_you_hear_about_us?: NullableStringFieldUpdateOperationsInput | string | null
    authorization_and_consent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdditionalInformationUncheckedUpdateManyWithoutPersonalInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    preferred_communication_method?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_relationship?: NullableStringFieldUpdateOperationsInput | string | null
    emergency_contact_phone?: NullableStringFieldUpdateOperationsInput | string | null
    how_did_you_hear_about_us?: NullableStringFieldUpdateOperationsInput | string | null
    authorization_and_consent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AttachmentsUpdateWithoutPersonalInformationInput = {
    document_name?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttachmentsUncheckedUpdateWithoutPersonalInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_name?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttachmentsUncheckedUpdateManyWithoutPersonalInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_name?: NullableStringFieldUpdateOperationsInput | string | null
    document_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CaseDetailsUpdateWithoutPersonalInformationInput = {
    nature_of_legal_issue?: StringFieldUpdateOperationsInput | string
    date_of_incident?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    case_number?: NullableStringFieldUpdateOperationsInput | string | null
    opposing_parties?: NullableStringFieldUpdateOperationsInput | string | null
    current_attorney?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CaseDetailsUncheckedUpdateWithoutPersonalInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nature_of_legal_issue?: StringFieldUpdateOperationsInput | string
    date_of_incident?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    case_number?: NullableStringFieldUpdateOperationsInput | string | null
    opposing_parties?: NullableStringFieldUpdateOperationsInput | string | null
    current_attorney?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CaseDetailsUncheckedUpdateManyWithoutPersonalInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    nature_of_legal_issue?: StringFieldUpdateOperationsInput | string
    date_of_incident?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    case_number?: NullableStringFieldUpdateOperationsInput | string | null
    opposing_parties?: NullableStringFieldUpdateOperationsInput | string | null
    current_attorney?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ElectronicSignatureUpdateWithoutPersonalInformationInput = {
    signature_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    signature_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ElectronicSignatureUncheckedUpdateWithoutPersonalInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    signature_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    signature_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ElectronicSignatureUncheckedUpdateManyWithoutPersonalInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    signature_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    signature_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FamilyPersonalHistoryUpdateWithoutPersonalInformationInput = {
    marital_status?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: NullableIntFieldUpdateOperationsInput | number | null
    health_information?: NullableStringFieldUpdateOperationsInput | string | null
    child_custody_support_info?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FamilyPersonalHistoryUncheckedUpdateWithoutPersonalInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    marital_status?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: NullableIntFieldUpdateOperationsInput | number | null
    health_information?: NullableStringFieldUpdateOperationsInput | string | null
    child_custody_support_info?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FamilyPersonalHistoryUncheckedUpdateManyWithoutPersonalInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    marital_status?: NullableStringFieldUpdateOperationsInput | string | null
    dependents?: NullableIntFieldUpdateOperationsInput | number | null
    health_information?: NullableStringFieldUpdateOperationsInput | string | null
    child_custody_support_info?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FinancialInformationUpdateWithoutPersonalInformationInput = {
    current_employer?: NullableStringFieldUpdateOperationsInput | string | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    income?: NullableFloatFieldUpdateOperationsInput | number | null
    monthly_expenses?: NullableFloatFieldUpdateOperationsInput | number | null
    debts?: NullableFloatFieldUpdateOperationsInput | number | null
    assets?: NullableStringFieldUpdateOperationsInput | string | null
    liabilities?: NullableStringFieldUpdateOperationsInput | string | null
    bankruptcy_history?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FinancialInformationUncheckedUpdateWithoutPersonalInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    current_employer?: NullableStringFieldUpdateOperationsInput | string | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    income?: NullableFloatFieldUpdateOperationsInput | number | null
    monthly_expenses?: NullableFloatFieldUpdateOperationsInput | number | null
    debts?: NullableFloatFieldUpdateOperationsInput | number | null
    assets?: NullableStringFieldUpdateOperationsInput | string | null
    liabilities?: NullableStringFieldUpdateOperationsInput | string | null
    bankruptcy_history?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FinancialInformationUncheckedUpdateManyWithoutPersonalInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    current_employer?: NullableStringFieldUpdateOperationsInput | string | null
    job_title?: NullableStringFieldUpdateOperationsInput | string | null
    income?: NullableFloatFieldUpdateOperationsInput | number | null
    monthly_expenses?: NullableFloatFieldUpdateOperationsInput | number | null
    debts?: NullableFloatFieldUpdateOperationsInput | number | null
    assets?: NullableStringFieldUpdateOperationsInput | string | null
    liabilities?: NullableStringFieldUpdateOperationsInput | string | null
    bankruptcy_history?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LegalHistoryUpdateWithoutPersonalInformationInput = {
    criminal_history?: NullableStringFieldUpdateOperationsInput | string | null
    civil_litigation_history?: NullableStringFieldUpdateOperationsInput | string | null
    legal_restrictions_or_probation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LegalHistoryUncheckedUpdateWithoutPersonalInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    criminal_history?: NullableStringFieldUpdateOperationsInput | string | null
    civil_litigation_history?: NullableStringFieldUpdateOperationsInput | string | null
    legal_restrictions_or_probation?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LegalHistoryUncheckedUpdateManyWithoutPersonalInformationInput = {
    id?: IntFieldUpdateOperationsInput | number
    criminal_history?: NullableStringFieldUpdateOperationsInput | string | null
    civil_litigation_history?: NullableStringFieldUpdateOperationsInput | string | null
    legal_restrictions_or_probation?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PersonalInformationCountOutputTypeDefaultArgs instead
     */
    export type PersonalInformationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PersonalInformationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdditionalInformationDefaultArgs instead
     */
    export type AdditionalInformationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdditionalInformationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttachmentsDefaultArgs instead
     */
    export type AttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttachmentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CaseDetailsDefaultArgs instead
     */
    export type CaseDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CaseDetailsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ElectronicSignatureDefaultArgs instead
     */
    export type ElectronicSignatureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ElectronicSignatureDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FamilyPersonalHistoryDefaultArgs instead
     */
    export type FamilyPersonalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FamilyPersonalHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FinancialInformationDefaultArgs instead
     */
    export type FinancialInformationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FinancialInformationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LegalHistoryDefaultArgs instead
     */
    export type LegalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LegalHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PersonalInformationDefaultArgs instead
     */
    export type PersonalInformationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PersonalInformationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserLoginDefaultArgs instead
     */
    export type UserLoginArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserLoginDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}