import React from 'react'
import {Box} from '@mui/material';

import BodyPart from './BodyPart';

const HorizontalScrollbar = ({data}) => {
  return (
    <div>
        {data.map((item) => (
            <box 
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            margin='0 40px'
            >
                <BodyPart item={item} bodyPart = {bodyPart} setBodyPart = {setBodyPart} />
            </box>
        )
        )}
    </div>
  )
}

export default HorizontalScrollbar