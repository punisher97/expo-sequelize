'use strict';
/**
 * An enum of table hints to be used in mssql for querying with table hints
 *
 * @property NOLOCK
 * @property READUNCOMMITTED
 * @property UPDLOCK
 * @property REPEATABLEREAD
 * @property SERIALIZABLE
 * @property READCOMMITTED
 * @property TABLOCK
 * @property TABLOCKX
 * @property PAGLOCK
 * @property ROWLOCK
 * @property NOWAIT
 * @property READPAST
 * @property XLOCK
 * @property SNAPSHOT
 * @property NOEXPAND
 */

const TableHints = module.exports = {
  // eslint-disable-line
  NOLOCK: 'NOLOCK',
  READUNCOMMITTED: 'READUNCOMMITTED',
  UPDLOCK: 'UPDLOCK',
  REPEATABLEREAD: 'REPEATABLEREAD',
  SERIALIZABLE: 'SERIALIZABLE',
  READCOMMITTED: 'READCOMMITTED',
  TABLOCK: 'TABLOCK',
  TABLOCKX: 'TABLOCKX',
  PAGLOCK: 'PAGLOCK',
  ROWLOCK: 'ROWLOCK',
  NOWAIT: 'NOWAIT',
  READPAST: 'READPAST',
  XLOCK: 'XLOCK',
  SNAPSHOT: 'SNAPSHOT',
  NOEXPAND: 'NOEXPAND'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi90YWJsZS1oaW50cy5qcyJdLCJuYW1lcyI6WyJUYWJsZUhpbnRzIiwibW9kdWxlIiwiZXhwb3J0cyIsIk5PTE9DSyIsIlJFQURVTkNPTU1JVFRFRCIsIlVQRExPQ0siLCJSRVBFQVRBQkxFUkVBRCIsIlNFUklBTElaQUJMRSIsIlJFQURDT01NSVRURUQiLCJUQUJMT0NLIiwiVEFCTE9DS1giLCJQQUdMT0NLIiwiUk9XTE9DSyIsIk5PV0FJVCIsIlJFQURQQVNUIiwiWExPQ0siLCJTTkFQU0hPVCIsIk5PRVhQQU5EIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQSxNQUFNQSxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUFFO0FBQ3BDQyxFQUFBQSxNQUFNLEVBQUUsUUFEMEI7QUFFbENDLEVBQUFBLGVBQWUsRUFBRSxpQkFGaUI7QUFHbENDLEVBQUFBLE9BQU8sRUFBRSxTQUh5QjtBQUlsQ0MsRUFBQUEsY0FBYyxFQUFFLGdCQUprQjtBQUtsQ0MsRUFBQUEsWUFBWSxFQUFFLGNBTG9CO0FBTWxDQyxFQUFBQSxhQUFhLEVBQUUsZUFObUI7QUFPbENDLEVBQUFBLE9BQU8sRUFBRSxTQVB5QjtBQVFsQ0MsRUFBQUEsUUFBUSxFQUFFLFVBUndCO0FBU2xDQyxFQUFBQSxPQUFPLEVBQUUsU0FUeUI7QUFVbENDLEVBQUFBLE9BQU8sRUFBRSxTQVZ5QjtBQVdsQ0MsRUFBQUEsTUFBTSxFQUFFLFFBWDBCO0FBWWxDQyxFQUFBQSxRQUFRLEVBQUUsVUFad0I7QUFhbENDLEVBQUFBLEtBQUssRUFBRSxPQWIyQjtBQWNsQ0MsRUFBQUEsUUFBUSxFQUFFLFVBZHdCO0FBZWxDQyxFQUFBQSxRQUFRLEVBQUU7QUFmd0IsQ0FBcEMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG4vKipcclxuICogQW4gZW51bSBvZiB0YWJsZSBoaW50cyB0byBiZSB1c2VkIGluIG1zc3FsIGZvciBxdWVyeWluZyB3aXRoIHRhYmxlIGhpbnRzXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSBOT0xPQ0tcclxuICogQHByb3BlcnR5IFJFQURVTkNPTU1JVFRFRFxyXG4gKiBAcHJvcGVydHkgVVBETE9DS1xyXG4gKiBAcHJvcGVydHkgUkVQRUFUQUJMRVJFQURcclxuICogQHByb3BlcnR5IFNFUklBTElaQUJMRVxyXG4gKiBAcHJvcGVydHkgUkVBRENPTU1JVFRFRFxyXG4gKiBAcHJvcGVydHkgVEFCTE9DS1xyXG4gKiBAcHJvcGVydHkgVEFCTE9DS1hcclxuICogQHByb3BlcnR5IFBBR0xPQ0tcclxuICogQHByb3BlcnR5IFJPV0xPQ0tcclxuICogQHByb3BlcnR5IE5PV0FJVFxyXG4gKiBAcHJvcGVydHkgUkVBRFBBU1RcclxuICogQHByb3BlcnR5IFhMT0NLXHJcbiAqIEBwcm9wZXJ0eSBTTkFQU0hPVFxyXG4gKiBAcHJvcGVydHkgTk9FWFBBTkRcclxuICovXHJcbmNvbnN0IFRhYmxlSGludHMgPSBtb2R1bGUuZXhwb3J0cyA9IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gIE5PTE9DSzogJ05PTE9DSycsXHJcbiAgUkVBRFVOQ09NTUlUVEVEOiAnUkVBRFVOQ09NTUlUVEVEJyxcclxuICBVUERMT0NLOiAnVVBETE9DSycsXHJcbiAgUkVQRUFUQUJMRVJFQUQ6ICdSRVBFQVRBQkxFUkVBRCcsXHJcbiAgU0VSSUFMSVpBQkxFOiAnU0VSSUFMSVpBQkxFJyxcclxuICBSRUFEQ09NTUlUVEVEOiAnUkVBRENPTU1JVFRFRCcsXHJcbiAgVEFCTE9DSzogJ1RBQkxPQ0snLFxyXG4gIFRBQkxPQ0tYOiAnVEFCTE9DS1gnLFxyXG4gIFBBR0xPQ0s6ICdQQUdMT0NLJyxcclxuICBST1dMT0NLOiAnUk9XTE9DSycsXHJcbiAgTk9XQUlUOiAnTk9XQUlUJyxcclxuICBSRUFEUEFTVDogJ1JFQURQQVNUJyxcclxuICBYTE9DSzogJ1hMT0NLJyxcclxuICBTTkFQU0hPVDogJ1NOQVBTSE9UJyxcclxuICBOT0VYUEFORDogJ05PRVhQQU5EJ1xyXG59O1xyXG4iXX0=