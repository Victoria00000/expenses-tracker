import { useForm } from 'react-hook-form';
import { List } from './List';


export const Form = () => {

    const { register, handleSubmit, resetField } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className="form max-w-sm mx-auto w-96">
            <h1 className="font-bold pb-4 text-xl"> Transactions </h1>

            <form id='form' onSubmit={handleSubmit(onSubmit)}>
                <div className='grid gap-4' >
                    <div className='input-group'>
                        <input {...register('name')} className='form-input' type='text' placeholder='House rent, supplies...' />
                    </div>
                    <select {...register('type')} className='form-input'>
                        <option value='Investment' defaultValue> Investment </option>
                        <option value='Expenses' defaultValue> Expenses </option>
                        <option value='Savings' defaultValue> Savings </option>
                    </select>
                    <div className="input-group">
                        <input {...register('amount')} type="number" placeholder='Amount' className='form-input' />
                    </div>
                    <div className="submit-btn">
                        <button className='border py-2 text-white bg-indigo-500 w-full rounded-md'> Add </button>
                    </div>
                </div>
            </form>

            <List/>

        </div>
    );
};
