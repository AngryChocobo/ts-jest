import { inspect } from 'util'
import { BaseError } from 'make-error'
import { Helps, Errors, interpolate } from './messages'
import { rootLogger } from './logger'

const logger = rootLogger.child({ namespace: 'TSError' })

/**
 * @internal
 */
export const INSPECT_CUSTOM = inspect.custom || 'inspect'

/**
 * TypeScript diagnostics error.
 */
export class TSError extends BaseError {
  name = 'TSError'

  constructor(public diagnosticText: string, public diagnosticCodes: number[]) {
    super(
      interpolate(Errors.UnableToCompileTypeScript, {
        diagnostics: diagnosticText.trim(),
        help: Helps.IgnoreDiagnosticCode,
      }),
    )
    logger.debug({ diagnosticCodes, diagnosticText }, 'created new TSError')
    // ensure we blacklist any of our code
    Object.defineProperty(this, 'stack', { value: '' })
  }

  /**
   * @internal
   */
  [INSPECT_CUSTOM]() {
    return this.diagnosticText
  }
}
