import { Block } from '@defichain/whale-api-client/dist/api/blocks'
import { formatDistanceToNow } from 'date-fns'
import { Link } from '@components/commons/link/Link'
import { AddressLink } from '@components/commons/link/AddressLink'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdStairs } from 'react-icons/md'
import { CollapsibleSection } from '@components/commons/CollapsibleSection'
import { Transition } from '@headlessui/react'
import React, { useState } from 'react'
import { BlockLink } from '@components/commons/link/BlockLink'

export function BlocksList ({ blocks }: { blocks: Block[] }): JSX.Element {
  return (
    <div className='w-full lg:w-1/2 xl:w-1/3'>
      <div className='hidden md:block'>
        <div className='flex justify-between'>
          <h1 className='text-xl font-semibold'>Latest Blocks</h1>
          <Link href={{ pathname: '/blocks' }}>
            <a
              className='flex items-center font-medium cursor-pointer text-primary-500'
              data-testid='BlocksList.viewAllBlocksLink'
            >
              VIEW ALL BLOCKS
            </a>
          </Link>
        </div>
        <div className='mt-6 w-full space-y-1'>
          {
            blocks.map((block) => {
              return (
                <BlockDetails
                  key={block.id}
                  height={block.height.toString()}
                  mintedBy={block.minter}
                  transactionCount={block.transactionCount}
                  age={formatDistanceToNow(block.medianTime * 1000, { addSuffix: true })}
                />
              )
            })
          }
        </div>
        <div className='flex justify-center'>
          <ViewMoreButton />
        </div>
      </div>
      <CollapsibleSection heading='Latest Blocks' className='block md:hidden'>
        <div className='mt-6 w-full space-y-1'>
          {blocks.map((block) => {
            return (
              <BlockDetails
                key={block.id}
                height={block.height.toString()}
                mintedBy={block.minter}
                transactionCount={block.transactionCount}
                age={formatDistanceToNow(block.medianTime * 1000, { addSuffix: true })}
              />
            )
          })}
        </div>
        <div className='flex justify-center'>
          <ViewMoreButton />
        </div>
      </CollapsibleSection>
    </div>
  )
}

function BlockDetails (props: { height: string, mintedBy?: string, transactionCount: number, age: string }): JSX.Element {
  return (
    <div
      className='grid grid-cols-3 lg:grid-cols-2 p-4 rounded-sm border border-gray-200 cursor-pointer items-baseline'
    >
      <div className='flex space-x-2 col-span-2 lg:col-span-1 '>
        <span className='text-lg leading-6'>
          <MdStairs className='text-primary-600 inline-block' size={20} />
        </span>
        <div>
          <BlockLink className='text-lg font-medium text-primary-500 underline md:no-underline' block={props.height}>
            {props.height}
          </BlockLink>
          <div className='text-xs text-gray-400 leading-5'>
            <span>{props.age}</span>
          </div>
        </div>
      </div>
      <DesktopBlockDetails height={props.height} transactionCount={props.transactionCount} mintedBy={props.mintedBy} />
      <MobileBlockDetails height={props.height} transactionCount={props.transactionCount} mintedBy={props.mintedBy} />
    </div>
  )
}

function DesktopBlockDetails (props: { height: string, mintedBy?: string, transactionCount: number }): JSX.Element {
  return (
    <div className='hidden md:block'>
      <div className='grid grid-cols-2 text-sm justify-between'>
        <div className='text-gray-500'>
          Minted by
        </div>
        {
          props.mintedBy === undefined ? ('N/A') : (
            <AddressLink address={`${props.mintedBy}`}>
              <div className='text-right text-primary-500 overflow-hidden overflow-ellipsis'>
                {props.mintedBy}
              </div>
            </AddressLink>
          )
        }
      </div>
      <div className='grid grid-cols-2 text-sm mt-1 justify-between'>
        <div className='text-gray-500'>
          Transactions
        </div>
        <span className='text-right text-gray-900'>
          {props.transactionCount}
        </span>
      </div>
    </div>
  )
}

function MobileBlockDetails (props: { height: string, mintedBy?: string, transactionCount: number }): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <div
        className='text-primary-500 flex justify-end items-center block md:hidden'
        onClick={() => setIsOpen(!isOpen)}
      >
        {(!isOpen)
          ? (<>VIEW<MdOutlineKeyboardArrowDown size={22} /></>)
          : (<>HIDE<MdOutlineKeyboardArrowUp size={22} /></>)}
      </div>
      <Transition
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 translate-y-0'
        enterTo='opacity-100 translate-y-1'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-1'
        leaveTo='opacity-100 translate-y-0'
        className='col-span-3 mt-5'
        show={isOpen}
      >
        <div className='grid grid-cols-2 text-sm justify-between'>
          <div className='text-gray-500'>
            Minted by
          </div>
          {
            props.mintedBy === undefined ? ('N/A') : (
              <AddressLink address={`${props.mintedBy}`}>
                <div className='text-right text-primary-500 overflow-hidden overflow-ellipsis underline'>
                  {props.mintedBy}
                </div>
              </AddressLink>
            )
          }
        </div>
        <div className='grid grid-cols-2 text-sm mt-1 justify-between'>
          <div className='text-gray-500'>
            Transactions
          </div>
          <span className='text-right text-gray-900'>
            {props.transactionCount}
          </span>
        </div>
      </Transition>
    </>
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
          className='mt-2 py-2 px-14 border border-gray-200'
        >
          VIEW ALL BLOCKS
        </button>
      </a>
    </Link>
  )
}
