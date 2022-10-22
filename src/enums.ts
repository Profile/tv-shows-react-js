/**
 * API processing statuses.
 */
export enum EProcessStatus {
  /** Request canceled. */
  CANCELED = 'CANCELED',

  /** Request fall via errors. */
  ERROR = 'ERROR',

  /** Initial state. */
  IDLE = 'IDLE',

  /** Request pending. */
  PENDING = 'PENDING',

  /** Request resolved successfully. */
  SUCCESS = 'SUCCESS'
}
