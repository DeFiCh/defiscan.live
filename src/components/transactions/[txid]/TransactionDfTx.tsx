import { SmartBuffer } from 'smart-buffer'
import {
  CPoolSwap,
  OP_DEFI_TX,
  CUtxosToAccount,
  CAccountToAccount,
  CAnyAccountToAccount,
  toOPCodes
} from '@defichain/jellyfish-transaction'
import { Transaction, TransactionVin, TransactionVout } from '@defichain/whale-api-client/dist/api/transactions'
import { DfTxPoolSwap } from '@components/transactions/[txid]/DfTx/DfTxPoolSwap'
import { DfTxUtxosToAccount } from '@components/transactions/[txid]/DfTx/DfTxUtxosToAccount'
import { DfTxAccountToAccount } from '@components/transactions/[txid]/DfTx/DfTxAccountToAccount'
import { DfTxAnyAccountToAccount } from '@components/transactions/[txid]/DfTx/DfTxAnyAccountToAccount'
import { DfTxUnmapped } from '@components/transactions/[txid]/DfTx/DfTxUnmapped'

interface TransactionDfTxProps {
  transaction: Transaction
  vins: TransactionVin[]
  vouts: TransactionVout[]
}

export function TransactionDfTx (props: TransactionDfTxProps): JSX.Element | null {
  if (props.vouts.length !== 2) {
    return null
  }

  const hex = props.vouts[0].script.hex
  const buffer = SmartBuffer.fromBuffer(Buffer.from(hex, 'hex'))
  const stack = toOPCodes(buffer)

  if (stack.length !== 2 || stack[1].type !== 'OP_DEFI_TX') {
    return null
  }

  const tx = (stack[1] as OP_DEFI_TX).tx
  switch (tx.type) {
    case CPoolSwap.OP_CODE:
      return <DfTxPoolSwap dftx={tx} />
    case CUtxosToAccount.OP_CODE:
      return <DfTxUtxosToAccount dftx={tx} />
    case CAccountToAccount.OP_CODE:
      return <DfTxAccountToAccount dftx={tx} />
    case CAnyAccountToAccount.OP_CODE:
      return <DfTxAnyAccountToAccount dftx={tx} />
    default:
      return <DfTxUnmapped dftx={tx} />
  }
}
