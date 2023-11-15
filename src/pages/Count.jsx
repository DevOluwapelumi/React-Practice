import { useSelector, useDispatch } from 'react-redux/es/hooks/useSelector';
import { decrement, increment } from '../redux/Counter'

const Count = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    console.log(count);

//     return (
//         <div>
//             <div>
//                 <button className='bg-success rounded-md text-white p-4'
//                     aria-label="Increment value"
//                     onClick={() => dispatch(increment())}
//                 >
//                     Increment
//                 </button>
//                 <span>{count}</span>
//                 <button className='bg-danger'
//                     aria-label="Decrement value"
//                     onClick={() => dispatch(decrement())}
//                 >
//                     Decrement
//                 </button>
//             </div>
//         </div>
//     );
// };

return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};
    
    

export default Count;