import React, { useRef } from 'react'

const CatFriends = () => {
    const itemsRef = useRef(null);

    function scrollTold(itemId){
        const map = getMap();
        const node = map.get(itemId);

        node.scrollIntoView({
            behavior:'smooth',
            block:'nearest',
            inline:'center'
        })

    }

    function getMap(){
        if(!itemsRef.current){
            itemsRef.current = new Map();
        }
        return itemsRef.current;
    }
  return (
    <>
        <nav>
            <button onClick={()=>scrollTold(0)}>Tom</button>
            <button onClick={()=>scrollTold(5)}>Tom</button>
            <button onClick={()=>scrollTold(9)}>Jellylorum</button>
        </nav>

        <div>
            <ul>
                {catList.map(cat=>(
                    <li
                    key={cat.id}
                    ref={(node)=>{
                        const map = getMap();
                        if(node){
                            map.set(cat.id, node)
                        }else{
                            map.delete(cat.id)
                        }
                    }}
                    >
                        <img src={cat.imageUrl} alt="" />

                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default CatFriends






const catList = [];
for(let i=0;i<10;i++){
    catList.push({
        id:i,
        imageUrl:'https://placekitten.com/250/200?image='+i
    })
}