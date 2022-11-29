import { useEffect, useState } from 'react';
import Avatar from '../../Assets/index';

function AvatarGroup(props) {

  const [maxLength, setMaxLength] = useState(props.maxLength);
  const [size, setSize] = useState(0);

  useEffect(()=>{
    setSize(Avatar.length - (maxLength + 1) );
  }, [])

  console.log(Avatar);

  return (
    <div className='flex -space-x-3 md:-space-x-5'>
      {
        Avatar.map((el, idx)=>{
          return (
            maxLength >= idx ? 
            <img 
              key={idx} 
              src={el.image} 
              alt={el.alt} 
              className='w-14 h-14 md:w-16 md:h-16 object-cover rounded-full border-2 border-white' />
            : ""
          )
        })
      }

      
      <a
        className="flex justify-center items-center w-14 h-14 md:w-16 md:h-16 text-[20px] md:text-2xl font-medium text-gray-800 bg-gray-300 rounded-full border-2 border-white " >
        +
        {
          size
        }
      </a>
    </div>
  )
}

export default AvatarGroup