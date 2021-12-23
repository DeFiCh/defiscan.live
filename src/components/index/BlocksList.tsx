import { Block } from '@defichain/whale-api-client/dist/api/blocks'
import { formatDistanceToNow } from 'date-fns'
import { Link } from '@components/commons/link/Link'
import { MdStairs } from 'react-icons/md'
import { CollapsibleSection } from '@components/commons/sections/CollapsibleSection'
import React from 'react'
import { IoChevronForwardSharp } from 'react-icons/io5'

export function BlocksList ({ blocks }: { blocks: Block[] }): JSX.Element {
  return (
    <>
      <div className='hidden md:block md:mt-8 lg:mt-0' data-testid='Desktop.Blocks'>
        <div className='flex justify-between'>
          <h1 className='text-xl font-semibold'>Latest Blocks</h1>
        </div>
        <div className='mt-6'>
          {blocks.map((block) => {
            return (
              <BlockCard
                id={block.id}
                height={block.height.toString()}
                minter={block.minter}
                transactionCount={block.transactionCount}
                medianTime={block.medianTime}
                key={`Desktop.${block.id}`}
              />
            )
          })}
        </div>
        <div className='flex justify-center'>
          <ViewMoreButton />
        </div>
      </div>
      <CollapsibleSection heading='Latest Blocks' className='block md:hidden' testId='CollapsibleSection.Blocks'>
        <div className='mt-6 w-full'>
          {blocks.map((block) => {
            return (
              <BlockCard
                id={block.id}
                height={block.height.toString()}
                minter={block.minter}
                transactionCount={block.transactionCount}
                medianTime={block.medianTime}
                key={`Mobile.${block.id}`}
              />
            )
          })}
        </div>
        <div className='flex justify-center'>
          <ViewMoreButton />
        </div>
      </CollapsibleSection>
    </>
  )
}

function BlockCard (props: { id: string, height: string, minter?: string, transactionCount: number, medianTime: number }): JSX.Element {
  return (
    <Link href={{ pathname: `/blocks/${props.id}` }}>
      <a className='content'>
        <BlockCardDetails
          height={props.height.toString()}
          minter={props.minter}
          transactionCount={props.transactionCount}
          age={formatDistanceToNow(props.medianTime * 1000, { addSuffix: true })}
        />
      </a>
    </Link>
  )
}

function BlockCardDetails (props: { height: string, minter?: string, transactionCount: number, age: string }): JSX.Element {
  return (
    <div
      className='flex flex-wrap justify-between p-4 rounded border border-gray-200 cursor-pointer items-center my-1.5 hover:shadow-md'
    >
      <div className='w-5/12 flex space-x-2'>
        <span className='text-lg leading-6'>
          <MdStairs className='text-gray-400 inline-block' size={22} />
        </span>
        <div>
          <div className='font-medium text-gray-900'>
            {props.height}
          </div>
          <div className='text-xs text-gray-400 leading-5'>
            <span>{props.age}</span>
          </div>
        </div>
      </div>
      <div className='w-5/12 flex flex-wrap'>
        <div className='w-full flex flex-wrap items-center text-sm overflow-hidden'>
          <div className='w-1/2 text-gray-500'>
            Minted by
          </div>
          <div className='w-1/2 overflow-hidden overflow-ellipsis'>
            {props.minter === undefined ? ('N/A') : (props.minter)}
          </div>
        </div>
        <div className='w-full flex flex-wrap justify-between text-sm'>
          <div className='w-1/2 text-gray-500'>
            Transactions
          </div>
          <span className='w-1/2 text-right text-gray-900'>{props.transactionCount}</span>
        </div>
      </div>
      <div className='flex items-center ml-8'>
        <IoChevronForwardSharp size={24} />
      </div>
    </div>
  )
}

function ViewMoreButton (): JSX.Element {
  return (
    <Link href={{ pathname: '/blocks' }}>
      <a
        className='font-medium cursor-pointer text-primary-500'
        data-testid='BlocksList.viewAllBlocksButton'
      >
        <button
          type='button'
          className='mt-2 py-2 px-14 border border-gray-200 rounded-sm'
        >
          VIEW ALL BLOCKS
        </button>
      </a>
    </Link>
  )
}
