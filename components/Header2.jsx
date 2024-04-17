import React from 'react'

export const Header2 = () => {

    const List= [

        {
            name:'Goa',
        },

        {
            name:'Mumbai',
        },

        {
            name:'Banglore',
        },

        {
            name:'Delhi',
        },

        {
            name:'Chennai',
        },
    ]
  return (
    <div>
        <div className="flex px-10 py-3 bg-gray-200 justify-between">
            {
                List.map((e)=>{
                    return(
                        <span key={e.name}>{e.name}</span>
                    )
                })
            }
        </div>
    </div>
  )
}
