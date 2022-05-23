
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const { purchaseId } = useParams();
    // const [service, setService] = useState({});
    const [user, loading] = useAuthState(auth);
    
    if(loading){
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch(`http://localhost:5000/service/${purchaseId}`)
    //         .then(res => res.json())
    //         .then(data => setService(data))
    // }, [purchaseId])


    return (
        <div>
            <h2>Thsi is for purchase : {purchaseId}</h2>
            <h2>name : {user.displayName || ''}</h2>
            <h2>email : {user.email || ''}</h2>
        </div>
    );
};

export default Purchase;