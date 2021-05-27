import {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import style from './AddUser.module.css';

const AddUser = (props) => {
    const[enteredName, setEnteredName] = useState('');
    const[enteredAge, setEnteredAge] = useState('');
    const[error,setError] = useState();

    const enteredNameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const enteredAgeChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const handleSaveUser = (event) => {
        event.preventDefault();
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0 ){
            setError({
                'title' : 'Invalid Input',
                'message' : 'Please enter a valid name and age (non empty values)',
            })
            return;
        }
        if(+enteredAge <= 0){
            setError({
                'title' : 'Invalid Age',
                'message' : 'Please enter a valid age (>0)',
            })
            return;
        }
        props.addUser(enteredName, enteredAge);
        setEnteredName('');
        setEnteredAge('');
    }

    const clearErrorHandler = () => {
        setError(null);
    }

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onClick={clearErrorHandler}/>}
        <Card className={`${style.input}`}>
            <form onSubmit={handleSaveUser}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={enteredName} onChange={enteredNameChangeHandler} />
                <label htmlFor="age">Age</label>
                <input type="text" id="age" value={enteredAge} onChange={enteredAgeChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </div>
    );

}

export default AddUser;