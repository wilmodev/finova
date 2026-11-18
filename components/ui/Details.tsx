import { useState } from 'react'

const summaryStyle = {
  listStyle: 'none',
  cursor: 'pointer',
  color: '#f1f1f1',
  fontSize: '2rem',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.5rem 0',
};


export function Detail({title, children}: {
  title:string,
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <details 
        className='border-b-2 w-full border-text-secondary/20 px-2 py-4 select-none cursor-pointer' 
        aria-label={`Details for ${title}`}
      >
            <summary 
              className='text-zinc-200 ' 
              aria-label={`Details for ${title}`}  
              style={ summaryStyle }
              onClick={() => setIsOpen(!isOpen)}
              >{title}
                {
                  <svg 
                    width="30" 
                    height="30" 
                    className='text-text-secondary'
                    aria-hidden="true" style={{transition : 'transform .3s ease', transform: isOpen ? 'rotate(90deg)' : 'none'}}><use href='/icons.svg#arrow-forward'></use></svg>
                }
              </summary>
            {children}
      </details>
  )
} 
