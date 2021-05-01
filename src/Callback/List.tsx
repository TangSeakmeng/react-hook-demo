import React, { useEffect } from 'react';
import { useState } from 'react';

function List({ getItems }: any) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('getItems changed')
    setItems(getItems(5));
  }, [getItems])

  return (
    <div>
      {
        items.map((item) => <p key={item}>{ item }</p>)
      }
    </div>
  );
}

export default List;